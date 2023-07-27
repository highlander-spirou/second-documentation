"use strict";(self.webpackChunkcode_docs=self.webpackChunkcode_docs||[]).push([[8261],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),y=o,m=u["".concat(c,".").concat(y)]||u[y]||d[y]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=y;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},2209:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(3117),o=(t(7294),t(3905));const a={},i="Join",l={unversionedId:"pyspark/Data Analysis/join",id:"pyspark/Data Analysis/join",title:"Join",description:"Join c\u1ee7a pyspark kh\xe1 gi\u1ed1ng merge c\u1ee7a pandas.",source:"@site/docs/pyspark/Data Analysis/join.mdx",sourceDirName:"pyspark/Data Analysis",slug:"/pyspark/Data Analysis/join",permalink:"/second-documentation/docs/pyspark/Data Analysis/join",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Groupby and Aggregation",permalink:"/second-documentation/docs/pyspark/Data Analysis/groupby and agg"},next:{title:"Melt dataframe",permalink:"/second-documentation/docs/pyspark/Data Analysis/melt"}},c={},s=[],p={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"join"},"Join"),(0,o.kt)("p",null,"Join c\u1ee7a pyspark kh\xe1 gi\u1ed1ng ",(0,o.kt)("inlineCode",{parentName:"p"},"merge")," c\u1ee7a pandas."),(0,o.kt)("p",null,"C\xf3 1 \u0111i\u1ec3m kh\xe1c bi\u1ec7t c\u1ee7a ",(0,o.kt)("inlineCode",{parentName:"p"},"join")," l\xe0 ta c\xf3 th\u1ec3 d\xf9ng boolean expression ho\u1eb7c d\xf9ng columns keys."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Boolean expression"',title:'"Boolean','expression"':!0},"df3 = df1.join(df2, \n                (df1['colA'] == df2['colB']) & (df1['colC'] == df2['colD']), \n                how='left')\n")),(0,o.kt)("p",{style:{color:"red"}},"Khi join b\u1eb1ng Boolean expression, t\u1ea5t c\u1ea3 m\u1ecdi c\u1ed9t d\xf9 l\xe0 key columns \u0111\u1ec1u s\u1ebd xu\u1ea5t hi\u1ec7n trong result table (duplicated key name)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Column keys"',title:'"Column','keys"':!0},"df3 = df1.join(df2, on=['Bank'], how='left')\n")),(0,o.kt)("p",null,"Khi join b\u1eb1ng Column keys, c\xe1c columns trong ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"on"))," s\u1ebd ch\u1ec9 xu\u1ea5t hi\u1ec7n 1 l\u1ea7n"))}d.isMDXComponent=!0}}]);