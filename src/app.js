function gallery() {
  const photobox = document.getElementById('photobox');
  const btnGallery = document.getElementById('btn-gallery');
  const btnClose = document.getElementById('btn-close');
  const gallerybox = document.getElementById('gallery');
  const photo = document.getElementById('photo');

  function toggleGallery(visible) {
    gallerybox.style.visibility = visible ? 'visible' : 'hidden';
    btnGallery.style.visibility = visible ? 'hidden' : 'visible';
    btnClose.style.visibility = visible ? 'visible' : 'hidden';
  }

  function onPhotoboxOver() {
    const galleryVisibility = gallerybox.style.visibility;

    if (!galleryVisibility || galleryVisibility === 'hidden') {
      btnGallery.style.visibility = 'visible';
    }
  }

  function onPhotoboxOut() {
    btnGallery.style.visibility = 'hidden';
  }

  function onBtnGalleryClick() {
    toggleGallery(true);
  }

  function onBtnCloseClick() {
    toggleGallery(false);
  }

  function onGalleryClick(event) {
    if (event.target.className === 'gallery-item') {
      photo.src = event.target.src;
      toggleGallery(false);
    }
  }

  photobox.addEventListener('mouseenter', onPhotoboxOver);
  photobox.addEventListener('mouseleave', onPhotoboxOut);
  btnGallery.addEventListener('click', onBtnGalleryClick);
  btnClose.addEventListener('click', onBtnCloseClick);
  gallerybox.addEventListener('click', onGalleryClick);
}
