import Post from "./post";
const PostList = () => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3 ">
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </div>
    </>
  );
};
export default PostList;
