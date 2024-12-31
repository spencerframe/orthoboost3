export default function UnorderedListItem({ children }) {
  return (
    <li className="flex items-start">
      <span className="text-blue-600 font-bold mr-2">•</span>
      <div>{children}</div>
    </li>
  );
}