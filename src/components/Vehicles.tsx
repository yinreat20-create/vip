import { Crown, Fuel, Users, Wind, Check, ArrowRight, Car } from 'lucide-react';
import { waLink } from '../constants';
import { SectionTitle } from './SectionTitle';
import { Reveal } from './Reveal';

interface Vehicle {
  title: string;
  subtitle: string;
  badge: string;
  features: string[];
  waMessage: string;
  accent: 'gold' | 'silver';
}

const VEHICLES: Vehicle[] = [
  {
    title: 'Mercedes Transporter VIP',
    subtitle: 'Şoförlü Hizmet',
    badge: 'Premium',
    accent: 'gold',
    features: [
      'Siyah Dış Tasarım',
      'VIP İç Dizayn',
      'Geniş Yolcu Kapasitesi',
      'Klima ve Konfor Paketleri',
      'Şoförlü Hizmet',
    ],
    waMessage:
      'Merhaba VIP Transfer, Mercedes Transporter VIP hakkında detaylı bilgi almak istiyorum.',
  },
  {
    title: 'Ford Courier',
    subtitle: 'Ekonomik Kiralama',
    badge: 'Ekonomik',
    accent: 'silver',
    features: [
      'Ekonomik ve Pratik',
      'Yakıt Dostu',
      'Şoförlü veya Şoförsüz Kiralama',
      'Günlük ve Uzun Dönem Kiralama',
    ],
    waMessage:
      'Merhaba VIP Transfer, Ford Courier kiralama hakkında detaylı bilgi almak istiyorum.',
  },
];

function Placeholder({ title }: { title: string; accent: string }) {
  // Gelen araç adına göre tam senin koyduğun isimlerle eşleştiriyoruz
  const imageSrc = title.includes("Mercedes") 
    ? "/a1.png" 
    : "/a2.png";

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-gold-500/20">
      <img 
        src={imageSrc} 
        alt={title} 
        className="w-full h-full object-cover" 
      />
    </div>
  );
}
}

function VehicleCard({ vehicle, delay }: { vehicle: Vehicle; delay: number }) {
  const isGold = vehicle.accent === 'gold';
  return (
    <Reveal as="article" delay={delay} className="card-luxury group p-4 sm:p-5">
      {/* Badge */}
      <div className="absolute right-5 top-5 z-10">
        <span
          className={`rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] backdrop-blur ${
            isGold
              ? 'border-gold-500/50 bg-gold-500/10 text-gold-300'
              : 'border-gray-400/40 bg-gray-400/10 text-gray-200'
          }`}
        >
          {vehicle.badge}
        </span>
      </div>

      <Placeholder title={vehicle.title} accent={vehicle.accent} />

      <div className="px-2 pt-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-400">
          {vehicle.subtitle}
        </p>
        <h3 className="mt-1 font-display text-2xl font-bold text-white">
          {vehicle.title}
        </h3>

        <ul className="mt-5 space-y-3">
          {vehicle.features.map((f) => (
            <li key={f} className="flex items-center gap-3 text-sm text-gray-300">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-gold-500/30 bg-gold-500/5 text-gold-400">
                <Check className="h-3.5 w-3.5" />
              </span>
              {f}
            </li>
          ))}
        </ul>

        {/* feature icons */}
        <div className="mt-5 flex items-center gap-4 border-t border-gold-500/10 pt-4 text-gold-400/70">
          <Users className="h-4 w-4" />
          <Wind className="h-4 w-4" />
          <Fuel className="h-4 w-4" />
        </div>

        <a
          href={waLink(vehicle.waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-gold-500/40 bg-transparent py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-200 transition-all duration-500 hover:bg-gold-500 hover:text-noir-950 hover:shadow-gold-soft"
        >
          Detaylar
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </Reveal>
  );
}

export function Vehicles() {
  return (
    <section id="vehicles" className="relative py-24 sm:py-28">
      <div className="lux-container">
        <SectionTitle eyebrow="Filo" title="Araçlarımız" />
        <div className="mt-14 grid gap-7 md:grid-cols-2">
          {VEHICLES.map((v, i) => (
            <VehicleCard key={v.title} vehicle={v} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}
