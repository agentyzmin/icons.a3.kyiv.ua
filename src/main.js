window.onload = function () {

  var images = [
    'Metro Logo.svg',
    'Urban Rail Logo.svg',
    'Funicular Logo.svg',
    'Metro M1.svg',
    'Metro M2.svg',
    'Metro M3.svg',
    'Metro M4.svg',
    'Tram.svg',
    'Bus.svg',
    'Trolley.svg',
    'Marshrutka.svg',
    'Funicular.svg',
    'Train.svg',
    'Airport.svg',
    'Railway Station.svg',
    'Bus Station.svg',
    'Port.svg',
    'Bike.svg',
    'Bike Stencil.svg',
    'Disabled.svg',
    'Pedestrian.svg',
  ].map(function(img) {return 'assets/svg/' + img})


  images.current = 1

  var img = document.querySelector('#logo-carousel')

  setInterval(function () {
      img.src = images[ images.current++ ];
      if (images.current === images.length) images.current = 0;
  }, 600);

}
