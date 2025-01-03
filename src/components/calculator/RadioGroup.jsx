import { cn } from '@/lib/utils';

export function RadioGroup({ options, value, onChange, name, disabled }) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((option) => (
        <label
          key={option.id}
          className={cn(
            'flex-1 p-4 rounded-lg transition-all text-center cursor-pointer',
            disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
            value === option.id
              ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md'
              : 'bg-white border border-gray-200 hover:border-blue-300 hover:shadow-sm'
          )}
        >
          <input
            type="radio"
            name={name}
            value={option.id}
            checked={value === option.id}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
            className="sr-only"
          />
          <span className="block font-medium">{option.label}</span>
        </label>
      ))}
    </div>
  );
}