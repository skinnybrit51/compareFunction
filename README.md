# compareFunction

[![Build Status](https://travis-ci.org/skinnybrit51/compareFunction.svg?branch=master)](https://travis-ci.org/skinnybrit51/compareFunction)
[![NPM version](https://badge.fury.io/js/comparefunction.svg)](http://badge.fury.io/js/comparefunction)

#### Description
Comparator helper to compare two values of a specific variable type. Usually used with ```array.sort```

#### Installation

```npm install comparefunction```

#### Using
```
var compareFunction = require('comparefunction');

var dateArray = ['2012-01-01', '2011-01-01', '2013-01-01', '2009-01-01'];
dateArray.sort(compareFunction.date);

console.log(dateArray);
['2009-01-01', '2011-01-01', '2012-01-01', '2013-01-01'];

```

#### Supported Types
- ```compareFunction.string```
- ```compareFunction.boolean```
- ```compareFunction.integer```
- ```compareFunction.float```
- ```compareFunction.date```
