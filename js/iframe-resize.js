// iframe-resize.js

window.addEventListener('message', function (event) {
    if (event.data.type === 'resize-news-iframe') {
      const iframe = document.getElementById('news-iframe');
      if (iframe) {
        iframe.style.height = event.data.height + 'px';
      }
    }
  });
  