function CallableInstance(property) {
  var func = this.constructor.prototype[property];
  var apply = function() { return func.apply(apply, arguments); }
  Object.setPrototypeOf(apply, this.constructor.prototype);
  Object.getOwnPropertyNames(func).forEach(function (p) {
    Object.defineProperty(apply, p, Object.getOwnPropertyDescriptor(func, p));
  });
  return apply;
}
CallableInstance.prototype = Object.create(Function.prototype);

module.exports = CallableInstance;
