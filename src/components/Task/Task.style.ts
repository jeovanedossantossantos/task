import styled from "styled-components/native"
import commonStyles from "../../commonStyles"


export const Container = styled.View`

    flex-direction: column;
    flex-wrap: wrap;
    border-color: #AAA;
    border-bottom-width: 1;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #FFF;

`

export const CheckContainer = styled.View`
    width: 20%;
    align-items: center;
    justify-content: center;
`

export const Pending = styled.View`
    height: 25px;
    width: 25px;
    border-radius: 13px;
    border-width: 1;
    border-color: #555;
`

export const Done = styled.View`

    height: 25px;
    width: 25px;
    border-radius: 13;
    background-color: #4D7031;
    align-items: center;
    justify-content: center;

`
export const Desc = styled.Text`

    color: ${commonStyles.colors.mainText};
    font-size: 15px;

`

export const DateStyle = styled.Text`

    color: ${commonStyles.colors.subText};
    font-size: 12px;

`

export const Rigth = styled.TouchableOpacity`
    background-color: red;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-left: 20px;
    padding-right: 20px;

`

export const Left = styled.View`

    flex: 1;
    background-color: red;
    flex-direction: row;
    align-items: center;

`

export const ExcludeText = styled.Text`
    color: #FFF;
    font-size: 20px;
    margin: 10px;
`