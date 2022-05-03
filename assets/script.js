

// Keep resuls hided
document.querySelector('#dayconsumpition').style.display = 'none';
document.querySelector('#nightconsumpition').style.display = 'none';
//disable loading
document.querySelector('#loading').style.display = 'none';
// keep focus on Input (love math ref)
document.querySelector('.form-control').focus();


//  Listen for submit
let inp = document.querySelector('.form-control');
document.querySelector('#calculate-form').addEventListener('submit',function(e){

    if (inp.value == 0) {
        alert('Number must to be bigger than 0');
      
        
    } else {
        
        setTimeout(calculateWats , 2500);
    //hide results if submit clickd again 
    document.querySelector('#dayconsumpition').style.display = 'none';
    document.querySelector('#nightconsumpition').style.display = 'none';
    document.querySelector('#loading').style.display = 'block';

    e.preventDefault();
    }
   
    
});