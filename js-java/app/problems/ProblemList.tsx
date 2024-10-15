// app/problems/ProblemList.tsx

'use client';

import React, { useState } from 'react';
import CodeEditor from '../code-editor/CodeEditor';

// 문제 타입 정의
interface Problem {
  id: number;
  title: string;
  description: string;
  code: string;
}

// 문제 목록
const problems: Problem[] = [
  {
    id: 1,
    title: '두 수의 합',
    description: `정수 배열이 주어질 때, 두 수의 합이 특정 타겟이 되는 인덱스를 반환하는 함수 작성.`,
    code: `function twoSum(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  throw new Error('해결책이 없습니다.');
}`,
  },
  {
    id: 2,
    title: '문자열 뒤집기',
    description: `문자열을 뒤집는 함수를 작성하세요. 입력 문자열은 문자 배열로 주어집니다.`,
    code: `function reverseString(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
}`,
  },
  {
    id: 3,
    title: '피보나치 수',
    description: `피보나치 수열에서 n번째 수를 구하는 함수를 작성하세요. 피보나치 수는 두 개의 이전 수의 합입니다.`,
    code: `function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}`,
  },
];

const ProblemList = () => {
  // selectedProblem의 초기 타입을 Problem | null로 설정
  const [selectedProblem, setSelectedProblem] = useState<Problem | null>(null);

  return (
    <div style={{ display: 'flex' }}>
      {/* 왼쪽 메뉴 */}
      <div style={{ width: '250px', borderRight: '1px solid #ccc', padding: '10px' }}>
        <h3>알고리즘 문제 목록</h3>
        <ul>
          {problems.map((problem) => (
            <li key={problem.id} onClick={() => setSelectedProblem(problem)}>
              {problem.title}
            </li>
          ))}
        </ul>
      </div>

      {/* 오른쪽 문제 내용 및 코드 에디터 */}
      <div style={{ padding: '10px', flex: 1 }}>
        {selectedProblem ? (
          <div>
            <h2>{selectedProblem.title}</h2>
            <p>{selectedProblem.description}</p>
            <CodeEditor/>
          </div>
        ) : (
          <h2>문제를 선택하세요</h2>
        )}
      </div>
    </div>
  );
};

export default ProblemList;
