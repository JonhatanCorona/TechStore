import { IUserDto } from '@/interfaces/interfaces';
import axios from 'axios';


const register = async (userData: IUserDto) => {
    try {
        const Url = process.env.NEXT_PUBLIC_API_URL;
        const res = await axios.post(`${Url}/users/register`, userData);
        alert("Registrado con éxito");
        console.log(res.data);
        return res.data;

    } catch (error) {
        console.error("Error al registrar usuario:", error);
        throw new Error("No se pudo registrar el usuario.");
    }
};

export default register;