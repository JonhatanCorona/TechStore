import { ILoginFormData } from "@/interfaces/interfaces";
import axios from "axios";

export async function login(userData: ILoginFormData) {
    try {
    const url = process.env.NEXT_PUBLIC_API_URL;
    const res = await axios.post(`${url}/users/login`, userData);
    
    if (res.status >= 200 && res.status < 300) {
        alert("User successfully logged in");
        return res.data; 
    } else {
        alert("Server error while logging in the useo");
    }
    } 
    catch (error) {
        console.error("Error logging:", error);
        alert("The user could not be logged in");
    }
}