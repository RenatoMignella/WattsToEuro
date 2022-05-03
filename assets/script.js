

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



// Calculating wats

function calculateWats() {


    const amount = document.querySelector ('#amount');
    const principal = parseFloat(amount.value);

   // Eletric Ireland logic calculation
    let resultDay = (((principal / 1000) * 0.2112) +0.42);
     let resulrDiv = resultDay  * 0.135;
     let finalResult =  resultDay + resulrDiv;

     let nightResult = (((principal / 1000) * 0.2112)  +0.32);

     let  resulrDivn = nightResult  * 0.135;
     let finalResultN =  nightResult + resulrDivn;


     //  Show calculated results
     document.querySelector('#dayconsumpition').innerHTML = `1 hour Consumption at day € ${finalResult.toFixed(2)}`;
     document.querySelector('#nightconsumpition').innerHTML = `1 hour Consumption at night € ${finalResultN.toFixed(2)}`;


      //disable loading
      document.querySelector('#loading').style.display = 'none';


      // Show results
    document.querySelector('#dayconsumpition').style.display = "block";
    document.querySelector('#nightconsumpition').style.display = "block";


}