//布尔值
let isDone: boolean = false;

//注意，使用构造函数 Boolean 创造的对象不是布尔值
// let createdByNewBoolean: boolean = new Boolean(1);

let createdByNewBoolean1: Boolean = new Boolean(1);

let createdByNewBoolean2: boolean = Boolean(1);


//数值
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;


//字符串
let myName: string = 'Tom';
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;

//空值 
//在js中没有空值(Void)的概念,在ts中,可以用void表示没有任何返回值的函数
function alertName(): void {
    alert('My name is Tom');
}
//只能复制undefined或null
let unusable: void = undefined;

//Null和Undefined
//在ts中,可以使用null和undefined来定义这两个原始数据类型
let u: undefined = undefined;
let n: null = null;