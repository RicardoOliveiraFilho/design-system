var a=Object.defineProperty;var o=(n,t)=>a(n,"name",{value:t,configurable:!0});import{a as r,j as e}from"./jsx-runtime.1271b706.js";function d({tokens:n,hasRemValue:t=!1}){return r("table",{className:"tokens-grid",children:[e("thead",{children:r("tr",{children:[e("th",{children:"Name"}),e("th",{children:"Value"}),t&&e("th",{children:"Pixels"})]})}),e("tbody",{children:Object.entries(n).map(([s,i])=>r("tr",{children:[r("td",{children:["$",s]}),e("td",{children:i}),t&&r("td",{children:[Number(i.replace("rem",""))*16,"px"]})]},s))})]})}o(d,"TokensGrid");try{d.displayName="TokensGrid",d.__docgenInfo={description:"",displayName:"TokensGrid",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"Record<string, string>"}},hasRemValue:{defaultValue:{value:"false"},description:"",name:"hasRemValue",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/TokensGrid.tsx#TokensGrid"]={docgenInfo:d.__docgenInfo,name:"TokensGrid",path:"src/components/TokensGrid.tsx#TokensGrid"})}catch{}export{d as T};
//# sourceMappingURL=TokensGrid.44a697cc.js.map
