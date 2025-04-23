import {  FormikHelpers, FormikProps, useFormik } from "formik";
import {  IUserDto } from "../interfaces/interfaces";
import { validationSchemaRegister } from "@/helpers/ValidationsForm/validationSchemaRegister";
import register from "@/helpers/ValidationsForm/register";

export const initialValues: IUserDto = {
    name: '',
    email: '',
    password: '',
    address: '',
    phone: '',
};

export const onSubmit = async (
    values: IUserDto,
    { setSubmitting, resetForm }: FormikHelpers<IUserDto> ) => {
    try {
        await register(values);
        resetForm();  
    } catch (err) {
        console.error("Error al registrar:", err);
    } finally {
        setSubmitting(false); 
    }
};


export const validationSchema = validationSchemaRegister;

export const useRegisterForm = (): FormikProps<IUserDto> => {
    return useFormik<IUserDto>({
        initialValues,
        validationSchema,
        onSubmit,
    });
};




