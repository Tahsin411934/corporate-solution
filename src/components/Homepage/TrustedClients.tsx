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

  const stats = [
    { value: "13+", label: "Years of Industry Experience", icon: "🏆" },
    { value: "50000+", label: "Enterprise Clients Served", icon: "🏢" },
    { value: "100%", label: "Client Satisfaction Rate", icon: "⭐" },
    { value: "24/7", label: "Dedicated Support", icon: "🛡️" },
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
            We partner with Bangladesh's most respected organizations to deliver exceptional results
          </p>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-100"
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
              <span className="text-sm font-medium text-gray-600 text-center transition-opacity duration-300">
                {client.name}
              </span>
            </div>
          ))}
        </div>

        {/* Professional Trust Badges */}
        <div className="mt-16">
          <h3 className="text-center text-xl font-semibold text-gray-700 mb-8">
            Our Commitment to Excellence
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-100 text-center"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;