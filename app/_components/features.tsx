import { Card, CardContent } from "@/components/ui/card";
import { features } from "@/lib/constants/features";

export default function Features() {
  return (
    <section id="features" className="w-full">
      <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24 mt-14 md:mt-20">
        
        <div
          className="text-center mb-10"
          data-aos="fade-up"
          data-aos-offset="100"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B3C5D]">
            مميزات الشركة
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Card
                key={feature.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-offset="120"
                className="rounded-2xl border border-[#D9E2EC] shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 bg-white"
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  
                  <div className="w-14 h-14 rounded-2xl bg-[#F5F7FA] flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-[#FF7A00]" />
                  </div>

                  <h3 className="text-lg font-bold text-[#0B3C5D]">
                    {feature.title}
                  </h3>

                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}