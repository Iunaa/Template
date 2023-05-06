
import "../Portifolio/portifolio.scss";


function Portifolio(){
    return(
        <div className="portifolio container">
            <nav className="portifolio__nav">
            <svg className="portifolio__arrow" width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.03021 0L6.33508 1.28545L3.50442 4.09273H15V5.90727H3.50442L6.33508 8.71455L5.03021 10L0 5L5.03021 0Z" fill="#391400"/>
            </svg>
            <a className="portifolio__anchor">Back to portfolio</a>
            </nav>
            <h1 className="portifolio__title">Work Media Project</h1>
            <p className="portifolio__paragraph1">Agency provides a full service range including technical skills, design, business understanding.</p>
            <p className="portifolio__paragraph2">Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.</p>
        </div>
    )
}

export default Portifolio