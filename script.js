document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript is working!');
    
    document.querySelector('.explore').addEventListener('click', function() {
        const menu = document.getElementById('mainMenu');
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'block';  // Show the menu
        } else {
            menu.style.display = 'none';  // Hide the menu
        }
    });
});