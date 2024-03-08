function playSong() {
    var name = document.getElementById('nameInput').value;
    var songElement = document.getElementById('song');
    var imageElement = document.getElementById('image');
    var textElement = document.getElementById('text');

    // Play the song (replace 'song.mp3' with your song file path)
    var audio = new Audio('song.mp3');
    audio.play();

    // Display image and text based on the entered name
    imageElement.innerHTML = '<img src="image.jpg" alt="Image">';
    textElement.innerHTML = 'Hello, ' + name + '! Enjoy the song! LMAO';
}
