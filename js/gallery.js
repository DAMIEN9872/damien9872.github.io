
const gallery = document.querySelector('#gallery');
const carousel = document.querySelector('.carousel-inner');


const imageFolder = 'https://damien9872.github.io/images'; 

// Manually list the images for now
const images = [
	'2023-01-28.jpg',
	'2023-01-28b.jpg',
	'2023-02-04.jpg',
	'2023-02-04b.jpg',
	'2023-02-04c.jpg',
	'2023-02-25.jpg',
	'2023-02-25b.jpg',
	'2023-02-25c.jpg',
	'2023-03-04.jpg',
	'2023-03-04b.jpg',
	'2023-03-25.jpg',
	'2023-03-25b.jpg',
	'2023-03-26.jpg',
	'2023-03-26b.jpg',
	'2023-04-15.jpg',
	'2023-04-15b.jpg',
	'2023-04-16.jpg',
	'2023-04-16b.jpg',
	'2023-04-19.jpg',
	'2023-05-03.jpg',
	'2023-05-07.jpg',
	'2023-05-07b.jpg',
	'2023-05-07c.jpg',
	'2023-06-10.jpg',
	'2023-06-17.jpg',
	'2023-06-24.jpg',
	'2023-08-13.jpg',
	'2023-08-13b.jpg',
	'2023-08-19.jpg',
	'2023-08-20.jpg',
	'2023-09-16.jpg',
	'2023-09-16b.jpg',
	'2023-09-17.jpg',
	'2023-09-17b.jpg',
	'2023-09-23.jpg',
	'2023-09-24.jpg',
	'2023-10-01.jpg',
	'2023-10-01b.jpg',
	'2023-10-07.jpg',
	'2023-10-07b.jpg',
	'2023-10-21.jpg',
	'2023-10-21b.jpg',
	'2023-10-22.jpg',
	'2023-10-22b.jpg',
	'2023-11-05.jpg',
	'2023-11-05b.jpg',
	'2023-11-11.jpg',
	'2023-11-11b.jpg',
	'2023-11-25.jpg',
	'2023-12-02.jpg',
	'2023-12-02b.jpg',
	'2023-12-17.jpg',
	'2023-12-17b.jpg'
	
	
	// Add more image filenames here
];

var first = true;
var count = 0;

 images.forEach(image => {

	// ------- Add to gallery
	const gallerydiv = document.createElement('div');
	gallerydiv.classList.add("col-12", "col-sm-6", "col-lg-3");

	const img = document.createElement('img');
	img.src = `${imageFolder}/${image}`;
	img.classList.add("w-100");
	img.setAttribute('data-bs-target','#carouselGallery');
	img.setAttribute('data-bs-slide-to',count);
	count=count+1;

	gallerydiv.appendChild(img);
	gallery.appendChild(gallerydiv);
			
	// ------- Add to Carousel		
	const carouseldiv = document.createElement('div');
	carouseldiv.classList.add("carousel-item");
	
	if(first){
		carouseldiv.classList.add("active");
		first=false;
	}
	
	
	const img2 = document.createElement('img');
	img2.src = `${imageFolder}/${image}`;
	img2.classList.add("d-block","w-100");
 	
	carouseldiv.appendChild(img2);
	carousel.appendChild(carouseldiv);
	
			
}); 

