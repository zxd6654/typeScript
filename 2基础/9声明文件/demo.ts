//当时用第三方库时,我们需要引用呀的声明文件,才能获得对应的代码补全
//接口提示灯功能

// declare var 声明全局变量
// declare function 声明全局方法
// declare class 声明全局类
// declare enum 声明全局枚举类型
// declare namespace 声明全局对象
//interface和type 声明全局类型
// export导出变量
// export namespace 导出对象
// export default es6默认导出
// exprot= commonjs导出模块
// export as namespace UMD库声明全局变量
// declare global 扩展全局变量
// declare module 扩展模块
// /// <reference /> 三斜线指令

declare var jQuery: (selector: string) => any;

jQuery('#foo');