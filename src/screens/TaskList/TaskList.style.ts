import { Platform } from "react-native"
import styled from "styled-components/native"
import commonStyles from "../../commonStyles"


export const Container = styled.View`

    font-family:  sans-serif  ;

    flex: 1;
   
    

    
`
export const Background = styled.ImageBackground`

    flex: 3;
 
    
    
   

`

export const TaskList = styled.View`

    flex: 7;
   

`

export const TitleBar = styled(Container)`

    justify-content: flex-end;

`

export const Title = styled.Text`

   

    
    color: ${commonStyles.colors.secondary};
    font-size: 50px;
    margin-left: 20px;
    margin-bottom: 20px;

`

export const Subtitles = styled(Title)`
    
    font-size: 20px;
    margin-bottom: 30px;

`

export const IconBar = styled.View`

        flex-direction: row;
        /* margin-left: 20px; */
        margin-right: 20px;
        justify-content: flex-end;
        margin-top: ${Platform.OS === 'ios' ? 40 : 30};

`

export const AddButton = styled.TouchableOpacity`

        position: absolute;
        right: 30px;
        bottom: 30px;
        width: 50px;
        height: 50px;
        border-radius: 25px;
        justify-content: center;
        align-items: center;
        background-color:${commonStyles.colors.today}

`

