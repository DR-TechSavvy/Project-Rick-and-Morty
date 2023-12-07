export default function validate(input) {
    const emailRegExp = /\S+@\S+.\S+/;
    const errors = {};
    const regexp_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,10}/;

    if (!input.email.length) errors.email = "Ingrese su correo electrónico";
    else {
        if (!emailRegExp.test(input.email))
            errors.email = "Ingrese un formato de correo electrónico válido";
        if (input.email.length > 35)
            errors.email = "El correo electrónico debe tener menos de 35 caracteres";
    }

    if (!input.password.length) errors.password = "Ingrese una contraseña";
    
    else {
        if (!(input.password.length >= 6 && input.password.length <= 10))
            errors.password = "La contraseña debe tener entre 6 y 10 caracteres";
        if (!regexp_password.test(input.password))
            errors.password = "La contraseña debe contener al menos una minúscula, una mayúscula, un número y un carácter especial";
    }

    return errors;
}
