import{A as u,S as l,N as p,K as g,M as f,i as w,a as j}from"./assets/vendor-C1SNWCH9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();document.addEventListener("DOMContentLoaded",()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),navLinks:document.querySelectorAll(".mobile-menu-list .mobile-nav-link"),orderProjectBtn:document.querySelector(".mobile-btn")};e.openMenuBtn&&e.closeMenuBtn&&e.menu&&(e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn.addEventListener("click",t),e.navLinks.length&&e.navLinks.forEach(o=>{o.addEventListener("click",()=>{window.location.href=o.getAttribute("href"),r()})}),e.orderProjectBtn&&e.orderProjectBtn.addEventListener("click",()=>{window.location.href="#work together",r()}));function t(){e.menu.classList.toggle("is-open")}function r(){e.menu.classList.remove("is-open")}});const x=document.querySelectorAll(".dropdown");x.forEach(e=>{e.addEventListener("click",function(t){const r=this.querySelector(".dropdown-content");r.style.display==="block"?r.style.display="none":r.style.display="block",t.stopPropagation()})});const b=document.querySelectorAll('a[href^="#"]');b.forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();const r=this.getAttribute("href").substring(1),o=document.getElementById(r);o&&o.scrollIntoView({behavior:"smooth",block:"start"})})});new u(".js-about-descriprion",{duration:500,showMultiple:!1,openOnInit:[0],elementClass:"acord-about-el",triggerClass:"acord-about-tr",panelClass:"js-about-accordeon"});document.querySelector(".acord-about-el").addEventListener("click",e=>{});const h=new l(".js-about-swiper",{modules:[p,g],speed:400,loop:!0,slidesPerView:2,breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}},keyboard:{enabled:!0,onlyInViewport:!1,pageUpDown:!0}});document.querySelector(".js-swiper-btn").addEventListener("click",e=>{h.slideNext()});const y=[{pct:"../img/projects/project-1.jpg",pct2x:"../img/projects/project-1@2x.jpg"},{pct:"../img/projects/project-2.jpg",pct2x:"../img/projects/project-2@2x.jpg"},{pct:"../img/projects/project-3.jpg",pct2x:"../img/projects/project-3@2x.jpg"}],L=document.querySelector(".projects-list"),E=document.querySelector(".swiper-button-prev"),S=document.querySelector(".swiper-button-next");function q(e){return e.map(t=>` <li class="projects-cards swiper-slide">
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
        </li>`).join("")}L.innerHTML=q(y);document.addEventListener("DOMContentLoaded",function(){const e=new l(".swiper",{slidesPerView:1,spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},pagination:{el:".swiper-pagination",clickable:!0},mousewheel:{forceToAxis:!0,sensitivity:1,invert:!1},touchEventsTarget:"container",simulateTouch:!0,grabCursor:!0});e.on("slideChange",function(){console.log("Текущий индекс слайда:",e.activeIndex),console.log("isBeginning:",e.isBeginning),console.log("isEnd:",e.isEnd),E.classList.toggle("custom-disabled",e.isBeginning),S.classList.toggle("custom-disabled",e.isEnd)})});document.addEventListener("DOMContentLoaded",function(){new u(".faq",{duration:400,showMultiple:!1,elementClass:"faq-item",triggerClass:"faq-btn",panelClass:"faq-content",activeClass:"is-open"})});const v=[{src1x:"../img/covers/cover01@1x.jpg",src2x:"../img/covers/cover01@2x.jpg",alt:"Power pulse"},{src1x:"../img/covers/cover02@1x.jpg",src2x:"../img/covers/cover02@2x.jpg",alt:"Mimino"},{src1x:"../img/covers/cover03@1x.jpg",src2x:"../img/covers/cover03@2x.jpg",alt:"Ukrainian artistry"},{src1x:"../img/covers/cover04@1x.jpg",src2x:"../img/covers/cover04@2x.jpg",alt:"Organic vegetables"},{src1x:"../img/covers/cover05@1x.jpg",src2x:"../img/covers/cover05@2x.jpg",alt:"Wallet"},{src1x:"../img/covers/cover06@1x.jpg",src2x:"../img/covers/cover06@2x.jpg",alt:"Chego jewellery"},{src1x:"../img/covers/cover07@1x.jpg",src2x:"../img/covers/cover07@2x.jpg",alt:"Energy flow"},{src1x:"../img/covers/cover08@1x.jpg",src2x:"../img/covers/cover08@2x.jpg",alt:"Fruitbox"},{src1x:"../img/covers/cover09@1x.jpg",src2x:"../img/covers/cover09@2x.jpg",alt:"English excellence"},{src1x:"../img/covers/cover10@1x.jpg",src2x:"../img/covers/cover10@2x.jpg",alt:"Starlight studio"}],B=Array.from(document.querySelectorAll(".covers-line"));function M(e){const t=[...e];for(let r=t.length-1;r>0;r--){const o=Math.floor(Math.random()*(r+1));[t[r],t[o]]=[t[o],t[r]]}return t}v.map(({src1x:e,src2x:t,alt:r})=>`<img
              srcset="
                ${e},
                ${t} 2x
              "
              src=${e}
              alt="${r}"
              class="covers-picture"
            />`).join("");B.forEach(e=>{const t=M(v).map(({src1x:r,src2x:o,alt:s})=>`<img
            srcset="${r}, ${o} 2x"
            src="${r}"
            alt="${s}"
            class="covers-picture"
        />`).join("");e.innerHTML=t});async function k(){return j.get("https://portfolio-js.b.goit.study/api/reviews")}function A(e){const{author:t,avatar_url:r,review:o}=e;return`<li class="swiper-slide swiper-slide-reviews">
        <img src="${r}" alt="Avatar" class="avatar" />
        <h3 class="name-autor">${t}</h3>
        <p class="review-text">${o}</p>
    </li>`}const P=document.querySelector(".review-list"),a=document.querySelector(".reviews"),C=document.querySelector(".swiper-field");let d,m=!1;I();async function I(){try{const t=(await k()).data.map(r=>A(r)).join("");P.innerHTML=t,d=new l(".swiper-field",{slidesPerView:1,modules:[p,g,f],navigation:{nextEl:".swiper-reviews-next",prevEl:".swiper-reviews-prev"},speed:500,keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!1},spaceBetween:16,breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},on:{afterInit:function(){c(this)},slideChange:function(){c(this)}}}),c(d)}catch{m=!0,$(),C.innerHTML='<p class="not-found">Not found</p>'}}function c(e){const t=document.querySelector(".swiper-reviews-next"),r=document.querySelector(".swiper-reviews-prev");e.isEnd?(t.setAttribute("disabled","true"),t.classList.add("disabled")):(t.removeAttribute("disabled"),t.classList.remove("disabled")),e.isBeginning?(r.setAttribute("disabled","true"),r.classList.add("disabled")):(r.removeAttribute("disabled"),r.classList.remove("disabled"))}function $(){if(!a)return;new IntersectionObserver((t,r)=>{t.forEach(o=>{o.isIntersecting&&m&&(w.error({title:"Error",message:"There is no connection with the server."}),r.disconnect())})},{threshold:.5}).observe(a)}
//# sourceMappingURL=index.js.map
