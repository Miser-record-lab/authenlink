import { Handle, Position } from "reactflow";

interface CustomNodeProps {
  data: {
    label: string;
    nodeType: string;
    category?: "trigger" | "action" | "logic" | "note" | "ai" | "data";
    parameters?: any;
    credentials?: any;
  };
}

// Icônes et couleurs par catégorie
const categoryStyles = {
  trigger: {
    icon: "⚡",
    color: "bg-gray-900/10 border-gray-500 text-forground",
    iconBg: "bg-yellow-500",
  },
  action: {
    icon: "⚙️",
    color: "bg-blue-500/10 border-blue-500 text-forground",
    iconBg: "bg-blue-500",
  },
  logic: {
    icon: "🔀",
    color: "bg-purple-500/10 border-purple-500 text-forground",
    iconBg: "bg-purple-500",
  },
  ai: {
    icon: "🤖",
    color: "bg-red-500/10 border-red-500 text-forground",
    iconBg: "bg-red-500",
  },
  data: {
    icon: "📊",
    color: "bg-indigo-500/10 border-indigo-500 text-forground",
    iconBg: "bg-indigo-500",
  },
  note: {
    icon: "📝",
    color: "bg-gray-500/10 border-gray-500 text-forground",
    iconBg: "bg-gray-500",
  },
};

export function CustomNode({ data }: CustomNodeProps) {
  const category = data.category || "action";
  const style = categoryStyles[category];

  return (
    <div
      className={`px-4 py-3 rounded-lg border-2 min-w-[200px] shadow-lg ${style.color}`}
      style={{
        transform: "translateZ(0)",
        willChange: "transform",
      }}
    >
      {/* Handle d'entrée */}
      <Handle
        type="target"
        position={Position.Left}
        className="w-3 h-3 !bg-gray-400 dark:!bg-gray-600"
      />

      {/* Contenu du node */}
      <div className="flex items-center gap-3">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${style.iconBg}`}
        >
          {style.icon}
        </div>
        <div className="flex-1">
          <div className="font-semibold text-sm">{data.label}</div>
          <div className="text-xs opacity-60 mt-0.5">{data.nodeType}</div>
        </div>
      </div>

      {/* Badge credentials si présent */}
      {data.credentials && Object.keys(data.credentials).length > 0 && (
        <div className="mt-2 text-xs opacity-50 flex items-center gap-1">
          🔑 {Object.keys(data.credentials).length} credential(s)
        </div>
      )}

      {/* Handle de sortie */}
      <Handle
        type="source"
        position={Position.Right}
        className="w-3 h-3 !bg-gray-400 dark:!bg-gray-600"
      />
    </div>
  );
}
