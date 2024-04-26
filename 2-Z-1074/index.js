/* readline Module */

// 문제 풀이
// input example


let N = 0;
let r = 0;
let c = 0;
let arr;
let count = 0;
//r행 c열을 몇 번째로 방문했는지 출력한다.

const recur = (x, y, num) => {
    const half = num / 2;
    if (c >= x + num || r >= y + num)
    {
        count += num * num;
        return;
    }
    if (x == c && y == r)
    {
        console.log(count);
        process.exit();
    }
    recur(x, y, half)
    recur(x + half, y, half)
    recur(x, y + half, half)
    recur(x + half, y + half, half)
}


const solution = () =>{
    const num = 2 ** N;
    arr = Array.from({ length: num }, () => Array.from({ length: num }, () => 0));

    recur(0, 0, num)
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
        if (idx == 1)
        {
            r = parseInt(val);
            return;
        }
        if (idx == 2)
        {
            c = parseInt(val);
            return;
        }
        list.push(val.split(' ').map((el) => parseInt(el)));
    });

    solution(list); // 문제 풀이 함수 호출    
    process.exit(); // 프로세스 종료
});