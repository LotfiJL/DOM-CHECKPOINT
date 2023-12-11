const arr =['LAIT', 'CHOCOLAT', 'CHIPS']
const LAIT = document.querySelector('.card-title');
LAIT.textContent=arr[0];

const CHOCOLAT = document.querySelector('.card2-title');
CHOCOLAT.textContent=arr[1];

//console.log('chocolat');

const Prod1 = document.querySelector('.card-img');
Prod1.style.width = '100px';
Prod1.style.height = 'auto';


const Prod2 = document.querySelector('.card1-img');
Prod2.style.width = '100px';
Prod2.style.height = 'auto';



const items = document.getElementsByClassName('card');
const Tprice = document.querySelector('.Totalprice'); 

for (const item of items) {
  const btnplus = item.querySelector('.Plus');
  const btnmoins = item.querySelector('.moins');
  const remove = item.querySelector('.remove');




  btnplus.addEventListener('click', function() {
    const qty = item.querySelector('.quantite');
    qty.textContent = parseInt(qty.textContent) + 1;
    TotalPrice();
  });


  
  btnmoins.addEventListener('click', function() {
    const qtit = item.querySelector('.quantite');
    if (parseInt(qtit.textContent) > 1) {
      qtit.textContent = parseInt(qtit.textContent) - 1;
      TotalPrice();
    }
  });

  remove.addEventListener('click', function() {
    item.remove();
    TotalPrice();
  });

  const btnplus2 = item.querySelector('.Plus2');
  const btnmoins2 = item.querySelector('.moins2');
  const remove2 = item.querySelector('.remove2');

  btnplus2.addEventListener('click', function() {
    const qt = item.querySelector('.quantite2');
    qt.textContent = parseInt(qt.textContent) + 1;
    TotalPrice();
  });

  btnmoins2.addEventListener('click', function() {
    const qtyt = item.querySelector('.quantite2');
    if (parseInt(qtyt.textContent) > 1) {
      qtyt.textContent = parseInt(qtyt.textContent) - 1;
      TotalPrice();
    }
  });

  remove2.addEventListener('click', function() {
    item.remove();
    TotalPrice();
  });



}


function TotalPrice() {
  let tot = 0;
  for (const item of items) {
    const nbr1 = parseInt(item.querySelector('.quantite').textContent);
    const nbr2 = parseInt(item.querySelector('.quantite2').textContent);
    const PU1 = parseInt(item.querySelector('.prod1price').textContent);
    const PU2 = parseInt(item.querySelector('.prod2price').textContent);
    tot += nbr1 * PU1 + nbr2 * PU2;
  }
  Tprice.textContent = tot + "$";
}
