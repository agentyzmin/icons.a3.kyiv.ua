// Global site tag (gtag.js) - Google Analytics
(function()
{
  var script = document.createElement('script')
      script.src = 'https://www.googletagmanager.com/gtag/js?id=UA-71269206-7'
      script.async = true

  document.head.insertBefore(
    script,
    document.querySelector("script")
  )
})()

window.dataLayer = window.dataLayer || [];

function gtag() {
    window.dataLayer.push(arguments);
}

gtag('js', new Date());
gtag('config', 'UA-71269206-7');
