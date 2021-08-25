export default function PostsDetails({location: state}) {

  return (
    <div>
        <p>
            {JSON.stringify(state)}
        </p>
    </div>
  );
}