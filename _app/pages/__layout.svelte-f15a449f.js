import{D as T,W as D,S as j,i as L,s as V,e as f,k as B,c as _,a as h,d as u,n as $,b as w,f as m,E as p,x as O,u as U,F as q,t as y,g as E,G as S,H as b,I as F,J as G,K as H,L as J}from"../chunks/vendor-6c3bd71b.js";import{u as A,a as v,s as g,p as N}from"../chunks/store-a0cd3530.js";const K=o=>{o[0]&&T(v)?(A.setUserAddress(o[0]),v.setAuth("true")):g()},M=o=>{o!=="0x38"&&g()};function P(o){let e,n,a,s;return{c(){e=f("button"),n=y("DISCONNECT"),this.h()},l(t){e=_(t,"BUTTON",{class:!0});var l=h(e);n=E(l,"DISCONNECT"),l.forEach(u),this.h()},h(){w(e,"class","p-2 bg-pink-300 text-gray-900 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center")},m(t,l){m(t,e,l),p(e,n),a||(s=S(e,"click",o[2]),a=!0)},p:b,d(t){t&&u(e),a=!1,s()}}}function R(o){let e,n,a,s;return{c(){e=f("button"),n=y("CONNECT"),this.h()},l(t){e=_(t,"BUTTON",{class:!0});var l=h(e);n=E(l,"CONNECT"),l.forEach(u),this.h()},h(){w(e,"class","p-2 bg-pink-300 text-gray-900 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center")},m(t,l){m(t,e,l),p(e,n),a||(s=S(e,"click",o[1]),a=!0)},p:b,d(t){t&&u(e),a=!1,s()}}}function z(o){let e,n;const a=o[4].default,s=F(a,o,o[3],null);return{c(){e=f("main"),s&&s.c()},l(t){e=_(t,"MAIN",{});var l=h(e);s&&s.l(l),l.forEach(u)},m(t,l){m(t,e,l),s&&s.m(e,null),n=!0},p(t,l){s&&s.p&&(!n||l&8)&&G(s,a,t,t[3],n?J(a,t[3],l,null):H(t[3]),null)},i(t){n||(O(s,t),n=!0)},o(t){U(s,t),n=!1},d(t){t&&u(e),s&&s.d(t)}}}function Q(o){let e,n;return{c(){e=f("div"),n=y("loading...")},l(a){e=_(a,"DIV",{});var s=h(e);n=E(s,"loading..."),s.forEach(u)},m(a,s){m(a,e,s),p(e,n)},p:b,i:b,o:b,d(a){a&&u(e)}}}function X(o){let e,n,a,s,t,l;function k(c,i){if(c[0]==="false")return R;if(c[0]==="true")return P}let d=k(o),r=d&&d(o);const x=[Q,z],C=[];function W(c,i){return 1}return s=W(),t=C[s]=x[s](o),{c(){e=f("div"),n=f("div"),r&&r.c(),a=B(),t.c(),this.h()},l(c){e=_(c,"DIV",{class:!0});var i=h(e);n=_(i,"DIV",{class:!0});var I=h(n);r&&r.l(I),I.forEach(u),a=$(i),t.l(i),i.forEach(u),this.h()},h(){w(n,"class","flex justify-end w-full"),w(e,"class","p-8 max-w-6xl mx-auto")},m(c,i){m(c,e,i),p(e,n),r&&r.m(n,null),p(e,a),C[s].m(e,null),l=!0},p(c,[i]){d===(d=k(c))&&r?r.p(c,i):(r&&r.d(1),r=d&&d(c),r&&(r.c(),r.m(n,null))),t.p(c,i)},i(c){l||(O(t),l=!0)},o(c){U(t),l=!1},d(c){c&&u(e),r&&r.d(),C[s].d()}}}{const o=window.ethereum;if(o){const e=new D(window.ethereum);N.set(e),o.on("accountsChanged",K),o.on("chainChanged",M),T(v)==="true"&&A.setUserAddress(o.selectedAddress)}}function Y(o,e,n){let a,s;q(o,N,r=>n(5,a=r)),q(o,v,r=>n(0,s=r));let{$$slots:t={},$$scope:l}=e;const k=async()=>{try{const r=await a.provider.request({method:"eth_requestAccounts"}),x=await a.provider.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x38"}]});N.set(new D(window.ethereum)),A.setUserAddress(r[0]),v.setAuth("true")}catch(r){g(),console.log(r)}},d=()=>{g()};return o.$$set=r=>{"$$scope"in r&&n(3,l=r.$$scope)},[s,k,d,l,t]}class te extends j{constructor(e){super();L(this,e,Y,X,V,{})}}export{te as default};