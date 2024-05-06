// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.output,
// });

// let count = 0;
// rl.on("line", (line) => {
//     if (!count) {
//         count = Number(line);
//     } else {
//         main(line);
//         rl.close();
//     }
// }).on("close", () => {
//     process.exit();
// });

const main = (line) => {
    line = line.map(v => (v.map(v2=> parseInt(v2))))
    // {color: 0, cost: 0}[]
    let info = [];
    console.log('line', line)

    for (let i = 0; i < line.length; i++)
    {
        const min = Math.min(...line[i]);
        const index = line[i].indexOf(min)
        info[i] = {}
        info[i].cost = min;
        info[i].color = index;
        line[i].slice(index)
        console.log('line', line)
    }

    let sum = 0;
    info.forEach(v => {
        sum += v.cost
    })
    console.log('info', info)
    console.log('sum', sum)
};

//26 40 83
//49 60 57
//13 89 99
main([['26', '40', '83'], ['49', '60', '57'], ['13', '89', '99']])


