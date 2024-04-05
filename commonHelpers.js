import{S as d,i as n}from"./assets/vendor-7659544d.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function p(i){const s="https://pixabay.com",r="/api/",a=new URLSearchParams({key:"43209712-864cbe761aaf2bd904c3cc70a",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${s}${r}?${a}`;return fetch(e).then(t=>t.json())}function u(i){const{id:s,largeImageURL:r,webformatURL:a,tags:e,likes:t,views:l,comments:c,downloads:m}=i;return`<li class="gallery-item data-id="${s}">
        <a class="gallery-link" href="${r}">
          <img
            class="gallery-image"
            width="360"
            height="200"
            src="${a}"
            data-source="${r}"
            alt="${e}"
          />
          <ul class="gallery-description">
            <li class="gallery-description-item"><span class="gallery-description-span">Likes</span>${t}</li>
            <li class="gallery-description-item"><span class="gallery-description-span">Views</span>${l}</li>
            <li class="gallery-description-item"><span class="gallery-description-span">Comments</span>${c}</li>
            <li class="gallery-description-item"><span class="gallery-description-span">Downloads</span>${m}</li>
          </ul>
        </a>
      </li>`}function g(i){return i.map(u).join("")}const f=new d(".gallery a",{captionsData:"alt",captionDelay:250}),o={formEl:document.querySelector(".search-form"),imgListEl:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader")};o.formEl.addEventListener("submit",i=>{i.preventDefault(),o.imgListEl.innerHTML="";const s=i.target.elements.query.value.trim();s?(o.loaderEl.classList.remove("is-hidden"),p(s).then(r=>{r.hits.length||n.error({position:"topRight",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});const a=g(r.hits);o.imgListEl.insertAdjacentHTML("beforeend",a),o.loaderEl.classList.add("is-hidden"),f.refresh()}).catch(r=>console.log(r))):n.error({position:"topRight",title:"Error",message:"The search field is empty. Please try again!"}),o.formEl.reset()});
//# sourceMappingURL=commonHelpers.js.map
