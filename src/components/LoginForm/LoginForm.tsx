'use client';
import Link from "next/link";
import { initialValues, validationSchema } from "../../hook/useLoginForm";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useAuth } from "@/Context";
import { login } from "@/helpers/ValidationsForm/login";
import { useRouter } from "next/navigation";


const Login = () => {

    const { setUser } = useAuth();
    const router = useRouter();
    return (
    <>
        <div className="flex flex-col md:flex-row gap-12 bg-secondary-50">
        <div className="flex flex-col p-4 rounded-lg w-full md:w-1/2 items-center mt-8">
            <div className="title-800 text-secondary-800 font-bold">Welcome</div>
            <div className="title-800 text-secondary-800 font-bold">a</div>
            <div className="title-800 text-secondary-800 font-bold">TechStore</div>
        </div>
        <div className="flex flex-col p-4 rounded-lg w-full md:w-1/2 items-center">
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
            const { token, user } = await login(values);
            setUser({ token, user });
            router.push('/');  
        }}
        >
            <Form
            className="flex flex-col bg-primary-800 gap-3 p-10 items-center shadow-2xl rounded-lg"
            >
            <p className="title-400 text-secondary-50 font-semibold mb-6">
                Sing In
            </p>

            <div>
        <label className="text-300 text-secondary-50 bg-primary-800">Email</label>
        <br />
        <Field
    className="bg-secondary-50 text-primary-900"
    type="email"
    name="email"
    placeholder="Email"/>
        <ErrorMessage name="email" component="div" className="text-primary-50 text-50 mt-1 text-center" />
        </div>

            <div className="mt-4">
        <label className="text-300 text-secondary-50 bg-primary-800">Password</label>
        <br />
        <Field
    className="bg-secondary-50 text-primary-900"
    type="password"
    name="password"
    placeholder="Password"/>
        <ErrorMessage name="password" component="div" className="text-primary-50 text-50 mt-1 text-center" />
        </div>
            <li className="list-none">
                <Link
                href="/terminos"
                className="text-200 text-secondary-50 bg-primary-800 mt-4"
                >
                Forgot your password?
                </Link>
            </li>
            <li className="list-none">
                <Link
                href="/register"
                className="text-200 text-secondary-50 bg-primary-800 mt-4"
                >
                You dont have an account yet
                </Link>
            </li>
            <button
                type="submit"
                className="px-4 py-2 bg-secondary-200 text-primary-900 font-bold rounded-lg shadow-lg 
                transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl active:scale-95"
            >
                Log In
            </button>
            </Form>
            </Formik>
        </div>
        </div>
    </>
    );
};


export default Login;