import * as Yup from "yup"; 


export const validationSchemaLogin = Yup.object({
    email: Yup.string()
    .required("Email is required")
    .email("Invalid email"),

    password: Yup.string()
    .required("Password is required")
    .min(8, "Must be at least 8 characters long")
    .matches(/[0-9]/, "Must contain at least one number")
    .test(
        "no-spaces",
        "Password cannot contain spaces",
        (value) => !/\s/.test(value)
    ),
});