import { IUserDto } from '@/interfaces/interfaces';
import axios from 'axios';
import Swal from 'sweetalert2';


const register = async (userData: IUserDto) => {
    try {
        const Url = process.env.NEXT_PUBLIC_API_URL;
        const res = await axios.post(`${Url}/users/register`, userData);
        await Swal.fire({
            title: 'Success!',
            text: 'Successfully registered',
            confirmButtonColor: '#515561',
        });
        return res.data;

    } catch (error: any) {
        console.error('Error register:', error);

        // Verificar si el error es el de usuario ya existente
        if (error.response.data.message === "User already exists") {
            await Swal.fire({
                title: 'Registration Failed',
                text: 'The email is already being used',
                confirmButtonColor: '#45433a',
            });
        } else {
            // Si es otro tipo de error
            await Swal.fire({
                title: 'Register Failed',
                text: 'The user could not be registered',
                confirmButtonColor: '#45433a',
            });
        }
    }
};


export default register;


