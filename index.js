import{A as y,S as m,N as w,K as L,M as h,i as E,a as B}from"./assets/vendor-Biu52uN_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();document.addEventListener("DOMContentLoaded",()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),navLinks:document.querySelectorAll(".mobile-menu-list .mobile-nav-link"),orderProjectBtnMobile:document.querySelector(".mobile-btn"),orderProjectBtnDesktop:document.querySelector(".header-btn"),dropdowns:document.querySelectorAll(".dropdown")};e.openMenuBtn&&e.closeMenuBtn&&e.menu&&(e.openMenuBtn.addEventListener("click",()=>{s(),r()}),e.closeMenuBtn.addEventListener("click",()=>{s(),n()}),e.navLinks.length&&e.navLinks.forEach(i=>{i.addEventListener("click",()=>{window.location.href=i.getAttribute("href"),o(),n()})}),e.orderProjectBtnMobile&&e.orderProjectBtnMobile.addEventListener("click",()=>{t(),o(),n()}),e.orderProjectBtnDesktop&&e.orderProjectBtnDesktop.addEventListener("click",()=>{t()}),e.dropdowns.length&&e.dropdowns.forEach(i=>{i.addEventListener("click",function(u){this.querySelector(".dropdown-content").classList.toggle("show"),u.stopPropagation()})}));function t(){const i=document.getElementById("work-togeth");i&&i.scrollIntoView({behavior:"smooth",block:"start"})}function s(){e.menu.classList.toggle("is-open")}function o(){e.menu.classList.remove("is-open")}function r(){document.body.classList.add("no-scroll")}function n(){document.body.classList.remove("no-scroll")}window.addEventListener("resize",()=>{window.innerWidth>767&&(o(),n())}),document.addEventListener("click",function(i){e.dropdowns.forEach(u=>{const g=u.querySelector(".dropdown-content");u.contains(i.target)||g.classList.remove("show")})})});new y(".js-about-descriprion",{duration:500,showMultiple:!1,openOnInit:[0],elementClass:"acord-about-el",triggerClass:"acord-about-tr",panelClass:"js-about-accordeon"});document.querySelector(".acord-about-el").addEventListener("click",e=>{});const S=new m(".js-about-swiper",{modules:[w,L,h],speed:400,loop:!0,slidesPerView:2,breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}},keyboard:{enabled:!0,onlyInViewport:!1,pageUpDown:!0},mousewheel:{enabled:!0,sensitivity:1,releaseOnEdges:!0}});document.querySelector(".js-swiper-btn").addEventListener("click",e=>{S.slideNext()});const C="/ProfIT-project01/assets/project-1-DK5Nv6xC.jpg",T="/ProfIT-project01/assets/project-2-C4mxZzdi.jpg",k="/ProfIT-project01/assets/project-3-BZnD_WLd.jpg",q="/ProfIT-project01/assets/project-1@2x-Dz-0CjNd.jpg",M="/ProfIT-project01/assets/project-2@2x-CMg5mpbj.jpg",_="/ProfIT-project01/assets/project-3@2x-C9rDjfpB.jpg",O=[{pct:C,pct2x:q},{pct:T,pct2x:M},{pct:k,pct2x:_}],A=document.querySelector(".projects-list");function D(e){return e.map(t=>` <div class="swiper-slide">
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
        </div>`).join("")}A.innerHTML=D(O);document.addEventListener("DOMContentLoaded",function(){const e=new m(".swiper",{slidesPerView:1,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},pagination:{el:".swiper-pagination",clickable:!0},mousewheel:{enabled:!0,sensitivity:1,releaseOnEdges:!0},preventInteractionOnTransition:!1,simulateTouch:!0,grabCursor:!0,on:{slideChange:()=>t(e)}});function t(s){const o=document.querySelector(".swiper-button-prev"),r=document.querySelector(".swiper-button-next");o&&r&&(o.disabled=s.isBeginning,r.disabled=s.isEnd,o.classList.toggle("disabled",s.isBeginning),r.classList.toggle("disabled",s.isEnd))}t(e),e.update()});new y(".js-faq",{duration:400,showMultiple:!1,elementClass:"js-faq-el",triggerClass:"js-faq-tr",panelClass:"faq-content",activeClass:"is-open"});document.querySelector(".faq-item").addEventListener("click",e=>{});const V="/ProfIT-project01/assets/cover01@1x-Biy_J-9Y.jpg",N="/ProfIT-project01/assets/cover01@2x-BR5CoXde.jpg",$="/ProfIT-project01/assets/cover02@1x-B2k6RlBp.jpg",F="/ProfIT-project01/assets/cover02@2x-Y48phYZo.jpg",z="/ProfIT-project01/assets/cover03@1x-C_625g1E.jpg",R="/ProfIT-project01/assets/cover03@2x-BwSSb4S3.jpg",U="/ProfIT-project01/assets/cover04@1x-C6T2MvJm.jpg",W="/ProfIT-project01/assets/cover04@2x-BboJmvsd.jpg",Y="/ProfIT-project01/assets/cover05@1x-DExDaGCP.jpg",G="/ProfIT-project01/assets/cover05@2x-BYxzg86Q.jpg",K="/ProfIT-project01/assets/cover06@1x-CsfYvbYx.jpg",Z="/ProfIT-project01/assets/cover06@2x-CNDvn0fu.jpg",H="/ProfIT-project01/assets/cover07@1x-oCZ6UWqU.jpg",J="/ProfIT-project01/assets/cover07@2x-C0C5zM7l.jpg",Q="/ProfIT-project01/assets/cover08@1x-C1qjyeD6.jpg",X="/ProfIT-project01/assets/cover08@2x-bmIyrRqG.jpg",ee="/ProfIT-project01/assets/cover09@1x-sstdFkG7.jpg",te="/ProfIT-project01/assets/cover09@2x-BK6Ak1Co.jpg",se="/ProfIT-project01/assets/cover10@1x-F2vT01VU.jpg",oe="/ProfIT-project01/assets/cover10@2x-BgVZBxV8.jpg",re=[{src1x:V,src2x:N,alt:"Power pulse"},{src1x:$,src2x:F,alt:"Mimino"},{src1x:z,src2x:R,alt:"Ukrainian artistry"},{src1x:U,src2x:W,alt:"Organic vegetables"},{src1x:Y,src2x:G,alt:"Wallet"},{src1x:K,src2x:Z,alt:"Chego jewellery"},{src1x:H,src2x:J,alt:"Energy flow"},{src1x:Q,src2x:X,alt:"Fruitbox"},{src1x:ee,src2x:te,alt:"English excellence"},{src1x:se,src2x:oe,alt:"Starlight studio"}],ne=Array.from(document.querySelectorAll(".covers-line"));function ce(e){const t=[...e];for(let s=t.length-1;s>0;s--){const o=Math.floor(Math.random()*(s+1));[t[s],t[o]]=[t[o],t[s]]}return t}ne.forEach(e=>{const t=ce(re).map(({src1x:s,src2x:o,alt:r})=>`<img
            srcset="${s}, ${o} 2x"
            src="${s}"
            alt="${r}"
            class="covers-picture"
        />`).join("");e.innerHTML=t});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".covers-section");if(!e)return;new IntersectionObserver(s=>{s.forEach(o=>{o.isIntersecting?e.classList.add("animate"):e.classList.remove("animate")})},{threshold:.5}).observe(e)});async function ie(){return B.get("https://portfolio-js.b.goit.study/api/reviews")}function ae(e){const{author:t,avatar_url:s,review:o}=e;return`<li class="swiper-slide swiper-slide-rev">
        <img src="${s}" alt="Avatar" class="avatar" />
        <h3 class="name-autor">${t}</h3>
        <p class="review-text">${o}</p>
    </li>`}const le=document.querySelector(".swiper-wrapper-rev"),j=document.querySelector(".reviews"),de=document.querySelector(".swiper-rev");let x,I=!1;ue();async function ue(){try{const t=(await ie()).data.map(s=>ae(s)).join("");le.innerHTML=t,x=new m(".swiper-rev",{slidesPerView:1,modules:[w,L,h],navigation:{nextEl:".reviews-button-next",prevEl:".reviews-button-prev"},wrapperClass:"swiper-wrapper-rev",speed:500,keyboard:{enabled:!0,onlyInViewport:!1,pageUpDown:!0},mousewheel:{invert:!1},spaceBetween:16,breakpoints:{320:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},on:{afterInit:function(){v(this)},slideChange:function(){v(this)}}}),v(x)}catch{I=!0,pe(),de.innerHTML='<p class="not-found">Not found</p>'}}function v(e){const t=document.querySelector(".reviews-button-next"),s=document.querySelector(".reviews-button-prev");e.isEnd?(e.params.loop=!1,t.setAttribute("disabled","true"),t.classList.add("disabled")):(e.params.loop=!0,t.removeAttribute("disabled"),t.classList.remove("disabled")),e.isBeginning?(e.params.loop=!1,s.setAttribute("disabled","true"),s.classList.add("disabled")):(s.removeAttribute("disabled"),s.classList.remove("disabled"))}function pe(){if(!j)return;new IntersectionObserver((t,s)=>{t.forEach(o=>{o.isIntersecting&&I&&(E.error({title:"Error",message:"There is no connection with the server."}),s.disconnect())})},{threshold:.5}).observe(j)}const b=document.getElementById("cooperationForm"),P=document.getElementById("modal"),p=document.getElementById("modalOverlay"),ve=document.querySelector(".modal-btn"),a=document.getElementById("email"),l=document.getElementById("comments"),c=document.querySelector(".validation-text"),d=document.querySelector(".form-inputs");function me(){document.body.classList.add("no-scroll")}function fe(){document.body.classList.remove("no-scroll")}b.addEventListener("submit",async function(e){e.preventDefault();const t=a.value.trim(),s=l.value.trim();if(!t||!s){c.textContent="Fields cannot be empty!",c.classList.add("error"),a.classList.add("error"),l.classList.add("error"),d.classList.add("error");return}if(a.validity.valid){c.classList.remove("error"),c.textContent="Success!",c.classList.add("success"),a.classList.add("success"),l.classList.add("success"),d.classList.add("success");try{(await fetch("https://portfolio-js.b.goit.study/api-docs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,comments:s})})).ok?(b.reset(),P.style.display="flex",p.style.display="block",me()):alert("Error submitting form. Please check your input and try again.")}catch{alert("Network error. Please try again later.")}}else c.textContent="Invalid email, try again",c.classList.add("error"),a.classList.add("error"),d.classList.add("error")});function f(){P.style.display="none",p.style.display="none",fe(),c.textContent="",c.classList.remove("success"),a.classList.remove("success"),l.classList.remove("success"),d.classList.remove("success")}ve.addEventListener("click",f);p.addEventListener("click",function(e){e.target===p&&f()});document.addEventListener("keydown",function(e){e.key==="Escape"&&f()});a.addEventListener("input",()=>{c.textContent="",c.classList.remove("error"),a.classList.remove("error"),d.classList.remove("error")});l.addEventListener("input",()=>{c.classList.remove("error"),c.textContent="",l.classList.remove("error"),d.classList.remove("error")});a.addEventListener("blur",()=>{a.classList.remove("error"),d.classList.remove("error"),c.classList.remove("error")});l.addEventListener("blur",()=>{l.classList.remove("error"),d.classList.remove("error"),c.classList.remove("error")});
//# sourceMappingURL=index.js.map
