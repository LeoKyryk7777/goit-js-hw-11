import{a as l,i}from"./assets/vendor-iOl9VgKh.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();function u(e){const s="https://pixabay.com/api/",n={key:"49003886-a24f9c3a0fd607f8ed8b1fc56",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0};return l.get(s,{params:n})}function p(e){return`<li class="gallery-item">
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
</li>`}function f(e){return e.map(p).join("")}const c={form:document.querySelector(".search-form"),input:document.querySelector("#input"),button:document.querySelector("#search-button"),gallery:document.querySelector(".gallery")};c.form.addEventListener("submit",e=>{e.preventDefault();const s=c.input.value.trim();if(s===""){i.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}u(s).then(o=>{if(o.hits.length===0)i.info({title:"No Results",message:"No images found for your search.",position:"topRight"});else{const n=f(o.hits);c.gallery.innerHTML=n}}).catch(o=>{i.error({title:"Error",message:"❌ Error fetching images. Please try again!",position:"topRight"})}),e.target.reset()});
//# sourceMappingURL=index.js.map
