export default function Comment({item: {postId, body}}) {
  return (
    <div>

      <p>{postId} - {body}</p>

    </div>
  );
}