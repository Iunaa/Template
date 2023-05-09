
function ContactList({list}){
    console.log(list);
    return <>
            <div className="ContactList">
                {list.map((item, index) => {
                    return   <article className="ContactList__article4">
                    <picture className="article4__picture">
                        <img className="article4__img" src={item.img} alt="icon">
                        </img>
                    </picture>
                    {item.text && <p className="article4__paragraph1">{item.text}</p> }
                    
                </article> 

                })}
                

              

            </div>
                    


               

            {/* <div>
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
            </div> */}
            </>
}

export default ContactList