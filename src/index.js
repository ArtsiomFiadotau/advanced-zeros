module.exports = function getZerosCount(number, base) {
  let dividers = [], i = 0, base1 = base;
  while (base1%2 == 0) {
    base1=base1/2;
    dividers[i] = 2;
    i++;
    }
  if (base1>1) {
    let j = 3;
    let k = 0;
    while (j<=base1) {
       if (base1%j == 0) {
        while (base1%j == 0) {
          dividers[i] = j;
          base1 = base1/j;
          i++;
          k = 1;
        }
        }
          j = j+2;
      }
        if (k == 0) {
          dividers[i] = base;
        }
    }    
     let count=0, zerosCount = 999999999, samediv = 1;
       for (let p = 0;p<dividers.length;p++) {
           samediv = 1;
           while (dividers[p+1] == dividers[p]) {
              p++;
              samediv++;
          }
            count=0;
            let ito=dividers[p];
              while (number/ito>1) {
                count=count+Math.floor(number/ito);
                ito = ito*dividers[p];
                }
                count=Math.floor(count/samediv);
                 if (count<zerosCount) {
                zerosCount = count;
            }
    }
      return(zerosCount);
}