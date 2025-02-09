import{A as i,S as l,N as a,K as d}from"./assets/vendor-Cy4PDJIV.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();document.addEventListener("DOMContentLoaded",()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),navLinks:document.querySelectorAll(".mobile-menu-list .mobile-nav-link"),orderProjectBtn:document.querySelector(".mobile-btn")};e.openMenuBtn&&e.closeMenuBtn&&e.menu&&(e.openMenuBtn.addEventListener("click",o),e.closeMenuBtn.addEventListener("click",o),e.navLinks.length&&e.navLinks.forEach(s=>{s.addEventListener("click",()=>{window.location.href=s.getAttribute("href"),r()})}),e.orderProjectBtn&&e.orderProjectBtn.addEventListener("click",()=>{window.location.href="#work together",r()}));function o(){e.menu.classList.toggle("is-open")}function r(){e.menu.classList.remove("is-open")}});const u=document.querySelectorAll(".dropdown");u.forEach(e=>{e.addEventListener("click",function(o){const r=this.querySelector(".dropdown-content");r.style.display==="block"?r.style.display="none":r.style.display="block",o.stopPropagation()})});const p=document.querySelectorAll('a[href^="#"]');p.forEach(e=>{e.addEventListener("click",function(o){o.preventDefault();const r=this.getAttribute("href").substring(1),s=document.getElementById(r);s&&s.scrollIntoView({behavior:"smooth",block:"start"})})});new i(".js-about-descriprion",{duration:500,showMultiple:!1,openOnInit:[0],elementClass:"acord-about-el",triggerClass:"acord-about-tr",panelClass:"js-about-accordeon"});document.querySelector(".acord-about-el").addEventListener("click",e=>{});const g=new l(".js-about-swiper",{modules:[a,d],speed:400,loop:!0,slidesPerView:2,breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}},keyboard:{enabled:!0,onlyInViewport:!1,pageUpDown:!0}});document.querySelector(".js-swiper-btn").addEventListener("click",e=>{g.slideNext()});const m=[{pct:"../img/projects/project-1.jpg",pct2x:"../img/projects/project-1@2x.jpg"},{pct:"../img/projects/project-2.jpg",pct2x:"../img/projects/project-2@2x.jpg"},{pct:"../img/projects/project-3.jpg",pct2x:"../img/projects/project-3@2x.jpg"}],f=document.querySelector(".projects-list"),j=document.querySelector(".swiper-button-prev"),b=document.querySelector(".swiper-button-next");function y(e){return e.map(o=>` <li class="projects-cards swiper-slide">
          <div class="project-top-card">
            <ul class="project-tags">
              <li class="project-tag">#react</li>
              <li class="project-tag">#js</li>
              <li class="project-tag">#node js</li>
              <li class="project-tag">#git</li>
            </ul>
            <h3 class="projects-text">
              Programming Across Borders: Ideas, Technologies, Innovations
            </h3>
            <a target="_blank" href="https://github.com/SerhiiShevchenkoGRV/ProfIT-project01" class="project-button">See projects</a>
          </div>

          <div class="project-bottom-card">
            <picture class="project-img">
              <source
                  srcset="${o.pct} 1x, ${o.pct2x} 2x"
              />
              <img src="${o.pct}" alt="Project image" />
            </picture>
          </div>
        </li>`).join("")}f.innerHTML=y(m);document.addEventListener("DOMContentLoaded",function(){const e=new l(".swiper",{slidesPerView:1,spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},pagination:{el:".swiper-pagination",clickable:!0},mousewheel:{forceToAxis:!0,sensitivity:1,invert:!1},touchEventsTarget:"container",simulateTouch:!0,grabCursor:!0});e.on("slideChange",function(){console.log("Текущий индекс слайда:",e.activeIndex),console.log("isBeginning:",e.isBeginning),console.log("isEnd:",e.isEnd),j.classList.toggle("custom-disabled",e.isBeginning),b.classList.toggle("custom-disabled",e.isEnd)})});document.addEventListener("DOMContentLoaded",function(){new i(".faq",{duration:400,showMultiple:!1,elementClass:"faq-item",triggerClass:"faq-btn",panelClass:"faq-content",activeClass:"is-open"})});document.querySelector(".covers-gallery");
//# sourceMappingURL=index.js.map
