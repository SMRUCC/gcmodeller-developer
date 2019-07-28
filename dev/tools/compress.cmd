@echo off

SET tool=closure-compiler-v20181125.jar

java -jar %tool% --js_output_file=../../lib/linq.min.js ../build/linq.js
java -jar %tool% --js_output_file=../../lib/marked.min.js ../build/marked.js
java -jar %tool% --js_output_file=../../lib/vbcode.min.js ../build/vbcode.js
java -jar %tool% --js_output_file=../../lib/blog.min.js ../build/blog.js
java -jar %tool% --js_output_file=../../lib/vbcode.min.js ../build/vbcode.js

pause