//对象的类型--接口
//在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型
//在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，
//而具体如何行动需要由类（classes）去实现（implement）。


//赋值的时候，变量的形状必须和接口的形状保持一致。
interface Person {
    name: string;
    age: number;
}

let tom: Person = {
    name: 'Tom',
    age: 25
}

//可选属性 不允许添加未定义的属性
interface Person1 {
    name: string;
    age?: number;
}

let tom1: Person1 = {
    name: 'Tom'
}

//任意属性
//有的时候我们希望一个接口允许有任意的属性
//一旦定义了任意属性,那么确定属性和可选属性的类型都必须是它的类型的子集
interface Person2 {
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom2: Person2 = {
    name: 'Tom',
    gender: 'male'
}

//只读属性
//有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 readonly 定义只读属性
interface Person3 {
    readonly id: number;
    name: string;
    age?: number;
    [propNmae: string]: any;
}

let tom3: Person3 = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
}

// tom.id = 9527;