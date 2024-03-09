(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d209589"],{a950:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this;e._self._c;return e._m(0)},s=[function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("Scrollbar plugin")]),t("blockquote",[t("p",[e._v("v0.7.0+")]),t("p",[e._v(" V0.7.1+has been refactored, and the following document is a new one. ")])]),t("p",[e._v(" This plugin is used to help develop the functionality of horizontal and vertical scrollbar. Please refer to the tutorial for detailed usage. ")]),t("h2",[e._v("Register")]),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-keyword"},[e._v("import")]),e._v(" MindMap "),t("span",{staticClass:"hljs-keyword"},[e._v("from")]),e._v(" "),t("span",{staticClass:"hljs-string"},[e._v("'simple-mind'")]),e._v("\n"),t("span",{staticClass:"hljs-keyword"},[e._v("import")]),e._v(" Scrollbar "),t("span",{staticClass:"hljs-keyword"},[e._v("from")]),e._v(" "),t("span",{staticClass:"hljs-string"},[e._v("'simple-mind/src/plugins/Scrollbar.js'")]),e._v("\nMindMap.usePlugin(Scrollbar)\n")])]),t("p",[e._v(" After registration and instantiation of "),t("code",[e._v("MindMap")]),e._v(", the instance can be obtained through "),t("code",[e._v("mindMap.scrollbar")]),e._v(". ")]),t("h2",[e._v("Event")]),t("h4",[e._v("scrollbar_change(data)")]),t("pre",{staticClass:"hljs"},[t("code",[e._v("{\n    "),t("span",{staticClass:"hljs-comment"},[e._v("// Vertical scrollbar")]),e._v("\n    "),t("span",{staticClass:"hljs-attr"},[e._v("vertical")]),e._v(": {\n        top,"),t("span",{staticClass:"hljs-comment"},[e._v("// Top value, Percentage value")]),e._v("\n        height"),t("span",{staticClass:"hljs-comment"},[e._v("// Scrollbar height, Percentage value")]),e._v("\n    },\n    "),t("span",{staticClass:"hljs-comment"},[e._v("// Horizontal scrollbar")]),e._v("\n    "),t("span",{staticClass:"hljs-attr"},[e._v("horizontal")]),e._v(": {\n        left,"),t("span",{staticClass:"hljs-comment"},[e._v("// Left value, Percentage value")]),e._v("\n        width"),t("span",{staticClass:"hljs-comment"},[e._v("// Scrollbar width, Percentage value")]),e._v("\n    }\n}\n")])]),t("p",[e._v(" Triggered when the scrollbar data changes, you can listen to this event to update the position and size of the scrollbar. Receive a parameter representing the latest scrollbar position and size information, which you can use to update the style of the scrollbar element. ")]),t("h2",[e._v("Method")]),t("h3",[e._v("setScrollBarWrapSize(width, height)")]),t("ul",[t("li",[t("p",[t("code",[e._v("width")]),e._v(": Number, The width of your scrollbar container element. ")])]),t("li",[t("p",[t("code",[e._v("height")]),e._v(": Number, The height of your scrollbar container element. ")])])]),t("p",[e._v(" Set the size of the scroll bar container, which is the width of the container for horizontal scrollbars and the height of the container for vertical scrollbars. When your scrollbar container size changes, you need to call this method again. ")]),t("h3",[e._v("calculationScrollbar()")]),t("blockquote",[t("p",[e._v(" Usually, you do not need to call this method. If the scroll bar is not updated when rendering for the first time, you can manually call this method to obtain the scroll bar data. ")]),t("p",[e._v(" You need to first call the setScrollBarWrapSize method to set the width and height of the scroll bar container element. ")])]),t("p",[e._v("Return value:")]),t("pre",{staticClass:"hljs"},[t("code",[e._v("{\n    "),t("span",{staticClass:"hljs-comment"},[e._v("// Vertical scrollbar")]),e._v("\n    "),t("span",{staticClass:"hljs-attr"},[e._v("vertical")]),e._v(": {\n        top,\n        height\n    },\n    "),t("span",{staticClass:"hljs-comment"},[e._v("// Horizontal scrollbar")]),e._v("\n    "),t("span",{staticClass:"hljs-attr"},[e._v("horizontal")]),e._v(": {\n        left,\n        width\n    }\n}\n")])]),t("p",[e._v("Obtain the size and position of the scrollbar.")]),t("h3",[e._v("onMousedown(e, type)")]),t("ul",[t("li",[t("p",[t("code",[e._v("e")]),e._v(": The event object for the mouse down event.")])]),t("li",[t("p",[t("code",[e._v("type")]),e._v(": The type of scroll bar pressed, vertical(Vertical scrollbar)、horizontal(Horizontal scrollbar)。 ")])])]),t("p",[e._v(" This method needs to be called when the mouse press event of the scrollbar element occurs. ")]),t("h3",[e._v("onClick(e, type)")]),t("ul",[t("li",[t("p",[t("code",[e._v("e")]),e._v("：The event object for the mouse click event.")])]),t("li",[t("p",[t("code",[e._v("type")]),e._v("：The type of scroll bar on click, vertical(Vertical scrollbar)、horizontal(Horizontal scrollbar)。 ")])])]),t("p",[e._v(" This method needs to be called when the click event of the scrollbar element is triggered. ")])])}],o={},n=o,r=l("829d"),i=Object(r["a"])(n,a,s,!1,null,null,null);t["default"]=i.exports}}]);