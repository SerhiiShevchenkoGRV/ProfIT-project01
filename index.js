import{A as v,S as a,N as g,K as m,M as x,i as b,a as h}from"./assets/vendor-Biu52uN_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();document.addEventListener("DOMContentLoaded",()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),navLinks:document.querySelectorAll(".mobile-menu-list .mobile-nav-link"),orderProjectBtnMobile:document.querySelector(".mobile-btn"),orderProjectBtnDesktop:document.querySelector(".header-btn"),dropdowns:document.querySelectorAll(".dropdown")};e.openMenuBtn&&e.closeMenuBtn&&e.menu&&(e.openMenuBtn.addEventListener("click",()=>{console.log("Open menu clicked!"),o()}),e.closeMenuBtn.addEventListener("click",()=>{console.log("Close menu clicked!"),o()}),e.navLinks.length&&e.navLinks.forEach(r=>{r.addEventListener("click",()=>{console.log(`Navigating to: ${r.getAttribute("href")}`),window.location.href=r.getAttribute("href"),s()})}),e.orderProjectBtnMobile&&e.orderProjectBtnMobile.addEventListener("click",()=>{console.log("Order the project clicked (mobile)!"),t(),s()}),e.orderProjectBtnDesktop&&e.orderProjectBtnDesktop.addEventListener("click",()=>{console.log("Order the project clicked (desktop)!"),t()}),e.dropdowns.length&&e.dropdowns.forEach(r=>{r.addEventListener("click",function(n){this.querySelector(".dropdown-content").classList.toggle("show"),n.stopPropagation()})}));function t(){const r=document.getElementById("work-togeth");r&&r.scrollIntoView({behavior:"smooth",block:"start"})}function o(){e.menu.classList.toggle("is-open")}function s(){e.menu.classList.remove("is-open")}window.addEventListener("resize",()=>{window.innerWidth>767&&s()}),document.addEventListener("click",function(r){e.dropdowns.forEach(n=>{const c=n.querySelector(".dropdown-content");n.contains(r.target)||c.classList.remove("show")})})});new v(".js-about-descriprion",{duration:500,showMultiple:!1,openOnInit:[0],elementClass:"acord-about-el",triggerClass:"acord-about-tr",panelClass:"js-about-accordeon"});document.querySelector(".acord-about-el").addEventListener("click",e=>{});const y=new a(".js-about-swiper",{modules:[g,m],speed:400,loop:!0,slidesPerView:2,breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}},keyboard:{enabled:!0,onlyInViewport:!1,pageUpDown:!0}});document.querySelector(".js-swiper-btn").addEventListener("click",e=>{y.slideNext()});const P="/ProfIT-project01/assets/project-1-Df_oGpHS.jpg",I="/ProfIT-project01/assets/project-2-C4mxZzdi.jpg",L="/ProfIT-project01/assets/project-3-BZnD_WLd.jpg",T="/ProfIT-project01/assets/project-1@2x-BF-j6MFn.jpg",S="/ProfIT-project01/assets/project-2@2x-CMg5mpbj.jpg",B="/ProfIT-project01/assets/project-3@2x-C9rDjfpB.jpg",E=[{pct:P,pct2x:T},{pct:I,pct2x:S},{pct:L,pct2x:B}],q=document.querySelector(".projects-list");function k(e){return e.map(t=>` <li class="projects-cards swiper-slide">
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
        </li>`).join("")}q.innerHTML=k(E);document.addEventListener("DOMContentLoaded",function(){const e=new a(".swiper",{slidesPerView:1,spaceBetween:20,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},pagination:{el:".swiper-pagination",clickable:!0},mousewheel:{enabled:!0,sensitivity:1,releaseOnEdges:!0},preventInteractionOnTransition:!1,simulateTouch:!0,grabCursor:!0,on:{slideChange:()=>t(e)}});function t(o){const s=document.querySelector(".swiper-button-prev"),r=document.querySelector(".swiper-button-next");s&&r&&(s.disabled=o.isBeginning,r.disabled=o.isEnd,s.classList.toggle("disabled",o.isBeginning),r.classList.toggle("disabled",o.isEnd))}t(e),e.update()});new v(".js-faq",{duration:400,showMultiple:!1,elementClass:"js-faq-el",triggerClass:"js-faq-tr",panelClass:"faq-content",activeClass:"is-open"});document.querySelector(".faq-item").addEventListener("click",e=>{});const C="/ProfIT-project01/assets/cover01@1x-Biy_J-9Y.jpg",M="/ProfIT-project01/assets/cover01@2x-BR5CoXde.jpg",_="/ProfIT-project01/assets/cover02@1x-B2k6RlBp.jpg",A="/ProfIT-project01/assets/cover02@2x-Y48phYZo.jpg",O="/ProfIT-project01/assets/cover03@1x-C_625g1E.jpg",V="/ProfIT-project01/assets/cover03@2x-BwSSb4S3.jpg",D="/ProfIT-project01/assets/cover04@1x-C6T2MvJm.jpg",$="/ProfIT-project01/assets/cover04@2x-BboJmvsd.jpg",R="/ProfIT-project01/assets/cover05@1x-DExDaGCP.jpg",N="/ProfIT-project01/assets/cover05@2x-BYxzg86Q.jpg",F="/ProfIT-project01/assets/cover06@1x-CsfYvbYx.jpg",H="/ProfIT-project01/assets/cover06@2x-CNDvn0fu.jpg",U="/ProfIT-project01/assets/cover07@1x-oCZ6UWqU.jpg",G="/ProfIT-project01/assets/cover07@2x-C0C5zM7l.jpg",W="/ProfIT-project01/assets/cover08@1x-C1qjyeD6.jpg",Y="/ProfIT-project01/assets/cover08@2x-bmIyrRqG.jpg",z="/ProfIT-project01/assets/cover09@1x-sstdFkG7.jpg",Z="/ProfIT-project01/assets/cover09@2x-BK6Ak1Co.jpg",J="/ProfIT-project01/assets/cover10@1x-F2vT01VU.jpg",K="/ProfIT-project01/assets/cover10@2x-BgVZBxV8.jpg",Q=[{src1x:C,src2x:M,alt:"Power pulse"},{src1x:_,src2x:A,alt:"Mimino"},{src1x:O,src2x:V,alt:"Ukrainian artistry"},{src1x:D,src2x:$,alt:"Organic vegetables"},{src1x:R,src2x:N,alt:"Wallet"},{src1x:F,src2x:H,alt:"Chego jewellery"},{src1x:U,src2x:G,alt:"Energy flow"},{src1x:W,src2x:Y,alt:"Fruitbox"},{src1x:z,src2x:Z,alt:"English excellence"},{src1x:J,src2x:K,alt:"Starlight studio"}],X=Array.from(document.querySelectorAll(".covers-line"));function ee(e){const t=[...e];for(let o=t.length-1;o>0;o--){const s=Math.floor(Math.random()*(o+1));[t[o],t[s]]=[t[s],t[o]]}return t}X.forEach(e=>{const t=ee(Q).map(({src1x:o,src2x:s,alt:r})=>`<img
            srcset="${o}, ${s} 2x"
            src="${o}"
            alt="${r}"
            class="covers-picture"
        />`).join("");e.innerHTML=t});async function te(){return h.get("https://portfolio-js.b.goit.study/api/reviews")}function oe(e){const{author:t,avatar_url:o,review:s}=e;return`<li class="swiper-slide swiper-slide-rev">
        <img src="${o}" alt="Avatar" class="avatar" />
        <h3 class="name-autor">${t}</h3>
        <p class="review-text">${s}</p>
    </li>`}const re=document.querySelector(".swiper-wrapper-rev"),u=document.querySelector(".reviews"),se=document.querySelector(".swiper-rev");let f,j=!1;ne();async function ne(){try{const t=(await te()).data.map(o=>oe(o)).join("");re.innerHTML=t,f=new a(".swiper-rev",{slidesPerView:1,modules:[g,m,x],navigation:{nextEl:".reviews-button-next",prevEl:".reviews-button-prev"},wrapperClass:"swiper-wrapper-rev",speed:500,keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!1},spaceBetween:16,breakpoints:{320:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},on:{afterInit:function(){i(this)},slideChange:function(){i(this)}}}),i(f)}catch{j=!0,ce(),se.innerHTML='<p class="not-found">Not found</p>'}}function i(e){const t=document.querySelector(".reviews-button-next"),o=document.querySelector(".reviews-button-prev");e.isEnd?(t.setAttribute("disabled","true"),t.classList.add("disabled")):(t.removeAttribute("disabled"),t.classList.remove("disabled")),e.isBeginning?(o.setAttribute("disabled","true"),o.classList.add("disabled")):(o.removeAttribute("disabled"),o.classList.remove("disabled"))}function ce(){if(!u)return;new IntersectionObserver((t,o)=>{t.forEach(s=>{s.isIntersecting&&j&&(b.error({title:"Error",message:"There is no connection with the server."}),o.disconnect())})},{threshold:.5}).observe(u)}const ie="https://portfolio-js.b.goit.study/api-docs/api/requests",l=document.querySelector(".form-subscribe"),ae=document.querySelector(".close-button"),d=document.querySelector(".model_overlay"),w=document.querySelector(".info_item");l.querySelector(".mail_js");l.addEventListener("submit",le);function le(e){e.preventDefault();const t=e.target.elements.email.value,o=e.target.elements.comment.value;fetch(ie,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,comment:o})}).then(s=>{if(!s.ok)throw new Error(s.statusText);return s.json()}).then(s=>de(s)).then(s=>w.insertAdjacentHTML("beforeend",pe(s))).catch(s=>console.log(s.message))}function de(e){return[e]}function pe(e){return d.classList.remove("visibility-hidden"),e.map(({title:t,message:o})=>`
        <div class="text_info">
        <p>${t}</p>
        </div>
        <div class="supporting_text">
        <p>${o}</p>
        </div>
    `).join("")}ae.addEventListener("click",p);d.addEventListener("click",p);document.addEventListener("keydown",function(e){if(e.code==="Escape")return p()});function p(e){d.classList.add("visibility-hidden"),w.innerHTML="",l.reset()}
//# sourceMappingURL=index.js.map
