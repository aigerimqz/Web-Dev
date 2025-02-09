//1
// let i = 3;

// while (i) {
//   alert( i-- ); //last alert is 1
// }

//2
let i = 0;
while (++i < 5) alert( i );
//1, 2, 3, 4
let j = 0;
while (j++ < 5) alert( i );
//1, 2, 3, 4, 5

//3

for (let i = 0; i < 5; i++) alert( i );
//0, 1, 2, 3, 4
for (let i = 0; i < 5; ++i) alert( i );
//0, 1, 2, 3, 4

//4
for(let i = 2; i < 11; i++){
    if(i % 2 == 0){
        alert(i);
    }
}

//5
let k = 0;
while(k<3){
    alert( `number ${k}!` );
    k++;
}

//6
let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

//7
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }

  alert( i ); 
}