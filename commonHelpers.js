import{S as p,i as n}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function d(s){const r="https://pixabay.com",i="/api/",a=new URLSearchParams({key:"43209712-864cbe761aaf2bd904c3cc70a",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}${i}?${a}`;return fetch(e).then(t=>t.json())}function u(s){const{id:r,largeImageURL:i,webformatURL:a,tags:e,likes:t,views:o,comments:c,downloads:m}=s;return`<li class="gallery-item data-id="${r}">
        <a class="gallery-link" href="${i}">
          <img
            class="gallery-image"
            width="360"
            height="200"
            src="${a}"
            data-source="${i}"
            alt="${e}"
          />
          <ul class="gallery-description">
            <li class="gallery-description-item"><span class="gallery-description-span">Likes</span>${t}</li>
            <li class="gallery-description-item"><span class="gallery-description-span">Views</span>${o}</li>
            <li class="gallery-description-item"><span class="gallery-description-span">Comments</span>${c}</li>
            <li class="gallery-description-item"><span class="gallery-description-span">Downloads</span>${m}</li>
          </ul>
        </a>
      </li>`}function g(s){return s.map(u).join("")}const f=new p(".gallery a",{captionsData:"alt",captionDelay:250}),l={formEl:document.querySelector(".search-form"),imgListEl:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader")};l.formEl.addEventListener("submit",s=>{s.preventDefault(),l.imgListEl.innerHTML="";const r=s.target.elements.query.value.trim();l.loaderEl.classList.remove("is-hidden"),r?d(r).then(i=>{i.hits.length||n.error({position:"topRight",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});const a=g(i.hits);l.imgListEl.insertAdjacentHTML("beforeend",a),f.refresh()}):n.error({position:"topRight",title:"Error",message:"The search field is empty. Please try again!"}),l.formEl.reset()});
//# sourceMappingURL=commonHelpers.js.map
