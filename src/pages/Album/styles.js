import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
    flex: 1;
    background-color: #111;
`;

export const ContainerHeader = styled(LinearGradient).attrs({
    colors: [ '#111', 'transparent', 'transparent', '#000' ]
})`
    height: 50%;
    justify-content: space-between;
`;

export const ContainerNavBar = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 18px;
`;

export const Photo = styled.Image`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
`;

export const GroupItemNavBar = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const ButtonFollow = styled.Text`
    margin-right: 20px;
    color: #fff;
    border-color: #fff;
    border-width: 1px;
    padding: 6px 10px;
    border-radius: 6px;
`;

export const ContainerDescAuthor = styled.View`
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

export const Author = styled.Text`
    font-size: 52px;
    color: #fff;
    font-weight: bold;
    padding: 10px;
`;

export const AuthorInfo = styled.Text`
    font-size: 12px;
    text-transform: uppercase;
    color: #fff;
`;

export const Content = styled.View`
    flex: 1;
    align-items: center;
`;

export const ButtonRandomPlay = styled.TouchableOpacity`
    margin-top: 20px;
    background-color: #1DB954;
    height: 50px;
    width: 280px;
    border-radius: 50px;
`;

export const ButtonRandomText = styled.Text`
    text-align: center;
    margin: auto;
    color: #fff;
    font-size: 17px;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
`;


export const Category = styled.Text`
    margin: 15px 0px;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`;

export const ContainerList = styled.View`

`;
