import Image from "next/image";

const services = [
  {
    name: "Tes Minat & Bakat",
    description: "Kenali potensi unikmu dan temukan arah karier yang sesuai.",
    image:
      "https://plus.unsplash.com/premium_photo-1665990294874-36ff13d2b66d?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    name: "Sesi Konseling",
    description:
      "Ceritakan bebanmu pada psikolog terpercaya. Ruang aman untuk semua.",
    image:
      "https://plus.unsplash.com/premium_photo-1664372145617-e81a4374c3df?q=80&w=697&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    name: "Tes IQ Online",
    description: "Uji kemampuan logikamu dengan tes IQ cepat dan akurat.",
    image:
      "https://images.unsplash.com/photo-1516553250341-748edab67bc6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
];

export default function Services() {
  return (
    <section className="py-16 px-6 bg-amber-50">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold text-[#B17F59] font-cherry">
          🌱 Layanan Kami
        </h2>
        <p className="text-gray-600 mt-2 text-lg">
          Dukung perjalanan kesehatan mentalmu bersama Hello Life.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-[1.02] transition duration-300"
          >
            <div className="relative w-full h-56">
              <Image
                src={service.image}
                alt={service.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent rounded-t-2xl"></div>
            </div>
            <div className="p-5 space-y-2">
              <h3 className="text-xl font-bold text-[#56776C]">{service.name}</h3>
              <p className="text-gray-700 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
