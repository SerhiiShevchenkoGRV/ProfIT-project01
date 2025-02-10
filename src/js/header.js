document.addEventListener('DOMContentLoaded', () => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    navLinks: document.querySelectorAll('.mobile-menu-list .mobile-nav-link'),
    orderProjectBtnMobile: document.querySelector('.mobile-btn'),
    orderProjectBtnDesktop: document.querySelector('.header-btn'),
    dropdowns: document.querySelectorAll('.dropdown'),
  };

  if (refs.openMenuBtn && refs.closeMenuBtn && refs.menu) {
    refs.openMenuBtn.addEventListener('click', () => {
      console.log('Open menu clicked!');
      toggleMenu();
    });

    refs.closeMenuBtn.addEventListener('click', () => {
      console.log('Close menu clicked!');
      toggleMenu();
    });

    if (refs.navLinks.length) {
      refs.navLinks.forEach(link => {
        link.addEventListener('click', () => {
          console.log(`Navigating to: ${link.getAttribute('href')}`);
          window.location.href = link.getAttribute('href');
          closeMenu();
        });
      });
    }

    // Обробник для мобільної кнопки "Order the project"
    if (refs.orderProjectBtnMobile) {
      refs.orderProjectBtnMobile.addEventListener('click', () => {
        console.log('Order the project clicked (mobile)!');
        scrollToWorkTogetherSection();
        closeMenu();
      });
    }

    // Обробник для десктопної кнопки "Order the project"
    if (refs.orderProjectBtnDesktop) {
      refs.orderProjectBtnDesktop.addEventListener('click', () => {
        console.log('Order the project clicked (desktop)!');
        scrollToWorkTogetherSection();
      });
    }

    // Обробники для меню, що випадає
    if (refs.dropdowns.length) {
      refs.dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function (event) {
          const dropdownContent = this.querySelector('.dropdown-content');
          dropdownContent.classList.toggle('show');
          event.stopPropagation();
        });
      });
    }
  }

  // Функция для плавного скроллинга к секции "work-together"
  function scrollToWorkTogetherSection() {
    const workTogetherSection = document.getElementById('work-togeth');
    if (workTogetherSection) {
      workTogetherSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
  }

  function closeMenu() {
    refs.menu.classList.remove('is-open');
  }

  // Закрити меню при зміні ширини екрана (для планшетів та десктоп)
  window.addEventListener('resize', () => {
    if (window.innerWidth > 767) {
      closeMenu();
    }
  });

  // Закриття випадаючих меню при кліку поза ними
  document.addEventListener('click', function (event) {
    refs.dropdowns.forEach(dropdown => {
      const dropdownContent = dropdown.querySelector('.dropdown-content');
      if (!dropdown.contains(event.target)) {
        dropdownContent.classList.remove('show');
      }
    });
  });
});
