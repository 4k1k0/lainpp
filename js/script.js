function lightbox(){
    var img = document.getElementsByClassName('post-image');
    var link, w, h;
    
    for(var i = 0; i < img.length; i++){
        /*
         *  When the pointer is on an image: load image into a lightbox,
         *  read the width and height of the new image
         *  and centers the image using those values
        */
        img[i].addEventListener('mouseover', function(){
            link = this.parentElement.href;
            document.getElementById('thread').insertAdjacentHTML('afterbegin', '<div id="lightbox"><img id="lightbox-img" src="' + link + '"></div>');
            var lightboxImg = document.getElementById('lightbox-img');
            w = lightboxImg.width;
            h = lightboxImg.height;
            lightboxImg.setAttribute('style', 'margin: -' + h/2 + 'px 0px 0px -' + w/2 + 'px;');
        }, false);
        
        /*
         *  When pointer is out: Remove the lightbox from the DOM
         */
        img[i].addEventListener('mouseout', function(){
            document.getElementById('lightbox').parentNode.removeChild(document.getElementById('lightbox'));
        }, false);
        
    }
    
}

function expandIMG(){
    /*
     *  It creates a button
     *  in the bottom bar which can be used
     *  to load all the original images in the thread
    */
    var bottomBar = document.getElementsByClassName('threadlinks');
    for(var i = 0; i < bottomBar.length; i++){
        bottomBar[i].insertAdjacentHTML('afterbegin', '<span class="threadlink"><a id="expand-img">[  Expand images  ]  </a></span>');
    }
    
    var botton = document.getElementById('expand-img');
    var img = document.getElementsByClassName('post-image');
    botton.addEventListener('click', function(){
        for(var i = 0; i < img.length; i++){
            img[i].click();
        }
    });
}

window.addEventListener('load', function(){
    lightbox();
    expandIMG();
});