const images = document.querySelectorAll("img");  // استخدمي querySelectorAll بدلًا من document.images
const totalText = document.getElementById("total"); // استخدمي الـ h3 الموجود
const btn = document.querySelector("button");

const imageArray = [
    "img/img1.jpg",
    "img/img2.jpg",
    "img/img3.jpg",
    "img/img4.jpg",
    "img/img5.jpg",
    "img/img6.jpg",
    "img/img7.jpg",
    "img/img8.jpg"
];

btn.onclick = () => {
    let first = Math.floor(Math.random() * imageArray.length);
    let second = Math.floor(Math.random() * imageArray.length);

    images[0].src = imageArray[first];
    images[1].src = imageArray[second];

    let sum = (first + 1) + (second + 1);
    totalText.innerHTML = "total = " + sum;
};