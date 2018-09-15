// VEGAS
// Background SLideShow
// Codepen Demo
// http://vegas.jatysalvat.com

// Pictures from Unsplash
// http://unsplash.com/

$('#slider').vegas({
  overlay: true,
  transition: 'fade', 
  transitionDuration: 4000,
  delay: 10000,
  color: 'red',
  animation: 'random',
  animationDuration: 20000,
  slides: [
      { src: 'Bootstrap 4 Portfolio Template For Developers_files/vegasSlider/vegas (1).jpg' },
      { src: 'Bootstrap 4 Portfolio Template For Developers_files/vegasSlider/vegas (2).jpg' },
      { src: 'Bootstrap 4 Portfolio Template For Developers_files/vegasSlider/vegas (2).jpg' },
      { src: 'Bootstrap 4 Portfolio Template For Developers_files/vegasSlider/vegas (2).jpg' },
      { src: 'Bootstrap 4 Portfolio Template For Developers_files/vegasSlider/vegas (2).jpg' },
      { src: 'Bootstrap 4 Portfolio Template For Developers_files/vegasSlider/vegas (2).jpg' },
      { src: 'Bootstrap 4 Portfolio Template For Developers_files/vegasSlider/vegas (3).jpg' },
      { src: 'Bootstrap 4 Portfolio Template For Developers_files/vegasSlider/vegas (4).jpg' },
      { src: 'Bootstrap 4 Portfolio Template For Developers_files/vegasSlider/vegas (5).jpg' },
      { src: 'Bootstrap 4 Portfolio Template For Developers_files/vegasSlider/vegas (6).jpg' },
      { src: 'Bootstrap 4 Portfolio Template For Developers_files/vegasSlider/vegas (7).jpg' },
      { src: 'Bootstrap 4 Portfolio Template For Developers_files/vegasSlider/vegas (8).jpg' },
      { src: 'Bootstrap 4 Portfolio Template For Developers_files/vegasSlider/vegas (9).jpg' },
      { src: 'Bootstrap 4 Portfolio Template For Developers_files/vegasSlider/vegas (10).jpg' },
      { src: 'Bootstrap 4 Portfolio Template For Developers_files/vegasSlider/vegas (11).jpg' },
      
               

                                         
  ]
});
$("#js-rotating").Morphext({
  animation: "rotateIn",
  speed: 10200,
  
  complete: function () {
      console.log("This is called after a phrase is animated in! Current phrase index: " + this.index);
  }
});