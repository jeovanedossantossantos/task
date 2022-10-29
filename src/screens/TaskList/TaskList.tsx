import React, { useEffect, useState } from "react";

import todayImage from "../../assets/imgs/today.jpg"

import * as Styles from "./TaskList.style"

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'
import 'moment/locale/pt-br'
import Task from "../../components/Task";
import { FlatList } from "react-native";
import commonStyles from "../../commonStyles"
interface TaskProps {
    id: number;
    desc: string;
    estimateAt: Date;
    doneAt?: Date;
}

interface InitialState {
    showDoneTasks: boolean,
    showAddTask: boolean,
    visibleTasks: TaskProps[],
    tasks: TaskProps[]
}

const initialState: InitialState = {
    showDoneTasks: true,
    showAddTask: false,
    visibleTasks: [],
    tasks: [
        {
            id: Math.random(),
            desc: "Compra Livro de React Native",
            estimateAt: new Date(),
            doneAt: new Date(),

        },
        {
            id: Math.random(),
            desc: "Compra Livro de React Native",
            estimateAt: new Date(),
            doneAt: undefined,

        }
    ]
}


const TaskList = () => {

    const [state, setState] = useState<InitialState>(initialState)

    const today = moment().locale('pt-br').format('ddd, D [de] MMMM')



    const filterTasks = () => {
        let visibleTasks: TaskProps[] = []
        if (state.showDoneTasks) {
            visibleTasks = [...state.tasks]
        } else {
            const pending = (task: TaskProps) => task.doneAt === undefined
            visibleTasks = state.tasks.filter(pending)
        }
        setState({ ...state, visibleTasks: visibleTasks })

    }

    const toggleFilter = () => {
        setState({ ...state, showDoneTasks: !state.showDoneTasks })


    }


    const toggleTask = (id: number) => {
        const tasks = [...state.tasks]

        const findTaks = (task: TaskProps) => {
            if (task.id === id) {
                task.doneAt = task.doneAt ? undefined : new Date()
                setState({ ...state, tasks: tasks })
                filterTasks()
            }

        }
        tasks.find(findTaks)


    }

    useEffect(() => {
        filterTasks()
    }, [state.showDoneTasks])



    return (
        <Styles.Container>
            <Styles.Background source={todayImage}>
                <Styles.IconBar>
                    <Styles.AddButton onPress={toggleFilter}>
                        <FontAwesomeIcon
                            icon={state.showDoneTasks ? faEye : faEyeSlash}
                            color={commonStyles.colors.secondary}
                            size={20} />
                    </Styles.AddButton>
                </Styles.IconBar>
                <Styles.TitleBar>
                    <Styles.Title>Hoje</Styles.Title>
                    <Styles.Subtitles>{today}</Styles.Subtitles>
                </Styles.TitleBar>



            </Styles.Background>
            <Styles.TaskList>

                {/* O FlatList funciona igual ao map */}

                <FlatList
                    data={state.visibleTasks}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => <Task {...item} toggleTask={toggleTask} />}
                />
            </Styles.TaskList>




        </Styles.Container>
    )
}

export default TaskList