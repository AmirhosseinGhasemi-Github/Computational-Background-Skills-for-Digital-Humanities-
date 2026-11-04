
const photos = [
    {
        src: "/photo_2026-10-19_16-37-34.jpg",
        title: "Untitled, from Inside the small blue collection, oil on paper, 14x19 cm, 2023"
    },
    {
        src: "/photo_2026-10-19_16-37-41.jpg",
        title: "Untitled, from a part of the whole collection, mixed media on cardboard, 30x40 cm, 2024"
    },
    {
        src: "/photo_2026-10-19_16-37-44.jpg",
        title: "Untitled, mixed media on canvas,14x19cm, 2018"
    },
    {
        src: "/photo_2026-10-19_16-37-47.jpg",
        title: "Eva, from in the mirror collection, mixed media on paper, 50x70 cm, 2024"
    },
    {
        src: "/photo_2026-10-19_16-37-49.jpg",
        title: "Untitled, from Inside the small blue, mixed media on canvas, 40x30cm, 2020 "
    },
    {
        src: "/photo_2026-10-19_16-38-05.jpg",
        title: "Untitled, from a part of the whole collection, mixed media on cardboard, 30x40 cm, 2024"
    }
];

let currentIndex = 0;

const carouselImage = document.getElementById("carouselImage");
const carouselTitle = document.getElementById("carouselTitle");
const photoCounter = document.getElementById("photoCounter");

function showPhoto(index) {
    currentIndex = (index + photos.length) % photos.length;

    carouselImage.src = photos[currentIndex].src;
    carouselImage.alt = photos[currentIndex].title;
    carouselTitle.textContent = photos[currentIndex].title;

    photoCounter.textContent =
        `${currentIndex + 1} / ${photos.length}`;
}

document.getElementById("prevButton").addEventListener("click", () => {
    showPhoto(currentIndex - 1);
});

document.getElementById("nextButton").addEventListener("click", () => {
    showPhoto(currentIndex + 1);
});
showPhoto(0);


