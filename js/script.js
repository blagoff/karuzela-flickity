var elem = document.querySelector('.carousel');


var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  imagesLoaded: true,
  lazyload: true,
  hash: true,
});

var previousWrappedButton = document.querySelector('.button--previous-wrapped');
previousWrappedButton.addEventListener( 'click', function() {
  flkty.previous( true );
});


var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});
