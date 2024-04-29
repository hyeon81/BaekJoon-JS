/* readline Module */

// 문제 풀이
// input example

// 8
// 1 1 0 0 0 0 1 1
// 1 1 0 0 0 0 1 1
// 0 0 0 0 1 1 0 0
// 0 0 0 0 1 1 0 0
// 1 0 0 0 1 1 1 1
// 0 1 0 0 1 1 1 1
// 0 0 1 1 1 1 1 1
// 0 0 1 1 1 1 1 1

let N = 0;

const solution = (input) =>{
    input.sort();
    console.log('input', input)

}


/* readline Module */
const readline = require("readline");
const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout,
    
});


let input = [];
let list = [];

rl.on("line", function (line) {

   input.push(line) // 입력받은 여러줄, line
   // rl.close()이 없기에 계속 입력, 로컬에서 입력을 중지할려면 입력을 한 후 'ctrl + D'을 통해 입력 종료
   
}).on("close", function () {

    // 형변환, 구분자(띄어쓰기)기준으로 배열에 삽입
    input.forEach((val, idx) => {
        if (idx == 0) {
            N = parseInt(val);
            return;
        }
        list.push(val.split(' ').map((el) => parseInt(el)));
    });

    solution(list[0]); // 문제 풀이 함수 호출    
    process.exit(); // 프로세스 종료
});