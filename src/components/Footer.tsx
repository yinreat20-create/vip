import { MessageCircle, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-noir-950 border-t border-gold-500/10 pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Kurumsal */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">VIP Transfer</h3>
            <p className="text-gray-400">
              Konforlu, güvenilir ve lüks transfer hizmetleriyle 7/24 yanınızdayız.
            </p>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">İletişim</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-3 text-gold-500" />
                {/* Alt satırdaki numarayı sonra kendi numaranla değiştirebilirsin */}
                <span>+90 5XX XXX XX XX</span>
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-3 text-gold-500" />
                <span>Silopi, Şırnak</span>
              </li>
            </ul>
          </div>

          {/* QR ve WhatsApp */}
          <div className="flex flex-col items-start">
            <h4 className="text-lg font-semibold text-white mb-4">Hızlı Rezervasyon</h4>
            {/* href yazan yere kendi numaranı 905... şeklinde yazabilirsin usta */}
            <a
              href="https://wa.me/905000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-emerald-400 transition-colors hover:bg-emerald-500/20 mb-6"
            >
              <MessageCircle className="h-4 w-4 transition-transform group-hover:scale-110" />
              WhatsApp'tan Yazın
            </a>
            
            <div className="flex flex-col items-start">
              <p className="text-sm text-amber-500 mb-2">WhatsApp QR Kodumuz</p>
              <img 
                src="/qr.png" 
                alt="WhatsApp QR" 
                className="w-32 h-32 rounded-lg border-2 border-amber-500 object-cover" 
              />
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col items-center">
          <p className="text-gray-500 text-sm text-center">
            © 2026 VIP Transfer. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}