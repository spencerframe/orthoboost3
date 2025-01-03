import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, PieChart } from 'lucide-react';

export function ResultCard({ currentRevenue, potentialGrowth, roi }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6 space-y-6"
    >
      <h3 className="text-2xl font-bold text-center mb-8">
        🦷 Your Potential ROI Summary
      </h3>

      <div className="grid gap-6 md:grid-cols-1">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg">
          <div className="flex items-center space-x-3 mb-2">
            <DollarSign className="w-5 h-5 text-blue-600" />
            <h4 className="font-semibold">Current Monthly Revenue</h4>
          </div>
          <p className="text-3xl font-bold text-blue-600">
            {typeof currentRevenue === 'number' ? `$${currentRevenue.toLocaleString()}` : currentRevenue}
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg border-2 border-green-100">
          <div className="flex items-center space-x-3 mb-2">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            <h4 className="font-semibold">Additional Monthly Revenue</h4>
          </div>
          <p className="text-3xl font-bold text-green-600">
            {typeof potentialGrowth === 'number' ? `$${potentialGrowth.toLocaleString()}` : potentialGrowth}
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-4 rounded-lg border-2 border-purple-100">
          <div className="flex items-center space-x-3 mb-2">
            <PieChart className="w-5 h-5 text-blue-600" />
            <h4 className="font-semibold">Forecasted ROI</h4>
          </div>
          <p className="text-3xl font-bold text-purple-600">
            {roi === '-' ? roi : `${roi}%`}
          </p>
        </div>
      </div>
    </motion.div>
  );
}