from flask import Flask,render_template,request,jsonify,make_response
from flask_cors import *
import index
import index1
import json
import numpy as np
app = Flask(__name__)
CORS(app,supports_credentials=True)
@app.route('/')
def zhu():
    print("[Success]:主界面进入成功")
    return render_template('index.html')
@app.route('/zhuword', methods=['POST', "GET"])
def zhuword():
    print("成功执行选择题接口")
    zhutword_dx = {}
    timu,timuA,timuB,timuC,timuD,timudanan =index.Excel()
    for i in range(0,len(timu)):
        zhutword_dx.update({"timu"+str(i):timu[i],"timuA"+str(i):timuA[i],"timuB"+str(i):timuB[i],"timuC"+str(i):timuC[i],"timuD"+str(i):timuD[i],"timudanan"+str(i):timudanan[i]})
    zhutword_dx.update({"lenght":len(timu)})
    return zhutword_dx
@app.route("/zhutExcel",methods=['POST', "GET"])
def zhutExcel():
    print("成功执行判断题接口")
    dic = {}
    panduantimu,panduandaan = index1.Excel()
    for i in range(0,len(panduantimu)):
        dic.update({"panduantimu"+str(i):panduantimu[i],"panduandaan"+str(i):panduandaan[i]})
    dic.update({"lenght1s":len(panduantimu)})
    return dic
if __name__ == '__main__':
    app.run(debug=True)
