"use strict";(self.webpackChunkreact_homework_05_movies=self.webpackChunkreact_homework_05_movies||[]).push([[430],{430:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(439),c=n(791),a=n(689),i=n(861),o=n(757),s=n.n(o),u=n(243);function f(){return(f=(0,i.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(t,"/credits"),"?api_key=4278d0f19129b6ab2e3afba6e510ceec",e.next=4,u.Z.get("".concat(n).concat("?api_key=4278d0f19129b6ab2e3afba6e510ceec")).then((function(e){if(200!==e.status)throw new Error(e);return e.data})).catch((function(e){console.error(e)}));case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=function(e){return f.apply(this,arguments)},p=n(184),d=function(){var e=(0,c.useState)([]),t=(0,r.Z)(e,2),n=t[0],i=t[1],o=(0,a.UO)().movieId;return(0,c.useEffect)((function(){h(o).then((function(e){return i(e.cast)}))}),[o]),(0,p.jsxs)("div",{children:[(0,p.jsx)("h5",{children:"cast info"}),n.map((function(e){var t=e.profile_path,n=e.name,r=e.id;return(0,p.jsxs)("li",{children:[t&&(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(t),alt:n}),(0,p.jsx)("p",{children:n})]},r)}))]})}}}]);
//# sourceMappingURL=430.532d25bf.chunk.js.map