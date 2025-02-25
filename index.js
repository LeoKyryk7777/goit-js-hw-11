import{S as p,a as d,i as c}from"./assets/vendor-DYLXiCJH.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function m(s){const{largeImageURL:r,webformatURL:n,tags:a,likes:e,views:t,comments:i,downloads:u}=s;return`<li class="photo-card">
  <a class="gallery-link" href="${r}">
    <img
      class="gallery-image"
      src="${n}"
      alt="${a}"
    />
  </a>
  <div class="info">
        <p>Likes: <span class="likes">${e}</span></p>
        <p>Views: <span class="views">${t}</span></p>
        <p>Comments: <span class="comments">${i}</span></p>
        <p>Downloads: <span class="downloads">${u}</span></p>
      </div>
</li>`}const f=new p(".gallery a",{captionsData:"alt",captionDelay:250});function g(){o.gallery.classList.add("hidden"),o.loader.classList.remove("hidden")}function l(){o.loader.classList.add("hidden"),o.gallery.classList.remove("hidden")}function h(s){return f.refresh(),l(),s.map(m).join("")}const o={form:document.querySelector(".search-form"),input:document.querySelector("#input"),button:document.querySelector(".search-button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader-box")};function y(s){const r="https://pixabay.com/api/",a={key:"49003886-a24f9c3a0fd607f8ed8b1fc56",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"};return d.get(r,{params:a}).then(({data:e})=>{if(e.hits.length===0)c.info({title:"No Results",message:"No images found for your search.",position:"topRight"});else{o.input.value="";const t=h(e.hits);o.gallery.innerHTML=t,l()}}).catch(e=>{l(),c.error({title:"Error",message:"❌ Error fetching images. Please try again!",position:"topRight"})})}o.form.addEventListener("submit",s=>{s.preventDefault();const r=s.target.elements.input.value.trim();if(g(),!r){c.error({title:"Error",message:"Please enter a search query.",position:"topRight"}),l();return}y(r)});
//# sourceMappingURL=index.js.map
