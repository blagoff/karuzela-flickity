

var pictures = [
	{
		title: 'Burdż Chalifa', 
		image: 'background-size: cover',
		id: 'burj',
		src: 'http://www.exceedation-lighting.com/photos/projekt_9826_0811061716.jpg',
		cords:{lat: 25.197508, lng: 55.274430},
		index: '0'
	},
	{
		title: 'Shanghai Tower', 
		image: 'background-size: cover',
		id: 'shan',
		src: 'https://asialink.unimelb.edu.au/__data/assets/image/0004/2054497/Shanghai.jpg',
		cords:{lat: 31.233761, lng: 121.505621},
		index: '1'
	},
	{
		title: 'Abradż al-Bajt', 
		image: 'background-size: cover',
		id: 'abra',
		src: 'https://i.pinimg.com/originals/74/29/89/7429891bc8015d91902bb7c422130e50.jpg',
		cords:{lat: 21.418844, lng: 39.825506},
		index: '2'
	},
	{
		title: 'Ping An Finance Center', 
		image: 'background-size: cover',
		id: 'ping',
		src: 'https://i.pinimg.com/originals/be/f7/42/bef7428debb7ebfe60b42ba14a7b23d6.jpg',
		cords:{lat: 22.533172, lng: 114.056369},
		index: '3'
	},
	{
		title: 'Lotte World Tower', 
		image: 'background-size: cover',
		id: 'lott',
		src: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Final_circulation_of_the_Kaaba.jpg',
		cords:{lat: 37.512859, lng: 127.102563},
		index: '4'
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
var temp = document.getElementById('przemek');

var elem = document.querySelector('.gallery');
var flkty = new Flickity(elem, {
    imagesLoaded: true,
    cellAlign: 'left',
    pageDots: false,
    contain: true,
    hash: true,
});

console.log(gallery);

var previousWrappedButton = document.querySelector('.button--previous-wrapped');
previousWrappedButton.addEventListener( 'click', function() {
  flkty.previous( true );
});


var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

var infos = document.getElementById('infos');

window.initMap = function() {
  // The location of Uluru
  //var burj = {lat: 25.197508, lng: 55.274430};



  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 17, center:pictures[1]['cords']});
  // The marker, positioned at Uluru
var markerOne = new google.maps.Marker({
			position: pictures[1]['cords'],
			map: map
		});

markerOne.addListener('click', function(){
	infos.innerHTML = 'You clicked markerOne';
		});	

// var markerTwo = new google.maps.Marker({
// 			position: coords2,
// 			map: map
// 	});

// 	markerTwo.addListener('click', function(){
// 		infos.innerHTML = 'You clicked markerTwo';
// 	});		

// 	var markerThree = new google.maps.Marker({
// 		position: coords3,
// 		map: map
// 	});

// 	markerThree.addListener('click', function(){
// 		infos.innerHTML = 'You clicked markerThree';
// 	});	
}