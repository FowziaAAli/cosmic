// Get a reference to the button element
const button = document.getElementById('button');

// Get a reference to the next page element
const nextPage = document.querySelector('.next-page');

button.addEventListener('click', () => {
    console.log('Button clicked!'); // Debugging
    // Redirect to the next page (replace 'next-page.html' with the actual URL)
    window.location.href = 'main.html';

    // Hide the entry page and show the next page with a fade effect
    document.querySelector('.enter').style.opacity = '0';

    // Use a timeout to ensure the transition starts after the entry page is hidden
    setTimeout(() => {
        nextPage.style.display = 'flex';
        nextPage.style.opacity = '1';
    }, 100);
});