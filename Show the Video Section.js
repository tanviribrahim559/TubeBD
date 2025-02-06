// Show the Video Section
document.getElementById("video-link").addEventListener("click", function () {
    document.getElementById("video-section").style.display = "block";
    document.querySelector("header").style.display = "none";
});

// Redirect to Video
function goToVideo(videoUrl) {
    window.open(videoUrl, "_blank");
}

// Show Shop Categories
document.getElementById("shop-link").addEventListener("click", function () {
    document.getElementById("shop-section").style.display = "block";
    document.querySelector("header").style.display = "none";
});

// Show Category
function showCategory(categoryId) {
    document.getElementById(categoryId).style.display = "block";
}

// Redirect to Buy Now Link
function buyNow(url) {
    window.open(url, "_blank");
}

// Go Back to the Main Site
function goBack() {
    document.querySelectorAll('.section').forEach(section => section.style.display = "none");
    document.querySelector("header").style.display = "flex";
}
