//任意值
//任意值(Any)用来表示允许赋值为任意类型

let myFavoriteNumber: string = 'seven';
// myFavoriteNumber = 7;

//any类型,允许被赋值为任意类型
let myFavoriteNumber1: any = 'seven';
myFavoriteNumber1 = 7;

//任意值的属性和方法允许访问和调用
//声明一个变量为任意值之后,怼他的任何操作,返回的内容的类型都是任意值
let anyThing: any = 'hello';

anyThing.setName('Jerry');
anyThing.setName('Jerry').sayHello();
anyThing.myName.setFirstName('Cat');

console.log(anyThing.myName);
console.log(anyThing.myName.firstName);

//未声明的变量
//变量在声明的时候,未指定其类型,那么它会被识别为任意值类型
