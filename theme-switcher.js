/* theme-switcher.js */

document.addEventListener('DOMContentLoaded', () => {
    const themeSwitcher = document.getElementById('theme-switcher');
    const html = document.documentElement;
    
    // Define the theme cycle as specified in the brief
    const themes = [
        'terracotta-led', 
        'midnight-led', 
        'olive-led'
    ];
    
    // Get current theme from local storage or set default
    let currentTheme = localStorage.getItem('arshi-theme') || themes[0];
    
    // Apply initial theme
    html.setAttribute('data-theme', currentTheme);
    
    // Update button text
    const updateButtonText = (theme) => {
        themeSwitcher.textContent = `Theme: ${theme.split('-')[0]}`;
    };
    
    updateButtonText(currentTheme);

    // Function to cycle themes
    const cycleTheme = () => {
        // Find the index of the current theme
        const currentIndex = themes.indexOf(currentTheme);
        // Calculate the next index (loop back to 0 if at the end)
        const nextIndex = (currentIndex + 1) % themes.length;
        
        currentTheme = themes[nextIndex];
        
        // 1. Apply theme to the <html> element
        html.setAttribute('data-theme', currentTheme);
        
        // 2. Save theme preference
        localStorage.setItem('arshi-theme', currentTheme);
        
        // 3. Update button text
        updateButtonText(currentTheme);
    };

    // Attach event listener to the button
    if (themeSwitcher) {
        themeSwitcher.addEventListener('click', cycleTheme);
    }
});
