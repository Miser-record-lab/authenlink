interface StickyNoteProps {
  data: {
    label: string;
    parameters?: {
      content?: string;
      height?: number;
      width?: number;
      color?: number;
    };
  };
}

// Couleurs n8n pour les sticky notes
const stickyColors: { [key: number]: string } = {
  1: "bg-red-100/60 dark:bg-red-900/20 border-red-300 dark:border-red-700",
  2: "bg-orange-100/60 dark:bg-orange-900/20 border-orange-300 dark:border-orange-700",
  3: "bg-yellow-100/60 dark:bg-yellow-900/20 border-yellow-300 dark:border-yellow-700",
  4: "bg-green-100/60 dark:bg-green-900/20 border-green-300 dark:border-green-700",
  5: "bg-blue-100/60 dark:bg-blue-900/20 border-blue-300 dark:border-blue-700",
  6: "bg-purple-100/60 dark:bg-purple-900/20 border-purple-300 dark:border-purple-700",
  7: "bg-pink-100/60 dark:bg-pink-900/20 border-pink-300 dark:border-pink-700",
};

export function StickyNote({ data }: StickyNoteProps) {
  const content = data.parameters?.content || "";
  const height = data.parameters?.height || 200;
  const width = data.parameters?.width || 300;
  const colorId = data.parameters?.color || 5;
  const colorClass = stickyColors[colorId] || stickyColors[5];

  return (
    <div
      className={`rounded-lg border-2 p-4 shadow-md ${colorClass} opacity-70`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        overflow: "auto",
      }}
    >
      <div className="prose prose-sm dark:prose-invert max-w-none">
        <div
          dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, "<br />") }}
          className="text-xs text-gray-700 dark:text-gray-300"
        />
      </div>
    </div>
  );
}
