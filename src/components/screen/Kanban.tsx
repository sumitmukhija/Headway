import React from 'react';
import Board from '../subscreen/Board';
import ActionArea from '../subscreen/ActionArea';
export default class Kanban extends React.Component{
    constructor(props: any) {
        super(props);
        this.playAudio = this.playAudio.bind(this);
    }

    playAudio() {
        var url = document.querySelector('audio').src;
        var audio = new Audio();
        audio.src = url;
        var playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.then(function () {
                audio.addEventListener('timeupdate', function () {
                }, true);
            }).catch(function (error) {
                
            });
        }

    }

    render() {
        return (
            <div className="container">
                <audio ref="popAudio" media-player="audioPlayer" crossOrigin="anonymous" src={'../../../resources/audio/pop.mp3'} id="popAudio"></audio>
                <Board playAudio={this.playAudio} />
                <ActionArea playAudio={this.playAudio}/>
            </div>
        );
    }
}