"use strict";(self.webpackChunkreact_homework_05_movies=self.webpackChunkreact_homework_05_movies||[]).push([[344],{344:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var r=t(439),c=t(791),a=t(689),u=t(861),i=t(757),o=t.n(i),s=t(243);function f(){return(f=(0,u.Z)(o().mark((function e(n){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(n,"/reviews"),"?api_key=4278d0f19129b6ab2e3afba6e510ceec",e.next=4,s.Z.get("".concat(t).concat("?api_key=4278d0f19129b6ab2e3afba6e510ceec")).then((function(e){if(200!==e.status)throw new Error(e);return e.data})).catch((function(e){console.error(e)}));case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=function(e){return f.apply(this,arguments)},p=t(184),d=function(){var e=(0,c.useState)([]),n=(0,r.Z)(e,2),t=n[0],u=n[1],i=(0,a.UO)().movieId;return(0,c.useEffect)((function(){h(i).then((function(e){return u(e.results)}))}),[i]),(0,p.jsxs)("div",{children:[(0,p.jsx)("h4",{children:"Reviews info"}),(0,p.jsx)("ul",{children:t.map((function(e){var n=e.author,t=e.content;return(0,p.jsxs)("li",{children:[(0,p.jsxs)("p",{children:["Author: ",n,"."]}),(0,p.jsx)("p",{children:t})]})}))})]})}}}]);
//# sourceMappingURL=344.7b96c6e8.chunk.js.map