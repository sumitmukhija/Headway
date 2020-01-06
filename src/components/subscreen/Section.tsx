import React from 'react';
import SectionHeader from './SectionHeader';
import SectionCardContainer from './SectionCardContainer';

const Section = (props: any) => {
    return (
        <div className={props.rootClass}>
            <SectionHeader sectionName={props.sectionName} sectionEmoji={props.sectionEmoji} />
            <SectionCardContainer category={props.category} playAudio={props.playAudio}/>
        </div>
    );
};

export default Section;