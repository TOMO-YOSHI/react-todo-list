(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),d=a(10),i=a.n(d),l=(a(97),a(53)),r=a(11),c=a(69),s=a(70),u=a(77),m=a(76),p=(a(98),a(21)),b=a(19),h=a(75),f=a(14),E=a(153),v=a(140),g=a(156),O=Object(v.a)((function(){return Object(g.a)({input:{"&:input":{textAlign:"center",color:"red"}}})}));function T(e){var t=o.a.useState(new Date),a=Object(b.a)(t,2),d=a[0],i=a[1];Object(n.useEffect)((function(){e.change("dueDate",d)}),[]),Object(n.useEffect)((function(){e.value&&i(e.value)}));var l=O();return o.a.createElement(f.a,{utils:h.a},o.a.createElement(E.a,{className:l.input,disableToolbar:!0,variant:"inline",format:"MM/dd/yyyy",margin:"normal",id:"date-picker-inline",label:"When is the due date?",value:d,onChange:function(t){i(t),e.change("dueDate",t)},KeyboardButtonProps:{"aria-label":"change date"},name:"dueDate"}))}var j=a(154),y=Object(v.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"22ch"}}}}));function x(e){var t=y();return o.a.createElement("form",{className:t.root,noValidate:!0,autoComplete:"off"},o.a.createElement(j.a,{name:"name",id:"standard-basic",label:"What will you do?",onChange:e.change,value:e.value}))}var C=a(149),k=[{value:1,label:"A"},{value:2,label:"B"},{value:3,label:"C"},{value:4,label:"D"}],w=Object(v.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),marginTop:"1rem",width:"22ch"}}}}));function D(e){var t=w(),a=o.a.useState(""),d=Object(b.a)(a,2),i=d[0],l=d[1];return Object(n.useEffect)((function(){e.value&&l(e.value)})),o.a.createElement("form",{className:t.root,noValidate:!0,autoComplete:"off"},o.a.createElement("div",null,o.a.createElement(j.a,{name:"priority",id:"standard-select-priority",select:!0,label:"Priority",value:i,onChange:function(t){l(t.target.value),e.change(t)}},k.map((function(e){return o.a.createElement(C.a,{key:e.value,value:e.value},e.label)})))))}var I=a(146),N=a(72),S=a.n(N),L=Object(v.a)((function(e){return{button:{margin:e.spacing(1),color:"white",backgroundColor:"skyblue",width:"22ch"}}}));function M(e){var t=L();return o.a.createElement("div",null,o.a.createElement(I.a,{variant:"contained",size:"large",className:t.button,startIcon:o.a.createElement(S.a,null),onClick:function(t){e.click(e.todo)}},e.text))}a(103);var A=function(e){var t=Object(n.useState)({dueDate:"",name:"",priority:""}),a=Object(b.a)(t,2),d=a[0],i=a[1],l=function(e){var t=e.target,a=t.value,n=t.name;i(Object(r.a)(Object(r.a)({},d),{},Object(p.a)({},n,a)))};return o.a.createElement("div",{className:"inputArea"},o.a.createElement(T,{change:function(e,t){i(Object(r.a)(Object(r.a)({},d),{},Object(p.a)({},e,t)))},setId:function(){var e=(new Date).getTime();i(Object(r.a)(Object(r.a)({},d),{},{id:e}))}}),o.a.createElement(x,{change:l}),o.a.createElement(D,{change:l}),o.a.createElement(M,{click:e.addTodo,todo:d,text:"Save"}))},B=a(155),P=a(145),W=a(110),Y=a(147),z=a(73),F=a.n(z),J=Object(v.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid skyblue",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},root:{"& > *":{margin:e.spacing(1)}}}}));function V(e){var t=J(),a=e.modalOpen;return o.a.createElement("div",{className:"modalButton"},o.a.createElement(Y.a,{"aria-label":"delete",onClick:e.handleOpen},o.a.createElement(F.a,null)),o.a.createElement(B.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:t.modal,open:a,onClose:e.handleClose,closeAfterTransition:!0,BackdropComponent:P.a,BackdropProps:{timeout:500}},o.a.createElement(W.a,{in:a},o.a.createElement("div",{className:t.paper},o.a.createElement("h2",{id:"transition-modal-title"},"Enter Your Duty"),o.a.createElement("div",{id:"transition-modal-description"},o.a.createElement(A,{addTodo:e.addTodo}))))))}a(104);var G=function(e){return o.a.createElement("div",{className:"header"},o.a.createElement("h1",null,"Your ToDo Manager"))},K=a(148),U=a(111),$=a(152),q=a(151),H=a(150),Q=a(74),R=a.n(Q),X=(a(105),function(e){var t=Object(n.useState)({dueDate:"",name:"",priority:""}),a=Object(b.a)(t,2),d=a[0],i=a[1];Object(n.useEffect)((function(){var t=e.todoList,a=t.findIndex((function(t){return t.id==e.editTodoId}));i(t[a])}),[]);var l=function(e){var t=e.target,a=t.value,n=t.name;i(Object(r.a)(Object(r.a)({},d),{},Object(p.a)({},n,a)))};return o.a.createElement("div",{className:"editArea"},o.a.createElement(T,{change:function(e,t){i(Object(r.a)(Object(r.a)({},d),{},Object(p.a)({},e,t)))},value:d.dueDate}),o.a.createElement(x,{change:l,value:d.name}),o.a.createElement(D,{change:l,value:d.priority}),o.a.createElement(M,{click:function(t){e.editTodo(t,e.editTodoId)},todo:d,text:"Edit",editTodoId:e.editTodoId}))}),Z=a(59),_=a.n(Z),ee=Object(v.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid skyblue",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},root:{"& > *":{margin:e.spacing(1)}}}}));function te(e){var t=ee(),a=e.editModalOpen;return o.a.createElement("div",{className:"storeTodoId","data-todoid":e.todoId},o.a.createElement(Y.a,{"aria-label":"delete",onClick:e.handleEditOpen},o.a.createElement(_.a,null)),o.a.createElement(B.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:t.modal,open:a,onClose:e.handleEditClose,closeAfterTransition:!0,BackdropComponent:P.a,BackdropProps:{timeout:500}},o.a.createElement(W.a,{in:a},o.a.createElement("div",{className:t.paper},o.a.createElement("h2",{id:"transition-modal-title"},"Edit Your Duty"),o.a.createElement("div",{id:"transition-modal-description"},o.a.createElement(X,{todoList:e.todoList,editTodo:e.editTodo,editTodoId:e.editTodoId}))))))}a(106);var ae=Object(v.a)((function(e){return{root:{flexGrow:1,maxWidth:752},demo:{backgroundColor:e.palette.background.paper},title:{margin:e.spacing(4,0,2)},div:Object(p.a)({margin:"1rem auto",padding:"0 1rem"},"@media (min-width:600px)",{width:"80%",maxWidth:"500px"}),listItem:{"-webkit-box-shadow":"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)","-moz-box-shadow":"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)","box-shadow":"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)","border-radius":"5px"}}}));function ne(e){var t=ae(),a=o.a.useState(!1),n=Object(b.a)(a,2),d=n[0],i=(n[1],o.a.useState(!1)),r=Object(b.a)(i,2),c=r[0],s=(r[1],Object(l.a)(e.todoList));return o.a.createElement(H.a,{className:t.div,item:!0,xs:12,md:6},o.a.createElement("div",{className:t.demo},s.length?s.map((function(a,n){var i,l=a.dueDate.getDate()<10?"0"+a.dueDate.getDate():a.dueDate.getDate(),r=a.dueDate.getMonth()+1<10?"0"+(a.dueDate.getMonth()+1):a.dueDate.getMonth()+1,u=a.dueDate.getFullYear();switch(a.priority){case 1:i="A";break;case 2:i="B";break;case 3:i="C";break;case 4:i="D"}return o.a.createElement(K.a,{dense:d,key:a.id},o.a.createElement(U.a,{className:t.listItem},o.a.createElement(te,{todoId:a.id,todoList:s,editModalOpen:e.editModalOpen,editTodo:e.editTodo,editTodoId:e.editTodoId,handleEditOpen:e.handleEditOpen,handleEditClose:e.handleEditClose}),o.a.createElement(q.a,{primary:o.a.createElement("p",null,r,"/",l,"/",u," - ",a.name," - ",i),secondary:c?"Secondary text":null}),o.a.createElement($.a,null,o.a.createElement(Y.a,{edge:"end","aria-label":"delete",onClick:function(){return e.deleteTodo(n)}},o.a.createElement(R.a,null)))))})):null))}a(107);var oe=function(){return o.a.createElement("div",{className:"noTodoDiv"},o.a.createElement("p",null,"There's no todo yet."),o.a.createElement("p",null,"Add what you will do!!"))},de=(a(108),function(e){return o.a.createElement("div",{className:"outputArea"},e.todoList.length>0?o.a.createElement(ne,{todoList:e.todoList,editTodo:e.editTodo,editTodoId:e.editTodoId,deleteTodo:e.deleteTodo,editModalOpen:e.editModalOpen,handleEditOpen:e.handleEditOpen,handleEditClose:e.handleEditClose}):o.a.createElement(oe,null))}),ie=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),d=0;d<n;d++)o[d]=arguments[d];return(e=t.call.apply(t,[this].concat(o))).state={todoList:[{dueDate:new Date,name:"Sample data 1",priority:1,id:"testkey"},{dueDate:new Date,name:"Sample data 2",priority:2,id:"afraer"}],modalOpen:!1,editModalOpen:!1,editTodoId:""},e.addTodo=function(t){var a=Object(r.a)(Object(r.a)({},t),{},{id:(new Date).getTime()});if(t.name&&t.dueDate&&t.priority){var n=e.state.todoList;n.push(a),e.setState({todoList:n}),e.handleClose()}else alert("Please fill in all fields!!")},e.editTodo=function(t,a){if(t.name&&t.dueDate&&t.priority){var n=e.state.todoList,o=n.findIndex((function(e){return e.id==a}));console.log("index",o,a);var d=Object(r.a)(Object(r.a)({},t),{},{id:a});n[o]=d,e.setState({todoList:n}),e.handleEditClose()}else alert("Please fill in all fields!!")},e.deleteTodo=function(t){var a=e.state.todoList;a.splice(t,1),e.setState({todoList:a})},e.handleOpen=function(){e.setState({modalOpen:!0})},e.handleClose=function(){e.setState({modalOpen:!1})},e.handleEditOpen=function(t){var a=t.target.closest(".storeTodoId").dataset.todoid;console.log(a),e.setState({editModalOpen:!0,editTodoId:a})},e.handleEditClose=function(){e.setState({editModalOpen:!1})},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(){var e;console.log("state update"),(e=console).log.apply(e,Object(l.a)(this.state.todoList))}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(G,null),o.a.createElement(de,{todoList:this.state.todoList,editTodo:this.editTodo,editTodoId:this.state.editTodoId,deleteTodo:this.deleteTodo,editModalOpen:this.state.editModalOpen,handleEditOpen:this.handleEditOpen,handleEditClose:this.handleEditClose}),o.a.createElement(V,{addTodo:this.addTodo,modalOpen:this.state.modalOpen,handleOpen:this.handleOpen,handleClose:this.handleClose}))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},92:function(e,t,a){e.exports=a(109)},97:function(e,t,a){},98:function(e,t,a){}},[[92,1,2]]]);
//# sourceMappingURL=main.a4de3d82.chunk.js.map