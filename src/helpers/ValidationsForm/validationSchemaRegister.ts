import * as Yup from "yup"; 


export const validationSchemaRegister = Yup.object({
    name: Yup.string()
    .required("Name is required")
    .max(20, "Name must be at most 20 characters"),

    email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),

    password: Yup.string()
    .required("Password is required")
    .min(8, "Must be at least 8 characters long")
    .matches(/[0-9]/, "Must contain at least one number")
    .test(
        "no-spaces",
        "Password cannot contain spaces",
        (value) => !/\s/.test(value)
    ),

    address: Yup.string()
    .required("DNI field is required"),

    phone: Yup.string()
    .required("Username is required")
    .max(12, "Maximum 12 characters"),

    });