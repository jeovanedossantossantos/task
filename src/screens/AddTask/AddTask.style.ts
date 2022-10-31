import styled from "styled-components/native"
import commonStyles from "../../commonStyles"
export const Background = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.7);

`

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
`
export const Header = styled.Text`
    
    background-color:${commonStyles.colors.today};
    color: ${commonStyles.colors.secondary};
    text-align: center;
    padding: 15px;
    font-size: 18px;

`

export const Input = styled.TextInput`

    height: 40px;
    margin: 15px;
    background-color: #FFF;
    border-width: 1;
    border-color: #E3E3E3;
    border-radius: 6px;


`
export const Buttons = styled.View`

    flex-direction: row;
    justify-content: flex-end;
    
`
export const Button = styled.Text`

    margin: 20px;
    margin-right: 30px;
    color: ${commonStyles.colors.today};

`
export const Date = styled.Text`

    font-size: 20px;
    margin-left: 15px;

`