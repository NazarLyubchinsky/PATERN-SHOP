import axios from "axios";

export const instance = axios.create({
	baseURL: 'https://api.escuelajs.co/api/v1',
	timeout: 1000,
	headers: { 'X-Custom-Header': 'foobar' }
});