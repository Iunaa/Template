// import "../../../components/_base/_index.scs"
import logoimg from "../../../assets/img/logoAgency.svg"
import Header from "../../../components/organisms/Header/Header.jsx";
import Portifolio from "../../organisms/Portifolio/Portifolio";
import Tags from "../../organisms/Tags/Tags";
import Image from "../../atoms/Image_/Image2";
import Problem from "../../organisms/Problem/Problem.jsx";
import Grid5Images from "../../organisms/Grid5_Images/GridImages.jsx";
import Solution from "../../organisms/Solution/Solution.jsx";
import RelatedProject from "../../organisms/RelatedProject/RelatedProject.jsx";
import Image2 from "../../molecules/Image2/Image2.jsx" ;
import Footer2 from "../../organisms/Footer2/Footer2";


function SingleProject(){
    return(
        <>
        
          <Header logoimg={logoimg}/>   
          <Portifolio/>
          <Tags/>
          <Image/>
          <Problem/>
          <Grid5Images/>
          <Solution/>
          <RelatedProject/>
          <Image2/>
          <Footer2/>

        </>
    )
}

export default SingleProject
