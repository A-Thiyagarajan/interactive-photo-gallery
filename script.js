function upDate(previewPic) {
    console.log('Mouse over image:', previewPic);
    console.log('Alt text:', previewPic.alt);
    console.log('Source:', previewPic.src);

    // Update the text and background image of the #image div
    document.getElementById('image').innerHTML = previewPic.alt;
    document.getElementById('image').style.backgroundImage = 'url(' + previewPic.src + ')';
}
function undo() {
    document.getElementById('image').innerHTML = 'Hover over an image below to display here';
    document.getElementById('image').style.backgroundImage = 'url(japan.png)';
}
