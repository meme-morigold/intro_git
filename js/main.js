'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    // 配列の場合
   const results = ['大吉', '中吉', '凶', '末吉'];
  //  const n = Math.floor(Math.random() * results.length);
  //  btn.textContent = results[n];
   btn.textContent = results[Math.floor(Math.random() * results.length)];
  
   /* switch文の場合
   switch (n) {
     case 0:
       btn.textContent = '大吉';
       break;
     case 1:
       btn.textContent = '中吉';
       break;
     case 2:
       btn.textContent = '小吉';
       break;
   }
   */

   /* 確率の場合 
   const n = Math.random();

   if ( n < 0.05){
     btn.textContent = '大吉';
   }else if ( n < 0.2 ){
     btn.textContent = '中吉';
   }else{
     btn.textContent = '凶';
   }
   */
  } );
}