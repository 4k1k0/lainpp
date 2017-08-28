function lightbox(){
  let img = document.getElementsByClassName('post-image');

  /*
   * Load all the big images in the thread
  */
  for (let i = 0; i < img.length; i++) {
    let link = img[i].parentElement.href;
    document.getElementById('thread').insertAdjacentHTML(
      'afterbegin', '<img class="lightbox-img-hide" src="' + link + '">'
    );
  }

  for(let i = 0; i < img.length; i++){
    /*
     *  When the pointer is on an image
     *  the image appears in the lightbox
    */
    img[i].addEventListener('mouseover', function(){
      let link = this.parentElement.href;
      let ext = link.slice(-4, link.length);
      switch (ext) {
        case '.png':
        case '.jpg':
        case 'jpeg':
        case '.gif':
        case '.bmp':
          document.getElementById('thread').insertAdjacentHTML(
            'afterbegin',
            '<div id="lightbox"><img src="' + link + '"></div>'
          );
          break;
        case '.pdf':
        case 'djvu':
        case 'epub':
        case '.txt':
          break;
        default:
          let file = link.indexOf('&');
          link = link.slice(0, file);
          let url = decodeURI(link);
          let limit = url.indexOf('v=/');
          url = 'https://lainchan.org/' + url.slice(limit + 3, url.length);
          document.getElementById('thread').insertAdjacentHTML(
            'afterbegin',
            '<div id="lightbox"><video src="' + url + '" autoplay="true" loop="true"></video></div>'
          );
          break;
      }
    }, false);

    /*
     * When pointer is out: Remove the lightbox from the DOM
    */
    img[i].addEventListener('mouseout', function(){
      document.getElementById('lightbox').parentNode.removeChild(document.getElementById('lightbox'));
    }, false);
  }
}

function expandIMG(){
  /*
   * It creates a button
   * in the bottom bar which can be used
   * to load all the original images in the thread
  */

  let bottomBar = document.getElementsByClassName('threadlinks');
  for(let i = 0; i < bottomBar.length; i++){
    bottomBar[i].insertAdjacentHTML(
      'afterbegin',
      '<span class="threadlink"><a id="expand-img">[  Expand images  ]  </a></span>'
    );
  }

  let botton = document.getElementById('expand-img');
  let img = document.getElementsByClassName('post-image');
  botton.addEventListener('click', function(){
    for(let i = 0; i < img.length; i++){
      let link = img[i].parentElement.href;
      let ext = link.slice(-4, link.length);
      switch (ext) {
        case '.png':
        case '.jpg':
        case 'jpeg':
        case '.gif':
        case '.bmp':
          img[i].click();
          break;
      }
    }
  });
}

window.addEventListener('load', function(){
  lightbox();
  expandIMG();
});
