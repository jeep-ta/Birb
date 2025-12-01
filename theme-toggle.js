// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get the theme toggle button
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;
    
    // Check for saved theme preference or default to 'light' mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', currentTheme);
    
    // Update toggle button icon
    updateToggleIcon(currentTheme);
    
    // Add click event listener
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            // Get current theme
            const theme = htmlElement.getAttribute('data-theme');
            
           // Toggle theme
            const newTheme = theme === 'dark' ? 'light' : 'dark';
            
            // Set new theme
            htmlElement.setAttribute('data-theme', newTheme);
            
            // Save to localStorage
            localStorage.setItem('theme', newTheme);
            
            // Update icon
            updateToggleIcon(newTheme);
        });
    }
    
    function updateToggleIcon(theme) {
        if (themeToggle) {
            if (theme === 'dark') {
                themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
            } else {
                themeToggle.innerHTML = '<i class="bi bi-moon-fill"></i>';
            }
        }
    }
});
