var newimg = "fam.jpg";

function changeImage() {
  if ( newimg == "fam.jpg" ) {
    document.images["photo"].src = "img/fam.jpg";
    document.images["photo"].alt = "Fam";
    newimg  = "ashli.jpg";
  }
  else {
    document.images["photo"].src = "img/ashli.jpg";
    document.images["photo"].alt = "Ashli";
    newsrc  = "mars.jpg";
  }
}