// document.addEventListener('DOMContentLoaded', () => {
//   const refs = {
//     openMenuBtn: document.querySelector('[data-menu-open]'),
//     closeMenuBtn: document.querySelector('[data-menu-close]'),
//     menu: document.querySelector('[data-menu]'),
//     navLinks: document.querySelectorAll('.mobile-menu-list .mobile-nav-link'),
//     orderProjectBtnMobile: document.querySelector('.mobile-btn'),
//     orderProjectBtnDesktop: document.querySelector('.header-btn'),
//     dropdowns: document.querySelectorAll('.dropdown'),
//   };

//   if (refs.openMenuBtn && refs.closeMenuBtn && refs.menu) {
//     refs.openMenuBtn.addEventListener('click', () => {
//       toggleMenu();
//     });

//     refs.closeMenuBtn.addEventListener('click', () => {
//       toggleMenu();
//     });

//     if (refs.navLinks.length) {
//       refs.navLinks.forEach(link => {
//         link.addEventListener('click', () => {
//           window.location.href = link.getAttribute('href');
//           closeMenu();
//         });
//       });
//     }

//     // Обробник для мобільної кнопки "Order the project"
//     if (refs.orderProjectBtnMobile) {
//       refs.orderProjectBtnMobile.addEventListener('click', () => {
//         scrollToWorkTogetherSection();
//         closeMenu();
//       });
//     }

//     // Обробник для десктопної кнопки "Order the project"
//     if (refs.orderProjectBtnDesktop) {
//       refs.orderProjectBtnDesktop.addEventListener('click', () => {
//         scrollToWorkTogetherSection();
//       });
//     }

//     // Обробники для меню, що випадає
//     if (refs.dropdowns.length) {
//       refs.dropdowns.forEach(dropdown => {
//         dropdown.addEventListener('click', function (event) {
//           const dropdownContent = this.querySelector('.dropdown-content');
//           dropdownContent.classList.toggle('show');
//           event.stopPropagation();
//         });
//       });
//     }
//   }

//   // Функция для плавного скроллинга к секции "work-together"
//   function scrollToWorkTogetherSection() {
//     const workTogetherSection = document.getElementById('work-togeth');
//     if (workTogetherSection) {
//       workTogetherSection.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start',
//       });
//     }
//   }

//   function toggleMenu() {
//     refs.menu.classList.toggle('is-open');
//   }

//   function closeMenu() {
//     refs.menu.classList.remove('is-open');
//   }

//   // Закрити меню при зміні ширини екрана (для планшетів та десктоп)
//   window.addEventListener('resize', () => {
//     if (window.innerWidth > 767) {
//       closeMenu();
//     }
//   });

//   // Закриття випадаючих меню при кліку поза ними
//   document.addEventListener('click', function (event) {
//     refs.dropdowns.forEach(dropdown => {
//       const dropdownContent = dropdown.querySelector('.dropdown-content');
//       if (!dropdown.contains(event.target)) {
//         dropdownContent.classList.remove('show');
//       }
//     });
//   });
// });
// =====================================================================================
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
      toggleMenu();
      disableBodyScroll(); // Отключаем скролл при открытии меню
    });

    refs.closeMenuBtn.addEventListener('click', () => {
      toggleMenu();
      enableBodyScroll(); // Включаем скролл при закрытии меню
    });

    if (refs.navLinks.length) {
      refs.navLinks.forEach(link => {
        link.addEventListener('click', () => {
          window.location.href = link.getAttribute('href');
          closeMenu();
          enableBodyScroll(); // Включаем скролл при переходе по ссылке
        });
      });
    }

    // Обробник для мобільної кнопки "Order the project"
    if (refs.orderProjectBtnMobile) {
      refs.orderProjectBtnMobile.addEventListener('click', () => {
        scrollToWorkTogetherSection();
        closeMenu();
        enableBodyScroll(); // Включаем скролл при переходе
      });
    }

    // Обробник для десктопної кнопки "Order the project"
    if (refs.orderProjectBtnDesktop) {
      refs.orderProjectBtnDesktop.addEventListener('click', () => {
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

  // Функция для отключения скроллинга на body
  function disableBodyScroll() {
    document.body.classList.add('no-scroll');
  }

  // Функция для включения скроллинга на body
  function enableBodyScroll() {
    document.body.classList.remove('no-scroll');
  }

  // Закрити меню при зміні ширини екрана (для планшетів та десктоп)
  window.addEventListener('resize', () => {
    if (window.innerWidth > 767) {
      closeMenu();
      enableBodyScroll(); // Включаем скролл при изменении размера
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
