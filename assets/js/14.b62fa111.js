(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{362:function(e,t,r){"use strict";r.r(t);var a=r(42),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"reactivity-api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reactivity-api"}},[e._v("#")]),e._v(" Reactivity API")]),e._v(" "),r("p",[r("code",[e._v("Ovee.js")]),e._v(" reactivity is based on "),r("code",[e._v("Vue 3")]),e._v(" reactivity system. It uses two packages:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-next/tree/master/packages/reactivity",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("@vue/reactivity")]),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-next/tree/master/packages/runtime-core",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("@vue/runtime-core")]),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("Features are filtered from these packages, but if you ever feel like something is missing, just create a new issue! 👉 "),r("a",{attrs:{href:"https://github.com/owlsdepartment/ovee/issues/new",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ovee.js"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("Most of this documentation links to external "),r("code",[e._v("Vue 3")]),e._v(" docs, as they did a great job documenting all of it's features and functionalities! So for explicit explenation of every feature (except "),r("code",[e._v("ReactiveProxy")]),e._v(" and "),r("code",[e._v("makeComponentReactive")]),e._v("), we recommend going straight there:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://v3.vuejs.org/api/reactivity-api.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue 3 Reactivity API"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"reactiveproxy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reactiveproxy"}},[e._v("#")]),e._v(" ReactiveProxy")]),e._v(" "),r("p",[e._v("Utility class, that creates "),r("code",[e._v("Vue 3")]),e._v(" "),r("code",[e._v("reactive")]),e._v(" instance and allows you for a selective field reactivity. You can find it in "),r("code",[e._v("Components")]),e._v(", that uses any decorator which requires from a component to be reactive. It's applied through helper "),r("code",[e._v("makeComponentReactive")]),e._v(" and you probably don't need to use it at all.")]),e._v(" "),r("h2",{attrs:{id:"makecomponentreactive"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#makecomponentreactive"}},[e._v("#")]),e._v(" makeComponentReactive")]),e._v(" "),r("p",[e._v("Applies "),r("code",[e._v("ReactiveProxy")]),e._v(" on a component and saves it's instance under "),r("code",[e._v("protectedFields.REACTIVE_PROXY")]),e._v(", only if given object already doesn't have "),r("code",[e._v("ReactiveProxy")]),e._v(" applied. It's useful if you make a custom decorator which functionality is based on reactivity of a component. In any other case, you don't really need it.")]),e._v(" "),r("h2",{attrs:{id:"reactive-objects-api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reactive-objects-api"}},[e._v("#")]),e._v(" Reactive objects API")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("makeReactive")]),e._v(" - Used to create reactive objects. Alias for Vue 3: "),r("a",{attrs:{href:"https://v3.vuejs.org/api/basic-reactivity.html#reactive",target:"_blank",rel:"noopener noreferrer"}},[e._v("reactive"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("code",[e._v("makeComputed")]),e._v(" - Used to create computed function with lazy evaluation, that reevaluates only when reactive dependencies change. Alias for Vue 3: "),r("a",{attrs:{href:"https://v3.vuejs.org/api/computed-watch-api.html#computed",target:"_blank",rel:"noopener noreferrer"}},[e._v("computed"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("code",[e._v("readonly")]),e._v(" - Create readonly proxy object. Vue 3 docs: "),r("a",{attrs:{href:"https://v3.vuejs.org/api/basic-reactivity.html#readonly",target:"_blank",rel:"noopener noreferrer"}},[e._v("readonly"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("code",[e._v("isProxy")]),e._v(" - Check if object is Proxy created by "),r("code",[e._v("makeReactive")]),e._v(" or "),r("code",[e._v("readonly")]),e._v(". Vue 3 docs: "),r("a",{attrs:{href:"https://v3.vuejs.org/api/basic-reactivity.html#isproxy",target:"_blank",rel:"noopener noreferrer"}},[e._v("isProxy"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("code",[e._v("isReactive")]),e._v(" - Check if object was created by "),r("code",[e._v("makeReactive")]),e._v(". Vue 3 docs: "),r("a",{attrs:{href:"https://v3.vuejs.org/api/basic-reactivity.html#isreactive",target:"_blank",rel:"noopener noreferrer"}},[e._v("isReactive"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("code",[e._v("isReadonly")]),e._v(" - Check if object was ceated by "),r("code",[e._v("readonly")]),e._v(". Vue 3 docs: "),r("a",{attrs:{href:"https://v3.vuejs.org/api/basic-reactivity.html#isreadonly",target:"_blank",rel:"noopener noreferrer"}},[e._v("isReadonly"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("code",[e._v("toRaw")]),e._v(" - Returns target object of "),r("code",[e._v("makeReactive")]),e._v(" proxy. Vue 3 docs: "),r("a",{attrs:{href:"https://v3.vuejs.org/api/basic-reactivity.html#toraw",target:"_blank",rel:"noopener noreferrer"}},[e._v("toRaw"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("code",[e._v("markRaw")]),e._v(" - Prevent object from converting to reactive one. Vue 3 docs: "),r("a",{attrs:{href:"https://v3.vuejs.org/api/basic-reactivity.html#markraw",target:"_blank",rel:"noopener noreferrer"}},[e._v("markRaw"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("code",[e._v("shallowReactive")]),e._v(" - Creates a reactive proxy that tracks reactivity of its own properties but does not perform deep reactive conversion of nested objects (exposes raw values). Vue 3 docs: "),r("a",{attrs:{href:"https://v3.vuejs.org/api/basic-reactivity.html#shallowreactive",target:"_blank",rel:"noopener noreferrer"}},[e._v("shallowReactive"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("code",[e._v("shallowReadonly")]),e._v(" - Creates a proxy that makes its own properties readonly, but does not perform deep readonly conversion of nested objects (exposes raw values). Vue 3 docs: "),r("a",{attrs:{href:"https://v3.vuejs.org/api/basic-reactivity.html#shallowreadonly",target:"_blank",rel:"noopener noreferrer"}},[e._v("shallowReactive"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"ref-api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ref-api"}},[e._v("#")]),e._v(" Ref API")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("ref")]),e._v(" - Creates reactive mutable object with field "),r("code",[e._v(".value")]),e._v(" for single value. Vue 3 docs: "),r("a",{attrs:{href:"https://v3.vuejs.org/api/refs-api.html#ref",target:"_blank",rel:"noopener noreferrer"}},[e._v("ref"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("code",[e._v("unref")]),e._v(" - Return inner value if argument is "),r("code",[e._v("ref")]),e._v(", else return argument untouched. Vue 3 docs: "),r("a",{attrs:{href:"https://v3.vuejs.org/api/refs-api.html#unref",target:"_blank",rel:"noopener noreferrer"}},[e._v("unref"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("code",[e._v("toRef")]),e._v(" - Create "),r("code",[e._v("ref")]),e._v(" from a "),r("code",[e._v("reactive")]),e._v(" objects single property, retaining it's reactivity. Vue 3 docs: "),r("a",{attrs:{href:"https://v3.vuejs.org/api/refs-api.html#toref",target:"_blank",rel:"noopener noreferrer"}},[e._v("toRef"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("code",[e._v("toRefs")]),e._v(" - Same as "),r("code",[e._v("toRef")]),e._v(", but for a whole object, where each field is a "),r("code",[e._v("ref")]),e._v(". Vue 3 docs: "),r("a",{attrs:{href:"https://v3.vuejs.org/api/refs-api.html#torefs",target:"_blank",rel:"noopener noreferrer"}},[e._v("toRefs"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("code",[e._v("isRef")]),e._v(" - Check if value is "),r("code",[e._v("ref")]),e._v(" object. Vue 3 docs: "),r("a",{attrs:{href:"https://v3.vuejs.org/api/refs-api.html#torefs",target:"_blank",rel:"noopener noreferrer"}},[e._v("isRef"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("code",[e._v("customRef")]),e._v(" - Creates a customized ref with explicit control over its dependency tracking and updates triggering. Vue 3 docs: "),r("a",{attrs:{href:"https://v3.vuejs.org/api/refs-api.html#customref",target:"_blank",rel:"noopener noreferrer"}},[e._v("customRef"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("code",[e._v("shallowRef")]),e._v(" - Creates a "),r("code",[e._v("ref")]),e._v(" that tracks its own "),r("code",[e._v(".value")]),e._v(" mutation but doesn't make its value reactive. Vue 3 docs: "),r("a",{attrs:{href:"https://v3.vuejs.org/api/refs-api.html#shallowref",target:"_blank",rel:"noopener noreferrer"}},[e._v("shallowRef"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("code",[e._v("triggerRef")]),e._v(" - Execute any effects tied to a "),r("code",[e._v("shallowRef")]),e._v(" manually. Vue 3 docs: "),r("a",{attrs:{href:"https://v3.vuejs.org/api/refs-api.html#triggerref",target:"_blank",rel:"noopener noreferrer"}},[e._v("triggerRef"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"watch-api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#watch-api"}},[e._v("#")]),e._v(" Watch API")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("doWatch")]),e._v(" - Watch for changes in specified source. Alias for Vue 3: "),r("a",{attrs:{href:"https://v3.vuejs.org/api/computed-watch-api.html#watch",target:"_blank",rel:"noopener noreferrer"}},[e._v("watch"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("code",[e._v("doWatchEffect")]),e._v(" - Immediate watch, that can automatically detect all reactive sources used inside. Alias for Vue 3: "),r("a",{attrs:{href:"https://v3.vuejs.org/api/computed-watch-api.html#watcheffect",target:"_blank",rel:"noopener noreferrer"}},[e._v("watchEffect"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("code",[e._v("makeComputed")]),e._v(" - Creates a cachable function that recalculates its value whenever reactive values change inside. Alias for Vue 3: "),r("a",{attrs:{href:"https://v3.vuejs.org/api/computed-watch-api.html#computed",target:"_blank",rel:"noopener noreferrer"}},[e._v("computed"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=o.exports}}]);