import os
import joblib
from sklearn.pipeline import Pipeline
from sklearn.linear_model import LogisticRegression
from sklearn.feature_extraction.text import TfidfVectorizer

class TextClassifier:
    def __init__(self):
        # 正確建立與目前檔案相對的儲存路徑
        self.model_path = os.path.join(os.path.dirname(__file__), 'model.pkl')
        self.pipeline = Pipeline([
            ('tfidf', TfidfVectorizer()),
            ('clf', LogisticRegression())
        ])

    def train(self, X, y):
        os.makedirs(os.path.dirname(self.model_path), exist_ok=True)  # ⬅ 確保資料夾存在
        self.pipeline.fit(X, y)
        joblib.dump(self.pipeline, self.model_path)
        print(f"✅ 模型已儲存到 {self.model_path}")

    def load(self):
        if not os.path.exists(self.model_path):
            raise FileNotFoundError(f"❌ 找不到模型檔案：{self.model_path}")
        self.pipeline = joblib.load(self.model_path)
        print(f"✅ 模型已載入：{self.model_path}")

    def predict(self, text):
        return self.pipeline.predict([text])[0]