import React from "react"
import { Button, Container, DenounceSeller, InfoContainer, InteractionContainer, Like, Price, Share, SubTitle, SubtitleContainer, Title } from "./styled";
import BackIcon from "../../components/common/BackIcon";
import Carousel from "../../components/Product/Carousel";
import Description from "../../components/Product/Description";
import SellerInfo from "../../components/Product/SellerInfo";
import DefaultButton from "../../components/common/DefaultButton";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../routes";
import useAuth from "../../hook/useAuth";

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

const like = require('../../../assets/icons/like.png')
const share = require('../../../assets/icons/share.png')

const Product = () =>{
    const description = "teste"
    const navigation = useNavigation<PropsStack>()
    const { token } = useAuth()

    return(
        <Container contentContainerStyle={{ paddingBottom: 50 }}>
            <BackIcon marginLeft={30}/>
            <Title>Playstation 4 com 2 controles</Title>
            <SubtitleContainer>
                <SubTitle>Publicado em 10/04/23</SubTitle>
                <SubTitle>Refice, PE</SubTitle>
            </SubtitleContainer>
            <Carousel images={images}/>
            <InfoContainer>
                <Price>R$ 2.500,00</Price>
                <InteractionContainer>
                    <Button>
                        <Like source={like}/>
                    </Button>
                    <Button>
                        <Share source={share}/>
                    </Button>
                </InteractionContainer>
            </InfoContainer>
            <Description>{description}</Description>
            <SellerInfo />
            <DefaultButton buttonType="primary" marginVertical={0} buttonHandle={() => {}}>Fale com o Vendedor</DefaultButton>
            <DenounceSeller onPress={() => navigation.navigate(token ? 'Denounce': 'Login')}>Denunciar Vendedor</DenounceSeller>
        </Container>
    );
};

export default Product;
