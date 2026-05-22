'use client';

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="ghost-btn inline-block cursor-pointer"
    >
      Print for Your Dojo
    </button>
  );
}
