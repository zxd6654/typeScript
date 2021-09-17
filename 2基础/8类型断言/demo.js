//类型断言可以用来手动指定一个值的类型
function isFish(animal) {
    if (typeof animal.swim === 'function') {
        return true;
    }
    return false;
}
//使用类型断言时一定要格外小心，尽量避免断言后调用方法或引用深层属性，以减少不必要的运行时错误。
window.foo = 1;
