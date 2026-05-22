'use client';

export function CreedContent() {
  const creed = `The Isshinryu Karate Creed

I come to you with only karate, empty hands.
I have no weapons, but should I be forced to defend
myself, my principles or my honor,
should it be a matter of life or death,
right or wrong, then here are my weapons,
karate, my empty hands.

Karate is not a game.
It is a way of life.
You cannot turn it on and off
like a light switch.
It is always with you.

The ultimate aim of karate lies not
in victory or defeat, but in the
perfection of the character of its
participants.`;

  return (
    <main className="pt-24">
      <section className="min-h-screen bg-dojo-dark flex items-center justify-center py-20">
        <div className="section-container max-w-3xl">
          <div className="relative">
            <span className="absolute inset-0 flex items-center justify-center font-kanji text-[15rem] text-crimson/5 select-none pointer-events-none leading-none">
              道
            </span>
            <div className="relative z-10 text-center">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-crimson mb-8">
                The Isshinryu Creed
              </p>
              <div className="space-y-8 text-lg text-slate-300 leading-relaxed italic font-body">
                {creed.split('\n\n').map((stanza, i) => (
                  <p key={i} className="whitespace-pre-line">{stanza}</p>
                ))}
              </div>
              <div className="mt-12 h-[1px] w-32 bg-crimson/50 mx-auto" />
              <p className="font-mono text-xs text-slate-500 mt-6">
                — Master Tatsuo Shimabuku, Founder of Isshinryu
              </p>
            </div>
          </div>
          <div className="text-center mt-16">
            <button
              onClick={() => window.print()}
              className="ghost-btn inline-block cursor-pointer"
            >
              Print for Your Dojo
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
