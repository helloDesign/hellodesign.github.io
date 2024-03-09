(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0be174"],{"2f7a":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this;e._self._c;return e._m(0)},n=[function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("KeyCommand instance")]),t("p",[e._v(" The "),t("code",[e._v("keyCommand")]),e._v(" instance is responsible for adding and triggering shortcuts. It includes some built-in shortcuts and can also be added manually. The "),t("code",[e._v("mindMap.keyCommand")]),e._v(" instance can be obtained through this. ")]),t("h2",[e._v("Methods")]),t("h3",[e._v("addShortcut(key, fn)")]),t("p",[e._v("Add a shortcut")]),t("p",[t("code",[e._v("key")]),e._v(": Shortcut key, key values can be viewed at "),t("a",{attrs:{href:"https://github.com/wanglin2/mind-map/blob/main/simple-mind/src/core/command/keyMap.js"}},[e._v("keyMap.js")]),e._v(" Example: ")]),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-comment"},[e._v("// Single key")]),e._v("\nmindMap.keyCommand.addShortcut("),t("span",{staticClass:"hljs-string"},[e._v('"Enter"')]),e._v(", "),t("span",{staticClass:"hljs-function"},[e._v("() =>")]),e._v(" {});\n"),t("span",{staticClass:"hljs-comment"},[e._v("// Or")]),e._v("\nmindMap.keyCommand.addShortcut("),t("span",{staticClass:"hljs-string"},[e._v('"Del|Backspace"')]),e._v(", "),t("span",{staticClass:"hljs-function"},[e._v("() =>")]),e._v(" {});\n"),t("span",{staticClass:"hljs-comment"},[e._v("// Combination key")]),e._v("\nmindMap.keyCommand.addShortcut("),t("span",{staticClass:"hljs-string"},[e._v('"Control+Enter"')]),e._v(", "),t("span",{staticClass:"hljs-function"},[e._v("() =>")]),e._v(" {});\n")])]),t("p",[t("code",[e._v("fn")]),e._v(": Method to be executed")]),t("h3",[e._v("removeShortcut(key, fn)")]),t("p",[e._v(" Remove a shortcut command, if "),t("code",[e._v("fn")]),e._v(" is not specified, all callback methods for the shortcut will be removed ")]),t("h3",[e._v("getShortcutFn(key)")]),t("blockquote",[t("p",[e._v("v0.2.2+")])]),t("p",[e._v("Get the processing function for the specified shortcut")]),t("h3",[e._v("pause()")]),t("blockquote",[t("p",[e._v("v0.2.2+")])]),t("p",[e._v("Pause all shortcut responses")]),t("h3",[e._v("recovery()")]),t("blockquote",[t("p",[e._v("v0.2.2+")])]),t("p",[e._v("Restore shortcut responses")]),t("h3",[e._v("save()")]),t("blockquote",[t("p",[e._v("v0.2.3+")])]),t("p",[e._v(" Save the current registered shortcut data, then clear the shortcut data ")]),t("h3",[e._v("restore()")]),t("blockquote",[t("p",[e._v("v0.2.3+")])]),t("p",[e._v("Restore saved shortcut data, then clear the cache data")]),t("h3",[e._v("hasCombinationKey(e)")]),t("blockquote",[t("p",[e._v("v0.6.13+")])]),t("ul",[t("li",[t("code",[e._v("e")]),e._v(": Event object.")])]),t("p",[e._v("Determine if the combination key has been pressed.")])])}],o={},c=o,v=s("829d"),i=Object(v["a"])(c,a,n,!1,null,null,null);t["default"]=i.exports}}]);