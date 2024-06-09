import './style.css';
import './modules/icons';

const dropdownBtn = document.querySelectorAll('.dropdown-btn');
const dropdown = document.querySelectorAll('.dropdown');
const hamburgerBtn = document.querySelector('#hamburger');
const navMenu = document.querySelector('.menu');
const links = document.querySelectorAll('.dropdown a');

const setAriaExpandedFalse = () => {
    dropdownBtn.forEach((btn) => btn.setAttribute('aria-expanded', 'false'));
};

const closeDropdownMenu = () => {
    dropdown.forEach((drop) => {
        drop.classList.remove('active');
        drop.addEventListener('click', e => e.stopPropagation());
    });
};

const toggleHamburger = () => {
    navMenu.classList.toggle('show');
};

dropdownBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const dropdownIndex = e.currentTarget.dataset.dropdown;
        const dropdownElement = document.getElementById(dropdownIndex);
        
        dropdownElement.classList.toggle('active');
        dropdown.forEach((drop) => {
            if (drop.id !== btn.dataset['dropdown']) {
                drop.classList.remove('active');
            };
        });
        e.stopPropagation();
        btn.setAttribute(
            'aria-expanded',
            btn.getAttribute('aria-expanded') === 'false' ? 'true' : 'false'
        );
    });
});

links.forEach((link) => {
    link.addEventListener('click', () => {
        closeDropdownMenu();
        setAriaExpandedFalse();
        toggleHamburger();
    });
});

document.documentElement.addEventListener('click', () => {
    closeDropdownMenu();
    setAriaExpandedFalse();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeDropdownMenu();
        setAriaExpandedFalse();
    };
});

hamburgerBtn.addEventListener('click', toggleHamburger);