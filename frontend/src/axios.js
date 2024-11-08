import axios from "axios";


	const jsonServerURL =  axios.create({
		baseURL: 'http://localhost:3001'
	}) 

	const StrapiURL =  axios.create({
		baseURL: 'http://localhost:1337/api/'
	}) 


export { jsonServerURL,StrapiURL};
 



// axios.defaults.baseURL ='http://localhost:5173';
// axios.defaults.baseURL ='http://localhost:3001';
axios.defaults.baseURL ='hhttp://localhost:1337/api/';
axios.defaults.headers.common = 'Bearer ' + localStorage.getItem('token');
