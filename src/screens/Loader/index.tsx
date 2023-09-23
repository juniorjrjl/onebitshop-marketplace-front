import React from "react";
import { Container } from "../Home/styled";
import { ActivityIndicator } from "react-native";

const Loader = () => 
    <Container>
        <ActivityIndicator size='large'/>
    </Container>

export default Loader;