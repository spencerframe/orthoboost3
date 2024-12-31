import { motion } from 'framer-motion';

export function TeamMember({ name, title, image, description, reverse = false }) {
  return (
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
      <motion.div
        initial={{ opacity: 0, x: reverse ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="lg:w-1/2"
      >
        <img
          src={image}
          alt={name}
          className="rounded-2xl shadow-lg w-full object-cover aspect-square"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: reverse ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="lg:w-1/2"
      >
        <h3 className="text-3xl font-bold mb-6">{name}</h3>
        <h4 className="text-xl text-blue-600 mb-6">{title}</h4>
        {description.map((paragraph, index) => (
          <p key={index} className="text-gray-600 mb-4">
            {paragraph}
          </p>
        ))}
      </motion.div>
    </div>
  );
}