import React from 'react';
import Section from './Section';

const Board = (props: any) => {
    return (
        <div className="board">
            <Section sectionName="TASK" sectionEmoji="😓" rootClass="task" category={0} playAudio={props.playAudio}/>
            <Section sectionName="IN PROGRESS" sectionEmoji="✍🏼" rootClass="in-progress" category={1} playAudio={props.playAudio}/>
            <Section sectionName="COMPLETE" sectionEmoji="🥳" rootClass="complete" category={2} playAudio={props.playAudio}/>
        </div>
    );
};

export default Board;