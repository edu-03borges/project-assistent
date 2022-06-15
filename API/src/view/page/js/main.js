const input_mail = document.querySelector(".input-email");
const input_password = document.querySelector(".input-password");
const button_send_login = document.querySelector(".submit-login");

const Routes = {
    login: "http://localhost:9512/user/login"
}

button_send_login.addEventListener("click", async () => {

    const dataLogin = {
        email: input_mail.value,
        password: input_password.value
    }
       
})