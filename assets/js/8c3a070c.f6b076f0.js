"use strict";(self.webpackChunkcode_docs=self.webpackChunkcode_docs||[]).push([[8275],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(n),d=o,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||c;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var i=2;i<c;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2227:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>i});var r=n(3117),o=(n(7294),n(3905));const c={},a="Delete rows",l={unversionedId:"sql/Delete row",id:"sql/Delete row",title:"Delete rows",description:"X\xf3a c\xe1c d\xf2ng m\xe0 n\xf3 kh\xf4ng t\u1ed3n t\u1ea1i trong b\u1ea3ng kh\xe1c",source:"@site/docs/sql/Delete row.mdx",sourceDirName:"sql",slug:"/sql/Delete row",permalink:"/second-documentation/docs/sql/Delete row",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Correlated subquery",permalink:"/second-documentation/docs/sql/Correlated subquery"},next:{title:"Insert rows",permalink:"/second-documentation/docs/sql/Insert row"}},s={},i=[{value:"X\xf3a c\xe1c d\xf2ng m\xe0 n\xf3 kh\xf4ng t\u1ed3n t\u1ea1i trong b\u1ea3ng kh\xe1c",id:"x\xf3a-c\xe1c-d\xf2ng-m\xe0-n\xf3-kh\xf4ng-t\u1ed3n-t\u1ea1i-trong-b\u1ea3ng-kh\xe1c",level:2}],u={toc:i},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"delete-rows"},"Delete rows"),(0,o.kt)("h2",{id:"x\xf3a-c\xe1c-d\xf2ng-m\xe0-n\xf3-kh\xf4ng-t\u1ed3n-t\u1ea1i-trong-b\u1ea3ng-kh\xe1c"},"X\xf3a c\xe1c d\xf2ng m\xe0 n\xf3 kh\xf4ng t\u1ed3n t\u1ea1i trong b\u1ea3ng kh\xe1c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"delete from cd.members \nwhere memid not in (select memid from cd.bookings);\n")),(0,o.kt)("p",null,"L\xfac n\xe0y, ",(0,o.kt)("strong",{parentName:"p"},"WHERE")," s\u1ebd ch\u1ea1y c\xe2u l\u1ec7nh v\xe0 truy v\u1ea5n subqueries 1 l\u1ea7n duy nh\u1ea5t.\nTuy nhi\xean, ta \u0111\xe3 bi\u1ebft c\xe2u l\u1ec7nh subqueries from ",(0,o.kt)("strong",{parentName:"p"},"WHERE")," c\xf3 th\u1ec3 \u0111c translate th\xe0nh c\xe2u l\u1ec7nh correlated subqueries (",(0,o.kt)("inlineCode",{parentName:"p"},"Subqueries from select"),"). L\xfac n\xe0y, h\xe0m ",(0,o.kt)("strong",{parentName:"p"},"DELETE")," s\u1ebd x\xf3a tu\u1ea7n t\u1ef1 c\xe1c id xu\u1ea5t hi\u1ec7n b\xean trong ",(0,o.kt)("strong",{parentName:"p"},"SELECT"),", thay v\xec x\xf3a 1 l\u1ea7n trong ",(0,o.kt)("strong",{parentName:"p"},"WHERE")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"delete from cd.members mems \nwhere not exists \n    (select 1 from cd.bookings bks\n    where bks.memid = mems.memid);\n")))}m.isMDXComponent=!0}}]);