"use strict";(self.webpackChunkreact_homework_05_movies=self.webpackChunkreact_homework_05_movies||[]).push([[30],{30:function(e,r,t){t.r(r),t.d(r,{default:function(){return p}});var n=t(439),i=t(791),c=t(689),a=t(87),o=t(861),s=t(757),u=t.n(s),h=t(243);function d(){return(d=(0,o.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(r),"?api_key=4278d0f19129b6ab2e3afba6e510ceec",n=h.Z.get("".concat(t).concat("?api_key=4278d0f19129b6ab2e3afba6e510ceec")).then((function(e){if(200!==e.status)throw new Error(e);return e.data})).catch((function(e){console.error(e)})),e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var l=function(e){return d.apply(this,arguments)},f=t(184),p=function(){var e,r,t=(0,i.useState)({}),o=(0,n.Z)(t,2),s=o[0],u=o[1],h=(0,c.UO)().movieId,d=s.poster_path,p=s.overview,v=s.title,j=s.vote_average,m=s.genres,x=(0,c.TH)(),w=(0,i.useRef)(null!==(e=null===(r=x.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/");return(0,i.useEffect)((function(){l(h).then((function(e){return u(e)}))}),[h]),(0,f.jsxs)("div",{children:[(0,f.jsx)(a.rU,{to:w.current,children:"Go back"}),(0,f.jsx)("h2",{children:v}),(0,f.jsxs)("p",{children:["User score: ",j]}),d&&(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(d),alt:v,width:"400"}),(0,f.jsx)("h3",{children:"Overview"}),(0,f.jsx)("p",{children:p}),(0,f.jsx)("h3",{children:"Genres"}),m&&(0,f.jsx)("ul",{children:m.map((function(e){var r=e.name;return(0,f.jsx)("li",{children:r},r)}))}),(0,f.jsx)("h4",{children:"Additional information"}),(0,f.jsx)(a.rU,{to:"cast",children:"Cast"}),(0,f.jsx)(a.rU,{to:"reviews",children:"Rewiews"}),(0,f.jsx)(c.j3,{})]})}}}]);
//# sourceMappingURL=30.8e4a0cd7.chunk.js.map