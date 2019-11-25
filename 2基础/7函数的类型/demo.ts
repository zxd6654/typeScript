
//函数声明
//一个函数有输入和输出,要在ts中对其进行约束,
//需要吧输入和输出考虑到,其中函数声明的类型定义较简单
function sum1(x: number, y: number): number {
    return x + y;
}

//注意，输入多余的（或者少于要求的）参数，是不被允许的

//函数表达式
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
}

//注意不要混淆ts中的=>和es6中的=>
//在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。

//用借口定义函数的形状
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
    return source.search(subString) !== -1;
}

//可选参数
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let tomcat = buildName('Tom', 'Cat');
let tom4 = buildName('Tom');

//参数默认值
//在es6中,我们允许给函数的参数添加默认值,ts会将添加了默认值的参数识别为可选参数

function buildName1(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName;
}
let tomcat1 = buildName('Tom', 'Cat');
let tom5 = buildName('Tom');

//剩余参数
function push(array: any[], ...items: any[]) {
    items.forEach(function (item) {
        array.push(item);
    });
}

let a = [];
push(a, 1, 2, 3);

//重载
//重载允许一个函数接收不同数量或类型的参数时,作出不同的处理
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}