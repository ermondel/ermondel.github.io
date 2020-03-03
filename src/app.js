function gallery() {
  const photobox = document.getElementById('photobox');
  const btnGallery = document.getElementById('btn-gallery');
  const btnClose = document.getElementById('btn-close');
  const gallerybox = document.getElementById('gallery');
  const photo = document.getElementById('photo');

  const galleryPathList = [
    'img/im0.jpg',
    'img/im1.jpg',
    'img/im2.jpg',
    'img/im3.jpg',
    'img/im4.jpg',
    'img/im5.jpg',
    'img/im6.jpg',
    'img/im7.jpg',
    'img/im8.jpg',
    'img/im9.jpg',
    'img/im10.jpg',
    'img/im11.jpg',
    'img/im12.jpg',
    'img/im13.jpg',
    'img/im14.jpg'
  ];
  const galleryLoadList = [];

  const SHOW = true;
  const HIDE = false;

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
    toggleGallery(SHOW);
  }

  function onBtnCloseClick() {
    toggleGallery(HIDE);
  }

  function getFileName(path) {
    const sep = path.lastIndexOf('/');
    if (sep) {
      return path.substring(sep + 1, path.lastIndexOf('.'));
    } else {
      return path.substring(0, path.lastIndexOf('.'));
    }
  }

  function onGalleryClick(event) {
    if (event.target.nodeName === 'IMG') {
      const imgName = getFileName(event.target.src);
      const img = galleryLoadList.find((elem) => getFileName(elem.src) === imgName);
      if (img) {
        photo.src = img.src;
        toggleGallery(HIDE);
      }
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

  function initListeners() {
    photobox.addEventListener('mouseenter', onPhotoboxOver);
    photobox.addEventListener('mouseleave', onPhotoboxOut);
    btnGallery.addEventListener('click', onBtnGalleryClick);
    btnClose.addEventListener('click', onBtnCloseClick);
    gallerybox.addEventListener('click', onGalleryClick);
  }

  function preloadGalleryImages() {
    galleryPathList.forEach((imgPath, index, arr) => {
      const newImg = document.createElement('img');
      newImg.setAttribute('alt', 'photo');
      newImg.src = imgPath;
      newImg.onload = loadItem;
    });
  }

  initListeners();
  preloadGalleryImages();
}
