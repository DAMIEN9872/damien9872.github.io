
const gallery = document.querySelector('#gallery');
const carousel = document.querySelector('.carousel-inner');


const imageFolder = 'https://damien9872.github.io/images'; 

// Manually list the images for now
const images = [
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
'2023-12-17b.jpg',
'2024-01-14.jpg',
'2024-01-21.jpg',
'2024-01-28.jpg',
'2024-02-03.jpg',
'2024-03-02.jpg',
'2024-03-24.jpg',
'2024-04-05.jpg',
'2024-04-05b.jpg',
'2024-04-07.jpg',
'2024-04-07b.jpg',
'2024-04-07c.jpg',
'2024-04-07d.jpg',
'2024-04-14.jpg',
'2024-04-14b.jpg',
'2024-04-15.jpg',
'2024-04-15b.jpg',
'2024-04-17.jpg',
'2024-04-21.jpg',
'2024-04-21b.jpg',
'2024-04-24.jpg',
'2024-04-28.jpg',
'2024-04-28b.jpg',
'2024-05-05.jpg',
'2024-05-06.jpg',
'2024-05-08.jpg',
'2024-05-18.jpg',
'2024-05-19.jpg',
'2024-05-19b.jpg',
'2024-06-09.jpg',
'2024-06-30.jpg',
'2024-06-30b.jpg',
'2024-07-02.jpg',
'2024-07-02b.jpg',
'2024-07-07.jpg',
'2024-07-07b.jpg',
'2024-07-14.jpg',
'2024-07-14b.jpg',
'2024-07-16.jpg',
'2024-08-09.jpg',
'2024-08-10.jpg',
'2024-08-11.jpg',
'2024-08-11b.jpg',
'2024-09-05.jpg',
'2024-09-08.jpg',
'2024-09-08b.jpg',
'2024-09-14.jpg',
'2024-09-29.jpg',
'2024-10-02.jpg',
'2024-10-09.jpg',
'2024-10-11.jpg',
'2024-10-11b.jpg',
'2024-10-13.jpg',
'2024-10-13b.jpg',
'2024-10-25.jpg',
'2024-11-17.jpg',
'2024-11-23.jpg',
'2024-11-23b.jpg',
'2024-11-24.jpg',
'2024-11-30.jpg',
'2024-11-30b.jpg',
'2024-12-09.jpg',
'2024-12-10.jpg',
'2025-01-04.jpg',
'2025-01-11.jpg',
'2025-01-18.jpg',
'2025-01-25.jpg',
'2025-01-25b.jpg',
'2025-01-25c.jpg'	

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

