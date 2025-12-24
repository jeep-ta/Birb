// Theme Toggle Functionality
(function () {
    'use strict';

    // 1. Helper to safely access localStorage
    function getStoredTheme() {
        try {
            return localStorage.getItem('theme');
        } catch (e) {
            console.warn('LocalStorage is not available:', e);
            return null;
        }
    }

    function setStoredTheme(theme) {
        try {
            localStorage.setItem('theme', theme);
        } catch (e) {
            console.warn('Unable to save to LocalStorage:', e);
        }
    }

    // 2. Early Execution: Apply theme immediately to prevent FOUC (Flash of Unstyled Content)
    const htmlElement = document.documentElement;
    const storedTheme = getStoredTheme();
    // Default to light if nothing stored
    const currentTheme = storedTheme || 'light';

    htmlElement.setAttribute('data-theme', currentTheme);

    // 3. Initialize UI when DOM is ready
    document.addEventListener('DOMContentLoaded', function () {
        const themeToggle = document.getElementById('themeToggle');

        // Update icon based on the current attribute (which we set above)
        updateToggleIcon(htmlElement.getAttribute('data-theme'));

        if (themeToggle) {
            themeToggle.addEventListener('click', function () {
                // Get current state from DOM
                const theme = htmlElement.getAttribute('data-theme');
                // Calculate new state
                const newTheme = theme === 'dark' ? 'light' : 'dark';

                // Apply new state
                htmlElement.setAttribute('data-theme', newTheme);
                setStoredTheme(newTheme);
                console.log('Theme switched to:', newTheme); // Debug log

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
})();

