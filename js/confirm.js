function init() {
    loadData();
    var cancel = document.getElementById("btn_cancel");
    cancel.onclick = cancelButton;
}

function loadData() {
	var user_name = document.getElementById("confirm_yourname");
    user_name.textContent = window.sessionStorage.user_name;
    var form_password = document.getElementById("confirm_yourpassword");
    form_password.textContent = window.sessionStorage.form_password;
    var form_radio = document.getElementById("confirm_yourradio");
    form_radio.textContent = sessionStorage.radio_name;
    var form_yourcheckbox = document.getElementById("confirm_yourcheckbox");
    var form_payment = document.getElementById("confirm_dropdown");

    var yourCheckBox = "";
     if(sessionStorage.css_1 == "true") {
        yourCheckBox += "css, ";
     } 
     if(sessionStorage.html_1 == "true") {
        yourCheckBox += "html, ";
     } 
     if(sessionStorage.js_1 == "true") {
        yourCheckBox += "js, ";
     }
     if(sessionStorage.py_1 == "true") {
        yourCheckBox += "py, ";
     }
     yourCheckBox = yourCheckBox.substring(0, yourCheckBox.length - 2);
     form_yourcheckbox.textContent = yourCheckBox;

     form_payment.textContent = sessionStorage.payment;

}

function cancelButton() {
    window.location  = "index.html";
}

window.onload = init;