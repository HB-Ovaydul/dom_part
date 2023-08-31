
/**
 *  send a massage with settimeout
 */

const start = document.getElementById('start');
const inputs = document.getElementById('inputs');
const h1 = document.getElementById('h1');
const rng = document.querySelector('.rng'); 

let get_value;
let clear_val;

// range.style.width = '50px';
start.addEventListener('click', function(){
      get_value = inputs.value;

     clear_val = setInterval(() => {
         h1.innerHTML = get_value;

         rng.style.width = `${rng_width(inputs.value, get_value)}%`;


         if (get_value == 0) {
            clearInterval(clear_val)
         }
         get_value--;
      }, 1000);


})



