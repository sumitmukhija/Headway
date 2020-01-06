import React from 'react';
import Board from '../subscreen/Board';
import ActionArea from '../subscreen/ActionArea';
// import Pop from "../../../public/resources/audio/pop.mp3";

export default class Kanban extends React.Component{
    constructor(props: any) {
        super(props);
        this.playAudio = this.playAudio.bind(this);
    }

    playAudio() {
        let audioP = document.getElementById('popAudio');
        (audioP as HTMLMediaElement).play();
    }

    render() {
        return (
            <div className="container">
                <audio media-player="audioPlayer" crossOrigin="anonymous" src={require("../../../public/resources/audio/pop.mp3")} id="popAudio"></audio>
                <Board playAudio={this.playAudio} />
                <ActionArea playAudio={this.playAudio}/>
            </div>
        );
    }
}