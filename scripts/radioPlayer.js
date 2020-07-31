export const radioPlayerInit = () =>{

    const radio = document.querySelector('.radio');
    const radioStop = document.querySelector('.radio-stop');
    const radioCoverImg = document.querySelector('.radio-cover__img');
    const radioNavigation = document.querySelector('.radio-navigation');
    const radioHeaderBig = document.querySelector('.radio-header__big');
    const radioItem = document.querySelectorAll('.radio-item');
    const radioVolume = document.querySelector('.radio-volum')
	const radioIconValueOff = document.querySelector('.radio-icon-value-Off')
	const playerBtn = document.querySelectorAll('.player-btn')
    const audio = new Audio();

    audio.type = 'audio/aac';
    radioStop.disabled = true;
    radioVolume.value = 50;

    let radioVolumeValue;
    
    const changeIconPlay = () => {
        if (audio.paused) {
            radio.classList.remove('play');
            radioStop.classList.remove('fa-stop');
            radioStop.classList.add('fa-play');
        } else {
            radio.classList.add('play');
            radioStop.classList.remove('fa-play');
            radioStop.classList.add('fa-stop');
        }
    };

    const selectItem = element => {
        radioItem.forEach(item => item.classList.remove('select'));
        element.classList.add('select');
    };

    const changeRadioVolume = value => {
		audio.volume = value / 100;
		radioVolum.value = value;
	};

    radioNavigation.addEventListener('change', event => {
        const target = event.target;
        const parent = target.closest('.radio-item');
        selectItem(parent);

        const title = parent.querySelector('.radio-name').textContent;
        radioHeaderBig.textContent = title;

        const img = parent.querySelector('.radio-img').src;
        radioCoverImg.src = img;

        radioStop.disabled = false;
        audio.src = target.dataset.radioStantion;
        audio.play();

        changeIconPlay();
    });

    radioStop.addEventListener('click', () => {
        (audio.paused) ? audio.play() :  audio.pause();
        changeIconPlay();
    });

    radioVolume.addEventListener('input', () => {
		audio.volume = radioVolume.value / 100
    });
    
    radioIconValueOff.addEventListener('click', () => {
		if (audio.volume != 0 ){
			radioVolumeValue = radioVolume.value;
			changeRadioVolume(0);
			radioIconValueOff.classList.add('fa-volume-off');
			radioIconValueOff.classList.remove('fa-volume-down');

		} else {

			changeRadioVolume(radioVolumeValue);
			radioIconValueOff.classList.remove('fa-volume-off');
			radioIconValueOff.classList.add('fa-volume-down');
		}
    });
    
    playerBtn[0].addEventListener('click', () =>{
		audio.pause();
		changeIconPlay();
	});

	playerBtn[1].addEventListener('click', () =>{
		audio.pause();
		changeIconPlay();
	});
    
};