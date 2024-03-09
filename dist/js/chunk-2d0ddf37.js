(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ddf37"],{8427:function(v,_,s){"use strict";s.r(_);var n=function(){var v=this;v._self._c;return v._m(0)},e=[function(){var v=this,_=v._self._c;return _("div",[_("h1",[v._v("XMind解析")]),_("blockquote",[_("p",[v._v("v0.2.7+")])]),_("p",[v._v("提供导入和导出"),_("code",[v._v("XMind")]),v._v("文件的方法。")]),_("h2",[v._v("引入")]),_("pre",{staticClass:"hljs"},[_("code",[_("span",{staticClass:"hljs-keyword"},[v._v("import")]),v._v(" xmind "),_("span",{staticClass:"hljs-keyword"},[v._v("from")]),v._v(" "),_("span",{staticClass:"hljs-string"},[v._v("'simple-mind/src/parse/xmind.js'")]),v._v("\n")])]),_("p",[v._v("如果使用的是"),_("code",[v._v("umd")]),v._v("格式的文件，那么可以通过如下方式获取：")]),_("pre",{staticClass:"hljs"},[_("code",[_("span",{staticClass:"hljs-tag"},[v._v("<"),_("span",{staticClass:"hljs-name"},[v._v("script")]),v._v(" "),_("span",{staticClass:"hljs-attr"},[v._v("src")]),v._v("="),_("span",{staticClass:"hljs-string"},[v._v('"simple-mind/dist/simpleMindMap.umd.min.js"')]),v._v(">")]),_("span",{staticClass:"hljs-tag"},[v._v("</"),_("span",{staticClass:"hljs-name"},[v._v("script")]),v._v(">")]),v._v("\n")])]),_("pre",{staticClass:"hljs"},[_("code",[v._v("simpleMindMap.xmind\n")])]),_("h2",[v._v("方法")]),_("h3",[v._v("xmind.parseXmindFile(file)")]),_("p",[v._v(" 解析"),_("code",[v._v(".xmind")]),v._v("文件，返回解析后的数据，可以使用"),_("code",[v._v("mindMap.setData(data)")]),v._v("来将返回的数据渲染到画布上 ")]),_("p",[_("code",[v._v("file")]),v._v("："),_("code",[v._v("File")]),v._v("对象")]),_("h3",[v._v("xmind.transformXmind(content)")]),_("blockquote",[_("p",[v._v("v0.6.6+版本该方法改为异步方法，返回一个Promise实例")])]),_("p",[v._v(" 转换"),_("code",[v._v("xmind")]),v._v("数据，"),_("code",[v._v(".xmind")]),v._v("文件本质上是一个压缩包，改成"),_("code",[v._v("zip")]),v._v("后缀可以解压缩，里面存在一个"),_("code",[v._v("content.json")]),v._v("文件，如果你自己解析出了这个文件，那么可以把这个文件内容传递给这个方法进行转换，转换后的数据，可以使用"),_("code",[v._v("mindMap.setData(data)")]),v._v("来将返回的数据渲染到画布上 ")]),_("p",[_("code",[v._v("content")]),v._v("："),_("code",[v._v(".xmind")]),v._v("压缩包内的"),_("code",[v._v("content.json")]),v._v("文件内容 ")]),_("h3",[v._v("xmind.transformOldXmind(content)")]),_("blockquote",[_("p",[v._v("v0.2.8+")])]),_("p",[v._v(" 针对"),_("code",[v._v("xmind8")]),v._v("版本的数据解析，因为该版本的"),_("code",[v._v(".xmind")]),v._v("文件内没有"),_("code",[v._v("content.json")]),v._v("，对应的是"),_("code",[v._v("content.xml")]),v._v("。 ")]),_("p",[_("code",[v._v("content")]),v._v("："),_("code",[v._v(".xmind")]),v._v("压缩包内的"),_("code",[v._v("content.xml")]),v._v("文件内容 ")]),_("h3",[v._v("transformToXmind(data, name)")]),_("blockquote",[_("p",[v._v("v0.6.6+")])]),_("ul",[_("li",[_("p",[_("code",[v._v("data")]),v._v("："),_("code",[v._v("simple-mind")]),v._v("思维导图数据，可以通过"),_("code",[v._v("mindMap.getData()")]),v._v("方法获取。 ")])]),_("li",[_("p",[_("code",[v._v("name")]),v._v("：要导出的文件名。")])])]),_("p",[v._v(" 将"),_("code",[v._v("simple-mind")]),v._v("数据转为"),_("code",[v._v("xmind")]),v._v("文件。该方法为异步方法，返回一个"),_("code",[v._v("Promise")]),v._v("实例，返回的数据是一个"),_("code",[v._v("blob")]),v._v("类型的"),_("code",[v._v("zip")]),v._v("压缩包数据，你可以自行下载为文件。 ")])])}],t={},d=t,i=s("829d"),c=Object(i["a"])(d,n,e,!1,null,null,null);_["default"]=c.exports}}]);