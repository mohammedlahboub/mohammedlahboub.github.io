//! Verified info box
const verifiedInfo = document.getElementById('verifiedInfo');
document.getElementById('verifiedIcon').addEventListener('click', () => {
    verifiedInfo.classList.replace('hidden', 'flex')
})

window.onclick = function (event) {
    if (event.target == verifiedInfo) {
        verifiedInfo.classList.replace('flex', 'hidden')

    }
}