from classifier import TextClassifier

# 範例訓練資料（你可以替換成企業實際問答）
questions = [
    "如何設定 VPN？", "網站打不開", "怎麼請假？", "薪資幾號發？",
    "報帳要去哪裡？", "發票怎麼處理？"
]
labels = ["IT", "IT", "人資", "人資", "財務", "財務"]

clf = TextClassifier()
clf.train(questions, labels)
