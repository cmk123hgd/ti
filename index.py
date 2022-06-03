import docx
doc = docx.Document("./word/xz/001.docx")
timu = []
timuA = []
timuB = []
timeC = []
timeD = []
timudan = []
print(len(doc.paragraphs))
# for i in range(0,len(doc.paragraphs)):
#     print(doc.paragraphs[i].text)
def word():
    for i in range(0,len(doc.paragraphs),6):
        timu.append(doc.paragraphs[i].text)
    for j in range(1,len(doc.paragraphs),6):
        timuA.append(doc.paragraphs[j].text)
    for z in range(2,len(doc.paragraphs),6):
        timuB.append(doc.paragraphs[z].text)
    for h in range(3, len(doc.paragraphs), 6):
        timeC.append((doc.paragraphs[h].text))
    for g in range(4,len(doc.paragraphs),6):
        timeD.append(doc.paragraphs[g].text)
    for k in range(5,len(doc.paragraphs),6):
        timudan.append((doc.paragraphs[k].text))
    del timu[-1]
    return timu,timuA,timuB,timeC,timeD,timudan
word()
print(timudan)