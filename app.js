const photobox = document.getElementById('photobox');
const btnGallery = document.getElementById('btn-gallery');
const gallery = document.getElementById('gallery');

function onPhotoboxOver(event) {
  btnGallery.style.visibility = 'visible';
}
function onPhotoboxOut(event) {
  btnGallery.style.visibility = 'hidden';
  gallery.style.visibility = 'hidden';
}
function onBtnGalleryClick(event) {
  gallery.style.visibility = 'visible';
}

photobox.addEventListener('mouseenter', onPhotoboxOver);
photobox.addEventListener('mouseleave', onPhotoboxOut);
btnGallery.addEventListener('click', onBtnGalleryClick);
