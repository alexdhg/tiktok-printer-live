# node-callable-instance

[![Build Status](https://travis-ci.org/CGamesPlay/node-callable-instance.svg?branch=master)](https://travis-ci.org/CGamesPlay/node-callable-instance) ![Dependencies](https://img.shields.io/david/cgamesplay/node-callable-instance.svg?style=flat) ![Download Size](https://img.shields.io/bundlephobia/min/callable-instance.svg?style=flat) [![npm](https://img.shields.io/npm/v/callable-instance)](https://www.npmjs.com/package/callable-instance) ![npm](https://img.shields.io/npm/dw/callable-instance)

This module allows you to create an ES6 class that is callable as a function. The invocation is sent to one of the object's normal prototype methods.

## Installation

```
npm install callable-instance
```

## Usage

`ExampleClass` instances have all of the normal properties and methods, but are actually functions as well.

```javascript
var CallableInstance = require("callable-instance");

class ExampleClass extends CallableInstance {
  constructor() {
    // CallableInstance accepts the name of the property to use as the callable
    // method.
    super("instanceMethod");
  }

  instanceMethod() {
    console.log("instanceMethod called!");
  }
}

var test = new ExampleClass();
// Invoke the method normally
test.instanceMethod();
// Call the instance itself, redirects to instanceMethod
test();
// The instance is actually a closure bound to itself and can be used like a
// normal function.
test.apply(null, [1, 2, 3]);
```

For TypeScript, you need to supply the arguments and return value of the function. Note that the types specified may differ from the argument and return value types of the target method; this is an error due to a limitation of TypeScript.

```typescript
import * as CallableInstance from "callable-instance";

class ExampleClass extends CallableInstance<[number], string> {
  constructor() {
    super("instanceMethod");
  }

  instanceMethod(input: number): string {
    return `${input}`;
  }
}
```

### Inherited Properties

All instances of CallableMethod are also an instances of [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function), and have all of Function's properties.

Libraries that accept functions will expect that they behave as Function objects do. For example, if you alter the semantics of the `call` or `apply` methods, library code may fail to work with your callable instance. In these cases, you can simply bind the instance method to the callable instance and pass that instead (e.g. `test.instanceMethod.bind(test)`).

This can also cause problems if your derived class wants to have a `name` or `length` property, which are built-in properties and not configurable by default. You can have your class disable the built-in descriptors of these properties to make them available for your use.

```javascript
var test = new ExampleClass();
test.name = "hello!";
console.log(test.name); // Will print 'instanceMethod'

class NameableClass extends CallableInstance {
  constructor() {
    super("instanceMethod");
    Object.defineProperty(this, "name", {
      value: void 0,
      enumerable: true,
      writeable: true,
      configurable: true,
    });
  }

  instanceMethod() {
    console.log(this.name);
  }
}

test = new NameableClass();
test.name = "hello!";
console.log(test.name); // Will print 'hello!'
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Credits

Information for the implementation came from [this StackOverflow answer](http://stackoverflow.com/a/36871498/123899).

## License

Distributed under the MIT license.
