import{i as p,S as y}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f="42680318-96c21e5764acdc13d94b87bb9",g="https://pixabay.com/api/",m=document.querySelector(".container");function d(n){m.style.display="block";const s=`${g}?key=${f}&q=${n}&image_type=photo&orientation=horizontal&savesearch=true`;return fetch(s).then(t=>{if(!t.ok)throw new Error(`Response error ${t.status}`);return t.json()}).then(t=>(t.hits.length===0&&p.error({title:"Error",timeout:3e3,position:"bottomRight",message:"Sorry, there are no images matching your search query. Please try again!"}),t)).catch(t=>console.log(`Error: ${t}`))}function h(n){return n.hits.map(({largeImageURL:s,webformatURL:t,tags:a,likes:e,views:r,comments:o,downloads:u})=>`<li class="gallery-item">
              <a class="gallery-link" href="${s}">
                <img 
                  class="gallery-image" 
                  src="${t}" 
                  alt="${a}" 
                  width="360px" 
                  height="260px"
                />
              </a>
              <div class="gallery-info">
                <p class="gallery-info-par">
                  <span class="gallery-info-span">Likes: <span class="tag-span">${e}</span></span>    
                </p>
                <p class="gallery-info-par">
                  <span class="gallery-info-span">Views: <span class="tag-span">${r}</span></span>    
                </p>
                <p class="gallery-info-par">
                  <span class="gallery-info-span">Comments: <span class="tag-span">${o}</span></span>    
                </p>
                <p class="gallery-info-par">
                  <span class="gallery-info-span">Downloads: <span class="tag-span">${u}</span></span>    
                </p>
              </div>
            </li>`).join("")}const b=new y(".gallery a",{captionsData:"alt",captionDelay:250}),i=document.querySelector(".form"),$=document.querySelector(".input"),l=document.querySelector(".container"),c=document.querySelector(".gallery");l.style.display="none";i.addEventListener("submit",n=>{n.preventDefault(),l.style.display="block",c.innerHTML="";const s=$.value.trim();if(s===""){p.show({title:"Error",color:"yellow",message:"Please search for something"}),l.style.display="none";return}d(s).then(t=>{c.innerHTML=h(t),b.refresh(),i.reset()}).catch(t=>console.log("Error:",t))});
//# sourceMappingURL=commonHelpers.js.map
