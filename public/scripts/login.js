const stores = require("./data");

let sourceBox = document.getElementById("source-select");

stores.features.forEach((store) => {
	let city = store.properties.city;
	sourceBox.innerHTML += `
    <option value="${city}">${city}</option>
    `;
});

let sourceForm = document.querySelector(".login__form");
sourceForm.addEventListener("submit", (e) => {
	sessionStorage.setItem("user", JSON.stringify(e.target[0].value));
	let destObj = {};
	stores.features.forEach((store) => {
		if (store.properties.city === e.target[1].value) {
			destObj = store;
		}
	});
	sessionStorage.setItem("destination", JSON.stringify(destObj));
});
