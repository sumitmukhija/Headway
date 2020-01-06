import React from 'react';
import { removeTaskAction } from '../../action/task';
import { connect } from 'react-redux';

const Card = (props: any) => {
    return (
        <div className="card" draggable="true" id={props.id} onDragStart={(e) => { e.dataTransfer.setData("id", props.id);}}>
            <div className="ctext">
                {props.text}
            </div>
            <div className="remove">
                <button onClick={(e) => {
                    props.dispatch(removeTaskAction({id: props.id}));
                }
                }>x</button></div>
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return {
        tasks: state
    }
};

export default connect(mapStateToProps)(Card);