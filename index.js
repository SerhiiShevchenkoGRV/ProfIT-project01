import{S as i}from"./assets/vendor-Bzl1jg3y.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();document.addEventListener("DOMContentLoaded",()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),navLinks:document.querySelectorAll(".mobile-menu-list .mobile-nav-link"),orderProjectBtn:document.querySelector(".mobile-btn")};e.openMenuBtn&&e.closeMenuBtn&&e.menu&&(e.openMenuBtn.addEventListener("click",o),e.closeMenuBtn.addEventListener("click",o),e.navLinks.length&&e.navLinks.forEach(c=>{c.addEventListener("click",()=>{window.location.href=c.getAttribute("href"),r()})}),e.orderProjectBtn&&e.orderProjectBtn.addEventListener("click",()=>{window.location.href="#work together",r()}));function o(){e.menu.classList.toggle("is-open")}function r(){e.menu.classList.remove("is-open")}});const l=document.querySelectorAll(".dropdown");l.forEach(e=>{e.addEventListener("click",function(o){const r=this.querySelector(".dropdown-content");r.style.display==="block"?r.style.display="none":r.style.display="block",o.stopPropagation()})});const a=document.querySelectorAll('a[href^="#"]');a.forEach(e=>{e.addEventListener("click",function(o){o.preventDefault();const r=this.getAttribute("href").substring(1),c=document.getElementById(r);c&&c.scrollIntoView({behavior:"smooth",block:"start"})})});const u=[{pct:"./img/projects/project-1.jpg",pct2x:"./img/projects/project-1@2x.jpg"},{pct:"./img/projects/project-2.jpg",pct2x:"./img/projects/project-2@2x.jpg"},{pct:"./img/projects/project-3.jpg",pct2x:"./img/projects/project-3@2x.jpg"}],d=document.querySelector(".projects-list"),p=document.querySelector(".swiper-button-prev"),g=document.querySelector(".swiper-button-next");function m(e){return e.map(o=>` <li class="projects-cards swiper-slide">
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
        </li>`).join("")}d.innerHTML=m(u);document.addEventListener("DOMContentLoaded",function(){const e=new i(".swiper",{slidesPerView:1,spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},pagination:{el:".swiper-pagination",clickable:!0},mousewheel:{forceToAxis:!0,sensitivity:1,invert:!1},touchEventsTarget:"container",simulateTouch:!0,grabCursor:!0});e.on("slideChange",function(){console.log("Текущий индекс слайда:",e.activeIndex),console.log("isBeginning:",e.isBeginning),console.log("isEnd:",e.isEnd),p.classList.toggle("custom-disabled",e.isBeginning),g.classList.toggle("custom-disabled",e.isEnd)})});document.querySelector(".covers-gallery");
//# sourceMappingURL=index.js.map
