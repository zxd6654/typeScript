//联合类型
//联合类型表示取值可以为多种类型中的一种
//联合类型使用 | 分割每个类型

let myFavoriteNumber4: string | number;
myFavoriteNumber4 = 'seven';
myFavoriteNumber4 = 7;

// myFavoriteNumber4 = true;


//访问联合类型的属性或方法
function getLengthFun(something: string | number): string {
    return something.toString();
}