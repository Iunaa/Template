
function ContactList(props){
    return <>
            <section className="ContactList container">
                <article className="ContactList__article4">
                    <picture className="article4__picture">
                        <img className="article4__img" src={props.img} alt="icon">
                        </img>
                    </picture>
                    <p className="article4__paragraph1">{props.paragraph1}</p>
                    <p className="article4__paragraph2">{props.paragraph2}</p>
                    <p className="article4__paragraph3">{props.paragraph3}</p>
                </article>

            </section>
                    


               

            <section>
                <article className="ContactList2__article5">
                    <picture className="ContactList2__container">
                        <img className="article5__img" src={props.img4}></img>
                    </picture>
                </article>

                <article className="ContactList__article6">
                    <picture>
                    <img className="article6__img" src={props.social}></img>
                    </picture>

                </article>
            </section>
            </>
}

export default ContactList