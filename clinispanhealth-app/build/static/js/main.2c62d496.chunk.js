(this["webpackJsonpclinispanhealth-app"]=this["webpackJsonpclinispanhealth-app"]||[]).push([[0],{22:function(e,s,t){},70:function(e,s,t){},71:function(e,s,t){},72:function(e,s,t){},73:function(e,s,t){},74:function(e,s,t){},75:function(e,s,t){"use strict";t.r(s);var a=t(15),c=t(1),i=t.n(c),l=t(31),n=t.n(l),r=t(7),j=t(3),o=t(12),d=t(18),b=t(0),h=function(e){var s=(e.forName,"text"),t=null!=e.placeholder?e.placeholder:"";return Object(b.jsxs)("div",{className:"form",children:[Object(b.jsx)("label",{forName:s,children:e.label}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:s,placeholder:t})]})},m=function(e){var s=e.className,t=e.text,a="long"===s?"long":"signUpButton";return Object(b.jsx)("button",{className:a,children:Object(b.jsx)("b",{children:t})})},x=function(e){var s=e.name,t="browse"===s?"BROWSE STUDIES":"Login";return Object(b.jsx)("p",{style:{color:"browse"===s?"black":"#059ec5",fontStretch:"browse"===s?"ultra-condensed":"",fontWeight:"browse"===s?"bold":"normal"},className:"hyperLink",children:t})},O=function(){return Object(b.jsxs)("div",{className:"signUpHeader",children:[Object(b.jsx)("div",{className:"containerH",children:Object(b.jsx)(r.b,{className:"link",to:"/home",children:Object(b.jsx)("div",{className:"cshHeader"})})}),Object(b.jsxs)("div",{className:"containerH2",children:[Object(b.jsx)(r.b,{className:"link",to:"/browse-studies",children:Object(b.jsx)(x,{name:"browse"})}),Object(b.jsx)(r.b,{className:"link",to:"/login",children:Object(b.jsx)(x,{name:"login"})}),Object(b.jsx)(r.b,{className:"link",to:"/",children:Object(b.jsx)(m,{text:"Sign Up"})})]})]})};var u=function(){var e=Object(c.useState)({first:"",last:"",email:"",pw:"",pw2:"",zipcode:"",phone:"",referral:""}),s=Object(a.a)(e,2),t=s[0],i=s[1],l=function(e){var s=e.target.name,t=e.target.value;i((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(o.a)({},s,t))}))};return Object(b.jsxs)("div",{children:[Object(b.jsx)(O,{}),Object(b.jsx)("div",{className:"mainSignUp",children:Object(b.jsx)("div",{className:"forms",children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e){console.log(e)}(t)},children:[Object(b.jsx)("b",{children:Object(b.jsx)("p",{className:"label",children:"Joining is free and secure. What are you waiting for?"})}),Object(b.jsxs)("label",{children:[" First Name:",Object(b.jsx)("input",{type:"text",name:"first",value:t.first||"",onChange:l})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:[" Last Name:",Object(b.jsx)("input",{type:"text",name:"last",value:t.last||"",onChange:l})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:[" Email Address:",Object(b.jsx)("input",{type:"text",name:"email",value:t.email||"",onChange:l,placeholder:"e.g. abc123@gmail.com"})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:[" Create Password:",Object(b.jsx)("input",{type:"text",name:"pw",value:t.pw||"",onChange:l})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:[" Re-enter Password:",Object(b.jsx)("input",{type:"text",name:"pw2",value:t.pw2||"",onChange:l})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:[" Zip Code:",Object(b.jsx)("input",{type:"text",name:"zipcode",value:t.zipcode||"",onChange:l})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:[" Phone Number:",Object(b.jsx)("input",{type:"text",name:"phone",value:t.phone||"",onChange:l,placeholder:"1-234-567-8910"})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:[" Referral Code:",Object(b.jsx)("input",{type:"text",name:"referral",value:t.referral||"",onChange:l})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"submit",className:"long",text:"Sign Up"})]})})})]})},p=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(O,{}),Object(b.jsx)("div",{className:"mainSignUp",children:Object(b.jsxs)("div",{className:"forms2",children:[Object(b.jsx)("b",{children:Object(b.jsx)("p",{className:"label",children:"Glad to have you back!"})}),Object(b.jsx)(h,{forName:"emailAddress",label:"Email Address",placeholder:"e.g. abc123@gmail.com"}),Object(b.jsx)(h,{forName:"pw",label:"Password"}),Object(b.jsx)(m,{className:"long",text:"Login"})]})})]})},f=t.p+"static/media/CSH_Logo.e0d69993.png",N=function(e){var s=e.content,t=e.text,a=e.link;return Object(b.jsx)(r.b,{className:"nav",id:"home"===t?"home":"na",to:a,children:s})},v=function(e){var s=e.color;return Object(b.jsxs)("div",{className:"navbar",children:[Object(b.jsxs)("div",{id:"left-navbar",children:[Object(b.jsx)(N,{className:"nav",content:"Home",text:"home"===s?"home":"na",link:"/home"}),Object(b.jsx)(N,{className:"nav",content:"Studies For You",text:"studies-for-you"===s?"home":"na",link:"/studies-for-you"}),Object(b.jsx)(N,{className:"nav",content:"Browse Studies",text:"browse-studies"===s?"home":"na",link:"/browse-studies"}),Object(b.jsx)(N,{className:"nav",content:"Manage Profile",text:"manage-profile"===s?"home":"na",link:"/manage-profile"}),Object(b.jsx)(N,{className:"nav",content:"FAQ",text:"faq"===s?"home":"na",link:"/faq"})]}),Object(b.jsx)("div",{id:"right-navbar",children:Object(b.jsx)("img",{src:f,alt:"logo",width:"300",height:"100"})})]})},g=t.p+"static/media/create-acct.e24bb651.PNG",y=t.p+"static/media/hands.88746353.PNG",w=t.p+"static/media/fb.e764da59.png",C=t(13),A=t(14);t(22);function S(){return Object(b.jsxs)("div",{className:"contactBtn",children:[Object(b.jsxs)("p",{children:["Contact a CSH",Object(b.jsx)("br",{}),"Professional"]}),Object(b.jsx)("button",{id:"contact",children:Object(b.jsx)(C.a,{id:"icon",icon:A.b})})]})}function k(){return Object(b.jsxs)("div",{className:"dashboard",children:[Object(b.jsx)("div",{id:"header",children:Object(b.jsx)("h1",{children:"Welcome back!"})}),Object(b.jsx)("p",{id:"subtitle",children:"This is your user dashboard. Here, you can choose to browse clinical studies or manage your profile."}),Object(b.jsxs)("div",{id:"tiles",children:[Object(b.jsxs)("div",{className:"tile",children:[Object(b.jsx)("p",{className:"tile-p",children:"Find Studies for You"}),Object(b.jsx)("p",{className:"tile-sp",children:"Find clinical studies recommended specifically for you based on your conditions and geographic location."}),Object(b.jsx)("div",{className:"tileBtnDiv",children:Object(b.jsx)("button",{className:"tileBtn",children:"Studies for you"})})]}),Object(b.jsxs)("div",{className:"tile",children:[Object(b.jsx)("p",{className:"tile-p",children:"Start browsing studies"}),Object(b.jsx)("p",{className:"tile-sp",children:"Start browsing available clinical studies and request a free screening appointment if you want to participate."}),Object(b.jsx)("div",{className:"tileBtnDiv",children:Object(b.jsx)("button",{className:"tileBtn",children:"Browse studies"})})]}),Object(b.jsxs)("div",{className:"tile",children:[Object(b.jsx)("p",{className:"tile-p",children:"Profile"}),Object(b.jsxs)("p",{className:"tile-sp",children:[Object(b.jsx)("strong",{children:"Please complete your profile to improve your experience."}),"Keep your profile information updated so we can notify you when studies of interest are available."]}),Object(b.jsx)("div",{className:"tileBtnDiv",children:Object(b.jsx)("button",{className:"tileBtn",children:"Manage profile"})})]})]})]})}function B(){return Object(b.jsxs)("div",{className:"dashboard",children:[Object(b.jsx)("div",{className:"h3",children:Object(b.jsx)("h3",{children:"New to Clinispan? Check out our website to find out more about the medical study process and to see what people are saying about us!"})}),Object(b.jsx)("div",{id:"db2-img-container",children:Object(b.jsx)("img",{id:"db2-img",src:g,alt:"acct"})})]})}function D(){window.open("https://www.facebook.com/CliniSpanHealth/")}function P(){return Object(b.jsxs)("div",{className:"dashboard",children:[Object(b.jsx)("div",{className:"h3",children:Object(b.jsx)("h3",{children:"Join a CSH Community! We have multiple CSH Facebook groups where you can share about your passion for research or be encouraged by others experiencing the same health challenges!"})}),Object(b.jsxs)("div",{id:"db3",children:[Object(b.jsxs)("div",{className:"join",children:[Object(b.jsx)("img",{id:"fb",src:w,alt:"Facebook"}),Object(b.jsx)("button",{id:"FbBtn",onClick:D,children:"Join Today!"})]}),Object(b.jsx)("div",{className:"join",children:Object(b.jsx)("img",{id:"hands-img",src:y,alt:"acct",width:"600",height:"320"})})]})]})}var I=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(v,{color:"home"}),Object(b.jsx)(S,{}),Object(b.jsx)(k,{}),Object(b.jsx)(B,{}),Object(b.jsx)(P,{})]})},L=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(v,{color:"studies-for-you"})})},H=t(34),M=t(35),q=t(38),F=t(37),R=t.p+"static/media/study-logo.81f350b9.png",T=function(e){var s=e.title,t=e.location;return Object(b.jsxs)("div",{className:"trialBox",children:[Object(b.jsx)("img",{className:"studyImage",src:R,height:"100px",width:"100px",alt:"study"}),Object(b.jsxs)("div",{className:"studyContainer",children:[Object(b.jsx)("p",{className:"study",children:s}),Object(b.jsx)("h3",{className:"study",children:1===t.length?t:t[0]})]})]})},E=t(36),W=t.n(E),U=function(e){Object(q.a)(t,e);var s=Object(F.a)(t);function t(e){var a;return Object(H.a)(this,t),(a=s.call(this,e)).state={posts:[]},a}return Object(M.a)(t,[{key:"componentDidMount",value:function(){var e=this,s=Math.trunc(10*Math.random()),t=s+10;W.a.get("https://clinicaltrials.gov/api/query/study_fields?fields=BriefTitle%2CLocationCity%2CLocationState&min_rnk="+s+"&max_rnk="+t+"&fmt=json").then((function(s){e.setState({posts:s.data.StudyFieldsResponse.StudyFields})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.posts;return Object(b.jsxs)("div",{children:[Object(b.jsx)(v,{color:"browse-studies"}),Object(b.jsxs)("div",{className:"main",children:[Object(b.jsxs)("div",{className:"searchContainer",children:[Object(b.jsxs)("div",{className:"searchBox",children:[Object(b.jsx)("div",{className:"searchLabel",children:Object(b.jsx)("p",{class:"label",children:"Search:"})}),Object(b.jsx)("input",{className:"search",placeholder:"Enter a specific search term..."})]}),Object(b.jsxs)("div",{className:"searchBox",children:[Object(b.jsx)("div",{className:"searchLabel",children:Object(b.jsx)("p",{class:"label",children:"Sort:"})}),Object(b.jsx)("div",{children:"(In Progress)"})]})]}),Object(b.jsx)("div",{className:"trialContainer",children:e.length?e.map((function(e){return Object(b.jsx)(T,{title:e.BriefTitle,location:e.LocationCity},e.rank)})):null})]})]})}}]),t}(c.Component),z=function(e){var s=(e.forName,"text"),t=null!=e.placeholder?e.placeholder:"";return Object(b.jsxs)("div",{className:"checkboxContainer",children:[Object(b.jsx)("input",{className:"checkbox",type:"checkbox",placeholder:t}),Object(b.jsx)("label",{className:"checkboxLabel",forName:s,children:e.label}),Object(b.jsx)("br",{})]})},J=function(e){var s=(e.forName,"text"),t=null!=e.placeholder?e.placeholder:"";return Object(b.jsxs)("div",{className:"inputContainer",children:[Object(b.jsx)("label",{className:"fieldLabel",forName:s,children:e.label}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{className:"input",type:s,placeholder:t})]})},G=function(){return Object(b.jsxs)("div",{id:"profileContainer",children:[Object(b.jsxs)("div",{id:"profileTile",children:[Object(b.jsx)("div",{id:"header",children:Object(b.jsx)("h1",{id:"profile-h1",children:"Profile"})}),Object(b.jsxs)("div",{id:"fieldsContainer",children:[Object(b.jsxs)("div",{className:"fieldsRow",children:[Object(b.jsx)(J,{forName:"emailAddress",label:"First Name"}),Object(b.jsx)(J,{forName:"emailAddress",label:"Last Name"})]}),Object(b.jsxs)("div",{className:"fieldsRow",children:[Object(b.jsx)(J,{forName:"emailAddress",label:"Date of birth",placeholder:"mm/dd/yyyy"}),Object(b.jsx)(J,{forName:"emailAddress",label:"Location/City"})]}),Object(b.jsxs)("div",{className:"fieldsRow",children:[Object(b.jsx)(J,{forName:"emailAddress",label:"Display Name"}),Object(b.jsx)(J,{forName:"emailAddress",label:"Display E-mail"})]}),Object(b.jsxs)("div",{className:"fieldsRow",children:[Object(b.jsx)(J,{forName:"emailAddress",label:"Phone Number"}),Object(b.jsx)(J,{forName:"emailAddress",label:"Nonprofit Organization"})]})]}),Object(b.jsx)("div",{id:"missionContainer",children:Object(b.jsxs)("p",{id:"mission",children:["As part of our mission to improve diversity in clinical trials, please complete the gender and ethnicity selections listed below. Thank you for helping.",Object(b.jsx)("u",{children:"If you have several ethnic backgrounds, please select all that apply."})]})}),Object(b.jsx)("div",{id:"fieldsContainer2",children:Object(b.jsxs)("div",{className:"fieldsRow",children:[Object(b.jsx)(J,{forName:"emailAddress",label:"Gender"}),Object(b.jsx)(J,{forName:"emailAddress",label:"Ethnicity"})]})}),Object(b.jsxs)("div",{className:"medsContainer",children:[Object(b.jsx)("p",{className:"meds",children:"Medications"}),Object(b.jsx)("div",{className:"line"}),Object(b.jsx)("p",{className:"listMeds",children:"Please list any medications you are on"}),Object(b.jsx)("textarea",{id:"largeInput",type:"TextArea"})]}),Object(b.jsxs)("div",{className:"medsContainer",children:[Object(b.jsx)("p",{className:"meds",children:"Conditions"}),Object(b.jsx)("div",{className:"line"}),Object(b.jsxs)("div",{id:"checkAll",children:[Object(b.jsx)("p",{className:"listMeds",children:"I would be interested in participating in studies for:"}),Object(b.jsx)(z,{forName:"emailAddress",label:"Check all"})]})]}),Object(b.jsxs)("div",{id:"fieldsContainer3",children:[Object(b.jsxs)("div",{className:"fieldsCol",children:[Object(b.jsx)(z,{forName:"emailAddress",label:"Breast Cancer"}),Object(b.jsx)(z,{forName:"emailAddress",label:"High Cholesterol"}),Object(b.jsx)(z,{forName:"emailAddress",label:"Atherosclerosis (Arterial Occlusive Diseases)"}),Object(b.jsx)(z,{forName:"emailAddress",label:"Sleep Apnea"}),Object(b.jsx)(z,{forName:"emailAddress",label:"Asthma"}),Object(b.jsx)(z,{forName:"emailAddress",label:"Diabetes (Mellitus) Type I"}),Object(b.jsx)(z,{forName:"emailAddress",label:"Depression"}),Object(b.jsx)(z,{forName:"emailAddress",label:"Constipation (Chronic)"}),Object(b.jsx)(z,{forName:"emailAddress",label:"Prostate Enlargement"}),Object(b.jsx)(z,{forName:"emailAddress",label:"High Blood Pressure (Hypertension)"}),Object(b.jsx)(z,{forName:"emailAddress",label:"SARS-CoV-2"}),Object(b.jsx)(z,{forName:"emailAddress",label:"Chronic Obstructive Pulmonary Disease (COPD)"})]}),Object(b.jsxs)("div",{className:"fieldsCol",children:[Object(b.jsx)(z,{forName:"emailAddress",label:"Obesity/Overweight"}),Object(b.jsx)(z,{forName:"emailAddress",label:"Attention Deficit Disorder (ADD/ADHD)"}),Object(b.jsx)(z,{forName:"emailAddress",label:"Migraine"}),Object(b.jsx)(z,{forName:"emailAddress",label:"Chronic Pain"}),Object(b.jsx)(z,{forName:"emailAddress",label:"Irritable Bowel Syndrome (IBS)"}),Object(b.jsx)(z,{forName:"emailAddress",label:"SARS-CoV-2"}),Object(b.jsx)(z,{forName:"emailAddress",label:"Diabetes (Mellitus) Type II"}),Object(b.jsx)(z,{forName:"emailAddress",label:"Renal Cell Carcinoma"}),Object(b.jsx)(z,{forName:"emailAddress",label:"Alzheimers/Memory Loss"}),Object(b.jsx)(z,{forName:"emailAddress",label:"Arthritis"}),Object(b.jsx)(z,{forName:"emailAddress",label:"Anxiety"})]})]})]}),Object(b.jsx)("div",{id:"saveBtnContainer",children:Object(b.jsx)("button",{id:"saveBtn",children:"Save changes"})})]})},_=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(v,{color:"manage-profile"}),Object(b.jsx)(G,{})]})},Q=function(e){return Object(b.jsxs)("div",{className:"dropdownContainer",children:[Object(b.jsxs)("p",{className:"question",children:[e.title,Object(b.jsx)(C.a,{className:"arrow",icon:A.a})]}),Object(b.jsx)("div",{className:"line"})]})},V=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(v,{color:"faq"}),Object(b.jsx)("div",{id:"faq-banner",children:Object(b.jsx)("p",{id:"faq-banner-title",children:"Frequently Asked Questions about Clinical Trials"})}),Object(b.jsxs)("div",{id:"container",children:[Object(b.jsx)("div",{id:"inner-container",children:Object(b.jsxs)("p",{id:"faq-subtitle",children:["If you have never been in a clinical study, here is some additional information. If you have questions not listed, email them to ",Object(b.jsx)("a",{children:"abby@clinispanhealth.com"})]})}),Object(b.jsxs)("div",{id:"dropdowns",children:[Object(b.jsx)(Q,{title:"Will I get paid or will it cost me money?"}),Object(b.jsx)(Q,{title:"When will I get a chance to go over the details of the clinical study to decide if it is right for me?"}),Object(b.jsx)(Q,{title:"Can I change my mind?"}),Object(b.jsx)(Q,{title:"Will my nonprofit or anyone else find out?"}),Object(b.jsx)(Q,{title:"Should I discuss this with my doctor?"})]})]})]})};t(70),t(71),t(72),t(73),t(74);n.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(r.a,{children:Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{path:"/",component:u,exact:!0}),Object(b.jsx)(j.a,{path:"/home",component:I}),Object(b.jsx)(j.a,{path:"/login",component:p}),Object(b.jsx)(j.a,{path:"/studies-for-you",component:L}),Object(b.jsx)(j.a,{path:"/browse-studies",component:U}),Object(b.jsx)(j.a,{path:"/manage-profile",component:_}),Object(b.jsx)(j.a,{path:"/faq",component:V}),Object(b.jsx)(j.a,{path:"/test",component:function(){var e=i.a.useState(null),s=Object(a.a)(e,2),t=s[0],c=s[1];return i.a.useEffect((function(){fetch("/api").then((function(e){return e.json()})).then((function(e){return c(e.message)}))}),[]),Object(b.jsx)("p",{children:t||"Loading..."})}})]})})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.2c62d496.chunk.js.map