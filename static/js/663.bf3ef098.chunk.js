"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[663],{663:function(e,r,t){t.r(r),t.d(r,{default:function(){return m}});var n=t(861),i=t(439),s=t(757),c=t.n(s),a=t(791),o=t(689),u=t(87),l=t(340),p=t(684),h=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"?api_key=").concat(p.$));case 3:return t=e.sent,e.abrupt("return",t);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error fetching movies:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),v=t(826),d=t(184),f=function(){var e=(0,o.UO)().movieId,r=(0,a.useState)([]),t=(0,i.Z)(r,2),s=t[0],l=t[1],p=(0,a.useState)(!1),f=(0,i.Z)(p,2),m=f[0],x=f[1];return(0,a.useEffect)((function(){var r=function(){var r=(0,n.Z)(c().mark((function r(){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,h(e);case 3:t=r.sent,l(t.data),console.log("Movie:",t),r.next=12;break;case 8:r.prev=8,r.t0=r.catch(0),console.error("Error fetching movie details:",r.t0),x(!0);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}();r()}),[e]),s?m?(0,d.jsx)(v.u,{}):(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:s.title||s.name}),(0,d.jsx)("img",{src:s.poster_path?"https://image.tmdb.org/t/p/w500/".concat(s.poster_path):"<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>",width:250,alt:"film poster"}),(0,d.jsxs)("p",{children:["User Score: ",s.vote_average]}),(0,d.jsx)("h3",{children:"Overview"}),(0,d.jsx)("p",{children:s.overview}),(0,d.jsx)("h3",{children:"Genres"}),(0,d.jsx)("p",{children:s.genres&&s.genres.map((function(e){return e.name})).join(", ")}),(0,d.jsx)("h3",{children:"Additional Details"}),(0,d.jsxs)("nav",{children:[(0,d.jsx)(u.OL,{to:"cast",children:"Cast"}),(0,d.jsx)(u.OL,{to:"reviews",children:"Reviews"})]})]}):(0,d.jsx)("div",{children:"Loading page..."})},m=function(e){var r=e.movieDetails,t=(0,o.UO)().movieId;return(0,d.jsx)("main",{children:(0,d.jsx)(f,{movieId:t,movieDetails:r})})}},684:function(e,r,t){t.d(r,{$:function(){return n}});var n="3e82467d5ce14883b35275ee23bc002f"}}]);
//# sourceMappingURL=663.bf3ef098.chunk.js.map