var timu = []
var timuA = []
var timuB = []
var timuC = []
var timuD = []
var da = []
var panduantimu = ['细线构成的字体，适合香水、化妆品等产品','广告语，又称广告标语，指为了加强受众对企业、商品或服务的印象而在广告中长期、反 复使用的一种简明扼要的口号性语句'
,'当今传统的四大媒体是： 报纸、杂志、广播、电视']
var panduandaan = ['correct','correct','error']
var shurupanduan =	[]  //输入的值
var shurupanduanbiaoqian = []	//输入的标签
var panduanMasda = [] //存放生成的正确答案
var yhda = []  //存放选择值
var Masda =	[]  //存放生成数的正确答案
var tp = 10 // 相距
var tmnumbers = 15 //生成多少道题
var Mas = 0  //生成的随机数
var yhdabq = [] //存放选择标签
var correct = [] //正确长度
var error = [] //错误长度
var arr = []   //优化数组的方法
for(var i=0;i<60;i++){
            arr.push(i);
}
function tjdan(value,id){
	yhda.push(value)
	console.log(value)
	console.log($("#"+String(id)+"").siblings().attr("disabled",'true'))
	yhdabq.push($("#"+String(id)+""))
	console.log(yhda)
}
function ProduceNum(){
		arr.sort(function(){return 0.5-Math.random()});
		return arr
}
arr = ProduceNum()
function jc(){
	console.log("检查函数")
	console.log(Masda)
	for(var i = 0;i<Masda.length;i++){
		if(yhda[i] == Masda[i]){
			console.log('答案正确')
			yhdabq[i].addClass("btn-success")
			correct.push("correct")
		}else{
			yhdabq[i].addClass("btn-danger")
			console.log($("#timu"+String(i)+"-"+String(Masda[i])+""))
			$("#timu"+String(i)+"-"+String(Masda[i])+"").addClass("btn-warning")
			error.push("error")
		}
	console.log(yhdabq)
	}
	for(var z = 0;z<panduanMasda.length;z++){
		if(shurupanduan[z] == panduanMasda[z]){
			console.log("正确答案")
			shurupanduanbiaoqian[z].addClass("btn-success")
			correct.push("correct")
		}else{
			shurupanduanbiaoqian[z].addClass("btn-danger")
			error.push("error")
		}
	}
	$("#success").append(String(correct.length))
	$("#error").append(String(error.length))
	$("#zongfeng").append(String(correct.length *2))
}
function tjpanduan(value,id){
	shurupanduan.push(value)
	console.log($("#"+String(id)+"").siblings().attr("disabled",'true'))
	shurupanduanbiaoqian.push($("#"+String(id)+""))
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
				timu.push(python["timu"+String(i)])
				timuA.push(python["timuA"+String(i)])
				timuB.push(python["timuB"+String(i)])
				timuC.push(python["timuC"+String(i)])
				timuD.push(python['timuD'+String(i)])
				da.push(python["timudanan"+String(i)])
			}
		},
	});
	console.log(timu)
}
window.onload = function(){
	var attobj = new Object()
	attobj.name = '张三'
	tongbudata(attobj,window.location.href)
	console.log(attobj)
	console.log("页面加载完毕")
	console.log("当前一共有"+String(timu.length)+"题")
	for(var i = 0;i<tmnumbers;i++){
		tp = tp +70
		Mas = arr[i]
		Masda.push(da[Mas])
		$("body").append("<div id='timu"+String(i)+"' class='timu'><div id='heard"+String(i)+"'></div><div id='anji"+String(i)+"'></div></div>")
		$("#timu"+String(i)+"").css("top",tp)
		console.log(timu[String(Mas)])
		$("#heard"+String(i)+"").append(timu[Mas])
		$("#anji"+String(i)+"").append("<button type='button' value='A' name='A' class='btn btn-primary' class='anjCSS' id='timu"+String(i)+"-A' onclick='tjdan(this.value,this.id)'>"+String(timuA[Mas])+"</button>")
		$("#anji"+String(i)+"").append("<button type='button'  value='B' name='B' class='btn btn-primary' id='timu"+String(i)+"-B' style='margin-left: 10px;' onclick='tjdan(this.value,this.id)'>"+String(timuB[Mas])+"</button>")
		$("#anji"+String(i)+"").append("<button type='button'  value='C' name='C' class='btn btn-primary' id='timu"+String(i)+"-C' style='margin-left: 10px;' onclick='tjdan(this.value,this.id)'>"+String(timuC[Mas])+"</button>")
		$("#anji"+String(i)+"").append("<button type='button'  value='D'  name ='D' class='btn btn-primary' id='timu"+String(i)+"-D' style='margin-left: 10px;' onclick='tjdan(this.value,this.id)'>"+String(timuD[Mas])+"</button>")	
	}
	for(var j = 0;j<tmnumbers;j++){
		tp = tp + 80
		Mas = Math.ceil(Math.random()*2)-1
		panduanMasda.push(panduandaan[Mas])
		$("body").append("<div id ='panduan"+String(j)+"' class='timu'><div id='panduanheade"+String(j)+"'></div><div id='panduananji"+String(j)+"'></div></div>")
		$("#panduan"+String(j)+"").css("top",tp)
		$("#panduanheade"+String(j)+"").append(panduantimu[Mas])
		$("#panduananji"+String(j)+"").append("<button type='button' value='correct' class='btn	btn-primary' id='panduan"+String(j)+"-correct' style='margin-left: 10px;' onclick='tjpanduan(this.value,this.id)'>正确</button>")
		$("#panduananji"+String(j)+"").append("<button type='button' value='error' class='btn	btn-primary' id='panduan"+String(j)+"-error' style='margin-left: 10px;' onclick='tjpanduan(this.value,this.id)'>错误</button>")
		
	}
	
}