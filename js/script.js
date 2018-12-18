

var pictures = [
	{
		title: 'Burdż Chalifa', 
		image: 'background-size: cover',
		id: 'burj',
		src: 'http://www.exceedation-lighting.com/photos/projekt_9826_0811061716.jpg'
	},
	{
		title: 'Shanghai Tower', 
		image: 'background-size: cover',
		id: 'shan',
		src: 'https://asialink.unimelb.edu.au/__data/assets/image/0004/2054497/Shanghai.jpg'
	},
	{
		title: 'Abradż al-Bajt', 
		image: 'background-size: cover',
		id: 'abra',
		src: 'https://i.pinimg.com/originals/74/29/89/7429891bc8015d91902bb7c422130e50.jpg'
	},
	{
		title: 'Ping An Finance Center', 
		image: 'background-size: cover',
		id: 'ping',
		src: 'https://i.pinimg.com/originals/be/f7/42/bef7428debb7ebfe60b42ba14a7b23d6.jpg'
	},
	{
		title: 'Lotte World Tower', 
		image: 'background-size: cover',
		id: 'lott',
		src: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Final_circulation_of_the_Kaaba.jpg'
	}
];

var template_gallery = document.getElementById('template_gallery').innerHTML;
var gallery = document.querySelector('.gallery');

Mustache.parse(template_gallery);
var renderedTemplates = '';

for (var i = 0; i < pictures.length; i++) {
    renderedTemplates += Mustache.render(template_gallery, pictures[i]);
}
gallery.innerHTML = renderedTemplates;

var elem = document.querySelector('.gallery');
var flkty = new Flickity(elem, {
    imagesLoaded: true,
    cellAlign: 'left',
    pageDots: false,
    contain: true,
    hash: true,
});

var elem = document.querySelector('.gallery');


var flkty = new Flickity( elem, {
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