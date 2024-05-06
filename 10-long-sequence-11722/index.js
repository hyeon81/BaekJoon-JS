const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.output,
});

let count = 0;
rl.on("line", (line) => {
    if (!count) {
        count = Number(line);
    } else {
        main(line);
        rl.close();
    }
}).on("close", () => {
    process.exit();
});

const main = (line) => {
    let dp = [];
    for (let i = 0; i < line.length(); i++)
    {
        dp[i] = 1;

        for (let i = 2; i <= n; i++)
        {
            d[i] = 1;
            for (let j = 0; j < i; j++)
            {
            }
        }
    }
};