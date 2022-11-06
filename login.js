window.onload = function () {
	let YouAre = document.getElementById("YouAre")
	YouAre.style.visibility = "hidden"
}
function login() {
	let TestInput = document.getElementById("TestInput")
	if(TestInput.value != "") {
		let YouAre = document.getElementById("YouAre")
		YouAre.style.visibility = "visible"
	}
}