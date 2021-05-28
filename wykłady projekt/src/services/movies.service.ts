import { getByDisplayValue } from "@testing-library/dom";
import { omdApiKey } from "../key";
import http from "../utils/http"
import Movie from "../Views/movie/Movie";

const url = 'http://www.omdbapi.com/';
const MovieService = {
    serachByName: async (name: string, page: number) => {
        try{
            const responce = await <any>http.get('http://www.omdbapi.com/',{
                apkey: omdApiKey,
                s: name,
            });
            if (responce?.Error) {
                console.log(responce.Error);
                return null;
            } else{
                return{
                    totalResults: parseInt (responce.totalResults, 10),
                    movie: responce.Search.map((movie:any)=>({
                        id: movie.imdbID,
                        poster: movie.Poster,
                        title: movie.Title,
                        type: movie.Type,
                        year: movie.Year,
                    }))
                }
            }
        }   catch(error){
            console.log(error);
        }
    };
    getById: async (id: string)=> {
        const responce = await <any>http.get(url,{
            apkey: omdApiKey,
            i: id,
        });
    }
}

export default MovieService;