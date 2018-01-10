import yaml from 'js-yaml'

window.onload = async () => {

  const img = document.querySelector('#logo-carousel')

  const images = yaml
      .load(await fetch('assets/conf/data.yaml'))
      .svgs
      .map((img) => 'assets/svg/' + img.file + '.svg')

  if (undefined === images) return

  images.current = 1

  setInterval(() => {
    img.src = images[ images.current++ ]
    if (images.current === images.length) images.current = 0
  }, 600)

}
