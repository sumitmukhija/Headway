import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import { updateTaskCategoryAction } from '../../action/task';
import selector from '../../selectors/task';


const SectionCardContainer = (props: any) => {
    return (
        <div className="card-holder" onDragOver={(e) => { e.preventDefault() }}  onDrop={
            (e: any) => {
                e.stopPropagation();
                props.playAudio();
                props.dispatch(updateTaskCategoryAction({ id: e.dataTransfer.getData("id"), cat: props.category }));
            }
        }>
            {props.tasks.map((task: any) => <Card text={task.title} key={task.id} id={task.id}/>)}
        </div>);
};

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        tasks: selector(state, ownProps.category)
    }
};

export default connect(mapStateToProps)(SectionCardContainer);