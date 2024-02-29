// window.addEventListener('load', validatePage);

function validatePage() {
    ValidateEmail();
    validatePhone();
    validateFirstName();
    validateLastName();
}


function ValidateEmail() {
    var mail = document.getElementById('inputEmail').value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        document.getElementById('emailError').classList.add('hidden');
        document.getElementById('inputEmail').style.removeProperty('border');
        return true;
    } else {
        document.getElementById('emailError').classList.remove('hidden');
        document.getElementById('inputEmail').focus();
        document.getElementById('inputEmail').style.border = "2px solid red";
        return false;
    }
}


function validatePhone() {
    var phone = document.getElementById('inputPhone').value;
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if (!re.test(phone)) {

        document.getElementById('phoneError').classList.remove('hidden');
        document.getElementById('inputPhone').focus();
        document.getElementById('inputPhone').style.border = "2px solid red";
        return false;
    } else {

        document.getElementById('phoneError').classList.add('hidden');
        document.getElementById('inputPhone').style.removeProperty('border');
        return true;
    }
}

function validateFirstName() {
    var firstName = document.getElementById('inputFirstName').value;

    var validname = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if (!validname.test(firstName)) {
        document.getElementById('firstNameError').classList.remove('hidden');
        document.getElementById('inputFirstName').focus();
        document.getElementById('inputFirstName').style.border = "2px solid red";
        return false;
    } else {
        document.getElementById('firstNameError').classList.add('hidden');
        document.getElementById('inputFirstName').style.removeProperty('border');
        return true;
    }
}

function validateLastName() {
    var lastName = document.getElementById('inputLastName').value;

    var validname = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if (!validname.test(lastName)) {
        document.getElementById('lastNameError').classList.remove('hidden');
        document.getElementById('inputLastName').focus();
        document.getElementById('inputLastName').style.border = "2px solid red";
        return false;
    } else {
        document.getElementById('lastNameError').classList.add('hidden');
        document.getElementById('inputLastName').style.removeProperty('border');
        return true;
    }
}