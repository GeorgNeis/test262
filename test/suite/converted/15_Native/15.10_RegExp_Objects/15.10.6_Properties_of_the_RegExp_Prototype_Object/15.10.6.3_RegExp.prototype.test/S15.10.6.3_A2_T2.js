// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * A TypeError exception is thrown if the this value is not an object for which the value of the internal [[Class]] property is "RegExp"
 *
 * @section 15.10.6.3
 * @path 15_Native/15.10_RegExp_Objects/15.10.6_Properties_of_the_RegExp_Prototype_Object/15.10.6.3_RegExp.prototype.test/S15.10.6.3_A2_T2.js
 * @description The tested object is Math
 */

__instance = Math;

__instance.test = RegExp.prototype.test;

//CHECK#1
try { 
  with(__instance) test("message to investigate");
  $ERROR('#1.1: __instance = Math; __instance.test = RegExp.prototype.test;  with(__instance) test("message to investigate")');
} catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#1.2: __instance = Math; __instance.test = RegExp.prototype.test;  with(__instance) test("message to investigate"). Actual: ' + (e));
  }
}


