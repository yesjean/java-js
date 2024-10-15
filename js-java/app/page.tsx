import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Code Converter!</h1>
      <nav>
        <ul>
          <li>
            <Link href="/code-editor">Go to Code Editor</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
