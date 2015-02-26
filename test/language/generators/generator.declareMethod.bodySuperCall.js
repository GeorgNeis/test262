// Copyright 2015 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
 GeneratorMethod early SyntaxError when super is called
 directly inside generator body
es6id: 14.4.1
author: Sam Mikes
description: GeneratorMethod error if HasDirectSuper in body
negative: SyntaxError
---*/

var obj = {
    *foo(a) {
        super();
    }
};
