document.addEventListener('DOMContentLoaded', () => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    navLinks: document.querySelectorAll('.mobile-menu-list .mobile-nav-link'),
    orderProjectBtn: document.querySelector('.mobile-btn'),
  };

  // Перевірка наявності елементів
  if (refs.openMenuBtn && refs.closeMenuBtn && refs.menu) {
    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);

    // Закриття меню при кліку на посилання
    if (refs.navLinks.length) {
      refs.navLinks.forEach(link => {
        link.addEventListener('click', () => {
          window.location.href = link.getAttribute('href'); // Переходимо до відповідної секції
          closeMenu();
        });
      });
    }

    // Додавання функціоналу для кнопки Order the project в мобільному меню
    if (refs.orderProjectBtn) {
      refs.orderProjectBtn.addEventListener('click', () => {
        window.location.href = '#work together'; // Переходимо до секції 'Work together'
        closeMenu();
      });
    }
  }

  // Функція для відкриття та закриття меню
  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
  }

  // Функція для закриття меню
  function closeMenu() {
    refs.menu.classList.remove('is-open');
  }
});

// ==============================================================================

// Показати/приховати меню, що випадає
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  dropdown.addEventListener('click', function (event) {
    const dropdownContent = this.querySelector('.dropdown-content');

    if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none';
    } else {
      dropdownContent.style.display = 'block';
    }

    event.stopPropagation();
  });
});

// Плавний скролл для якірних посилань
const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Плавно прокручуємо до цільового елементу
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});
