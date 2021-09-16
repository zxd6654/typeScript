//对象的类型--接口
//在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型
//在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，
//而具体如何行动需要由类（classes）去实现（implement）。
var tom = {
    name: 'Tom',
    age: 25
};
var tom1 = {
    name: 'Tom'
};
var tom2 = {
    name: 'Tom',
    gender: 'male'
};
var tom3 = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
};
tom.id = 9527;
