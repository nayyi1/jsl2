// UI 
const imgcontainer = document.getElementById('imgcontainer');
const img = document.querySelectorAll('#imgcontainer img');
const leftbtn = document.getElementById('left'),
    rightbtn = document.getElementById('right');

let idx=0;

leftbtn.addEventListener('click',()=>{
    idx--;
    chgimage();
    resetinterval();
    console.log(idx);
});

rightbtn.addEventListener('click',()=>{
    idx++;
    chgimage();  
    resetinterval();   
    console.log(idx);
});

function chgimage(){

    if(idx > img.length - 1){
        idx = 0;
    }else if(idx < 0){
        idx = img.length - 1;
    }
    
    imgcontainer.style.transform = `translate(${-idx * 500}px)`;

}

function imgrun(){
    idx++;
    chgimage();
}

let interval = setInterval(imgrun,2000);

function resetinterval(){
    clearInterval(interval);
    interval = setInterval(imgrun,2000);
}