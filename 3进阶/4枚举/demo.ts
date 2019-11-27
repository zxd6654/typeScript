//枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等。
enum Days { Sun, Mon, Tue, Wed, Thu, Fri, Sat };

console.log(Days["Sun"] === 0); // true
console.log(Days[6] === "Sat"); // true