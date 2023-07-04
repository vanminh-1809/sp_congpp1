import axiosConfig from '../axios-config.js'

export const apiSubmit = (payload) => new Promise(async(resolve, reject) => {
    try {
        const response = axiosConfig({
            method: 'POST',
            url: 'http://localhost:8007/api/submit/add',
            data: payload
        });
        resolve(response);
    } catch (error) {
        console.log(error);
        reject(error);
    }
});