import{S as u,a as p,i}from"./assets/vendor-DYLXiCJH.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();function d(t){return`<li class="photo-card">
  <a class="gallery-link" href="${t.largeImageURL}">
    <img
      class="gallery-image"
      src="${t.webformatURL}"
      alt="${t.tags}"
    />
  </a>
  <div class="info">
        <p>Likes: <span class="likes">${t.likes}</span></p>
        <p>Views: <span class="views">${t.views}</span></p>
        <p>Comments: <span class="comments">${t.comments}</span></p>
        <p>Downloads: <span class="downloads">${t.downloads}</span></p>
      </div>
</li>`}const f=new u(".gallery a",{captionsData:"alt",captionDelay:250});function m(){o.gallery.classList.add("hidden"),o.loader.classList.remove("hidden")}function l(){o.loader.classList.add("hidden"),o.gallery.classList.remove("hidden")}function h(t){return f.refresh(),l(),t.map(d).join("")}const o={form:document.querySelector(".search-form"),input:document.querySelector("#input"),button:document.querySelector(".search-button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader-box")};function g(t){const s="https://pixabay.com/api/",a={key:"49003886-a24f9c3a0fd607f8ed8b1fc56",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"};return p.get(s,{params:a}).then(({data:e})=>{if(e.hits.length===0)i.info({title:"No Results",message:"No images found for your search.",position:"topRight"});else{o.input.value="";const r=h(e.hits);o.gallery.innerHTML=r}}).catch(e=>{l(),i.error({title:"Error",message:"❌ Error fetching images. Please try again!",position:"topRight"})})}o.form.addEventListener("submit",t=>{t.preventDefault();const s=t.target.elements.input.value.trim();if(m(),!s){i.error({title:"Error",message:"Please enter a search query.",position:"topRight"}),l();return}g(s)});
//# sourceMappingURL=index.js.map
