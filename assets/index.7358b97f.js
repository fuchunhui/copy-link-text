!function(t=".",e="__import__"){try{self[e]=new Function("u","return import(u)")}catch(n){const o=new URL(t,location),r=t=>{URL.revokeObjectURL(t.src),t.remove()};self[e]=t=>new Promise(((n,s)=>{const c=new URL(t,o);if(self[e].moduleMap[c])return n(self[e].moduleMap[c]);const a=new Blob([`import * as m from '${c}';`,`${e}.moduleMap['${c}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(a),onerror(){s(new Error(`Failed to import: ${t}`)),r(i)},onload(){n(self[e].moduleMap[c]),r(i)}});document.head.appendChild(i)})),self[e].moduleMap={}}}("/copy-link-text/assets/");class t extends HTMLElement{constructor(){super();this.getAttribute("immediate")||!1?this.render():setTimeout((()=>{this.render()}),100)}render(){const t=document.createElement("h2"),e=document.createElement("a");e.setAttribute("href",this.getAttribute("href")||""),e.setAttribute("target","_blank"),e.style.textDecoration="none",e.textContent=this.getAttribute("t"),t.appendChild(e);const n=document.createElement("p");n.textContent=this.getAttribute("n");const o=this.attachShadow({mode:"open"});o.appendChild(t),o.appendChild(n);const r=(this.textContent||"").split("-");r.forEach(((t,e)=>{const n=document.createElement("span");e===r.length-1&&(n.style.background="#265ea7",n.style.color="#ed20f9"),n.textContent=t.trim();const s=document.createElement("p");s.appendChild(n),o.appendChild(s)}))}}customElements.define("copy-section",t),((t={href:"#:~:text=转，光阴迫。-,一万年太久，只争朝夕,-。",t:"动态 Web Components",n:"《满江红·和郭沫若同志》",data:"毛泽东-小小寰球，有几个苍蝇碰壁。-嗡嗡叫，几声凄厉，几声抽泣。-蚂蚁缘槐夸大国，蚍蜉撼树谈何易。-正西风落叶下长安，飞鸣镝。-多少事，从来急。-天地转，光阴迫。-一万年太久，只争朝夕。-四海翻腾云水怒，五洲震荡风雷激。-要扫除一切害人虫，全无敌。"})=>{const e=document.createElement("copy-section"),{href:n,t:o,n:r,data:s}=t;e.setAttribute("href",n),e.setAttribute("t",o),e.setAttribute("n",r),e.textContent=s;const c=document.getElementById("main");null==c||c.appendChild(e)})();
