@echo off

SET tool=closure-compiler-v20181125.jar

java -jar %tool% --js_output_file=../linq.min.js ../linq.js
java -jar %tool% --js_output_file=../marked.min.js ../marked.js
java -jar %tool% --js_output_file=../vbcode.min.js ../vbcode.js
java -jar %tool% --js_output_file=../visualbasic.wasm.min.js ../visualbasic.wasm.js
java -jar %tool% --js_output_file=../webgl.render.min.js ../webgl.render.js
java -jar %tool% --js_output_file=../wast.code.min.js ../wast.code.js