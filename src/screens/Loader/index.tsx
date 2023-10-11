import React from "react";
import { Container } from "./styled";
import { ActivityIndicator } from "react-native";

const Loader = () => 
    <Container>
        <ActivityIndicator size='large'/>
    </Container>

export default Loader;