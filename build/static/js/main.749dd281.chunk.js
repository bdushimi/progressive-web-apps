(window["webpackJsonpphoto-book"]=window["webpackJsonpphoto-book"]||[]).push([[0],{24:function(e,t,n){e.exports=n(36)},29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(11),r=n.n(i),c=(n(29),n(12)),l=n(13),s=n(8),u=n(15),d=n(14);var p=function(e){return a.a.createElement("h1",null," ",e.title," ")};var m=function(e){var t=e.post;return a.a.createElement("figure",{className:"figure"},a.a.createElement("img",{className:"photo",src:t.imageLink,alt:t.description}),a.a.createElement("figcaption",null," ",a.a.createElement("p",null," ",t.description," ")," "),a.a.createElement("div",{className:"button-container"},a.a.createElement("button",{onClick:function(){e.onRemovePhoto(t)}}," ","Remove"," ")))},h=n(9);var v=function(e){return a.a.createElement("div",null,a.a.createElement(h.b,{className:"addIcon",to:"/AddPhoto"}," "),a.a.createElement("div",{className:"photoGrid"},e.posts.sort((function(e,t){return t.id-e.id})).map((function(t,n){return a.a.createElement(m,{key:n,post:t,onRemovePhoto:e.onRemovePhoto})}))))},f=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).handleSubmit=e.handleSubmit.bind(Object(s.a)(e)),e}return Object(l.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=e.target.elements.link.value,n=e.target.elements.description.value,o={id:Number(new Date),description:n,imageLink:t};n&&t&&this.props.onAddPhoto(o)}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h1",null," Photowall "),a.a.createElement("div",{className:"form"},a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement("input",{type:"text",placeholder:"Link",name:"link"}),a.a.createElement("input",{type:"text",placeholder:"Desciption",name:"description"}),a.a.createElement("button",null," Post "))))}}]),n}(o.Component),g=n(2),b=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).state={posts:[{id:0,description:"beautiful landscape",imageLink:"https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg3919321_1443393332_n.jpg"},{id:1,description:"Aliens???",imageLink:"https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=08323785_735653395_n.jpg"},{id:2,description:"On a vacation!",imageLink:"https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"}]},e.removePhoto=e.removePhoto.bind(Object(s.a)(e)),e}return Object(l.a)(n,[{key:"removePhoto",value:function(e){console.log(e.description),this.setState((function(t){return{posts:t.posts.filter((function(t){return t!==e}))}}))}},{key:"addPhoto",value:function(e){this.setState((function(t){return{posts:t.posts.concat([e])}}))}},{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e,t){console.log(t.posts),console.log(this.state)}},{key:"render",value:function(){var e=this;return console.log(this.state.posts),a.a.createElement("div",null,a.a.createElement(g.a,{exact:!0,path:"/",render:function(){return a.a.createElement("div",null,a.a.createElement(p,{title:"PhotoBook"}),a.a.createElement(v,{posts:e.state.posts,onRemovePhoto:e.removePhoto,onNavigate:e.navigate}))}}),a.a.createElement(g.a,{path:"/AddPhoto",render:function(t){var n=t.history;return a.a.createElement(f,{onAddPhoto:function(t){e.addPhoto(t),n.push("/")}})}}))}}]),n}(o.Component),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var w=n(23),y=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;return t},j=n(22),P=Object(w.a)(y);r.a.render(a.a.createElement(j.a,{store:P},a.a.createElement(h.a,null,a.a.createElement(b,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");k?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):E(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):E(t,e)}))}}()}},[[24,1,2]]]);
//# sourceMappingURL=main.749dd281.chunk.js.map