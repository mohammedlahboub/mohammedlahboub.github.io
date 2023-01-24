
//! Verified info box
const verifiedIcon = document.getElementById('verifiedIcon');
const verifiedInfo = document.getElementById('verifiedInfo');

verifiedIcon.addEventListener('click', () => {
    verifiedInfo.classList.replace('hidden', 'flex')
})

window.onclick = function (event) {
    if (event.target == verifiedInfo) {
        verifiedInfo.classList.replace('flex', 'hidden')

    }
}