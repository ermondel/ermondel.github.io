function gallery() {
  const photobox = document.getElementById('photobox');
  const btnGallery = document.getElementById('btn-gallery');
  const btnClose = document.getElementById('btn-close');
  const gallerybox = document.getElementById('gallery');
  const photo = document.getElementById('photo');

  const galleryPathList = ['img/im0.jpg', 'img/im1.jpg', 'img/im2.jpg', 'img/im3.jpg', 'img/im4.jpg', 'img/im5.jpg', 'img/im6.jpg'];
  const galleryLoadList = [];

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
    if (event.target.nodeName === 'IMG' && event.target.id[3]) {
      const id = event.target.id[3];
      photo.src = galleryLoadList[id].src;
      toggleGallery(false);
    }
  }

  function addImagesToGallery() {
    if (galleryLoadList.length === galleryPathList.length) {
      gallerybox.removeChild(gallerybox.firstChild);
      galleryLoadList.forEach((img) => {
        gallerybox.appendChild(img);
      });
    }
  }

  function loadItem() {
    galleryLoadList.push(this);
    addImagesToGallery();
  }

  photobox.addEventListener('mouseenter', onPhotoboxOver);
  photobox.addEventListener('mouseleave', onPhotoboxOut);
  btnGallery.addEventListener('click', onBtnGalleryClick);
  btnClose.addEventListener('click', onBtnCloseClick);
  gallerybox.addEventListener('click', onGalleryClick);

  galleryPathList.forEach((imgPath, index, arr) => {
    const newImg = document.createElement('img');
    newImg.setAttribute('alt', 'photo');
    newImg.setAttribute('id', 'im-' + index);
    newImg.src = imgPath;
    newImg.onload = loadItem;
  });
}
