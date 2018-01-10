import yaml from 'js-yaml'

async function* getImagesGen() {
  let currentImg = 0
  const img = document.querySelector('#logo-carousel')

  const images = yaml
      .load(
          await (
              await fetch('assets/conf/data.yaml')
          ).text()
      )
      .svgs
      .map((img) => 'assets/svg/' + img.file + '.svg')

  if (undefined === images) return

  const imgLen = images.length

  yield img

  while(true) {
      yield images[currentImg]
      currentImg = (currentImg + 1) % imgLen
  }

}

window.onload = async () => {
  const imgGen = getImagesGen()
  const img = (await imgGen.next()).value

  setInterval(async () => {
    img.src = (await imgGen.next()).value
  }, 600)

}
