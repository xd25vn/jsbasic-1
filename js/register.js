function init() {
     var form_regis = document.getElementById("Register_Form");
     form_regis.onsubmit = saveData;
     prefillData();
}

function prefillData() {
	if (sessionStorage.user_name != null) {
		document.getElementById("username").value = window.sessionStorage.user_name;
	}

	if (sessionStorage.form_password != null) {
		document.getElementById("password").value = window.sessionStorage.form_password;
	}

     // start radio
	if (sessionStorage.radio_name == "css") {
		document.getElementById("css").checked = true;
	}

	if (sessionStorage.radio_name == "html") {
		document.getElementById("html").checked = true;
	}

	if (sessionStorage.radio_name == "js") {
		document.getElementById("js").checked = true;
	}

	if (sessionStorage.radio_name == "py") {
		document.getElementById("py").checked = true;
	}
	// end radio

	// start checkBox
	if (sessionStorage.css_1 == "true") {
		document.getElementById("css_1").checked = true;
	}
	if (sessionStorage.html_1 == "true") {
		document.getElementById("html_1").checked = true;
	}
	if (sessionStorage.js_1 == "true") {
		document.getElementById("js_1").checked = true;
	}
	if (sessionStorage.py_1 == "true") {
		document.getElementById("py_1").checked = true;
	}
	// end checkBox
     document.getElementById("payment").value = sessionStorage.payment;
}	


function saveData() {
	var user_name = document.getElementById("username").value;
	window.sessionStorage.user_name = user_name;
	var form_password = document.getElementById("password").value;
	window.sessionStorage.form_password = form_password;

	// start radio
	var css  = document.getElementById("css").checked;
	var html  = document.getElementById("html").checked;
	var js  = document.getElementById("js").checked;
	var py  = document.getElementById("py").checked;
     
     if(css == true) {
     	sessionStorage.radio_name = document.getElementById("css").value;
     } else if(html == true) {
     	sessionStorage.radio_name = document.getElementById("html").value;
     } else if(js == true) {
     	sessionStorage.radio_name = document.getElementById("js").value;
     } else if(py == true) {
     	sessionStorage.radio_name = document.getElementById("py").value;
     }
     // end radio
     
     // start check box
     var css_1 = document.getElementById("css_1").checked;
     var html_1 = document.getElementById("html_1").checked;
     var js_1 = document.getElementById("js_1").checked;
     var py_1 = document.getElementById("py_1").checked;

     sessionStorage.css_1 = css_1;
     sessionStorage.html_1 = html_1;
     sessionStorage.js_1 = js_1;
     sessionStorage.py_1 = py_1;
     // end checkbox

     // start dropdown
     var payment = document.getElementById("payment").value;
     sessionStorage.payment = payment;
     // end dropdown
}

window.onload = init;