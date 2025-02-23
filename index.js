import{a as c,S as u,i as l}from"./assets/vendor-DYLXiCJH.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();function p(e){const s="https://pixabay.com/api/",a={key:"49003886-a24f9c3a0fd607f8ed8b1fc56",q:e,image_type:"photo",orientation:"horizontal",safesearch:"true"};return c.get(s,{params:a})}function d(e){return`<li class="photo-card">
  <a class="gallery-link" href="${e.largeImageURL}">
    <img
      class="gallery-image"
      src="${e.webformatURL}"
      alt="${e.tags}"
    />
  </a>
  <div class="info">
        <p>Likes: <span class="likes">${e.likes}</span></p>
        <p>Views: <span class="views">${e.views}</span></p>
        <p>Comments: <span class="comments">${e.comments}</span></p>
        <p>Downloads: <span class="downloads">${e.downloads}</span></p>
      </div>
</li>`}const f=new u(".gallery a",{captionsData:"alt",captionDelay:250});function m(){n.loader.classList.add("hidden"),n.galleryImages.classList.remove("hidden")}function g(e){return f.refresh(),m(),e.map(d).join("")}const n={form:document.querySelector(".search-form"),input:document.querySelector("#input"),button:document.querySelector(".search-button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader-box")};n.form.addEventListener("submit",e=>{e.preventDefault();const s=e.target.elements.input.value.trim();if(s===""){l.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}p(s).then(({data:o})=>{if(o.hits.length===0)l.info({title:"No Results",message:"No images found for your search.",position:"topRight"});else{const a=g(o.hits);n.gallery.innerHTML=a}}).catch(o=>{l.error({title:"Error",message:"❌ Error fetching images. Please try again!",position:"topRight"})}),e.target.reset()});
//# sourceMappingURL=index.js.map
