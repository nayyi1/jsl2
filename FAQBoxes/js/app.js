// UI

const togglebtns = document.querySelectorAll('.faq-toggle');
// console.log(faq-togglebtns);

togglebtns.forEach(togglebtn=>{
	// console.log(togglebtn);

	togglebtn.addEventListener('click',()=>{
		// togglebtn.parentElement.classList.toggle('active');
		removetogglebtn();

		togglebtn.parentNode.classList.toggle('active');
	})

})

function removetogglebtn(){
	togglebtns.forEach(togglebtn=>{
		togglebtn.parentNode.classList.remove('active');
	})

}