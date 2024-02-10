const HH = document.getElementById("hh");
const MM = document.getElementById("mm");
const SS = document.getElementById("ss");

const rotationHandler = () => {
	const current = new Date();

	const hh = current.getHours();
	const mm = current.getMinutes();
	const ss = current.getSeconds();

	const hrs = 30 * hh + mm / 2;
	const mints = 6 * mm;
	const secs = 6 * ss;

	HH.style.transform = `rotate(${hrs}deg)`;
	MM.style.transform = `rotate(${mints}deg)`;
	SS.style.transform = `rotate(${secs}deg)`;
};

setInterval(rotationHandler, 1000);
