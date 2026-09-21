
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('slider');
    const afterImage = document.getElementById('afterImage');

    if (slider && afterImage) {
        slider.addEventListener('input', (e) => {
            const val = e.target.value;
            afterImage.style.width = `${val}%`;
        });
    }
});
