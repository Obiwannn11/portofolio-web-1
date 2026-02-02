// Dark Mode & Interaction Logic

console.log("%c GOLD & BLACK LOADED ", "background: #000; color: #FFD700; font-size: 20px; padding: 10px; border: 4px solid #FFD700;");

// Dark Mode Handling
const htmlElement = document.documentElement;

// Function to set theme
function setTheme(isDark) {
    if (isDark) {
        htmlElement.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        htmlElement.classList.remove('dark');
        localStorage.theme = 'light';
    }
}

// Check preference on load
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    setTheme(true);
} else {
    setTheme(false);
}

// Toggle Event
document.addEventListener('click', (e) => {
    // Check if clicked element or parent is the toggle button
    const toggleBtn = e.target.closest('#theme-toggle') || e.target.closest('#theme-toggle-mobile');
    if (toggleBtn) {
        setTheme(!htmlElement.classList.contains('dark'));
        updateIcons();
    }
});

function updateIcons() {
    const sunIcon = document.getElementById('icon-sun');
    const moonIcon = document.getElementById('icon-moon');
    const isDark = htmlElement.classList.contains('dark');
    
    // Safety check if elements exist (in case DOM isn't ready or changed)
    if (sunIcon && moonIcon) {
        if (isDark) {
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        } else {
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        }
    }
}

// -------------------------------------------------------------
// Back to Top Button Logic
// -------------------------------------------------------------
const backToTopBtn = document.getElementById('back-to-top');

if (backToTopBtn) {
    // Show/Hide button on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.remove('hidden');
            // Small delay to allow display:block to apply before opacity transition
            setTimeout(() => {
                backToTopBtn.classList.remove('opacity-0', 'translate-y-10');
            }, 10);
        } else {
            backToTopBtn.classList.add('opacity-0', 'translate-y-10');
            // Wait for transition to finish before hiding
            setTimeout(() => {
                if (window.scrollY <= 300) {
                    backToTopBtn.classList.add('hidden');
                }
            }, 300);
        }
    });

    // Scroll to top on click
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Run update icons on load
window.addEventListener('DOMContentLoaded', updateIcons);


// Optional: Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                 behavior: 'smooth'
            });
        }
    });
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        // Scrolled down: Add background, border, and make interactive
        navbar.classList.remove('p-4', 'sm:p-6', 'pointer-events-none');
        navbar.classList.add('py-4', 'px-6', 'bg-neo-bg', 'border-b-4', 'border-neo-text', 'shadow-neo-sm', 'pointer-events-auto');
    } else {
        // At top: Transparent
        navbar.classList.add('p-4', 'sm:p-6', 'pointer-events-none');
        navbar.classList.remove('py-4', 'px-6', 'bg-neo-bg', 'border-b-4', 'border-neo-text', 'shadow-neo-sm', 'pointer-events-auto');
    }
});
