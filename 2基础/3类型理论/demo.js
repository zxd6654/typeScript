//类型推论
//如果没有明确的指定类型,那么typescript会
//依照类型推论的规则推断出一个类型
var myFavoriteNumber2 = 'seven';
myFavoriteNumber2 = 7;
//如果定义的时候没有赋值,不管之后有没有赋值,
//都会被推断成any类型而完全不被类型检查
var myFavoriteNumber3;
myFavoriteNumber3 = 'seven';
myFavoriteNumber3 = 7;
