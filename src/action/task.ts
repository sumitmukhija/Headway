export const addTaskAction = ({ title = '', category = 0, id = ''}) => {
    return {
        type: "ADD_TASK",
        task: {title, category, id}
    }
}

export const removeTaskAction = ({id = ''}) => {
    return {
        type: "RM_TASK",
        id
    }
}

export const updateTaskCategoryAction = ({ id = '', cat = 0}) => {
    return {
        type: "UPDATE_TASK_CAT",
        id, cat
    }
}