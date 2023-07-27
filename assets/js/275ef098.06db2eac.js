"use strict";(self.webpackChunkcode_docs=self.webpackChunkcode_docs||[]).push([[5077],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),f=a,m=s["".concat(l,".").concat(f)]||s[f]||d[f]||o;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(3117),a=(n(7294),n(3905));const o={},c="Duplicate values",i={unversionedId:"pyspark/Data Analysis/Duplicate values",id:"pyspark/Data Analysis/Duplicate values",title:"Duplicate values",description:"Find duplicate values",source:"@site/docs/pyspark/Data Analysis/Duplicate values.mdx",sourceDirName:"pyspark/Data Analysis",slug:"/pyspark/Data Analysis/Duplicate values",permalink:"/second-documentation/docs/pyspark/Data Analysis/Duplicate values",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Datetime functions",permalink:"/second-documentation/docs/pyspark/Data Analysis/Datetime"},next:{title:"Explode row",permalink:"/second-documentation/docs/pyspark/Data Analysis/Explode row"}},l={},p=[{value:"Find duplicate values",id:"find-duplicate-values",level:2},{value:"Drop duplicate (without comparison)",id:"drop-duplicate-without-comparison",level:2},{value:"Drop duplicate (keep=first)",id:"drop-duplicate-keepfirst",level:2}],u={toc:p},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"duplicate-values"},"Duplicate values"),(0,a.kt)("h2",{id:"find-duplicate-values"},"Find duplicate values"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'subsets = [\'Account Number\', \'Balance Date\']\ndup = transactions.join(\n    transactions.groupBy(subsets) \\\n    .agg((f.count("*")>1).cast("int").alias("Duplicate_indicator")),\n    on=subsets,\n    how="inner"\n).filter(f.col(\'Duplicate_indicator\') > 0)\n')),(0,a.kt)("h2",{id:"drop-duplicate-without-comparison"},"Drop duplicate (without comparison)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"df = df.drop_duplicates(subset=['Account Number', 'Balance Date'])\n")),(0,a.kt)("h2",{id:"drop-duplicate-keepfirst"},"Drop duplicate (keep=first)"),(0,a.kt)("p",null,"Drop duplication with order r\u1ea5t ph\u1ee9c t\u1ea1p v\xec trong Distributed computing, ta r\u1ea5t kh\xf3 rank t\u1ea5t c\u1ea3 c\xe1c occurrance.\nDo \u0111\xf3, c\xe1ch duy nh\u1ea5t \u0111\u1ec3 l\xe0m l\xe0 d\xf9ng ",(0,a.kt)("inlineCode",{parentName:"p"},".coalesce(1)")," \u0111\u1ec3 d\u1ed3n m\u1ecdi th\u1ee9 l\u1ea1i th\xe0nh 1 unit computing duy nh\u1ea5t, order n\xf3, sau \u0111\xf3 ",(0,a.kt)("inlineCode",{parentName:"p"},"drop_duplicates")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"ffill_tbl.orderBy(\n    f.col('Account Number'),\n    f.col('Balance Date tz'),\n    f.col('rownum').asc(),\n    ).coalesce(1)\\\n    .drop_duplicates(subset=['Account Number', 'Balance Date tz'])\n")))}d.isMDXComponent=!0}}]);