(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{158:function(e,t,n){"use strict";n.r(t);var r=n(168),a=n.n(r),i=n(0),o=n.n(i),c=n(159),l=(n(90),n(169)),u=n(1),s=n.n(u),m=n(36),d=n.n(m),p=(n(160),o.a.createContext({})),g=function(e){return o.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};g.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func};var h=n(8),A=n.n(h),f=c.c.div.withConfig({displayName:"wrapper__Wrapper",componentId:"sc-1x7p3va-0"})(["max-width:",";margin:",";;display:",";justify-content:",";align-items:",";height:100%;"],function(e){return e.isWide?"1200px":"1050px"},function(e){return e.isGapped?"8rem auto 0":"auto"},function(e){return e.isFlex?"flex":"block"},function(e){return e.isFlex?"space-between":"center"},function(e){return e.isFlex,"center"}),w=n(59),x=n(58),b=n(178),M=n.n(b),N=function(e){function t(){return e.apply(this,arguments)||this}return A()(t,e),t.prototype.render=function(){var e=this;return o.a.createElement(E,{to:"/",onClick:function(){return e.props.showMenu("false")}},o.a.createElement(j,null))},t}(i.Component),y=Object(w.b)(function(e){return{menuState:e.app.menuState}},function(e){return{showMenu:function(t){return e(Object(x.b)(t))}}})(N),j=c.c.div.withConfig({displayName:"logo__Icon",componentId:"sc-5icxge-0"})(["width:3rem;height:3rem;background-image:url(",");background-repeat:no-repeat;background-position:center;"],M.a),E=Object(c.c)(d.a).withConfig({displayName:"logo__StyledLink",componentId:"sc-5icxge-1"})(["font-family:'muliLight';font-size:1.25rem;padding:1rem 2rem;text-decoration:none;transition:color .5s cubic-bezier(0.075,0.82,0.165,1);&:hover{color:",";}"],function(e){return e.theme.colors.turquoise}),k=n(161),L=n.n(k),C=n(162),T=n.n(C),I=n(179),v=n.n(I),O=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).searchRef=o.a.createRef(),t}return A()(t,e),t.prototype.render=function(){return o.a.createElement(D,null,o.a.createElement(S,{placeholder:"Search",type:"text",ref:this.searchRef}),o.a.createElement(z,null))},t}(i.Component),S=c.c.input.withConfig({displayName:"searchBar__Input",componentId:"sc-1oeyv9f-0"})(["@font-face{font-family:'muliRegular';src:url(",") format('woff2'),url(",") format('woff');font-weight:normal;font-style:normal;}height:3rem;width:100%;border:1px solid ",";border-radius:25px;padding:1rem;font-size:1rem;color:",";font-family:'muliRegular';::placeholder{font-family:'muliRegular';-webkit-font-smooth:antialiased;-moz-font-smooth:antialiased;}"],L.a,T.a,function(e){return e.theme.colors.whiteDark},function(e){return e.theme.colors.grey}),D=c.c.form.withConfig({displayName:"searchBar__Form",componentId:"sc-1oeyv9f-1"})(["position:relative;width:300px;"]),z=c.c.div.withConfig({displayName:"searchBar__Icon",componentId:"sc-1oeyv9f-2"})(["width:2rem;height:2rem;background-image:url(",");background-repeat:no-repeat;background-position:center;position:absolute;right:.75rem;top:.5rem;cursor:pointer;"],v.a),_=function(e){function t(){return e.apply(this,arguments)||this}return A()(t,e),t.prototype.render=function(){var e=this,t=o.a.createElement(B,{onClick:function(){return e.props.showMenu("true")}},o.a.createElement(F,null),o.a.createElement(H,null),o.a.createElement(F,null),o.a.createElement(H,null),o.a.createElement(F,null)),n=o.a.createElement(B,{onClick:function(){return e.props.showMenu("false")}},o.a.createElement(Y,null),o.a.createElement(Y,{isRight:!0}));return o.a.createElement(o.a.Fragment,null,"hamburger"===this.props.type?t:n)},t}(i.Component),Q=Object(w.b)(function(e){return{menuState:e.app.menuState}},function(e){return{showMenu:function(t){return e(Object(x.b)(t))}}})(_),B=c.c.div.withConfig({displayName:"hamburger__Container",componentId:"nkfnou-0"})(["width:3rem;height:3rem;position:absolute;cursor:pointer;top:1rem;left:1rem;padding:1rem .5rem .6rem;transition:all .5s cubic-bezier(0.075,0.82,0.165,1);:hover{background-color:",";border-radius:1.5rem;}"],function(e){return e.theme.colors.whiteDark}),Y=c.c.div.withConfig({displayName:"hamburger__BarRotated",componentId:"nkfnou-1"})(["position:absolute;top:1.4rem;left:.8rem;width:1.5rem;background-color:",";height:3px;transform:",";transition:all .5s cubic-bezier(0.075,0.82,0.165,1);:hover{background-color:",";}"],function(e){return e.theme.colors.black},function(e){return e.isRight?"rotate(-45deg)":"rotate(45deg)"},function(e){return e.theme.colors.turquoise}),F=c.c.div.withConfig({displayName:"hamburger__BarFull",componentId:"nkfnou-2"})(["width:1.5rem;transition:all 0.5s cubic-bezier(0.075,0.82,0.165,1);background-color:",";height:3px;margin:auto;transition:all .5s cubic-bezier(0.075,0.82,0.165,1);:hover{background-color:",";}"],function(e){return e.theme.colors.black},function(e){return e.theme.colors.turquoise}),H=c.c.div.withConfig({displayName:"hamburger__BarEmpty",componentId:"nkfnou-3"})(["width:1rem;height:3.5px;"]),P=function(e){function t(){return e.apply(this,arguments)||this}return A()(t,e),t.prototype.render=function(){return o.a.createElement(R,null,o.a.createElement(Q,{type:"hamburger"}),o.a.createElement(f,{isFlex:!0},o.a.createElement(O,null),o.a.createElement(q,null,o.a.createElement(y,null))))},t}(i.Component),q=c.c.div.withConfig({displayName:"header__StyledHome",componentId:"sc-1lp47sl-0"})(["display:none;@media (min-width:600px){display:block;}"]),R=c.c.div.withConfig({displayName:"header__StyledHeader",componentId:"sc-1lp47sl-1"})(["height:5rem;background-color:",";width:100vw;position:fixed;top:0;padding:0 5rem;z-index:2;box-shadow:0px 0px 20px 0px ",";@media (min-width:1200px){padding:0;}"],function(e){return e.theme.colors.white},function(e){return e.theme.colors.whiteDark}),U=n(205),V=function(e){function t(){return e.apply(this,arguments)||this}return A()(t,e),t.prototype.render=function(){var e=this;return o.a.createElement(o.a.Fragment,null,"true"===this.props.menuState?o.a.createElement(G,{onClick:function(){return e.props.showMenu("false")}}):"")},t}(i.Component),Z=Object(w.b)(function(e){return{menuState:e.app.menuState}},function(e){return{showMenu:function(t){return e(Object(x.b)(t))}}})(V),G=c.c.div.withConfig({displayName:"darkOverlay__Opacity",componentId:"yozset-0"})(["position:absolute;height:100vh;background-color:",";top:0;right:0;width:100vw;"],function(e){return e.theme.colors.blackOpacity}),J=n(180),W=c.c.div.withConfig({displayName:"pageList__ListContainer",componentId:"s2enqy-0"})(["border-bottom:1px solid ",";"],function(e){return e.theme.colors.whiteDark}),X=c.c.img.withConfig({displayName:"pageList__Icon",componentId:"s2enqy-1"})(["width:40px;height:40px;margin-right:1.5rem;"]),K=Object(c.c)(d.a).withConfig({displayName:"pageList__Page",componentId:"s2enqy-2"})(["padding:.5rem 1rem;display:flex;align-items:center;text-decoration:none;h2{transition:color .5s cubic-bezier(0.075,0.82,0.165,1);:hover{color:",";}}"],function(e){return e.theme.colors.turquoise}),$=function(){return o.a.createElement(g,{query:"3330471685",render:function(e){var t=e.blog.blogPages;return o.a.createElement(o.a.Fragment,null,o.a.createElement(W,null,t.map(function(e){return o.a.createElement(K,{key:e.id,to:e.title},o.a.createElement(X,{src:e.icon.url}),o.a.createElement("h2",{dangerouslySetInnerHTML:{__html:e.title}}))})))},data:J})},ee=(n(181),n(183),n(184),n(88),n(189)),te=Object(c.c)(d.a).withConfig({displayName:"tag__Tag",componentId:"b0eq90-0"})(["max-height:2rem;margin:.25rem;text-decoration:none;border:1px solid ",";color:",";padding:.25rem .5rem;border-radius:1.5rem;transition:all .5s cubic-bezier(0.075,0.82,0.165,1);@media (min-width:480px){margin:.5rem;padding:.25rem 1rem;}:hover{color:",";border:1px solid ",";box-shadow:5px 5px 5px ",";}"],function(e){return e.theme.colors.black},function(e){return e.theme.colors.black},function(e){return e.theme.colors.turquoise},function(e){return e.theme.colors.turquoise},function(e){return e.theme.colors.turquoiseDark});var ne=c.c.div.withConfig({displayName:"tagList__TagContainer",componentId:"hkir3p-0"})(["display:flex;flex-wrap:wrap;padding:1rem;"]),re=function(){return o.a.createElement(g,{query:"4116835876",render:function(e){var t=e.blog.blogPosts;return o.a.createElement(o.a.Fragment,null,o.a.createElement(ne,null,function(e){var t=[],n=[],r=[];return e.map(function(e){t.push(e.tags)}),t.map(function(e){var t=e,r=Array.isArray(t),a=0;for(t=r?t:t[Symbol.iterator]();;){var i;if(r){if(a>=t.length)break;i=t[a++]}else{if((a=t.next()).done)break;i=a.value}var o=i;n.push(o)}}),n.sort().map(function(e,t){e!==n[t+1]&&r.push(e.toLowerCase())}),r}(t).map(function(e){return o.a.createElement(te,{key:e,to:e,dangerouslySetInnerHTML:{__html:e}})})))},data:ee})},ae=c.c.svg.withConfig({displayName:"socialIcons__Icon",componentId:"kqm1oi-0"})(["width:30px;height:30px;:hover{.circle{fill:",";}}.circle{fill:",";transition:fill .5s cubic-bezier(0.075,0.82,0.165,1);}.inner{fill:",";}"],function(e){return e.theme.colors.turquoise},function(e){return e.theme.colors.grey},function(e){return e.theme.colors.white}),ie=c.c.div.withConfig({displayName:"socialIcons__Socials",componentId:"kqm1oi-1"})(["display:flex;justify-content:space-evenly;"]),oe=c.c.div.withConfig({displayName:"socialIcons__Container",componentId:"kqm1oi-2"})(["position:absolute;bottom:0;left:0;padding:1rem;width:100%;margin-bottom:.5rem;"]),ce=function(){return o.a.createElement(oe,null,o.a.createElement(ie,null,o.a.createElement("a",{href:"https://bedekodzic.pl/",target:"_blank"},o.a.createElement(ae,{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"1327.6 -373.5 1233.2 1374"},o.a.createElement("path",{className:"circle",d:"M1327.6,922.8V-125.9c0-29.1,9.7-48.6,24.3-58.3l208.8-174.8c9.7-9.7,29.1-14.6,53.4-14.6h514.6 c228.2,0,325.3,87.4,325.3,262.2v77.7c0,77.7-19.4,131.1-63.1,160.2l-4.9,4.9c116.5,24.3,174.8,106.8,174.8,262.2v150.5 c0,97.1-29.1,165.1-82.5,213.6l-208.8,174.8c-53.4,43.7-135.9,68-247.6,68h-616.6C1351.9,995.7,1327.6,976.2,1327.6,922.8z"}),o.a.createElement("path",{className:"inner",d:"M1598.4,813.3c-38.8,0-58.3-19.4-58.3-58.3V-293.7c0-38.8,19.4-58.3,58.3-58.3H2113 c213.6,0,310.7,77.7,310.7,247.6v77.7c0,92.2-29.1,145.7-97.1,174.8c140.8,14.6,203.9,92.2,203.9,252.5v150.5 c0,179.6-97.1,267-315.6,267L1598.4,813.3C1598.4,818.2,1598.4,813.3,1598.4,813.3z M1904.3,99.6h135.9c43.7,0,63.1-19.4,63.1-63.1 V-7.2c0-43.7-19.4-63.1-63.1-63.1h-135.9V99.6z M1904.3,541.4H2113c43.7,0,63.1-19.4,63.1-63.1v-63.1c0-43.7-19.4-63.1-63.1-63.1 h-208.8C1904.3,352.1,1904.3,541.4,1904.3,541.4z"}))),o.a.createElement("a",{href:"https://www.facebook.com/bedekodzic/",target:"_blank"},o.a.createElement(ae,{xmlns:"http://www.w3.org/2000/svg",viewBox:"126.445 2.281 589 589"},o.a.createElement("circle",{className:"circle",cx:"420.945",cy:"296.781",r:"294.5"}),o.a.createElement("path",{className:"inner",d:"M516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554  0 38.281 0 59.357H324.9v71.271h46.174v205.177h84.847V294.353h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907  10.981 0 32.332.032 37.813 0V92.677h-.032z"}))),o.a.createElement("a",{href:"https://twitter.com/bedekodzic_pl",target:"_blank"},o.a.createElement(ae,{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"610 -850 2500 2500"},o.a.createElement("circle",{className:"circle",cx:"1860",cy:"400",r:"1250"}),o.a.createElement("path",{className:"inner",d:"M2787.9-94.9c-59,26.2-122.3,43.8-188.9,51.8c68-40.7,120-105.2,144.6-181.9c-64.6,38.3-135.2,65.3-208.9,79.8 c-60-63.9-145.4-103.8-240-103.8c-181.5,0-328.8,147.2-328.8,328.8c0,25.7,2.9,50.8,8.5,75c-273.3-13.7-515.6-144.6-677.8-343.6 c-28.3,48.6-44.5,105.1-44.5,165.3c0,114.1,58.1,214.7,146.3,273.7c-52.2-1.6-103.3-15.7-149-41.1v4.2 c0,159.3,113.3,292.2,263.8,322.4c-27.6,7.6-56.6,11.5-86.6,11.5c-21.2,0-41.8-2-61.9-5.8C1406.5,672,1528,767,1671.8,769.7 c-112.5,88.2-254.4,140.8-408.4,140.8c-26.5,0-52.7-1.6-78.5-4.7c145.5,93.3,318.4,147.8,504.1,147.8 c604.8,0,935.6-501.1,935.6-935.6c0-14.3-0.3-28.4-1-42.5C2688.1,28.9,2743.7-28.8,2787.9-94.9L2787.9-94.9z"}))),o.a.createElement("a",{href:"https://www.linkedin.com/in/bart-cis-2a66bb112/",target:"_blank"},o.a.createElement(ae,{xmlns:"http://www.w3.org/2000/svg",viewBox:"7.025 7.025 497.951 497.95"},o.a.createElement("path",{className:"circle",d:"M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976  256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853  0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472  32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312  39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z"}))),o.a.createElement("a",{href:"https://github.com/bartcis",target:"_blank"},o.a.createElement(ae,{version:"1.2",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 2350 2314.8"},o.a.createElement("path",{className:"circle",d:"M1175,0C525.8,0,0,525.8,0,1175c0,552.2,378.9,1010.5,890.1,1139.7c-5.9-14.7-8.8-35.3-8.8-55.8v-199.8H734.4 c-79.3,0-152.8-35.2-185.1-99.9c-38.2-70.5-44.1-179.2-141-246.8c-29.4-23.5-5.9-47,26.4-44.1c61.7,17.6,111.6,58.8,158.6,120.4 c47,61.7,67.6,76.4,155.7,76.4c41.1,0,105.7-2.9,164.5-11.8c32.3-82.3,88.1-155.7,155.7-190.9c-393.6-47-581.6-240.9-581.6-505.3 c0-114.6,49.9-223.3,132.2-317.3c-26.4-91.1-61.7-279.1,11.8-352.5c176.3,0,282,114.6,308.4,143.9c88.1-29.4,185.1-47,284.9-47 c102.8,0,196.8,17.6,284.9,47c26.4-29.4,132.2-143.9,308.4-143.9c70.5,70.5,38.2,261.4,8.8,352.5c82.3,91.1,129.3,202.7,129.3,317.3 c0,264.4-185.1,458.3-575.7,499.4c108.7,55.8,185.1,214.4,185.1,331.9V2256c0,8.8-2.9,17.6-2.9,26.4 C2021,2123.8,2350,1689.1,2350,1175C2350,525.8,1824.2,0,1175,0L1175,0z"}))),o.a.createElement("a",{href:"https://medium.com/@cis.bart",target:"_blank"},o.a.createElement(ae,{viewBox:"0 0 256 203",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid"},o.a.createElement("path",{className:"circle",d:"M256 29.867h-10.125c-3.759 0-9.075 5.423-9.075 8.894v125.826c0 3.475 5.316 8.213 9.075 8.213H256v29.867h-91.733V172.8h19.2V40.533h-.941L137.69  202.667h-34.712L58.72 40.533H57.6V172.8h19.2v29.867H0V172.8h9.835c4.049 0 9.365-4.738 9.365-8.213V38.76c0-3.471-5.316-8.894-9.365-8.894H0V0h96.034l31.53  117.333h.87L160.253 0H256v29.867"})))))},le=function(e){function t(){return e.apply(this,arguments)||this}return A()(t,e),t.prototype.render=function(){return o.a.createElement(de,{pose:"true"===this.props.menuState?"visible":"hidden"},o.a.createElement(Z,null),o.a.createElement(pe,null,o.a.createElement(me,null,o.a.createElement(Q,{type:"cross"}),o.a.createElement(y,null)),o.a.createElement($,null),o.a.createElement(re,null),o.a.createElement(ce,null)))},t}(i.Component),ue=Object(w.b)(function(e){return{menuState:e.app.menuState}},function(e){return{showMenu:function(t){return e(Object(x.b)(t))}}})(le),se=U.a.section({visible:{transform:"translateX(0)"},hidden:{transform:"translateX(-110%)",transition:{duration:1e3}}}),me=c.c.div.withConfig({displayName:"sideMenu__HamburgerWrapper",componentId:"x33ipq-0"})(["width:100%;height:5rem;border-bottom:1px solid ",";display:flex;justify-content:flex-end;align-items:center;"],function(e){return e.theme.colors.whiteDark}),de=Object(c.c)(se).withConfig({displayName:"sideMenu__MenuContainer",componentId:"x33ipq-1"})(["position:fixed;z-index:3;top:0;width:100vw;"]),pe=c.c.div.withConfig({displayName:"sideMenu__Menu",componentId:"x33ipq-2"})(["position:fixed;z-index:2;top:0;left:0;width:300px;height:100vh;background-color:",";box-shadow:0px 0px 20px 0px ",";@media (min-width:480px){width:400px;}"],function(e){return e.theme.colors.white},function(e){return e.theme.colors.white}),ge=n(190),he=n(191),Ae=n.n(he),fe=function(){return o.a.createElement(g,{query:"2031444518",render:function(e){return o.a.createElement(Ae.a,{style:{boxShadow:"0px 3px 15px 0px "+function(e){return e.theme.colors.whiteDark},width:"150px",height:"150px",borderRadius:"100px"},fluid:e.placeholderImage.childImageSharp.fluid})},data:ge})},we=c.c.div.withConfig({displayName:"authorBox__Description",componentId:"sc-23h7vx-0"})(["margin-right:2rem;"]),xe=Object(c.c)(d.a).withConfig({displayName:"authorBox__Container",componentId:"sc-23h7vx-1"})(["display:flex;text-decoration:none;justify-content:space-between;margin:1rem;flex-wrap:wrap-reverse;align-items:center;background-color:#fff;border:1px solid ",";border-radius:75px;padding-left:5rem;box-shadow:none;transition:box-shadow 1s cubic-bezier(0.075,0.82,0.165,1);:hover{box-shadow:15px 10px 15px ",";}"],function(e){return e.theme.colors.whiteDark},function(e){return e.theme.colors.grey}),be=function(){return o.a.createElement(xe,{to:"/about"},o.a.createElement(we,null,o.a.createElement("h2",null,"Bartek Cis"),o.a.createElement("p",null,"I'm a JavaScript Developer. I like JS world. I adore clean design and love write articles for my blogs :)")),o.a.createElement(fe,null))},Me=(n(192),function(e){function t(){return e.apply(this,arguments)||this}return A()(t,e),t.prototype.render=function(){return o.a.createElement(Ne,{to:"/"+this.props.link},o.a.createElement("div",{className:"image",style:{backgroundImage:"url("+this.props.image+")"}}),o.a.createElement("div",{className:"content"},o.a.createElement("h2",{className:"content__title"},this.props.title),o.a.createElement("p",{className:"content__subtitle"},this.props.description)),o.a.createElement("div",{className:"info"},o.a.createElement("div",{className:"info__date"},this.props.date),this.props.tag1?o.a.createElement(te,{to:this.props.tag1,dangerouslySetInnerHTML:{__html:this.props.tag1}}):"",this.props.tag2?o.a.createElement(te,{to:this.props.tag2,dangerouslySetInnerHTML:{__html:this.props.tag2}}):"",this.props.tag3?o.a.createElement(te,{to:this.props.tag3,dangerouslySetInnerHTML:{__html:this.props.tag3}}):""))},t}(i.Component)),Ne=Object(c.c)(d.a).withConfig({displayName:"articleBox__Container",componentId:"e75w0t-0"})(["display:flex;margin:3rem 1rem;width:100%;border-radius:100px;border:1px solid ",";box-shadow:none;overflow:hidden;text-decoration:none;height:200px;position:relative;transition:all 1s cubic-bezier(0.075,0.82,0.165,1);:hover{box-shadow:15px 10px 15px ",";.content{&__title{transform:translateY(-15px);}&__subtitle{opacity:1;}}}.image{transition:all .5s cubic-bezier(0.075,0.82,0.165,1);background-size:cover;background-position:center;background-repeat:no-repeat;width:200px;border-radius:100px;}.content{padding:1rem 2rem;width:calc(100% - 400px);transition:all 1s cubic-bezier(0.075,0.82,0.165,1);&__title{transform:translateY(25px);transition:all 1s cubic-bezier(0.075,0.82,0.165,1);}&__subtitle{transform:translateY(-25px);opacity:0;transition:all 1.5s cubic-bezier(0.075,0.82,0.165,1);}}.info{width:200px;height:100%;border:1px solid ",";border-radius:100px;text-align:center;display:flex;flex-wrap:wrap;justify-content:center;align-items:center;padding:1rem;position:absolute;right:0;&__date{width:100%;}}"],function(e){return e.theme.colors.whiteDark},function(e){return e.theme.colors.grey},function(e){return e.theme.colors.whiteDark}),ye=Me,je=c.c.footer.withConfig({displayName:"footer__Footer",componentId:"sc-4qrhzx-0"})(["text-align:center;padding:2rem;border-top:1px solid ",";color:",";max-width:600px;margin:6rem auto 0;"],function(e){return e.theme.colors.whiteDark},function(e){return e.theme.colors.grey}),Ee=function(){return o.a.createElement(je,null,o.a.createElement("p",null,"© Copyright ",(new Date).getFullYear()," Bartek Cis"))},ke=function(){return o.a.createElement(g,{query:"1368842891",render:function(e){var t=e.blog.blogPosts;return o.a.createElement(o.a.Fragment,null,o.a.createElement(P,null),o.a.createElement(ue,null),o.a.createElement(f,{isGapped:!0},o.a.createElement(be,null),o.a.createElement("div",null,t.map(function(e){return o.a.createElement(ye,{key:e.id,title:e.title,description:e.description.markdown,date:e.createdAt.slice(0,10).split("-").join("/"),tag1:e.tags[0],tag2:e.tags[1],tag3:e.tags[2],image:e.heroImage.url,link:e.slug})})),o.a.createElement(Ee,null)))},data:l})},Le=n(194),Ce=n(195),Te=n.n(Ce);function Ie(e){var t=e.description,n=e.lang,r=e.meta,a=e.title,i=Le.data.site,c=t||i.siteMetadata.description;return o.a.createElement(Te.a,{htmlAttributes:{lang:n},title:a,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:a},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:a},{name:"twitter:description",content:c}].concat(r)})}Ie.defaultProps={lang:"en",meta:[],description:""};var ve=Ie,Oe={colors:{white:"#fff",whiteDark:"#EDF0EC",turquoise:"#73D3DB",turquoiseDark:"#5A9895",grey:"#88929A",blue:"#1F2B46",black:"#181818",blackOpacity:"rgba(24,24,24, .5)"}},Se=n(201),De=n.n(Se),ze=n(202),_e=n.n(ze),Qe=n(203),Be=n.n(Qe),Ye=n(204),Fe=n.n(Ye);function He(){var e=a()(["\n  body {\n    margin: 0;\n    padding: 0;\n  }\n  *, *::before, *::after {\n    box-sizing: border-box;\n  }\n\n  a, h1, h2 {\n    @font-face {\n      font-family: 'muliBlack';\n      src: url(",") format('woff2'),\n        url(",") format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n    font-family: 'muliBlack';\n    color: ",";\n  }\n  h3, p {\n    @font-face {\n      font-family: 'muliRegular';\n      src: url(",") format('woff2'),\n        url(",") format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n    font-family: 'muliRegular';\n  }\n  h4 {\n    @font-face {\n      font-family: 'muliLight';\n      src: url(",") format('woff2'),\n        url(",") format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n    font-family: 'muliLight';\n    margin: .5rem 0;\n  }\n"]);return He=function(){return e},e}var Pe=Object(c.b)(He(),De.a,_e.a,function(e){return e.theme.colors.black},L.a,T.a,Be.a,Fe.a);t.default=function(){return o.a.createElement(c.a,{theme:Oe},o.a.createElement(o.a.Fragment,null,o.a.createElement(ve,{title:"Home Page",keywords:["javascript","react","frontend","HTML CSS"]}),o.a.createElement(Pe,null),o.a.createElement(ke,null)))}},160:function(e,t,n){var r;e.exports=(r=n(170))&&r.default||r},161:function(e,t,n){e.exports=n.p+"static/muli-regular-webfont-384d38fbc6dc27dc9ae6989fd75dcd0b.woff2"},162:function(e,t,n){e.exports=n.p+"static/muli-regular-webfont-a35851957ca28d0015e842c249cad2ce.woff"},169:function(e){e.exports={data:{blog:{blogPosts:[{title:"10 Interview Questions Every JavaScript Developer Should Know.",slug:"10-questions",description:{markdown:"At most companies, management must trust the developers to give technical interviews in order to assess candidate skills. If you do well as a candidate, you’ll eventually need to interview. Here’s how.\n\n\n"},id:"cjwm3g5dbgg810830geh4o5te",createdAt:"2019-06-07T12:56:40.751Z",heroImage:{url:"https://media.graphcms.com/Ra2FwAqwTnm8PfJx1DOw"},tags:["JavaScript","HTML"]},{title:"Coffee, Even a Lot, Linked to Longer Life",slug:"coffee",description:{markdown:"Scientists wake up and smell the apparent health benefits\n\n\n"},id:"cjwoynq3xnudy0830524cakrs",createdAt:"2019-06-09T13:05:54.669Z",heroImage:{url:"https://media.graphcms.com/0ygcFUirQ7yEy5MkmzFx"},tags:["JavaScript","CSS"]}]}}}},170:function(e,t,n){"use strict";n.r(t);n(30);var r=n(0),a=n.n(r),i=n(1),o=n.n(i),c=n(75),l=n(3),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return n?a.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},178:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTEuOTk5IDUxMS45OTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMS45OTkgNTExLjk5OSI+CiAgPHBhdGggZD0iTTUxMS44NjQgMjIxLjQ4N2MtLjkyMS0xMS45ODgtNi40NTUtMjIuODk2LTE1LjU4MS0zMC43MTZsLTQ0LjI4Ni0zNy45NlY0NC45NDRjMC04LjI4NC02LjcxNi0xNC45OTktMTQuOTk5LTE0Ljk5OUgzNzdjLTguMjg0IDAtMTQuNzk5IDYuNzE2LTE0Ljc5OSAxNC45OTl2MzAuNzI4TDI4Ni4yOSAxMC45NzdjLTE2Ljk3LTE0LjUzOS00MS42MDMtMTQuNTM3LTU4LjUxOS0uMDQzTDE1LjcyOCAxOTAuNzY5Yy0xOC43NTMgMTYuMDY4LTIxLjE4NiA0NC40MjMtNC44NjYgNjMuNDczIDEyLjQzOSAxNC40NjUgMzIuMzY0IDE5LjA3NyA0OS4zNSAxMy4xMDd2MjI5LjU4NGMwIDguMjg0IDYuNTE2IDE0Ljk5OSAxNC43OTkgMTQuOTk5aDM2MS45ODZjOC4yODQgMCAxNC45OTktNi43MTYgMTQuOTk5LTE0Ljk5OVYyNjcuMzUyYTQ0Ljk3NCA0NC45NzQgMCAwIDAgNDkuMTY3LTEzLjEzYzcuODItOS4xMjggMTEuNjIxLTIwLjc1NCAxMC43MDEtMzIuNzM1ek0zOTEuOTk5IDU5Ljk0M2gzMC4xOTl2NjcuMTU0bC0zMC4xOTktMjUuNzEzVjU5Ljk0M3ptLTc0Ljc5NyA0MjEuOTkxSDE5NS4wMDdWMzYxLjczOGgxMjIuMTk1djEyMC4xOTZ6bTEwNC45OTYgMGgtNzUuMTk3VjM0Ni45MzljMC04LjI4NC02LjcxNi0xNC45OTktMTQuOTk5LTE0Ljk5OUgxODAuMDA3Yy04LjI4NCAwLTE0Ljc5OSA2LjcxNi0xNC43OTkgMTQuOTk5djEzNC45OTVIOTAuMDExVjI0NS43NzVsMTY2Ljk0My0xNDEuNjEzIDE2NS4yNDUgMTQxLjQ3M3YyMzYuMjk5em01Ni4xOTEtMjQ3LjI0Yy01LjMxOCA2LjE5OC0xNC43NzIgNy4xMDctMjEuMTU4IDEuNjMxTDI2Ni43NjUgNzMuMDYxYTE0Ljk5NyAxNC45OTcgMCAwIDAtMTkuNDY0LS4wNUw1NC43ODYgMjM2LjMxN2MtNi4yODIgNS4zNzUtMTUuNzgyIDQuNjQyLTIxLjE2MS0xLjYxNS01LjM4NS02LjI4NS00LjY1Ny0xNS43NzQgMS41NjktMjEuMTFMMjQ3LjIzOCAzMy43NTZjNS42Ni00Ljg0OCAxMy44NzQtNC44NDkgMTkuNTMtLjAwMmwyMDkuOTk0IDE3OS43OTVjNi4yNzggNS4zOCA3LjAwNSAxNC44NyAxLjYyNyAyMS4xNDV6Ii8+CiAgPHBhdGggZD0iTTMwMi4wMDIgMTc5LjkzOGgtOTEuOTk2Yy04LjI4NCAwLTE0Ljc5OSA2LjcxNi0xNC43OTkgMTQuOTk5djg5Ljk5NmMwIDguMjg0IDYuNTE2IDE0Ljk5OSAxNC43OTkgMTQuOTk5aDkxLjk5NmM4LjI4NCAwIDE0Ljk5OS02LjcxNiAxNC45OTktMTQuOTk5di04OS45OTZjLjAwMS04LjI4NC02LjcxNS0xNC45OTktMTQuOTk5LTE0Ljk5OXptLTE0Ljc5OSA4OS45OTdoLTYyLjE5OHYtNTkuOTk4aDYyLjE5OHY1OS45OTh6Ii8+CiAgPGNpcmNsZSBjeD0iMjcxLjk5OSIgY3k9IjQwNi45MzQiIHI9IjE0Ljk5OSIvPgo8L3N2Zz4K"},179:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii01MTQgMjc1LjcgMjUwLjMgMjUwLjMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgLTUxNCAyNzUuNyAyNTAuMyAyNTAuMyI+CiAgPHN0eWxlPgogICAgLnN0MHtmaWxsOiNlZGYwZWN9CiAgPC9zdHlsZT4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNLTI2OS44IDQ5MC4zbC01NC40LTU0LjRjLS4zLS4zLS42LS41LS45LS44IDEwLjctMTYuMiAxNi45LTM1LjcgMTYuOS01Ni42IDAtNTYuOC00Ni4xLTEwMi45LTEwMi45LTEwMi45Uy01MTQgMzIxLjgtNTE0IDM3OC42czQ2LjEgMTAyLjkgMTAyLjkgMTAyLjljMjAuOSAwIDQwLjMtNi4yIDU2LjYtMTYuOS4zLjMuNS42LjguOWw1NC40IDU0LjRjOC4yIDguMiAyMS40IDguMiAyOS42IDAgOC4xLTguMiA4LjEtMjEuNC0uMS0yOS42em0tMTQxLjMtNDQuNWMtMzcuMSAwLTY3LjItMzAuMS02Ny4yLTY3LjJzMzAuMS02Ny4yIDY3LjItNjcuMiA2Ny4yIDMwLjEgNjcuMiA2Ny4yLTMwLjEgNjcuMi02Ny4yIDY3LjJ6IiBpZD0iU2VhcmNoIi8+Cjwvc3ZnPgo="},180:function(e){e.exports={data:{blog:{blogPages:[{id:"cjwoqv8drn6ip0830d5tkzr2p",title:"About",icon:{url:"https://media.graphcms.com/JPl0guQ3RYnHHPk8JOJq"}}]}}}},189:function(e){e.exports={data:{blog:{blogPosts:[{tags:["JavaScript","HTML"]},{tags:["JavaScript","CSS"]}]}}}},190:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAaABQDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAAMBAgQFBv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAYz68ZUaF2O7B58kP//EAB4QAAIBBAMBAAAAAAAAAAAAAAECAAMEEjMRITFB/9oACAEBAAEFAm9ZyDEJU1xkQvXxbV6k5wltsl1t/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAHRAAAgEFAQEAAAAAAAAAAAAAAAERAhAhIoFBcf/aAAgBAQAGPwLCk3paPCcdFLXLzVqQxfLcP//EAB0QAQACAgIDAAAAAAAAAAAAAAEAESExEFFBkbH/2gAIAQEAAT8h0WLog+hcRLce8QDEM2qJu/tC6Q1oFXTNRjwEpj54x1Pmn//aAAwDAQACAAMAAAAQk8QM/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPxAf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPxAf/8QAIRABAQACAQIHAAAAAAAAAAAAAREAITFBcRBhgZGh0fD/2gAIAQEAAT8QfC5UOr9YDaEVH3xqCO+5EhD3h18ZsmO7JPXEC29VG5QVXHA9OcV08p+cKKCqhqeWAfz6+CAcAqOf/9k=",aspectRatio:.78125,src:"/static/0b29b6abdb59b3d37d0326ddd0c851b9/c83a6/o_mnie_min.jpg",srcSet:"/static/0b29b6abdb59b3d37d0326ddd0c851b9/24f62/o_mnie_min.jpg 75w,\n/static/0b29b6abdb59b3d37d0326ddd0c851b9/cb3d3/o_mnie_min.jpg 150w,\n/static/0b29b6abdb59b3d37d0326ddd0c851b9/c83a6/o_mnie_min.jpg 300w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},194:function(e){e.exports={data:{site:{siteMetadata:{title:"Bartek Cis - JS Developer",description:"This is blog of JavaScript Developer. I hope you'll enjoy. Read, like, share!",author:"@bartcis"}}}}},201:function(e,t,n){e.exports=n.p+"static/muli-black-webfont-dcd04b8658b0c900009bbe5a9ed77cc4.woff2"},202:function(e,t,n){e.exports=n.p+"static/muli-black-webfont-046f08906f3a3a20e1ae16298fdbc4c3.woff"},203:function(e,t,n){e.exports=n.p+"static/muli-light-webfont-d41c4c5e014bf484d1c154ad4550cc6b.woff2"},204:function(e,t,n){e.exports=n.p+"static/muli-light-webfont-0fe3d5e2afc25f52ac8f345e1c1d91ca.woff"}}]);
//# sourceMappingURL=component---src-pages-index-tsx-af5760d1f9c1059c0bfd.js.map