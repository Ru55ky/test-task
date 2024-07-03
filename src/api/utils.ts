import axios, {AxiosResponse} from 'axios'

const axiosDefault = axios.create({
	headers: {accept: 'application/json', 'X-API-KEY': 'VZ6KKXB-859M8GN-MXXGMGX-QQE2D8F'},
	baseURL: 'https://api.kinopoisk.dev'
});

export async function getFilms(page?: number | undefined) {
	try {
		const response: AxiosResponse = await axiosDefault.get(`/v1.4/movie?page=${page}&limit=20&type=movie`)
		return response.data
	} catch (error) {
		console.error('Произошла ошибка', error);
	}
}

export async function searchFilmByName(name: string) {
	try {
		const response = await axiosDefault.get(`v1.4/movie/search?page=1&limit=10&query=${name}`)
		return response.data
	} catch (err) {
		console.log('при поиске произошла ошибка')
	}
}

