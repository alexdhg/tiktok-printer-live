type Func<Args extends unknown[], Return> = (...argv: Args) => Return;
interface ICallableInstance {
  // prettier-ignore
  new <Args extends unknown[], Return>(property: string | symbol):
    Func<Args, Return>;
}
declare const CallableInstance: ICallableInstance;
export = CallableInstance;
