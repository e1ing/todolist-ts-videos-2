import React, {ChangeEvent} from "react";
import {FilterValuesType} from "./App";
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";
import {Button, Checkbox, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "./state/store";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "./state/tasks-reducer";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    changeFilter: (todolistId: string, value: FilterValuesType) => void
    filter: FilterValuesType
    removeTodolist: (todolistId: string) => void
    changeTodolistTitle: (id: string, newTitle: string) => void
}

export function Todolist(props: PropsType) {
    const tasks =useSelector<AppRootState, Array<TaskType>>(state => state.tasks[props.id]) || []
    const dispatch = useDispatch();


    const onAllClickHandler = () => props.changeFilter(props.id, "all" )
    const onActiveClickHandler = () => props.changeFilter(props.id, "active" )
    const onCompletedClickHandler = () => props.changeFilter( props.id, "completed")

    const removeTodolist = () => {
        props.removeTodolist(props.id)
    }
    const changeTodolistTitle = (newTitle: string) => {
        props.changeTodolistTitle(props.id, newTitle)
    }

    let allTodolistTasks = tasks;
    let tasksForTodolist=allTodolistTasks;

    if (props.filter==="active"){
        tasksForTodolist = allTodolistTasks.filter(t=>t.isDone===false)
    }
    if (props.filter==="completed"){
        tasksForTodolist = allTodolistTasks.filter(t=>t.isDone===true)
    }


    return (
        <div>

            <h3><EditableSpan title={props.title} onChange={changeTodolistTitle}/>
                <IconButton onClick={removeTodolist}>
                    <Delete/>
                </IconButton>
               </h3>
            <AddItemForm addItem={()=>dispatch(addTaskAC(props.title, props.id))}/>

            <div>
                {
                    tasksForTodolist.map(t => {
                        const onRemoveHandler = () => {
                            dispatch (removeTaskAC(t.id, props.id));
                        }
                        const onChangeCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            dispatch(changeTaskStatusAC(t.id, e.currentTarget.checked,  props.id))

                        }
                        const onChangeTitleHandler = (newValue: string) => {
                            dispatch(changeTaskTitleAC(t.id, newValue, props.id))
                        }

                        return <div /*className={t.isDone ? "is-done" : ""} key={t.id}*/>
                            <Checkbox
                                   checked={t.isDone}
                                   onChange={onChangeCheckboxHandler}
                            />
                            <EditableSpan title={t.title} onChange={onChangeTitleHandler}/>
                            <IconButton onClick={onRemoveHandler}><Delete/></IconButton>
                        </div>
                    })
                }
            </div>

            <div>
                <Button variant={props.filter === "all" ?'contained'  : "text" }
                        onClick={onAllClickHandler}>All
                </Button>
                <Button color={'primary'}
                        variant={props.filter === "active" ? "contained" : "text"}
                        onClick={onActiveClickHandler}>Active
                </Button>
                <Button color={'secondary'}
                        variant={props.filter === "completed" ? "contained" : "text"}
                        onClick={onCompletedClickHandler}>Completed
                </Button>
            </div>
        </div>
    );
}



