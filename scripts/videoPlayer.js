import { addZero } from './supScript.js'
export const videoPlayerInit = () =>{
    const videoPlayer = document.querySelector('.video-player');
    const videoButtonPlay = document.querySelector('.video-button__play');
    const videoButtonStop = document.querySelector('.video-button__stop');
    const videoProgress = document.querySelector('.video-progress');
    const videoVolume = document.querySelector('.video-volume');
    const videoTimePassed = document.querySelector('.video-time__passed');
    const videoTimeTotal = document.querySelector('.video-time__total');

    const toggleIcon = () => {
        if (videoPlayer.paused) {
             videoButtonPlay.classList.remove('fa-pause');
             videoButtonPlay.classList.add('fa-play');
        } else {
            videoButtonPlay.classList.remove('fa-play');
            videoButtonPlay.classList.add('fa-pause');
        }

    };

    const togglePlay = () => {
            (videoPlayer.paused) ?  videoPlayer.play() : videoPlayer.pause();
            toggleIcon();
    };

    const stopPlay = () => {
        videoPlayer.pause();
        videoButtonPlay.classList.remove('fa-pause');
        videoButtonPlay.classList.add('fa-play');
        videoPlayer.currentTime=0;
    };

    videoPlayer.addEventListener('click', togglePlay);
    videoButtonPlay.addEventListener('click', togglePlay);

    videoButtonStop.addEventListener('click', stopPlay);

    videoPlayer.addEventListener('timeupdate', () => {
        const currentTime = videoPlayer.currentTime;
        const duration = videoPlayer.duration;

        videoProgress.value = (currentTime / duration) * 100;

        let minutePassed = Math.floor(currentTime / 60);
        let secondsPassed = Math.floor(currentTime % 60);

        let minuteTotal = Math.floor(duration / 60);
        let secondsTotal = Math.floor(duration % 60);

        videoTimePassed.textContent = `${addZero(minutePassed)}:${addZero(secondsPassed)}`;
        videoTimeTotal.textContent = `${addZero(minuteTotal)}:${addZero(secondsTotal)}`;

    });
    
    videoProgress.addEventListener('change', () => {
        const duration = videoPlayer.duration;
        const value = videoProgress.value;

        videoPlayer.currentTime = (value * duration) / 100 ;

    });

    videoVolume.addEventListener('input', () => {
        videoPlayer.volume = videoVolume.value / 100;
    });
};
