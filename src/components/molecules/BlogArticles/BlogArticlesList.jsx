import Stories from "../../../assets/img/Blog1.svg";
import Design from "../../../assets/img/Blog2.svg";
import Marketing from "../../../assets/img/Blog3.svg";

const listBlog = [
  {
    image: Stories,
    title: "Stories",
    subtitle: "Agency is a business you hire to outsource",
    date: "5 Nov, 2021",
  },
  {
    image: Design,
    title: "Design",
    subtitle: "Outsource your digital marketing efforts",
    date: "29 Oct, 2021",
  },
  {
    image: Marketing,
    title: "Marketing",
    subtitle: "Your business with a variety of digital",
    date: "21 Oct, 2021",
  },
];

export default function BlogArticlesList(props) {
  return (
    <>
      <div>
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
