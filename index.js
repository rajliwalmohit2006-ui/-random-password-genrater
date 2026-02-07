const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("password");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container");

btnEl.addEventListener("click", () => {
    createPassword();
});

copyIconEl.addEventListener("click", () => {
    if (inputEl.value) {
        copyPassword();
        alertContainerEl.classList.add("active");

        setTimeout(() => {
            alertContainerEl.classList.remove("active");
        }, 2000);
    }
});

function createPassword() {
    const chars =
        "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const passwordLength = 14;
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.charAt(randomNum);
    }

    inputEl.value = password;
    alertContainerEl.innerText = password + " copied!";
}

function copyPassword() {
    inputEl.select();
    inputEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputEl.value);
}
