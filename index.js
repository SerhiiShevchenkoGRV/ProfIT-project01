import{A as j,S as p,N as y,K as x,M as b,i as I,a as P}from"./assets/vendor-Biu52uN_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();document.addEventListener("DOMContentLoaded",()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),navLinks:document.querySelectorAll(".mobile-menu-list .mobile-nav-link"),orderProjectBtnMobile:document.querySelector(".mobile-btn"),orderProjectBtnDesktop:document.querySelector(".header-btn"),dropdowns:document.querySelectorAll(".dropdown")};e.openMenuBtn&&e.closeMenuBtn&&e.menu&&(e.openMenuBtn.addEventListener("click",()=>{o()}),e.closeMenuBtn.addEventListener("click",()=>{o()}),e.navLinks.length&&e.navLinks.forEach(r=>{r.addEventListener("click",()=>{window.location.href=r.getAttribute("href"),s()})}),e.orderProjectBtnMobile&&e.orderProjectBtnMobile.addEventListener("click",()=>{t(),s()}),e.orderProjectBtnDesktop&&e.orderProjectBtnDesktop.addEventListener("click",()=>{t()}),e.dropdowns.length&&e.dropdowns.forEach(r=>{r.addEventListener("click",function(n){this.querySelector(".dropdown-content").classList.toggle("show"),n.stopPropagation()})}));function t(){const r=document.getElementById("work-togeth");r&&r.scrollIntoView({behavior:"smooth",block:"start"})}function o(){e.menu.classList.toggle("is-open")}function s(){e.menu.classList.remove("is-open")}window.addEventListener("resize",()=>{window.innerWidth>767&&s()}),document.addEventListener("click",function(r){e.dropdowns.forEach(n=>{const i=n.querySelector(".dropdown-content");n.contains(r.target)||i.classList.remove("show")})})});new j(".js-about-descriprion",{duration:500,showMultiple:!1,openOnInit:[0],elementClass:"acord-about-el",triggerClass:"acord-about-tr",panelClass:"js-about-accordeon"});document.querySelector(".acord-about-el").addEventListener("click",e=>{});const E=new p(".js-about-swiper",{modules:[y,x,b],speed:400,loop:!0,slidesPerView:2,breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}},keyboard:{enabled:!0,onlyInViewport:!1,pageUpDown:!0},mousewheel:{enabled:!0,sensitivity:1,releaseOnEdges:!0}});document.querySelector(".js-swiper-btn").addEventListener("click",e=>{E.slideNext()});const L="/ProfIT-project01/assets/project-1-DK5Nv6xC.jpg",B="/ProfIT-project01/assets/project-2-C4mxZzdi.jpg",C="/ProfIT-project01/assets/project-3-BZnD_WLd.jpg",S="/ProfIT-project01/assets/project-1@2x-Dz-0CjNd.jpg",T="/ProfIT-project01/assets/project-2@2x-CMg5mpbj.jpg",k="/ProfIT-project01/assets/project-3@2x-C9rDjfpB.jpg",q=[{pct:L,pct2x:S},{pct:B,pct2x:T},{pct:C,pct2x:k}],M=document.querySelector(".projects-list");function _(e){return e.map(t=>` <div class="swiper-slide">
          <li class="projects-cards">
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
            <a target="_blank" href="https://github.com/SerhiiShevchenkoGRV/ProfIT-project01" class="project-button">See project</a>
          </div>

          <div class="project-bottom-card">
            <picture class="project-img">
              <source
                  srcset="${t.pct} 1x, ${t.pct2x} 2x"
              />
              <img src="${t.pct}" alt="Project image" />
            </picture>
          </div>
        </li>
        </div>`).join("")}M.innerHTML=_(q);document.addEventListener("DOMContentLoaded",function(){const e=new p(".swiper",{slidesPerView:1,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},pagination:{el:".swiper-pagination",clickable:!0},mousewheel:{enabled:!0,sensitivity:1,releaseOnEdges:!0},preventInteractionOnTransition:!1,simulateTouch:!0,grabCursor:!0,on:{slideChange:()=>t(e)}});function t(o){const s=document.querySelector(".swiper-button-prev"),r=document.querySelector(".swiper-button-next");s&&r&&(s.disabled=o.isBeginning,r.disabled=o.isEnd,s.classList.toggle("disabled",o.isBeginning),r.classList.toggle("disabled",o.isEnd))}t(e),e.update()});new j(".js-faq",{duration:400,showMultiple:!1,elementClass:"js-faq-el",triggerClass:"js-faq-tr",panelClass:"faq-content",activeClass:"is-open"});document.querySelector(".faq-item").addEventListener("click",e=>{});const O="/ProfIT-project01/assets/cover01@1x-Biy_J-9Y.jpg",A="/ProfIT-project01/assets/cover01@2x-BR5CoXde.jpg",D="/ProfIT-project01/assets/cover02@1x-B2k6RlBp.jpg",V="/ProfIT-project01/assets/cover02@2x-Y48phYZo.jpg",N="/ProfIT-project01/assets/cover03@1x-C_625g1E.jpg",$="/ProfIT-project01/assets/cover03@2x-BwSSb4S3.jpg",R="/ProfIT-project01/assets/cover04@1x-C6T2MvJm.jpg",z="/ProfIT-project01/assets/cover04@2x-BboJmvsd.jpg",F="/ProfIT-project01/assets/cover05@1x-DExDaGCP.jpg",W="/ProfIT-project01/assets/cover05@2x-BYxzg86Q.jpg",Y="/ProfIT-project01/assets/cover06@1x-CsfYvbYx.jpg",G="/ProfIT-project01/assets/cover06@2x-CNDvn0fu.jpg",K="/ProfIT-project01/assets/cover07@1x-oCZ6UWqU.jpg",U="/ProfIT-project01/assets/cover07@2x-C0C5zM7l.jpg",Z="/ProfIT-project01/assets/cover08@1x-C1qjyeD6.jpg",H="/ProfIT-project01/assets/cover08@2x-bmIyrRqG.jpg",J="/ProfIT-project01/assets/cover09@1x-sstdFkG7.jpg",Q="/ProfIT-project01/assets/cover09@2x-BK6Ak1Co.jpg",X="/ProfIT-project01/assets/cover10@1x-F2vT01VU.jpg",ee="/ProfIT-project01/assets/cover10@2x-BgVZBxV8.jpg",te=[{src1x:O,src2x:A,alt:"Power pulse"},{src1x:D,src2x:V,alt:"Mimino"},{src1x:N,src2x:$,alt:"Ukrainian artistry"},{src1x:R,src2x:z,alt:"Organic vegetables"},{src1x:F,src2x:W,alt:"Wallet"},{src1x:Y,src2x:G,alt:"Chego jewellery"},{src1x:K,src2x:U,alt:"Energy flow"},{src1x:Z,src2x:H,alt:"Fruitbox"},{src1x:J,src2x:Q,alt:"English excellence"},{src1x:X,src2x:ee,alt:"Starlight studio"}],oe=Array.from(document.querySelectorAll(".covers-line"));function re(e){const t=[...e];for(let o=t.length-1;o>0;o--){const s=Math.floor(Math.random()*(o+1));[t[o],t[s]]=[t[s],t[o]]}return t}oe.forEach(e=>{const t=re(te).map(({src1x:o,src2x:s,alt:r})=>`<img
            srcset="${o}, ${s} 2x"
            src="${o}"
            alt="${r}"
            class="covers-picture"
        />`).join("");e.innerHTML=t});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".covers-section");if(!e)return;new IntersectionObserver(o=>{o.forEach(s=>{s.isIntersecting?e.classList.add("animate"):e.classList.remove("animate")})},{threshold:.5}).observe(e)});async function se(){return P.get("https://portfolio-js.b.goit.study/api/reviews")}function ne(e){const{author:t,avatar_url:o,review:s}=e;return`<li class="swiper-slide swiper-slide-rev">
        <img src="${o}" alt="Avatar" class="avatar" />
        <h3 class="name-autor">${t}</h3>
        <p class="review-text">${s}</p>
    </li>`}const ce=document.querySelector(".swiper-wrapper-rev"),v=document.querySelector(".reviews"),ie=document.querySelector(".swiper-rev");let f,w=!1;ae();async function ae(){try{const t=(await se()).data.map(o=>ne(o)).join("");ce.innerHTML=t,f=new p(".swiper-rev",{slidesPerView:1,modules:[y,x,b],navigation:{nextEl:".reviews-button-next",prevEl:".reviews-button-prev"},wrapperClass:"swiper-wrapper-rev",speed:500,keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!1},spaceBetween:16,breakpoints:{320:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},on:{afterInit:function(){d(this)},slideChange:function(){d(this)}}}),d(f)}catch{w=!0,le(),ie.innerHTML='<p class="not-found">Not found</p>'}}function d(e){const t=document.querySelector(".reviews-button-next"),o=document.querySelector(".reviews-button-prev");e.isEnd?(t.setAttribute("disabled","true"),t.classList.add("disabled")):(t.removeAttribute("disabled"),t.classList.remove("disabled")),e.isBeginning?(o.setAttribute("disabled","true"),o.classList.add("disabled")):(o.removeAttribute("disabled"),o.classList.remove("disabled"))}function le(){if(!v)return;new IntersectionObserver((t,o)=>{t.forEach(s=>{s.isIntersecting&&w&&(I.error({title:"Error",message:"There is no connection with the server."}),o.disconnect())})},{threshold:.5}).observe(v)}const m=document.getElementById("cooperationForm"),h=document.getElementById("modal"),l=document.getElementById("modalOverlay"),de=document.querySelector(".modal-btn"),a=document.getElementById("email"),c=document.querySelector(".validation-text"),g=document.querySelector(".form-inputs");m.addEventListener("submit",async function(e){e.preventDefault();const t=document.getElementById("email").value,o=document.getElementById("comments").value;if(a.validity.valid){c.style.display="none",a.style.borderColor="#3cbc81",c.textContent="Succes!",c.style.display="inline",c.style.color="#3cbc81",g.style.gap="38px";try{(await fetch("https://portfolio-js.b.goit.study/api-docs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,comments:o})})).ok?(m.reset(),h.style.display="flex",l.style.display="block"):alert("Error submitting form. Please check your input and try again.")}catch{alert("Network error. Please try again later.")}}else a.style.borderColor="#e74a3b",c.style.display="inline",c.textContent="Invalid email, try again",c.style.color="#e74a3b",g.style.gap="38px"});function u(){h.style.display="none",l.style.display="none",c.style.display="none",a.style.borderColor="rgba(250, 250, 250, 0.2)npm"}de.addEventListener("click",u);l.addEventListener("click",function(e){e.target===l&&u()});document.addEventListener("keydown",function(e){e.key==="Escape"&&u()});
//# sourceMappingURL=index.js.map
