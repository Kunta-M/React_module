import PosterPreview from "./PosterPreview";

export default function MoviesListCard({item}) {

  // const imgpath = "https://image.tmdb.org/t/p/w1280";

  return (
    <div className={'movies_main'}>
        <PosterPreview item={item}/>
      <div className={'movies_page__main___info'}>
          {/*<img src={`${imgpath + item.poster_path}`} alt={'Poster_path'}/>*/}
          <h3>{item.original_title}</h3>
          <p>{item.vote_average}</p>
      </div>
    </div>
  );
}