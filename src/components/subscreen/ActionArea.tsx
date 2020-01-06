import React from 'react';
import { connect } from 'react-redux';
import { addTaskAction } from '../../action/task';
import uuid from 'uuid';

const ActionArea = (props: any) => {

    const createTask = (title = 'No Title', category = 0, id = uuid()) => {
        return {
            title, category, id
        }
    }

    const addTaskToTodo = (e: any) => {
        e.preventDefault();
        const item = e.target.elements.intext.value;
        if (item) {
            e.target.elements.intext.value = "";
            props.playAudio();
            props.dispatch(addTaskAction(createTask(item)));
        }
    };

    return (<div className="action">
        <div className="form-container">
            <form onSubmit={addTaskToTodo}>
                <input type="text" autoComplete = 'off' name="intext" placeholder="Task goes here.."></input>
                <input type="submit" value="👌🏻" className="btn" />
            </form>
        </div>
    </div>);
};

const mapStatesToProps = (state: any) => {
	return  {
		tasks: state
	}
}

export default connect(mapStatesToProps)(ActionArea);