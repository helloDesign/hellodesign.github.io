(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2160a3"],{c187:function(s,a,t){"use strict";t.r(a);var n=function(){var s=this;s._self._c;return s._m(0)},v=[function(){var s=this,a=s._self._c;return a("div",[a("h1",[s._v("操作节点内容")]),a("p",[s._v(" 目前支持在节点中插入"),a("code",[s._v("图片")]),s._v("、"),a("code",[s._v("图标")]),s._v("、"),a("code",[s._v("超链接")]),s._v("、"),a("code",[s._v("备注")]),s._v("、"),a("code",[s._v("标签")]),s._v("、"),a("code",[s._v("概要")]),s._v("、"),a("code",[s._v("关联线")]),s._v("，本节教程会介绍如何通过UI界面来完成这些内容的插入。 ")]),a("h2",[s._v("监听节点激活事件")]),a("p",[s._v(" 首先我们要监听节点的激活事件，如果当前没有激活节点，那么对应的UI界面肯定是禁用状态。可以通过"),a("code",[s._v("node_active")]),s._v("事件来监听节点激活事件： ")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" activeNodes = shallowRef([])\nmindMap.on("),a("span",{staticClass:"hljs-string"},[s._v("'node_active'")]),s._v(", "),a("span",{staticClass:"hljs-function"},[s._v("("),a("span",{staticClass:"hljs-params"},[s._v("node, activeNodeList")]),s._v(") =>")]),s._v(" {\n    activeNodes.value = activeNodeList\n})\n")])]),a("p",[s._v(" 你还可以进一步判断当前激活的节点中是否操作根节点，是否存在概要节点，因为根节点肯定不能添加兄弟节点，概要节点则子节点、兄弟节点、概要节点、关联线都不能添加。 ")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" hasRoot = computed("),a("span",{staticClass:"hljs-function"},[s._v("() =>")]),s._v(" {\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" activeNodes.value.findIndex("),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[s._v("node")]),s._v(" =>")]),s._v(" {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" node.isRoot\n    }) !== -"),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("\n})\n\n\n"),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" hasGeneralization = computed("),a("span",{staticClass:"hljs-function"},[s._v("() =>")]),s._v(" {\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" activeNodes.value.findIndex("),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[s._v("node")]),s._v(" =>")]),s._v(" {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" node.isGeneralization\n    }) !== -"),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("\n})\n")])]),a("p",[s._v(" 有了这些判断以后，我们就可以对工具按钮进行控制了，接下来就是实现按钮的相关功能。 ")]),a("h2",[s._v("插入图片")]),a("p",[s._v(" 选择图片和上传图片的功能需要你自行开发，假设我们已经上传了一张图片，我们就可以遍历当前激活的节点，挨个调用节点的"),a("code",[s._v("setImage")]),s._v("方法设置图片： ")]),a("pre",{staticClass:"hljs"},[a("code",[s._v("activeNodes.value.forEach("),a("span",{staticClass:"hljs-function"},[s._v("("),a("span",{staticClass:"hljs-params"},[s._v("node")]),s._v(") =>")]),s._v(" {\n    node.setImage({\n        "),a("span",{staticClass:"hljs-attr"},[s._v("url")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'图片url'")]),s._v(",\n        "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'图片的标题或描述'")]),s._v(",\n        "),a("span",{staticClass:"hljs-attr"},[s._v("width")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("100")]),s._v(","),a("span",{staticClass:"hljs-comment"},[s._v("// 图片的宽高也不能少")]),s._v("\n        "),a("span",{staticClass:"hljs-attr"},[s._v("height")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("100")]),s._v("\n    })\n})\n")])]),a("p",[s._v(" 图片回显也很简单，可以使用节点的"),a("code",[s._v("getData")]),s._v("方法获取节点的图片： ")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" img = activeNode.getData("),a("span",{staticClass:"hljs-string"},[s._v("'image'")]),s._v(")\n"),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" imgTitle = activeNode.getData("),a("span",{staticClass:"hljs-string"},[s._v("'imageTitle'")]),s._v(")\n")])]),a("h2",[s._v("插入图标")]),a("p",[s._v(" 整体逻辑和插入图片是一样的，不过你需要显示所有可插入的图标，目前只能使用库里自带的一些图标，然后将选择的图标插入到节点中： ")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" iconList = ["),a("span",{staticClass:"hljs-string"},[s._v("'priority_1'")]),s._v(", "),a("span",{staticClass:"hljs-string"},[s._v("'...'")]),s._v("]"),a("span",{staticClass:"hljs-comment"},[s._v("// 选择的图标")]),s._v("\nactiveNodes.value.forEach("),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[s._v("node")]),s._v(" =>")]),s._v(" {\n    node.setIcon(iconList)\n})\n")])]),a("p",[s._v("获取节点的图标数据：")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" iconList = activeNode.getData("),a("span",{staticClass:"hljs-string"},[s._v("'icon'")]),s._v(") || []\n")])]),a("h2",[s._v("插入超链接")]),a("p",[s._v(" 对于超链接，你需要实现两个输入框，分别输入"),a("code",[s._v("url")]),s._v("和名称，然后插入到节点： ")]),a("pre",{staticClass:"hljs"},[a("code",[s._v("activeNodes.value.forEach("),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[s._v("node")]),s._v(" =>")]),s._v(" {\n    node.setHyperlink("),a("span",{staticClass:"hljs-string"},[s._v("'url'")]),s._v(", "),a("span",{staticClass:"hljs-string"},[s._v("'名称'")]),s._v(")\n})\n")])]),a("p",[s._v("获取节点超链接数据：")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" url = activeNode.getData("),a("span",{staticClass:"hljs-string"},[s._v("'hyperlink'")]),s._v(")\n"),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" name = activeNode.getData("),a("span",{staticClass:"hljs-string"},[s._v("'hyperlinkTitle'")]),s._v(")\n")])]),a("h2",[s._v("插入备注")]),a("p",[s._v("备注会稍微复杂一点，因为支持两种方式。")]),a("h3",[s._v("使用内置逻辑")]),a("p",[s._v(" 使用内置的逻辑，只能插入纯文本备注，所以你只需要显示一个输入框用来输入文本，然后插入到节点： ")]),a("pre",{staticClass:"hljs"},[a("code",[s._v("activeNodes.value.forEach("),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[s._v("node")]),s._v(" =>")]),s._v(" {\n    node.setNote("),a("span",{staticClass:"hljs-string"},[s._v("'备注内容'")]),s._v(")\n})\n")])]),a("p",[s._v("这样在鼠标移入节点内的备注图标时会显示你插入的备注内容。")]),a("h3",[s._v("自定义显示备注")]),a("p",[s._v(" 如果你想显示更丰富的备注内容，比如支持"),a("code",[s._v("markdown")]),s._v("，那么你可以在实例化"),a("code",[s._v("simple-mind")]),s._v("时插入"),a("code",[s._v("customNoteContentShow")]),s._v("选项。 ")]),a("p",[s._v(" 设置备注内容还是使用"),a("code",[s._v("setNote")]),s._v("方法，只不过现在插入的是"),a("code",[s._v("markdown")]),s._v("字符串，因为内置的备注弹窗只能处理纯文本内容，所以你需要自己来渲染"),a("code",[s._v("markdown")]),s._v("： ")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" mindMap = "),a("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" MindMap({\n    "),a("span",{staticClass:"hljs-comment"},[s._v("// ...")]),s._v("\n    "),a("span",{staticClass:"hljs-attr"},[s._v("customNoteContentShow")]),s._v(": {\n        "),a("span",{staticClass:"hljs-attr"},[s._v("show")]),s._v(": "),a("span",{staticClass:"hljs-function"},[s._v("("),a("span",{staticClass:"hljs-params"},[s._v("content, left, top")]),s._v(") =>")]),s._v(" {\n            "),a("span",{staticClass:"hljs-comment"},[s._v("// 在这里显示你的自定义弹窗")]),s._v("\n            "),a("span",{staticClass:"hljs-comment"},[s._v("// content表示你插入的备注的内容，left和top时弹窗应该显示的位置，你需要将你的弹窗元素设置成fixed定位")]),s._v("\n        },\n        "),a("span",{staticClass:"hljs-attr"},[s._v("hide")]),s._v(": "),a("span",{staticClass:"hljs-function"},[s._v("() =>")]),s._v(" {\n            "),a("span",{staticClass:"hljs-comment"},[s._v("// 在这里隐藏你的自定义弹窗")]),s._v("\n            "),a("span",{staticClass:"hljs-comment"},[s._v("// 你也可以选择不在鼠标移出备注图标时隐藏弹窗，比如可以在画布被点击时隐藏")]),s._v("\n        }\n    },\n})\n")])]),a("p",[s._v("获取节点的备注内容可以通过"),a("code",[s._v("getData")]),s._v("方法：")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" note = activeNode.getData("),a("span",{staticClass:"hljs-string"},[s._v("'note'")]),s._v(")\n")])]),a("h2",[s._v("插入标签")]),a("p",[s._v(" 标签其实就是一个个带背景颜色的文本块，你需要实现的就是一个可以输入多个文本的输入框，然后插入到节点： ")]),a("pre",{staticClass:"hljs"},[a("code",[s._v("activeNodes.value.forEach("),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[s._v("node")]),s._v(" =>")]),s._v(" {\n    node.setTag(["),a("span",{staticClass:"hljs-string"},[s._v("'标签1'")]),s._v(", "),a("span",{staticClass:"hljs-string"},[s._v("'...'")]),s._v("])\n})\n")])]),a("p",[s._v("获取节点标签数据：")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" tagArr = activeNode.getData("),a("span",{staticClass:"hljs-string"},[s._v("'tag'")]),s._v(") || []\n")])]),a("h2",[s._v("插入概要")]),a("p",[s._v("插入概要可以不需要实现UI，直接调用插入概要的命令即可：")]),a("pre",{staticClass:"hljs"},[a("code",[s._v("mindMap.execCommand("),a("span",{staticClass:"hljs-string"},[s._v("'ADD_GENERALIZATION'")]),s._v(", data)\n")])]),a("p",[s._v(" 会给当前激活的节点插入一个概要节点，第二个参数"),a("code",[s._v("data")]),s._v("可以不传，默认为： ")]),a("pre",{staticClass:"hljs"},[a("code",[s._v("{\n    "),a("span",{staticClass:"hljs-attr"},[s._v("text")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'概要'")]),s._v("\n}\n")])]),a("p",[s._v("概要节点本质上也是一个节点，所以普通节点支持的内容它也支持。")]),a("h2",[s._v("插入关联线")]),a("blockquote",[a("p",[s._v("要支持关联线需要使用关联线插件")])]),a("p",[s._v("关联线也不需要UI，调用一个方法即可：")]),a("pre",{staticClass:"hljs"},[a("code",[s._v("mindMap.associativeLine.createLineFromActiveNode()\n")])]),a("p",[s._v(" 然后会从激活的节点（如果有多个激活节点，默认是第一个）到鼠标的实时位置生成一条曲线，点击某个目标节点后就会创建一条从激活节点到目标节点的关联线。 ")]),a("h2",[s._v("完整示例")]),a("iframe",{staticStyle:{width:"100%",height:"455px",border:"none"},attrs:{src:"https://wanglin2.github.io/playground/#eNrFV/9PHEUU/1cma8we5tiDRmKCBykFRBJAQ5poZRuy7M7dDezObHfn4AghsVRK0Vb6xWjTRq2mraYqaULTCA3wz7B3x3/hm539dsdhzvhDSQ5m3rzPe+/el88Ma8qI62rLVawMKkXf9IjLkY951R3WKXFc5nG0hjxcyiNGp1mVcmzlkV8xbJutzOISWkcljzlIBQtqgpgm1Jo2XHmkKz6IbdzrgLTXMVxd0SlCOrUxR0ImNIcQrdq2lBcKKDh8EGzfqR9/WX/1pvHoq+bXG42N/eDWD81fftepyajPkWFysoxnmIV9QKcR5eau9ug0tFLfuR9sPgseHzW2t2IYoT72Jh2jjAGV60FDw2hNuM2Y05YNu4q1EvPGDbOSy1EQpooIib0GOQqt5CKh+Kl69iBSK5y7/mChYNeuUX/V15jv95q0dwGTRULLmmGT1So1fc1kTuGaXSvUKhdGPl+6VLviDCxO4IHS2Adjn13xRgcWNJeW1XxqnhNuY3AgvxCkpf5k6/TXh/Vb39d3dprHL7O6K8TilUHU39eXF+mMEcHu4ekfD0/2fz75+07zxmHw8l4KqWBSrvAQI4XrIo9c/F5vTyh4bkkon4RNa0KjU/gzRWAxhOZU1yPMI3x1vl/No3R3Qb367xUQCe+Uf7Cdix2cE2vz9ebpg6P6t89aw50idKnb+p/j/eNVF3s22MmFFc8UXBRWfMHG3Zv1G3unP94P9l8Fuz+dvrgd7D5Vz0vq0636XtLcMsoZxrvu0nOiFCZyqjQe3NwMdvfPCwBK2vjrqDWAy0b5f/oHC7k5VdoOqy6XUPLzwni+0Xx+vTWMCaM1iog0NFzD5ihzHINaOXVkbGx+YnxmfHZkavKLkcuTn8yAu1Bd5xzXoLHV5taLYPfRyf62dBLlQ6h0qMfmXvP6d42D4zON01aSOBjD95lJDJEfoaSZHjZ4uPwIWHAkSVwudpXwae6sNcGHeCXm0ZhjMNCLxcyqgynXypiP21gsL61OwvePkKOMcgOcempPRAeWwY3BuC6QDUUIdCUjkmKRJCHWlfqTfcm4kqlDLki4RVfMCrEtD1OhPJfaaDPX0Uu7p5OD242D39qdtTrs4DTki7N6bymCeBnJYhyhhM8yBiNo4U+ZTzhhFJCqjUtcTIIJpYMyhaj1ng/l3YcQdGDj8b3g7p8yJnkHnhx8c/LmdbbdgPpUMWTzciTBYDiC+XDyQkLMTOOZsRX9Fekl7Q+fYkG+AODuhw3HcG1DD8MOoaJFlpFpQ5cP6UoUxBh2mK6Ex5ECsdLTpBNBpViA06xibIkzZi8YoIKWe0kJBNlQbUzLvIKGUV/iRefFhSrncNlcNG1iLgEivdFBK3vlFwtSNYKC547Q8B7JQoGiuoWKeySBJndNt2hBzqnjkKO7hQKvJkhJqd0iJ2AmYmBIg//hu2aijemxDZ0WOl4VC5k+gq3PV23ZUhej16KuaAX5RIz4TsO+o5m+ryvJVGiZlou7On3jvBvqIeQmY+Zh8AiNFB6EEyo+77S3ZmwqBRoLPrOrXAIREsM6iPqiHWduujnrPn5Bvd/X59Ziz539vhd7dgyvTMBvbNU1LAueibEgCV2LJqXLiPvjCKKgkz0YhCkPa6DkFVkB8SjXFn1G4X8AeWNGB1CBhD51BZ74kjO1Aiw1Dy4v4mBRrN4Fj61Aj4ARXYnor8OzX2LPllqgotjWlfV/AEgelAo="}})])}],e={},l=e,c=t("829d"),i=Object(c["a"])(l,n,v,!1,null,null,null);a["default"]=i.exports}}]);