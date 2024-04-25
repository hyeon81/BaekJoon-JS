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
let white = 0;
let blue = 0;

const recur = (start, n, yPos, input) => {
    console.log('n', n)
    if (n < 2)
    {
        if (input[yPos][start] == 1)
            blue++;
        else
            white++;
        return;
    }
    else
    {
        let color = input[yPos][start];
        console.log('color', color)
        let flag = 0;
        outerLoop: for (let i = yPos; i < (yPos + n); i++)
        {
            for (let j = start; j < (start + n); j++)
            {
                console.log(i, j)
                if (color != input[i][j])
                {
                    flag = 1;
                    break outerLoop;
                }
            }
        }
        console.log('flag', flag)
        if (flag == 1)
        {
            //1사분면 사각형
            recur(n/2, n/2, n/2, input);
            //2사분면 사각형
            recur(n/2 + n/4, n/2, n/2, input)
            //3사분면 사각형
            recur(0, n/2, n/2, input)
            //4사분면 사각형
            recur(n/2, n/2, n/2, input)
        }
        else
        {
            if (color == 1)
                blue++;
            else
                white++;
        }
        console.log('==============')
        return
    }
}


const solution = (input) =>{
    console.log('N', N)
    //1사분면 사각형
    recur(0, N/2, 0, input);
    //2사분면 사각형
    recur(N/2, N/2, 0, input)
    //3사분면 사각형
    recur(0, N/2, N/2, input)
    //4사분면 사각형
    recur(N/2, N/2, N/2, input)
    console.log(white)
    console.log(blue)
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

    solution(list); // 문제 풀이 함수 호출    
    process.exit(); // 프로세스 종료
});