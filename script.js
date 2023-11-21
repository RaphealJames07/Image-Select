const addImgIcon = document.getElementById("AddImgIcon");
const fileInput = document.getElementById("fileInput");
const image = document.getElementById("Image");

addImgIcon.addEventListener("click", () => {
    fileInput.click();
});

fileInput.addEventListener("change", () => {
    const selectFile = fileInput.files[0];
    image.src = URL.createObjectURL(selectFile);
    console.log(selectFile);
});


