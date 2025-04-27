'use client';
import { IUserDto } from "@/interfaces/interfaces";
import { initialValues, validationSchema, onSubmit } from "../../hook/useRegisterForm";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";



const RegisterForm = () => {
        const handleSubmit = async (values: IUserDto, formikHelpers: FormikHelpers<IUserDto>) => {
                await onSubmit(values, formikHelpers);   
                };

                
        return (  <>

        <div className="flex flex-col md:flex-row gap-1 bg-secondary-50 mt-8">
        <div className="flex flex-col p-4 rounded-lg w-full md:w-1/2 items-center mt-2 text-center">
        <div className= "title-800 text-secondary-800 font-bold "> Explore the future  </div>
        <div className= "title-800 text-secondary-800 font-bold ">of tech. Register </div>
        <div className= "title-800 text-secondary-800 font-bold ">with TechStore.</div>
        </div> 
        <div className="flex flex-col p-4 rounded-lg w-full md:w-1/2 items-center">
        <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}>     

        <Form className="flex flex-col bg-primary-800 gap-3 shadow-2xl rounded-lg p-10">
        <p className="title-400 text-secondary-50 font-semibold mb-6 text-center">Register </p>

        <div className='text-center'><label className="text-300 text-secondary-50 bg-primary-800 ">
        Name 
        </label> <br/> 
        <div><Field className="bg-secondary-50 text-primary-900"
                type="name"
                name="name"
                placeholder="Name"/>
                <ErrorMessage name="name" component="div" className="text-primary-50 text-50 mt-1 text-center" />
        </div> </div>

        <div className='text-center'><label className="text-300 text-secondary-50 bg-primary-800 "> 
        Email
        </label> <br/> 
        <div><Field className="bg-secondary-50 text-primary-900"
                type="email"
                name="email"
                placeholder="Email"/>
                <ErrorMessage name="email" component="div" className="text-primary-50 text-50 mt-1 text-center" />
        </div> </div>

        <div className='text-center'><label className="text-300 text-secondary-50 bg-primary-800 "> 
        Password 
        </label> <br/> 
        <div><Field className="bg-secondary-50 text-primary-900"
                type="password"
                name="password"
                placeholder="Password"/>
                <ErrorMessage name="password" component="div" className="text-primary-50 text-50 mt-1 text-center" />
        </div> </div>

        <div className='text-center'><label className="text-300 text-secondary-50 bg-primary-800 ">
        Address 
        </label> <br/> 
        <div><Field className="bg-secondary-50 text-primary-900"
                type="address"
                name="address"
                placeholder="Address"/>
        <ErrorMessage name="address" component="div" className="text-primary-50 text-50 mt-1 text-center" />
        </div> </div>

        <div className='text-center'><label className="text-300 text-secondary-50 bg-primary-800 "> 
        Phone 
        </label> <br/> 
        <div><Field className="bg-secondary-50 text-primary-900"
                type="phone"
                name="phone"
                placeholder="Phone"/>
        <ErrorMessage name="phone" component="div" className="text-primary-50 text-50 mt-1 text-center" />
        </div> </div>

        <button type="submit"
        className='mt-2 px-4 py-2 bg-secondary-200 text-300 text-primary-900 font-bold rounded-lg shadow-lg
        transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl active:scale-95'> Register </button>
        </Form>
        </Formik>
        </div>
        </div>
        </>
)
};

export default RegisterForm;