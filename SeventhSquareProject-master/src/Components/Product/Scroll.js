const thumbnails = document.getElementsByClassName('thumbnailactive')

  const activeImages = document.getElementsByClassName('thumbnailactive')

  for (var i = 0; i < thumbnails.length; i++) {

    thumbnails[i].addEventListener('mouseover', function () {
      console.log(activeImages)

      if (activeImages.length > 0) {
        activeImages[0].classList.remove('thumbnailactive')
      }


      this.classList.add('thumbnailactive')
      document.getElementById('featured').src = this.src
    })
  }


  var buttonRight = document.getElementById('slideRight');
  var buttonLeft = document.getElementById('slideLeft');

  buttonLeft.addEventListener('click', function () {
    document.getElementById('productslider').scrollLeft -= 180
  })

  buttonRight.addEventListener('click', function () {
    document.getElementById('productslider').scrollLeft += 180
  })

