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
    line = line.reverse();
    for (let i = 0; i < line.length; i++)
    {
        dp[i] = 1;
        for (let j = 0; j < i; j++)
        {
            // 이전 값이 현재 값보다 작고, 현재 dp값이 이전 dp값보다 크다면
            if (line[i] > line[j] && dp[i] < dp[j] + 1)
            {
                dp[i] = dp[j] + 1;
            }
        }
    }
    console.log(Math.max(...dp));
};


