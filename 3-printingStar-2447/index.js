/* readline Module */

let N = 0;
let arr;

const printStar = (x, y, n) => {
    arr[x][y] = "*";
    arr[x][y + 1] = "*";
    arr[x][y + 2] = "*";
    arr[x + 1][y] = "*";
    arr[x + 1][y + 2] = "*";
    arr[x + 2][y] = "*";
    arr[x + 2][y + 1] = "*";
    arr[x + 2][y + 2] = "*";
}


const recur = (x, y, n) => {
    //가운데 일때는 그리지 않는다
    if (n == 3)
        return printStar(x,y,n);

    //1구역
    recur(0 + x, 0 + y, n/3)
    //2구역
    recur(0 + x, n/3 + y, n/3)
    //3구역
    recur(0 + x, n/3*2 + y, n/3)
    //4구역
    recur(n/3 + x, 0 + y, n/3)
    //5구역
    // recur(n/3 + x, n/3 + y, n/3)
    //6구역
    recur(n/3 + x, n/3*2 + y, n/3)
    //7구역
    recur(n/3*2 + x, 0 + y, n/3)
    //8구역
    recur(n/3*2 + x, n/3 + y, n/3)
    //9구역
    recur(n/3*2 + x, n/3*2 + y, n/3)
}


const solution = () =>{
    arr = Array.from({ length: N }, () => Array.from({ length: N }, () => ' '));
    recur(0, 0, N);
    for (let i = 0; i < N; i++)
    {
        let str = arr[i].join('')
        console.log(str)
    }
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
        // list.push(val.split(' ').map((el) => parseInt(el)));
    });

    solution(list); // 문제 풀이 함수 호출    
    process.exit(); // 프로세스 종료
});