import{i as u,S as g}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="42680318-96c21e5764acdc13d94b87bb9",d="https://pixabay.com/api/",i=document.querySelector(".container");function h(n){i.style.display="block";const s=`${d}?key=${m}&q=${n}&image_type=photo&orientation=horizontal&savesearch=true`;return fetch(s).then(t=>{if(!t.ok)throw new Error(`Response error ${t.status}`);return t.json()}).then(t=>(i.style.display="none",t.hits.length===0&&u.error({title:"Error",timeout:3e3,position:"bottomRight",message:"Sorry, there are no images matching your search query. Please try again!"}),t)).catch(t=>console.log(`Error: ${t}`))}const $=document.querySelector(".gallery");function b(n){const s=n.hits.map(({largeImageURL:t,webformatURL:a,tags:e,likes:r,views:o,comments:y,downloads:f})=>`<li class="gallery-item">
              <a class="gallery-link" href="${t}">
                <img 
                  class="gallery-image" 
                  src="${a}" 
                  alt="${e}" 
                  width="360px" 
                  height="260px"
                />
              </a>
              <div class="gallery-info">
                <p class="gallery-info-par">
                  <span class="gallery-info-span">Likes: <span class="tag-span">${r}</span></span>    
                </p>
                <p class="gallery-info-par">
                  <span class="gallery-info-span">Views: <span class="tag-span">${o}</span></span>    
                </p>
                <p class="gallery-info-par">
                  <span class="gallery-info-span">Comments: <span class="tag-span">${y}</span></span>    
                </p>
                <p class="gallery-info-par">
                  <span class="gallery-info-span">Downloads: <span class="tag-span">${f}</span></span>    
                </p>
              </div>
            </li>`).join("");$.innerHTML=s}const L=new g(".gallery a",{captionsData:"alt",captionDelay:250}),c=document.querySelector(".form"),S=document.querySelector(".input"),l=document.querySelector(".container"),p=document.querySelector(".gallery");l.style.display="none";c.addEventListener("submit",n=>{n.preventDefault(),l.style.display="block",p.innerHTML="";const s=S.value.trim();if(s===""){u.show({title:"Error",color:"yellow",message:"Please search for something"}),l.style.display="none";return}h(s).then(t=>{p.innerHTML=b(t),L.refresh(),c.reset()}).catch(t=>console.log("Error:",t))});
//# sourceMappingURL=commonHelpers.js.map
