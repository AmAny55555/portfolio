"use client";

import { Card, CardContent } from "@/components/ui/card";
import { features } from "@/lib/constants/features";
import { Sparkles } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="w-full" dir="rtl">
      <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24 mt-14 md:mt-20">
        
   
        <div
          className="text-center mb-10 md:mb-12 flex items-center justify-center gap-3"
          data-aos="fade-up"
          data-aos-offset="100"
        >
          <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-[#EAF6FF] text-[#1DA1F2]">
            <Sparkles size={20} />
          </div>

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
                data-aos-delay={index * 300}
                data-aos-duration="900"
                data-aos-easing="ease-out-cubic"
                data-aos-offset="120"
                className="group rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_6px_20px_rgba(11,60,93,0.08)] hover:shadow-[0_14px_40px_rgba(11,60,93,0.15)] hover:-translate-y-1.5 transition-all duration-300"
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-[#F5F7FA] flex items-center justify-center mb-4 transition group-hover:bg-[#FF7A00]/10">
                    <Icon className="w-7 h-7 text-[#FF7A00] transition group-hover:scale-110" />
                  </div>

                  {/* Title */}
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