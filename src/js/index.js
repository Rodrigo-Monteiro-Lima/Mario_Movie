const modal = document.querySelector('.modal');
const btnTrailer = document.querySelector('.botao-trailer');
const btnModal = document.querySelector('.fechar-modal');
const video = document.getElementById('video');
const linkVideo = video.src;

const alternarModal = () => {
	modal.classList.toggle('aberto');
}

btnTrailer.addEventListener('click', () => {
	video.setAttribute('src', linkVideo);
	alternarModal();
});

btnModal.addEventListener('click', () => {
	video.setAttribute('src', '');
	alternarModal();
});
