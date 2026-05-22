import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Mission',
  description: 'The mission, vision, and values of the All India Zen Isshinryu Karate Association — spreading the One Heart Way across India.',
};

export default function MissionPage() {
  return (
    <main className="pt-24">
      <section className="py-20 bg-dojo-black">
        <div className="section-container text-center">
          <p className="section-subheading mb-3">Our Purpose</p>
          <h1 className="section-heading mb-6">
            Mission <span className="text-crimson">&</span> Vision
          </h1>
        </div>
      </section>

      <section className="py-16 bg-dojo-dark">
        <div className="section-container max-w-4xl prose prose-invert prose-lg mx-auto">
          <div className="bg-dojo-charcoal border border-gold/20 rounded-xl p-10 mb-12">
            <h2 className="font-display text-3xl text-parchment mb-4 !mt-0">Our Mission</h2>
            <p className="text-slate-300 leading-relaxed">
              To preserve, promote, and propagate the authentic Okinawan art of Isshinryu Karate
              across India. We are committed to providing world-class martial arts training that
              develops not just physical skill, but character, discipline, and spiritual growth
              in every student.
            </p>
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="font-display text-3xl text-parchment mb-4 !mt-0">Our Vision</h2>
              <p className="text-slate-300 leading-relaxed">
                To see Isshinryu Karate established as a premier martial art across every state
                in India. We envision a nation where every citizen has access to authentic,
                high-quality karate training — regardless of age, gender, or background. We aim
                to produce not just skilled martial artists, but exemplary human beings who
                contribute positively to society.
              </p>
            </div>

            <div>
              <h2 className="font-display text-3xl text-parchment mb-6 !mt-0">Our Values</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-crimson mb-2">Integrity</h3>
                  <p className="text-slate-300">
                    We uphold the highest standards of honesty and moral character. Karate begins
                    and ends with respect — for oneself, for others, and for the art.
                  </p>
                </div>

                <div>
                  <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-crimson mb-2">Discipline</h3>
                  <p className="text-slate-300">
                    True mastery requires consistent effort and self-control. We instill discipline
                    that extends beyond the dojo into every aspect of life.
                  </p>
                </div>

                <div>
                  <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-crimson mb-2">Excellence</h3>
                  <p className="text-slate-300">
                    We pursue the highest quality in our training, our instructors, and our
                    facilities. Mediocrity has no place in the One Heart Way.
                  </p>
                </div>

                <div>
                  <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-crimson mb-2">Community</h3>
                  <p className="text-slate-300">
                    The dojo is a family. We support each other, celebrate together, and grow
                    together. Our strength comes from our unity.
                  </p>
                </div>

                <div>
                  <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-crimson mb-2">Tradition</h3>
                  <p className="text-slate-300">
                    We honor the legacy of Master Tatsuo Shimabuku and the Okinawan masters who
                    came before. Tradition is not the worship of ashes, but the preservation of fire.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl text-parchment mb-4 !mt-0">Our Goals</h2>
              <ul className="text-slate-300 space-y-2 list-disc list-inside">
                <li>Establish Isshinryu dojos in every major city across India</li>
                <li>Train and certify 100+ black belt instructors over the next decade</li>
                <li>Introduce karate training in schools as part of physical education</li>
                <li>Host national-level Isshinryu tournaments annually</li>
                <li>Develop specialized programs for women&apos;s self-defense and senior fitness</li>
                <li>Create scholarship programs for talented students from underprivileged backgrounds</li>
              </ul>
            </div>

            <blockquote className="border-l-4 border-crimson pl-6 py-2 my-8">
              <p className="text-gold italic text-lg leading-relaxed !m-0">
                &ldquo;The ultimate aim of karate lies not in victory or defeat, but in the
                perfection of the character of its participants.&rdquo;
              </p>
              <cite className="text-slate-500 text-sm not-italic block mt-2">
                — Gichin Funakoshi, Father of Modern Karate
              </cite>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
