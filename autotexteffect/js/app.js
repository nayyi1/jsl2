// UI
const textel = document.getElementById('text');
const speedel = document.getElementById('speed');
const pgh = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ";
// console.log(pgh.length);

let idx = 1;
let speed = 1000;

function autotext(){
	// console.log('hay');

	textel.innerText = pgh.slice(0,idx);

	// idx +=1;
	idx++;

	if(idx > pgh.length){
		idx=1;
	}

	setTimeout(autotext,speed);
}

autotext();

// Event Listener
speedel.addEventListener('input',()=>{
	// console.log('hay');
	// console.log(speedel.value);

	speed = 100/ speedel.value;
})
  // 1000ဆို 1sကို တစ်လုံး 100ကို ၀.1sကိုတစ်လုံးထွက်တာ တန်ဖိုးကြီးလေစာလုံးပေါ်တာနှေးလေ
    // secနဲ့ valueက ပြောင်းပြန်အချိုးကျနေတော့ အတည့်အတိုင်းမြှောက်ရင် တန်ဖိုးများသွားမှာ အာ့ကြောင့် ပြောင်းပြန်လှန်မြှောက်  
    // speed = 100 / speedel.value ;