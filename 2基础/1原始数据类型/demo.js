//布尔值
var isDone = false;
//注意，使用构造函数 Boolean 创造的对象不是布尔值
var createdByNewBoolean = new Boolean(1);
var createdByNewBoolean1 = new Boolean(1);
var createdByNewBoolean2 = Boolean(1);
//数值
var decLiteral = 6;
var hexLiteral = 0xf00d;
// ES6 中的二进制表示法
var binaryLiteral = 10;
// ES6 中的八进制表示法
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
//字符串
var myName = 'Tom';
var myAge = 25;
// 模板字符串
var sentence = "Hello, my name is " + myName + ".\nI'll be " + (myAge + 1) + " years old next month.";
//空值 
//在js中没有空值(Void)的概念,在ts中,可以用void表示没有任何返回值的函数
function alertName() {
    alert('My name is Tom');
}
//只能复制undefined或null
var unusable = undefined;
//Null和Undefined
//在ts中,可以使用null和undefined来定义这两个原始数据类型
var u = undefined;
var n = null;
