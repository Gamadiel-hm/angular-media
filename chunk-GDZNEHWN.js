import{L as u,g as o}from"./chunk-COQSIVTH.js";var y=function(a){return a.small="small",a.big="big",a}(y||{}),h={_id:0,name:"",album:"",cover:"",artist:{name:"",nickname:"",nationality:""},duration:{start:0,end:99},url:""};var n=function(a){return a.play="play",a.pause="pause",a}(n||{});var v=(()=>{let s=class s{constructor(){this.audio=new Audio,this.tracks$=new o(h),this.time$=new o("00:00"),this.timeRemaining$=new o("-00:00"),this.playStatus=new o(n.pause),this.porcentPlay$=new o(0),this.calculateTime=()=>{let{duration:t,currentTime:i}=this.audio;this.setTimeElepsed(i),this.setTimeRemaning(t,i),this.setPorcent(t,i)},this.audio=new Audio,this.listAllEvents()}addTrack(t){this.tracks$.next(t),this.playTrack(t)}getTrack(){return this.tracks$}playTrack(t){this.audio.src=t.url,this.audio.play(),this.playStatus.next(n.play)}listAllEvents(){this.audio.addEventListener("timeupdate",this.calculateTime,!1)}setTimeElepsed(t){let i=Math.floor(t/60),e=Math.floor(t%60),r=`0${i}:${e<10?"0"+e:e}`;this.time$.next(r)}setTimeRemaning(t,i){let e=Math.floor(i/60),r=Math.floor(i%60),l=t-(e*60+r),p=`-0${Math.floor(l/60)}`,c=Math.floor(l%60),m=`${c<10?"0"+c:c}`,d=`${p+":"+m}`;this.timeRemaining$.next(d)}togglePlay(){let t={play:()=>this.audio.play(),pause:()=>this.audio.pause()};this.playStatus.value===n.play?this.playStatus.next(n.pause):this.playStatus.next(n.play),t[this.playStatus.value]()}setPorcent(t,i){let e=i*100/t;this.porcentPlay$.next(e)}porcentSeek(t){let{duration:i}=this.audio,e=i*(t/100);this.audio.currentTime=e}};s.\u0275fac=function(i){return new(i||s)},s.\u0275prov=u({token:s,factory:s.\u0275fac,providedIn:"root"});let a=s;return a})();export{y as a,h as b,n as c,v as d};