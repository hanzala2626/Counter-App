const count = document.getElementById('count');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');

increase.addEventListener('click',()  =>{
count.innerHTML++;
applyColor()
});


decrease.addEventListener('click',()  =>{
    if(count.innerHTML==0){
        document.getElementById('decrease').disable=true;
    }else{
          count.innerHTML--;
}
applyColor()
    
    });

   reset.addEventListener('click',()  =>{
        count.innerHTML=0;
        applyColor()
        });

function applyColor() {
    if(count.innerHTML > 0){
        count.style.color = 'green';
    }else if(count.innerHTML < 0){
        count.style.color = 'red'
    }else{
        count.style.color = 'black';
    }
}        
