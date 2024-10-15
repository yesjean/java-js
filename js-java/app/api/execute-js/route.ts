import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { code } = await request.json();

  try {
    // 코드 실행 (주의: eval은 보안에 취약할 수 있습니다.)
    const result = eval(code);
    return NextResponse.json({ result });
  } catch (error) {
    console.error('Error executing code:', error); // 오류 로그
    return NextResponse.json({ error: 'Error executing JavaScript code' });
  }
}
