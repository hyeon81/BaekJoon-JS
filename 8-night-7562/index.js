const readline = require("readline");

/* solution */
let C = 0;

const getPos = (x, y) => {
    let pos = [];

    pos.push([x - 2, y - 1])
    pos.push([x + 2, y - 1])
    pos.push([x - 2, y + 1])
    pos.push([x + 2, y + 1])
    pos.push([x - 1, y - 2])
    pos.push([x + 1, y - 2])
    pos.push([x - 1, y + 2])
    pos.push([x + 1, y + 2])

    return (pos);
}

const dfs = (size, current, target) => {
    console.log('size', size, 'current', current, 'target', target)
    // let visit = Array.from()
    if (current[0] == target[0] && current[1] == target[1])
        return 1;
    
}

const solution = (input) => {
    console.log('C', C, 'input', input)
    for (let i = 0; i < C * 3; i = i + 3)
    {
        dfs(input[i][0], input[i+1], input[i+2]);
    }
}

/* readline Module */
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


let input = [];
let list = [];

rl.on("line", function (line) {
   input.push(line) 
}).on("close", function () {

    input.forEach((val, idx) => {
        if (idx == 0) {
            C = parseInt(val[0]);
            return;
        }
        list.push(val.split(' ').map(v => parseInt(v)));
    });

    solution(list); 
    process.exit();
});