const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json"); // 서비스 계정 키 파일 경로

const app = express();

app.use(cors());
app.use(express.json());

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://<your-database-name>.firebaseio.com", // Firebase 실시간 데이터베이스 URL
});

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`));
