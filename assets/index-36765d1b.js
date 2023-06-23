(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function q(){}function ae(e){return e()}function le(){return Object.create(null)}function L(e){e.forEach(ae)}function fe(e){return typeof e=="function"}function he(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function _e(e){return Object.keys(e).length===0}function s(e,t){e.appendChild(t)}function pe(e,t,n){e.insertBefore(t,n||null)}function Q(e){e.parentNode&&e.parentNode.removeChild(e)}function ge(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function h(e){return document.createElement(e)}function y(e){return document.createTextNode(e)}function w(){return y(" ")}function K(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function P(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function me(e){return Array.from(e.childNodes)}function M(e,t){t=""+t,e.data!==t&&(e.data=t)}function re(e,t){e.value=t??""}function oe(e,t,n){for(let l=0;l<e.options.length;l+=1){const r=e.options[l];if(r.__value===t){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function be(e){const t=e.querySelector(":checked");return t&&t.__value}let V;function W(e){V=e}const E=[],se=[];let O=[];const ie=[],ve=Promise.resolve();let J=!1;function ye(){J||(J=!0,ve.then(de))}function R(e){O.push(e)}const G=new Set;let k=0;function de(){if(k!==0)return;const e=V;do{try{for(;k<E.length;){const t=E[k];k++,W(t),$e(t.$$)}}catch(t){throw E.length=0,k=0,t}for(W(null),E.length=0,k=0;se.length;)se.pop()();for(let t=0;t<O.length;t+=1){const n=O[t];G.has(n)||(G.add(n),n())}O.length=0}while(E.length);for(;ie.length;)ie.pop()();J=!1,G.clear(),W(e)}function $e(e){if(e.fragment!==null){e.update(),L(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(R)}}function Ae(e){const t=[],n=[];O.forEach(l=>e.indexOf(l)===-1?t.push(l):n.push(l)),n.forEach(l=>l()),O=t}const we=new Set;function Se(e,t){e&&e.i&&(we.delete(e),e.i(t))}function ke(e,t,n,l){const{fragment:r,after_update:o}=e.$$;r&&r.m(t,n),l||R(()=>{const u=e.$$.on_mount.map(ae).filter(fe);e.$$.on_destroy?e.$$.on_destroy.push(...u):L(u),e.$$.on_mount=[]}),o.forEach(R)}function Ee(e,t){const n=e.$$;n.fragment!==null&&(Ae(n.after_update),L(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Me(e,t){e.$$.dirty[0]===-1&&(E.push(e),ye(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Oe(e,t,n,l,r,o,u,f=[-1]){const b=V;W(e);const i=e.$$={fragment:null,ctx:[],props:o,update:q,not_equal:r,bound:le(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(b?b.$$.context:[])),callbacks:le(),dirty:f,skip_bound:!1,root:t.target||b.$$.root};u&&u(i.root);let _=!1;if(i.ctx=n?n(e,t.props||{},(p,$,...a)=>{const g=a.length?a[0]:$;return i.ctx&&r(i.ctx[p],i.ctx[p]=g)&&(!i.skip_bound&&i.bound[p]&&i.bound[p](g),_&&Me(e,p)),$}):[],i.update(),_=!0,L(i.before_update),i.fragment=l?l(i.ctx):!1,t.target){if(t.hydrate){const p=me(t.target);i.fragment&&i.fragment.l(p),p.forEach(Q)}else i.fragment&&i.fragment.c();t.intro&&Se(e.$$.fragment),ke(e,t.target,t.anchor,t.customElement),de()}W(b)}class Pe{$destroy(){Ee(this,1),this.$destroy=q}$on(t,n){if(!fe(n))return q;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const r=l.indexOf(n);r!==-1&&l.splice(r,1)}}$set(t){this.$$set&&!_e(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ue(e,t,n){const l=e.slice();return l[7]=t[n],l}function ce(e){let t,n,l=e[7].reps+"",r,o,u,f=z(e[1]*e[7].percent,e[0].round)+"",b,i,_,p=T(z(e[1]*e[7].percent,e[0].round))+"",$;return{c(){t=h("tr"),n=h("td"),r=y(l),o=w(),u=h("td"),b=y(f),i=w(),_=h("td"),$=y(p)},m(a,g){pe(a,t,g),s(t,n),s(n,r),s(t,o),s(t,u),s(u,b),s(t,i),s(t,_),s(_,$)},p(a,g){g&1&&l!==(l=a[7].reps+"")&&M(r,l),g&3&&f!==(f=z(a[1]*a[7].percent,a[0].round)+"")&&M(b,f),g&3&&p!==(p=T(z(a[1]*a[7].percent,a[0].round))+"")&&M($,p)},d(a){a&&Q(t)}}}function We(e){let t,n,l,r,o,u,f,b,i,_,p,$,a,g,X,Y,C,I,Z,B,N=T(e[1])+"",F,x,U,j=e[0].prompt+"",D,ee,v,H,te,S=e[0].sets,m=[];for(let c=0;c<S.length;c+=1)m[c]=ce(ue(e,S,c));return{c(){t=h("main"),n=h("select"),l=h("option"),r=y("Warm Up"),o=h("option"),u=y("Drop Set"),f=h("option"),b=y("Pyramid Set"),i=w(),_=h("table"),p=h("tr"),p.innerHTML=`<th>Reps</th> 
      <th>Weight</th> 
      <th>Plate Math</th>`,$=w();for(let c=0;c<m.length;c+=1)m[c].c();a=w(),g=h("tr"),X=h("td"),Y=w(),C=h("td"),I=y(e[1]),Z=w(),B=h("td"),F=y(N),x=w(),U=h("p"),D=y(j),ee=w(),v=h("input"),l.__value=e[2],l.value=l.__value,o.__value=e[4],o.value=o.__value,f.__value=e[3],f.value=f.__value,P(n,"class","sequenceSelector svelte-pi97sq"),e[0]===void 0&&R(()=>e[5].call(n)),P(_,"class","table svelte-pi97sq"),P(v,"class","textField svelte-pi97sq"),P(v,"inputmode","numeric"),P(v,"maxlength","3")},m(c,A){pe(c,t,A),s(t,n),s(n,l),s(l,r),s(n,o),s(o,u),s(n,f),s(f,b),oe(n,e[0],!0),s(t,i),s(t,_),s(_,p),s(_,$);for(let d=0;d<m.length;d+=1)m[d]&&m[d].m(_,null);s(_,a),s(_,g),s(g,X),s(g,Y),s(g,C),s(C,I),s(g,Z),s(g,B),s(B,F),s(t,x),s(t,U),s(U,D),s(t,ee),s(t,v),re(v,e[1]),H||(te=[K(n,"change",e[5]),K(v,"input",e[6]),K(v,"focus",qe)],H=!0)},p(c,[A]){if(A&29&&oe(n,c[0]),A&3){S=c[0].sets;let d;for(d=0;d<S.length;d+=1){const ne=ue(c,S,d);m[d]?m[d].p(ne,A):(m[d]=ce(ne),m[d].c(),m[d].m(_,a))}for(;d<m.length;d+=1)m[d].d(1);m.length=S.length}A&2&&M(I,c[1]),A&2&&N!==(N=T(c[1])+"")&&M(F,N),A&1&&j!==(j=c[0].prompt+"")&&M(D,j),A&2&&v.value!==c[1]&&re(v,c[1])},i:q,o:q,d(c){c&&Q(t),ge(m,c),H=!1,L(te)}}}function z(e,t){let n=e+5;return n=Math.round(n/t)*t,n-=5,n}function T(e){let t="",n={barbellWeight:45,platesAvailable:[{weight:45,count:1,holeSize:2,used:0},{weight:25,count:1,holeSize:2,used:0},{weight:10,count:1,holeSize:2,used:0},{weight:5,count:2,holeSize:2,used:0},{weight:2.5,count:1,holeSize:2,used:0}]},l;if(e>=45?l=(e-n.barbellWeight)/2:l=(e-2.5)/2,l==0)return 0;for(;l>0;)for(let r=0;r<n.platesAvailable.length;r++){let o=n.platesAvailable[r].weight;if(l>=o&&n.platesAvailable[r].used<n.platesAvailable[r].count){l-=o,n.platesAvailable[r].used++;break}else r==n.platesAvailable.length-1&&(t+="["+l+" short]",l=0)}for(let r=0;r<n.platesAvailable.length;r++){const o=n.platesAvailable[r];if(o.used>=3)t+=o.weight+" x "+o.used+", ";else if(o.used>0)for(let u=0;u<o.used;u++)t+=o.weight+", "}return t=t.substring(0,t.length-2),t}function qe(e){e.target.setSelectionRange(0,e.target.value.length)}function Le(e,t,n){let l={sets:[{reps:12,percent:.4},{reps:5,percent:.6},{reps:3,percent:.75},{reps:2,percent:.9}],round:10,prompt:"Working Weight"},r={sets:[{reps:12,percent:.7},{reps:10,percent:.75},{reps:8,percent:.8},{reps:6,percent:.85},{reps:4,percent:.9}],round:5,prompt:"One Rep Max"},o={sets:[{reps:"AMAP",percent:1},{reps:"AMAP",percent:.8},{reps:"AMAP",percent:.6},{reps:"AMAP",percent:.4}],round:5,prompt:"Working Weight"},u=l,f=135;function b(){u=be(this),n(0,u),n(3,r),n(4,o),n(2,l)}function i(){f=this.value,n(1,f)}return[u,f,l,r,o,b,i]}class Ne extends Pe{constructor(t){super(),Oe(this,t,Le,We,he,{})}}new Ne({target:document.getElementById("app")});
