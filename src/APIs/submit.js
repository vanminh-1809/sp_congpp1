import axios from 'axios'

export const apiSubmit = async(payload) => {
    try {
        await axios.post("http://localhost:8007/api/submit/add", payload)
    } catch (error) {
        console.log(error);
    }
}
