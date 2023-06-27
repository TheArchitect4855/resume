buildDynamicDates();

function buildDynamicDates() {
	const fields = document.querySelectorAll(".dyn-date");
	for (const field of fields) {
		const ts = field.getAttribute("data-ts");
		const now = Date.now() / 1000;
		const delta = now - ts;
		field.innerHTML = getHumanDuration(delta);
	}
}

function getHumanDuration(seconds) {
	const monthSeconds = 2629800;

	let months = seconds / monthSeconds;
	if (months > 12) {
		const years = Math.floor(months / 12);
		if (years == 1) return "1&nbsp;year";
		else return `${years}&nbsp;years`;
	}

	months = Math.floor(months);
	if (months == 1) return "1&nbsp;month";
	else return `${months}&nbsp;months`;
}