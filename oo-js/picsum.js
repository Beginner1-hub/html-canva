export const randomImage = function(size) {
    const img = document.createElement("img");
    img.src = `https://picsum.photos/${size}`;
    return img;
};

export const generateRandomImageSize = function() {
    return Math.floor(Math.random() * 500) + 100;
};

export const generateRandomImage = function() {
    const size = generateRandomImageSize();
    return randomImage(size);
};