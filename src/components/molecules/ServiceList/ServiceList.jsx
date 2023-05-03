
function ServiceList(props){
    return <article className="articleList__article">
                <picture className="articleList__picture">
                    <img
                        className="articleList__img"
                        src={props.img}
                        alt="email icon"
                    />
                </picture>
                <h4 className="articleList__title">{props.title}</h4>
                <p className="articleList__paragraph">
                    {props.paragraph}
                </p>
                <a className="articleList__anchor" href="#">{props.anchor}</a>
            </article>
            
            

            

}

export default ServiceList