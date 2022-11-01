import React, { useEffect, useState } from "react";
import { Alert, FlatList, TouchableOpacity } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEye, faEyeSlash, faPlus } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'
import 'moment/locale/pt-br'

import * as Styles from "./TaskList.style"

import Task from "../../components/Task";
import commonStyles from "../../commonStyles"
import AddTask from "../AddTask";
import { NewTaskProps } from "../../global/interface/types";
import todayImage from "../../assets/imgs/today.jpg"


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
    tasks: []
}


const TaskList = () => {

    const [state, setState] = useState<InitialState>(initialState)

    const today = moment().locale('pt-br').format('ddd, D [de] MMMM')


    const loader = async () => {
        const stateString = await AsyncStorage.getItem("tasksState")

        const state = stateString ? JSON.parse(stateString) : initialState
        setState(state)


    }



    const filterTasks = () => {
        let visibleTasks: TaskProps[] = []
        if (state.showDoneTasks) {
            visibleTasks = [...state.tasks]
        } else {
            const pending = (task: TaskProps) => task.doneAt === undefined
            visibleTasks = state.tasks.filter(pending)
        }
        setState({ ...state, visibleTasks: visibleTasks })
        AsyncStorage.setItem("tasksState", JSON.stringify(state))

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

    const addTask = (newTask: NewTaskProps) => {
        if (!newTask.desc || !newTask.desc.trim()) {
            Alert.alert("Dados Inválidos", "Descrição não informada!")
            return

        }

        const tasks = [...state.tasks]
        tasks.push({
            id: Math.random(),
            desc: newTask.desc,
            estimateAt: newTask.date,
            doneAt: undefined
        })
        setState({ ...state, tasks: tasks, showDoneTasks: false, showAddTask: false })


    }
    const deleteTask = (id: number) => {

        const tasks = state.tasks.filter(task => task.id !== id)
        setState({ ...state, tasks: tasks })

    }

    useEffect(() => {
        loader()
    }, [])

    useEffect(() => {
        filterTasks()
    }, [state.showDoneTasks, state.tasks])





    return (
        <Styles.Container>
            <AddTask
                onCancel={() => setState({
                    ...state, showAddTask:
                        false
                })}
                onSave={addTask}
                isVisible={state.showAddTask}



            />
            <Styles.Background source={todayImage}>
                <Styles.IconBar>
                    <TouchableOpacity onPress={toggleFilter}>
                        <FontAwesomeIcon
                            icon={state.showDoneTasks ? faEye : faEyeSlash}
                            color={commonStyles.colors.secondary}
                            size={20} />
                    </TouchableOpacity>
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
                    renderItem={
                        ({ item }) =>
                            <Task {...item} toggleTask={toggleTask} onDelete={deleteTask} />}
                />
            </Styles.TaskList>

            <Styles.AddButton
                activeOpacity={0.7}
                onPress={() => setState({ ...state, showAddTask: true })}>
                <FontAwesomeIcon icon={faPlus} size={20} color={commonStyles.colors.secondary} />
            </Styles.AddButton>




        </Styles.Container>
    )
}

export default TaskList