import React, { useState } from "react";
import { Modal, Text, TouchableWithoutFeedback } from "react-native";
import * as Styles from "./AddTask.style"

interface AddTaskProps {
    desc: string;
    date: Date;
    showDatePicker: boolean;

}
interface AddTaskPropsTwo {
    isVisible: boolean;
    onCancel?: () => void;

}

const initialState: AddTaskProps = {
    desc: '',
    date: new Date(),
    showDatePicker: false,

}

const AddTask = (props: AddTaskPropsTwo) => {
    const [state, setState] = useState<AddTaskProps>(initialState)
    return (
        <Modal
            transparent={true}
            visible={props.isVisible}
            onRequestClose={props.onCancel}
            animationType='slide'
        >
            <TouchableWithoutFeedback
                onPress={props.onCancel}
            >

                <Styles.Background>

                </Styles.Background>

            </TouchableWithoutFeedback>


            <Styles.Container>

                <Styles.Header>

                </Styles.Header>

            </Styles.Container>


            <TouchableWithoutFeedback
                onPress={props.onCancel}
            >

                <Styles.Background>

                </Styles.Background>

            </TouchableWithoutFeedback>

        </Modal>
    )

}

export default AddTask