(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{541:function(t,s,a){"use strict";a.r(s);var n=a(12),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"python"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python"}},[t._v("#")]),t._v(" python")]),t._v(" "),a("h2",{attrs:{id:"python模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python模块"}},[t._v("#")]),t._v(" python模块")]),t._v(" "),a("h3",{attrs:{id:"json模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json模块"}},[t._v("#")]),t._v(" json模块")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("将json对象转化为字符串")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" json\njsonStr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dumps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("jsonObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用参数让json数据格式化输出")]),t._v("\njsonStr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dumps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("jsonObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sort_keys "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" indent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" separators "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("', '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("': '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("将json字符串转化为json对象")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("jsonObject "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loads"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("jsonStr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("写入json数据")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'w'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dump"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("jsonObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用参数让json数据格式化写入")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'w'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dump"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("jsonObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sort_keys"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" indent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("separators"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("', '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("': '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("读取json数据")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'r'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    jsonObject "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])])]),t._v(" "),a("h3",{attrs:{id:"configparser模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configparser模块"}},[t._v("#")]),t._v(" configparser模块")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("配置文件config.ini")]),t._v(" "),a("div",{staticClass:"language-ini line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[section1]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("option1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" value1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("option2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" value2")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[section2]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("option1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" value1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("option2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" value2")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("读配置文件")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" configparser\nconfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" configparser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ConfigParser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'config.ini'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取所有的section")]),t._v("\nse "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sections"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取第一个section下的所有option")]),t._v("\nop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("se"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取第一个section下的所有(option, value)")]),t._v("\nits "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("items"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("se"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#获取第一个section下，第一个option对应的value")]),t._v("\nvalue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("se"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" op"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("写配置文件")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("config "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" configparser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ConfigParser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加一个section")]),t._v("\nconfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add_section"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'section3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在对应section下添加一个(option, value)")]),t._v("\nconfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'section3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'option1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 向config.ini中写入")]),t._v("\nconfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'config.ini'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'w'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])])])]),t._v(" "),a("h3",{attrs:{id:"datetime模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#datetime模块"}},[t._v("#")]),t._v(" datetime模块")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("获取当前系统时间")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" datetime\ntime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datetime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("datetime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("now"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2020-08-10 14:56:21.736977")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("格式化日时")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数格式")]),t._v(" "),a("th",[t._v("描述")]),t._v(" "),a("th",[t._v("输出")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("t = time.strftime('%y')")])]),t._v(" "),a("td",[t._v("两位数年份")]),t._v(" "),a("td",[t._v("20")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("t = time.strftime('%Y')")])]),t._v(" "),a("td",[t._v("四位数年份")]),t._v(" "),a("td",[t._v("2020")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("t = time.strftime('%m')")])]),t._v(" "),a("td",[t._v("两位数月份")]),t._v(" "),a("td",[t._v("08")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("t = time.strftime('%d')")])]),t._v(" "),a("td",[t._v("两位数日期")]),t._v(" "),a("td",[t._v("10")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("t = time.strftime('%H')")])]),t._v(" "),a("td",[t._v("24小时制小时")]),t._v(" "),a("td",[t._v("15")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("t = time.strftime('%I')")])]),t._v(" "),a("td",[t._v("12小时制小时")]),t._v(" "),a("td",[t._v("3")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("t = time.strftime('%M')")])]),t._v(" "),a("td",[t._v("分钟数")]),t._v(" "),a("td",[t._v("08")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("t = time.strftime('%S')")])]),t._v(" "),a("td",[t._v("秒数")]),t._v(" "),a("td",[t._v("47")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("t = time.strftime('%a')")])]),t._v(" "),a("td",[t._v("简化星期名称")]),t._v(" "),a("td",[t._v("Mon")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("t = time.strftime('%A')")])]),t._v(" "),a("td",[t._v("完整星期名称")]),t._v(" "),a("td",[t._v("Monday")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("t = time.strftime('%b')")])]),t._v(" "),a("td",[t._v("简化月份名称")]),t._v(" "),a("td",[t._v("Aug")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("t = time.strftime('%B')")])]),t._v(" "),a("td",[t._v("完整月份名称")]),t._v(" "),a("td",[t._v("August")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("t = time.strftime('%c')")])]),t._v(" "),a("td",[t._v("完整日期时间表示")]),t._v(" "),a("td",[t._v("Mon Aug 10 15:12:45 2020")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("t = time.strftime('%j')")])]),t._v(" "),a("td",[t._v("年内第几天")]),t._v(" "),a("td",[t._v("223")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("t = time.strftime('%p')")])]),t._v(" "),a("td",[t._v("A.M.或P.M.")]),t._v(" "),a("td",[t._v("PM")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("t = time.strftime('%U')")])]),t._v(" "),a("td",[t._v("年内第几个星期，星期天为开始")]),t._v(" "),a("td",[t._v("32")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("t = time.strftime('%w')")])]),t._v(" "),a("td",[t._v("星期0-6，星期天为开始")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("t = time.strftime('%W')")])]),t._v(" "),a("td",[t._v("年内第几个星期，星期一为开始")]),t._v(" "),a("td",[t._v("32")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("t = time.strftime('%x')")])]),t._v(" "),a("td",[t._v("月/日/年表示")]),t._v(" "),a("td",[t._v("08/10/20")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("t = time.strftime('%X')")])]),t._v(" "),a("td",[t._v("时：分：秒时间表示")]),t._v(" "),a("td",[t._v("15:19:32")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("t = time.strftime('%F')")])]),t._v(" "),a("td",[t._v("年-月-日表示")]),t._v(" "),a("td",[t._v("2020-08-10")])])])])])]),t._v(" "),a("h3",{attrs:{id:"openpyxl模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#openpyxl模块"}},[t._v("#")]),t._v(" openpyxl模块")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("新建一个工作簿")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" openpyxl\n\nwb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" openpyxl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Workbook"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nws "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("active "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取新建的sheet")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("加载一个工作簿")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("wb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" openpyxl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load_workbook"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Excel.xlsx'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nws "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Sheet'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("获取工作表的最大行列")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("row "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ws"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("max_row\n\ncol "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ws"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("max_column\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("单元格赋值")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("ws"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'A1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("在现有数据下一行追加一行数据")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("ws"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("设置单元格的行高和列宽")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("ws"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("column_dimensions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'A'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n\nws"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("row_dimensions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("字母和数字的转换")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" openpyxl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utils "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" get_column_letter\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" openpyxl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utils "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" column_index_from_string\n\ncol "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" column_index_from_string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'A'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nletter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" get_column_letter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("插入公式")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("ws"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'A5'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'=AVERAGE(A2:A4)'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("保存工作簿")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("wb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("save"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Excel.xlsx'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])]),t._v(" "),a("h3",{attrs:{id:"beautifulsoup模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#beautifulsoup模块"}},[t._v("#")]),t._v(" BeautifulSoup模块")]),t._v(" "),a("h3",{attrs:{id:"requests模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requests模块"}},[t._v("#")]),t._v(" requests模块")])])}),[],!1,null,null,null);s.default=e.exports}}]);