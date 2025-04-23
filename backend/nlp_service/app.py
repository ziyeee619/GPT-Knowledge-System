# app.py
from flask import Flask, request, jsonify
from classifier import TextClassifier

app = Flask(__name__)
clf = TextClassifier()
clf.load()  # 載入剛剛儲存好的 model.pkl

@app.route('/classify', methods=['POST'])
def classify():
    data = request.json
    question = data.get('question', '')
    if not question:
        return jsonify({'error': '請提供問題內容'}), 400
    category = clf.predict(question)
    return jsonify({'category': category})

if __name__ == '__main__':
    app.run(port=5001)
