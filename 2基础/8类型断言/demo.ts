//类型断言可以用来手动指定一个值的类型

//语法
//<类型>值
//值as类型

//将一个联合类型的变量指定为一个更加具体的类型
function getLength(something: string | number): number {
    if ((<string>something).length) {
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
}

getLength(1);