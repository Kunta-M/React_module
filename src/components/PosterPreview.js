export default function PosterPreview({item}) {

    const imgpath = "https://image.tmdb.org/t/p/w1280";

  return (
    <div className={'poster_box'}>
        <img src={`${imgpath + item.poster_path}`} alt={'Poster_path'}
        onClick={() => {}}/>
    </div>
  );
}