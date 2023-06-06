"use strict";
//adding images to array
const initiateimages = () =>{
    
  let image1 = new Image();
  image1.src = "./images/back.png";
  let image2 = new Image();
  image2.src = "./images/blank.png";

  for(let i=0;i<24;i++){
  imagesArray[i] = new Image();
  imagesArray[i].src =  "./images/card_1.png";
  cardsArray[i] = imagesArray[i].src;
  }

}

