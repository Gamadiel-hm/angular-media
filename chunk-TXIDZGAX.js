import{a as p,b as V,d as j}from"./chunk-GDZNEHWN.js";import{a as M}from"./chunk-ZSFXPYGO.js";import{a as N}from"./chunk-D3ZYUPAA.js";import"./chunk-VELCUMZF.js";import{$a as f,Cb as F,Db as D,Ea as l,Ga as x,Gb as y,Ia as _,Ja as a,Ka as s,La as d,Ma as b,Na as h,Pa as I,Ra as S,Sa as m,T as g,Ua as z,Va as u,Wa as v,Xa as w,Y as O,Ya as E,Z as P,hb as T,oa as k,ua as r,va as C}from"./chunk-COQSIVTH.js";import"./chunk-2XJVAMHT.js";function R(t,e){if(t&1){let c=I();b(0),a(1,"div",2)(2,"div",3),d(3,"img",4),a(4,"div",5)(5,"button",6),S("click",function(){O(c);let n=m();return P(n.sendTrackMedia())}),d(6,"i",7),s()()(),a(7,"div",8)(8,"label"),u(9),s(),a(10,"label"),u(11),s()()(),h()}if(t&2){let c=m();r(3),l("src",c.tracks.cover,k),r(6),v(c.tracks.name),r(2),w(" ",c.tracks.album," ")}}function q(t,e){if(t&1){let c=I();a(0,"div",9)(1,"div",10),d(2,"img",4),a(3,"div",11)(4,"button",6),S("click",function(){O(c);let n=m();return P(n.sendTrackMedia())}),d(5,"i",7),s()()(),a(6,"div",12)(7,"label"),u(8),s()()()}if(t&2){let c=m();r(2),l("src",c.tracks.cover,k),r(6),v(c.tracks.name)}}var G=(()=>{let e=class e{constructor(i){this.playMediaServices=i,this.tracks=V,this.sizeCards=p.small}sendTrackMedia(){this.playMediaServices.addTrack(this.tracks)}};e.\u0275fac=function(n){return new(n||e)(C(j))},e.\u0275cmp=g({type:e,selectors:[["app-card-player"]],inputs:{tracks:"tracks",sizeCards:"sizeCards"},standalone:!0,features:[f],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["small_size",""],[1,"card-big"],[1,"card-image"],["appImgBroken","","alt","",3,"src"],[1,"card-play"],["type","button",1,"btn-play",3,"click"],[1,"uil","uil-play-circle"],[1,"card-info"],[1,"card-small"],[1,"card-image-small"],[1,"card-play-small"],[1,"card-info-small"]],template:function(n,o){if(n&1&&_(0,R,12,3,"ng-container",0)(1,q,9,2,"ng-template",null,1,T),n&2){let $=z(2);l("ngIf",o.sizeCards==="big")("ngIfElse",$)}},dependencies:[y,D,N],styles:["img[_ngcontent-%COMP%]{width:100%;object-fit:cover;border-radius:var(--border-radius-2);transition:all var(--animation-2) ease-out}.card-image[_ngcontent-%COMP%]{width:100%;text-align:center;position:relative}.card-big[_ngcontent-%COMP%]{background-color:var(--b800);height:100%;border-radius:var(--border-radius-2);transition:background-color var(--animation-2) ease-out;box-shadow:var(--shadow-1);display:flex;flex-direction:column}.card-big[_ngcontent-%COMP%]:hover   .card-info[_ngcontent-%COMP%]{background-color:var(--b100);color:var(--b900)}.card-big[_ngcontent-%COMP%]:hover   .card-play[_ngcontent-%COMP%]{opacity:1}.card-image[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{filter:blur(3px)}.card-info[_ngcontent-%COMP%]{flex-grow:1;display:flex;flex-direction:column;align-items:self-start;gap:.2rem;border-radius:var(--border-radius-1);transition:all var(--animation-2) ease-out}.card-info[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:.9rem}.card-play[_ngcontent-%COMP%]{position:absolute;right:0;bottom:0;opacity:0}.card-play[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:var(--font-size-5);color:var(--b800);transition:color var(--animation-2) ease-out}.card-play[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{color:#2dff88}.btn-play[_ngcontent-%COMP%]{border:0;padding:0;margin:0;height:5rem;width:5rem;background-color:none;cursor:pointer;border-radius:50%}.btn-play[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{width:100%;height:100%;font-size:3rem}.card-small[_ngcontent-%COMP%]{display:flex;gap:.5rem;height:5rem;width:100%;background-color:var(--b800);align-items:center;border-radius:var(--border-radius-2);transition:all var(--animation-2) ease-out;box-shadow:var(--shadow-1)}.card-image-small[_ngcontent-%COMP%]{position:relative}.card-image-small[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:5rem}.card-play-small[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;display:flex;justify-content:center;align-items:center}.card-small[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(n+2){flex-grow:1;height:100%;display:flex;align-items:center;border-radius:var(--border-radius-2);transition:all var(--animation-2) ease-out}.card-small[_ngcontent-%COMP%]:hover   .card-info-small[_ngcontent-%COMP%]{background-color:var(--b100);color:var(--b900)}.card-small[_ngcontent-%COMP%]:hover   .card-play-small[_ngcontent-%COMP%]{color:var(--b700);font-size:var(--font-size-4);opacity:1}.card-image-small[_ngcontent-%COMP%]:hover   .card-play-small[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#2dff88}.play[_ngcontent-%COMP%]{border:0;width:100%;padding:0}.btn-play[_ngcontent-%COMP%]{height:3rem;width:3rem}.btn-play[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:var(--font-size-4);transition:all var(--animation-2) ease-out}@media (min-width: 480px){.card-info[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:.9rem}}"]});let t=e;return t})();function A(t,e){if(t&1&&(b(0),d(1,"app-card-player",2),h()),t&2){let c=e.$implicit,i=m();r(1),l("tracks",c)("sizeCards",i.sizeInput)}}var U=(()=>{let e=class e{constructor(){this.sizeInput=p.small,this.titleInput="",this.tracksInput=[]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=g({type:e,selectors:[["app-section-generic"]],inputs:{sizeInput:"sizeInput",titleInput:"titleInput",tracksInput:"tracksInput"},standalone:!0,features:[f],decls:5,vars:4,consts:[[1,"container-genericSection"],[4,"ngFor","ngForOf"],[3,"tracks","sizeCards"]],template:function(n,o){n&1&&(a(0,"div",0)(1,"h1"),u(2),s(),a(3,"div"),_(4,A,2,2,"ng-container",1),s()()),n&2&&(r(2),v(o.titleInput?o.titleInput:"New contenido"),r(1),x(o.sizeInput==="big"?"section-a":"section-b"),r(1),l("ngForOf",o.tracksInput))},dependencies:[G,y,F],styles:[".section-a[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(10rem,1fr));gap:2rem}.section-b[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(15rem,1fr));gap:2rem}"]});let t=e;return t})();var ae=(()=>{let e=class e{constructor(i){this.tracksService=i,this.titlesSection=["Lo mejor de la musica electronica"],this.sizeSection=[p.small,p.big],this.tracks=[],this.arrayObservables=[]}ngOnInit(){let i=this.tracksService.getTracks().subscribe(n=>this.tracks=n.data);this.arrayObservables.push(i)}ngOnDestroy(){this.arrayObservables.forEach(i=>i.unsubscribe())}};e.\u0275fac=function(n){return new(n||e)(C(M))},e.\u0275cmp=g({type:e,selectors:[["app-tracks"]],standalone:!0,features:[E([M]),f],decls:4,vars:6,consts:[[1,"container-top"],[3,"titleInput","sizeInput","tracksInput"],[1,"container-bottom"]],template:function(n,o){n&1&&(a(0,"div",0),d(1,"app-section-generic",1),s(),a(2,"div",2),d(3,"app-section-generic",1),s()),n&2&&(r(1),l("titleInput",o.titlesSection[0])("sizeInput",o.sizeSection[0])("tracksInput",o.tracks),r(2),l("titleInput",o.titlesSection[0])("sizeInput",o.sizeSection[1])("tracksInput",o.tracks))},dependencies:[U]});let t=e;return t})();export{ae as TracksComponent};