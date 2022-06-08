var timu = {}
var timuA = {}
var timuB = {}
var timuC = {}
var timuD = {}
var da = {}
var panduantimu ={}
var panduandaan = {}
var shurupanduan =	{}  //输入的值
var shurupanduanbiaoqian = {}	//输入的标签
var panduanMasda = {} //存放生成的正确答案
var panduanda_value = {}   //存放value值
var yhda = {}  //存放选择值
var Masda =	{}  //存放生成数的正确答案
var yhda_value = {}  //存放按钮的value
var tp = 10 // 相距
var tmnumbers = 5//生成多少道题
var Mas = 0  //生成的随机数
var yhdabq = {} //存放选择标签
var correct = [] //正确长度
var error = [] //错误长度
var arr = []   //优化数组的方法
var duoxuanti_timu = {} //多选题题目
var duoxuanti_A ={} //多选题A
var duoxuanti_B = {} //多选题B
var duoxuanti_C = {} //多选题C
var duoxuanti_D = {} //多选题D
var duoxuanti_daam = {} //多选题答案
var shengcheng_daan = {} //生成的答案
var shuruduoxuanti_daan ={} //输入的多选题答案
var duoxuanti_value;//存放多选题临时答案
for(var i=0;i<5;i++){
            arr.push(i);
}
function tjdan(value,id,name){
	// yhda.push(value)
	yhda[String(name)] = value
	$("#"+String(id)+"").siblings().attr("disabled",'true')
	yhdabq[String(name)] = $("#"+String(id)+"")
	yhda_value[name] = value
	console.log(yhda)
	console.log(Masda)
}
function ProduceNum(){
		arr.sort(function(){return 0.5-Math.random()});
		return arr
}
arr = ProduceNum()
function jc(){
	console.log("检查函数")
	console.log(Masda)
	console.log(yhdabq)
	console.log(yhda_value)
	for(var i = 0;i<Object.keys(Masda).length;i++){
		console.log("检查函数")
		if(yhda["timu"+String(i)] == Masda["timu"+String(i)]){
			console.log('答案正确')
			yhdabq["timu"+String(i)].addClass("btn-success")
			correct.push("correct")
		}else{
			yhdabq["timu"+String(i)].addClass("btn-danger")
			console.log($("#timu"+String(i)+"-"+String(Masda[i])+""))
			// $('#timu'+String(i)+"-"+yhda_value["timu"+String(i)])
			console.log("#timu"+String(i)+"-"+Masda["timu"+String(i)])
			$("#timu"+String(i)+"-"+Masda["timu"+String(i)]).attr("class","btn btn-warning")
			error.push("error")
		}
	console.log(yhdabq)
	}
	for(var z = 0;z<Object.keys(panduanMasda).length;z++){
		if(shurupanduan["panduantimu"+String(z)] == panduanMasda["Mada"+String(z)]){
			console.log("正确答案")
			console.log(shurupanduanbiaoqian)
			shurupanduanbiaoqian["panduantimu"+String(z)].attr("class","btn-success")
			correct.push("correct")
		}else{
			shurupanduanbiaoqian["panduantimu"+String(z)].attr("class","btn-danger")
			error.push("error")
		}
	}
	for(var j = 0;j<Object.keys(shengcheng_daan).length;j++){
		if(shuruduoxuanti_daan["duoxuanti"+String(j)] == "undefined"+shengcheng_daan["Mada"+String(j)]){
			let zifuuchuan_shanchu = shuruduoxuanti_daan["duoxuanti"+String(j)].slice(9)
			for(let r = 0;r<zifuuchuan_shanchu.length;r++){
				console.log(zifuuchuan_shanchu.charAt(r))
				console.log("#duoxuanti"+String(j)+"-"+String(zifuuchuan_shanchu.charAt(r))+"")
				$("#duoxuanti"+String(j)+"-"+String(zifuuchuan_shanchu.charAt(r))+"").attr("class","btn-success")
			}
		}else{
			let zifuuchuan_shanchu = shuruduoxuanti_daan["duoxuanti"+String(j)].slice(9)
			for(let r = 0;r<zifuuchuan_shanchu.length;r++){
				console.log(zifuuchuan_shanchu.charAt(r))
				$("#duoxuanti"+String(j)+"-"+String(zifuuchuan_shanchu.charAt(r))+"").attr("class","btn-danger")
			}
		}
}
	$("#success").append(String(correct.length))
	$("#error").append(String(error.length))
	$("#zongfeng").append(String(correct.length *2))
}
function tjpanduan(value,id,name){
	shurupanduan[String(name)] = value
	console.log(shurupanduan)
	console.log($("#"+String(id)+"").siblings().attr("disabled",'true'))
	shurupanduanbiaoqian[String(name)] = $("#"+String(id)+"")
	console.log(shurupanduanbiaoqian)
}
function tjduoxuanti(value,id,name){
	if(duoxuanti_value == null){
	}else if(duoxuanti_value.length > 12){
		duoxuanti_value = undefined	
	}
	if(shuruduoxuanti_daan[name] == undefined){
		shuruduoxuanti_daan[name] = duoxuanti_value +=value
		$("#"+id).attr("disabled","true")
	}else if(shuruduoxuanti_daan[name].length>12){
			duoxuanti_value = undefined	
			shuruduoxuanti_daan[name] = undefined
	}else{
		shuruduoxuanti_daan[name] = duoxuanti_value +=value
		$("#"+id).attr("disabled","true")
	}
}
function tongbudata(attobjet,url){
	$.ajax({
	    url: String(url)+"/zhuword",
	    type: 'POST',
	    data: attobjet,
	    async: false,
	    cache: false,
	    contentType: false,
	    processData: false,
		 beforeSend:function (request) {
		         // 如果后台没有跨域处理，这个自定义
		         request.setRequestHeader("Access-Control-Allow-Origin","*")
		     },
		success:function(python){
			console.log("回调成功")
			for(var i = 0;i<python.lenght;i++){
				timu["timu"+String(i)] = python["timu"+String(i)]
				timuA["timuA"+String(i)] = python["timuA"+String(i)]
				timuB["timuB"+String(i)] = python["timuB"+String(i)]
				timuC["timuC"+String(i)] = python["timuC"+String(i)]
				timuD["timuD"+String(i)] = python["timuD"+String(i)]
				da["timu"+String(i)] = python["timudanan"+String(i)]
			}
			console.log(python)
		},
	});
}
function tongbupanduan(attobjet,url){
	$.ajax({
	    url: String(url)+"/zhutExcel",
	    type: 'POST',
	    data: attobjet,
	    async: false,
	    cache: false,
	    contentType: false,
	    processData: false,
		success:function(Excel){
			console.log("回调成功")
			console.log("调用次数")
			for(var y = 0;y<Excel["lenght1s"];y++){
				panduantimu["panduantimu"+String(y)] = Excel["panduantimu"+String(y)]
				panduandaan["panduandaan"+String(y)] = Excel["panduandaan"+String(y)]
			}
		},
	});
	console.log(panduantimu)
	console.log(panduandaan)
}
function tianjiaduoxuanti(attobjet,url){
	$.ajax({
	    url: String(url)+"/zhutduoxuanti",
	    type: 'POST',
	    data: attobjet,
	    async: false,
	    cache: false,
	    contentType: false,
	    processData: false,
		success:function(duoxuanti){
			console.log(duoxuanti)
			for(let m = 0;m<duoxuanti['duoxuanti_lenght'];m++){
				duoxuanti_timu['duoxuanti_timu'+String(m)] = duoxuanti["duoxuanti_mu"+String(m)]
				duoxuanti_A["duoxuanti_A"+String(m)] = duoxuanti["duoxuanti_A"+String(m)]
				duoxuanti_B["duoxuanti_B"+String(m)] = duoxuanti["duoxuanti_B"+String(m)]
				duoxuanti_C["duoxuanti_C"+String(m)] = duoxuanti["duoxuanti_C"+String(m)]
				duoxuanti_D["duoxuanti_D"+String(m)] = duoxuanti["duoxuanti_D"+String(m)]
				duoxuanti_daam["duoxuanti_daam"+String(m)] = duoxuanti["duoxuanti_daam"+String(m)]
			}
		},
	});
}
window.onload = function(){
	var attobj = new Object()
	attobj.name = '张三'
	tongbudata(attobj,window.location.href)
	tongbupanduan(attobj,window.location.href)
	tianjiaduoxuanti(attobj,window.location.href)
	console.log("页面加载完毕")
	console.log("当前一共有"+String(Object.keys(timu).length)+"题")
	for(var i = 0;i<tmnumbers;i++){
		tp = tp +70
		Mas = arr[i]
		Masda["timu"+String(i)] = da["timu"+String(i)]
		$("body").append("<div id='timu"+String(i)+"' class='timu'><div id='heard"+String(i)+"'></div><div id='anji"+String(i)+"'></div></div>")
		$("#timu"+String(i)+"").css("top",tp)
		$("#heard"+String(i)+"").append(timu["timu"+Mas])
		$("#anji"+String(i)+"").append("<button type='button'  value='A' name='timu"+String(i)+"' class='btn btn-primary' class='anjCSS' id='timu"+String(i)+"-A' onclick='tjdan(this.value,this.id,this.name)'>"+String(timuA["timuA"+Mas])+"</button>")
		$("#anji"+String(i)+"").append("<button type='button'  value='B' name='timu"+String(i)+"' class='btn btn-primary' id='timu"+String(i)+"-B' style='margin-left: 10px;' onclick='tjdan(this.value,this.id,this.name)'>"+String(timuB["timuB"+Mas])+"</button>")
		$("#anji"+String(i)+"").append("<button type='button'  value='C' name='timu"+String(i)+"' class='btn btn-primary' id='timu"+String(i)+"-C' style='margin-left: 10px;' onclick='tjdan(this.value,this.id,this.name)'>"+String(timuC["timuC"+Mas])+"</button>")
		$("#anji"+String(i)+"").append("<button type='button'  value='D' name='timu"+String(i)+"' class='btn btn-primary' id='timu"+String(i)+"-D' style='margin-left: 10px;' onclick='tjdan(this.value,this.id,this.name)'>"+String(timuD["timuD"+Mas])+"</button>")	
	}
	for(var j = 0;j<tmnumbers;j++){
		tp = tp + 80
		Mas = arr[j]
		panduanMasda["Mada"+String(j)] = panduandaan["panduandaan"+String(Mas)]
		$("body").append("<div id ='panduan"+String(j)+"' class='timu'><div id='panduanheade"+String(j)+"'></div><div id='panduananji"+String(j)+"'></div></div>")
		$("#panduan"+String(j)+"").css("top",tp)
		$("#panduanheade"+String(j)+"").append(panduantimu["panduantimu"+String(Mas)])
		$("#panduananji"+String(j)+"").append("<button type='button' name='panduantimu"+String(j)+"' value='correct' class='btn	btn-primary' id='panduan"+String(j)+"-correct' style='margin-left: 10px;' onclick='tjpanduan(this.value,this.id,this.name)'>正确</button>")
		$("#panduananji"+String(j)+"").append("<button type='button' name='panduantimu"+String(j)+"' value='error' class='btn	btn-primary' id='panduan"+String(j)+"-error' style='margin-left: 10px;' onclick='tjpanduan(this.value,this.id,this.name)'>错误</button>")
		
	}
	for(var n = 0;n<tmnumbers;n++){
		tp = tp + 100
		Mas = arr[n]
		shengcheng_daan["Mada"+String(n)] = duoxuanti_daam["duoxuanti_daam"+String(Mas)]
		$("body").append("<div id='duoxuanti"+String(n)+"' class='timu'><div id ='duoxuanti_head"+String(n)+"'></div><div id='duoxuanti_anni"+String(n)+"'></div></div>")
		$("#duoxuanti"+String(n)).css("top",tp)
		$("#duoxuanti_head"+String(n)).append(duoxuanti_timu["duoxuanti_timu"+String(Mas)])
		$("#duoxuanti_anni"+String(n)).append("<button type='button'  value='A' id = 'duoxuanti"+String(n)+"-A' name = 'duoxuanti"+String(n)+"' class='btn btn-primary' onclick='tjduoxuanti(this.value,this.id,this.name)' style='margin-left: 10px;' class = 'duoxuanti_anni'>"+String(duoxuanti_A["duoxuanti_A"+String(Mas)])+"</button>")
		$("#duoxuanti_anni"+String(n)).append("<button type='button'  value='B' id = 'duoxuanti"+String(n)+"-B' name = 'duoxuanti"+String(n)+"' class='btn btn-primary' onclick='tjduoxuanti(this.value,this.id,this.name)' style='margin-left: 10px;' class = 'duoxuanti_anni'>"+String(duoxuanti_B["duoxuanti_B"+String(Mas)])+"</button>")
		$("#duoxuanti_anni"+String(n)).append("<button type='button'  value='C' id = 'duoxuanti"+String(n)+"-C' name = 'duoxuanti"+String(n)+"' class='btn btn-primary' onclick='tjduoxuanti(this.value,this.id,this.name)' style='margin-left: 10px;' class = 'duoxuanti_anni'>"+String(duoxuanti_C["duoxuanti_C"+String(Mas)])+"</button>")
		$("#duoxuanti_anni"+String(n)).append("<button type='button'  value='D' id = 'duoxuanti"+String(n)+"-D' name = 'duoxuanti"+String(n)+"' class='btn btn-primary' onclick='tjduoxuanti(this.value,this.id,this.name)' style='margin-left: 10px;' class = 'duoxuanti_anni'>"+String(duoxuanti_D["duoxuanti_D"+String(Mas)])+"</button>")
	}
	console.log(shengcheng_daan)
}