import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PhoneCall } from 'lucide-react';
import { ResultCard } from './ResultCard';
import { getGrowthOptions } from './types';

export function ROICalculator() {
  const [revenue, setRevenue] = useState(5000);
  const [budget, setBudget] = useState(2000);
  const [growth, setGrowth] = useState(2);

  const isFormComplete = revenue && budget && growth;

  // Reset growth when budget changes
  const handleBudgetChange = (newBudget) => {
    setBudget(newBudget);
    // Set growth to minimum value for selected budget
    const options = getGrowthOptions(getBudgetId(newBudget));
    if (options.length) {
      setGrowth(options[0].value.min);
    }
  };

  const getBudgetId = (amount) => {
    if (amount <= 2000) return 'A';
    if (amount <= 4000) return 'B';
    return 'C';
  };

  const getGrowthRange = () => {
    if (!budget) return { min: 1, max: 5 };
    const options = getGrowthOptions(getBudgetId(budget));
    return {
      min: options[0].value.min,
      max: options[options.length - 1].value.max
    };
  };

  const calculateResults = () => {
    // Calculate potential growth
    const potentialGrowth = growth && revenue
      ? growth * revenue
      : '-';

    // Calculate ROI
    const roi = budget && potentialGrowth !== '-'
      ? Math.round((potentialGrowth / budget) * 100)
      : '-';

    return {
      potentialGrowth,
      roi
    };
  };

  const results = calculateResults();

  return (
    <div>
      <div className="max-w-4xl mx-auto">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold mb-4">
              Average Revenue Per Patient
            </h3>
            <div className="space-y-2">
              <input
                type="range"
                min="3000"
                max="8000"
                step="500"
                value={revenue}
                onChange={(e) => setRevenue(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>$3,000</span>
                <span className="font-semibold text-blue-600">${revenue.toLocaleString()}</span>
                <span>$8,000</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold mb-4">
              Monthly Marketing Budget
            </h3>
            <div className="space-y-2">
              <input
                type="range"
                min="1000"
                max="10000"
                step="1000"
                value={budget}
                onChange={(e) => handleBudgetChange(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>$1,000</span>
                <span className="font-semibold text-blue-600">${budget.toLocaleString()}</span>
                <span>$10,000</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
            style={{ opacity: budget ? 1 : 0.5 }}
          >
            <h3 className="text-lg font-semibold mb-4">
              Desired average monthly new starts
            </h3>
            <div className="space-y-2">
              <input
                type="range"
                min={getGrowthRange().min}
                max={getGrowthRange().max}
                step="1"
                value={growth}
                onChange={(e) => setGrowth(parseInt(e.target.value))}
                disabled={!budget}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 disabled:opacity-50"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>{getGrowthRange().min}</span>
                <span className="font-semibold text-blue-600">{growth} new starts/month</span>
                <span>{getGrowthRange().max}</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="space-y-8">
          <ResultCard {...results} />
        </div>
      </div>
      </div>
      
      {isFormComplete && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full mt-20 relative rounded-3xl p-[4px] bg-gradient-to-tr from-blue-600 to-cyan-500"
        >
          <div className="relative bg-white rounded-[calc(1.5rem-3px)]">
          
          <div className="relative bg-gradient-to-r from-blue-600/10 to-cyan-500/10 rounded-[calc(1.5rem-3px)]">
            <div className="max-w-4xl mx-auto py-16 px-4">
              <div className="mb-8">
                <img
                  src="/images/tyler-loveall-headshot.png"
                  alt="Tyler Loveall"
                  className="rounded-xl w-32 mx-auto"
                />
              </div>
              <div className="text-center relative">
                <h3 className="text-2xl font-bold mb-4">Want to Achieve These Results?</h3>
                <p className="text-gray-600 mb-8">
                  Book your free strategy call with Tyler to learn how we can help you achieve these results
                </p>
                <Link
                  to="/schedule"
                  className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition space-x-2"
                >
                  <span>Book Your Strategy Call</span>
                  <PhoneCall className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}