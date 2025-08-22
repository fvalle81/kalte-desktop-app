// MenuList.jsx
export default function MenuList({ items }) {
  return (
    <ul className="divide-y divide-gray-200">
      {items.map(({ id, label, onClick }) => (
        <li key={id}>
          <button
            onClick={onClick}
            className="w-full text-left px-4 py-2 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
}
