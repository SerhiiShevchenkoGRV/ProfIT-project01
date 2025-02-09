import{A as i,S as l,N as p,K as u}from"./assets/vendor-Cy4PDJIV.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const n of c.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(r){if(r.ep)return;r.ep=!0;const c=o(r);fetch(r.href,c)}})();document.addEventListener("DOMContentLoaded",()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),navLinks:document.querySelectorAll(".mobile-menu-list .mobile-nav-link"),orderProjectBtn:document.querySelector(".mobile-btn")};e.openMenuBtn&&e.closeMenuBtn&&e.menu&&(e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn.addEventListener("click",t),e.navLinks.length&&e.navLinks.forEach(s=>{s.addEventListener("click",()=>{window.location.href=s.getAttribute("href"),o()})}),e.orderProjectBtn&&e.orderProjectBtn.addEventListener("click",()=>{window.location.href="#work together",o()}));function t(){e.menu.classList.toggle("is-open")}function o(){e.menu.classList.remove("is-open")}});const d=document.querySelectorAll(".dropdown");d.forEach(e=>{e.addEventListener("click",function(t){const o=this.querySelector(".dropdown-content");o.style.display==="block"?o.style.display="none":o.style.display="block",t.stopPropagation()})});const g=document.querySelectorAll('a[href^="#"]');g.forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();const o=this.getAttribute("href").substring(1),s=document.getElementById(o);s&&s.scrollIntoView({behavior:"smooth",block:"start"})})});new i(".js-about-descriprion",{duration:500,showMultiple:!1,openOnInit:[0],elementClass:"acord-about-el",triggerClass:"acord-about-tr",panelClass:"js-about-accordeon"});document.querySelector(".acord-about-el").addEventListener("click",e=>{});const m=new l(".js-about-swiper",{modules:[p,u],speed:400,loop:!0,slidesPerView:2,breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}},keyboard:{enabled:!0,onlyInViewport:!1,pageUpDown:!0}});document.querySelector(".js-swiper-btn").addEventListener("click",e=>{m.slideNext()});const v=[{pct:"../img/projects/project-1.jpg",pct2x:"../img/projects/project-1@2x.jpg"},{pct:"../img/projects/project-2.jpg",pct2x:"../img/projects/project-2@2x.jpg"},{pct:"../img/projects/project-3.jpg",pct2x:"../img/projects/project-3@2x.jpg"}],f=document.querySelector(".projects-list"),j=document.querySelector(".swiper-button-prev"),x=document.querySelector(".swiper-button-next");function h(e){return e.map(t=>` <li class="projects-cards swiper-slide">
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
                  srcset="${t.pct} 1x, ${t.pct2x} 2x"
              />
              <img src="${t.pct}" alt="Project image" />
            </picture>
          </div>
        </li>`).join("")}f.innerHTML=h(v);document.addEventListener("DOMContentLoaded",function(){const e=new l(".swiper",{slidesPerView:1,spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},pagination:{el:".swiper-pagination",clickable:!0},mousewheel:{forceToAxis:!0,sensitivity:1,invert:!1},touchEventsTarget:"container",simulateTouch:!0,grabCursor:!0});e.on("slideChange",function(){console.log("Текущий индекс слайда:",e.activeIndex),console.log("isBeginning:",e.isBeginning),console.log("isEnd:",e.isEnd),j.classList.toggle("custom-disabled",e.isBeginning),x.classList.toggle("custom-disabled",e.isEnd)})});document.addEventListener("DOMContentLoaded",function(){new i(".faq",{duration:400,showMultiple:!1,elementClass:"faq-item",triggerClass:"faq-btn",panelClass:"faq-content",activeClass:"is-open"})});const a=[{src1x:"./img/covers/cover01@1x.jpg",src2x:"./img/covers/cover01@2x.jpg",alt:"Power pulse"},{src1x:"./img/covers/cover02@1x.jpg",src2x:"./img/covers/cover02@2x.jpg",alt:"Mimino"},{src1x:"./img/covers/cover03@1x.jpg",src2x:"./img/covers/cover03@2x.jpg",alt:"Ukrainian artistry"},{src1x:"./img/covers/cover04@1x.jpg",src2x:"./img/covers/cover04@2x.jpg",alt:"Organic vegetables"},{src1x:"./img/covers/cover05@1x.jpg",src2x:"./img/covers/cover05@2x.jpg",alt:"Wallet"},{src1x:"./img/covers/cover06@1x.jpg",src2x:"./img/covers/cover06@2x.jpg",alt:"Chego jewellery"},{src1x:"./img/covers/cover07@1x.jpg",src2x:"./img/covers/cover07@2x.jpg",alt:"Energy flow"},{src1x:"./img/covers/cover08@1x.jpg",src2x:"./img/covers/cover08@2x.jpg",alt:"Fruitbox"},{src1x:"./img/covers/cover09@1x.jpg",src2x:"./img/covers/cover09@2x.jpg",alt:"English excellence"},{src1x:"./img/covers/cover10@1x.jpg",src2x:"./img/covers/cover10@2x.jpg",alt:"Starlight studio"}],b=Array.from(document.querySelectorAll(".covers-line"));function y(e){const t=[...e];for(let o=t.length-1;o>0;o--){const s=Math.floor(Math.random()*(o+1));[t[o],t[s]]=[t[s],t[o]]}return t}a.map(({src1x:e,src2x:t,alt:o})=>`<img
              srcset="
                ${e},
                ${t} 2x
              "
              src=${e}
              alt="${o}"
              class="covers-picture"
            />`).join("");b.forEach(e=>{const t=y(a).map(({src1x:o,src2x:s,alt:r})=>`<img
            srcset="${o}, ${s} 2x"
            src="${o}"
            alt="${r}"
            class="covers-picture"
        />`).join("");e.innerHTML=t});
//# sourceMappingURL=index.js.map
