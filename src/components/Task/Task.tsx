import React from "react";
import { Text } from "react-native";

import Swipeable from 'react-native-gesture-handler/Swipeable'
import * as Styles from "./Task.style"

interface TaskProps {
    desc: string;
    estimateAt: Date;
    doneAt: Date;

}

const Task = (props: TaskProps) => {
    console.log(props.doneAt)
    return (

        <Styles.Container>
            <Text>{props.desc}</Text>
            <Text>{props.estimateAt + ""}</Text>
            <Text>{props.doneAt + ''}</Text>

        </Styles.Container>

    )
}


export default Task