interface TagsProps {
  text: string[];
}

export default function Tags({ text }: TagsProps) {
  return (
    <>
      <div className="flex flex-wrap flex-row space-x-3 font-semibold">
        {text.map((tag, index) => (
          <p key={index} className={`rounded-xl mt-3 px-2 ${getTagColor(tag)}`}>
            {tag}
          </p>
        ))}
      </div>
    </>
  );
}

// Helper function to dynamically generate background color based on tag
function getTagColor(tag: string): string {
  const colors: { [key: string]: string } = {
    Python: 'bg-blue-400',
    React: 'bg-blue-400',
    matplotlib: 'bg-red-400',
    cryptography: 'bg-red-400',
    pandas: 'bg-green-400',
    security: 'bg-green-400',
    API: 'bg-green-400',
    Tailwind: 'bg-green-400',
    numpy: 'bg-yellow-400',
    finance: 'bg-purple-400',
    statistics: 'bg-orange-400',
    JavaScript: 'bg-orange-400',
    TensorFlow: 'bg-pink-400',
    OpenBB: 'bg-pink-400',
    SymPy: 'bg-pink-400',

  };

  return colors[tag] || 'bg-gray-400'; // Default color
}