// variables
const sendBtn = document.querySelector('#sendBtn'),
    email = document.querySelector('#email'),
    subject = document.querySelector('#subject'),
    message = document.querySelector('#message'),
    form = document.querySelector('#email-form'),
    spinner = document.querySelector('#spinner'),
    loaders = document.querySelector('#loaders')

// eventlistener
eventListeners()
function eventListeners() {
    appInit();

    // validate email
    email.addEventListener('blur', validateForm)
    // validata subject
    subject.addEventListener('blur', validateForm)
    // validate message
    message.addEventListener('blur', validateForm)

    // send form
    document.querySelector('#resetBtn').addEventListener('click', resetForm)

    // when email send
    sendBtn.addEventListener('click', emailSended)
}
// functions


// initializa option
function appInit() {
    sendBtn.disabled = true;
}

// start app
function validateForm() {

    // check the input for not empty
    validateLength(this)

    // check email for correct format
    if (this.id === 'email') {
        validateEmail(this)
    }

    // check error
    let errors = document.querySelectorAll('.error')
    let isEmptyLength = checkInputLength()

    if (isEmptyLength && errors.length === 0) {
        sendBtn.disabled = false;
    }

}

function checkInputLength() {
    if (email.value.length === 0 || subject.value.length === 0 || message.value.length === 0) {
        return false
    } else {
        return true
    }
}

function validateLength(input) {
    if (checkLength(input.value.length)) {
        input.style.borderBottomColor = 'green'
        input.classList.remove("error")
    } else {
        input.style.borderBottomColor = 'red'
        input.classList.add("error")
    }

}

function checkLength(lengthStr) {
    if (lengthStr > 0) {
        return true
    } else {
        return false
    }
}

function validateEmail(emailTag) {
    if (emailTag.value.includes('@')) {
        emailTag.style.borderBottomColor = 'green'
        emailTag.classList.remove("error")
    } else {
        emailTag.style.borderBottomColor = 'red'
        emailTag.classList.add("error")
    }
}

function resetForm(e) {
    e.preventDefault()
    form.reset()
}

function emailSended(e) {
    e.preventDefault()
    spinner.style.display = 'block'
    setTimeout(() => {
        spinner.style.display = 'none'
        setTimeout(() => {
            const emailGif = document.createElement('img');
            emailGif.src = 'img/mail.gif'
            emailGif.style.display = 'block'
            loaders.appendChild(emailGif)
            form.reset();
            appInit()
        }, 1000)
    }, 2000)
}