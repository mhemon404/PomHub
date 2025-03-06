// Change these values only 👇
const youtubeVideoID = "dQw4w9WgXcQ";  // Change this to your YouTube Video ID
const softwareDownloadLink = "https://example.com/download"; // Change this to your software link

// Set YouTube Video
document.getElementById("videoPlayer").src = `https://www.youtube.com/embed/${youtubeVideoID}`;

// Download Button Function
function downloadSoftware() {
    alert("Your download is starting... Enjoy high-speed video streaming!");
    window.location.href = softwareDownloadLink;
}