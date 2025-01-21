
	
        const gallery = document.querySelector('.gallery');
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
            
            // Add more image filenames here
        ];

var test = true;

        images.forEach(image => {

		 	const div = document.createElement('div');
			 div.classList.add('carousel-item');
			
			if(test){		
				 div.classList.add('active');		
				test=false;				
			}
			
			
            const img = document.createElement('img');
			
            img.src = `${imageFolder}/${image}`;
			
			img.classList.add('d-block');
			img.classList.add('w-100');
										
			div.appendChild(img);
						
            carousel.appendChild(div); 
			
			
        });
    
	
	/* 			const div = document.createElement('div');
			div.classList.add("responsive");
			
			const div2 = document.createElement('div');
			div2.classList.add("gallery");
							
			const anchor = document.createElement('a');
			anchor.target = '_blank';
			anchor.href = 'google.ca';
						
            const img = document.createElement('img');
            img.src = `${imageFolder}/${image}`;
								
			anchor.appendChild(img);
			div2.appendChild(anchor);
			div.appendChild(div2);
						
            gallery.appendChild(div); */