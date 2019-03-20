/*** 
 * 纯函数的2个特点
 * 1. 相同的输入一定是相同的输出
 * 2. 永远不能修改参数的值
*/

let sum = (a,b)=>a+b;
let sum2 = a=> a+ Math.random()  //不是纯函数


function notPure(total,a){   //不是纯函数
    total.b -= a
}
let total={b:200};
notPure(total, 100)
console.log(total)