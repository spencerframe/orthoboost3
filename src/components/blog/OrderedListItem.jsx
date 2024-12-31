export default function OrderedListItem({ children }) {
  return (
    <li className="flex items-start space-x-3">
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
        {/* The number will be handled by CSS counter */}
      </div>
      <div>{children}</div>
    </li>
  );
}