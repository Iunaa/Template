const listBlog = [
  {
    image: "",
    title: "Stories",
    subtitle: "Agency is a business you hire to outsource",
    date: "5 Nov, 2021",
  },
  {
    image: "",
    title: "Design",
    subtitle: "Outsource your digital marketing efforts",
    date: "29 Oct, 2021",
  },
  {
    image: "",
    title: "Marketing",
    subtitle: "Your business with a variety of digital",
    date: "21 Oct, 2021",
  },
];

export default function BlogArticles(props) {
  return (
    <>
      <div>
        <h5>Our blog</h5>
        <div>
          <h2>Latest Blog Articles</h2>
          <a href="#">Discover all</a>
        </div>
        {listBlog.map((props) => (
          <section>
            <picture>
              <img src={props.image} alt="image ilustrativa do blog" />
            </picture>
            <p>{props.title}</p>
            <h4>{props.subtitle}</h4>
            <p>{props.date}</p>
          </section>
        ))}
      </div>
    </>
  );
}
