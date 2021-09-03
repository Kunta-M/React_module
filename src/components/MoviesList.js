import MoviesListCard from "./MoviesListCard";

export default function MoviesList({movies}) {

  return (
    <div className={'container_movies__page'}>
        {
            movies.map(value => <MoviesListCard key={value.id} item={value}/>)
        }
    </div>
  );
}