//传统方法中,js通过构造函数实现类的概念,通过原型链实现继承
//在es6中,我们终于迎来了class

//TypeScript 中类的用法
//TypeScript 可以使用三种访问修饰符（Access Modifiers），
//分别是 public、private 和 protected

//public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
//private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
//protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的

class Animal {
    public name;
    public constructor(name) {
        this.name = name;
    }
}

let a1 = new Animal('Jack');
console.log(a1.name);
a1.name = 'Tom';
console.log(a1.name); // Tom


// readonly
// 只读属性关键字，只允许出现在属性声明或索引签名中。

//抽象类
// abstract用于定义抽象类和其中的抽象方法
//抽象类是不允许被实例化的
//抽象类中的抽象方法必须被子类实现
abstract class Animal1 {
    public name;
    public constructor(name) {
        this.name = name;
    }
    public abstract sayHi();
}

class Cat extends Animal1 {
    public sayHi() {
        console.log(`Meow, My name is ${this.name}`);
    }
}

let cat = new Cat('Tom');

//类的类型
class Animal2 {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    sayHi(): string {
        return `My name is ${this.name}`;
    }
}
