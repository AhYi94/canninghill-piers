(window.webpackJsonp=window.webpackJsonp||[]).push([[26,3,4,5],{230:function(t,e,n){"use strict";n.r(e);n(37);var o={data:function(){return{enquiry:"",name:"",mobile:"",email:"",message:"",isAppointment:"",errors:"",success:!1,policyIsAgree:"",send_brochure:""}},methods:{send:function(){var t=this;(this.errors=[],this.mobile)&&(("65"!==this.mobile.substring(0,2)||this.mobile.length<=7)&&this.errors.push({mobile:"The mobile field contains an invalid number."}));this.isAppointment||this.errors.push({isAppointment:"The make appt field is required."}),this.errors.length||Email.send({Host:"smtp.gmail.com",Username:"gdpropertysg@gmail.com",Password:"rxcketworkcwglyb",To:"gdpropertysg@gmail.com",From:this.email,Subject:"One Bernam "+this.enquiry,Body:"<b>Name: </b>"+this.name+"<br><b> Message: </b>"+this.message+"<br><b>Mobile: </b>"+this.mobile+"<br><b>Appointment: </b>"+this.isAppointment}).then((function(){t.success=!0,t.reset()}))},reset:function(){this.enquiry="",this.name="",this.mobile="",this.email="",this.message="",this.isAppointment="",this.errors="",this.policyIsAgree="",this.send_brochure=""}}},r=n(13),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"space-y-6"},[n("form",{staticClass:"space-y-4",on:{submit:function(e){return e.preventDefault(),t.send.apply(null,arguments)}}},[n("div",{staticClass:"grid grid-cols-1 gap-4 sm:grid-cols-2"},[n("div",{staticClass:"sm:col-span-2"},[n("label",{staticClass:"\n            inline-flex\n            items-center\n            w-full\n            p-4\n            font-medium\n            text-gray-600\n            border\n            rounded-lg\n            border-theme-100\n            bg-theme-50\n          ",attrs:{for:"send_brochure"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.send_brochure,expression:"send_brochure"}],staticClass:"\n              border-gray-300\n              rounded\n              shadow-sm\n              text-theme-600\n              focus:border-theme-300\n              focus:ring\n              focus:ring-theme-200\n              focus:ring-opacity-50\n            ",attrs:{id:"send_brochure",type:"checkbox"},domProps:{checked:Array.isArray(t.send_brochure)?t._i(t.send_brochure,null)>-1:t.send_brochure},on:{change:function(e){var n=t.send_brochure,o=e.target,r=!!o.checked;if(Array.isArray(n)){var l=t._i(n,null);o.checked?l<0&&(t.send_brochure=n.concat([null])):l>-1&&(t.send_brochure=n.slice(0,l).concat(n.slice(l+1)))}else t.send_brochure=r}}}),t._v(" "),n("span",{staticClass:"ml-2"},[t._v("Send me E-Brochure, Floor Plan & Pricing now")])])]),t._v(" "),n("div",[t._m(0),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.enquiry,expression:"enquiry"}],staticClass:"form-input",attrs:{id:"enquiry",required:"required"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.enquiry=e.target.multiple?n:n[0]}}},[n("option",[t._v("Financing")]),t._v(" "),n("option",[t._v("Purchase")]),t._v(" "),n("option",[t._v("View Showflat")]),t._v(" "),n("option",[t._v("I want to purchase, but I have an existing property to sell")]),t._v(" "),n("option",[t._v("Decoupling")]),t._v(" "),n("option",[t._v("CPF Fund Usage")]),t._v(" "),n("option",[t._v("Loan Eligibility (LTV)")]),t._v(" "),n("option",[t._v("Total Debt Servicing Ratio (TDSR)")]),t._v(" "),n("option",[t._v("Additional Buyer Stamp Duty (ABSD)")]),t._v(" "),n("option",[t._v("I want updates only")]),t._v(" "),n("option",[t._v("Others")])])]),t._v(" "),n("div",[t._m(1),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"uppercase form-input",attrs:{id:"name",type:"text",required:"required"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),n("div",[t._m(2),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.mobile,expression:"mobile"}],staticClass:"lowercase form-input",attrs:{id:"mobile",type:"number",required:"required"},domProps:{value:t.mobile},on:{input:function(e){e.target.composing||(t.mobile=e.target.value)}}}),t._v(" "),t._l(t.errors,(function(e,o){return n("div",{key:o},t._l(e,(function(e,o){return n("div",{key:o},["mobile"===o?n("p",{staticClass:"mt-2 text-sm text-red-500"},[t._v("\n              "+t._s(e)+"\n            ")]):t._e()])})),0)}))],2),t._v(" "),n("div",[t._m(3),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-input",attrs:{id:"email",type:"email",required:"required"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"sm:col-span-2"},[n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"message"}},[t._v("Message")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"form-input",domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"sm:col-span-2"},[t._m(4),t._v(" "),n("div",{staticClass:"space-y-2"},[n("label",{staticClass:"flex items-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.isAppointment,expression:"isAppointment"}],staticClass:"mr-2",attrs:{type:"radio",value:"Would like to make an appointment."},domProps:{checked:t._q(t.isAppointment,"Would like to make an appointment.")},on:{change:function(e){t.isAppointment="Would like to make an appointment."}}}),t._v("\n            I have some questions and I would like to make an appointment to\n            discuss in details.\n          ")]),t._v(" "),n("label",{staticClass:"flex items-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.isAppointment,expression:"isAppointment"}],staticClass:"mr-2",attrs:{type:"radio",value:"No appointment required."},domProps:{checked:t._q(t.isAppointment,"No appointment required.")},on:{change:function(e){t.isAppointment="No appointment required."}}}),t._v("\n            No appointment required for now.\n          ")]),t._v(" "),t._l(t.errors,(function(e,o){return n("div",{key:o},t._l(e,(function(e,o){return n("div",{key:o},["isAppointment"===o?n("p",{staticClass:"mt-2 text-sm text-red-500"},[t._v("\n                "+t._s(e)+"\n              ")]):t._e()])})),0)}))],2)]),t._v(" "),n("div",{staticClass:"sm:col-span-2"},[t._m(5),t._v(" "),n("label",{staticClass:"inline-flex items-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.policyIsAgree,expression:"policyIsAgree"}],staticClass:"\n              border-gray-300\n              rounded\n              shadow-sm\n              text-theme-600\n              focus:border-theme-300\n              focus:ring\n              focus:ring-theme-200\n              focus:ring-opacity-50\n            ",attrs:{type:"checkbox",value:"1",required:"required"},domProps:{checked:Array.isArray(t.policyIsAgree)?t._i(t.policyIsAgree,"1")>-1:t.policyIsAgree},on:{change:function(e){var n=t.policyIsAgree,o=e.target,r=!!o.checked;if(Array.isArray(n)){var l=t._i(n,"1");o.checked?l<0&&(t.policyIsAgree=n.concat(["1"])):l>-1&&(t.policyIsAgree=n.slice(0,l).concat(n.slice(l+1)))}else t.policyIsAgree=r}}}),t._v(" "),n("span",{staticClass:"ml-2"},[t._v("I have read and agree to the\n            "),n("NuxtLink",{staticClass:"font-medium underline text-theme-600",attrs:{to:"/privacy-policy"}},[t._v("Privacy Policy")])],1)])])]),t._v(" "),n("button",{staticClass:"\n        inline-flex\n        items-center\n        px-4\n        py-2\n        text-xs\n        font-medium\n        tracking-widest\n        text-white\n        uppercase\n        transition\n        bg-gray-800\n        border border-transparent\n        rounded-md\n        hover:bg-gray-700\n        active:bg-gray-900\n        focus:outline-none focus:border-gray-900 focus:shadow-outline-gray\n        disabled:opacity-25\n      "},[t._v("\n      Submit\n    ")]),t._v(" "),n("button",{staticClass:"\n        inline-flex\n        items-center\n        px-4\n        py-2\n        text-xs\n        font-medium\n        tracking-widest\n        uppercase\n        transition\n        border border-transparent border-gray-800\n        rounded-md\n        hover:border-theme-700 hover:text-theme-700\n        focus:outline-none focus:shadow-outline-gray\n        disabled:opacity-25\n      ",on:{click:function(e){return e.preventDefault(),t.reset.apply(null,arguments)}}},[t._v("\n      Reset\n    ")])]),t._v(" "),n("div",[t.errors.length?n("div",{staticClass:"flex items-center p-4 border rounded-lg bg-red-100"},[n("svg",{staticClass:"w-8 h-8 mr-2 text-red-500",attrs:{fill:"currentColor",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M4 12a8 8 0 1116 0 8 8 0 01-16 0zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.793 6.793a1 1 0 00-1.414 1.414L10.586 12l-1.793 1.793a1 1 0 101.414 1.414L12 13.414l1.793 1.793a1 1 0 001.414-1.414L13.414 12l1.793-1.793a1 1 0 00-1.414-1.414L12 10.586l-1.793-1.793z"}})]),t._v(" "),n("div",{staticClass:"select-none"},[t._v("\n        The given data was invalid.\n        "),t._l(t.errors,(function(e,o){return n("div",{key:o},t._l(e,(function(e,o){return n("div",{key:o},[n("p",[t._v(t._s(e))])])})),0)}))],2)]):t.success?n("div",{staticClass:"flex items-center p-4 border rounded-lg bg-green-100"},[n("svg",{staticClass:"w-8 h-8 mr-2 text-green-500",attrs:{fill:"currentColor",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M12 4a8 8 0 100 16 8 8 0 000-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z"}}),t._v(" "),n("path",{attrs:{d:"M15.707 9.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L11 12.586l3.293-3.293a1 1 0 011.414 0z"}})]),t._v(" "),t._m(6)]):t._e()])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"enquiry"}},[t._v("Enquiry"),n("span",{staticClass:"text-red-500"},[t._v("*")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"name"}},[t._v("Name"),n("span",{staticClass:"text-red-500"},[t._v("*")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"mobile"}},[t._v("Mobile"),n("span",{staticClass:"text-red-500"},[t._v("*")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"email"}},[t._v("Email"),n("span",{staticClass:"text-red-500"},[t._v("*")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"make_appt"}},[t._v("Make an Appointment?"),n("span",{staticClass:"text-red-500"},[t._v("*")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"message"}},[t._v("Acceptance of Privacy Policy"),n("span",{staticClass:"text-red-500"},[t._v("*")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"select-none"},[t._v("\n        Thank you for your enquiry, we will respond to your request soon.\n        "),n("div")])}],!1,null,null,null);e.default=component.exports},231:function(t,e,n){var content=n(234);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("3284173e",content,!0,{sourceMap:!1})},232:function(t,e,n){t.exports=n.p+"img/book-an-appointment.3f56246.jpg"},233:function(t,e,n){"use strict";n(231)},234:function(t,e,n){var o=n(38)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},235:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"p-4 prose bg-gray-200 sm:order-2 md:w-1/2"},[o("img",{staticClass:"w-full",attrs:{src:n(232),alt:"Book An Appointment"}}),t._v(" "),o("p",[t._v("\n            Book An Appointment to view ShowFlat & get VVIP Discounts\n            (Limited Time), Direct Developer Price, & Hardcopy E-Brochure.\n            Guaranteed with Best Price Possible.\n          ")]),t._v(" "),o("p",[t._v("OR")]),t._v(" "),o("p",[t._v("\n            Fill up the form on the left and get a copy of Price, E-Brochure,\n            and Latest Updates!\n          ")]),t._v(" "),o("p",[t._v("Strictly no spam policy.")])])}],r={components:{FormBookAppoinment:n(230).default}},l=(n(233),n(13)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"pb-12"},[n("div",{staticClass:"bg-theme-300 pb-96"}),t._v(" "),n("div",{staticClass:"max-w-6xl px-4 mx-auto -mt-80"},[n("div",{staticClass:"overflow-hidden bg-white rounded-md shadow-lg"},[n("div",{staticClass:"flex flex-wrap"},[t._m(0),t._v(" "),n("div",{staticClass:"p-4 md:order-1 md:w-1/2"},[n("section",{staticClass:"space-y-6"},[n("form-book-appoinment")],1)])])])])])}),o,!1,null,"2a89c52a",null);e.default=component.exports;installComponents(component,{FormBookAppoinment:n(230).default})},246:function(t,e,n){t.exports=n.p+"img/banner-main1.870421f.jpg"},247:function(t,e,n){t.exports=n.p+"img/home-best-price.64ac258.jpg"},248:function(t,e,n){t.exports=n.p+"img/home-book-appointment.8d72b71.jpg"},249:function(t,e,n){t.exports=n.p+"img/home-floor-plan.571b776.jpg"},250:function(t,e,n){t.exports=n.p+"img/tablet.461cce4.png"},265:function(t,e,n){t.exports=n.p+"img/home-artist-impression-thumb-1.68df3ee.jpg"},266:function(t,e,n){t.exports=n.p+"img/home-artist-impression-thumb-2.6d65d3b.jpg"},267:function(t,e,n){t.exports=n.p+"img/home-artist-impression-thumb-3.ba3b694.jpg"},268:function(t,e,n){t.exports=n.p+"img/home-artist-impression-thumb-4.8bcd680.jpg"},269:function(t,e,n){t.exports=n.p+"img/home-direct-developer-sales.a8fa4da.png"},270:function(t,e,n){t.exports=n.p+"img/home-showflat-location-singapore.cc206bc.jpg"},271:function(t,e,n){t.exports=n.p+"img/mcc-houyuan-logo.6655bbb.png"},297:function(t,e,n){var content=n(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("5bd1100a",content,!0,{sourceMap:!1})},329:function(t,e,n){"use strict";n(297)},330:function(t,e,n){var o=n(38),r=n(331),l=n(246),c=o((function(i){return i[1]})),m=r(l);c.push([t.i,"/*purgecss start ignore*/\n#main_banner{\n  background-image:url("+m+")\n}\n\n/*purgecss end ignore*/",""]),c.locals={},t.exports=c},331:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},335:function(t,e,n){"use strict";n.r(e);var o={},r=(n(329),n(13)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("div",{staticClass:"shadow-md",attrs:{"data-v-750ad506":""}},[o("div",{staticClass:"overflow-hidden bg-center bg-no-repeat bg-cover max-h-96",staticStyle:{height:"500px"},attrs:{id:"main_banner","data-v-750ad506":""}},[o("div",{staticClass:"relative w-full h-full max-w-6xl px-4 mx-auto",attrs:{"data-v-750ad506":""}},[o("div",{staticClass:"absolute bottom-0 right-0 w-96",attrs:{"data-v-750ad506":""}},[o("div",{staticClass:"\n              absolute\n              h-40\n              bg-gray-700 bg-opacity-75\n              w-52\n              sm:h-48 sm:w-64 sm:right-28\n              right-20\n              top-2\n            ",attrs:{"data-v-750ad506":""}}),t._v(" "),o("img",{staticClass:"relative ml-auto max-h-64 sm:max-h-80",attrs:{"data-v-750ad506":"",src:n(250),alt:""}}),t._v(" "),o("div",{staticClass:"\n              absolute\n              p-5\n              space-y-4\n              text-center\n              right-20\n              top-3\n              sm:right-28 sm:top-8\n            ",attrs:{"data-v-750ad506":""}},[t._m(0),t._v(" "),o("div",{staticClass:"py-2",attrs:{"data-v-750ad506":""}},[o("NuxtLink",{staticClass:"\n                  px-4\n                  py-2\n                  text-sm\n                  font-medium\n                  text-gray-800\n                  transition\n                  bg-yellow-500\n                  rounded-full\n                  sm:text-base\n                  hover:bg-yellow-600 hover:text-white\n                ",attrs:{"data-v-750ad506":"",to:"/book-an-appointment"}},[t._v("\n                Get Developer Price\n              ")])],1)])])])])]),t._v(" "),t._m(1),t._v(" "),o("div",{staticClass:"max-w-6xl px-4 mx-auto -mt-36"},[o("div",{staticClass:"grid grid-cols-1 gap-6 md:grid-cols-3"},[o("NuxtLink",{attrs:{to:"/floor-plan"}},[o("div",{staticClass:"max-w-sm mx-auto group"},[o("img",{staticClass:"w-full rounded shadow",attrs:{src:n(249),alt:"Floor Plan"}}),t._v(" "),o("div",{staticClass:"px-8 -mt-14"},[o("div",{staticClass:"\n                relative\n                flex flex-wrap\n                items-center\n                justify-center\n                p-5\n                bg-white\n                rounded\n                shadow\n              "},[o("div",{staticClass:"space-y-px text-center"},[o("p",{staticClass:"font-bold text-theme-800"},[t._v("Full Floor Plan")]),t._v(" "),o("p",{staticClass:"\n                    text-xl\n                    font-semibold\n                    text-gray-700\n                    transition\n                    group-hover:text-gray-500\n                  "},[t._v("\n                  Floor Plan\n                ")])])])])])]),t._v(" "),o("NuxtLink",{attrs:{to:"/book-an-appointment"}},[o("div",{staticClass:"max-w-sm mx-auto group"},[o("img",{staticClass:"w-full rounded shadow",attrs:{src:n(248),alt:"Get Direct Discounts"}}),t._v(" "),o("div",{staticClass:"px-8 -mt-14"},[o("div",{staticClass:"\n                relative\n                flex flex-wrap\n                items-center\n                justify-center\n                p-5\n                bg-white\n                rounded\n                shadow\n              "},[o("div",{staticClass:"space-y-px text-center"},[o("p",{staticClass:"font-bold text-theme-800"},[t._v("Book Appointment")]),t._v(" "),o("p",{staticClass:"\n                    text-xl\n                    font-semibold\n                    text-gray-700\n                    transition\n                    group-hover:text-gray-500\n                  "},[t._v("\n                  Get Direct Discounts\n                ")])])])])])]),t._v(" "),o("NuxtLink",{attrs:{to:"/contact-us"}},[o("div",{staticClass:"max-w-sm mx-auto group"},[o("img",{staticClass:"w-full rounded shadow",attrs:{src:n(247),alt:"Daily Price Updates"}}),t._v(" "),o("div",{staticClass:"px-8 -mt-14"},[o("div",{staticClass:"\n                relative\n                flex flex-wrap\n                items-center\n                justify-center\n                p-5\n                bg-white\n                rounded\n                shadow\n              "},[o("div",{staticClass:"space-y-px text-center"},[o("p",{staticClass:"font-bold text-theme-800"},[t._v("Price List")]),t._v(" "),o("p",{staticClass:"\n                    text-xl\n                    font-semibold\n                    text-gray-700\n                    transition\n                    group-hover:text-gray-500\n                  "},[t._v("\n                  Daily Price Updates\n                ")])])])])])])],1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-1",attrs:{"data-v-750ad506":""}},[n("p",{staticClass:"\n                  text-sm\n                  font-medium\n                  tracking-widest\n                  uppercase\n                  sm:text-base\n                  text-theme-100\n                ",attrs:{"data-v-750ad506":""}},[t._v("\n                For Sales Enquiry\n              ")]),t._v(" "),n("a",{staticClass:"text-xl font-semibold text-white sm:text-2xl",attrs:{"data-v-750ad506":"",href:"tel:+6561003337"}},[t._v("+65 6100 3337")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-gradient-to-b from-theme-800 to-theme-500 pb-36"},[n("div",{staticClass:"max-w-6xl px-4 mx-auto"},[n("div",{staticClass:"py-10 space-y-1 text-center text-white"},[n("h3",{staticClass:"text-xl font-semibold sm:text-2xl tracking-widest"},[t._v("\n          One Bernam\n        ")]),t._v(" "),n("h4",{staticClass:"text-xl font-medium"},[t._v("\n          Official Website By MCC Land Pte. Ltd. & Hou Yuan Investment Pte. Ltd.\n        ")])])])])}],!1,null,null,null);e.default=component.exports},347:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("h4",{staticClass:"text-xl font-medium"},[t._v("Latest Updates")]),t._v(" "),n("p",{staticClass:"text-gray-600"},[t._v("Last updated: 20th October 2021")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("strong",[t._v("12-12-2020:")]),t._v(" Check out One Bernam Pricing\n                here, which are updated daily\n              ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("strong",[t._v("11-12-2020:")]),t._v("The latest One Bernam floor\n                plan is now available\n              ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"grid grid-cols-2 gap-2 lg:gap-6 lg:grid-cols-4"},[o("img",{staticClass:"object-cover w-full h-auto rounded",attrs:{src:n(265),alt:""}}),t._v(" "),o("img",{staticClass:"object-cover w-full h-auto rounded",attrs:{src:n(266),alt:""}}),t._v(" "),o("img",{staticClass:"object-cover w-full h-auto rounded",attrs:{src:n(267),alt:""}}),t._v(" "),o("img",{staticClass:"object-cover w-full h-auto rounded",attrs:{src:n(268),alt:""}})])}],r={},l=n(13),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"space-y-12"},[o("HomeMainBanner"),t._v(" "),o("section",[o("div",{staticClass:"px-4 mb-6 text-center"},[o("h3",{staticClass:"text-xl font-semibold sm:text-2xl tracking-widest"},[t._v("\n          One Bernam\n        ")]),t._v(" "),o("p",[t._v("\n          Latest Unit Sold: #10-02 | 20th October 2021\n          "),o("NuxtLink",{staticClass:"font-medium hover:underline text-theme-600",attrs:{to:"/balance-units-chart"}},[t._v("See the Balance Units Chart")])],1)]),t._v(" "),o("div",{staticClass:"py-6 bg-theme-50"},[t._m(0),t._v(" "),o("div",{staticClass:"max-w-6xl px-4 mx-auto prose text-gray-800"},[o("div",{staticClass:"max-w-2xl px-4 mx-auto"},[o("ul",[o("li",[o("strong",[t._v("20-10-2021:")]),t._v(" "),o("NuxtLink",{staticClass:"!text-theme-600",attrs:{to:"/book-an-appointment"}},[t._v("Book an Appointment")]),t._v("\n                to view One Bernam Show Flat and get Direct Developer\n                Price + Discounts.\n              ")],1),t._v(" "),o("li",[o("strong",[t._v("20-10-2021:")]),t._v(" Check our latest\n                "),o("NuxtLink",{staticClass:"!text-theme-600",attrs:{to:"/pricing"}},[t._v("\n                  One Bernam Pricing\n                ")]),t._v("\n                here\n              ")],1),t._v(" "),o("li",[o("strong",[t._v("20-10-2021:")]),t._v(" Check our latest\n                "),o("NuxtLink",{staticClass:"!text-theme-600",attrs:{to:"/balance-units-chart"}},[t._v("\n                  One Bernam Balance Unit\n                ")]),t._v("\n                here\n              ")],1),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),o("li",[o("strong",[t._v("11-12-2020:")]),t._v(" Check your loan eligibility by\n                calculating at\n                "),o("NuxtLink",{staticClass:"!text-theme-600",attrs:{to:"/financing/maximum-loan-eligibility-calculator-tdsr"}},[t._v("Max Loan Eligibility Calculator (TDSR)")]),t._v("\n                on this website.\n              ")],1)])])])])]),t._v(" "),o("section",[o("div",{staticClass:"max-w-6xl px-4 mx-auto"},[o("div",{staticClass:"grid grid-cols-1 gap-6 md:grid-cols-3"},[o("div",{staticClass:"\n              max-w-sm\n              p-6\n              mx-auto\n              space-y-2\n              text-center\n              bg-white\n              rounded-md\n              shadow-md\n            "},[o("img",{staticClass:"mx-auto rounded",attrs:{src:n(271),alt:"One Bernam"}}),t._v(" "),o("p",{staticClass:"text-lg font-semibold"},[t._v("One Bernam")]),t._v(" "),o("div",{staticClass:"space-y-4"},[o("p",[o("NuxtLink",{staticClass:"transition text-theme-600 hover:text-theme-700",attrs:{to:"/developer"}},[t._v("MCC Land Singapore Pte. Ltd.")]),t._v(" and\n                  "),o("NuxtLink",{staticClass:"transition text-theme-600 hover:text-theme-700",attrs:{to:"/developer"}},[t._v("HY Realty Pte. Ltd.")]),t._v("\n                  will collaborate on the development of One Bernam in Tanjong Pagar.\n              ")],1),t._v(" "),o("p",[o("NuxtLink",{staticClass:"transition text-theme-600 hover:text-theme-700",attrs:{to:"/developer"}},[t._v("HY Realty Pte. Ltd. ")]),t._v(" won the government land sales (GLS) bidding from \n                the Urban Redevelopment Authority (URA) for Bernam Street's premium location \n                in Tanjong Pagar for close to S$441 million.\n              ")],1),t._v(" "),o("p",[o("NuxtLink",{staticClass:"transition text-theme-600 hover:text-theme-700",attrs:{to:"/developer"}},[t._v("MCC Land (Singapore) Pte. Ltd. ")]),t._v("\n                  has been actively involved in Singapore's real estate development since its inception in 2010.\n                  The Group has been rated among Singapore's top ten property developers in recent years, receiving \n                  Asia's Top Influential Brands Awards and being ranked 290th on the renowned Fortune Global 500.\n              ")],1),t._v(" "),o("p",[o("NuxtLink",{staticClass:"transition text-theme-600 hover:text-theme-700",attrs:{to:"/developer"}},[t._v("Hao Yuan Realty Pte Ltd")]),t._v(", founded on June 4, 2010, is a rapidly growing and very prospective property \n                developer. HY Realty's main business remains in Singapore's real estate, focusing on executive and private \n                residential condominiums, thanks to a strong history and track record.\n              ")],1),t._v(" "),o("p",[t._v("\n                The corporation has bid $485.81 million for a 36.8-acre land piece in Malaysia's Iskandar Waterfront, \n                with intentions to develop the site into a number of high-end retail, commercial, and residential buildings \n                with MCC Land over the following eight years.\n              ")])])]),t._v(" "),o("div",{staticClass:"\n              max-w-sm\n              p-6\n              mx-auto\n              space-y-2\n              text-center\n              bg-white\n              rounded-md\n              shadow-md\n            "},[o("img",{staticClass:"mx-auto rounded",attrs:{src:n(270),alt:"One Bernam Location Map"}}),t._v(" "),o("p",{staticClass:"text-lg font-semibold"},[t._v("One Bernam Location Map")]),t._v(" "),o("div",{staticClass:"space-y-4"},[o("p",[t._v("\n                One Bernam's unique and sought-after location is unquestionably advantageous to well-heeled investors. \n                "),o("NuxtLink",{staticClass:"transition text-theme-600 hover:text-theme-700",attrs:{to:"/location-map"}},[t._v("One Bernam")]),t._v(" is located in the heart of downtown Tanjong Pagar in Singapore's CDB's premier district 2, \n                which has an excellent mix of both cultural and historical history.\n              ")],1),t._v(" "),o("p",[t._v("\n                Situated right in the heart of Tanjong Pagar in CBD, this up and coming upmarket luxe condo will get to \n                ride on Singapore’s 2 major rejuvenation announced as Downtown Masterplan 2019 to bring about work life balance \n                in this core central area together with the \n                "),o("NuxtLink",{staticClass:"transition text-theme-600 hover:text-theme-700",attrs:{to:"/greater-sountern-water-front"}},[t._v("Greater Southern Waterfront Masterplan")]),t._v(".\n              ")],1),t._v(" "),o("p",[t._v("\n                One Bernam gives you the supremacy in "),o("NuxtLink",{staticClass:"transition text-theme-600 hover:text-theme-700",attrs:{to:"/location-map"}},[t._v("location")]),t._v(" for you to embrace the quality life, history and prosperity of Singapore. \n                One Bernam is located at Bernam Street, right in the heart of the city. With upcoming Prince Edward Road MRT Station (CC32 ) \n                and Tanjong Pagar MRT station (EW15) just 5 minutes stroll from One Bernam, taking the MRT will easily be your preferred mode \n                of transport to travel through the city and other parts of Singapore easily without any hassle.\n              ")],1),t._v(" "),o("p",[t._v("\n                Well, if your preference is to drive, there are several choices you have from Ayer Rajah Expressway (AYE), Marine Coastal Expressway (MCE) \n                and Keppel Road. Northern Singapore and East Coast Park will be linked by the new North-South corridor (NSC) and commences operation by end \n                of 2020. The introduction of NSC is to combine and merge bus and cycling lanes together.\n              ")]),t._v(" "),o("p",[t._v("\n                Situated right in the heart of Singapore and having incomparable connectivity to any part of Singapore will make going out difficult to resist. \n                Discover more exciting amenities in Tanjong Pagar by exploring our \n                "),o("NuxtLink",{staticClass:"transition text-theme-600 hover:text-theme-700",attrs:{to:"/location-map"}},[t._v("One Bernam location map")]),t._v(".\n              ")],1)])]),t._v(" "),o("div",{staticClass:"\n              max-w-sm\n              p-6\n              mx-auto\n              space-y-2\n              text-center\n              bg-white\n              rounded-md\n              shadow-md\n            "},[o("img",{staticClass:"mx-auto rounded",attrs:{src:n(269),alt:"One Bernam Showflat"}}),t._v(" "),o("p",{staticClass:"text-lg font-semibold"},[t._v("One Bernam Showflat")]),t._v(" "),o("div",{staticClass:"space-y-4"},[o("p",[t._v("\n                Secure your\n                "),o("NuxtLink",{staticClass:"transition text-theme-600 hover:text-theme-700",attrs:{to:"/book-an-appointment"}},[t._v("One Bernam Showflat appointment here")]),t._v(", register via our official site. Or contact us at +65 6100\n                3337 before making your way down the showflat. Showflat will\n                be closed on certain days due to routine maintenance work or\n                developer hosting own private events which is close to public.\n                Therefore, interested buyers are advice to obtain\n                anappointment online before proceeding.\n              ")],1),t._v(" "),o("p",[t._v("\n                Due to COVID19, there will be LIMITED time slot per day,\n                please reserve an appointment online before making your way\n                down to One Bernam ShowFlat.\n              ")]),t._v(" "),o("p",[t._v("\n                All registrants who have\n                "),o("NuxtLink",{staticClass:"transition text-theme-600 hover:text-theme-700",attrs:{to:"/book-an-appointment"}},[t._v("registered an appointment here")]),t._v("\n                will receive Best Developer Pricing and COMMISION are\n                NON-payable. Please be advise that units for sale at \n                One Bernam are on first come first serve basis. Reservations of unit\n                is only up to 2 hours and subjected to management’s\n                authorization.\n              ")],1),t._v(" "),o("p",[t._v("\n                Any price changes will be subjected to changes without any\n                prior notice.\n              ")])])])])])]),t._v(" "),o("section",[o("div",{staticClass:"py-12 bg-brown-700"},[o("div",{staticClass:"max-w-6xl px-4 mx-auto"},[o("div",{staticClass:"\n              flex flex-wrap\n              items-center\n              justify-between\n              p-6\n              border\n              rounded-md\n              sm:col-span-2\n              border-brown-400\n            "},[o("h1",{staticClass:"text-3xl font-bold text-white"},[t._v("\n              Book An Appointment To Get Direct Developer Price\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"\n                inline-block\n                font-medium\n                text-white\n                transition\n                rounded\n                bg-brown-900\n                hover:bg-yellow-900\n                px-6\n                py-3\n              ",attrs:{to:"/book-an-appointment"}},[t._v("Book an Appointment")])],1)])])]),t._v(" "),o("section",[o("div",{staticClass:"max-w-6xl px-4 mx-auto prose"},[o("div",[o("h3",{staticClass:"text-xl font-semibold sm:text-2xl text-center"},[t._v("\n            Right at the Heart of Tanjong Pagar\n          ")]),t._v(" "),o("p",[t._v("\n           Many people are familiar with Bernam Street. "),o("NuxtLink",{staticClass:"transition text-theme-600 hover:text-theme-700",attrs:{to:"/location-map"}},[t._v("One Bernam")]),t._v(" is located in District 2 Tanjong Pagar, within the Anson precinct, \n           directly in the heart of the CBD. Tanjong Pagar MRT Station (EW15) and the upcoming Prince Edward Road MRT Station are both \n           about a 5-minute walk away (CC32).\n           ")],1),t._v(" "),o("p",[t._v("\n             Major highways such as Keppel and Anson Road, as well as major expressways such as the Marina Coastal Expressway (MCE) \n             and the Ayer Rajah Expressway, will make this new mixed development extremely accessible (AYE). The proposed bicycle network \n             in the Rail Corridor at the former Tanjong Pagar Railway Station and the Central Business District will be effectively connected \n             and easily accessible to One Bernam (CBD).\n             ")]),t._v(" "),o("p",[t._v("\n               One Bernam will contain at least 351 residential units and a commercial and retail level on the first floor. This much-anticipated \n               mixed-use complex will provide unending excitement for city-dwellers, with convenient access to work in the CBD and a dynamic lifestyle \n               offering and amenities available 24 hours a day, seven days a week. \n               ")]),t._v(" "),o("br"),t._v(" "),o("h3",{staticClass:"text-xl font-semibold sm:text-2xl text-center"},[t._v("\n                 Surrounded by Trendy Malls & Grade-A Offices\n                    ")]),t._v(" "),o("p",[o("NuxtLink",{staticClass:"transition text-theme-600 hover:text-theme-700",attrs:{to:"/location-map"}},[t._v("One Bernam")]),t._v("     \n                  is only a short distance away from local shopping malls such as Icon Village, 100AM, Parco, Amara Shopping Centre, and \n                  Tanjong Pagar Plaza, which can provide you with a fashionable and dynamic lifestyle with a diverse range of facilities, \n                  F&B, and retail outlets.\n                  ")],1),t._v(" "),o("p",[t._v("\n                    Every second of your attention is drawn to themed coffee shops/cafés and prominent fashion labels. If you like lots of green places \n                    and prefer to relax outside, Tras Link Park is just a short distance away. One Bernam Singapore is flanked by many fascinating malls \n                    and numerous Grade A office skyscrapers, providing investors with a ready pool of quality expat tenants.\n                    ")]),t._v(" "),o("p",[t._v("\n                      One Bernam is ideal for those seeking superior connectedness and vibrant lifestyles in the heart of the city. All interested parties \n                      can get a free copy of the\n                      "),o("NuxtLink",{staticClass:"transition text-theme-600 hover:text-theme-700",attrs:{to:"/e-brochure"}},[t._v("One Bernam E-Brochure")]),t._v(" and\n                        "),o("NuxtLink",{staticClass:"transition text-theme-600 hover:text-theme-700",attrs:{to:"/floor-plan"}},[t._v("Floor Plan")]),t._v(" by clicking here.\n                      ")],1)]),t._v(" "),t._m(3)])]),t._v(" "),o("BookAppointment")],1)])}),o,!1,null,null,null);e.default=component.exports;installComponents(component,{HomeMainBanner:n(335).default,BookAppointment:n(235).default})}}]);