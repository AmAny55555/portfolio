import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/lib/constants/services";

export default function Services() {
  return (
    <section id="services" className="w-full">
      <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24 mt-10 md:mt-14">
        <div
          className="text-center mb-10"
          data-aos="fade-up"
          data-aos-offset="100"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B3C5D]">
            خدماتنا
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="rounded-2xl border border-[#D9E2EC] shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 bg-white"
            >
              <CardContent className="p-6 md:p-7">
                <h3 className="text-xl font-bold text-[#0B3C5D] mb-5">
                  {service.title}
                </h3>

                <ul className="space-y-3 text-[#1F1F1F]">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 w-2 h-2 rounded-full bg-[#1DA1F2] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}