const startDiv = document.querySelector('.start');
startDiv.style.display = 'block';

const contentDiv = document.querySelector('.content');
contentDiv.style.display = 'none'

setTimeout(() => {
  startDiv.style.display = 'none';

  contentDiv.style.display='block'
}, 2000);



