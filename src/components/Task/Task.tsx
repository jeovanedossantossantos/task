import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import moment from "moment";
import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View, } from "react-native";
import * as Styles from "./Task.style"
import { Swipeable, GestureHandlerRootView } from 'react-native-gesture-handler';

interface TaskProps {
    id: number;
    desc: string;
    estimateAt: Date;
    doneAt?: Date;
    toggleTask: (id: number) => void;
    onDelete: (id: number) => void;

}

const Task = (props: TaskProps) => {

    const doneOrNotStyle = props.doneAt != null ?
        { textDecorationLine: 'line-through' } : {}

    const date = props.doneAt ? props.doneAt : props.estimateAt
    const formattedDate = moment(date).locale('pt-br')
        .format('ddd, D [de] MMMM')

    const getRightContent = () => {
        return (
            <Styles.Rigth
                onPress={() => props.onDelete ? props.onDelete(props.id) : null}
            >
                <FontAwesomeIcon icon={faTrash} size={30} color='#FFF' />
            </Styles.Rigth >
        )
    }


    const getLeftContent = () => {
        return (
            <Styles.Left>

                <FontAwesomeIcon icon={faTrash} size={20} color='#FFF' />
                <Styles.ExcludeText >Excluir</Styles.ExcludeText>
            </Styles.Left>
        )
    }

    const getCheckView = (doneAt: Date | undefined) => {

        if (doneAt != null) {
            return (
                <Styles.Done >

                    <FontAwesomeIcon icon={faCheck} size={20} color='#FFF' />
                </Styles.Done>
            )
        } else {
            return (
                <Styles.Pending></Styles.Pending>
            )
        }

    }

    return (

        <GestureHandlerRootView>
            <Swipeable

                renderRightActions={getRightContent}
                renderLeftActions={getLeftContent}
                onSwipeableLeftOpen={() => props.onDelete ? props.onDelete(props.id) : null}


            >
                <Styles.Container>
                    <TouchableWithoutFeedback
                        onPress={() => props.toggleTask(props.id)}
                    >

                        <Styles.CheckContainer>

                            {getCheckView(props.doneAt)}

                        </Styles.CheckContainer>

                    </TouchableWithoutFeedback>
                    <View>
                        <Styles.Desc style={doneOrNotStyle}>{props.desc}</Styles.Desc>
                        <Styles.DateStyle>{formattedDate}</Styles.DateStyle>


                    </View>


                </Styles.Container>
            </Swipeable>
        </GestureHandlerRootView>

    )
}

const style = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row'
    },
})

export default Task