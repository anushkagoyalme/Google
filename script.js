const imageDivs = document.querySelectorAll('.image-div');

imageDivs.forEach(div => {
  div.addEventListener('click', () => {
    const message = div.getAttribute('data-message');
    alert(message);
  });
});