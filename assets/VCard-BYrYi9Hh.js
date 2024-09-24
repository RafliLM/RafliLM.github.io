import{g as l,m as s,$ as K,u as c,e as n,p as y,a as V,a1 as U,I as m,U as x,F as h,a2 as p,L as P,M as C,a3 as W,N as X,D as Y,a4 as $,a5 as q,a6 as z,B as G,a7 as Q,W as Z,a8 as ee,a9 as ae,X as te,aa as ne,ab as de,Y as ie,O as le,K as se,ac as ce,ad as re,ae as ue,J as ve,af as oe,d as S,ag as me,ah as ye,V as ge,ai as be,aj as ke}from"./index-B9kM9-jx.js";const fe=l()({name:"VCardActions",props:s(),setup(e,d){let{slots:t}=d;return K({VBtn:{slim:!0,variant:"text"}}),c(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Ce=y({opacity:[Number,String],...s(),...V()},"VCardSubtitle"),Ve=l()({name:"VCardSubtitle",props:Ce(),setup(e,d){let{slots:t}=d;return c(()=>n(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},t)),{}}}),Ie=U("v-card-title"),Ae=y({appendAvatar:String,appendIcon:m,prependAvatar:String,prependIcon:m,subtitle:[String,Number],title:[String,Number],...s(),...x()},"VCardItem"),he=l()({name:"VCardItem",props:Ae(),setup(e,d){let{slots:t}=d;return c(()=>{var u;const a=!!(e.prependAvatar||e.prependIcon),g=!!(a||t.prepend),r=!!(e.appendAvatar||e.appendIcon),b=!!(r||t.append),k=!!(e.title!=null||t.title),f=!!(e.subtitle!=null||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[g&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(C,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):n(h,null,[e.prependAvatar&&n(p,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(P,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[k&&n(Ie,{key:"title"},{default:()=>{var i;return[((i=t.title)==null?void 0:i.call(t))??e.title]}}),f&&n(Ve,{key:"subtitle"},{default:()=>{var i;return[((i=t.subtitle)==null?void 0:i.call(t))??e.subtitle]}}),(u=t.default)==null?void 0:u.call(t)]),b&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(C,{key:"append-defaults",disabled:!r,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):n(h,null,[e.appendIcon&&n(P,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(p,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),pe=y({opacity:[Number,String],...s(),...V()},"VCardText"),Pe=l()({name:"VCardText",props:pe(),setup(e,d){let{slots:t}=d;return c(()=>n(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},t)),{}}}),Se=y({appendAvatar:String,appendIcon:m,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:m,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...W(),...s(),...x(),...X(),...Y(),...$(),...q(),...z(),...G(),...Q(),...V(),...Z(),...ee({variant:"elevated"})},"VCard"),Te=l()({name:"VCard",directives:{Ripple:ae},props:Se(),setup(e,d){let{attrs:t,slots:a}=d;const{themeClasses:g}=te(e),{borderClasses:r}=ne(e),{colorClasses:b,colorStyles:k,variantClasses:f}=de(e),{densityClasses:u}=ie(e),{dimensionStyles:i}=le(e),{elevationClasses:T}=se(e),{loaderClasses:B}=ce(e),{locationStyles:D}=re(e),{positionClasses:L}=ue(e),{roundedClasses:N}=ve(e),v=oe(e,t),_=S(()=>e.link!==!1&&v.isLink.value),o=S(()=>!e.disabled&&e.link!==!1&&(e.link||v.isClickable.value));return c(()=>{const R=_.value?"a":e.tag,F=!!(a.title||e.title!=null),M=!!(a.subtitle||e.subtitle!=null),O=F||M,j=!!(a.append||e.appendAvatar||e.appendIcon),E=!!(a.prepend||e.prependAvatar||e.prependIcon),w=!!(a.image||e.image),H=O||E||j,J=!!(a.text||e.text!=null);return me(n(R,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":o.value},g.value,r.value,b.value,u.value,T.value,B.value,L.value,N.value,f.value,e.class],style:[k.value,i.value,D.value,e.style],href:v.href.value,onClick:o.value&&v.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var I;return[w&&n("div",{key:"image",class:"v-card__image"},[a.image?n(C,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(ge,{key:"image-img",cover:!0,src:e.image},null)]),n(be,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),H&&n(he,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),J&&n(Pe,{key:"text"},{default:()=>{var A;return[((A=a.text)==null?void 0:A.call(a))??e.text]}}),(I=a.default)==null?void 0:I.call(a),a.actions&&n(fe,null,{default:a.actions}),ke(o.value,"v-card")]}}),[[ye("ripple"),o.value&&e.ripple]])}),{}}});export{Te as V,Ie as a,Pe as b,he as c,Ve as d,fe as e};