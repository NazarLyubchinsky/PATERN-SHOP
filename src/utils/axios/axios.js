import axios from "axios";


const instance = axios.create({
	baseURL: 'https://privateauth.onrender.com',

})

export default instance


