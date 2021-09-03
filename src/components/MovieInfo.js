export default function MovieInfo({item}) {

    const imgpath = "https://image.tmdb.org/t/p/w1280";

  return (
    <div>
        <img src={`${imgpath + item.backdrop_path}`} alt={'Backdrop_path'}/>
        <h3>{item.title}</h3>
        <h4>Release date: {item.release_date}</h4>
        <h4>original language - {item.original_language}</h4>
        <p>{item.overview}</p>
    </div>
  );
}