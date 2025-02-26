//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    // Select the button and paragraph
    const statusParagraph = document.getElementById("status");
    const enterButton = document.getElementById("enterBtn");

    // Add event listener to the button
    enterButton.addEventListener("click", function() {
        // Update the paragraph content with an <h1> tag
        statusParagraph.innerHTML = "<h1>Entered Metaverse</h1>";
    });
});
