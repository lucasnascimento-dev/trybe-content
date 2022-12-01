const sortChecker = (bet, aleatoryNumber) => bet === aleatoryNumber;

const lotteryResult = (bet, callback) => {
    const aleatoryNumber = Math.floor(Math.random()* 5 + 1);
    return callback(bet, aleatoryNumber) ? 'Lucky day, you won!' : 'Try Again!';
}

console.log(lotteryResult(2, sortChecker));