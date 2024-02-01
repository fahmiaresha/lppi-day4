function compareNumbers(firstNumber, secondNumber){
    if(secondNumber == firstNumber){
        return -1;
    }else if(secondNumber >firstNumber){
        return true;
    }else{
        return false;
    }
}

console.log(compareNumbers(5,8));
console.log(compareNumbers(8,5));
console.log(compareNumbers(8,8));

function reverseString(str) {
     return str.split('').reverse().join('');
}

console.log(reverseString("Hello world and coders"));

function urutHuruf(text){
    // sort digunakan untuk array, bukan string, jadi perlu di split dlu
    return text.split('').sort().join('');
}

//buat algoritma sendiri selain sort di js
function urutHuruf2(str) {
    let text = str.split('');

    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < (text.length - i - 1); j++) {
            if (text[j] > text[j + 1]) {
                let temp = text[j];
                text[j] = text[j + 1];
                text[j + 1] = temp;
            }
        }
    }

   return text.join('');
}

console.log(urutHuruf2("azqam"));

function isAritmeticProgression(arr){
    let arrLength = arr.length;
    if(arrLength < 2 ){
        return false;
    }else{
        let difference = arr[0] - arr[1];
        for (let i = 2; i < arrLength; i++) {
            if (arr[i-1] - arr[i] !== difference) {
              return false;
            }
          }
        return true;
    }
}
console.log(isAritmeticProgression([2,4,6,8]));

function checkDistanceAB(str) {
    let foundA = false;
    let foundB = false;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === 'a') {
        foundA = true;
      } else if (str[i] === 'b' && foundA) {
        if (i - str.indexOf('a') >= 3) {
          return true;
        }
      }
    }

    return false;
  }
  
  // Contoh penggunaan
  const string1 = "you are boring";
  const string2 = "bacond and meat";  
  
  console.log(checkDistanceAB(string1));
  console.log(checkDistanceAB(string2));
  
  function hitungFPB(angka1, angka2) {
    let a = Math.abs(angka1);
    let b = Math.abs(angka2);
  
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
  
    return a;
  }
  
  const fpb1 = hitungFPB(12, 18); 
  const fpb2 = hitungFPB(24, 36);
  const fpb3 = hitungFPB(7, 14); 
  const fpb4 = hitungFPB(0, 8);  
  
  console.log("FPB 1:", fpb1);
  console.log("FPB 2:", fpb2);
  console.log("FPB 3:", fpb3);
  console.log("FPB 4:", fpb4);
  

  function isPrima(angka) {
    if (angka <= 1) {
      return false;
    }
    else{
        for (let i = 2; i < angka; i++) {
            if (angka % i === 0) {
              return false;
            }
          }
    }
    return true;
  }
  
  console.log(isPrima(4));   
  console.log(isPrima(3));  
  console.log(isPrima(5)); 

  function cariAngkaPrima(angkaPertama, angkaKedua) {
    let angkaPrima = [];
  
    for (let i = angkaPertama; i <= angkaKedua; i++) {
      if (isPrima(i)) {
         angkaPrima.push(i);
      }
    }
  
    return angkaPrima;
  }
  
  const angkaPrimaAntara10dan50 = cariAngkaPrima(1, 50);
  console.log(angkaPrimaAntara10dan50); 