import{a as l,i as c}from"./assets/vendor-iOl9VgKh.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();function u(e){const s="https://pixabay.com/api/",a={key:"49003886-a24f9c3a0fd607f8ed8b1fc56",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0};return l.get(s,{params:a})}function p(e){return`<li class="gallery-item">
  <a class="gallery-link" href="${e.largeImageURL}">
    <img
      class="gallery-image"
      src="${e.webformatURL}"
      alt="${e.tags}"
    />
  </a>
  <div class="image-info">
        <p>Likes: <span class="likes">${e.likes}</span></p>
        <p>Views: <span class="views">${e.views}</span></p>
        <p>Comments: <span class="comments">${e.comments}</span></p>
        <p>Downloads: <span class="downloads">${e.downloads}</span></p>
      </div>
</li>`}function f(e){return e.map(p).join("")}const i={form:document.querySelector(".search-form"),input:document.querySelector("#image-input"),button:document.querySelector("#search-button"),gallery:document.querySelector(".gallery")};i.form.addEventListener("submit",e=>{e.preventDefault();const s=i.input.value.trim();u(s).then(o=>{if(o.hits.lenght===0)c.error({title:"No Results",message:"❌ No images found for your search.",position:"topRight"});else{const a=f(o.hits);i.gallery.innerHTML=a}}).catch(o=>{c.error({title:"Error",message:"❌ Error fetching images. Please try again!",position:"topRight"})}),e.target.reset()});
//# sourceMappingURL=index.js.map
