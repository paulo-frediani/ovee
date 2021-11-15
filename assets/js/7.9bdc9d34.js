(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{356:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"addons"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#addons"}},[t._v("#")]),t._v(" Addons")]),t._v(" "),s("p",[t._v("To keep things tide, Ovee doesn't come with any modules by itself. Yet, we ship some official, ready-made modules that would help your workflow as a separate packages.")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#barba-js-plugin"}},[t._v("Barba.js Plugin")]),s("ul",[s("li",[s("a",{attrs:{href:"#installation"}},[t._v("Installation")])]),s("li",[s("a",{attrs:{href:"#getting-started"}},[t._v("Getting Started")])]),s("li",[s("a",{attrs:{href:"#available-options"}},[t._v("Available Options")])]),s("li",[s("a",{attrs:{href:"#methods"}},[t._v("Methods")])]),s("li",[s("a",{attrs:{href:"#hooks"}},[t._v("Hooks")])]),s("li",[s("a",{attrs:{href:"#plugins"}},[t._v("Plugins")])]),s("li",[s("a",{attrs:{href:"#defining-custom-transitions"}},[t._v("Defining Custom Transitions")])]),s("li",[s("a",{attrs:{href:"#more-on-barba-js"}},[t._v("More on Barba.js")])])])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"barba-js-plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#barba-js-plugin"}},[t._v("#")]),t._v(" Barba.js Plugin")]),t._v(" "),s("p",[t._v("A module that hooks "),s("a",{attrs:{href:"https://barba.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Barba.js v2"),s("OutboundLink")],1),t._v(" to your Ovee.js App.")]),t._v(" "),s("h3",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" @ovee.js/barba\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save @ovee.js/barba\n")])])]),s("h3",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),s("p",[t._v("The module is simply a wrapper around the excellent Barba.js. We try to keep everything raw, so you should simply follow the library's "),s("a",{attrs:{href:"https://barba.js.org/docs/getstarted/intro/",target:"_blank",rel:"noopener noreferrer"}},[t._v("docs"),s("OutboundLink")],1),t._v(" to set up your markup and set proper options.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" App "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ovee.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" OveeBarba "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@ovee.js/barba'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" defaultTransition "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'transitions'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" root "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("App")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("OveeBarba"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    transitions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        defaultTransition\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    timeout"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    preventRunning"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    hooks"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("after")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("global"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dataLayer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    global"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dataLayer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        event"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content-view'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content-name'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" global"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pathname\n                    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// eslint-disable-next-line no-empty")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"available-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#available-options"}},[t._v("#")]),t._v(" Available Options")]),t._v(" "),s("p",[t._v("The module's options object accepts same set of options that Barba would use. Additionally, you can set the following custom options:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Option")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Default Value")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("plugins")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("[]")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("add Barba plugins from "),s("a",{attrs:{href:"https://barba.js.org/docs/plugins/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Plugins"),s("OutboundLink")],1),t._v(". More in section "),s("a",{attrs:{href:"#plugins"}},[t._v("Plugins")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("hooks")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("{}")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("you can pass methods to hook into Barba's lifecycle globally. More in section "),s("a",{attrs:{href:"#hooks"}},[t._v("Hooks")])])])])]),t._v(" "),s("h3",{attrs:{id:"methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Method")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("$go(href: string, trigger?: Trigger, e?: LinkEvent | PopStateEvent)")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Tell Barba to go to a specific URL")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("$prefetch(href: string)")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Prefetch the given URL")])])])]),t._v(" "),s("h3",{attrs:{id:"hooks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hooks"}},[t._v("#")]),t._v(" Hooks")]),t._v(" "),s("p",[t._v("You can add globall hooks callbacks in module options under "),s("code",[t._v("hooks")]),t._v(" option. Every hook also emits global event on "),s("code",[t._v("$app")]),t._v(" instance. Available hooks and theire events are:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("before")]),t._v(" | event: "),s("code",[t._v("barba:before")])]),t._v(" "),s("li",[s("code",[t._v("beforeLeave")]),t._v(" | event: "),s("code",[t._v("barba:before-leave")])]),t._v(" "),s("li",[s("code",[t._v("leave")]),t._v(" | event: "),s("code",[t._v("barba:leave")])]),t._v(" "),s("li",[s("code",[t._v("afterLeave")]),t._v(" | event: "),s("code",[t._v("barba:after-leave")])]),t._v(" "),s("li",[s("code",[t._v("beforeEnter")]),t._v(" | event: "),s("code",[t._v("barba:before-enter")])]),t._v(" "),s("li",[s("code",[t._v("enter")]),t._v(" | event: "),s("code",[t._v("barba:enter")])]),t._v(" "),s("li",[s("code",[t._v("afterEnter")]),t._v(" | event: "),s("code",[t._v("barba:after-enter")])]),t._v(" "),s("li",[s("code",[t._v("after")]),t._v(" | event: "),s("code",[t._v("barba:after")])])]),t._v(" "),s("h3",{attrs:{id:"plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugins"}},[t._v("#")]),t._v(" Plugins")]),t._v(" "),s("p",[t._v("To add Barba plugins, you need to install it in you project and pass to "),s("code",[t._v("plugins")]),t._v(" option. Example:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" App "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ovee.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" OveeBarba "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@ovee.js/barba'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" barbaPrefetch "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@barba/prefetch'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" barbaRouter "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@barba/router'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" root "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("App")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("OveeBarba"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    plugins"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        barbaPrefetch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("barbaRouter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" routes"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* barba routes here */")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"defining-custom-transitions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#defining-custom-transitions"}},[t._v("#")]),t._v(" Defining Custom Transitions")]),t._v(" "),s("p",[t._v("To define your transitions, just pass transition definitions to "),s("code",[t._v("transitions")]),t._v(" array of the module config. We don't do anything with them by any meaning, so you shall just follow the "),s("a",{attrs:{href:"https://barba.js.org/docs/advanced/transitions/",target:"_blank",rel:"noopener noreferrer"}},[t._v("official docs"),s("OutboundLink")],1),t._v(" to get more details.")]),t._v(" "),s("h3",{attrs:{id:"more-on-barba-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#more-on-barba-js"}},[t._v("#")]),t._v(" More on Barba.js")]),t._v(" "),s("p",[t._v("Barba.js is a popular, well-documented library. To learn how to use it, please follow the "),s("a",{attrs:{href:"https://barba.js.org/docs/getstarted/intro/",target:"_blank",rel:"noopener noreferrer"}},[t._v("official documentation"),s("OutboundLink")],1),t._v(". To learn more, refer to many good tutorials about Barba that you'll find over the Internet.")])])}),[],!1,null,null,null);a.default=e.exports}}]);