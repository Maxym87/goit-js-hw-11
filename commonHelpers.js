import{i as p,S as y}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const u="/goit-js-hw-11/assets/cross-6532c37c.svg",f="42680318-96c21e5764acdc13d94b87bb9",m="https://pixabay.com/api/",d=document.querySelector(".container");function h(o){d.style.display="block";const t=`${m}?key=${f}&q=${o}&image_type=photo&orientation=horizontal&savesearch=true`;return fetch(t).then(s=>{if(!s.ok)throw new Error(`Response error ${s.status}`);return s.json()}).then(s=>(s.hits.length===0&&p.error({iconUrl:u,timeout:3e3,position:"topRight",messageColor:"#FFF",backgroundColor:"#FF544B",message:"Sorry, there are no images matching your search query. Please try again!"}),s)).catch(s=>console.log(`Error: ${s}`))}function b(o){return o.hits.map(({largeImageURL:t,webformatURL:s,tags:a,likes:e,views:r,comments:n,downloads:g})=>`<li class="gallery-item">
              <a class="gallery-link" href="${t}">
                <img 
                  class="gallery-image" 
                  src="${s}" 
                  alt="${a}" 
                  width="360px" 
                  height="200px"
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
                  <span class="gallery-info-span">Comments: <span class="tag-span">${n}</span></span>    
                </p>
                <p class="gallery-info-par">
                  <span class="gallery-info-span">Downloads: <span class="tag-span">${g}</span></span>    
                </p>
              </div>
            </li>`).join("")}const $=new y(".gallery a",{captionsData:"alt",captionDelay:250}),i=document.querySelector(".form"),L=document.querySelector(".input"),l=document.querySelector(".container"),c=document.querySelector(".gallery");l.style.display="none";i.addEventListener("submit",o=>{o.preventDefault(),l.style.display="block",c.innerHTML="";const t=L.value.trim();if(t===""){p.show({iconUrl:u,color:"#EF4040",messageColor:"#FFF",message:"Sorry, there are no images matching your search query. Please, try again!"}),l.style.display="none";return}h(t).then(s=>{c.innerHTML=b(s),$.refresh(),i.reset()}).catch(s=>console.log("Error:",s))});
//# sourceMappingURL=commonHelpers.js.map
