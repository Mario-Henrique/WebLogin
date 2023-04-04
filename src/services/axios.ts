import axios from 'axios';
import { parseCookies } from 'nookies';

export function getAPIClient(ctx?: any){
	const { 'MyApp.token': token } = parseCookies(ctx);
	
	const api = axios.create({
		baseURL: 'http://localhost:3333'
	});
	
	// Para evitar criar um backend que no caso não existe na rota localhost:3333 vamos
	// interceptar as requisições para dar um log nas informações.
	api.interceptors.request.use(config => {
		console.log(config);
	
		return config;
	});
	
	if (token) {
		api.defaults.headers['Authorization'] = `Bearer ${token}`;
	}

    return api;
}