var yt = document.getElementById("YTLinkInput")
var button = document.getElementById("YTLinkButton")
var buttonNoCookie = document.getElementById("YTLinkButtonNoCookies")
var main = document.getElementById("main")
var search = window.location.search
const searchParams = new URLSearchParams(search)
var interval
var iframe = null
var isTextRemoving = false

if (searchParams.has("x") === true) {
  document.getElementById("resX").value = searchParams.get("x")
}

if (searchParams.has("y") === true) {
  document.getElementById("resY").value = searchParams.get("y")
}

if (searchParams.has("url") === true) {
  yt.value = searchParams.get("url")
  createEmbed(true)
} else if (searchParams.has("v") === true) {
  yt.value = searchParams.get("v")
  createEmbed(true)
}

function createEmbed(cookies, url) {
  if (yt.value !== "") {
    if (yt.value.includes("https://www.youtube.com/watch?v=")) {
      var embeddedUrl = ""
      if (cookies === true) {
        embeddedUrl = yt.value.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/');
      } else {
        embeddedUrl = yt.value.replace('https://www.youtube.com/watch?v=', 'https://www.youtube-nocookie.com/embed/');
      }
      
      console.log(embeddedUrl);
      if (iframe !== null) {
        main.removeChild(iframe)
      }
      
      iframe = document.createElement("iframe");
      iframe.style = 'width: 1280px; height: 720px; left: 0px; top: 0px;'
      
      let resX = document.getElementById("resX")
      let resY = document.getElementById("resY")
      if (isNaN(resX.value) || isNaN(resY.value)) {

      } else {
        if (resX.value !== "") {
          iframe.width = resX.value
          iframe.style += 'width: '+resX.value+';'
        }
        if (resY.value !== "") {
          iframe.height = resY.value
          iframe.style += 'height: '+resY.value+';'
        }
      }
      
      iframe.src = embeddedUrl
      iframe.title = "YouTube video player"
      iframe.frameborder = 0
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      iframe.setAttribute('allowfullscreen', '')
      main.appendChild(iframe)
      yt.value = ""
      
    } else if (yt.value.includes("https://youtu.be/")) {
      var embeddedUrl = ""
      if (cookies === true) {
        embeddedUrl = yt.value.replace('https://youtu.be/', 'https://www.youtube.com/embed/');
      } else {
        embeddedUrl = yt.value.replace('https://youtu.be/', 'https://www.youtube-nocookie.com/embed/');
      }

      console.log(embeddedUrl);
      if (iframe !== null) {
        main.removeChild(iframe)
      }

      iframe = document.createElement("iframe");
      iframe.style = 'width: 1280px; height: 720px; left: 0px; top: 0px;'

      let resX = document.getElementById("resX")
      let resY = document.getElementById("resY")
      if (isNaN(resX.value) || isNaN(resY.value)) {

      } else {
        if (resX.value !== "") {
          iframe.width = resX.value
          iframe.style += 'width: '+resX.value+';'
        }
        if (resY.value !== "") {
          iframe.height = resY.value
          iframe.style += 'height: '+resY.value+';'
        }
      }
      
      iframe.src = embeddedUrl
      iframe.title = "YouTube video player"
      iframe.frameborder = 0
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      iframe.setAttribute('allowfullscreen', '')
      main.appendChild(iframe)
      yt.value = ""
      
    } else if (yt.value.length == 11) {
      var embeddedUrl = ""
      if (cookies === true) {
        embeddedUrl = "https://www.youtube.com/embed/"+yt.value
      } else {
        embeddedUrl = "https://www.youtube-nocookie.com/embed/"+yt.value
      }

      console.log(embeddedUrl);
      if (iframe !== null) {
        main.removeChild(iframe)
      }

      iframe = document.createElement("iframe");
      iframe.style = 'width: 1280px; height: 720px; left: 0px; top: 0px;'

      let resX = document.getElementById("resX")
      let resY = document.getElementById("resY")
      if (isNaN(resX.value) || isNaN(resY.value)) {

      } else {
        if (resX.value !== "") {
          iframe.width = resX.value
          iframe.style += 'width: '+resX.value+';'
        }
        if (resY.value !== "") {
          iframe.height = resY.value
          iframe.style += 'height: '+resY.value+';'
        }
      }

      iframe.src = embeddedUrl
      iframe.title = "YouTube video player"
      iframe.frameborder = 0
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      iframe.setAttribute('allowfullscreen', '')
      main.appendChild(iframe)
      yt.value = ""
    } else {
      if (isTextRemoving === false) {
        isTextRemoving = true
        function removeText() {
          isTextRemoving = false
          yt.value = ""
          clearInterval(interval)
        }
        yt.value = "Please put a youtube URL here!"
        interval = setInterval(removeText, 3000)
      }
    }
  }
}
