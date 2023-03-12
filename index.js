let AdsInterval = setInterval(() => {
  var elem = document.getElementById('my_picture');
  if (elem) {
    elem.remove()
    console.log("element my_picture removed")
  }
}, 1000);
