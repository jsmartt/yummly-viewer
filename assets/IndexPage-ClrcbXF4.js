import{c as le,e as re,f as T,a as c,h as m,j as we,E as ke,g as E,s as ne,i as Ve,r as S,o as fe,w as N,V as Be,b as ve,W as Re,X as Ae,Y as Se,d as $e,q as ze,Z as De,y as Q,_ as Ee,z as Ne,m as Oe,K,R as te,$ as D,O as me,N as U,M as ue,a0 as ge,U as Ie,a1 as Pe,C as je,a2 as Me,L as Te,Q as Le}from"./index-bP9yDrhF.js";import{h as H,u as Qe,e as Ue,b as He,Q as I,f as Ke,R as Ye,i as Ze,j as We,k as Xe}from"./Ripple-Dq0VxWbS.js";import{u as _e,a as qe,h as Je,c as Fe}from"./collections-0AvtWIp_.js";const Ge=le({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:t}){const{proxy:{$q:n}}=E(),l=re(we,T);if(l===T)return console.error("QPage needs to be a deep child of QLayout"),T;if(re(ke,T)===T)return console.error("QPage needs to be child of QPageContainer"),T;const u=c(()=>{const d=(l.header.space===!0?l.header.size:0)+(l.footer.space===!0?l.footer.size:0);if(typeof e.styleFn=="function"){const C=l.isContainer.value===!0?l.containerHeight.value:n.screen.height;return e.styleFn(d,C)}return{minHeight:l.isContainer.value===!0?l.containerHeight.value-d+"px":n.screen.height===0?d!==0?`calc(100vh - ${d}px)`:"100vh":n.screen.height-d+"px"}}),a=c(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>m("main",{class:a.value,style:u.value},H(t.default))}}),et={xs:8,sm:10,md:14,lg:20,xl:24},tt=le({name:"QChip",props:{..._e,...Qe,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:t,emit:n}){const{proxy:{$q:l}}=E(),r=qe(e,l),u=Ue(e,et),a=c(()=>e.selected===!0||e.icon!==void 0),d=c(()=>e.selected===!0?e.iconSelected||l.iconSet.chip.selected:e.icon),C=c(()=>e.iconRemove||l.iconSet.chip.remove),k=c(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),_=c(()=>{const v=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(v?` text-${v} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(k.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(r.value===!0?" q-chip--dark q-dark":"")}),V=c(()=>{const v=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},F={...v,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||l.lang.label.remove};return{chip:v,remove:F}});function z(v){v.keyCode===13&&A(v)}function A(v){e.disable||(n("update:selected",!e.selected),n("click",v))}function B(v){(v.keyCode===void 0||v.keyCode===13)&&(ne(v),e.disable===!1&&(n("update:modelValue",!1),n("remove")))}function p(){const v=[];k.value===!0&&v.push(m("div",{class:"q-focus-helper"})),a.value===!0&&v.push(m(I,{class:"q-chip__icon q-chip__icon--left",name:d.value}));const F=e.label!==void 0?[m("div",{class:"ellipsis"},[e.label])]:void 0;return v.push(m("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},Ke(t.default,F))),e.iconRight&&v.push(m(I,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&v.push(m(I,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:C.value,...V.value.remove,onClick:B,onKeyup:B})),v}return()=>{if(e.modelValue===!1)return;const v={class:_.value,style:u.value};return k.value===!0&&Object.assign(v,V.value.chip,{onClick:A,onKeyup:z}),He("div",v,p(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[Ye,e.ripple]])}}});let ae,X=0;const q=new Array(256);for(let e=0;e<256;e++)q[e]=(e+256).toString(16).substring(1);const lt=(()=>{const e=typeof crypto<"u"?crypto:typeof window<"u"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const n=new Uint8Array(t);return e.getRandomValues(n),n}}return t=>{const n=[];for(let l=t;l>0;l--)n.push(Math.floor(Math.random()*256));return n}})(),pe=4096;function se(){(ae===void 0||X+16>pe)&&(X=0,ae=lt(pe));const e=Array.prototype.slice.call(ae,X,X+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,q[e[0]]+q[e[1]]+q[e[2]]+q[e[3]]+"-"+q[e[4]]+q[e[5]]+"-"+q[e[6]]+q[e[7]]+"-"+q[e[8]]+q[e[9]]+"-"+q[e[10]]+q[e[11]]+q[e[12]]+q[e[13]]+q[e[14]]+q[e[15]]}function nt(e){return e??null}function he(e,t){return e??(t===!0?`f_${se()}`:null)}function ot({getValue:e,required:t=!0}={}){if(Ve.value===!0){const n=e!==void 0?S(nt(e())):S(null);return t===!0&&n.value===null&&fe(()=>{n.value=`f_${se()}`}),e!==void 0&&N(e,l=>{n.value=he(l,t)}),n}return e!==void 0?c(()=>he(e(),t)):S(`f_${se()}`)}const be=/^on[A-Z]/;function at(){const{attrs:e,vnode:t}=E(),n={listeners:S({}),attributes:S({})};function l(){const r={},u={};for(const a in e)a!=="class"&&a!=="style"&&be.test(a)===!1&&(r[a]=e[a]);for(const a in t.props)be.test(a)===!0&&(u[a]=t.props[a]);n.attributes.value=r,n.listeners.value=u}return Be(l),l(),n}function it({validate:e,resetValidation:t,requiresQForm:n}){const l=re(Re,!1);if(l!==!1){const{props:r,proxy:u}=E();Object.assign(u,{validate:e,resetValidation:t}),N(()=>r.disable,a=>{a===!0?(typeof t=="function"&&t(),l.unbindComponent(u)):l.bindComponent(u)}),fe(()=>{r.disable!==!0&&l.bindComponent(u)}),ve(()=>{r.disable!==!0&&l.unbindComponent(u)})}else n===!0&&console.error("Parent QForm not found on useFormChild()!")}const ye=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,Ce=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,xe=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,J=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,G=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ie={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>ye.test(e),hexaColor:e=>Ce.test(e),hexOrHexaColor:e=>xe.test(e),rgbColor:e=>J.test(e),rgbaColor:e=>G.test(e),rgbOrRgbaColor:e=>J.test(e)||G.test(e),hexOrRgbColor:e=>ye.test(e)||J.test(e),hexaOrRgbaColor:e=>Ce.test(e)||G.test(e),anyColor:e=>xe.test(e)||J.test(e)||G.test(e)},rt=[!0,!1,"ondemand"],ut={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>rt.includes(e)}};function st(e,t){const{props:n,proxy:l}=E(),r=S(!1),u=S(null),a=S(!1);it({validate:p,resetValidation:B});let d=0,C;const k=c(()=>n.rules!==void 0&&n.rules!==null&&n.rules.length!==0),_=c(()=>n.disable!==!0&&k.value===!0&&t.value===!1),V=c(()=>n.error===!0||r.value===!0),z=c(()=>typeof n.errorMessage=="string"&&n.errorMessage.length!==0?n.errorMessage:u.value);N(()=>n.modelValue,()=>{a.value=!0,_.value===!0&&n.lazyRules===!1&&v()});function A(){n.lazyRules!=="ondemand"&&_.value===!0&&a.value===!0&&v()}N(()=>n.reactiveRules,F=>{F===!0?C===void 0&&(C=N(()=>n.rules,A,{immediate:!0,deep:!0})):C!==void 0&&(C(),C=void 0)},{immediate:!0}),N(()=>n.lazyRules,A),N(e,F=>{F===!0?a.value=!0:_.value===!0&&n.lazyRules!=="ondemand"&&v()});function B(){d++,t.value=!1,a.value=!1,r.value=!1,u.value=null,v.cancel()}function p(F=n.modelValue){if(n.disable===!0||k.value===!1)return!0;const i=++d,w=t.value!==!0?()=>{a.value=!0}:()=>{},R=(s,h)=>{s===!0&&w(),r.value=s,u.value=h||null,t.value=!1},$=[];for(let s=0;s<n.rules.length;s++){const h=n.rules[s];let y;if(typeof h=="function"?y=h(F,ie):typeof h=="string"&&ie[h]!==void 0&&(y=ie[h](F)),y===!1||typeof y=="string")return R(!0,y),!1;y!==!0&&y!==void 0&&$.push(y)}return $.length===0?(R(!1),!0):(t.value=!0,Promise.all($).then(s=>{if(s===void 0||Array.isArray(s)===!1||s.length===0)return i===d&&R(!1),!0;const h=s.find(y=>y===!1||typeof y=="string");return i===d&&R(h!==void 0,h),h===void 0},s=>(i===d&&(console.error(s),R(!0)),!1)))}const v=Ae(p,0);return ve(()=>{C!==void 0&&C(),v.cancel()}),Object.assign(l,{resetValidation:B,validate:p}),Se(l,"hasError",()=>V.value),{isDirtyModel:a,hasRules:k,hasError:V,errorMessage:z,validate:p,resetValidation:B}}let ce=[],ct=[];function dt(e){ct.length===0?e():ce.push(e)}function ft(e){ce=ce.filter(t=>t!==e)}function de(e){return e!=null&&(""+e).length!==0}const vt={..._e,...ut,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String},mt=["update:modelValue","clear","focus","blur"];function gt({requiredForAttr:e=!0,tagProp:t,changeEvent:n=!1}={}){const{props:l,proxy:r}=E(),u=qe(l,r.$q),a=ot({required:e,getValue:()=>l.for});return{requiredForAttr:e,changeEvent:n,tag:t===!0?c(()=>l.tag):{value:"label"},isDark:u,editable:c(()=>l.disable!==!0&&l.readonly!==!0),innerLoading:S(!1),focused:S(!1),hasPopupOpen:!1,splitAttrs:at(),targetUid:a,rootRef:S(null),targetRef:S(null),controlRef:S(null)}}function pt(e){const{props:t,emit:n,slots:l,attrs:r,proxy:u}=E(),{$q:a}=u;let d=null;e.hasValue===void 0&&(e.hasValue=c(()=>de(t.modelValue))),e.emitValue===void 0&&(e.emitValue=o=>{n("update:modelValue",o)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:b,onFocusout:x}),Object.assign(e,{clearValue:O,onControlFocusin:b,onControlFocusout:x,focus:h}),e.computedCounter===void 0&&(e.computedCounter=c(()=>{if(t.counter!==!1){const o=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,f=t.maxlength!==void 0?t.maxlength:t.maxValues;return o+(f!==void 0?" / "+f:"")}}));const{isDirtyModel:C,hasRules:k,hasError:_,errorMessage:V,resetValidation:z}=st(e.focused,e.innerLoading),A=e.floatingLabel!==void 0?c(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):c(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),B=c(()=>t.bottomSlots===!0||t.hint!==void 0||k.value===!0||t.counter===!0||t.error!==null),p=c(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),v=c(()=>`q-field row no-wrap items-start q-field--${p.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(A.value===!0?" q-field--float":"")+(i.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(_.value===!0?" q-field--error":"")+(_.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&B.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),F=c(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(_.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),i=c(()=>t.labelSlot===!0||t.label!==void 0),w=c(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&_.value!==!0?` text-${t.labelColor}`:"")),R=c(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:A.value,modelValue:t.modelValue,emitValue:e.emitValue})),$=c(()=>{const o={};return e.targetUid.value&&(o.for=e.targetUid.value),t.disable===!0&&(o["aria-disabled"]="true"),o});function s(){const o=document.activeElement;let f=e.targetRef!==void 0&&e.targetRef.value;f&&(o===null||o.id!==e.targetUid.value)&&(f.hasAttribute("tabindex")===!0||(f=f.querySelector("[tabindex]")),f&&f!==o&&f.focus({preventScroll:!0}))}function h(){dt(s)}function y(){ft(s);const o=document.activeElement;o!==null&&e.rootRef.value.contains(o)&&o.blur()}function b(o){d!==null&&(clearTimeout(d),d=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,n("focus",o))}function x(o,f){d!==null&&clearTimeout(d),d=setTimeout(()=>{d=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,n("blur",o)),f!==void 0&&f())})}function O(o){ne(o),a.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),n("update:modelValue",null),e.changeEvent===!0&&n("change",null),n("clear",t.modelValue),$e(()=>{const f=C.value;z(),C.value=f})}function Y(o){[13,32].includes(o.keyCode)&&O(o)}function Z(){const o=[];return l.prepend!==void 0&&o.push(m("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:Q},l.prepend())),o.push(m("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},P())),_.value===!0&&t.noErrorIcon===!1&&o.push(j("error",[m(I,{name:a.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?o.push(j("inner-loading-append",l.loading!==void 0?l.loading():[m(Ze,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&o.push(j("inner-clearable-append",[m(I,{class:"q-field__focusable-action",name:t.clearIcon||a.iconSet.field.clear,tabindex:0,role:"button","aria-hidden":"false","aria-label":a.lang.label.clear,onKeyup:Y,onClick:O})])),l.append!==void 0&&o.push(m("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:Q},l.append())),e.getInnerAppend!==void 0&&o.push(j("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&o.push(e.getControlChild()),o}function P(){const o=[];return t.prefix!==void 0&&t.prefix!==null&&o.push(m("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&o.push(e.getShadowControl()),e.getControl!==void 0?o.push(e.getControl()):l.rawControl!==void 0?o.push(l.rawControl()):l.control!==void 0&&o.push(m("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},l.control(R.value))),i.value===!0&&o.push(m("div",{class:w.value},H(l.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&o.push(m("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),o.concat(H(l.default))}function oe(){let o,f;_.value===!0?V.value!==null?(o=[m("div",{role:"alert"},V.value)],f=`q--slot-error-${V.value}`):(o=H(l.error),f="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(o=[m("div",t.hint)],f=`q--slot-hint-${t.hint}`):(o=H(l.hint),f="q--slot-hint"));const M=t.counter===!0||l.counter!==void 0;if(t.hideBottomSpace===!0&&M===!1&&o===void 0)return;const W=m("div",{key:f,class:"q-field__messages col"},o);return m("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:Q},[t.hideBottomSpace===!0?W:m(Ee,{name:"q-transition--field-message"},()=>W),M===!0?m("div",{class:"q-field__counter"},l.counter!==void 0?l.counter():e.computedCounter.value):null])}function j(o,f){return f===null?null:m("div",{key:o,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},f)}let g=!1;return ze(()=>{g=!0}),De(()=>{g===!0&&t.autofocus===!0&&u.focus()}),t.autofocus===!0&&fe(()=>{u.focus()}),ve(()=>{d!==null&&clearTimeout(d)}),Object.assign(u,{focus:h,blur:y}),function(){const f=e.getControl===void 0&&l.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...$.value}:$.value;return m(e.tag.value,{ref:e.rootRef,class:[v.value,r.class],style:r.style,...f},[l.before!==void 0?m("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:Q},l.before()):null,m("div",{class:"q-field__inner relative-position col self-stretch"},[m("div",{ref:e.controlRef,class:F.value,tabindex:-1,...e.controlEvents},Z()),B.value===!0?oe():null]),l.after!==void 0?m("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:Q},l.after()):null])}}const ht={name:String};function bt(e){return c(()=>e.name||e.for)}function L(e,t,n,l){const r=[];return e.forEach(u=>{l(u)===!0?r.push(u):t.push({failedPropValidation:n,file:u})}),r}function ee(e){e&&e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),ne(e)}const yt={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},Ct=["rejected"];function xt({editable:e,dnd:t,getFileInput:n,addFilesToQueue:l}){const{props:r,emit:u,proxy:a}=E(),d=S(null),C=c(()=>r.accept!==void 0?r.accept.split(",").map(i=>(i=i.trim(),i==="*"?"*/":(i.endsWith("/*")&&(i=i.slice(0,i.length-1)),i.toUpperCase()))):null),k=c(()=>parseInt(r.maxFiles,10)),_=c(()=>parseInt(r.maxTotalSize,10));function V(i){if(e.value)if(i!==Object(i)&&(i={target:null}),i.target!==null&&i.target.matches('input[type="file"]')===!0)i.clientX===0&&i.clientY===0&&Ne(i);else{const w=n();w&&w!==i.target&&w.click(i)}}function z(i){e.value&&i&&l(null,i)}function A(i,w,R,$){let s=Array.from(w||i.target.files);const h=[],y=()=>{h.length!==0&&u("rejected",h)};if(r.accept!==void 0&&C.value.indexOf("*/")===-1&&(s=L(s,h,"accept",b=>C.value.some(x=>b.type.toUpperCase().startsWith(x)||b.name.toUpperCase().endsWith(x))),s.length===0))return y();if(r.maxFileSize!==void 0){const b=parseInt(r.maxFileSize,10);if(s=L(s,h,"max-file-size",x=>x.size<=b),s.length===0)return y()}if(r.multiple!==!0&&s.length!==0&&(s=[s[0]]),s.forEach(b=>{b.__key=b.webkitRelativePath+b.lastModified+b.name+b.size}),$===!0){const b=R.map(x=>x.__key);s=L(s,h,"duplicate",x=>b.includes(x.__key)===!1)}if(s.length===0)return y();if(r.maxTotalSize!==void 0){let b=$===!0?R.reduce((x,O)=>x+O.size,0):0;if(s=L(s,h,"max-total-size",x=>(b+=x.size,b<=_.value)),s.length===0)return y()}if(typeof r.filter=="function"){const b=r.filter(s);s=L(s,h,"filter",x=>b.includes(x))}if(r.maxFiles!==void 0){let b=$===!0?R.length:0;if(s=L(s,h,"max-files",()=>(b++,b<=k.value)),s.length===0)return y()}if(y(),s.length!==0)return s}function B(i){ee(i),t.value!==!0&&(t.value=!0)}function p(i){ne(i),(i.relatedTarget!==null||Oe.is.safari!==!0?i.relatedTarget!==d.value:document.elementsFromPoint(i.clientX,i.clientY).includes(d.value)===!1)===!0&&(t.value=!1)}function v(i){ee(i);const w=i.dataTransfer.files;w.length!==0&&l(null,w),t.value=!1}function F(i){if(t.value===!0)return m("div",{ref:d,class:`q-${i}__dnd absolute-full`,onDragenter:ee,onDragover:ee,onDragleave:p,onDrop:v})}return Object.assign(a,{pickFiles:V,addFiles:z}),{pickFiles:V,addFiles:z,onDragover:B,onDragleave:p,processFiles:A,getDndNode:F,maxFilesNumber:k,maxTotalSizeNumber:_}}function St(e,t){function n(){const l=e.modelValue;try{const r="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(l)===l&&("length"in l?Array.from(l):[l]).forEach(u=>{r.items.add(u)}),{files:r.files}}catch{return{files:void 0}}}return c(n)}const _t=le({name:"QFile",inheritAttrs:!1,props:{...vt,...ht,...yt,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...mt,...Ct],setup(e,{slots:t,emit:n,attrs:l}){const{proxy:r}=E(),u=gt(),a=S(null),d=S(!1),C=bt(e),{pickFiles:k,onDragover:_,onDragleave:V,processFiles:z,getDndNode:A}=xt({editable:u.editable,dnd:d,getFileInput:Y,addFilesToQueue:Z}),B=St(e),p=c(()=>Object(e.modelValue)===e.modelValue?"length"in e.modelValue?Array.from(e.modelValue):[e.modelValue]:[]),v=c(()=>de(p.value)),F=c(()=>p.value.map(g=>g.name).join(", ")),i=c(()=>Je(p.value.reduce((g,o)=>g+o.size,0))),w=c(()=>({totalSize:i.value,filesNumber:p.value.length,maxFiles:e.maxFiles})),R=c(()=>({tabindex:-1,type:"file",title:"",accept:e.accept,capture:e.capture,name:C.value,...l,id:u.targetUid.value,disabled:u.editable.value!==!0})),$=c(()=>"q-file q-field--auto-height"+(d.value===!0?" q-file--dnd":"")),s=c(()=>e.multiple===!0&&e.append===!0);function h(g){const o=p.value.slice();o.splice(g,1),b(o)}function y(g){const o=p.value.indexOf(g);o!==-1&&h(o)}function b(g){n("update:modelValue",e.multiple===!0?g:g[0])}function x(g){g.keyCode===13&&Q(g)}function O(g){(g.keyCode===13||g.keyCode===32)&&k(g)}function Y(){return a.value}function Z(g,o){const f=z(g,o,p.value,s.value),M=Y();M!=null&&(M.value=""),f!==void 0&&((e.multiple===!0?e.modelValue&&f.every(W=>p.value.includes(W)):e.modelValue===f[0])||b(s.value===!0?p.value.concat(f):f))}function P(){return[m("input",{class:[e.inputClass,"q-file__filler"],style:e.inputStyle})]}function oe(){if(t.file!==void 0)return p.value.length===0?P():p.value.map((o,f)=>t.file({index:f,file:o,ref:this}));if(t.selected!==void 0)return p.value.length===0?P():t.selected({files:p.value,ref:this});if(e.useChips===!0)return p.value.length===0?P():p.value.map((o,f)=>m(tt,{key:"file-"+f,removable:u.editable.value,dense:!0,textColor:e.color,tabindex:e.tabindex,onRemove:()=>{h(f)}},()=>m("span",{class:"ellipsis",textContent:o.name})));const g=e.displayValue!==void 0?e.displayValue:F.value;return g.length!==0?[m("div",{class:e.inputClass,style:e.inputStyle,textContent:g})]:P()}function j(){const g={ref:a,...R.value,...B.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:Z};return e.multiple===!0&&(g.multiple=!0),m("input",g)}return Object.assign(u,{fieldClass:$,emitValue:b,hasValue:v,inputRef:a,innerValue:p,floatingLabel:c(()=>v.value===!0||de(e.displayValue)),computedCounter:c(()=>{if(e.counterLabel!==void 0)return e.counterLabel(w.value);const g=e.maxFiles;return`${p.value.length}${g!==void 0?" / "+g:""} (${i.value})`}),getControlChild:()=>A("file"),getControl:()=>{const g={ref:u.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:e.tabindex};return u.editable.value===!0&&Object.assign(g,{onDragover:_,onDragleave:V,onKeydown:x,onKeyup:O}),m("div",g,[j()].concat(oe()))}}),Object.assign(r,{removeAtIndex:h,removeFile:y,getNativeElement:()=>a.value}),Se(r,"nativeEl",()=>a.value),pt(u)}}),qt='<circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9" fill-opacity=".3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from=".5" to=".5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle>',Ft=le({name:"QSpinnerDots",props:We,setup(e){const{cSize:t,classes:n}=Xe(e);return()=>m("svg",{class:n.value,fill:"currentColor",width:t.value,height:t.value,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",innerHTML:qt})}}),wt={key:0,class:"text-negative"},kt={class:"text-center"},Vt={__name:"LoadFile",setup(e){const t=Fe(),n=S(!1),l=S(null),r=S(null);return N(l,async u=>{if(u){n.value=!0;let a=null;try{a=await u.text()}catch(d){r.value="Failed to load file contents: "+d.message}try{let d=JSON.parse(a);t.loadData(d)}catch(d){r.value="Failed to parse file contents as JSON: "+d.message}n.value=!1}else t.$reset()}),(u,a)=>(K(),te("div",null,[a[6]||(a[6]=D("div",null,[D("h5",{class:"q-mb-sm"},"Step 1: Download your collections"),D("div",null,[me(" To use this site, you must first download your Yummly collections using the "),D("a",{href:"https://chromewebstore.google.com/detail/yummly-collections-downlo/knonlpablinjnhbmcijlifdkghjoeddn"}," Yummly Collections Downloader Chrome extension"),me(". ")])],-1)),D("div",null,[a[4]||(a[4]=D("h5",{class:"q-mb-sm"},"Step 2: Load the file here",-1)),a[5]||(a[5]=D("div",null," The file is loaded in memory on this web page. It is not persisted, so don't refresh the page while you're working. ",-1)),U(_t,{modelValue:l.value,"onUpdate:modelValue":a[2]||(a[2]=d=>l.value=d),label:"Click here to select a file",loading:n.value,disable:n.value,accept:".json",counter:"",filled:"","bottom-slots":""},{prepend:ue(()=>[U(I,{name:"file_upload",onClick:a[0]||(a[0]=ge(()=>{},["stop","prevent"]))})]),error:ue(()=>[r.value?(K(),te("div",wt,Ie(r.value),1)):Pe("",!0),U(I,{name:"file_upload",onClick:a[1]||(a[1]=ge(()=>{},["stop","prevent"]))})]),_:1},8,["modelValue","loading","disable"]),je(D("div",kt,[a[3]||(a[3]=D("div",null,"Loading",-1)),U(Ft,{color:"accent",size:"3em"})],512),[[Me,n.value]])])]))}},Bt={key:0,class:"flex flex-center",style:{width:"100%"}},Rt={key:1},Dt={__name:"IndexPage",setup(e){const t=Fe();return(n,l)=>(K(),Te(Ge,{class:"flex q-pa-md"},{default:ue(()=>[Le(t).loaded?(K(),te("div",Rt," TODO ")):(K(),te("div",Bt,[U(Vt)]))]),_:1}))}};export{Dt as default};