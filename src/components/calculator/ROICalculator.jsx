import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PhoneCall } from 'lucide-react';
import { RadioGroup } from './RadioGroup';
import { ResultCard } from './ResultCard';
import {
  CURRENT_PATIENTS_OPTIONS,
  REVENUE_OPTIONS,
  BUDGET_OPTIONS,
  getGrowthOptions
} from './types';

export function ROICalculator() {
  const [currentPatients, setCurrentPatients] = useState('');
  const [revenue, setRevenue] = useState('');
  const [budget, setBudget] = useState('');
  const [growth, setGrowth] = useState('');

  const isFormComplete = currentPatients && revenue && budget && growth;

  // Reset growth when budget changes
  const handleBudgetChange = (newBudget) => {
    setBudget(newBudget);
    setGrowth('');
  };

  const calculateResults = () => {
    const currentOption = CURRENT_PATIENTS_OPTIONS.find(opt => opt.id === currentPatients);
    const revenueOption = REVENUE_OPTIONS.find(opt => opt.id === revenue);
    const growthOption = budget ? getGrowthOptions(budget).find(opt => opt.id === growth) : null;
    const budgetOption = BUDGET_OPTIONS.find(opt => opt.id === budget);

    // Calculate average monthly revenue
    const currentRevenue = currentOption && revenueOption
      ? ((currentOption.value.min + currentOption.value.max) / 2) * revenueOption.value
      : '-';

    // Calculate potential growth
    const potentialGrowth = growthOption && revenueOption
      ? ((growthOption.value.min + growthOption.value.max) / 2) * revenueOption.value
      : '-';

    // Calculate ROI
    const roi = budgetOption && potentialGrowth !== '-'
      ? Math.round((potentialGrowth / ((budgetOption.value.min + budgetOption.value.max) / 2)) * 100)
      : '-';

    return {
      currentRevenue,
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
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold mb-4">
              Current Monthly New Patients
            </h3>
            <RadioGroup
              options={CURRENT_PATIENTS_OPTIONS}
              value={currentPatients}
              onChange={setCurrentPatients}
              name="currentPatients"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold mb-4">
              Average Revenue Per Patient ($)
            </h3>
            <RadioGroup
              options={REVENUE_OPTIONS}
              value={revenue}
              onChange={setRevenue}
              name="revenue"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold mb-4">
              Monthly Marketing Budget ($)
            </h3>
            <RadioGroup
              options={BUDGET_OPTIONS}
              value={budget}
              onChange={handleBudgetChange}
              name="budget"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold mb-4">
              Expected Monthly Patient Growth
            </h3>
            <RadioGroup
              options={budget ? getGrowthOptions(budget) : getGrowthOptions('B')}
              value={growth}
              onChange={setGrowth}
              name="growth"
              disabled={!budget}
            />
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