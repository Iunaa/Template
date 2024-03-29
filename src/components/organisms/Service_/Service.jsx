import "../Service_/service.scss"
import ServiceList from "../../molecules/ServiceList/ServiceList.jsx";
import group8 from "../../../assets/img/Group8.svg"
import group6 from "../../../assets/img/Group6.svg"
import group7 from "../../../assets/img/Group7.svg"



function Service(){
    return <div className="articleList__container">
        <ServiceList img={group8} title="Design" paragraph="Agency provides a full service range including technical
                    skills, design." anchor="Learn More"/>


        <ServiceList img={group6} title="Development"  paragraph="Full service range including technical skills, design,
                    business etc."  anchor="Discover More" />

        <ServiceList img={group7} title="Marketing" paragraph="Technical skills, design, business understanding, ability."
        anchor="Explore Now"/>   

        </div>
}

export default Service