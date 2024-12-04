import { Mail, Phone } from "lucide-react";

export function ContactBanner() {
  return (
    <section className="w-full py-16 relative overflow-hidden bg-[url('/law-slider-1.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Overlay with background color and opacity */}
      <div className="absolute inset-0 bg-[#0B3B2C]/80"></div>
      <div className="relative max-w-6xl px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="">
            <h2 className="text-4xl lg:text-5xl text-center font-bold text-white tracking-tight flex items-center gap-2">
              Start Your Journey to
              <br />a Fresh Beginning
            </h2>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="bg-[#0D4435] rounded-lg p-6 flex items-center gap-4 min-w-[280px]">
              <div className="bg-white rounded-full p-3">
                <Phone className="h-6 w-6 text-[#0B3B2C]" />
              </div>
              <div>
                <p className="text-white/70 text-sm">Call Us 24/7</p>
                <p className="text-white font-semibold">+123 456 7890</p>
              </div>
            </div>
            <div className="bg-[#0D4435] rounded-lg p-6 flex items-center gap-4 min-w-[280px]">
              <div className="bg-white rounded-full p-3">
                <Mail className="h-6 w-6 text-[#0B3B2C]" />
              </div>
              <div>
                <p className="text-white/70 text-sm">Mail Us Anytime</p>
                <p className="text-white font-semibold">Lawsy@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
