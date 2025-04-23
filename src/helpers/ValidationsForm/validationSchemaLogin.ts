import * as Yup from "yup"; 


export const validationSchemaLogin = Yup.object({
email: Yup.string()
    .required("El campo email es obligatorio")
    .email("El email es invalido"),

password: Yup.string()
    .required("La contraseña es obligatoria")
    .min(8, "Debe tener al menos 8 caracteres")
    .matches(/[0-9]/, "Debe contener al menos un número")
    .test(
        "no-espacios",
        "La contraseña no puede contener espacios",
        (value) => !/\s/.test(value)
    ),
});