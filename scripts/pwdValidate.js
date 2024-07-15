const pwd1 = document.querySelector("#pwd1");
const pwd2 = document.querySelector("#pwd2");
const message = document.querySelector("#formmessage");

pwd2.addEventListener("focusout", checkSame);
pwd1.addEventListener("focusout", addPattern);

function checkSame() {
	if (pwd1.value !== pwd2.value) {
		message.style.display = "block";
		pwd2.style.backgroundColor = "#fff0f3";
        pwd1.style.backgroundColor = "#fff0f3";
		pwd2.value = null;
		pwd1.value = null;
		pwd1.focus();
	} else {
		message.style.display = "none";
		pwd2.style.backgroundColor = "#eee";
		pwd2.style.color = "#000";
		pwd1.style.backgroundColor = "#eee";
		pwd1.style.color = "#000";
	}
}

function addPattern() {
    pwd2.pattern = `${pwd1.value}`;
}
