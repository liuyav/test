// 原视类型
let a1: boolean = false;


// 任意型
// let c: any = '111';
// let d: any = 111;
// let e: any = false;

// 类型推论
// let f = '111';
// f = 111;
// let g;
// g = '111';
// g = 111;

// 联合类型
// let h: string | number;
// h = '111';
// h = 111;

// function cc(something: string | number): string {
//   return something.toString(); // string 与 number 的共有方法 toString();
// }

// let i: string | number;
// i = '111';  // 通过赋值字符串，推断出为 string 类型

// 接口
// interface Person {
//   name: string,
//   age: number,
//   sex?: string,
//   [propName: string]: any,
//   readonly work: String
// }

// let p1: Person = {
//   name: 'xm',
//   age: 18
// }

// let p2: Person = {
//   name: 'zs',
//   age: 20,
//   sex: 'man'
// }

// var p3: Person = {
//   name: 'ls',
//   age: 22,
//   hobby: 'sing、jump、play',
//   work: 'code'
// }

// var arr1: number[] = [1, 2, 3, 4, 5];
// var arr2: Array<number> = [1, 2, 3, 4, 5];

// interface NumArr {
//   [index: number]: number
// }

// var arr3: NumArr = [1, 2, 3, 4, 5]

// function arr11() {
//   let args: IArguments = arguments;
// }


// function add(a: number, b: number): number {
//   return a+b;
// }

// interface Fn {
//   (a: number, b: number): number
// }

// var add2: Fn = function(a: number, b: number) {
//   return a + b;
// }

// var add3: Fn = function(a: number, b?: number) {
//   return a + b;
// }

// var add4: Fn = function(a: number, b: number = 1) {
//   return a + b;
// }

// function fn1(a: number):number;
// function fn1(a: string):string;
// function fn1(a: number | string): number | string {
//   if (typeof a === 'number') {
//     return a + 1;
//   } else {
//     return a + 'b';
//   }
// }

// fn1(1)
// fn1('1')

// function fn2(a: string | number): number {
//   return (<string>a).length;
// }

// type str = string;
// let b1: str = '1223';
