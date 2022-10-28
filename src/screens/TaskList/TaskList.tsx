import React, { useState } from "react";

import todayImage from "../../assets/imgs/today.jpg"

import * as Styles from "./TaskList.style"

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'
import 'moment/locale/pt-br'
import Task from "../../components/Task";

interface InitialState {
    showDoneTasks: boolean,
    showAddTask: boolean,
    visibleTasks: [],
    tasks: []
}

const initialState: InitialState = {
    showDoneTasks: true,
    showAddTask: false,
    visibleTasks: [],
    tasks: []
}


const TaskList = () => {

    const [state, setState] = useState<InitialState>(initialState)

    const today = moment().locale('pt-br').format('ddd, D [de] MMMM')

    return (
        <Styles.Container>
            <Styles.Background source={todayImage}>
                <Styles.TitleBar>
                    <Styles.Title>Hoje</Styles.Title>
                    <Styles.Subtitles>{today}</Styles.Subtitles>
                </Styles.TitleBar>

                {/* <Styles.IconBar>
                    <Styles.AddButton>
                        <FontAwesomeIcon icon={faDeleteLeft} color="#fff" size={20} />
                    </Styles.AddButton>
                </Styles.IconBar> */}


            </Styles.Background>
            <Styles.TaskList>
                <Task desc="Compra livros" estimateAt={new Date()} doneAt={new Date()} />

            </Styles.TaskList>
            {/* <Task desc="Compra livros" estimateAt={new Date()} doneAt={new Date()} /> */}



        </Styles.Container>
    )
}

export default TaskList