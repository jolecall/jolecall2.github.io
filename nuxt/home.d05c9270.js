import{g as p,bu as e,bt as t,L as i}from"./entry.8cba7e1e.js";const d=1e3,a=545.5,g=151,l=237,m=158,c=199,u=157,x=80,f=[{type:"normal",src:p("/assets/images/pages/home/workspace_img.png"),style:{[e.XS]:{},[e.SM]:{width:"100%",height:"100%"},[e.MD]:{width:`${d*.6}px`,height:`${a*.6}px`},[e.LG]:{width:`${d*.85}px`,height:`${a*.85}px`},[e.XL]:{width:`${d}px`,height:`${a}px`}}},{type:"transition",transitionName:"slide-fade-left-delay",src:p("/assets/images/pages/home/workspace_part1.png"),style:{[e.XS]:{},[e.SM]:{},[e.MD]:{position:"absolute",top:"18.7%",left:"0",width:`${g*.6}px`,height:`${l*.6}px`},[e.LG]:{position:"absolute",top:"18.7%",left:"0",width:`${g*.85}px`,height:`${l*.85}px`},[e.XL]:{position:"absolute",top:"18.7%",left:"0",width:`${g}px`,height:`${l}px`}}},{type:"transition",transitionName:"slide-fade-bottom-delay",src:p("/assets/images/pages/home/workspace_part2.png"),style:{[e.XS]:{},[e.SM]:{},[e.MD]:{position:"absolute",bottom:"0",right:"18%",width:`${m*.6}px`,height:`${c*.6}px`},[e.LG]:{position:"absolute",bottom:"0",right:"18%",width:`${m*.85}px`,height:`${c*.85}px`},[e.XL]:{position:"absolute",bottom:"0",right:"18%",width:`${m}px`,height:`${c}px`}}},{type:"transition",transitionName:"slide-fade-right-delay",src:p("/assets/images/pages/home/workspace_part3.png"),style:{[e.XS]:{},[e.SM]:{},[e.MD]:{position:"absolute",top:"28%",right:"0",width:`${u*.6}px`,height:`${x*.6}px`},[e.LG]:{position:"absolute",top:"28%",right:"0",width:`${u*.85}px`,height:`${x*.85}px`},[e.XL]:{position:"absolute",top:"28%",right:"0",width:`${u}px`,height:`${x}px`}}}];function X(o){return f.map(s=>({...s,style:s.style[o]}))}const S={[e.XS]:{},[e.SM]:{},[e.MD]:{origin:{x:20,y:75,scaleX:.85,scaleY:.85},offset:{x:20,y:75,scaleX:.2,scaleY:.2},maxScrollY:.75*a},[e.LG]:{origin:{x:25,y:56,scaleX:.85,scaleY:.85},offset:{x:25,y:56,scaleX:0,scaleY:0},maxScrollY:800},[e.XL]:{origin:{x:34,y:41.5,scaleX:1,scaleY:1},offset:{x:34,y:41.5,scaleX:.1,scaleY:.1},maxScrollY:800}};function C(o){return S[o]}const L=[{path:"/features/portrait-retouching",videoUrl:t("/videos/pages/home/portrait-beautification.mp4"),poster:t("/images/pages/home/home_video_poste04%403x.webp")},{path:"/features/color-and-tone",reserve:!0,videoUrl:t("/videos/pages/home/color-and-tone.mp4"),poster:t("/images/pages/home/home_video_poste05%403x.webp")},{path:"/features/background-adjustments",videoUrl:t("/videos/pages/home/image-editing.mp4"),poster:t("/images/pages/home/home_video_poste06%403x.webp")},{path:"/features/exclusive-presets",reserve:!0,videoUrl:t("/videos/pages/home/exclusive-presets.mp4"),poster:t("/images/pages/home/home_video_poste07%403x.webp")},{path:"/features/batch-edits",listStyle:"decimal",videoUrl:t("/videos/pages/home/batch-editing2.mp4"),poster:t("/images/pages/home/home_video_poste08%403x.webp")}];function $(o){try{return JSON.parse(o),!0}catch{return!1}}function O(o,s="home.featureIntroduction",r=!0){return o.map((_,n)=>{const h=i(`${s}[${n}].list`);return{..._,title:i(`${s}[${n}].title`),list:$(h)?JSON.parse(h):h,description:i(`${s}[${n}].description`),showMoreBtn:r}})}const b=[{videoUrl:t("/videos/pages/home/workflow.mp4"),poster:t("/images/pages/home/home_video_poste01%403x.webp")},{videoUrl:t("/videos/pages/home/batch-editing.mp4"),poster:t("/images/pages/home/home_video_poste02%403x.webp")},{videoUrl:t("/videos/pages/home/presets.mp4"),poster:t("/images/pages/home/home_video_poste03%403x.webp")}],v={[e.XS]:{},[e.SM]:{},[e.MD]:{paddingTop:400,paddingBottom:200,offset:15},[e.LG]:{paddingTop:400,paddingBottom:300,offset:15},[e.XL]:{paddingTop:400,paddingBottom:300,offset:15}};function w(o){return v[o]}function M(o){return b.map((s,r)=>({...y(r,s),...w(o)}))}function y(o,s){return{...s,title:JSON.parse(i(`home.productChapter[${o}].title`)),describe:JSON.parse(i(`home.productChapter[${o}].describe`))}}export{w as a,O as b,X as c,C as d,L as f,M as g,b as p};
