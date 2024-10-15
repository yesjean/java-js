// app/problems/JavaMethods.tsx

'use client';

import React, { useState } from 'react';
import {problems} from './data/JavaProblemsData'

interface Problem {
  id: number;
  title: string;
  description: string;
  code: string;
}
interface JavaMethodsProps {
  onSelect: (problem: Problem) => void;
  onSelected: (id: number) => void;
  selectedId: number | null; // 선택된 ID 추가
}

const JavaMethods = ({
  onSelect,
  onSelected
}: JavaMethodsProps) => {
  const [selectedId, setSelectedId] = useState<number | null>(null); // selectedId 상태 관리


  console.log(selectedId)
  return (
    <div style={{ paddingLeft: "20px" }}>
      <ul>
        {problems.map(problem => (
          <li 
            key={problem.id} 
            onClick={() => {
              onSelect(problem);   
              onSelected(problem.id); 
              setSelectedId(problem.id);
            }}
            style={{
              backgroundColor: selectedId === problem.id ? 'lightblue' : 'transparent', // 선택된 문제에 스타일 적용
              cursor: 'pointer', // 마우스 포인터 스타일 추가
              borderRadius: '4px'
            }}
          >
            {problem.title}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default JavaMethods;
