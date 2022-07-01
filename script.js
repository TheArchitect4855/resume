buildDynamicDates();

function buildDynamicDates() {
	const fields = document.querySelectorAll(".dyn-date");
	for(const field of fields) {
		const ts = field.getAttribute("data-ts");
		const now = Date.now() / 1000;
		const delta = now - ts;
		field.innerText = getHumanDuration(delta);
	}
}

function getHumanDuration(seconds) {
	const monthSeconds = 2629800;

	let months = seconds / monthSeconds;
	if(months > 12) {
		const years = Math.floor(months / 12);
		if(years == 1) return "1 year";
		else return `${years} years`;
	}

	months = Math.floor(months);
	if(months == 1) return "1 month";
	else return `${months} months`;
}