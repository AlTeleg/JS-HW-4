function numberGuessGame (numberToGuess, logNumber) {
    let promise = new Promise((resolve, reject) => {
        const fs = require('fs');
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question('\nGuess the number!\n', numberGuessTry => {
            resolve(numberGuessTry);
            rl.close();
        })
    });

    promise.then(numberGuessTry => {
        const fs = require('fs');
        if (numberGuessTry > numberToGuess) {
            answer = "more number. Another try:\n";
            numberGuessGame(numberToGuess, logNumber)                               
        } 
        else if (numberGuessTry < numberToGuess) {
            answer = "less number. Another try!\n";
            numberGuessGame(numberToGuess, logNumber);
        }
        else {
            answer = "correct. You won!\n\n";
        }
        if (!(fs.existsSync('logs'))) {
            fs.mkdir('logs', err => {
                if(err) throw err;
                console.log('Папка logs успешно создана');
            })
        }
        fs.appendFile(`logs/number_game_log_${logNumber}.txt` , numberGuessTry + `\nYour guess is ${answer}\n`, (err) => {
            if (err) {
                console.log(err);
            }
            else {
                // console.log(\nLog succesfully written!")
                // console.log("It has the following contents:");
                // console.log(fs.readFileSync("number_game_log.txt", "utf8");
            }
        })
        console.log(`\nYour guess is ${answer}`);  
    })           
}       

numberGuessGame(Math.round(Math.random()*100), 1)


