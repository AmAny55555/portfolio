import Image from "next/image";
import { Card } from "@/components/ui/card";
import { portfolioItems } from "@/lib/constants/portfolio";

export default function Portfolio() {
  return (
    <section id="portfolio" className="w-full">
      <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24 mt-14 md:mt-20">

    
        <div
          className="text-center mb-10"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B3C5D]">
            أعمالنا
          </h2>
    
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          
          {portfolioItems.map((item, index) => (
            <Card
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group overflow-hidden rounded-2xl border border-[#D9E2EC] shadow-sm bg-white p-0"
            >
              
              <div className="relative h-64 w-full overflow-hidden">
                
              
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

            
                <div className="absolute inset-0 bg-[#0B3C5D]/70 opacity-0 group-hover:opacity-100 transition duration-500" />

            
                <div className="absolute bottom-0 right-0 p-5 text-white opacity-0 group-hover:opacity-100 transition duration-500">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                </div>

              </div>
            </Card>
          ))}

        </div>
      </div>
    </section>
  );
}