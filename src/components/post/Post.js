export default function Post({item, postDetails}) {
    return (
        <div>
            <h5>{item.id}. {item.title}</h5>

            <button onClick={() => postDetails(item.id)}>details</button>
        </div>
    );
}