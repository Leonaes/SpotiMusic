import React, { useState } from 'react';

import { 
    Container,
    ContainerHeader,
    ContainerNavBar,
    GroupItemNavBar,
    ButtonFollow,
    ContainerDescAuthor,
    Author,
    AuthorInfo,
    Photo,
    Content,
    ButtonRandomPlay,
    ButtonRandomText,
    Category,
 } from './styles';

 import Icon from 'react-native-vector-icons/FontAwesome5';


const Album = () => {
    const [ iconConfigure ] = useState({
        size: 20,
        color: '#fff'
    });

    return (
        <Container>
            <ContainerHeader>
                <Photo source={{ uri: "https://i.scdn.co/image/ab67618600001016c84b2a0f71e5d99dec1df419" }} />
                <ContainerNavBar>
                    <Icon name="arrow-left" {...iconConfigure} />
                    <GroupItemNavBar>
                        <ButtonFollow>Seguindo</ButtonFollow>
                        <Icon name="ellipsis-v" {...iconConfigure} />
                    </GroupItemNavBar>
                </ContainerNavBar>
                <ContainerDescAuthor>
                    <Author>Arctic Monkeys</Author>
                    <AuthorInfo>24.647.404 ouvintes mensais</AuthorInfo>
                </ContainerDescAuthor>
            </ContainerHeader>
            <Content>
                <ButtonRandomPlay>
                    <ButtonRandomText>Ordem Aleatória</ButtonRandomText>
                </ButtonRandomPlay>
                <Category>Populares</Category>

            </Content>
        </Container>
    );
};

export default Album;