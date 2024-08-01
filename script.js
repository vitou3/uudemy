
document.getElementById('search').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    let input = document.getElementById('searchInput').value.toLowerCase();
    let messageBox = document.getElementById('messageBox');
    let validInputs = ['html', 'css', 'javascript', 'guitar', 'drum', 'video editing'];

    if (validInputs.includes(input)) {
        messageBox.textContent = `You are searching for ${input}.`;
        window.open(`https://www.youtube.com/results?search_query=${input}`, '_self');
    } else {
        messageBox.textContent = 'We are not having that lesson. Instead, you can search it by yourself.';
        window.open('https://www.youtube.com', '_blank');
    }

    messageBox.style.display = 'block';
});
