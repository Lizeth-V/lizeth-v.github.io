const imagePaths = [
    'static/assets/Personal Adventures/IMG_01.JPG',
    'static/assets/Personal Adventures/IMG_02.JPG',
    'static/assets/Personal Adventures/IMG_5222.JPG',
    'static/assets/Personal Adventures/IMG_6280.JPG',
    'static/assets/Personal Adventures/IMG_6997.HEIC',
    'static/assets/Personal Adventures/IMG_8776.HEIC'
];

function shuffleImgArray(array){
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

function setImages(){
    const shuffledImages = shuffleImgArray(imagePaths);

    document.getElementById('pa_img1').src = shuffledImages[0];
    document.getElementById('pa_img2').src = shuffledImages[1];
    document.getElementById('pa_img3').src = shuffledImages[2];
    document.getElementById('pa_img4').src = shuffledImages[3];
}

window.addEventListener('load', setImages);

