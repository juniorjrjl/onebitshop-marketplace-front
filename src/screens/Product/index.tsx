import React from "react"
import { Container, SubTitle, SubtitleContainer, Title } from "./styled";
import BackIcon from "../../components/common/BackIcon";
import Carousel from "../../components/Product/Carousel";

const images = [
    {
        filename: "image1",
        url: "https://files.tecnoblog.net/wp-content/uploads/2020/11/ps5-review-5-1060x596.jpg",
    },
    {
        filename: "image2",
        url: "https://classic.exame.com/wp-content/uploads/2021/05/ps5-the-squad-foto-1.jpg?quality=70&strip=info&w=984",
    },
    {
        filename: "image3",
        url: "https://cdn.awsli.com.br/1824/1824967/produto/186131938/67bd1ea8d4.jpg",
    },
    {
        filename: "image4",
        url: "https://cdn.awsli.com.br/600x700/1734/1734513/produto/97494476/030cda119d.jpg",
    },
];

const Product = () =>{
    return(
        <Container>
            <BackIcon marginLeft={30}/>
            <Title>Playstation 4 com 2 controles</Title>
            <SubtitleContainer>
                <SubTitle>Publicado em 10/04/23</SubTitle>
                <SubTitle>Refice, PE</SubTitle>
            </SubtitleContainer>
            <Carousel images={images}/>
        </Container>
    );
};

export default Product;
