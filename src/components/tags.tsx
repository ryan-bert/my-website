interface TagsProps {
  text: string[];
}

export default function Tags({ text }: TagsProps) {
  return (
    <>
      <div className="flex flex-row space-x-3 font-semibold">
        {text.map((tag, index) => (
          <p key={index} className={`rounded-xl px-2 ${getTagColor(tag)}`}>
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
    matplotlib: 'bg-red-400',
    pandas: 'bg-green-400',
    numpy: 'bg-yellow-400',
  };

  return colors[tag] || 'bg-gray-400'; // Default color if the tag doesn't match
}