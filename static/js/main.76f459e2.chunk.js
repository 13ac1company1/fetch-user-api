(this["webpackJsonpfetch-user-api"]=this["webpackJsonpfetch-user-api"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var s=n(1),r=n.n(s),a=n(4),c=n.n(a),i=(n(14),n(3)),o=n.n(i),u=n(5),l=n(6),h=n(7),p=n(9),d=n(8),j=(n(16),n(0)),f=function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={loading:!0,person:null},t}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=Object(u.a)(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.randomuser.me/",t.next=3,fetch("https://api.randomuser.me/");case 3:return e=t.sent,t.next=6,e.json();case 6:n=t.sent,console.log(n),this.setState({person:n.results[0],loading:!1});case 9:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(j.jsx)("div",{className:"App",children:this.state.loading||!this.state.person?Object(j.jsx)("div",{children:"loading..."}):Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:this.state.person.name.title}),Object(j.jsx)("div",{children:this.state.person.name.first}),Object(j.jsx)("div",{children:this.state.person.name.last}),Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:this.state.person.picture.large,alt:""})})]})})}}]),n}(s.Component),b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,s=e.getFID,r=e.getFCP,a=e.getLCP,c=e.getTTFB;n(t),s(t),r(t),a(t),c(t)}))};c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),b()}},[[18,1,2]]]);
//# sourceMappingURL=main.76f459e2.chunk.js.map