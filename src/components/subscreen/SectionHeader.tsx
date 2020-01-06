import React from 'react';

const SectionHeader = (props: any) => {
    return (<div className="section-header">
        <div className="section-header-text">
            {props.sectionName}
        </div>
        <div className="section-header-emoji">{props.sectionEmoji}</div>
    </div>);
};

export default SectionHeader