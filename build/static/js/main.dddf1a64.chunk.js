(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a.p+"static/media/about1.eb3661e3.jpeg"},33:function(e,t,a){e.exports=a.p+"static/media/about2.826b63e0.jpeg"},34:function(e,t,a){e.exports=a.p+"static/media/about3.72a83374.jpeg"},35:function(e,t,a){e.exports=a.p+"static/media/about4.197bd5aa.jpeg"},42:function(e,t,a){e.exports=a(90)},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(30),c=a.n(l),o=(a(47),a(3)),i=a(4),s=a(6),m=a(5),u=a(7),p=a(8),d=a(13),h=(a(48),a(49),function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"section__intro"},r.a.createElement("h3",null,"Welcome To Our Studio!"),r.a.createElement("h1",null,"It's nice to meet you"),r.a.createElement("a",{href:"#about"},r.a.createElement("span",null,"Tell us more"))))}),f=a(31);a.n(f).a.config(),console.log("production");var E={baseURL:"http://avikchoudhury.com"},b=function(e){return r.a.createElement(n.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",{className:"slider"},r.a.createElement("figure",null,[1,2,3,4,5].map(function(e,t){return r.a.createElement("img",{key:t,src:"".concat(E.baseURL,"/images/slider/slider").concat(e,".jpg"),className:"section__sec1",alt:"img".concat(t,".jpg")})}))),r.a.createElement(h,null)))},v=(a(52),a(32)),g=a.n(v),y=a(33),O=a.n(y),w=a(34),j=a.n(w),N=a(35),k=a.n(N),C=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"container about"},r.a.createElement("header",{className:"header_about"},r.a.createElement("h1",null,"About"),r.a.createElement("p",null,"A creative agency based on Candy Land, ready to boost your business with some beautifull templates. Lattes        Agency is one of the best in town see more you will be amazed.")),r.a.createElement("div",{className:"about_content"},r.a.createElement("div",{className:"about_col"},r.a.createElement("img",{src:g.a,alt:"img1"}),r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,"photography"))),r.a.createElement("div",{className:"about_col"},r.a.createElement("img",{src:O.a,alt:"img2"}),r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,"Web Development"))),r.a.createElement("div",{className:"about_col"},r.a.createElement("img",{src:j.a,alt:"img3"}),r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,"ui/ux design"))),r.a.createElement("div",{className:"about_col"},r.a.createElement("img",{src:k.a,alt:"img4"}),r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,"Visualization"))))))},_=(a(53),a(54),function(e){return r.a.createElement("header",{className:"port_header"},r.a.createElement("h1",null,e.header),r.a.createElement("div",null,r.a.createElement("p",null,e.description)))}),S=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"container portfolio"},r.a.createElement(_,{header:"portfolio",description:"Our portfolio is the best way to show our work, you can see here a big range of our work. Check them all and you will find what you are looking for."}),r.a.createElement("div",{className:"row"},["Portrait","Landscape","B&w"].map(function(e,t){return r.a.createElement("div",{className:"col",key:e},r.a.createElement(p.b,{to:"/gallery/"+(t+1)},r.a.createElement("img",{src:E.baseURL+"/images/card/port"+(t+1)+".jpg",alt:"port1.jpeg"}),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"con2"},e))))}))))},x=(a(63),a(19)),L=a.n(x),T=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={onTop:!0},a.handleScroll=function(e){0===window.scrollY?a.setState({onTop:!0}):a.setState({onTop:!1})},a.scrolldownTo=function(e){L()("html, body").animate({scrollTop:L()("."+e).offset().top},800)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this,t=["nav__section"];return this.state.onTop?t=["nav__section"]:t.push("black"),r.a.createElement("header",null,r.a.createElement("nav",null,r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:"nav__container"},r.a.createElement("div",{className:"logo-img"},r.a.createElement("img",{src:"".concat(E.baseURL,"/images/white.png"),alt:"logo"})),r.a.createElement("ul",{className:"nav__list"},r.a.createElement("li",{className:"nav_list__item scroll",onClick:function(){return e.scrolldownTo("about")}},"ABOUT"),r.a.createElement("li",{className:"nav_list__item scroll",onClick:function(){return e.scrolldownTo("portfolio")}},"PORTFOLIO"),r.a.createElement("li",{className:"nav_list__item scroll",onClick:function(){return e.scrolldownTo("contect")}},"CONTACT"))))))}}]),t}(n.Component),A=function(e){return r.a.createElement("div",null,r.a.createElement(T,null),e.children)},D=function(e){return r.a.createElement(A,null,r.a.createElement(b,null),r.a.createElement(C,null),r.a.createElement(S,null))},P=a(15),U=a(38),R=a(20),I=(a(64),a(39)),F=a.n(I).a.create({baseURL:E.baseURL+"/api"}),W=function(e){var t=Object(n.useState)({username:"",password:""}),a=Object(R.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(!1),i=Object(R.a)(o,2),s=i[0],m=i[1],u=function(e){c(Object(U.a)({},l,Object(P.a)({},e.target.name,e.target.value)))};return s?r.a.createElement(d.a,{to:"/dashboard"}):r.a.createElement("div",{className:"form-container"},r.a.createElement("div",{className:"login-form"},r.a.createElement("h2",{className:"header"},"Welcome!"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),F.post("/auth/login",l).then(function(e){e.data.status&&m(!0)})}},r.a.createElement("input",{type:"text",className:"formControl",name:"username",autoComplete:"false",value:l.username,placeholder:"username",onChange:u}),r.a.createElement("input",{type:"password",className:"formControl",value:l.password,autoComplete:"false",name:"password",placeholder:"password",onChange:u}),r.a.createElement("button",null,"Login"))))},B=function(e){return r.a.createElement(W,null)},z=(a(83),a(84),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={sidebarOpen:!1},a.openSidebar=function(){a.setState({sidebarOpen:!a.state.sidebarOpen}),a.props.open()},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.sidebarOpen;return r.a.createElement("div",null,r.a.createElement("div",{id:"mySidebar",className:"sidebar",style:{width:e?"250px":"50px"}},r.a.createElement("div",{className:"closebtn",onClick:this.openSidebar},e?r.a.createElement("section",{style:{right:"20px"}},"x"):r.a.createElement("section",null,r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))),e?r.a.createElement("div",null,r.a.createElement(p.b,{to:"/admin/dashboard/upload"},"Dashboard"),r.a.createElement(p.b,{to:"/"},"Home"),r.a.createElement(p.b,{to:"/admin/dashboard/preview"},"Preview")):null))}}]),t}(n.Component)),H=function(e){return r.a.createElement("h1",null,"Preview")},J=(a(85),function(e){return r.a.createElement("div",{className:"header2"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,e.title)))}),M=(a(86),a(41)),V=[{id:"",name:"none"},{id:"landscape",name:"Landscape"},{id:"scenery",name:"Scenery"},{id:"portrait",name:"Portrait"}],Y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={files:[],category:"",error:!1},a.onDrop=function(e){var t=a.state.files,n=a.props.limit;e.forEach(function(e,a){n&&(e.isNew=!0),e.filename=(new Date).getTime()+String(a)+"."+e.name.split(".").pop(),t.push(e)}),a.setState({files:t}),a.props.fileChange(t)},a.handleChange=function(e){a.setState({category:e.target.value,error:!1})},a.uploadPhotos=function(){var e=a.state,t=e.files,n=e.category;if(t.length||n){var r=t.map(function(e){return new Promise(function(t,a){var r=new FormData;r.append("image",e),r.append("category",n),F.post("/image",r).then(function(e){t(e)})})});Promise.all(r).then(function(e){console.log(e),a.setState({files:[],category:"",error:!1})})}a.setState({error:!0})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(){this.state.files.length!==this.props.files.length&&this.setState({files:this.props.files})}},{key:"render",value:function(){var e=this,t=this.state,a=t.category,n=["form-control"];return t.error&&n.push("borred"),r.a.createElement("section",{className:"m70"},r.a.createElement(M.a,{onDrop:this.onDrop,className:"Dropzone"},function(e){e.getRootProps,e.getInputProps;return r.a.createElement("section",{className:"container"},r.a.createElement("div",null,r.a.createElement("p",null,"Drag 'n' drop some files here, or click to select files")))}),r.a.createElement("div",{className:"m30"},r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{className:n.join(" "),value:a,onChange:function(t){return e.handleChange(t)}},V.map(function(e){return r.a.createElement("option",{value:e.id,key:e.id},e.name)}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{onClick:this.uploadPhotos,type:"button",className:"pull-right btn btn-success"},"Submit"))))}}]),t}(n.Component),$=(a(87),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={files:[]},a.remove=function(e){var t=a.state.files;t.splice(e,1),a.setState({files:t})},a.fileChange=function(e){a.setState({files:e})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"getImagePreviewer",value:function(){var e=this,t=this.state.files;if(t&&t.length)return r.a.createElement("div",null,t.map(function(t,a){return r.a.createElement("div",{className:"image-container",key:a},r.a.createElement("span",{className:"cross-img",onClick:function(){return e.remove(a)}},"x"),r.a.createElement("img",{className:"img",src:t.preview,alt:a+".jpg"}))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(Y,{fileChange:this.fileChange,files:this.state.files,limit:6}),this.getImagePreviewer())}}]),t}(n.Component)),q=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={sideberOpen:!1},a.openSidebar=function(){return a.setState({sideberOpen:!a.state.sideberOpen})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.sideberOpen;return r.a.createElement(p.a,null,r.a.createElement(z,{open:this.openSidebar}),r.a.createElement(J,{title:"Admin"}),r.a.createElement(d.d,null,r.a.createElement("div",{className:"admin-dashboard",style:{marginLeft:e?"250px":"0px"}},r.a.createElement(d.b,{exact:!0,path:"/admin/dashboard/upload",component:$}),r.a.createElement(d.b,{exact:!0,path:"/admin/dashboard/preview",component:H}))))}}]),t}(n.Component),G=(a(88),a(89),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"galleryHeader"},r.a.createElement("div",{className:"logo-img"},r.a.createElement(p.b,{to:"/"},r.a.createElement("img",{src:"".concat(E.baseURL,"/images/white.png"),alt:"logo"}))))}}]),t}(r.a.Component)),K=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={images:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;F.get("/image/".concat(t)).then(function(t){e.setState({images:t.data})})}},{key:"render",value:function(){var e=this.state.images;return r.a.createElement("div",null,r.a.createElement(G,null),e.length?r.a.createElement("div",{className:"images-container"},e.map(function(e,t){return r.a.createElement("img",{key:t,src:E.baseURL+"/images/uploads/"+e.path,alt:e.path})})):r.a.createElement("div",{className:"no-image"},r.a.createElement("p",null,"No Image Available")))}}]),t}(r.a.Component),Q=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",component:D}),r.a.createElement(d.b,{exact:!0,path:"/login",component:B}),r.a.createElement(d.b,{exact:!0,path:"/dashboard",component:q}),r.a.createElement(d.b,{exact:!0,path:"/gallery/:id",component:K})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[42,1,2]]]);
//# sourceMappingURL=main.dddf1a64.chunk.js.map