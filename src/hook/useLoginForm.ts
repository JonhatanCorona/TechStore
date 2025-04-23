import { useFormik, FormikHelpers, FormikProps } from "formik";
import { ILoginFormData } from "../interfaces/interfaces";
import { validationSchemaLogin } from "@/helpers/ValidationsForm/validationSchemaLogin";
import { login } from "@/helpers/ValidationsForm/login";

export const initialValues: ILoginFormData = {
    email: "",
    password: "",
};

export const onSubmit = async (
    values: ILoginFormData,
    { setSubmitting, resetForm }: FormikHelpers<ILoginFormData> ) => {
    try {
        const response =await login(values);
        resetForm();  
        return response;
    } catch (err) {
        console.error("Error al registrar:", err);
    } finally {
        setSubmitting(false); 
    }
};

export const validationSchema = validationSchemaLogin;


export const useLoginForm = (): FormikProps<ILoginFormData> => {
    return useFormik<ILoginFormData>({
        initialValues,
        validationSchema,
        onSubmit,
    });
};




