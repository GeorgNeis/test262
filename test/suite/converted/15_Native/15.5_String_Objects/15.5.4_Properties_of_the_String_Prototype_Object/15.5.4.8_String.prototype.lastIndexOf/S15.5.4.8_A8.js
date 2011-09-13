// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The String.prototype.lastIndexOf.length property has the attribute DontEnum
 *
 * @section 15.5.4.8
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.8_String.prototype.lastIndexOf/S15.5.4.8_A8.js
 * @description Checking if enumerating the String.prototype.lastIndexOf.length property fails
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#0
if (!(String.prototype.lastIndexOf.hasOwnProperty('length'))) {
  $FAIL('#0: String.prototype.lastIndexOf.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.lastIndexOf.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////
// CHECK#1
if (String.prototype.lastIndexOf.propertyIsEnumerable('length')) {
  $ERROR('#1: String.prototype.lastIndexOf.propertyIsEnumerable(\'length\') return false. Actual: '+String.prototype.lastIndexOf.propertyIsEnumerable('length'));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
// CHECK#2
count=0;

for (p in String.prototype.lastIndexOf){
  if (p==="length") count++;
}

if (count !== 0) {
  $ERROR('#2: count=0; for (p in String.prototype.lastIndexOf){if (p==="length") count++;}; count === 0. Actual: '+count );
}
//
//////////////////////////////////////////////////////////////////////////////
