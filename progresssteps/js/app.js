// UI

const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');
const next = document.getElementById('next'),
      prev = document.getElementById('prev');
      

let currentactive = 1;

next.addEventListener('click',()=>{
    currentactive++;
    if(currentactive > circles.length){
        currentactive = circles.length;
    }
    // console.log(currentactive);
    update();
});

prev.addEventListener('click',()=>{
    currentactive--;
    if(currentactive < 1){
        currentactive = 1;
    }
    // console.log('left');
    update();
});

function update(){

    circles.forEach((circle,index)=>{
        if(index < currentactive){
            circle.classList.add('active');
        }else{
            circle.classList.remove('active');
        }

        const actives = document.querySelectorAll('.active');
        // console.log(actives.length);
         // console.log(actives.length/circles.length);
          // console.log(((actives.length - 1)/(circles.length - 1)) *100);

          progress.style.width = ((actives.length - 1)/(circles.length - 1)) *100 + "%";

          if(actives.length === 1){
              prev.disabled = true;
          }else{
              prev.disabled = false;
          }



    })

}