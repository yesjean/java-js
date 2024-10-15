import express from 'express';
import { exec } from 'child_process';

const app = express();
const PORT = 4000;

app.use(express.json());

// JavaScript 코드 실행
app.post('/api/execute-js', (req, res) => {
  console.log('Received JS code:', req.body); // 요청 본문 로그
  const { code } = req.body;
  
  exec(`node -e "${code}"`, (error, stdout, stderr) => {
    if (error) {
      console.error('Execution error:', stderr); // 오류 로그
      return res.status(500).json({ error: stderr || 'Error executing code' });
    }
    console.log('Execution result:', stdout.trim()); // 실행 결과 로그
    return res.json({ result: stdout.trim() });
  });
});



// Java 코드 실행
app.post('/api/execute-java', (req, res) => {
  const { code } = req.body;

  // GraalVM을 사용하여 Java 코드를 실행
  exec(`java -cp . YourJavaClass ${code}`, (err, stdout, stderr) => {
    if (err) {
      return res.status(400).json({ error: stderr });
    }
    res.json({ result: stdout });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
