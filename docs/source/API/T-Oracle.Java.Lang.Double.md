---
title: Double
---

# Double
_namespace: [Oracle.Java.Lang](N-Oracle.Java.Lang.html)_



### Methods

#### doubleToRawLongBits
```csharp
Oracle.Java.Lang.Double.doubleToRawLongBits(System.Double)
```
Returns a representation of the specified floating-point value according to the IEEE 754 floating-point "double format" bit layout.
 
 Bit 63 (the bit that is selected by the mask 0x8000000000000000L) represents the sign of the floating-point number. Bits 62-52 (the bits that are selected by the mask 0x7ff0000000000000L) represent the exponent. Bits 51-0 (the bits that are selected by the mask 0x000fffffffffffffL) represent the significand (sometimes called the mantissa) of the floating-point number.
 If the argument Is positive infinity, the result Is 0x7ff0000000000000L.
 If the argument Is negative infinity, the result Is 0xfff0000000000000L.
 If the argument Is NaN, the result Is 0x7ff8000000000000L.
 In all cases, the result Is a long integer that, when given to the longBitsToDouble(long) method, will produce a floating-point value the same as the argument to doubleToLongBits (except all NaN values are collapsed to a single "canonical" NaN value).

|Parameter Name|Remarks|
|--------------|-------|
|value|a double precision floating-point number.|

_returns: the bits that represent the floating-point number._

#### longBitsToDouble
```csharp
Oracle.Java.Lang.Double.longBitsToDouble(System.Int64)
```
Returns the double value corresponding to a given bit representation. The argument is considered to be a representation of a floating-point value according to the IEEE 754 floating-point "double format" bit layout.
 If the argument Is 0x7ff0000000000000L, the result Is positive infinity.
 
 If the argument Is 0xfff0000000000000L, the result Is negative infinity.
 
 If the argument Is any value In the range 0x7ff0000000000001L through 0x7fffffffffffffffL Or In the range 0xfff0000000000001L through 0xffffffffffffffffL, the result Is a NaN. No IEEE 754 floating-point operation provided by Java can distinguish between two NaN values Of the same type With different bit patterns. Distinct values Of NaN are only distinguishable by use Of the Double.doubleToRawLongBits method.
 
 In all other cases, let s, e, And m be three values that can be computed from the argument:
 
 int s = ((bits >> 63) == 0) ? 1 : -1;
 int e = (Int())((bits >> 52) & 0x7ffL);
 Long m = (e == 0) ?
 (bits & 0xfffffffffffffL) << 1 :
 (bits & 0xfffffffffffffL) | 0x10000000000000L;
 
 Then the floating-point result equals the value of the mathematical expression s·m·2e-1075.
 Note that this method may Not be able To Return a Double NaN With exactly same bit pattern As the Long argument. IEEE 754 distinguishes between two kinds Of NaNs, quiet NaNs And signaling NaNs. The differences between the two kinds Of NaN are generally Not visible In Java. Arithmetic operations On signaling NaNs turn them into quiet NaNs With a different, but often similar, bit pattern. However, On some processors merely copying a signaling NaN also performs that conversion. In particular, copying a signaling NaN To Return it To the calling method may perform this conversion. So longBitsToDouble may Not be able To Return a Double With a signaling NaN bit pattern. Consequently, For some Long values, doubleToRawLongBits(longBitsToDouble(start)) may Not equal start. Moreover, which particular bit patterns represent signaling NaNs Is platform dependent; although all NaN bit patterns, quiet Or signaling, must be In the NaN range identified above.

|Parameter Name|Remarks|
|--------------|-------|
|bits|-|





