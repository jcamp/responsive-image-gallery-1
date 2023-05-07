// select the gallery element
const gallery = document.querySelector('.gallery');

// add a click event listener to the gallery element
gallery.addEventListener('click', event => {
  if (event.target.tagName === 'IMG') {
    // get the caption text from the title attribute of the clicked img element
    const caption = event.target.title;

    // create a modal dialog element
    const modal = document.createElement('div');
    modal.classList.add('modal');

    // create a figure element to hold the image and caption
    const figure = document.createElement('figure');

    // create an image element to show the full-size image
    const image = document.createElement('img');
    if (event.target.dataset.src) {
      image.src = event.target.dataset.src;
    } else {
      image.src = event.target.src;
    }
    image.style.userSelect = 'none';  // prevent selecting or dragging the image

    // create a figcaption element to show the caption under the image
    const figcaption = document.createElement('figcaption');
    figcaption.textContent = caption;

    // add the image and caption elements to the figure element
    figure.appendChild(image);
    figure.appendChild(figcaption);

    // create a close button element
    const close = document.createElement('button');
    close.textContent = 'Close';

    // add the figure and close button elements to the modal dialog
    modal.appendChild(figure);
    modal.appendChild(close);

    // add a click event listener to the modal dialog
    modal.addEventListener('click', event => {
      if (event.target === modal || event.target === close || event.target === image) {
        // remove the modal dialog when the user clicks outside the image or on the close button
        modal.remove();
      }
    });

    // add the modal dialog to the gallery element
    gallery.appendChild(modal);
  }
});