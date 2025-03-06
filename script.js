// Change these values only 👇
const youtubeVideoID = "SGf1ZByL4Ec";  // Change this to your YouTube Video ID
const softwareDownloadLink = "https://github.com/mhemon404/project01/releases/download/Panel/Sportzfy_TV_v5.0.apk"; // Change this to your software link

// Set YouTube Video
document.getElementById("videoPlayer").src = `https://www.youtube.com/embed/${youtubeVideoID}`;

// Download Button Function
function downloadSoftware() {
    alert("Your download is starting... Enjoy high-speed video streaming!");
    window.location.href = softwareDownloadLink;
}
