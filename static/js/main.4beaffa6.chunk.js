(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{43:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(2),r=s(13),i=s.n(r),c=s(4),o=s.n(c),m=s(14),l=s(15),d=s(16),j=s(19),u=s(18),v=s(17),p=s.n(v);s(43);var b=function(e){e.id;var t=e.year,s=e.title,n=e.summary,r=e.poster,i=e.genres;return Object(a.jsxs)("div",{className:"movie",children:[Object(a.jsx)("h3",{className:"movie_title",children:s}),Object(a.jsx)("h5",{className:"movie_year",children:t}),Object(a.jsx)("img",{src:r,alt:s,title:s}),Object(a.jsx)("p",{className:"movie_summary",children:n.slice(.14)}),Object(a.jsxs)("ul",{className:"genres",children:[" ",i.map((function(e,t){return Object(a.jsxs)("il",{className:"genre",children:["\u2022",e,Object(a.jsx)("br",{})]},t)}))," "]})]})},h=(s(44),function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(l.a)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(o.a.mark((function t(){var s,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(a.jsx)("section",{className:"container",children:t?Object(a.jsx)("div",{className:"loader",children:Object(a.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(a.jsx)("div",{className:"movies",children:s.map((function(e){return Object(a.jsx)(b,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(n.Component));i.a.render(Object(a.jsx)(h,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.4beaffa6.chunk.js.map