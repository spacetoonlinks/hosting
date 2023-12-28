document.addEventListener('DOMContentLoaded', function () {
    // Get the button element by its ID
    var watchAdButton = document.getElementById('watchAdButton');

    // Add a click event listener to the button
    watchAdButton.addEventListener('click', function () {
        // Get the modal element by its ID
        var modal = document.getElementById('modal');

        // Hide the modal by setting its display property to 'none'
        modal.style.display = 'none';
    });
});