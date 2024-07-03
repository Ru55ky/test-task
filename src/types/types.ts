export type GenresType = {
	name: string
}
export type CountriesType = Partial<GenresType>
export type FilmsType = {
	id: number;
	name: string;
	alternativeName: string | null;
	enName: string | null | number;
	type: string;
	typeNumber: number | null;
	year: number | null;
	description: string | null;
	shortDescription: string | null;
	status: string | number | null;
	rating: {
		kp?: number | null;
		imdb?: number | null;
		filmCritics?: number | null;
		russianFilmCritics?: number | null;
		await?: number | null;
	};
	votes: {
		kp: number | null;
		imdb: number | null;
		filmCritics: number | null;
		russianFilmCritics: number | null;
		await: number | null;
	}
	movieLength: number | null;
	totalSeriesLength: number | null;
	seriesLength: number | null;
	ratingMpaa: null | number;
	ageRating: null | number;
	poster: {
		url: string | null;
		previewUrl: string | null;
	};
	backdrop: {
		url: string | null;
		previewUrl: string | null;
	};
	genres: GenresType[];
	countries: CountriesType;
	top10: boolean | null;
	top250: boolean | null;
	isSeries: boolean | null;
	ticketsOnSale: boolean | null;
}
