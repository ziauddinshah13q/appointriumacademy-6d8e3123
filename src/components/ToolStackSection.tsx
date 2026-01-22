import apifyLogo from '@/assets/logos/apify.png';
import highlevelLogo from '@/assets/logos/highlevel.png';
import instantlyLogo from '@/assets/logos/instantly.png';
import mainLogo from '@/assets/logos/main-logo-white.svg';
import n8nLogo from '@/assets/logos/n8n.png';
import openaiLogo from '@/assets/logos/openai.png';
import vapiLogo from '@/assets/logos/vapi.png';

type ToolLogo = {
  name: string;
  src: string;
  heightClassName?: string;
  imgClassName?: string;
};

const logos: ToolLogo[] = [
  { name: 'Appointrium Academy', src: mainLogo, heightClassName: 'h-10 sm:h-12', imgClassName: 'opacity-95' },
  { name: 'n8n', src: n8nLogo, heightClassName: 'h-9 sm:h-11' },
  // Logos with baked dark/white backgrounds are visually cleaned using blend-mode on the dark theme.
  { name: 'Vapi', src: vapiLogo, heightClassName: 'h-10 sm:h-12', imgClassName: 'mix-blend-screen' },
  { name: 'HighLevel', src: highlevelLogo, heightClassName: 'h-10 sm:h-12' },
  { name: 'OpenAI', src: openaiLogo, heightClassName: 'h-10 sm:h-12', imgClassName: 'invert mix-blend-screen' },
  { name: 'Instantly', src: instantlyLogo, heightClassName: 'h-9 sm:h-11', imgClassName: 'invert mix-blend-screen' },
  { name: 'Apify', src: apifyLogo, heightClassName: 'h-9 sm:h-11', imgClassName: 'mix-blend-screen' },
];

const ToolStackSection = () => {
  const track = [...logos, ...logos];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Tool Stack</h2>
          <p className="text-muted-foreground">
            These are example AI/automation tools we show in training (not finalized).
          </p>
        </div>

        <div className="glass-strong rounded-2xl border border-border/60 overflow-hidden logo-marquee">
          <div className="py-8">
            <div className="logo-marquee-track flex items-center gap-12 sm:gap-16 px-10">
              {track.map((logo, idx) => (
                <div
                  key={`${logo.name}-${idx}`}
                  className="shrink-0 flex items-center justify-center"
                  aria-label={logo.name}
                  title={logo.name}
                >
                  <img
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    loading="lazy"
                    className={`${logo.heightClassName ?? 'h-10'} w-auto opacity-90 hover:opacity-100 transition-opacity ${logo.imgClassName ?? ''}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolStackSection;
