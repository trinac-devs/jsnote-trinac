(this.webpackJsonpjbook=this.webpackJsonpjbook||[]).push([[242],{422:function(t,n){!function(t){var n=t.util.clone(t.languages.javascript),e=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,a=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,s=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function o(t,n){return t=t.replace(/<S>/g,(function(){return e})).replace(/<BRACES>/g,(function(){return a})).replace(/<SPREAD>/g,(function(){return s})),RegExp(t,n)}s=o(s).source,t.languages.jsx=t.languages.extend("markup",n),t.languages.jsx.tag.pattern=o(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/i,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.jsx.tag.inside.comment=n.comment,t.languages.insertBefore("inside","attr-name",{spread:{pattern:o(/<SPREAD>/.source),inside:t.languages.jsx}},t.languages.jsx.tag),t.languages.insertBefore("inside","special-attr",{script:{pattern:o(/=<BRACES>/.source),inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:t.languages.jsx},alias:"language-javascript"}},t.languages.jsx.tag);var g=function t(n){return n?"string"===typeof n?n:"string"===typeof n.content?n.content:n.content.map(t).join(""):""},c=function n(e){for(var a=[],s=0;s<e.length;s++){var o=e[s],c=!1;if("string"!==typeof o&&("tag"===o.type&&o.content[0]&&"tag"===o.content[0].type?"</"===o.content[0].content[0].content?a.length>0&&a[a.length-1].tagName===g(o.content[0].content[1])&&a.pop():"/>"===o.content[o.content.length-1].content||a.push({tagName:g(o.content[0].content[1]),openedBraces:0}):a.length>0&&"punctuation"===o.type&&"{"===o.content?a[a.length-1].openedBraces++:a.length>0&&a[a.length-1].openedBraces>0&&"punctuation"===o.type&&"}"===o.content?a[a.length-1].openedBraces--:c=!0),(c||"string"===typeof o)&&a.length>0&&0===a[a.length-1].openedBraces){var i=g(o);s<e.length-1&&("string"===typeof e[s+1]||"plain-text"===e[s+1].type)&&(i+=g(e[s+1]),e.splice(s+1,1)),s>0&&("string"===typeof e[s-1]||"plain-text"===e[s-1].type)&&(i=g(e[s-1])+i,e.splice(s-1,1),s--),e[s]=new t.Token("plain-text",i,null,i)}o.content&&"string"!==typeof o.content&&n(o.content)}};t.hooks.add("after-tokenize",(function(t){"jsx"!==t.language&&"tsx"!==t.language||c(t.tokens)}))}(Prism)}}]);
//# sourceMappingURL=242.91f7f030.chunk.js.map