import "../GlobalList/globalList.scss";

function GlobalList(){
    return(
        <div className="tags container">
            <nav className="tags__nav">
                <h5 className="tags__subtitle">Category</h5>
                <ul className="tags__list">
                    <li className="tags__item">Art Direction</li>
                    <li className="tags__item">User Interface</li>
                    <li className="tags__item"> Branding Strategy</li>
                    <li className="tags__item">Print Design</li>
                    <li className="tags__item">3D Render</li>
                </ul>

            </nav>

        </div>

    )
}

export default GlobalList