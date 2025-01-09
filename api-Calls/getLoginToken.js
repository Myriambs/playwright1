
import { expect } from '@playwright/test';
import axios from 'axios'

export const getLoginToken = async()=>{
    const apiUrl = 'http://localhost:2221/api/login'; // Replace with your login API endpoint
    const loginData = {
        username: 'admin', // Replace with valid credentials
        password: 'Admin123',
    };
// try{
const res = await axios.post(apiUrl,loginData)
expect(res.status).toBe(200)
 expect(res.data).toHaveProperty('token')
 const token = res.data.token
 console.log('token',token)

// }catch(error){
//     console.error('Login API failed:', error.res?.data || error.message);
//     throw error;
// }
return token 
}  