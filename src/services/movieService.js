import axios from "axios";

const instance = axios.create({baseURL: 'https://api.themoviedb.org/3/',
headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTY4YmExYzIwMDNjMzYxMjdmYWIyMzFiNTRjYjljOSIsInN1YiI6IjYxMmZhZDI2Mzk1NDlhMDAyYTcxYTc5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wSNk9D6mGzknZtkjp6XsTgTLIaJES1o9-Okc0j0adYs'
}
});

const getMovies = async () => await instance.get('/discover/movie');

export {getMovies};