!function(){"use strict";var e=window.wp.blocks,t=window.wp.element,n=window.wp.i18n,o=window.wp.blockEditor;function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s.apply(this,arguments)}var a=window.React;class l extends a.Component{constructor(e){super(e),this.props=e,this.state={showBody:!1},this.setShowBody=this.setShowBody.bind(this),this.toggleContentDisplay=this.toggleContentDisplay.bind(this)}setShowBody(e){this.setState({showBody:e})}toggleContentDisplay=()=>{this.setShowBody(!this.state.showBody)};render(){const{showBody:e}=this.state,{title:n,className:o,children:a,...l}=this.props;return(0,t.createElement)("section",s({className:"accordion"+(o?" "+o:"")},l),(0,t.createElement)("dl",null,(0,t.createElement)("button",{onMouseDown:this.toggleContentDisplay,className:"accordion__title","aria-expanded":"false"},(0,t.createElement)("dt",{dangerouslySetInnerHTML:{__html:n}})),(0,t.createElement)("dd",{className:"accordion__content",style:{display:e?"block":"none"},dangerouslySetInnerHTML:{__html:a}})))}}var c=l,r=JSON.parse('{"u2":"ucla-wcl-wpblocks/accordion"}');(0,e.registerBlockType)(r.u2,{edit:function(e){let{attributes:s,setAttributes:a,className:l,clientId:r}=e;const{title:i,blockId:d}=s;React.useEffect((()=>{d||a({blockId:r})}),[]);const h=(0,t.createElement)(o.RichText,{tagName:"span",value:i,onChange:e=>{a({title:e})},placeholder:(0,n.__)("Enter title here...","ucla-wcl-wpblocks")});return(0,t.createElement)("div",{"data-accordionroot":r},(0,t.createElement)(c,{className:l,blockId:d,title:h},(0,t.createElement)(o.InnerBlocks,null)))},save:e=>{let{attributes:{title:n,blockId:s},className:a}=e;const l=(0,t.createElement)(o.RichText.Content,{tagName:"span",value:n});return(0,t.createElement)("div",{"data-accordionroot":s},(0,t.createElement)(c,{className:a,title:l},(0,t.createElement)(o.InnerBlocks.Content,null)))}})}();