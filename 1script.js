const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("Email");
const phone = document.getElementById("phone");
const subject = document.getElementById("Subject");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.
    value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;

    Email.send({
        SecureToken : "1c8542f6-5781-489a-83b2-cfb61ed046c1",
        To : 'anwarbekele43@gmail.com',
        From : "anwarbekele43@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message Sent Successfully!",
                    icon: "success"
                  });
            }
        }
    );
}

 function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if (items[1].value != "") {
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        })
        
        item.addEventListener("keyup", () => {
             if(item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
             }
             else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
             }
        });
    }
 }

 function checkEmail() {
    const emailRegex = /^([a-z\d\. -]+)@([a-z\d-]+)|. ([a-z]{2,3}) (\-[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".error-txt.email")

    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value != "") {
            errorTxtEmail.innerText = "Enter a Valid Email Address";
        }
        else {
            errorTxtEmail.innerText = "Email address Can't Be Blank";
        }
    }
    else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
 }

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if (!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !mess.classList.contains("error")) {
        sendEmail();

        form.reset();
        return false;
    } 
}); 