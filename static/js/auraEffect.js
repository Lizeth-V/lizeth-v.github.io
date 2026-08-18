const cursorBlob = document.getElementById('blob-cursor');
const landing = document.querySelector('.landing');

document.addEventListener('mousemove', e => {
    const rect = landing.getBoundingClientRect();
    if (e.clientY > rect.bottom) return;

    const blobsW = rect.width  * 1.4;
    const blobsH = rect.height * 1.4;
    const offX   = rect.width  * 0.2;
    const offY   = rect.height * 0.2;

    const x = ((e.clientX - rect.left + offX) / blobsW) * 100;
    const y = ((e.clientY - rect.top  + offY) / blobsH) * 100;

    cursorBlob.style.left = `${x}%`;
    cursorBlob.style.top  = `${y}%`;
});