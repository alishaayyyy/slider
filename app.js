// var images = [
//   "https://cdn.magicdecor.in/com/2024/02/08155013/The-Bike-Rider-Wallpaper-for-Wall.jpg",
//   "https://static.vecteezy.com/system/resources/previews/027/533/480/non_2x/car-or-bike-smokie-background-realistic-ai-generative-free-photo.jpg",
//   "https://c4.wallpaperflare.com/wallpaper/96/926/535/road-neon-motorcycle-moto-wallpaper-preview.jpg",
//   "https://static.vecteezy.com/system/resources/thumbnails/033/692/783/small_2x/motorcycle-rider-rides-on-a-race-track-at-sunset-motion-blur-motorcycle-rider-on-sport-bike-rides-fast-on-race-track-at-sunset-extreme-athlete-sport-motorcycles-racing-ai-generated-free-photo.jpg",
  
// ];

// currentIndex = 0;

// function next() {
//   //   var currentImg = document.getElementById("slider-img");
//   // console.log(currentImg);
//   // console.log(currentImg.src);
//   //   currentIndex++;
//   //   currentImg.src = images[currentIndex];

//   var currentImg = document.getElementById("slider-img");

//   if (currentIndex === images.length - 1) {
//     currentIndex = 0;
//   } else {
//     currentIndex++;
//   }
//   currentImg.src = images[currentIndex];
// }

// function prev() {
//   var currentImg = document.getElementById("slider-img");
//   if (currentIndex === 0) {
//     currentIndex = images.length - 1;
//   } else {
//     currentIndex--;
//   }

//   currentImg.src = images[currentIndex];
// }


 // Array of image URLs
 const images = [
  "https://cdn.magicdecor.in/com/2024/02/08155013/The-Bike-Rider-Wallpaper-for-Wall.jpg",
  "https://static.vecteezy.com/system/resources/previews/027/533/480/non_2x/car-or-bike-smokie-background-realistic-ai-generative-free-photo.jpg",
  "https://c4.wallpaperflare.com/wallpaper/96/926/535/road-neon-motorcycle-moto-wallpaper-preview.jpg",
  "https://static.vecteezy.com/system/resources/thumbnails/033/692/783/small_2x/motorcycle-rider-rides-on-a-race-track-at-sunset-motion-blur-motorcycle-rider-on-sport-bike-rides-fast-on-race-track-at-sunset-extreme-athlete-sport-motorcycles-racing-ai-generated-free-photo.jpg"
];

let currentIndex = 0; // The current image index

// Function to change the image
function changeImage(direction) {
  currentIndex += direction; // Increase or decrease the index by 1
  
  // Wrap around the index if it goes out of bounds
  if (currentIndex >= images.length) currentIndex = 0; // Go back to the first image
  if (currentIndex < 0) currentIndex = images.length - 1; // Go to the last image if we go before the first

  // Update the image source
  document.getElementById('slider-img').src = images[currentIndex];
}


// circle
var dots = document.getElementsByClassName("dot");

