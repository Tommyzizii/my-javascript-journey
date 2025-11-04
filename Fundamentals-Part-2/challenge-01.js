const calcAverage = (score1, score2, score3) => score1 + score2 + score3 / 3;

function checkWinner(avgDolphins, avgKoalas){

    if(avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    }else if(avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    }else{
        console.log(`No team wins...`);
    }
    
}

const scoreDolphins = calcAverage(44,23,71);
const scoreKoalas = calcAverage(65,54,49);

checkWinner(scoreDolphins, scoreKoalas)

