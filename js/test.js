// let price = 50;
// let rate = 1.2;
// price *= rate;
// console.log(price);

//*  Вичислення балансу після зняття коштів!  *
// let balance = parseInt(10);
// let withdraw = parseInt(10);
// balance = balance -= withdraw;
// console.log(balance);

//?  Перенос на новий рядок " \n "  ?
// console.log("One \nTwo \nThree");

//?  Створення табуляції  \t  ?
// console.log("\t hey \t there \t One \t Enter");

//?  Приклад тернарного оператора  ?
// let age = 42;
// let isAdult = age < 18 ? "Too young" : "Old enough";
// console.log(isAdult);

//?  Програма while перерахунок від 50 до 0  ?
/**let i = 50;
while (i >= 0) {
   console.log(i);
   i--;
}
*/
/** 
let width = parseInt(readLine(), 10);
let length = parseInt(readLine(), 10);
//Complete the function
function area(x, y) {
   return x * y;
}
//call the function
console.log(area(width, length));
*/

/*  --- Game ---
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="./styles.css">
    <title>RPG - Dragon Repeller</title>
    <script src="./script.js"></script>
  </head>
  <body>
    <div id="game">
      <div id="stats">
        <span class="stat">XP: <span><strong><span id="xpText">0</span></strong></span> </span>
        <span class="stat">Health: <span><strong><span id="healthText">100</span></strong></span></span>
        <span class="stat">Gold: <span><strong><span id="goldText">50</span></strong></span></span>
      </div>
      <div id="controls"></div>
      <div id="monsterStats"></div>
      <div id="text"></div>
    </div>
  </body>
</html>
*/
let drawCats = function (howManyTimes) {
   for (let i = 0; i < howManyTimes; i++) {
      console.log(i + " =^.^= ");
   }
};
drawCats(10);
