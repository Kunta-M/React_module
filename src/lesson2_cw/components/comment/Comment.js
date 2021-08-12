export default function Comment({item}) {
  return (
    <div>

      Comments of post:
        {item.id}: {item.body}

    </div>
  );
}