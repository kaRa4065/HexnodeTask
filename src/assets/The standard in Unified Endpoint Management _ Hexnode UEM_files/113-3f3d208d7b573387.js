(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[113,4718],{4718:function(e,t,a){"use strict";a.r(t);var l=a(5893),n=a(5152);let s=a.n(n)()(()=>a.e(4567).then(a.bind(a,4567)),{loadableGenerated:{webpack:()=>[4567]},ssr:!0});t.default=e=>(0,l.jsx)(s,{...e})},6580:function(e,t,a){"use strict";a.d(t,{l:function(){return o}});var l=a(5893),n=a(1664),s=a.n(n),x=a(1215),i=a.n(x),r=a(5646),d=a(7294);let o=e=>{var t,a,n,x,o,c,p;let m=new r.hf,[h,u]=(0,d.useState)(!1),[v,f]=(0,d.useState)({email:""}),[g,w]=(0,d.useState)({show:!1,msg:""});(0,d.useEffect)(()=>{g.show&&setTimeout(()=>{w({show:!1,msg:""})},5e3)},[g]);let b={email:"email"},j=async()=>{if(h)return;let e=m.handleCommonFormValidation(v,b);if(e.errorCount>0)w({show:!0,msg:e.errorData.email});else{let e=new r.le().getCookie("enable_cookies_request"),t={usr_Mail:v.email,cookie_enable:e};try{u(!0);let e=btoa(v.email),a=await fetch("/api/instance-creater/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),l=await a.json();setTimeout(()=>{u(!1)},2e3),"failed"==l.status?window.location.reload():1==l.status?window.location.href="https://www.hexnode.com/mobile-device-management/cloud/submit_otp/email="+e:2==l.status?w({show:!0,msg:"An error occured, please try again!"}):3==l.status?w({show:!0,msg:"You have already registered for free trial.Please contact support team for further assistance."}):4==l.status?w({show:!0,msg:"Your company has already signed up for Hexnode UEM trial.Please contact support team."}):5==l.status?w({show:!0,msg:"Please enter your work email!"}):6==l.status?w({show:!0,msg:"Sorry, Hexnode UEM trial is not available in your region. Please contact Support if you need any assistance."}):w({show:!0,msg:"An error occured, please try again!"})}catch(e){console.log(e)}}};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("form",{className:"p-0 m-0",onSubmit:e=>{e.preventDefault(),j()},children:(0,l.jsxs)("div",{className:"flex justify-between flex-col items-center sm:flex-row ".concat(e.inputStyles?"".concat(e.inputStyles.wrapper):""),children:[(0,l.jsx)("div",{className:"w-full max-w-[325px] sm:mr-[8px] ".concat(e.inputStyles?"".concat(e.inputStyles.input):""," "),children:(0,l.jsx)("input",{placeholder:null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.placeholder,type:"text",name:"email",id:"signup-email",className:"text-[18px] leading-[24px] w-full h-[53px] rounded-[3px] px-[10px] shadow-none transition-all duration-[0.3s] ease-in-out placeholder:text-[#c6c6c6] ".concat(e.inputStyles?"".concat(e.inputStyles.inputText):""," "),disabled:!1,onChange:e=>{e.preventDefault(),f({email:e.target.value})},value:v.email})}),(0,l.jsx)("div",{className:"w-full max-w-[325px] mt-[15px] sm:max-w-[195px] sm:mt-[0px] ".concat(e.inputStyles?"".concat(e.inputStyles.button):""," "),children:(0,l.jsxs)("button",{role:"button",className:"text-[17px] leading-[24px] uppercase text-[#fff] font-normal bg-[#dd0735] w-full h-[53px] border-[0] flex justify-center items-center rounded-[3px] transition-all ease-in-out duration-[0.25s] cursor-pointer hover:text-[#fff] hover:bg-[#bb022a] hover:no-underline focus:text-[#fff] focus:bg-[#bb022a] focus:no-underline",children:[null==e?void 0:null===(a=e.data)||void 0===a?void 0:a.btnLabel,(0,l.jsx)("span",{className:"overflow-hidden animate-spin flex justify-center items-center ".concat(h?"max-w-[17px] w-[17px] h-[17px]":"max-w-[0px] w-[0px] h-[0px]"),children:(0,l.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",version:"1.1",viewBox:"0 0 16 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M6 2c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM12.359 8c0 0 0 0 0 0 0-0.906 0.735-1.641 1.641-1.641s1.641 0.735 1.641 1.641c0 0 0 0 0 0 0 0.906-0.735 1.641-1.641 1.641s-1.641-0.735-1.641-1.641zM10.757 12.243c0-0.821 0.665-1.486 1.486-1.486s1.486 0.665 1.486 1.486c0 0.821-0.665 1.486-1.486 1.486s-1.486-0.665-1.486-1.486zM6.654 14c0-0.743 0.603-1.346 1.346-1.346s1.346 0.603 1.346 1.346c0 0.743-0.603 1.346-1.346 1.346s-1.346-0.603-1.346-1.346zM2.538 12.243c0-0.673 0.546-1.219 1.219-1.219s1.219 0.546 1.219 1.219c0 0.673-0.546 1.219-1.219 1.219s-1.219-0.546-1.219-1.219zM0.896 8c0-0.61 0.494-1.104 1.104-1.104s1.104 0.494 1.104 1.104c0 0.61-0.494 1.104-1.104 1.104s-1.104-0.494-1.104-1.104zM2.757 3.757c0 0 0 0 0 0 0-0.552 0.448-1 1-1s1 0.448 1 1c0 0 0 0 0 0 0 0.552-0.448 1-1 1s-1-0.448-1-1zM14.054 3.757c0 1-0.811 1.811-1.812 1.811s-1.812-0.811-1.812-1.811c0-1.001 0.811-1.811 1.812-1.811s1.812 0.811 1.812 1.811z"})})})]})})]})}),(0,l.jsxs)("div",{className:"pt-[8px] sm:pt-[15px] ".concat(e.inputStyles?"".concat(e.inputStyles.errorTextWrap):""),children:[(0,l.jsx)("span",{className:"text-[18px] leading-[24px] text-[#fff] font-extralight text-center block relative p-0 m-0 ".concat(e.inputStyles?"".concat(e.inputStyles.errorText):""," ").concat(i()["er-msg"]," ").concat(g.show&&!e.data.hideErrorMsgAnimation?"".concat(i().show," overflow-y-hidden "):""),children:null==g?void 0:g.msg}),(null==e?void 0:null===(n=e.data)||void 0===n?void 0:n.demoLabel)&&(null==e?void 0:null===(x=e.data)||void 0===x?void 0:x.demoLink)&&(0,l.jsxs)("p",{className:"text-[16px] text-center text-[#556575] leading-[24px] font-medium m-[0px] pt-[10px]",children:[e.data.desc," ",(0,l.jsx)(s(),{href:"".concat(null!==(p=null==e?void 0:null===(o=e.data)||void 0===o?void 0:o.demoLink)&&void 0!==p?p:"https://www.hexnode.com/mobile-device-management/request-demo/"),className:"text-[16px] text-[#dd0735] font-medium leading-[1] whitespace-nowrap inline-block transition-all duration-[0.3s] ease-in-out pr-[20px] pb-[0px] pl-[5px] relative after:content-[\"\"] after:w-[6px] after:h-[10px] after:absolute after:right-[5px] after:top-[50%] after:bg-[url('https://static.hexnode.com/img/home_page/images/icons/arrow-right.svg')] after:bg-no-repeat after:transition-all after:duration-[0.3s] after:ease-in-out after:translate-y-[-32%] ".concat(i()["right-arrow--hover"]),role:"link",children:null==e?void 0:null===(c=e.data)||void 0===c?void 0:c.demoLabel})]})]})]})};t.Z=e=>{var t,a,n,s;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("section",{className:"bg-[#020a19] flex justify-center items-center h-[400px] sm:h-[330px] ".concat(null!==(n=null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.class_name)&&void 0!==n?n:""," ").concat(null!==(s=null==e?void 0:e.parentCls)&&void 0!==s?s:""),children:(0,l.jsxs)("div",{className:"w-[88%] mx-auto md:max-w-[1300px]",children:[(0,l.jsx)("div",{className:"w-full text-center ",children:(0,l.jsx)("h2",{className:"text-[30px] text-[#fff] font-bold leading-[1.2] text-center mb-[25px] sm:text-[36px]",children:null==e?void 0:null===(a=e.data)||void 0===a?void 0:a.title})}),(0,l.jsx)("div",{className:"max-w-[527px] mx-auto",children:(0,l.jsx)(o,{data:null==e?void 0:e.data})})]})})})}},9517:function(e,t,a){"use strict";var l=a(5893),n=a(5847),s=a(6580),x=a(7294),i=a(1664),r=a.n(i),d=a(1994),o=a.n(d),c=a(5646);t.Z=e=>{var t,a,i,d,p,m,h,u,v,f,g,w;let b=null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.isSmallTitle,j=null==e?void 0:e.bannerStyles,_=null==e?void 0:null===(a=e.data)||void 0===a?void 0:a.bannerHexnodeTableList,N=null==e?void 0:null===(i=e.data)||void 0===i?void 0:i.bannerAlternativeTableList;null==e||null===(d=e.data)||void 0===d||d.isAccolades;let y={backgroundImage:"".concat((0,c.i1)("".concat(e.data.boxgradiant)))},F="".concat(j.boxTextStyle," "),k=e=>{let t=null==e?void 0:e.val;return(0,l.jsxs)("div",{className:"flex flex-col items-center md:items-baseline ".concat(o()["accolades-content"]),children:[(0,l.jsx)("div",{className:"flex mb-[15px]",children:(0,l.jsx)("div",{className:"flex items-center min-w-[82px] max-w-[156px] max-h-[25px] w-full h-full",children:(0,l.jsx)(n.Z,{src:"".concat(null==t?void 0:t.logo),alt:"".concat(null==t?void 0:t.logo_alt),width:"".concat(null==t?void 0:t.width),height:"".concat(null==t?void 0:t.height),className:"w-full max-w-full h-[25px] object-cover"})})}),(0,l.jsx)("div",{className:"",children:(0,l.jsx)("p",{className:"text-[14px] leading-[22px] text-[rgb(255,255,255,60%)] text-center md:text-left",children:"".concat(null==t?void 0:t.description)})})]})};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("section",{className:"".concat(j.bannerSection),children:(0,l.jsx)("div",{className:"w-[88%] max-w-[1300px] mx-auto",children:(0,l.jsxs)("div",{className:"".concat(j.bannerSecWrap),children:[(0,l.jsxs)("div",{className:"".concat(j.bannerSecLeft),children:[(0,l.jsx)("div",{className:"",children:(0,l.jsx)("div",{className:"".concat(j.bannerSecLeftHeader),children:b?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h1",{className:"".concat(j.bannerSecLeftHeaderSmallTitle),children:null==e?void 0:null===(p=e.data)||void 0===p?void 0:p.smallTitle}),(0,l.jsx)("h2",{className:"".concat(j.bannerSecLeftHeaderTitle),children:null==e?void 0:null===(m=e.data)||void 0===m?void 0:m.title})]}):(0,l.jsx)("h1",{className:"".concat(j.bannerSecLeftHeaderTitle),children:null==e?void 0:null===(h=e.data)||void 0===h?void 0:h.title})})}),(null==e?void 0:null===(u=e.data)||void 0===u?void 0:u.desc)&&(0,l.jsx)("div",{className:"".concat(j.bannerSecLeftBody),children:(0,l.jsx)("p",{className:"".concat(j.bannerSecLeftBodyDesc),children:null==e?void 0:null===(v=e.data)||void 0===v?void 0:v.desc})}),(0,l.jsxs)("div",{className:"banner-sec-left__footer",children:[(0,l.jsx)(s.l,{data:e.data.signup,inputStyles:null==e?void 0:null===(f=e.bannerStyles)||void 0===f?void 0:f.bannerSecLeftFooterForm}),(null==e?void 0:null===(g=e.data)||void 0===g?void 0:g.isbottomSignupCntnt)&&(0,l.jsx)("div",{className:"flex max-xl:justify-center",children:(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("span",{className:"flex w-[10px] h-[7px] mr-[5px]",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10.674",height:"7.046",viewBox:"0 0 10.674 7.046",children:(0,l.jsx)("path",{id:"Check",d:"M310,413.589l3.422,3.121,6.578-6",transform:"translate(-309.663 -410.34)",fill:"none",stroke:"#bfc1c5",strokeWidth:"1"})})}),(0,l.jsx)("p",{className:"text-[14px] leading-[18px] text-[#FFFFFF] opacity-75 font-normal text-left",children:null==e?void 0:null===(w=e.data)||void 0===w?void 0:w.bottomSignupCntnt})]})})]})]}),(0,l.jsx)("div",{className:"".concat(j.bannerSecRight),children:(()=>{var t,a,s,i,r,d,c,p,m,h,u,v;switch(null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.isBannerType){case"compareTable":return(0,l.jsxs)("div",{className:"flex max-md:items-center flex-col md:flex-row ",children:[(0,l.jsxs)("div",{className:"relative z-[2] flex flex-col items-center max-[360px]:max-w-[270px] max-w-[300px] rounded-[15px] md:rounded-[15px_15px_0px_15px] shadow-[0px_14px_99px_#74A3FF80]",children:[(0,l.jsx)("div",{className:"flex bg-[#020A19] max-w-[300px] min-h-[75px] w-full p-[25px_0px] rounded-t-[15px]",children:(0,l.jsx)("div",{className:"mx-[auto] max-w-[119px] max-h-[24px]",children:(0,l.jsx)(n.Z,{src:"".concat(null==_?void 0:_.productLogo),alt:"".concat(null==_?void 0:_.productLogoAlt),width:119,height:24,className:"w-full h-full object-cover"})})}),(0,l.jsxs)("div",{className:"flex flex-col bg-[#FFFFFF] border-[1px] border-b-0 border-[#F7F7F7] max-[360px]:max-w-[270px] max-[360px]:min-w-[270px]  max-w-[300px] min-w-[300px] rounded-[0px_0px_15px_15px] md:rounded-bl-[15px] md:rounded-br-[0px]",children:[(0,l.jsx)("div",{className:"p-[10px_20px]  relative flex items-center justify-center flex-wrap border-b-[1px] border-b-[#F7F7F7]  min-h-[94px]",children:null==_?void 0:_.platform.map((e,t)=>(0,l.jsx)(x.Fragment,{children:(0,l.jsx)("span",{className:"p-[5px_10px] bg-[#ffffff] border-[1px] m-[5px_5px] border-[#EEEEEE] rounded-[14px] text-[14px] leading-[14px] font-semibold",children:e})},t))}),(0,l.jsx)("div",{className:"flex items-center justify-center p-[15px_40px] border-b-[1px] border-b-[#F7F7F7] min-h-[70px]",children:(0,l.jsx)("p",{className:"text-[14px] leading-[18px] text-[#020A19] text-center font-normal",children:null==_?void 0:_.pricingPlanDesc})}),(null==_?void 0:_.isPricing)?(0,l.jsx)(l.Fragment,{children:null==_?void 0:_.pricing.map((e,t)=>(0,l.jsx)(x.Fragment,{children:(0,l.jsxs)("div",{className:"flex flex-col items-center justify-center p-[15px_40px] border-b-[1px] border-b-[#F7F7F7] last:rounded-[0px_0px_15px_15px] last:md:rounded-bl-[15px] last:md:rounded-br-[0px]",children:[(0,l.jsx)("p",{className:"text-[14px] leading-[22px] text-center font-normal text-[#020A19]",children:e.text}),(0,l.jsx)("span",{className:"text-[32px] leading-[40px] text-center font-bold text-[#0449D1]",children:e.price})]})},t))}):(0,l.jsx)(l.Fragment,{children:null==_?void 0:_.rating.map((e,t)=>{var a;return(0,l.jsx)(x.Fragment,{children:(0,l.jsxs)("div",{className:"flex flex-col items-center justify-center p-[15px_40px] border-b-[1px] border-b-[#F7F7F7] last:rounded-[0px_0px_15px_15px] last:md:rounded-bl-[15px] last:md:rounded-br-[0px]",children:[(0,l.jsx)("p",{className:"text-[50px] leading-[63px] text-center font-bold text-[#FFAF15]",children:e.value}),(0,l.jsx)("div",{className:"flex",children:null==e?void 0:null===(a=e.stars)||void 0===a?void 0:a.map((e,t)=>(0,l.jsx)(x.Fragment,{children:(0,l.jsx)("div",{children:(0,l.jsx)(n.Z,{src:"".concat(null==e?void 0:e.icon),alt:"".concat(null==e?void 0:e.iconAlt),width:19,height:17,className:"w-full h-full object-cover"})})},t))}),(0,l.jsx)("div",{className:"mt-[10px]",children:(0,l.jsx)("p",{className:"text-[14px] leading-[18px] text-center font-normal text-[#020A19]",children:null==e?void 0:e.ratingText})})]})},t)})})]})]}),(0,l.jsxs)("div",{className:"relative z-[1]  flex flex-col items-center rounded-[0px_0px_15px_0px] md:ml-[-1px]  max-[360px]:max-w-[270px] max-w-[300px] max-md:pt-[15px]",children:[(0,l.jsx)("div",{className:"flex max-[360px]:max-w-[270px] max-w-[300px] min-h-[75px] w-full p-[25px_0px_20px] md:p-[25px_0px] mx-[auto]",children:(0,l.jsx)("div",{className:"flex max-w-[119px] max-h-[24px] mx-[auto]",children:(null==N?void 0:N.productTitle)?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("span",{className:"text-[#F7F7F7] text-[28px] leading-[35px] text-center text-regular flex items-center",children:N.productTitle})}):(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(n.Z,{src:"".concat(null==N?void 0:N.productLogo),alt:"".concat(null==N?void 0:N.productLogoAlt),width:119,height:24,className:"w-full h-full"})})})}),(0,l.jsxs)("div",{className:"flex flex-col bg-[#F7F7F7] border-[1px] border-b-0 boder-[#E9E9E9] max-[360px]:max-w-[270px] max-w-[300px] max-[360px]:min-w-[270px] min-w-[300px] rounded-[0px_0px_15px_15px] md:rounded-[0px_0px_15px_0px]",children:[(0,l.jsx)("div",{className:"p-[10px_20px]  relative flex items-center justify-center flex-wrap border-b-[1px] border-b-[#E9E9E9]  min-h-[94px]",children:null==N?void 0:N.platform.map((e,t)=>(0,l.jsx)(x.Fragment,{children:(0,l.jsx)("span",{className:"p-[5px_10px] bg-[#F7F7F7] border-[1px] m-[5px_5px] border-[#E6E6E6] rounded-[14px] text-[14px] leading-[18px] font-semibold",children:e})},t))}),(0,l.jsx)("div",{className:"flex items-center justify-center p-[15px_40px] border-b-[1px] border-b-[#E9E9E9] min-h-[70px]",children:(0,l.jsx)("p",{className:"text-[14px] leading-[28px] text-center font-normal",children:null==N?void 0:N.pricingPlanDesc})}),(null==N?void 0:N.isPricing)?(0,l.jsx)(l.Fragment,{children:null==N?void 0:N.pricing.map((e,t)=>(0,l.jsx)(x.Fragment,{children:(0,l.jsxs)("div",{className:"flex flex-col items-center justify-center p-[15px_40px] border-b-[1px] border-b-[#E9E9E9] last:rounded-b-[15px] last:md:rounded-br-[15px] last:md:rounded-bl-[0px] ",children:[(0,l.jsx)("p",{className:"text-[14px] leading-[22px] text-center font-normal text-[#020A19]",children:e.text}),(0,l.jsx)("span",{className:"text-[32px] leading-[40px] text-center font-bold text-[#020A19]",children:e.price})]})},t))}):(0,l.jsx)(l.Fragment,{children:null==N?void 0:N.rating.map((e,t)=>{var a;return(0,l.jsx)(x.Fragment,{children:(0,l.jsxs)("div",{className:"flex flex-col items-center justify-center p-[15px_40px] border-b-[1px] border-b-[#F7F7F7] last:rounded-b-[15px] last:md:rounded-br-[15px] last:md:rounded-bl-[0px] ",children:[(0,l.jsx)("p",{className:"text-[50px] leading-[63px] text-center font-bold text-[rgba(51,51,51,0.8)]",children:e.value}),(0,l.jsx)("div",{className:"flex",children:null==e?void 0:null===(a=e.stars)||void 0===a?void 0:a.map((e,t)=>(0,l.jsx)(x.Fragment,{children:(0,l.jsx)("div",{children:(0,l.jsx)(n.Z,{src:"".concat(null==e?void 0:e.icon),alt:"".concat(null==e?void 0:e.iconAlt),width:19,height:17,className:"w-full h-full object-cover"})})},t))}),(0,l.jsx)("div",{className:"mt-[10px]",children:(0,l.jsx)("p",{className:"text-[14px] leading-[18px] text-center font-normal text-[#020A19]",children:null==e?void 0:e.ratingText})})]})},t)})})]})]})]});case"AndroidMDM":return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"mb-[25px] md:mb-[40px] xl:mb-0 xl:pl-[40px] max-lg:w-full xl:order-2 flex-1 2xl:ml-auto min-h-[310px] lg:min-h-[518px]",children:(0,l.jsxs)("figure",{className:"relative flex justify-center items-center max-w-[340px] xl:max-w-[553px] xl:mr-[64px] xl:ml-auto mx-auto ",children:[(0,l.jsxs)("span",{className:"absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-0",children:[(0,l.jsx)("svg",{className:"w-[172px] lg:w-[279px] lg:h-[279px] h-[172px] animate-[spin_40s_infinite_linear]",xmlns:"http://www.w3.org/2000/svg",width:"279",height:"279",viewBox:"0 0 279 279",children:(0,l.jsxs)("g",{fill:"none",stroke:"#fff",strokeLinecap:"round",strokeWidth:"1",strokeDasharray:"12 20",opacity:"0.75",children:[(0,l.jsx)("circle",{cx:"139.5",cy:"139.5",r:"139.5",stroke:"none"}),(0,l.jsx)("circle",{cx:"139.5",cy:"139.5",r:"139",fill:"none"})]})})," "]}),(0,l.jsx)("span",{className:"absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-0",children:(0,l.jsx)("svg",{className:"w-[240px] h-[240px] lg:w-[389px] lg:h-[389px] rotate-180 animate-[spin_40s_infinite_linear]",xmlns:"http://www.w3.org/2000/svg",width:"389",height:"389",viewBox:"0 0 389 389",children:(0,l.jsxs)("g",{fill:"none",stroke:"#fff",strokeLinecap:"round",strokeWidth:"1",strokeDasharray:"12 20",opacity:"0.5",children:[(0,l.jsx)("circle",{cx:"194.5",cy:"194.5",r:"194.5",stroke:"none"}),(0,l.jsx)("circle",{cx:"194.5",cy:"194.5",r:"194",fill:"none"})]})})}),(0,l.jsx)("span",{className:"absolute overflow-hidden top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-0",children:(0,l.jsx)("svg",{className:"w-[308px] h-[308px] lg:w-[503px] lg:h-[503px]  animate-[spin_40s_infinite_linear]",xmlns:"http://www.w3.org/2000/svg",width:"503",height:"503",viewBox:"0 0 503 503",children:(0,l.jsxs)("g",{fill:"none",stroke:"#fff",strokeLinecap:"round",strokeWidth:"1",strokeDasharray:"12 20",opacity:"0.25",children:[(0,l.jsx)("circle",{cx:"251.5",cy:"251.5",r:"251.5",stroke:"none"}),(0,l.jsx)("circle",{cx:"251.5",cy:"251.5",r:"251",fill:"none"})]})})}),(0,l.jsx)("div",{style:y,className:"".concat(F," max-w-[144px] lg:max-w-[222px]  ").concat(o()["gradiant-box__up"]),children:(0,l.jsx)("span",{className:"text-[10px] lg:text-[14px] leading-[14px] lg:leading-[20px] font-[600] text-white block relative",children:e.data.upperText})}),(0,l.jsx)("div",{style:y,className:"".concat(F," max-w-[160px] lg:max-w-[245px] ").concat(o()["gradiant-box__middle"]),children:(0,l.jsx)("span",{className:"text-[10px] lg:text-[14px] leading-[14px] lg:leading-[20px] font-[600] text-white block relative",children:e.data.middleText})}),(0,l.jsx)("div",{style:y,className:"".concat(F," max-w-[173px] lg:max-w-[255px]  ").concat(o()["gradiant-box__bottom"]),children:(0,l.jsx)("span",{className:"text-[10px] lg:text-[14px] leading-[14px] lg:leading-[20px] font-[600] text-white block relative",children:e.data.lowerText})}),(0,l.jsx)("div",{className:"relative max-w-[162px] lg:max-w-[270px] min-h-[310px] lg:min-h-[518px]",children:(0,l.jsx)(n.Z,{src:null==e?void 0:null===(a=e.data)||void 0===a?void 0:a.bannerImageSrc,alt:"".concat(null==e?void 0:null===(s=e.data)||void 0===s?void 0:s.bannerImgAlt),width:270,height:518,priority:!0,quality:"90",className:"w-full h-full object-cover"})})]})})});case"UEM":return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"w-full max-w-[610px] relative mx-auto",children:[(0,l.jsx)("div",{className:"w-full h-full max-w-[610px]",children:(0,l.jsx)(n.Z,{src:null==e?void 0:null===(i=e.data)||void 0===i?void 0:i.bannerBgOverlayImgSrc,alt:"".concat(null==e?void 0:null===(r=e.data)||void 0===r?void 0:r.bannerImgAlt),width:610,height:465,priority:!0,quality:"90",className:"w-full h-full"})}),(0,l.jsx)("div",{className:"absolute w-full h-full top-[0px] z-1 pointer-events-none",children:(0,l.jsx)(n.Z,{src:null==e?void 0:null===(d=e.data)||void 0===d?void 0:d.bannerImageSrc,alt:"".concat(null==e?void 0:null===(c=e.data)||void 0===c?void 0:c.bannerImgAlt),width:393,height:753,priority:!0,quality:"90",className:"w-full h-full"})}),(0,l.jsxs)("div",{className:"group flex bg-[#FCD598] rounded-[21px] p-[5px_10px_5px_25px] sm:p-[10px_20px_10px_45px] absolute top-[14%] left-[5%] sm:left-[13%] md:left-[6%] overflow-hidden ".concat(o()["tick-animate-wrap"]),children:[(0,l.jsx)("div",{className:"w-[19px] h-[19px] sm:w-[33px] flex items-center sm:h-[33px] bg-[#FFFFFF] rounded-[21px] absolute left-[2%] top-[50%] translate-x-[-2%] translate-y-[-50%] group-hover:scale-[20] ".concat(o()["tick-animate"])}),(0,l.jsx)("div",{className:"w-[19px] h-[19px] sm:w-[33px] sm:h-[33px] absolute flex items-center justify-center left-[2%] top-[50%] translate-x-[-2%] translate-y-[-50%] ",children:(0,l.jsx)("div",{className:"w-[8px] h-[4px] sm:w-[14px] sm:h-[8px] justify-center items-center flex",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16.188",height:"11.021",viewBox:"0 0 16.188 11.021",className:"",children:(0,l.jsx)("path",{id:"Path_4891","data-name":"Path 4891",d:"M-1939.354-218.176l5.416,5.14,9.4-8.917",transform:"translate(1940.042 222.678)",fill:"none",stroke:"#db962c",strokeWidth:"2"})})})}),(0,l.jsx)("span",{className:"text-[8px] leading-[11px] min-[391px]:text-[11px] min-[391px]:leading-[14px] text-[#020A19] font-normal min-[480px]:text-[16px] min-[480px]:leading-[18px] md:text-[20px] md:leading-[21px] text-left z-1 ".concat(o().hover__text),children:null==e?void 0:null===(p=e.data)||void 0===p?void 0:p.upperText})]}),(0,l.jsxs)("div",{className:"group flex bg-[#C3E1E7] rounded-[21px] p-[5px_10px_5px_25px] sm:p-[10px_20px_10px_45px] absolute top-[40%] right-[-2%] sm:right-[-1%] md:right-[-6%] overflow-hidden ".concat(o()["tick-animate-wrap"]),children:[(0,l.jsx)("div",{className:"w-[19px] h-[19px] sm:w-[33px] flex items-center sm:h-[33px] bg-[#FFFFFF] rounded-[21px] absolute left-[2%] top-[50%] translate-x-[-2%] translate-y-[-50%] group-hover:scale-[20] ".concat(o()["tick-animate"])}),(0,l.jsx)("div",{className:"w-[19px] h-[19px] sm:w-[33px] sm:h-[33px] absolute flex items-center justify-center left-[2%] top-[50%] translate-x-[-2%] translate-y-[-50%]",children:(0,l.jsx)("div",{className:"w-[8px] h-[4px] sm:w-[14px] sm:h-[8px] justify-center items-center flex",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16.188",height:"11.021",viewBox:"0 0 16.188 11.021",className:"",children:(0,l.jsx)("path",{id:"Path_4891","data-name":"Path 4891",d:"M-1939.354-218.176l5.416,5.14,9.4-8.917",transform:"translate(1940.042 222.678)",fill:"none",stroke:"#44aec4",strokeWidth:"2"})})})}),(0,l.jsx)("span",{className:"text-[8px] leading-[11px] min-[391px]:text-[11px] min-[391px]:leading-[14px] text-[#020A19] font-normal min-[480px]:text-[16px] min-[480px]:leading-[18px] md:text-[20px] md:leading-[21px] text-left z-1 ".concat(o().hover__text),children:null==e?void 0:null===(m=e.data)||void 0===m?void 0:m.middleText})]}),(0,l.jsxs)("div",{className:"group flex bg-[#BCDCBE] rounded-[21px] p-[5px_10px_5px_25px] sm:p-[10px_20px_10px_45px] absolute bottom-[13%] right-[26%] z-2 overflow-hidden ".concat(o()["tick-animate-wrap"]," "),children:[(0,l.jsx)("div",{className:"w-[19px] h-[19px] sm:w-[33px] flex items-center sm:h-[33px] bg-[#FFFFFF] rounded-[21px] absolute left-[2%] translate-x-[-2%] min-[391px]:left-[3%] top-[50%] min-[391px]:top-[51%] min-[391px]:translate-x-[-3%] translate-y-[-50%] min-[391px]:translate-y-[-51%] group-hover:scale-[20] ".concat(o()["tick-animate"])}),(0,l.jsx)("div",{className:"w-[19px] h-[19px] sm:w-[33px] sm:h-[33px] absolute flex items-center justify-center left-[2%] translate-x-[-2%] min-[391px]:left-[3%] top-[50%] min-[391px]:top-[51%] min-[391px]:translate-x-[-3%] translate-y-[-50%] min-[391px]:translate-y-[-51%]",children:(0,l.jsx)("div",{className:"w-[8px] h-[4px] sm:w-[14px] sm:h-[8px] justify-center items-center flex",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16.188",height:"11.021",viewBox:"0 0 16.188 11.021",className:"",children:(0,l.jsx)("path",{id:"Path_4891","data-name":"Path 4891",d:"M-1939.354-218.176l5.416,5.14,9.4-8.917",transform:"translate(1940.042 222.678)",fill:"none",stroke:"#35943b",strokeWidth:"2"})})})}),(0,l.jsx)("span",{className:"text-[8px] leading-[11px] min-[391px]:text-[11px] min-[391px]:leading-[14px] text-[#020A19] font-normal min-[480px]:text-[16px] min-[480px]:leading-[18px] md:text-[20px] md:leading-[21px] text-left z-1 ".concat(o().hover__text),children:null==e?void 0:null===(h=e.data)||void 0===h?void 0:h.lowerText})]})]})});default:return(0,l.jsx)("div",{className:" ".concat(j.bannerImageWrap),children:(0,l.jsx)(n.Z,{src:"".concat(null==e?void 0:null===(u=e.data)||void 0===u?void 0:u.bannerImageSrc),alt:"".concat(null==e?void 0:null===(v=e.data)||void 0===v?void 0:v.bannerImgAlt),width:597,height:586,quality:"90",className:"w-full h-full object-cover ".concat(j.bannerImage)})})}})()})]})})}),e.data.accolades&&(0,l.jsx)("div",{className:"bg-[#1A1C2B] md:py-[30px]",children:(0,l.jsx)("div",{className:"w-[88%] max-w-[1300px] mx-auto",children:(0,l.jsx)("div",{className:"flex flex-col max-md:items-center md:flex-row  justify-center mx-[0px] md:justify-between md:mx-[-10px] lg:mx-[-25px] xl:mx-[-45px]",children:e.data.accolades.map((e,t)=>(0,l.jsxs)(x.Fragment,{children:[(null==e?void 0:e.logo_link)?(0,l.jsx)(r(),{href:"".concat(null==e?void 0:e.logo_link),target:"".concat(null==e?void 0:e.target),className:"group max-w-[340px] md:max-w-[27%] flex-[0_0_100%] md:flex-[0_0_27%] px-[0px] py-[40px] md:py-[0px] md:px-[10px] lg:px-[25px] xl:px-[45px] ".concat(o()["accolades-wrap"]),children:(0,l.jsx)(k,{val:e})}):(0,l.jsx)("div",{className:"group max-w-[340px] md:max-w-[27%] flex-[0_0_100%] md:flex-[0_0_27%] px-[0px] py-[40px] md:py-[0px] md:px-[10px] lg:px-[25px] xl:px-[45px] ".concat(o()["accolades-wrap"]),children:(0,l.jsx)(k,{val:e})}),(0,l.jsx)("div",{className:"w-[107px] md:w-[1px] bg-[rgb(255,255,255,20%)] basis-[1px] last:hidden"})]},t))})})})]})}},1215:function(e){e.exports={"right-arrow--hover":"SignupStripe_right-arrow--hover__PJdCh","er-msg":"SignupStripe_er-msg__aeULY",show:"SignupStripe_show__iGkKK",reverseHeightAnimate:"SignupStripe_reverseHeightAnimate__1bSJu",heightAnimate:"SignupStripe_heightAnimate__g77Zm"}},1994:function(e){e.exports={"tick-animate-wrap":"banner_tick-animate-wrap__7tPRE","tick-animate":"banner_tick-animate__Cw5VR","accolades-wrap":"banner_accolades-wrap__r_Utd","accolades-content":"banner_accolades-content__tfXj3","gradiant-box__up":"banner_gradiant-box__up__rym4c","gradiant-box__middle":"banner_gradiant-box__middle__1uEgb","gradiant-box__bottom":"banner_gradiant-box__bottom__6LoR9"}}}]);