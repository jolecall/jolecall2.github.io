import v from"./ArrowButton.f00a9bc8.js";import{_ as C}from"./Video.vue.59034982.js";import k from"./LazyLoad.5feb9a7a.js";import B from"./Container.84a5d59e.js";import{d as S,bJ as g,b as I,o as e,a as s,m as n,w as l,f as o,t as i,u as r,av as V,p as c,F as A,v as F,h as p,e as b,U as L,V as N}from"./entry.8cba7e1e.js";/* empty css                                */import{_ as U}from"./_plugin-vue_export-helper.a1a6add7.js";import"./ArrowButton.vue.0882fd3d.js";/* empty css                     */const z=t=>(L("data-v-4e2f551a"),t=t(),N(),t),M={class:"feature-introduction-container"},D=z(()=>o("div",{class:"placeholder pix-col-md-1400-1 pix-col-lg-1920-3 pix-col-3"},null,-1)),E={class:"wrapper__item pix-col-xs-375-4 pix-col-xs-600-4 pix-col-md-900-4 pix-col-md-1400-6 pix-col-lg-1920-7 pix-col-7"},J={class:"wrapper__item-title"},R={class:"wrapper__item-desc"},$={key:1,class:"wrapper__item-content"},j={class:"wrapper__item pix-col-xs-375-4 pix-col-xs-600-4 pix-col-md-900-4 pix-col-md-1400-8 pix-col-lg-1920-11 pix-col-11"},q=S({__name:"FeatureIntroduction",props:{path:{default:""},reserve:{type:Boolean,default:!1},title:{default:""},description:null,list:{default(){return[]}},videoUrl:null,listStyle:{default:"disc"},showMoreBtn:{type:Boolean,default:!0},poster:{default:""}},setup(t){const a=t,d=g(),m=()=>{a.path&&d.push({path:a.path})},u=I(()=>({"--list-style":a.listStyle}));return(G,H)=>{const _=v,f=C,x=k,h=B;return e(),s("div",M,[n(h,{class:"feature-introduction-container__content"},{default:l(()=>[o("div",{class:"pix-wrapper wrapper",style:c({direction:t.reserve?"rtl":"ltr"})},[D,o("div",E,[o("h2",J,i(t.title),1),o("p",R,i(t.description),1),t.list&&r(V)(t.list)&&t.list.length?(e(),s("ul",{key:0,class:"wrapper__item-list",style:c(r(u))},[(e(!0),s(A,null,F(t.list,(w,y)=>(e(),s("li",{key:y},i(w),1))),128))],4)):t.list?(e(),s("p",$,i(t.list),1)):p("",!0),t.showMoreBtn?(e(),b(_,{key:2,class:"wrapper__item-btn",onClick:m})):p("",!0)]),o("div",j,[n(x,{"transition-name":t.reserve?"slide-fade-left":"slide-fade-right"},{default:l(()=>[n(f,{class:"wrapper__item-video",src:t.videoUrl,poster:t.poster},null,8,["src","poster"])]),_:1},8,["transition-name"])])],4)]),_:1})])}}}),tt=U(q,[["__scopeId","data-v-4e2f551a"]]);export{tt as default};
