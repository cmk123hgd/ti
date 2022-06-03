from flask import Flask,render_template,request,jsonify,make_response
from flask_cors import *
import index
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
    print("返回值成功")
    dic = {}
    timu,timuA,timuB,timuC,timuD,timudanan =index.word()
    for i in range(0,len(timu)):
        dic.update({"timu"+str(i):timu[i],"timuA"+str(i):timuA[i],"timuB"+str(i):timuB[i],"timuC"+str(i):timuC[i],"timuD"+str(i):timuD[i],"timudanan"+str(i):timudanan[i]})
    dic.update({"lenght":len(timu)})
    return dic
if __name__ == '__main__':
    app.run(debug=True)
