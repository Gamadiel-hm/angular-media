import{b as X,c as Z,d as ee}from"./chunk-GDZNEHWN.js";import{a as K,b as M,c as V,d as q,e as J,f as x}from"./chunk-WPRGJVH5.js";import{$a as g,Bb as b,Cb as A,Db as L,Ea as m,Eb as Q,Fb as U,Gb as v,Ia as p,Ja as n,Ka as a,La as c,Ma as B,Mb as G,Na as N,Nb as W,Oa as R,Ob as Y,R as w,Ra as O,Sa as P,T as f,Ta as _,Ua as z,Va as d,Wa as u,ab as S,bb as h,cb as C,da as I,eb as D,fb as $,gb as j,hb as H,oa as E,qa as T,ua as r,va as F}from"./chunk-COQSIVTH.js";import"./chunk-2XJVAMHT.js";var fe=["scrollBar"];function ge(e,t){e&1&&R(0)}function ve(e,t){if(e&1&&(n(0,"div",17)(1,"div",18),c(2,"img",19),a(),n(3,"div",20)(4,"label"),d(5),a(),n(6,"label"),d(7),a()(),n(8,"div",21),c(9,"i",22),a()()),e&2){let o=t.ngIf;r(2),m("src",o.cover,E),r(3),u(o.name),r(2),u(o.album)}}function ye(e,t){if(e&1&&(B(0),p(1,ve,10,3,"div",16),h(2,"async"),N()),e&2){let o=P(2);r(1),m("ngIf",C(2,1,o.playMediaService.getTrack()))}}function he(e,t){if(e&1&&p(0,ye,3,3,"ng-container",15),e&2){let o=P();m("ngIf",o.playMediaService.getTrack().value.name)}}var te=(()=>{let t=class t{constructor(l){this.playMediaService=l,this.scrollBar=new T(""),this.track=X,this.arrayObservables=[],this.statusPlay=Z.pause}ngOnInit(){let l=this.playMediaService.playStatus.subscribe(i=>{this.statusPlay=i});this.arrayObservables.push(l)}ngOnDestroy(){this.arrayObservables.forEach(l=>l.unsubscribe)}toogleMedia(){this.playMediaService.togglePlay()}handleBarScroll(l){let i=this.scrollBar.nativeElement.value;this.playMediaService.porcentSeek(i)}};t.\u0275fac=function(i){return new(i||t)(F(ee))},t.\u0275cmp=f({type:t,selectors:[["app-media-player"]],viewQuery:function(i,s){if(i&1&&$(fe,5),i&2){let y;D(y=j())&&(s.scrollBar=y.first)}},standalone:!0,features:[g],decls:22,vars:11,consts:[[1,"container-mediap"],[4,"ngTemplateOutlet"],[1,"media"],[1,"media-buttons"],["type","button"],[1,"uil","uil-previous"],["type","button",3,"click"],[1,"uil",3,"ngClass"],[1,"uil","uil-step-forward"],[1,"media-timiline"],["placeholder","range media player","type","range","min","0","max","100",3,"value","click"],["scrollBar",""],[1,"timiline-start"],[1,"timiline-end"],["card_artist",""],[4,"ngIf"],["class","card-artist",4,"ngIf"],[1,"card-artist"],[1,"image"],["alt","imagen1",3,"src"],[1,"info"],[1,"card-icon"],[1,"uil","uil-heart-alt"]],template:function(i,s){if(i&1&&(n(0,"div",0),p(1,ge,1,0,"ng-container",1),n(2,"div",2)(3,"div",3)(4,"button",4),c(5,"i",5),a(),n(6,"button",6),O("click",function(){return s.toogleMedia()}),c(7,"i",7),a(),n(8,"button",4),c(9,"i",8),a()(),n(10,"div",9)(11,"input",10,11),O("click",function(de){return s.handleBarScroll(de)}),h(13,"async"),a(),n(14,"label",12),d(15),h(16,"async"),a(),n(17,"label",13),d(18),h(19,"async"),a()()()(),p(20,he,1,1,"ng-template",null,14,H)),i&2){let y=z(21);r(1),m("ngTemplateOutlet",y),r(6),m("ngClass",s.statusPlay==="pause"?"uil-play-circle":"uil-pause-circle"),r(4),m("value",C(13,5,s.playMediaService.porcentPlay$)),r(4),u(C(16,7,s.playMediaService.time$)),r(3),u(C(19,9,s.playMediaService.timeRemaining$))}},dependencies:[v,b,L,Q,U],styles:['.container-mediap[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,minmax(2rem,1fr));width:100%;max-height:var(--footer);grid-template-areas:"card media media options"}.card-artist[_ngcontent-%COMP%]{grid-area:card;display:flex;gap:.2rem;justify-content:center;align-items:center;max-height:calc(var(--footer) - 2rem)}.card-artist[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{height:100%;width:100%}.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:100%;border-radius:var(--border-radius-2)}.card-icon[_ngcontent-%COMP%]{font-size:var(--font-size-icon);display:flex;justify-content:start;align-items:center}.card-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{bottom:50%}.info[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;height:100%}.info[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{white-space:normal;overflow:hidden;text-overflow:ellipsis;font-size:.8rem}.media[_ngcontent-%COMP%]{grid-area:media;display:flex;flex-direction:column}.media-buttons[_ngcontent-%COMP%]{display:flex;gap:1rem;align-self:center}button[_ngcontent-%COMP%]{box-shadow:none;border:none;cursor:pointer}button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{transition:all var(--animation-1) ease-out}button[_ngcontent-%COMP%]:hover > i[_ngcontent-%COMP%]{color:var(--bhaze-600)}.media-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:var(--font-size-icon2)}.media-timiline[_ngcontent-%COMP%]{position:relative;width:100%}.media-timiline[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:100%;background:none;border:0;padding:0;margin:0;color:#f0f8ff}.timiline-start[_ngcontent-%COMP%]{position:absolute;top:0;left:0;transform:translateY(100%)}.timiline-end[_ngcontent-%COMP%]{position:absolute;right:0;top:0;transform:translateY(100%)}']});let e=t;return e})();var ie={nav:[{icon:"uil-estate",title:"Home",route:"/tracks"},{icon:"uil-search",title:"Buscar",route:"/history"},{icon:"uil-books",title:"Tu biblioteca",route:"/favorites"}],acctions:[{title:"Crear lista",icon:"uil-book-medical"},{title:"Canciones Favoritas",icon:"uil-heart-alt"}]},ne=[{title:"Mi lista"}];var oe=e=>["uil",e];function _e(e,t){if(e&1&&(n(0,"li",3),c(1,"i",4),n(2,"label",5),d(3),a()()),e&2){let o=t.$implicit;m("routerLink",o.route),r(1),m("ngClass",S(5,oe,o.icon))("id",o.title),r(1),_("for",o.title),r(1),u(o.title)}}function be(e,t){if(e&1&&(n(0,"li",6),c(1,"i",7),n(2,"label",5),d(3),a()()),e&2){let o=t.$implicit;r(1),m("ngClass",S(3,oe,o.icon)),r(1),_("for",o.title),r(1),u(o.title)}}function Me(e,t){if(e&1&&(n(0,"li",6)(1,"label",5),d(2),a()()),e&2){let o=t.$implicit;r(1),_("for",o.title),r(1),u(o.title)}}var re=(()=>{let t=class t{constructor(){this.itemsNav=ie,this.optionsNav=ne}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=f({type:t,selectors:[["app-side-bar"]],standalone:!0,features:[g],decls:7,vars:3,consts:[[1,"nav"],["class","nav-item",3,"routerLink",4,"ngFor","ngForOf"],["class","nav-item",4,"ngFor","ngForOf"],[1,"nav-item",3,"routerLink"],[3,"ngClass","id"],[3,"for"],[1,"nav-item"],[3,"ngClass"]],template:function(i,s){i&1&&(n(0,"div",0)(1,"ul"),p(2,_e,4,7,"li",1),a(),n(3,"ul"),p(4,be,4,5,"li",2),a(),n(5,"ul"),p(6,Me,3,2,"li",2),a()()),i&2&&(r(2),m("ngForOf",s.itemsNav.nav),r(2),m("ngForOf",s.itemsNav.acctions),r(2),m("ngForOf",s.optionsNav))},dependencies:[v,b,A,x,q],styles:["ul[_ngcontent-%COMP%]{list-style:none;padding:0;border-bottom:1px solid var(--b100)}li[_ngcontent-%COMP%]{display:flex;align-items:center}.nav[_ngcontent-%COMP%]{padding:1rem;margin-top:1rem;display:flex;flex-direction:column;gap:1rem}.nav-item[_ngcontent-%COMP%]{margin-bottom:.7rem;font-size:var(--font-size-icon);padding:.2rem 1rem;border-radius:var(--border-radius-1);transition:background-color 1s ease-out,color .5s ease-out}.nav-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:1rem}.nav-item[_ngcontent-%COMP%]:hover{background-color:var(--b300);color:var(--b950)}"]});let e=t;return e})();var ae=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=f({type:t,selectors:[["app-home"]],standalone:!0,features:[g],decls:7,vars:0,consts:[[1,"container"],[1,"sidebar"],[1,"body"],[1,"footer"]],template:function(i,s){i&1&&(n(0,"div",0)(1,"div",1),c(2,"app-side-bar"),a(),n(3,"div",2),c(4,"router-outlet"),a()(),n(5,"div",3),c(6,"app-media-player"),a())},dependencies:[v,re,x,M,te],styles:[".container[_ngcontent-%COMP%]{max-height:calc(100vh - var(--footer));min-width:100vw;position:fixed;display:flex}.sidebar[_ngcontent-%COMP%]{width:15rem;height:calc(100vh - var(--footer));background-color:var(--b900)}.body[_ngcontent-%COMP%]{flex-grow:1;overflow-y:auto;padding:2rem}.footer[_ngcontent-%COMP%]{position:fixed;bottom:0;min-width:100vw;height:var(--footer);border-top:1px solid var(--b100);box-shadow:var(--shadow-1);padding:var(--padding1)}@media (prefers-color-scheme: dark){.sidebar[_ngcontent-%COMP%]{border-right:1px solid var(--b100);box-shadow:var(--shadow-1)}}"]});let e=t;return e})();var le=(e,t)=>{let o=w(V);return(()=>document.cookie.split(";").filter(s=>s.startsWith("newUser_=")).length>0)()?!0:o.navigate(["/","auth"])};var se=[{path:"",component:ae,loadChildren:()=>import("./chunk-R2XTH7TS.js").then(e=>e.Home_Routes),canActivate:[le]},{path:"auth",loadComponent:()=>import("./chunk-M4JXC26I.js").then(e=>e.AuthComponent)}];var ce=(e,t)=>{let l=(()=>document.cookie.split(";").filter(i=>i.startsWith("newUser_")))();l.length===0?l=[""]:l[0].split("=")[1];try{let i=e;return i=e.clone({setHeaders:{authorization:`Bearer ${l}`}}),t(i)}catch(i){return console.log("Hubo un error",i),t(e)}};var me={providers:[J(se),I(Y),G(W([ce]))]};var pe=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=f({type:t,selectors:[["app-root"]],standalone:!0,features:[g],decls:1,vars:0,template:function(i,s){i&1&&c(0,"router-outlet")},dependencies:[v,M]});let e=t;return e})();K(pe,me).catch(e=>console.error(e));
