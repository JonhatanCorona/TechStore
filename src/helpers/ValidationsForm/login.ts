import { ILoginFormData } from "@/interfaces/interfaces";
import axios from "axios";
import Swal from "sweetalert2";

export async function login(userData: ILoginFormData) {
    try {
        const url = process.env.NEXT_PUBLIC_API_URL;
        const res = await axios.post(`${url}/users/login`, userData);

        if (res.status >= 200 && res.status < 300) {
        await Swal.fire({
            title: 'Success!',
            text: 'User successfully logged in.',
            confirmButtonColor: '#515561',
        });
        return res.data;
    } else {
        await Swal.fire({
            title: 'Server Error',
            text: 'There was a problem logging in the user.',
            confirmButtonColor: '#45433a',
        });
    }
    } catch (error) {
        console.error('Error logging:', error);
        await Swal.fire({
        title: 'Login Failed',
        text: 'The user could not be logged in.',
        confirmButtonColor: '#45433a',
    });
    }
}