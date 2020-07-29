export const radioPlayerInit = () =>{

    const radio = document.querySelector('.radio');
    const radioStop = document.querySelector('.radio-stop');
    const radioCoverImg = document.querySelector('.radio-cover__img');
    const radioNavigation = document.querySelector('.radio-navigation');
    const radioHeaderBig = document.querySelector('.radio-header__big');
    const radioItem = document.querySelectorAll('.radio-item');
    
    const audio = new Audio();
    audio.type = 'audio/aac';

    radioStop.disabled = true;
    
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
};