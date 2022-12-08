
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const validatePassword = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^([A-Za-z]\w{7,14})$/
        );
};

function attemptCreateAccount() {
    var validInput = true;

    var name = document.getElementById("nameInput");
    var email = document.getElementById("emailInput");
    var password = document.getElementById("passwordInput");
    var repeat = document.getElementById("repeatInput");

    if(!(name.value.length > 0)) {
        validInput = false;
        name.className = name.className + " error";
    } else {
        name.className = name.className.replace(" error", "");
    }

    if(!(validateEmail(email.value))) {
        validInput = false;
        email.className = email.className + " error";
    } else {
        email.className = email.className.replace(" error", "");
    }

    if(!(validatePassword(password.value))) {
        validInput = false;
        password.className = password.className + " error";
    } else {
        password.className = password.className.replace(" error", "");
    }

    if(password.value !== repeat.value) {
        validInput = false;
        repeat.className = repeat.className + " error";
    } else {
        repeat.className = repeat.className.replace(" error", "");
    }

    if(validInput) {
        var fs = require('fs');
        var member = {
            name: name.value,
            email: email.value,
            password: password.value,
            balance: 0
        };
        fs.readFile('../../data/bank-members.json', 'utf8', function readFileCallback(err, data){
            if (err){
                console.log(err);
            } else {
                obj = JSON.parse(data);
                obj.table.push(member);
                json = JSON.stringify(obj);
                fs.writeFile('../../data/bank-members.json', json, 'utf8', callback);
            }
        });
        location.href = "../pages/dashboard.html";
    }
}

function cancelCreateAccount() {
    location.href = "../pages/login.html";
}