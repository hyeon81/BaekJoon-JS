const readline = require("readline");

/* solution */
let V = 0;
let N = 0;
let M = 0;

const dfs = (tree) => {
    let willChecked = []
    let checked = []

    willChecked.push(parseInt(V));
    while (willChecked.length != 0)
    {
        let node = willChecked.pop();
        if (!checked.includes(node))
        {
            checked.push(node);
            let nodes = (tree[node - 1])
            if (nodes)
                willChecked.push(...(nodes.sort((a, b) => a - b).reverse()));
        }
    }
    console.log(checked.join(' '));
}

//너비 우선 탐색
const bfs = (tree) => {
    let willChecked = []
    let checked = []

    willChecked.push(parseInt(V));
    while (willChecked.length != 0)
    {
        let node = willChecked.shift();
        if (!checked.includes(node))
        {
            checked.push(node);
            let nodes = tree[node - 1]
            if (nodes)
                willChecked.push(...nodes.sort((a, b) => a - b));
        }
    }

    console.log(checked.join(' '));
}

const solution = (input) => {
    let tree = Array.from({ length: N }, () => Array.from([]));
    input.forEach((v) => {
        tree[parseInt(v[0]) - 1].push(parseInt(v[1]))
        tree[parseInt(v[1]) - 1].push(parseInt(v[0]))
    })

    dfs(tree)
    bfs(tree)
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
            const split = val.split(' ');
            N = split[0];
            M = split[1];
            V = split[2];
            return;
        }
        list.push(val.split(' '));
    });

    solution(list); 
    process.exit();
});