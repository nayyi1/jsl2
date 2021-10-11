// UI

const range = document.getElementById('range');

range.addEventListener('input',(e)=>{
	// console.log(typeof +e.target.value);

	const getvalue = +e.target.value;
	const label = e.target.nextElementSibling;

	const rangewith = getComputedStyle(e.target).getPropertyValue('width');
	// console.log(rangewith);
	// console.log(rangewith.length);

	const labelwidth = getComputedStyle(label).getPropertyValue('width');
	// console.log(labelwidth);
	// console.log(labelwidth.length);

	const numrangewidth = rangewith.substring(0,rangewith.length-2);
	// console.log(numrangewidth);

	const numlabelwidth = labelwidth.substring(0,labelwidth.length-2);
	// console.log(numlabelwidth);

	const min = +e.target.min;
	const max = +e.target.max;
	// console.log(min,max);

	const left = getvalue * (numrangewidth / max) - numlabelwidth / 2 + scale(getvalue,min,max,10,-10);
	// console.log(left);
	label.style.left = `${left}px`;

	label.innerText = getvalue;


});

const scale = (num,inmin,inmax,outmin,outmax)=>{
		return (num-inmin) * (outmax-outmin) / (inmax-inmin) + outmin;
}