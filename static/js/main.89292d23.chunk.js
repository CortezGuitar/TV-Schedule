(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{44:function(e,t,a){e.exports=a(96)},49:function(e,t,a){},69:function(e,t,a){},89:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(38),l=a.n(r),i=a(21),o=a(9),s=(a(49),a(14)),m=a(15),u=a(17),h=a(16),d=a(18),p=a(39),v=a.n(p),f=(a(69),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={date:new Date},a.onChange=function(e){return a.setState({date:e})},a.onClickDayHandler=function(e){var t=e.getTime(),n=new Date(t+108e5).toISOString().substring(0,10);a.props.history.push("/tv-show/".concat(n))},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"HomePage-main"},c.a.createElement("img",{src:"https://abeon-hosting.com/images/old-tv-cliparts-19.jpg",alt:"tv show",className:"HomePage-main-img"}),c.a.createElement("p",{className:"HomePage-main-text"},"For a list of TV shows, please select the desired month and day.")),c.a.createElement("div",null,c.a.createElement(v.a,{onChange:this.onChange,value:this.state.date,locale:"en",onClickDay:this.onClickDayHandler,calendarType:"ISO 8601",minDetail:"year",navigationLabel:function(e){var t=e.date;return"".concat(t.toLocaleDateString("en-GB",{month:"long"}))},nextLabel:c.a.createElement("i",{className:"fas fa-chevron-right"}),prevLabel:c.a.createElement("i",{className:"fas fa-chevron-left"})})))}}]),t}(n.Component)),g=a(40),E=a.n(g),b=a(43),w=(a(89),function(e){var t=e.title,a=e.premiered,r=e.image,l=e.season,i=e.episode,o=Object(n.useState)(!1),s=Object(b.a)(o,2),m=s[0],u=s[1];return c.a.createElement("div",{className:"TvshowItem-container"},m?c.a.createElement("img",{className:"TvshowItem-image__original",src:r.original,alt:t,onClick:function(){return u(!m)}}):c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"TvshowItem-image-container"},r&&c.a.createElement("img",{className:"TvshowItem-image",src:r.medium,alt:t,onClick:function(){return u(!m)}})),c.a.createElement("div",{className:"TvshowItem-info-container"},c.a.createElement("div",null,c.a.createElement("h5",null,t),c.a.createElement("h6",null,a.slice(0,4))),c.a.createElement("div",{className:"TvshowItem-info-season"},c.a.createElement("p",null,"Season: ",l," Episode: ",i)))))}),y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={data:[],start:0,limit:10},a.displayDate=function(){var e=a.props.match.params.date;return new Date(e).toLocaleDateString("en-GB",{month:"long",year:"numeric",day:"numeric"})},a.renderItems=function(e,t,a){return e.slice(t,a).map(function(e){return c.a.createElement(w,{key:e.id,title:e.show.name,premiered:e.show.premiered,image:e.show.image,season:e.season,episode:e.number})})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.date;E.a.get("https://api.tvmaze.com/schedule?country=US&date=".concat(t)).then(function(t){return e.setState({data:t.data})})}},{key:"render",value:function(){var e=this;if(this.state.data){var t=this.state,a=t.data,n=t.start,r=t.limit;return c.a.createElement("div",null,c.a.createElement("h5",{style:{padding:"0.5rem",textAlign:"center",margin:"0"}},this.displayDate()),a&&this.renderItems(a,n,r),c.a.createElement("div",{className:"p-2"},r<a.length?c.a.createElement("button",{type:"button",className:"btn btn-block btn-outline-secondary",onClick:function(){e.setState({limit:e.state.limit+10})}},"Show More ",c.a.createElement("i",{className:"fas fa-chevron-down"})):c.a.createElement("button",{type:"button",className:"btn btn-block btn-outline-secondary",onClick:function(){e.setState({limit:10}),window.scrollTo(0,0)}},"Back to Top ",c.a.createElement("i",{className:"fas fa-chevron-up"}))))}}}]),t}(n.Component),N=Object(o.e)(function(e){var t=e.history,a=e.location;return c.a.createElement("div",null,c.a.createElement("div",{className:"App-header"},"/"!==a.pathname?c.a.createElement("span",{className:"App-header__icon"},c.a.createElement("i",{className:"fas fa-chevron-left",onClick:function(){return t.push("/")}})):"","SUPER FILM"),c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/",component:f,exact:!0}),c.a.createElement(o.a,{path:"/tv-show/:date",component:y})))});l.a.render(c.a.createElement(i.a,null,c.a.createElement(N,null)),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.89292d23.chunk.js.map