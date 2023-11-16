// // select your html elements into javascript
// const image = document.querySelector('img');
// const input = document.querySelector('input');


// // then add an event listener for the input variable such that when the input field changes event / state it should run the function after it 
// input.addEventListener('change', () => {
//   const selectedFile = input.files[0];
//   image.src = URL.createObjectURL(selectedFile)
//   console.log(selectedFile);
// });

const image = document.querySelector('img');
const input = document.querySelector('input');

input.addEventListener('change', () => {
  const selectedFiles = input.files;

  if (selectedFiles.length > 0) {
    const imageArray = [];

    for (let i = 0; i < selectedFiles.length; i++) {
      const fileName = selectedFiles[i].name;
      console.log('Selected file:', fileName);
      imageArray.push(URL.createObjectURL(selectedFiles[i]));
    }
    console.log(selectedFiles);
    console.log('Array of image URLs:', imageArray);

    // Display the first image in the array inside the circle
    image.src = imageArray[0];
  } else {
    console.log('No files selected');
  }
});
