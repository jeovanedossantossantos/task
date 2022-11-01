import React, { useState } from "react";
import { Modal, Platform, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import * as Styles from "./AddTask.style"
import DateTimerPicker from "@react-native-community/datetimepicker"
import moment from "moment";
import { NewTaskProps } from "../../global/interface/types";


interface AddTaskProps extends NewTaskProps {
    showDatePicker: boolean;

}
interface AddTaskPropsTwo {
    isVisible: boolean;
    onCancel: () => void;
    onSave?: (newTask: NewTaskProps) => void;

}

const initialState: AddTaskProps = {
    desc: '',
    date: new Date(),
    showDatePicker: false,

}


const AddTask = (props: AddTaskPropsTwo) => {
    const [state, setState] = useState<AddTaskProps>(initialState)

    const save = () => {
        const newTask: NewTaskProps = {
            desc: state.desc,
            date: state.date,
        }
        props.onSave ? props.onSave(newTask) : null
        setState(initialState)
    }

    const showModal = (_: any, date?: Date) => {

        setState({ ...state, date: date ? date : new Date(), showDatePicker: false })

    }

    const getDateTimePicker = () => {
        let datePicker = <DateTimerPicker

            value={state.date}
            onChange={showModal}

            mode='date'
        />
        const dateString = moment(state.date).format('ddd, D [de] MMMM [de] YYYY')

        if (Platform.OS === 'android') {
            datePicker = (
                <View>
                    <TouchableOpacity onPress={() => setState({ ...state, showDatePicker: true })}>
                        <Styles.Date>
                            {dateString}
                        </Styles.Date>
                    </TouchableOpacity>
                    {state.showDatePicker ? datePicker : null}
                </View>
            )
        }



        return datePicker
    }

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

                <Styles.Header>Nova Tarefa</Styles.Header>
                <Styles.Input
                    placeholder="Descrição"
                    value={state.desc}
                    onChangeText={(e: string) => setState({ ...state, desc: e })}

                />
                {getDateTimePicker()}
                <Styles.Buttons>
                    <TouchableOpacity onPress={props.onCancel}><Styles.Button>Cancelar</Styles.Button></TouchableOpacity>
                    <TouchableOpacity onPress={save}><Styles.Button>Salvar</Styles.Button></TouchableOpacity>

                </Styles.Buttons>

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