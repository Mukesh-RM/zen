'use client';

export function PrintSyllabusButton() {
  return (
    <button onClick={() => window.print()} className="ghost-btn inline-block cursor-pointer">
      Download PDF Syllabus
    </button>
  );
}
