import Image from "next/image";

const TrustedClients = () => {
  const clients = [
    { name: "ACI Limited", logo: "/clients/aci.png" },
    { name: "Beximco Pharmaceuticals", logo: "/clients/beximco.png" },
    { name: "Square Group", logo: "/clients/square.png" },
    { name: "Pran-RFL Group", logo: "/clients/pran.jpg" },
    { name: "Walton Group", logo: "/clients/walton.jpg" },
    { name: "Bashundhara Group", logo: "/clients/bashundhara.jpg" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Trusted By Industry Leaders
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We're proud to partner with some of the most respected organizations in the region
          </p>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-100"
            >
              <div className="relative w-full h-20 mb-3">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain object-center transition-all duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 16vw"
                />
              </div>
              <span className="text-sm font-medium text-gray-600 text-center opacity-100 transition-opacity duration-300">
                {client.name}
              </span>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-6">
          <div className="flex flex-col items-center justify-center bg-white px-8 py-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-100 min-w-[180px]">
            <div className="text-4xl font-bold text-blue-600">13+</div>
            <div className="text-sm font-medium text-gray-600 mt-2 text-center">
              Years of Excellence
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center bg-white px-8 py-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-100 min-w-[180px]">
            <div className="text-4xl font-bold text-blue-600">500+</div>
            <div className="text-sm font-medium text-gray-600 mt-2 text-center">
              Satisfied Clients
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center bg-white px-8 py-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-100 min-w-[180px]">
            <div className="text-4xl font-bold text-blue-600">100%</div>
            <div className="text-sm font-medium text-gray-600 mt-2 text-center">
              Client Retention
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;