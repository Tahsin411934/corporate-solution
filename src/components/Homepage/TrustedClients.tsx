import Image from "next/image";

const TrustedClients = () => {
  const clients = [
    { name: "ACI Limited", logo: "/clients/aci.png" },
    { name: "Beximco Pharmaceuticals", logo: "/clients/beximco.png" },
    { name: "Square Group", logo: "/clients/square.png" },
    { name: "Pran-RFL Group", logo: "/clients/pran.png" },
    { name: "Walton Group", logo: "/clients/walton.png" },
    { name: "Bashundhara Group", logo: "/clients/bashundhara.png" },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0D1542]">
            Our Clients Who Trust Us!
          </h2>
          <div className="w-20 h-1 bg-[#005FA5] mx-auto mt-4"></div>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="relative w-full h-16">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 16vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6">
          <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-lg shadow-sm">
            <div className="text-3xl text-[#005FA5]">13+</div>
            <div className="text-sm font-medium text-gray-600">Years Experience</div>
          </div>
          
          <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-lg shadow-sm">
            <div className="text-3xl text-[#005FA5]">500+</div>
            <div className="text-sm font-medium text-gray-600">Clients Served</div>
          </div>
          
          <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-lg shadow-sm">
            <div className="text-3xl text-[#005FA5]">100%</div>
            <div className="text-sm font-medium text-gray-600">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;