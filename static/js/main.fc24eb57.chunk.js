(this.webpackJsonpcon_web=this.webpackJsonpcon_web||[]).push([[0],{114:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(0),o=n(10),c=n.n(o),i=n(17),s=n(32),l=n(64),u=n.n(l),j=n(65),b=n(28),d="login_user",p="register_user",h="auth_user",x="logout_user",m={userData:{isAuth:!1}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(b.a)(Object(b.a)({},e),{},{loginSuccess:t.payload});case p:return Object(b.a)(Object(b.a)({},e),{},{register:t.payload});case h:case x:return Object(b.a)(Object(b.a)({},e),{},{userData:t.payload});default:return e}},f=Object(s.c)({user:O}),g=Object(s.a)(u.a,j.a)(s.d)(f,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),v=n(16),w=n(8),y=n(39),k=n.n(y),C=function(){var e=k.a.get("/api/users/auth").then((function(e){return e.data}));return{type:h,payload:e}},D=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;function o(){var o=Object(w.f)(),c=Object(i.b)();return Object(a.useEffect)((function(){c(C()).then((function(e){e.payload.isAuth?(n&&!e.payload.isAdmin||!1===t)&&o.push("/"):t&&o.push("/login")}))}),[]),Object(r.jsx)(e,{})}return o},A=n(20),S=n(14),_=n(15),N=n.p+"static/media/loginSuccess.518441b2.png";function E(){var e=Object(S.a)(["\n  width: 50px;\n  height: 50px;\n  border-radius: 30px;\n  border: 2px solid silver;\n  margin-right: 15px;\n"]);return E=function(){return e},e}function W(){var e=Object(S.a)(["\n  text-align: center;\n  width: 8vw;\n  height: 100px;\n  font-size: 18px;\n  line-height: 100px;\n  user-select: none;\n  text-decoration: none;\n  color: ",";\n  &:hover {\n    border-bottom: 5px solid rgb(56, 94, 217);\n  }\n"]);return W=function(){return e},e}var F=Object(_.a)(v.b)(W(),(function(e){return e.color||"black"})),L=_.a.img(E()),T=function(e){var t=e.color,n=Object(i.b)(),o=Object(i.c)((function(e){return e.user})).userData,c=Object(a.useState)(o.isAuth),s=Object(A.a)(c,2),l=s[0],u=s[1];Object(a.useEffect)((function(){return u(o.isAuth),function(){u(!1)}}),[o]);var j=function(){n(function(){var e=k.a.get("/api/users/logout").then((function(e){return e.data}));return{type:x,payload:e}}())};return l?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(L,{src:N,alt:"loginSuccess"}),Object(r.jsx)(F,{color:t,to:"/",onClick:j,children:"logout"})]}):Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(F,{color:t,to:"/login",children:"login"})})},I=n.p+"static/media/logo.409441df.png";function R(){var e=Object(S.a)(["\n  flex: 2;\n  display: flex;\n  margin-left: 3vw;\n  a {\n    padding: 0 2vw;\n    height: 100px;\n    font-size: 18px;\n    line-height: 100px;\n    user-select: none;\n    text-decoration: none;\n    color: ",";\n  }\n  a:hover {\n    border-bottom: 5px solid rgb(56, 94, 217);\n  }\n"]);return R=function(){return e},e}function P(){var e=Object(S.a)(["\n  width: 70px;\n  height: 70px;\n"]);return P=function(){return e},e}function B(){var e=Object(S.a)(['\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100vw;\n  font-family: "Goldman", cursive;\n  padding: 0 9vw;\n  background-color: rgb(255, 255, 255, 0.7);\n  border-bottom: 1px solid ',";\n"]);return B=function(){return e},e}var q=_.a.div(B(),(function(e){return e.borderColor||"black"})),z=_.a.img(P()),G=_.a.div(R(),(function(e){return e.color||"black"})),V=function(e){var t=e.color,n=e.borderColor;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(q,{borderColor:n,children:[Object(r.jsx)(v.b,{to:"/",children:Object(r.jsx)(z,{src:I,alt:"LOGO"})}),Object(r.jsxs)(G,{color:t,children:[Object(r.jsx)(v.b,{to:"/concept",children:"Concept"}),Object(r.jsx)(v.b,{to:"/progress",children:"Progress"}),Object(r.jsx)(v.b,{to:"/stack",children:"Stack"}),Object(r.jsx)(v.b,{to:"/member",children:"Member"})]}),Object(r.jsx)(T,{color:t})]})})},X=n.p+"static/media/screen.a760e54e.jpg",M=n(69),U=n.n(M),H=n.p+"static/media/rosmap.e8b6c833.png";function J(){var e=Object(S.a)(["\n  width: 750px;\n"]);return J=function(){return e},e}function K(){var e=Object(S.a)(["\n  position: absolute;\n  top: 253px;\n  left: 485px;\n  font-size: 20px;\n  color: red;\n"]);return K=function(){return e},e}function Q(){var e=Object(S.a)(["\n  position: relative;\n  top: 90px;\n  left: 125px;\n  user-select: none;\n"]);return Q=function(){return e},e}function Y(){var e=Object(S.a)(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  cursor: pointer;\n"]);return Y=function(){return e},e}function Z(){var e=Object(S.a)(["\n  position: relative;\n  width: 1000px;\n  height: 600px;\n  background-color: rgb(235, 236, 240);\n"]);return Z=function(){return e},e}function $(){var e=Object(S.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return $=function(){return e},e}var ee=_.a.div($()),te=_.a.div(Z()),ne=Object(_.a)(U.a)(Y()),re=_.a.div(Q()),ae=_.a.div(K()),oe=_.a.img(J()),ce=function(e){var t=e.onClickClose;return Object(r.jsx)(ee,{children:Object(r.jsxs)(te,{children:[Object(r.jsx)(ne,{onClick:t}),Object(r.jsxs)(re,{children:[Object(r.jsx)(ae,{children:"\u25cf"}),Object(r.jsx)(oe,{src:H,alt:"MAP"})]})]})})};function ie(){var e=Object(S.a)(['\n  text-decoration: none;\n  padding: 12px 60px 12px 64px;\n  color: white;\n  background-color: black;\n  font-size: 24px;\n  font-family: "Do Hyeon", sans-serif;\n  letter-spacing: 5px;\n  border: 3px solid black;\n  border-radius: 5px;\n  cursor: pointer;\n']);return ie=function(){return e},e}function se(){var e=Object(S.a)(['\n  margin-bottom: 20px;\n  color: black;\n  font-size: 35px;\n  font-family: "Goldman", cursive;\n']);return se=function(){return e},e}function le(){var e=Object(S.a)(["\n  position: relative;\n  top: 330px;\n  left: 65vw;\n  width: 300px;\n  height: 150px;\n  user-select: none;\n"]);return le=function(){return e},e}function ue(){var e=Object(S.a)(["\n  maxwidth: 100vw;\n  height: 100vh;\n  background: center/cover no-repeat url(",");\n"]);return ue=function(){return e},e}var je=_.a.div(ue(),X),be=_.a.div(le()),de=_.a.h2(se()),pe=Object(_.a)(v.b)(ie()),he=function(){var e=Object(w.g)(),t=Object(i.c)((function(e){return e.user})).userData,n=Object(i.c)((function(e){return e.user}));console.log(n);var o=Object(a.useState)(t.isAuth),c=Object(A.a)(o,2),s=c[0],l=c[1];Object(a.useEffect)((function(){return l(t.isAuth),function(){l(!1)}}),[t]);var u=Object(a.useState)(!1),j=Object(A.a)(u,2),b=j[0],d=j[1],p=s?e.pathname:"/login";return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(je,{children:[Object(r.jsx)(V,{color:"black",borderColor:"none"}),Object(r.jsxs)(be,{children:[Object(r.jsx)(de,{children:"Operation"}),Object(r.jsx)(pe,{to:p,onClick:function(){d(!0)},children:"\ubc14\ub85c\uac00\uae30"})]}),b?Object(r.jsx)(ce,{onClickClose:function(){d(!1)}}):null]})})},xe=n(151),me=n(147),Oe=n(150),fe=n(149),ge=n(148),ve=n(145),we=n(146),ye=Object(ve.a)((function(e){return{mainbox:{display:"flex",justifyContent:"center",alignItems:"center",height:"90vh"},paper:{display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},registerBt:{color:"rgb(63,81,181)",textDecoration:"none"}}}));function ke(){var e=ye(),t=Object(w.f)(),n=Object(i.b)(),o=Object(a.useState)(""),c=Object(A.a)(o,2),s=c[0],l=c[1],u=Object(a.useState)(""),j=Object(A.a)(u,2),b=j[0],p=j[1];return Object(r.jsxs)(we.a,{className:e.mainbox,component:"main",maxWidth:"xs",children:[Object(r.jsx)(me.a,{}),Object(r.jsxs)("div",{className:e.paper,children:[Object(r.jsx)(v.b,{to:"/",children:Object(r.jsx)("img",{style:{width:"60px",height:"60px",marginBottom:"15px"},src:I,alt:"LOGO"})}),Object(r.jsx)(ge.a,{component:"h1",variant:"h5",children:"Login"}),Object(r.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),n(function(e){var t=k.a.post("/api/users/login",e).then((function(e){return e.data}));return{type:d,payload:t}}({email:s,password:b})).then((function(e){e.payload.loginSuccess?t.push("/"):alert("Error")}))},children:[Object(r.jsx)(Oe.a,{type:"email",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:s,onChange:function(e){var t=e.target.value;l(t)}}),Object(r.jsx)(Oe.a,{type:"password",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"password",label:"Password",name:"password",autoComplete:"current-password",value:b,onChange:function(e){var t=e.target.value;p(t)}}),Object(r.jsx)(xe.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Login"}),Object(r.jsx)(fe.a,{container:!0,children:Object(r.jsx)(fe.a,{item:!0,style:{margin:"auto"},children:Object(r.jsx)(v.b,{className:e.registerBt,to:"/register",variant:"body2",children:"Don't have an account? Sign Up"})})})]})]})]})}var Ce=Object(ve.a)((function(e){return{mainbox:{display:"flex",justifyContent:"center",alignItems:"center",height:"85vh"},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},loginBt:{color:"rgb(63,81,181)",textDecoration:"none"}}}));function De(){var e=Ce(),t=Object(w.f)(),n=Object(i.b)(),o=Object(a.useState)(""),c=Object(A.a)(o,2),s=c[0],l=c[1],u=Object(a.useState)(""),j=Object(A.a)(u,2),b=j[0],d=j[1],h=Object(a.useState)(""),x=Object(A.a)(h,2),m=x[0],O=x[1],f=Object(a.useState)(""),g=Object(A.a)(f,2),y=g[0],C=g[1],D=function(e){var t=e.target,n=t.value,r=t.name;"myName"===r?l(n):"email"===r?d(n):"password"===r?O(n):"confirmPassword"===r&&C(n)};return Object(r.jsxs)(we.a,{className:e.mainbox,component:"main",maxWidth:"xs",children:[Object(r.jsx)(me.a,{}),Object(r.jsxs)("div",{className:e.paper,children:[Object(r.jsx)(v.b,{to:"/",children:Object(r.jsx)("img",{style:{width:"60px",height:"60px",marginBottom:"15px"},src:I,alt:"LOGO"})}),Object(r.jsx)(ge.a,{component:"h1",variant:"h5",children:"Create Account"}),Object(r.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:function(e){if(e.preventDefault(),m!==y)return alert("\ube44\ubc00\ubc88\ud638\uc640 \ube44\ubc00\ubc88\ud638\ud655\uc778\uc774 \ub2e4\ub985\ub2c8\ub2e4.");n(function(e){var t=k.a.post("/api/users/register",e).then((function(e){return e.data}));return{type:p,payload:t}}({email:b,name:s,password:m})).then((function(e){e.payload.success?t.push("/"):alert("Failed to sign up")}))},children:[Object(r.jsxs)(fe.a,{container:!0,spacing:2,children:[Object(r.jsx)(fe.a,{item:!0,xs:12,children:Object(r.jsx)(Oe.a,{type:"text",autoComplete:"name",variant:"outlined",required:!0,fullWidth:!0,id:"name",label:"Name",name:"myName",autoFocus:!0,value:s,onChange:D})}),Object(r.jsx)(fe.a,{item:!0,xs:12,children:Object(r.jsx)(Oe.a,{type:"email",variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:b,onChange:D})}),Object(r.jsx)(fe.a,{item:!0,xs:12,children:Object(r.jsx)(Oe.a,{type:"password",variant:"outlined",required:!0,fullWidth:!0,id:"password",label:"Password",name:"password",autoComplete:"current-password",value:m,onChange:D})}),Object(r.jsx)(fe.a,{item:!0,xs:12,children:Object(r.jsx)(Oe.a,{type:"password",variant:"outlined",required:!0,fullWidth:!0,id:"confirmPassword",label:"Confirm Password",name:"confirmPassword",autoComplete:"confirmed-password",value:y,onChange:D})})]}),Object(r.jsx)(xe.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Create Account"}),Object(r.jsx)(fe.a,{container:!0,justify:"flex-end",children:Object(r.jsx)(fe.a,{item:!0,style:{margin:"auto"},children:Object(r.jsx)(v.b,{className:e.loginBt,to:"/login",variant:"body2",children:"Already have an account? Sign in"})})})]})]})]})}var Ae=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(V,{}),Object(r.jsx)("div",{children:Object(r.jsxs)("p",{style:{position:"relative",top:"100px",left:"550px",width:"690px"},children:["Con is a start-up based in pan-gyo. We are creating solutions for the future of automated logistics warehouse. Our product is an AI-driven autonomous robot using LiDAR that helps with the running and carrying roles in a warehouse. ",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"This is a big help to warehouse employees, who encounter a lot of physically demanding work. A logistics warehouse is a place to enjoy customers and seller. We are here to make the warehouse a better and safer place to work using robotics and AI. ",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"We want to enable robots to join in logistics industry as a key assistant to warehouse. We are hiring passionate talent to disrupt the logistics industry.",Object(r.jsx)("br",{})," ",Object(r.jsx)("br",{}),"If you want to dive into deep-tech, then Con, co. is a best place for you. What is LiDAR? LiDAR is a remote sensing technology which uses the pulse from a laser to collect measurements which can then be used to create 3D models and maps of objects and environments. How does LiDAR work? LiDAR works in a similar way to Radar and Sonar yet uses light waves from a laser, instead of radio or sound waves. A LiDAR system calculates how long it takes for the light to hit an object or surface and reflect back to the scanner.",Object(r.jsx)("br",{}),Object(r.jsx)("br",{})," The distance is then calculated using the velocity of light*. These are known as \u2018Time of Flight\u2019 measurements. Depending on the sensor used, LiDAR units can fire hundreds of thousands of pulses per second. Each of these measurements, or returns, can then be processed into a 3D visualization known as a \u2018point cloud\u2019. Function Mapping, location etc"]})})]})},Se=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(V,{}),Object(r.jsx)("div",{children:"progress"})]})},_e=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(V,{}),Object(r.jsx)("div",{children:"stack"})]})},Ne=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(V,{}),Object(r.jsx)("div",{children:"member"})]})},Ee=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(v.a,{basename:"/con_web",children:Object(r.jsxs)(w.c,{children:[Object(r.jsx)(w.a,{exact:!0,path:"/",component:D(he,null)}),Object(r.jsx)(w.a,{exact:!0,path:"/login",component:D(ke,!1)}),Object(r.jsx)(w.a,{exact:!0,path:"/register",component:D(De,!1)}),Object(r.jsx)(w.a,{exact:!0,path:"/concept",component:D(Ae,null)}),Object(r.jsx)(w.a,{exact:!0,path:"/progress",component:D(Se,null)}),Object(r.jsx)(w.a,{exact:!0,path:"/stack",component:D(_e,null)}),Object(r.jsx)(w.a,{exact:!0,path:"/operation",component:D(ce,!0)}),Object(r.jsx)(w.a,{exact:!0,path:"/member",component:D(Ne,null)})]})})})};c.a.render(Object(r.jsx)(i.a,{store:g,children:Object(r.jsx)(Ee,{})}),document.getElementById("root"))}},[[114,1,2]]]);
//# sourceMappingURL=main.fc24eb57.chunk.js.map