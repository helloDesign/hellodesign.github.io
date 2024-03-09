(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c53e8"],{"3def":function(s,t,a){"use strict";a.r(t);var l=function(){var s=this;s._self._c;return s._m(0)},n=[function(){var s=this,t=s._self._c;return t("div",[t("h1",[s._v("Scrollbar 插件")]),t("blockquote",[t("p",[s._v("v0.7.0+")]),t("p",[s._v("v0.7.1+进行了重构，下面的文档为新文档。")])]),t("p",[s._v("该插件用于帮助开发水平和垂直滚动条的功能。详细使用方式请参考教程。")]),t("h2",[s._v("注册")]),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" MindMap "),t("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'simple-mind'")]),s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" Scrollbar "),t("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'simple-mind/src/plugins/Scrollbar.js'")]),s._v("\nMindMap.usePlugin(Scrollbar)\n")])]),t("p",[s._v(" 注册完且实例化"),t("code",[s._v("MindMap")]),s._v("后可通过"),t("code",[s._v("mindMap.scrollbar")]),s._v("获取到该实例。 ")]),t("h2",[s._v("事件")]),t("h4",[s._v("scrollbar_change(data)")]),t("ul",[t("li",[t("code",[s._v("data")]),s._v("：滚动条数据，格式如下：")])]),t("pre",{staticClass:"hljs"},[t("code",[s._v("{\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 垂直滚动条")]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("vertical")]),s._v(": {\n        top,"),t("span",{staticClass:"hljs-comment"},[s._v("// 垂直滚动条的top值，百分比数值")]),s._v("\n        height"),t("span",{staticClass:"hljs-comment"},[s._v("// 垂直滚动条的高度，百分比数值")]),s._v("\n    },\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 水平滚动条")]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("horizontal")]),s._v(": {\n        left,"),t("span",{staticClass:"hljs-comment"},[s._v("// 水平滚动条的left值，百分比数值")]),s._v("\n        width"),t("span",{staticClass:"hljs-comment"},[s._v("// 水平滚动条的宽度，百分比数值")]),s._v("\n    }\n}\n")])]),t("p",[s._v(" 当滚动条数据发生改变时触发，你可以监听该事件来更新滚动条位置和大小。接收一个参数，代表当前最新的滚动条位置和大小信息，你可以使用它来更新滚动条元素的样式。 ")]),t("h2",[s._v("方法")]),t("h3",[s._v("setScrollBarWrapSize(width, height)")]),t("ul",[t("li",[t("p",[t("code",[s._v("width")]),s._v("：Number，你的滚动条容器元素的宽度。")])]),t("li",[t("p",[t("code",[s._v("height")]),s._v("： Number，你的滚动条容器元素的高度。")])])]),t("p",[s._v(" 设置滚动条容器的大小，对于水平滚动条，即容器的宽度，对于垂直滚动条，即容器的高度。当你的滚动条容器尺寸改变时需要再次调用该方法。 ")]),t("h3",[s._v("calculationScrollbar()")]),t("blockquote",[t("p",[s._v(" 通常你不需要调用该方法，如果初次渲染滚动条时滚动条没有更新，那么可以手动调用该方法获取滚动条数据。 ")]),t("p",[s._v("需要先调用setScrollBarWrapSize方法设置滚动条容器元素的宽高。")])]),t("p",[s._v("返回值：")]),t("pre",{staticClass:"hljs"},[t("code",[s._v("{\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 垂直滚动条")]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("vertical")]),s._v(": {\n        top,\n        height\n    },\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 水平滚动条")]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("horizontal")]),s._v(": {\n        left,\n        width\n    }\n}\n")])]),t("p",[s._v("获取滚动条大小和位置。")]),t("h3",[s._v("onMousedown(e, type)")]),t("ul",[t("li",[t("p",[t("code",[s._v("e")]),s._v("：鼠标按下事件的事件对象。")])]),t("li",[t("p",[t("code",[s._v("type")]),s._v("：按下的滚动条类型，vertical（垂直滚动条）、horizontal（水平滚动条）。 ")])])]),t("p",[s._v("滚动条元素的鼠标按下事件时需要调用该方法。")]),t("h3",[s._v("onClick(e, type)")]),t("ul",[t("li",[t("p",[t("code",[s._v("e")]),s._v("：鼠标点击事件的事件对象。")])]),t("li",[t("p",[t("code",[s._v("type")]),s._v("：鼠标点击的滚动条类型，vertical（垂直滚动条）、horizontal（水平滚动条）。 ")])])]),t("p",[s._v("滚动条元素的的点击事件时需要调用该方法。")])])}],v={},_=v,c=a("829d"),e=Object(c["a"])(_,l,n,!1,null,null,null);t["default"]=e.exports}}]);