function PostCard({ posts }) {
    return (
      <>
        {posts.map(({ id, name, photo, time, content }, i) => (
          <div key={i}></div>
        ))}
      </>
    );
  }
  
  export default PostCard;