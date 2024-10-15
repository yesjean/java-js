import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import util from 'util';
import fs from 'fs/promises';
import path from 'path';

const execPromise = util.promisify(exec);

export async function POST(request: Request) {
  const { code } = await request.json();

  // Java 파일 경로
  const javaFilePath = path.join(process.cwd(), 'MyClass.java');

  try {
    // Java 코드 파일 생성
    await fs.writeFile(javaFilePath, code);

    // Java 파일 컴파일
    await execPromise(`javac ${javaFilePath}`);

    // Java 코드 실행
    const { stdout, stderr } = await execPromise(`java MyClass`);
    
    // 컴파일한 클래스 파일 삭제 (필요에 따라)
    await fs.unlink(javaFilePath); // .java 파일 삭제
    await fs.unlink(path.join(process.cwd(), 'MyClass.class')); // .class 파일 삭제

    return NextResponse.json({ result: stdout || stderr });
  } catch {
    return NextResponse.json({ error: 'Error executing Java code' });
  }
}
