//函数声明
//一个函数有输入和输出,要在ts中对其进行约束,
//需要吧输入和输出考虑到,其中函数声明的类型定义较简单
function sum1(x, y) {
    return x + y;
}
//注意，输入多余的（或者少于要求的）参数，是不被允许的
//函数表达式
var mySum = function (x, y) {
    return x + y;
};
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
//可选参数
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
var tomcat = buildName('Tom', 'Cat');
var tom4 = buildName('Tom');
//参数默认值
//在es6中,我们允许给函数的参数添加默认值,ts会将添加了默认值的参数识别为可选参数
function buildName1(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Cat'; }
    return firstName + ' ' + lastName;
}
var tomcat1 = buildName('Tom', 'Cat');
var tom5 = buildName('Tom');
//剩余参数
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
var a = [];
push(a, 1, 2, 3);
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
