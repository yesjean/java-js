// app/code-editor/CodeEditor.tsx

import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import axios from 'axios';
import AlgorithmProblems from '../problems/AlgorithmProblems';
import styles from './CodeEditor.module.css';
import JavaScriptMethods from '../problems/JavaScriptMethods';
import JavaMethods from '../problems/JavaMethods';

interface Problem {
  id: number;
  title: string;
  description: string;
  code: string;
}

const CodeEditor = () => {
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [logs, setLogs] = useState<string[]>([]);
  const [selectedMenu, setSelectedMenu] = useState('');
  const [selectedProblem, setSelectedProblem] = useState<Problem | null>(null); 
  const [isAlgorithmVisible, setIsAlgorithmVisible] = useState(false); 
  const [isJsVisible, setIsJsVisible] = useState(false); 
  const [isJavaVisible, setIsJavaVisible] = useState(false); 
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleEditorChange = (value: string | undefined) => {
    setCode(value || '');
  };

  const handleMenuClick = (menu: string) => {
    if (menu === 'algorithm') {
      setIsAlgorithmVisible(prev => !prev);
      setSelectedProblem(null); 
      setCode('');
    } else {
      setSelectedMenu(menu);
      setSelectedProblem(null); 
      setCode('');

      if (menu === 'js') {
        setIsJsVisible(prev => !prev);
        setCode('// JavaScript 코드를 여기에 입력하세요.');
        setLanguage('javascript');
      } else if (menu === 'java') {
        setIsJavaVisible(prev => !prev);
        setCode(`// Java 코드를 여기에 입력하세요. 
public class MyClass {
  public static void main(String[] args) {

  }
}`);
        setLanguage('java');
      }
    }
  };

  const handleProblemSelect = (problem: Problem) => {
    setCode(problem.code);
    setSelectedId(problem.id);
    setSelectedProblem(problem)
  };
  const handleSelected = (id: number) => {
    // 선택된 문제의 ID 처리
    setSelectedId(id);
    console.log("Selected ID:", id);
  };
  const runCode = async () => {
    try {
      const response = await axios.post(
        language === 'javascript' ? '/api/execute-js' : '/api/execute-java',
        { code }
      );
      const result = response.data.result || response.data.error;
      setOutput(result);
      setLogs(prevLogs => [...prevLogs, `Output: ${result}`]);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setOutput(error.response?.data?.error || 'Error executing code');
        setLogs(prevLogs => [...prevLogs, `Error: ${error.response?.data?.error}`]);
      } else {
        setOutput('Error during API call');
      }
    }
  };
  
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <h2>Menu</h2>
        <ul>
          <li 
            onClick={() => handleMenuClick('algorithm')}
          >
            알고리즘 문제
          </li>
          {isAlgorithmVisible && (
            <ul>
              <AlgorithmProblems
                onSelect={handleProblemSelect}
                onSelected={handleSelected}
                selectedId={selectedId}
              />
            </ul>
          )}
          <li 
            onClick={() => handleMenuClick('js')}
          >
            Js
          </li>
          {isJsVisible && (
            <ul>
              <JavaScriptMethods
                onSelect={handleProblemSelect}
                onSelected={handleSelected}
                selectedId={selectedId}
              />
            </ul>
          )}
          <li 
            onClick={() => handleMenuClick('java')}
          >
            Java
          </li>
          {isJavaVisible && (
            <ul>
              <JavaMethods
                onSelect={handleProblemSelect}
                onSelected={handleSelected}
                selectedId={selectedId}
              />
            </ul>
          )}
        </ul>
      </nav>

      <div className={styles.editorContainer}>
        <h3>{selectedMenu ? `Selected Menu: ${selectedMenu}` : 'Welcome!'}</h3>

        <div style={{height: '150px'}}>
        <select onChange={(e) => setLanguage(e.target.value)} value={language}>
          <option value="javascript">JavaScript</option>
          <option value="java">Java</option>
        </select>
       
        {selectedProblem && (
          <div>
            <h4>선택한 문제: {selectedProblem.title}</h4>
            <p>{selectedProblem.description}</p>
          </div>
        )}
        </div>

        <Editor
          height="400px"
          defaultLanguage={language}
          value={code}
          onChange={handleEditorChange}
        />
        <button onClick={runCode}>Run Code</button>
        <div className={styles.outputContainer}>
          <h4>Output:</h4>
          <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>{output}</pre>
        </div>
        <div className={styles.logsContainer}>
          <h4>Logs:</h4>
          <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
            {logs.map((log, index) => (
              <div key={index}>{log}</div>
            ))}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
