/* readline Module */

let N = 0;
let M = 0;

const solution = (input) => {
    console.log('input', input);
    let a = []
    let b = []
    input.forEach((v, idx) => {
        if (idx < N)
            a.push(v)
        else
            b.push(v)
    })

    let visit = [...b].map((v) => [...v].fill(false))
    
    //한 줄씩 돌면서 일치하지 않은 부분에 대해 뒤집는다.
    a.forEach((v) => {
        console.log('v', v)
    })
    console.log('a', a, 'b', b, 'visit', visit)
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
            const split = val.split(' ');
            N = split[0];
            M = split[1];
            return;
        }
        list.push(val.split(''));
    });

    solution(list); // 문제 풀이 함수 호출    
    process.exit(); // 프로세스 종료
});