export default function validate(input) {
    const emailRegExp = /\S+@\S+.\S+/;
    const errors = {};
    const regexp_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,10}/;

    if (!input.email.length) errors.email = "Debe ingresar un email";
    else {if (!emailRegExp.test(input.email)) errors.email = "Se necesita ingresar un email"}
    if (input.email.length > 35) errors.email = "Demasiados carácteres"

    if (!input.password.length) errors.password = "Debe ingresar un passoword";
    else {if(!input.password.length < 6 && input.password.length > 10) errors.password = "Debe contener entre 6 y 10 carácteres"}
    if(!regexp_password) errors.email = `Se necesita ${regexp_password}`

    return errors;
}

console.log(validate({email: "", password: ""}))