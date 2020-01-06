
let defaultState: any = [];

export const taskReducer = (state = defaultState, action: any) => {
    switch (action.type) {
        case 'ADD_TASK':
            return state.concat(action.task);
        case 'UPDATE_TASK_CAT':
            return state.map((t: any) => {
                if (t.id === action.id) {
                    return { ...t, category: action.cat};
                }
                return t;
            });
        case 'RM_TASK':
            return state.filter((task: any) => {
                return task.id != action.id;
            });
        default:
            return state;
    }
}