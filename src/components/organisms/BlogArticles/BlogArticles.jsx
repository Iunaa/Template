import BlogArticlesList from "../../molecules/BlogArticles/BlogArticlesList.jsx";
export default function BlogArticles() {
  return (
    <>
      <div>
        <h5>Our blog</h5>
        <div>
          <h2>Latest Blog Articles</h2>
          <a href="#">Discover all</a>
        </div>
        <BlogArticlesList />
      </div>
    </>
  );
}
