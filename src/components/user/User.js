export default function User({item, getPosts}) {

    return (
        <div>
            {item.id}. {item.name}
            <button onClick={() => {getPosts(item)}}>posts</button>
        </div>
    );
}
