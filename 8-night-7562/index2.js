const readline = require("readline");

/* solution */
let C = 0;

const dir = [[1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2]];

// const getPos = (x, y, size, depth) => {
//     let pos = [];
//     let tmpPos = [[x - 2, y - 1], [x + 2, y - 1], [x - 2, y + 1], [x + 2, y + 1], [x - 1, y - 2],
//     [x + 1, y - 2], [x - 1, y + 2], [x + 1, y + 2]]

//     const newDepth = depth + 1;
//     tmpPos.forEach(v => {
//         let [vx, vy] = v
//         if (vx < size && vx >= 0 && vy < size && vy >= 0)
//             pos.push([vx, vy, newDepth]);
//     })
//     return (pos);
// }

const dfs = (size, current, target) => {
    console.log('currnet', current, 'target', target)
    let visit = Array.from({ length: size }, () => Array.from({length: size}).fill(false));
    let queue = [];
    const [cx, cy] = current;
    const [tx, ty] = target;

    queue.push([...current, 0]);
    visit[cx][cy] = true;
    while (queue.length > 0)
    {
        const [x, y, depth] = queue.shift()
        if (x == tx && y == ty)
        {
            console.log(depth)
            return;
        }
        for (let i = 0; i < 8; i++)
        {
            const nx = x + dir[i][0];
            const ny = y + dir[i][1];

            if (nx < size && nx >= 0 && ny < size && ny >= 0 && visit[nx][ny] == false)
            {
                visit[nx][ny] = true;
                queue.push([nx, ny, depth+1]);
            }
        }
    }
}

const solution = (input) => {
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

    console.log('list', list)
    solution(list); 
    process.exit();
});