import * as Yup from "yup"; 


export const validationSchemaRegister = Yup.object({
    name: Yup.string()
    .required("El campo nombre es requerido")
    .max(20, "El campo nombre tiene como máximo 20 caracteres"),

    email: Yup.string()
    .required("El campo email es requerido")
    .email("Formato de email inválido"),

    password: Yup.string()
    .required("La contraseña es obligatoria")
    .matches(/[0-9]/, "Debe contener al menos un número")
    .test(
        "no-espacios",
        "La contraseña no puede contener espacios",
        (value) => !/\s/.test(value)
        ),
    
    address: Yup.string()
    .required("El campo DNI es requerido"),

    
    phone: Yup.string()
        .required("El campo usuario es obligatorio")
        .max(10, "Máximo 12 caracteres"),
    });