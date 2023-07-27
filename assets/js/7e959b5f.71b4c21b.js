"use strict";(self.webpackChunkcode_docs=self.webpackChunkcode_docs||[]).push([[2701],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,y=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(y,c(c({ref:t},l),{},{components:n})):r.createElement(y,c({ref:t},l))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},835:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(3117),a=(n(7294),n(3905));const o={},c="Concat (stack) dataframes",i={unversionedId:"pyspark/Data Analysis/concat",id:"pyspark/Data Analysis/concat",title:"Concat (stack) dataframes",description:"\u0110\u1ec3 concat nhi\u1ec1u dataframe, ta c\xf3 th\u1ec3 d\xf9ng utility function wrap pyspark unionAll method",source:"@site/docs/pyspark/Data Analysis/concat.mdx",sourceDirName:"pyspark/Data Analysis",slug:"/pyspark/Data Analysis/concat",permalink:"/second-documentation/docs/pyspark/Data Analysis/concat",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Case when",permalink:"/second-documentation/docs/pyspark/Data Analysis/case when"},next:{title:"Groupby and Aggregation",permalink:"/second-documentation/docs/pyspark/Data Analysis/groupby and agg"}},s={},p=[],l={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"concat-stack-dataframes"},"Concat (stack) dataframes"),(0,a.kt)("p",null,"\u0110\u1ec3 concat nhi\u1ec1u dataframe, ta c\xf3 th\u1ec3 d\xf9ng utility function wrap pyspark ",(0,a.kt)("inlineCode",{parentName:"p"},"unionAll")," method"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from pyspark.sql import DataFrame\nfrom functools import reduce\n\ndef unionAll(*dfs):\n    return reduce(DataFrame.unionAll, dfs)\n\n# S\u1eed d\u1ee5ng\n\nunionAll(*[df1, df2, df3])\nunionAll(df1, df2, df3)\n")))}d.isMDXComponent=!0}}]);