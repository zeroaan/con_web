(this.webpackJsonpcon_web=this.webpackJsonpcon_web||[]).push([[0],{108:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),o=n(10),c=n.n(o),i=n(18),s=n(31),l=n(61),u=n.n(l),j=n(62),d=n(32),b="login_user",h="register_user",p="auth_user",m={userData:{isAuth:!1}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(d.a)(Object(d.a)({},e),{},{loginSuccess:t.payload});case h:return Object(d.a)(Object(d.a)({},e),{},{register:t.payload});case p:return Object(d.a)(Object(d.a)({},e),{},{userData:t.payload});default:return e}},O=Object(s.c)({user:x}),g=Object(s.a)(u.a,j.a)(s.d)(O,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),f=n(14),v=n(8),w=n(35),y=n.n(w),C=function(){var e=y.a.get("http://127.0.0.1:8080/api/users/auth").then((function(e){return e.data}));return{type:p,payload:e}},D=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;function o(){var o=Object(v.f)(),c=Object(i.b)();return console.log("auth"),Object(r.useEffect)((function(){c(C()).then((function(e){e.payload.isAuth?(n&&!e.payload.isAdmin||!1===t)&&o.push("/"):t&&o.push("/login")}))}),[]),Object(a.jsx)(e,{})}return o},k=n(26),A=n(27),S=n(24),_=n.p+"static/media/loginSuccess.518441b2.png";function N(){var e=Object(k.a)(["\n  width: 50px;\n  height: 50px;\n  border-radius: 30px;\n  border: 2px solid silver;\n  margin-right: 15px;\n"]);return N=function(){return e},e}function E(){var e=Object(k.a)(["\n  text-align: center;\n  width: 8vw;\n  height: 100px;\n  font-size: 1.3vw;\n  line-height: 100px;\n  user-select: none;\n  text-decoration: none;\n  color: ",";\n  &:hover {\n    border-bottom: 5px solid rgb(56, 94, 217);\n  }\n"]);return E=function(){return e},e}var F=Object(A.a)(f.b)(E(),(function(e){return e.color||"black"})),W=A.a.img(N()),L=function(e){var t=e.color,n=Object(i.c)((function(e){return e.user})).userData;console.log(n);var o=Object(r.useState)(n.isAuth),c=Object(S.a)(o,2),s=c[0],l=c[1];Object(r.useEffect)((function(){return l(n.isAuth),function(){l(!1)}}),[n]);var u=function(){y.a.get("http://127.0.0.1:8080/api/users/logout").then((function(e){e.data.success?l(!1):alert("Error")}))};return s?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(W,{src:_,alt:"loginSuccess"}),Object(a.jsx)(F,{color:t,to:"/",onClick:u,children:"logout"})]}):Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(F,{color:t,to:"/login",children:"login"})})},T=n.p+"static/media/logo.409441df.png";function I(){var e=Object(k.a)(["\n  flex: 2;\n  display: flex;\n  margin-left: 3vw;\n  a {\n    padding: 0 2vw;\n    height: 100px;\n    font-size: 1.3vw;\n    line-height: 100px;\n    user-select: none;\n    text-decoration: none;\n    color: ",";\n  }\n  a:hover {\n    border-bottom: 5px solid rgb(56, 94, 217);\n  }\n"]);return I=function(){return e},e}function R(){var e=Object(k.a)(["\n  width: 70px;\n  height: 70px;\n"]);return R=function(){return e},e}function B(){var e=Object(k.a)(['\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100vw;\n  font-family: "Goldman", cursive;\n  padding: 0 9vw;\n  background-color: rgb(255, 255, 255, 0.7);\n  border-bottom: 1px solid ',";\n"]);return B=function(){return e},e}var P=A.a.div(B(),(function(e){return e.borderColor||"black"})),q=A.a.img(R()),G=A.a.div(I(),(function(e){return e.color||"black"})),V=function(e){var t=e.color,n=e.borderColor;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(P,{borderColor:n,children:[Object(a.jsx)(f.b,{to:"/",children:Object(a.jsx)(q,{src:T,alt:"LOGO"})}),Object(a.jsxs)(G,{color:t,children:[Object(a.jsx)(f.b,{to:"/concept",children:"Concept"}),Object(a.jsx)(f.b,{to:"/progress",children:"Progress"}),Object(a.jsx)(f.b,{to:"/stack",children:"Stack"}),Object(a.jsx)(f.b,{to:"/operation",children:"Operation"}),Object(a.jsx)(f.b,{to:"/member",children:"Member"})]}),Object(a.jsx)(L,{color:t})]})})},X=n.p+"static/media/screen.a760e54e.jpg";function z(){var e=Object(k.a)(["\n  maxwidth: 100vw;\n  height: 100vh;\n  background: center/cover no-repeat url(",");\n"]);return z=function(){return e},e}var U=A.a.div(z(),X),J=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(U,{children:Object(a.jsx)(V,{color:"black",borderColor:"none"})})})},M=n(146),H=n(142),K=n(145),Q=n(144),Y=n(143),Z=n(137),$=n(140),ee=Object(Z.a)((function(e){return{mainbox:{display:"flex",justifyContent:"center",alignItems:"center",height:"90vh"},paper:{display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},registerBt:{color:"rgb(63,81,181)",textDecoration:"none"}}}));function te(){var e=ee(),t=Object(v.f)(),n=Object(i.b)(),o=Object(r.useState)(""),c=Object(S.a)(o,2),s=c[0],l=c[1],u=Object(r.useState)(""),j=Object(S.a)(u,2),d=j[0],h=j[1];return Object(a.jsxs)($.a,{className:e.mainbox,component:"main",maxWidth:"xs",children:[Object(a.jsx)(H.a,{}),Object(a.jsxs)("div",{className:e.paper,children:[Object(a.jsx)(f.b,{to:"/",children:Object(a.jsx)("img",{style:{width:"60px",height:"60px",marginBottom:"15px"},src:T,alt:"LOGO"})}),Object(a.jsx)(Y.a,{component:"h1",variant:"h5",children:"Login"}),Object(a.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),n(function(e){var t=y.a.post("http://127.0.0.1:8080/api/users/login",e).then((function(e){return e.data}));return console.log(t),{type:b,payload:t}}({email:s,password:d})).then((function(e){e.payload.loginSuccess?t.push("/"):alert("Error")}))},children:[Object(a.jsx)(K.a,{type:"email",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:s,onChange:function(e){var t=e.target.value;l(t)}}),Object(a.jsx)(K.a,{type:"password",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"password",label:"Password",name:"password",autoComplete:"current-password",value:d,onChange:function(e){var t=e.target.value;h(t)}}),Object(a.jsx)(M.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Login"}),Object(a.jsx)(Q.a,{container:!0,children:Object(a.jsx)(Q.a,{item:!0,style:{margin:"auto"},children:Object(a.jsx)(f.b,{className:e.registerBt,to:"/register",variant:"body2",children:"Don't have an account? Sign Up"})})})]})]})]})}var ne=Object(Z.a)((function(e){return{mainbox:{display:"flex",justifyContent:"center",alignItems:"center",height:"85vh"},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},loginBt:{color:"rgb(63,81,181)",textDecoration:"none"}}}));function ae(){var e=ne(),t=Object(v.f)(),n=Object(i.b)(),o=Object(r.useState)(""),c=Object(S.a)(o,2),s=c[0],l=c[1],u=Object(r.useState)(""),j=Object(S.a)(u,2),d=j[0],b=j[1],p=Object(r.useState)(""),m=Object(S.a)(p,2),x=m[0],O=m[1],g=Object(r.useState)(""),w=Object(S.a)(g,2),C=w[0],D=w[1],k=function(e){var t=e.target,n=t.value,a=t.name;"myName"===a?l(n):"email"===a?b(n):"password"===a?O(n):"confirmPassword"===a&&D(n)};return Object(a.jsxs)($.a,{className:e.mainbox,component:"main",maxWidth:"xs",children:[Object(a.jsx)(H.a,{}),Object(a.jsxs)("div",{className:e.paper,children:[Object(a.jsx)(f.b,{to:"/",children:Object(a.jsx)("img",{style:{width:"60px",height:"60px",marginBottom:"15px"},src:T,alt:"LOGO"})}),Object(a.jsx)(Y.a,{component:"h1",variant:"h5",children:"Create Account"}),Object(a.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:function(e){if(e.preventDefault(),x!==C)return alert("\ube44\ubc00\ubc88\ud638\uc640 \ube44\ubc00\ubc88\ud638\ud655\uc778\uc774 \ub2e4\ub985\ub2c8\ub2e4.");n(function(e){var t=y.a.post("http://127.0.0.1:8080/api/users/register",e).then((function(e){return e.data}));return{type:h,payload:t}}({email:d,name:s,password:x})).then((function(e){e.payload.success?t.push("/"):alert("Failed to sign up")}))},children:[Object(a.jsxs)(Q.a,{container:!0,spacing:2,children:[Object(a.jsx)(Q.a,{item:!0,xs:12,children:Object(a.jsx)(K.a,{type:"text",autoComplete:"name",variant:"outlined",required:!0,fullWidth:!0,id:"name",label:"Name",name:"myName",autoFocus:!0,value:s,onChange:k})}),Object(a.jsx)(Q.a,{item:!0,xs:12,children:Object(a.jsx)(K.a,{type:"email",variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:d,onChange:k})}),Object(a.jsx)(Q.a,{item:!0,xs:12,children:Object(a.jsx)(K.a,{type:"password",variant:"outlined",required:!0,fullWidth:!0,id:"password",label:"Password",name:"password",autoComplete:"current-password",value:x,onChange:k})}),Object(a.jsx)(Q.a,{item:!0,xs:12,children:Object(a.jsx)(K.a,{type:"password",variant:"outlined",required:!0,fullWidth:!0,id:"confirmPassword",label:"Confirm Password",name:"confirmPassword",autoComplete:"confirmed-password",value:C,onChange:k})})]}),Object(a.jsx)(M.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Create Account"}),Object(a.jsx)(Q.a,{container:!0,justify:"flex-end",children:Object(a.jsx)(Q.a,{item:!0,style:{margin:"auto"},children:Object(a.jsx)(f.b,{className:e.loginBt,to:"/login",variant:"body2",children:"Already have an account? Sign in"})})})]})]})]})}var re=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(V,{}),Object(a.jsx)("div",{children:Object(a.jsxs)("p",{style:{position:"relative",top:"100px",left:"550px",width:"690px"},children:["Con is a start-up based in pan-gyo. We are creating solutions for the future of automated logistics warehouse. Our product is an AI-driven autonomous robot using LiDAR that helps with the running and carrying roles in a warehouse. ",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"This is a big help to warehouse employees, who encounter a lot of physically demanding work. A logistics warehouse is a place to enjoy customers and seller. We are here to make the warehouse a better and safer place to work using robotics and AI. ",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"We want to enable robots to join in logistics industry as a key assistant to warehouse. We are hiring passionate talent to disrupt the logistics industry.",Object(a.jsx)("br",{})," ",Object(a.jsx)("br",{}),"If you want to dive into deep-tech, then Con, co. is a best place for you. What is LiDAR? LiDAR is a remote sensing technology which uses the pulse from a laser to collect measurements which can then be used to create 3D models and maps of objects and environments. How does LiDAR work? LiDAR works in a similar way to Radar and Sonar yet uses light waves from a laser, instead of radio or sound waves. A LiDAR system calculates how long it takes for the light to hit an object or surface and reflect back to the scanner.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{})," The distance is then calculated using the velocity of light*. These are known as \u2018Time of Flight\u2019 measurements. Depending on the sensor used, LiDAR units can fire hundreds of thousands of pulses per second. Each of these measurements, or returns, can then be processed into a 3D visualization known as a \u2018point cloud\u2019. Function Mapping, location etc"]})})]})},oe=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(V,{}),Object(a.jsx)("div",{children:"progress"})]})},ce=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(V,{}),Object(a.jsx)("div",{children:"stack"})]})},ie=function(){var e=Object(i.c)((function(e){return e.user})).userData;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(V,{}),e.isAuth?Object(a.jsx)("div",{children:"operation"}):Object(a.jsx)("div",{children:"\ub85c\uadf8\uc778 \ud6c4 \uc774\uc6a9\ud574\uc8fc\uc138\uc694"})]})},se=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(V,{}),Object(a.jsx)("div",{children:"member"})]})},le=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(f.a,{basename:"/con_web",children:Object(a.jsxs)(v.c,{children:[Object(a.jsx)(v.a,{exact:!0,path:"/",component:D(J,null)}),Object(a.jsx)(v.a,{exact:!0,path:"/login",component:D(te,!1)}),Object(a.jsx)(v.a,{exact:!0,path:"/register",component:D(ae,!1)}),Object(a.jsx)(v.a,{exact:!0,path:"/concept",component:D(re,null)}),Object(a.jsx)(v.a,{exact:!0,path:"/progress",component:D(oe,null)}),Object(a.jsx)(v.a,{exact:!0,path:"/stack",component:D(ce,null)}),Object(a.jsx)(v.a,{exact:!0,path:"/operation",component:D(ie,!0)}),Object(a.jsx)(v.a,{exact:!0,path:"/member",component:D(se,null)})]})})})};c.a.render(Object(a.jsx)(i.a,{store:g,children:Object(a.jsx)(le,{})}),document.getElementById("root"))}},[[108,1,2]]]);
//# sourceMappingURL=main.4c067231.chunk.js.map