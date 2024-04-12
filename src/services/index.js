import { stringify } from "querystring";


export const register_user = async (formData) => {
    try {
        const res = await fetch('http://localhost:3000/api/Auth/register', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(formData),
        });
        const data = res.json();
        return data;
    } catch (error) {
        console.log('Error in register_user (service) => ', error);
        return error.message
    }
};


export const login_user = async (formData) => {
    try {
        // const res = await fetch('http://localhost:3000/api/Auth/login', {
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     method: 'POST',
        //     body: JSON.stringify(formData),
        // });
        // const data = res.json();
        const validCreds = {
            email: 'aludra-pavana',
            password: 'aludra-impact-01'
        }
        if (formData.email === validCreds.email && formData.password === validCreds.password) {
            return {
                success: true,
                message: 'Login successfully',
                token: Math.random().toString().slice(2),
            }
        } else {
            return {
                message: 'Wrong credential',
            }
        }
    } catch (error) {
        console.log('Error in login_user (service) => ', error);
        return error.message
    }
};