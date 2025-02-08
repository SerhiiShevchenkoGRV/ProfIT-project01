import{S as n}from"./assets/vendor-Bzl1jg3y.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const l=[{pct:"./img/projects/project-1.jpg",pct2x:"./img/projects/project-1@2x.jpg"},{pct:"./img/projects/project-2.jpg",pct2x:"./img/projects/project-2@2x.jpg"},{pct:"./img/projects/project-3.jpg",pct2x:"./img/projects/project-3@2x.jpg"}],p=document.querySelector(".projects-list"),a=document.querySelector(".swiper-button-prev"),u=document.querySelector(".swiper-button-next");function d(r){return r.map(o=>` <li class="projects-cards swiper-slide">
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
        </li>`).join("")}p.innerHTML=d(l);document.addEventListener("DOMContentLoaded",function(){const r=new n(".swiper",{slidesPerView:1,spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},pagination:{el:".swiper-pagination",clickable:!0},mousewheel:{forceToAxis:!0,sensitivity:1,invert:!1},touchEventsTarget:"container",simulateTouch:!0,grabCursor:!0});r.on("slideChange",function(){console.log("Текущий индекс слайда:",r.activeIndex),console.log("isBeginning:",r.isBeginning),console.log("isEnd:",r.isEnd),a.classList.toggle("custom-disabled",r.isBeginning),u.classList.toggle("custom-disabled",r.isEnd)})});document.querySelector(".covers-gallery");
//# sourceMappingURL=index.js.map
