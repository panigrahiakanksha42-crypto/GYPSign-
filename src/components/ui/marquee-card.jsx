import { Star } from "lucide-react"

import { LiquidCard, CardContent } from "./liquid-glass-card"
import { Marquee } from "./marquee"

const testimonials = [
  {
    name: "Aarti Reddy",
    role: "JUBILEE HILLS",
    content:
      "GYP Signatures completely transformed our living room. The bespoke sofa and center table are masterfully crafted and have become the centerpiece of our home. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "Vikram Singhania",
    role: "BANJARA HILLS",
    content:
      "The attention to detail and premium quality materials used by GYP is unmatched. Our dining space feels like a royal suite now.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "Neha Sharma",
    role: "GACHIBOWLI",
    content:
      "Exceptional craftsmanship! They understood exactly what we wanted and delivered pieces that are both luxurious and incredibly comfortable.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "Rahul Desai",
    role: "HITEC CITY",
    content:
      "Timely delivery and flawless finishing. The custom teak wood wardrobe they designed for us is a true work of art.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    rating: 5,
  },
]

export const MarqueeTestimonials = () => {
  return (
    <div className="py-8 overflow-hidden w-100">
      <Marquee pauseOnHover repeat={4} speed="normal">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="mx-3 gyp-testimonial-card p-4 p-md-5 flex flex-col" style={{width: '90vw', maxWidth: '400px'}}>
            <div className="mb-4 flex items-center space-x-3" style={{width: '100%', margin: '0 0 20px 0'}}>
              <img
                src={testimonial.avatar || "/placeholder.svg"}
                alt={testimonial.name}
                className="h-12 w-12 object-cover rounded-full flex-shrink-0"
              />
              <div className="flex flex-col justify-center" >
                <h4 className="font-semibold text-[16px] m-0 leading-tight" style={{margin: '8px 0', color: '#111'}} >
                  {testimonial.name}
                </h4>
                <p className="text-[13px] m-0 leading-tight mt-0.5 text-uppercase" style={{ color: '#555'}} >{testimonial.role}</p>
              </div>
            </div>
            <p className="mb-5 text-[14.5px] leading-relaxed font-medium" style={{width: '100%', margin: '10px 0', color: '#333'}}>
              {testimonial.content}
            </p>
            <div className="flex space-x-1.5 mt-auto pb-1" style={{width: '100%', margin: '10px 0'}}>
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="h-[18px] w-[18px] fill-[#ffde00] text-[#ffde00]"
                />
              ))}
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};
