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
    waMessage: 'Merhaba VIP Transfer, Mercedes Transporter VIP hakkında detaylı bilgi almak istiyorum.',
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
    waMessage: 'Merhaba VIP Transfer, Ford Courier kiralama hakkında detaylı bilgi almak istiyorum.',
  },
];

function Placeholder({ title }: { title: string; accent: 'gold' | 'silver' }) {
  const imageSrc = title.includes('Mercedes') ? '/a1.png' : '/a2.png';

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

export default function Vehicles() {
  return (
    <section id="vehicles" className="py-20 bg-noir-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="Lüks Araç Filomuz"
          subtitle="Her ihtiyaca ve bütçeye uygun, son model konforlu araçlarımızla hizmetinizdeyiz."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12">
          {VEHICLES.map((vehicle, index) => (
            <Reveal key={index} delay={index * 0.2}>
              <div className="bg-noir-950/40 backdrop-blur-md rounded-3xl border border-gold-500/10 overflow-hidden hover:border-gold-500/30 transition-all duration-500 group flex flex-col h-full">
                <Placeholder title={vehicle.title} accent={vehicle.accent} />

                <div className="p-6 lg:p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2 ${
                        vehicle.accent === 'gold' 
                          ? 'bg-gold-500/10 text-gold-400 border border-gold-500/20' 
                          : 'bg-white/5 text-gray-400 border border-white/10'
                      }`}>
                        {vehicle.badge}
                      </span>
                      <h3 className="text-2xl font-bold text-white group-hover:text-gold-400 transition-colors duration-300">
                        {vehicle.title}
                      </h3>
                      <p className="text-sm text-gray-400 mt-1">{vehicle.subtitle}</p>
                    </div>
                  </div>

                  <ul className="space-y-3 my-6 flex-grow">
                    {vehicle.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm lg:text-base">
                        <Check className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={waLink(vehicle.waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-noir-950 font-bold transition-all duration-300 shadow-lg shadow-gold-600/10 group/btn mt-auto"
                  >
                    <span>Detaylar ve Rezervasyon</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}