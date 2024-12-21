import React from "react";
import { motion } from "framer-motion";
import { DollarSign, Star, Building2, Users, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function ReviewsStatic() {
  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Orthodontist",
      location: "Phoenix, AZ",
      content: "Their follow-up process is incredible. We went from converting 20% of leads to over 45% in just two months.",
      rating: 5,
    },
    {
      name: "Dr. Michael Roberts",
      role: "Practice Owner",
      location: "Denver, CO",
      content: "The scheduling system has transformed our practice. We're now capturing leads we used to miss completely.",
      rating: 5,
    },
    {
      name: "Dr. Emily Thompson",
      role: "Orthodontist",
      location: "Austin, TX",
      content: "The ROI guarantee gave us confidence to try their service, but their results made us stay.",
      rating: 5,
    },
    {
      name: "Dr. James Wilson",
      role: "Practice Owner",
      location: "Seattle, WA",
      content: "Best marketing investment we've made. The lead quality and conversion rates are exceptional.",
      rating: 5,
    },
    {
      name: "Dr. Lisa Anderson",
      role: "Orthodontist",
      location: "Chicago, IL",
      content: "Their 5-minute response time is a game-changer. Our conversion rates have doubled.",
      rating: 5,
    },
    {
      name: "Dr. David Martinez",
      role: "Practice Owner",
      location: "Miami, FL",
      content: "The comprehensive follow-up system ensures no lead ever falls through the cracks.",
      rating: 5,
    },
    {
      name: "Dr. Rachel Kim",
      role: "Orthodontist",
      location: "San Francisco, CA",
      content: "Switching to OrthoBoost was the best decision for our practice. The ROI is incredible.",
      rating: 5,
    },
    {
      name: "Dr. Thomas Brown",
      role: "Practice Owner",
      location: "Boston, MA",
      content: "Their team's expertise in orthodontic marketing is unmatched. Highly recommended!",
      rating: 5,
    },
    {
      name: "Dr. Amanda Garcia",
      role: "Orthodontist",
      location: "Houston, TX",
      content: "We've seen a 300% increase in qualified leads since partnering with OrthoBoost.",
      rating: 5,
    },
  ];
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <h2 className='text-3xl font-bold text-center mb-12'>What Our Clients Say</h2>
      <div className='grid md:grid-cols-3 gap-8'>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className='bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl'
          >
            <div className='flex mb-4'>
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className='w-5 h-5 text-yellow-400 fill-current'
                />
              ))}
            </div>
            <p className='text-gray-600 mb-4'>{testimonial.content}</p>
            <div>
              <p className='font-semibold text-gray-900'>{testimonial.name}</p>
              <p className='text-sm text-gray-500'>{testimonial.role}</p>
              <p className='text-sm text-gray-500'>{testimonial.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
