//[类型+方括号]表示法
let fibonacci: number[] = [1, 2, 3, 5];

// let fibonacc1: number[] = [1, 2, 3, '4', 5];报错

//数组泛型
let fibonacci1: Array<number> = [1, 1, 2, 3, 5];

//用接口表示数组
interface NumberArray {
    [index: number]: number;
}

let fibonacci2: NumberArray = [1, 1, 2, 3, 5];

//类数组
function sum() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}

//any 在数组中的应用
let list: any[] = ['xcatliu', 25, { website: 'http://xcatliu.com' }];