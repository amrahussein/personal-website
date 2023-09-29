"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[635],{7635:function(e,r,a){a.d(r,{Z:function(){return G}});var t=a(5893),n=a(7294),s=a(9933),l=a(7486);function i(){var e=(0,n.useState)(!1),r=e[0],a=e[1],t=(0,n.useState)(0),s=t[0],i=t[1],c=(0,l.Z)((function(){var e=window.pageYOffset;a(s<e&&s-e<100||e<-10),i(e)}),70);return(0,n.useEffect)((function(){return window.addEventListener("scroll",c),function(){return window.removeEventListener("scroll",c)}}),[s,r,c]),{userScrollDown:r}}var c=a(3841);function o(){return(0,t.jsx)("div",{className:"flex h-screen items-center justify-center",children:(0,t.jsx)(c.Z,{color:"#00798F"})})}var d=a(1305);function x(){return(0,t.jsx)("div",{className:"sticky bottom-2 float-right mt-4 h-8 w-8 cursor-pointer rounded-full border-2 border-accent text-secondary dark:border-slate-400 dark:text-slate-300 sm:hidden ",children:(0,t.jsx)("a",{onClick:function(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})},children:(0,t.jsx)(d.Z,{})})})}var m=a(1664),u=a.n(m),p=a(1163),h=[{id:1,name:"Home",link:"/"},{id:2,name:"About",link:"/about"},{id:3,name:"Projects",link:"/projects"},{id:4,name:"Blog",link:"/blog"}];function f(){var e=(0,n.useContext)(s.E),r=(0,p.useRouter)().pathname,a=i().userScrollDown;return(0,t.jsx)(t.Fragment,{children:e&&(0,t.jsx)("section",{className:"tranistion fixed inset-x-0 bottom-0 z-10 block border-[0.13rem] border-t-accent bg-white duration-100 dark:border-t-slate-600 dark:border-l-primaryDark dark:border-r-primaryDark dark:border-b-primaryDark dark:bg-primaryDark ".concat(a&&"translate-y-full"," "),children:(0,t.jsx)("nav",{className:"py-2 font-mono text-xl font-extrabold text-secondary",children:(0,t.jsx)("div",{className:"flex flex-row justify-around space-x-3 px-3",children:h.map((function(e){return(0,t.jsx)(u(),{href:e.link,passHref:!0,children:(0,t.jsx)("a",{"aria-label":e.name,rel:"internal",className:"w-full rounded-full bg-accent py-[0.1rem] px-4 text-center text-[.84rem] hover:text-important dark:bg-slate-600 dark:text-slate-50 dark:hover:text-important ".concat(r===e.link&&"text-important dark:bg-zinc-800"),children:(0,t.jsx)("p",{children:e.name})})},e.key)}))})})})})}function b(e){var r=e.paneOpened,a=void 0!==r&&r;return(0,t.jsx)("h1",{className:"pb-1 text-3xl font-extrabold",children:(0,t.jsx)(u(),{href:"/",children:(0,t.jsxs)("a",{children:[(0,t.jsx)("strong",{className:"dark:text-slate-300",children:"amr"}),(0,t.jsx)("span",{className:" ".concat(a?"text-cool":"text-primary dark:text-important"),children:"akhussein"})]})})})}function k(e){var r=e.paneOpened,a=r?" bg-secondary dark:bg-primaryDark text-accent":"z-10 bg-white border-[0.13rem] dark:bg-slate-900 dark:border-l-primaryDark dark:border-r-primaryDark dark:border-t-primaryDark dark:border-b-slate-500 text-gray-600";return(0,t.jsx)("header",{className:"fixed inset-x-0 top-0 pt-3 pb-2 pl-2 ".concat(a),children:(0,t.jsx)(b,{paneOpened:r})})}var j=a(1644);function g(){return(0,t.jsx)("section",{className:"pl-2 text-sm",children:(0,t.jsxs)("article",{className:"",children:[(0,t.jsxs)("p",{children:["\xa9 2023 Amr A. Hussein - ",(0,t.jsx)("span",{className:"",children:"made with love"}),(0,t.jsx)("span",{className:"ml-1 inline-block h-4 w-4 pt-1 text-important",children:(0,t.jsx)(j.Z,{})})]}),(0,t.jsx)("p",{children:"| Full-Stack Developer"})]})})}var v=a(269),y=a(6128);function N(){return(0,t.jsxs)("div",{className:"menu-icon space-y-1",children:[(0,t.jsx)("span",{className:"line"}),(0,t.jsx)("span",{className:"line"}),(0,t.jsx)("span",{className:"line"})]})}var w=a(4346),D=a(3771),S=a(1262);function Z(){var e=(0,S.Z)(),r=e.themingMode,a=e.handleToggleDarkMode;return(0,t.jsx)("button",{onClick:a,children:"dark"===r?(0,t.jsx)(w.Z,{className:"h-6 w-6 hover:rotate-12"}):(0,t.jsx)(D.Z,{className:"h-6 w-6 hover:rotate-12"})})}function z(){var e=(0,p.useRouter)();return(0,t.jsx)("nav",{className:"flex flex-col items-center pt-[8rem] text-2xl text-accent",children:(0,t.jsx)("ul",{className:"space-y-10",children:h.map((function(r){return(0,t.jsx)("li",{className:"underline-offset-3 hover:underline ".concat(e.pathname===r.link&&"underline-offset-3 underline decoration-cool"),children:(0,t.jsx)(u(),{href:r.link,children:(0,t.jsx)("a",{"aria-label":r.name,children:r.name})})},r.id)}))})})}function L(){var e=(0,n.useState)(!1),r=e[0],a=e[1];return(0,n.useEffect)((function(){document.body.style.overflow=r?"hidden":"auto"}),[r]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"fixed top-0 right-0 z-100 h-full w-full bg-secondary duration-200 ease-out dark:bg-primaryDark ".concat(r?"translate-x-0":"translate-x-full"," "),children:[(0,t.jsx)(k,{paneOpened:!0}),(0,t.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,t.jsx)(z,{}),(0,t.jsx)("div",{className:"mr-14 mt-10 place-self-center text-primary text-gray-50 dark:text-slate-50",children:(0,t.jsx)(Z,{})})]}),(0,t.jsx)(y.Z,{color:"border-accent",mt:"10"}),(0,t.jsx)("section",{className:"flex justify-center",children:(0,t.jsx)(v.Z,{styleSocialItems:"flex space-x-8 pt-7",socialNames:!1,linkStyle:"w-8 h-8 rounded-lg hover:scale-110 p-1 bg-accent dark:bg-primaryDark"})}),(0,t.jsx)("section",{className:"absolute bottom-1 left-1 text-accent",children:(0,t.jsx)(g,{})})]}),r?(0,t.jsxs)("button",{className:"close fixed top-0 right-0 z-100 mr-4 mt-4 text-accent",onClick:function(){return a(!r)},"aria-label":"close navigational menu",children:[(0,t.jsx)("aside",{className:"underline-offset-3 inline align-top text-lg font-semibold underline hover:text-important",children:"Close"})," "]}):(0,t.jsx)("button",{onClick:function(){return a(!r)},className:"fixed top-0 right-0 z-10 mr-4 mt-[1.21rem]","aria-label":"open navigational menu",children:(0,t.jsx)(N,{})})]})}function C(){return(0,t.jsxs)("footer",{className:"fixed inset-x-0 bottom-0 flex items-center justify-between border-4 border-x-0 border-b-0 border-solid border-accent bg-white px-10 pb-6 pt-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200",children:[(0,t.jsx)(g,{}),(0,t.jsx)(v.Z,{socialNames:!1,styleSocialItems:"flex space-x-10",linkStyle:"w-6 h-6 rounded-full hover:scale-125 hover:rotate-[5deg]"})]})}function E(){return(0,t.jsx)("h1",{className:"pt-[0.18rem] pr-4 text-3xl font-extrabold dark:text-slate-50",children:(0,t.jsx)(u(),{href:"/",children:(0,t.jsxs)("a",{children:[(0,t.jsx)("strong",{children:"amr"}),(0,t.jsx)("span",{className:"text-primary dark:text-important",children:"akhussein"})]})})})}function I(){var e=(0,p.useRouter)().pathname;return(0,t.jsxs)("header",{className:"fixed inset-x-0 top-0 z-10 flex flex-row justify-between border-[0.13rem] border-b-accent bg-white pt-2 pb-1 pr-4 pl-2 text-gray-600 dark:border-t-primaryDark dark:border-l-primaryDark dark:border-r-primaryDark dark:border-b-slate-600 dark:bg-primaryDark sm:px-4 lg:px-8",children:[(0,t.jsx)(E,{}),(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)("nav",{children:(0,t.jsx)("div",{className:"flex flex-row space-x-5 lg:space-x-12",children:h.map((function(r){return(0,t.jsx)(u(),{href:r.link,passHref:!0,children:(0,t.jsx)("a",{"aria-label":r.name,children:(0,t.jsx)("p",{className:"px-5 py-2 text-2xl text-secondary hover:cursor-pointer hover:rounded-lg hover:bg-accent dark:text-slate-100 dark:hover:bg-primary ".concat(e===r.link&&"rounded-lg bg-accent text-important dark:bg-primary dark:text-slate-100"),children:r.name})})},r.key)}))})}),(0,t.jsx)("span",{className:"ml-12 h-full border-l-2 border-primary opacity-25 dark:border-slate-400"}),(0,t.jsx)("div",{className:"ml-6 text-primary dark:text-slate-50",children:(0,t.jsx)(Z,{})})]})]})}function F(){return(0,t.jsx)("footer",{className:"absolute bottom-1 left-1 text-gray-600 dark:text-slate-300",children:(0,t.jsx)(g,{})})}function G(e){var r=e.children,a=(0,n.useContext)(s.E),l=(0,n.useState)(!0),c=l[0],d=l[1];(0,n.useEffect)((function(){null!==a&&d(!1)}),[a]);var m=i().userScrollDown;return c?(0,t.jsx)(o,{}):(0,t.jsx)("div",{className:"relative mx-2 mt-[1.5rem] break-words px-2 py-[5rem] text-gray-600 selection:bg-primary selection:text-accent dark:text-slate-400 sm:mx-4 lg:grid lg:place-items-center",children:a?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(k,{}),(0,t.jsx)(L,{}),(0,t.jsx)(f,{}),r,m&&(0,t.jsx)(x,{}),(0,t.jsx)(F,{})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(I,{}),(0,t.jsx)("div",{className:"mb-8 rounded-3xl px-10 pt-8 dark:border-2 dark:border-slate-900 dark:bg-slate-900 sm:max-w-4xl",children:r}),(0,t.jsx)(C,{})]})})}},269:function(e,r,a){a.d(r,{Z:function(){return i}});var t=a(5893),n=a(1664),s=a.n(n),l=a(1603);function i(e){var r=e.styleSocialItems,a=e.linkStyle,n=e.socialNames,i=void 0===n||n;return(0,t.jsx)("section",{className:"".concat(r||"mt-10 grid grid-cols-2 gap-7"),children:l.U.map((function(e){return(0,t.jsx)(s(),{href:e.link,children:(0,t.jsx)("a",{rel:"noopener noreferrer",target:"_blank",className:"2xl pt-1 text-center font-semibold tracking-wider text-primary opacity-75 dark:text-slate-50","aria-label":e.ariaLabel,children:(0,t.jsxs)("div",{className:"".concat(a||"flex h-24 w-24 flex-col space-y-4 rounded-3xl p-2 hover:scale-110 hover:bg-accent dark:hover:bg-primary sm:h-32 sm:w-32"),children:[e.icon,i&&(0,t.jsx)("p",{className:"text-sm text-secondary opacity-100 hover:opacity-100 dark:text-slate-50",children:e.name})]})})},e.name)}))})}},6128:function(e,r,a){a.d(r,{Z:function(){return n}});var t=a(5893);function n(e){var r=e.color,a=void 0===r?"border-secondary dark:border-slate-100":r,n=e.mt,s=void 0===n?"10":n;return(0,t.jsx)("hr",{className:"mx-5 border opacity-30 ".concat(a," mt-").concat(s)})}},1603:function(e,r,a){a.d(r,{U:function(){return l}});var t=a(5893),n=a(1417),s=a(2814),l=[{id:1,name:"Twitter",link:"https://twitter.com/amrakhussein",icon:(0,t.jsx)(s.G,{size:"2x",icon:n.mdU}),ariaLabel:"Link to Twitter profile page"},{id:2,name:"Instagram",link:"https://instagram.com/amrakhussein",icon:(0,t.jsx)(s.G,{size:"2x",icon:n.Zzi}),ariaLabel:"Link to Instagram profile page"},{id:3,name:"LinkedIn",link:"https://linkedin.com/in/amrakhussein",icon:(0,t.jsx)(s.G,{size:"2x",icon:n.D9H}),ariaLabel:"Link to LinkedIn profile page"},{id:4,name:"Github",link:"https://github.com/amrakhussein",icon:(0,t.jsx)(s.G,{size:"2x",icon:n.zhw}),ariaLabel:"Link to Github profile page"}]}}]);