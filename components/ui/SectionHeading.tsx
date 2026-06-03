import Reveal from './Reveal';

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: 'center' | 'left';
  dark?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}
    >
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal delay={80}>
        <h2
          className={`mt-5 text-3xl font-extrabold leading-[1.12] sm:text-4xl lg:text-[2.7rem] ${
            dark ? '!text-white' : ''
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={140}>
          <p
            className={`mt-5 text-base leading-relaxed sm:text-lg ${
              dark ? 'text-slate-300' : 'text-ink-500'
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
