import {FilterValuesType, TodolistType} from "../App"
import {v1} from "uuid";

type RemoveTodolistActionType={
    type: "REMOVE-TODOLIST",
    id: string
}

type AddTodolistActionType = {
    type: "ADD-TODOLIST"
    title: string
}

type ChangeTodolistActionType = {
    type: "CHANGE-TODOLIST-TITLE"
    id: string
    title: string
}
export type ChangeTodolistFilterActionType = {
    type: "CHANGE-TODOLIST-FILTER"
    id: string
    filter: FilterValuesType
}

type ActionsType = RemoveTodolistActionType|AddTodolistActionType|ChangeTodolistActionType|ChangeTodolistFilterActionType

export const todolistsReducer = (state: Array<TodolistType>, action: ActionsType): Array<TodolistType> =>{
    switch(action.type) {
        case "REMOVE-TODOLIST":{
            return state.filter(tl => tl.id !== action.id)
        }
        case "ADD-TODOLIST":{
            return [...state, {
                id: v1(),
                title: action.title,
                filter: "all"
            }]
        }
        case "CHANGE-TODOLIST-TITLE": {
            const todolist = state.find(tl => tl.id ===action.id);
            if (todolist) {
                todolist.title = action.title;
            }
            return [ ...state]
        }

        case "CHANGE-TODOLIST-FILTER": {
            const todolist = state.find(tl => tl.id ===action.id);
            if (todolist) {
                todolist.filter = action.filter;
            }
            return [ ...state]
        }
        default: throw new Error("I don't understand action type")
    }
}

export const RemoveTodolistAC = (todolistId: string): RemoveTodolistActionType => {
    return { type: 'REMOVE-TODOLIST', id: todolistId}
}

export const AddTodolistAC = (title: string): AddTodolistActionType => {
    return { type: 'ADD-TODOLIST', title: title}
}

export const ChangeTodolistTitleAC = (id: string, title: string): ChangeTodolistActionType => {
    return { type: 'CHANGE-TODOLIST-TITLE', id, title: title}
}

export const ChangeTodolistFilterAC = (id: string, filter: FilterValuesType): ChangeTodolistFilterActionType => {
    return { type: 'CHANGE-TODOLIST-FILTER', id, filter: filter}
}