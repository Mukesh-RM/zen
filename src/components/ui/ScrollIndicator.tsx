'use client';

export function ScrollIndicator() {
  return (
    <div className="flex flex-col items-center gap-3 animate-scroll-indicator">
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-parchment/50">
        Scroll to Begin
      </span>
      <div className="w-[1px] h-12 bg-gradient-to-b from-crimson to-transparent" />
    </div>
  );
}
