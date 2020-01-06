import React from 'react';

const Card = (props: any) => {
    return (
        <div className="card" draggable="true" id={props.id} onDragStart={(e) => { e.dataTransfer.setData("id", props.id);}}>
            <div className="ctext">
                {props.text}
            </div>
            <div className="remove" onClick = {(e) => {}}>x</div>
        </div>
    );
}

export default Card;