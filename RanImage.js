function updateImage() {
    const arrImage = [
      "Image Folder/1.jpg",
      "Image Folder/2.jpg",
      "Image Folder/3.jpg",
      "Image Folder/4.jpg",
      "Image Folder/5.jpg",
      "Image Folder/6.jpg",
    ];
  
    const randNu = Math.floor(Math.random() * arrImage.length);
  
    document.querySelector(".randon").src = arrImage[randNu];
  }
  
  // Call the updateTime function every second
  setInterval(updateImage, 2000);
  