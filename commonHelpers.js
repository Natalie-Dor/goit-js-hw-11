import{i as l}from"./assets/vendor-38388549.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function u(s){const r="https://pixabay.com",i="/api/",o=new URLSearchParams({key:"43209712-864cbe761aaf2bd904c3cc70a",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}${i}?${o}`;return fetch(e).then(t=>t.json())}function f(s){const{id:r,largeImageURL:i,webformatURL:o,tags:e,likes:t,views:n,comments:c,downloads:m}=s;return`<li class="gallery-item data-id="${r}">
        <a class="gallery-link" href="${i}">
          <img
            class="gallery-image"
            width="360"
            height="200"
            src="${o}"
            data-source="${i}"
            alt="${e}"
          />
          <ul class="gallery-description">
          <li><h3>Likes</h3><p>${t}</p>
          </li>
          <li><h3>Views</h3><p>${n}</p>
            </li>
            <li><h3>Comments</h3><p>${c}</p>
              </li>
              <li><h3>Downloads</h3><p>${m}</p>
                </li>
          </ul>
        </a>
      </li>`}function d(s){return s.map(f).join("")}const a={formEl:document.querySelector(".search-form"),imgListEl:document.querySelector(".container")};a.formEl.addEventListener("submit",s=>{s.preventDefault(),a.imgListEl.innerHTML="";const r=s.target.elements.query.value;r?u(r).then(i=>{i.hits.length||l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});const o=d(i.hits);a.imgListEl.insertAdjacentHTML("beforeend",o)}):l.error({title:"Error",message:"The search field is empty. Please try again!"}),a.formEl.reset()});
//# sourceMappingURL=commonHelpers.js.map
