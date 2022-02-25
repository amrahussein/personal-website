(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{2316:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(4247)}])},2558:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(5893),s=n(7294);function c(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("section",{className:"text-sm",children:(0,r.jsx)("article",{className:"",children:"\xa9 2022 Amr Abdelkamel | web developer"})})})}var a=n(5021),i=n(1655),l=n(1664);function o(e){var t=e.dark,n=void 0!==t&&t,s=n?" bg-secondary pt-3 pb-2 pl-2 top-0 inset-x-0 fixed text-accent":"z-10 bg-white pt-3 pb-2 pl-2 top-0 inset-x-0 fixed border-[0.13rem] border-b-accent text-gray-600";return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("header",{className:s,children:(0,r.jsx)("h1",{className:"text-3xl pb-1 font-extrabold",children:(0,r.jsx)(l.default,{href:"/",children:(0,r.jsxs)("a",{children:[(0,r.jsx)("strong",{className:"",children:"amromoorie"}),(0,r.jsx)("span",{className:" ".concat(n?"text-cool":"text-primary"),children:".com"})]})})})})})}function x(){return(0,r.jsxs)("div",{className:"menu-icon space-y-1",children:[(0,r.jsx)("span",{className:"line"}),(0,r.jsx)("span",{className:"line"}),(0,r.jsx)("span",{className:"line"})]})}var d=n(1163),m=[{key:1,name:"Home",link:"/"},{key:2,name:"About",link:"/about"},{key:3,name:"Projects",link:"/projects"},{key:4,name:"Blog",link:"/blog"}];function u(){var e=(0,d.useRouter)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("nav",{className:"pt-[10rem] text-accent flex flex-col items-center text-2xl",children:(0,r.jsx)("ul",{className:"space-y-10",children:m.map((function(t){return(0,r.jsx)("li",{className:"hover:underline underline-offset-3 ".concat(e.pathname===t.link?"underline underline-offset-3 decoration-cool ":""),children:(0,r.jsx)(l.default,{href:t.link,children:(0,r.jsx)("a",{children:t.name})})},t.key)}))})})})}function h(){var e=(0,s.useState)(!1),t=e[0],n=e[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"z-100 top-0 right-0 fixed bg-secondary w-full h-full ease-out duration-200 ".concat(t?"translate-x-0":"translate-x-full"," "),children:[(0,r.jsx)(o,{dark:!0}),(0,r.jsx)(u,{}),(0,r.jsx)(i.Z,{color:"border-accent",mt:"10"}),(0,r.jsx)("section",{className:"flex justify-center",children:(0,r.jsx)(a.Z,{styleSocialItems:"flex space-x-8 pt-7",socialNames:!1,linkStyle:"w-8 h-8 rounded-lg hover:scale-110 p-1 bg-accent"})}),(0,r.jsx)("section",{className:"absolute bottom-1 left-1 text-accent",children:(0,r.jsx)(c,{})})]}),t?(0,r.jsxs)("button",{className:"z-100 close text-accent fixed top-0 right-0 mr-4 mt-4",onClick:function(){return n(!t)},children:[(0,r.jsx)("aside",{className:"font-semibold inline align-top text-lg underline underline-offset-3 hover:text-important",children:"Close"})," "]}):(0,r.jsx)("button",{onClick:function(){return n(!t)},className:"fixed z-10 top-0 right-0 mr-4 mt-4",children:(0,r.jsx)(x,{})})]})}var f=n(1914),j=n(6486);function p(){var e=(0,s.useContext)(f.I),t=(0,d.useRouter)().pathname,n=(0,s.useState)(0),c=n[0],a=n[1],i=(0,s.useState)(!1),o=i[0],x=i[1],u=(0,j.debounce)((function(){var e=window.pageYOffset;x(c<e&&c-e<100||e<-10),a(e)}),70);return(0,s.useEffect)((function(){return window.addEventListener("scroll",u),function(){return window.removeEventListener("scroll",u)}}),[c,o,u]),(0,r.jsx)(r.Fragment,{children:e&&(0,r.jsx)("section",{className:"z-10 border-[0.13rem] border-t-accent bg-white block fixed inset-x-0 bottom-0 tranistion duration-100 ".concat(o?"translate-y-full":""," "),children:(0,r.jsx)("nav",{className:" py-2 text-primary font-extrabold text-xl ",children:(0,r.jsx)("ul",{className:"px-3 flex justify-around flex-row space-x-5",children:m.map((function(e,n){return(0,r.jsx)("li",{className:"py-2 w-full bg-accent rounded-full inline-block text-center ".concat(t===e.link?"text-important":""),children:(0,r.jsx)(l.default,{href:e.link,children:(0,r.jsx)("a",{className:"block text-xs hover:text-important",children:e.name})})},e.key)}))})})})})}function b(){var e=(0,d.useRouter)().pathname;return(0,r.jsx)("nav",{className:" text-important text-2xl",children:(0,r.jsx)("ul",{className:" flex flex-row space-x-5 lg:space-x-12",children:m.map((function(t){return(0,r.jsx)("li",{className:"hover:cursor-pointer px-5 py-2 hover:bg-accent hover:rounded-lg ".concat(e===t.link?"bg-accent rounded-lg ":""),children:(0,r.jsx)(l.default,{href:t.link,children:(0,r.jsx)("a",{children:t.name})})},t.key)}))})})}function g(e){var t=e.dark,n=void 0!==t&&t,s="flex flex-row justify-between pt-2 pb-1 pr-4 pl-2 top-0 inset-x-0 fixed  sm:px-4 ... lg:px-8 ".concat(n?"bg-secondary text-accent":"z-10 bg-white border-[0.13rem] border-b-accent text-gray-600");return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("header",{className:s,children:[(0,r.jsx)("h1",{className:"text-3xl font-extrabold pt-[0.18rem]",children:(0,r.jsx)(l.default,{href:"/",children:(0,r.jsxs)("a",{children:[(0,r.jsx)("strong",{className:"",children:"amromoorie"}),(0,r.jsx)("span",{className:" ".concat(n?"text-cool":"text-primary"),children:".com"})]})})}),(0,r.jsx)(b,{})]})})}function v(){return(0,r.jsxs)("footer",{className:"mt-44 px-10 py-10 flex justify-between items-center absolute bottom-1 inset-x-0 border-solid border-x-0 border-4 border-b-0 border-accent-700",children:[(0,r.jsx)(c,{}),(0,r.jsx)(a.Z,{socialNames:!1,styleSocialItems:"flex justify-center items-center space-x-10 mr-10",linkStyle:" w-6 h-6 rounded-full hover:scale-125 hover:text-important hover:rotate-[5deg]"})]})}function N(){return(0,r.jsx)("footer",{className:"absolute bottom-1 left-1 text-gray-600",children:(0,r.jsx)(c,{})})}function y(e){var t=e.children,n=(0,s.useContext)(f.I);return(0,r.jsx)("div",{className:"sm:mx-4 lg:mx-8 mx-2 relative mt-[1.5rem] py-[5rem] break-words text-gray-600",children:n?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o,{}),(0,r.jsx)(h,{}),(0,r.jsx)(p,{}),t,(0,r.jsx)(N,{})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"flex justify-center items-center",children:[(0,r.jsx)("div",{children:(0,r.jsx)(g,{})}),(0,r.jsx)("div",{children:t})]}),(0,r.jsx)(v,{})]})})}},5021:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(5893),s=n(1664),c=n(2814),a=n(1417),i=[{name:"Twitter",link:"https://twitter.com/amromoorie",icon:(0,r.jsx)(c.G,{color:"#00798F",size:"2x",icon:a.mdU})},{name:"Instagram",link:"https://instagram.com/amromoorie",icon:(0,r.jsx)(c.G,{color:"#00798F",size:"2x",icon:a.Zzi})},{name:"LinkedIn",link:"https://linkedin.com/in/amromoorie",icon:(0,r.jsx)(c.G,{color:"#00798F",size:"2x",icon:a.D9H})},{name:"Github",link:"https://github.com/amromoorie",icon:(0,r.jsx)(c.G,{color:"#00798F",size:"2x",icon:a.zhw})}];function l(e){var t=e.styleSocialItems,n=e.linkStyle,c=e.socialNames,a=void 0===c||c;return(0,r.jsx)("section",{className:"".concat(t||"mt-10 grid grid-cols-2 gap-7 -z-1d0"),children:i.map((function(e){return(0,r.jsx)(s.default,{href:e.link,children:(0,r.jsx)("a",{rel:"noopener noreferrer",target:"_blank",className:"2xl pt-1 text-center font-semibold opacity-75 tracking-wider text-important",children:(0,r.jsxs)("div",{className:"".concat(n||"flex flex-col p-2 w-24 h-24 space-y-4 rounded-3xl hover:scale-110 hover:bg-accent"),children:[e.icon,a&&(0,r.jsx)("p",{className:"text-sm",children:e.name})]})})},e.name)}))})}},1655:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(5893);function s(e){var t=e.color,n=void 0===t?"border-secondary":t,s=e.mt,c=void 0===s?"10":s;return(0,r.jsx)("hr",{className:"border mx-5 opacity-30 ".concat(n," mt-").concat(c)})}},313:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893),s=n(1664);function c(e){var t=e.children,n=e.href,c=e.rel,a=void 0===c?{}:c,i=e.styles;return(0,r.jsx)("span",{className:"hover:underline text-important underline hover:text-cool ".concat(i||""),children:(0,r.jsx)(s.default,{href:n,rel:a,children:(0,r.jsx)("a",{children:t})})})}},4247:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n(5893),s=n(9008),c=n(1664),a=n(1163),i=n(2558),l=n(313);function o(){var e="https://amromoorie.com"+(0,a.useRouter)().pathname;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.default,{children:[(0,r.jsx)("title",{children:"Blog| main page"}),(0,r.jsx)("link",{rel:"canonical",href:e}),(0,r.jsx)("meta",{property:"og:description",content:"Sharing my inspiration in my blog. Hope you find it interesting!"},"description")]}),(0,r.jsxs)(i.Z,{children:[(0,r.jsx)("h2",{className:"text-3xl text-important mx-11 my-11",children:"very soon"}),(0,r.jsx)(l.Z,{href:"/",styles:"ml-5 text-3xl underline",children:"take me home"}),(0,r.jsx)("section",{children:(0,r.jsx)("article",{children:(0,r.jsx)(c.default,{href:"/blog/fake-article",children:(0,r.jsx)("a",{children:"go to article"})})})})]})]})}}},function(e){e.O(0,[662,112,956,774,888,179],(function(){return t=2316,e(e.s=t);var t}));var t=e.O();_N_E=t}]);