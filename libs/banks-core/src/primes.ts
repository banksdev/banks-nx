
const isPrime = (num: number) => {
    let count = 2;
    while(count < (num / 2)+1){
       if(num % count !== 0){
          count++;
          continue;
       };
       return false;
    };
    return true;
 };
 export const primeUpto = (num: number) => {
    if(num < 2){
       return [];
    };
    const res = [2];
    for(let i = 3; i <= num; i++){
       if(!isPrime(i)){
          continue;
       };
       res.push(i);
    };
    return res;
 };
