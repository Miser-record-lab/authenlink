"use client";

import { useMemo, useState, useEffect } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  BackgroundVariant,
  Node,
  Edge,
} from "reactflow";
import "reactflow/dist/style.css";

import { transformWorkflow } from "@/utils/workflowTransformer";
import { CustomNode } from "./CustomNode";
import { StickyNote } from "./StickyNote";

// Import du workflow JSON
import workflowData from "@/workflows/rag.json";

const nodeTypes = {
  custom: CustomNode,
  stickyNote: StickyNote,
};

export default function Workflow() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Transformer les données du workflow
  const { nodes, edges } = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return transformWorkflow(workflowData as any);
  }, []);

  if (!isClient) {
    return (
      <div className="w-full h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Chargement du workflow...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <span className="text-3xl">🔄</span>
              {workflowData.name}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {nodes.length} nodes • {edges.length} connexions
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                workflowData.active
                  ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                  : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              }`}
            >
              {workflowData.active ? "✅ Active" : "⏸️ Inactive"}
            </div>
          </div>
        </div>
      </div>

      {/* Workflow Canvas */}
      <div className="w-full h-full pt-20">
        <ReactFlow
          nodes={nodes as Node[]}
          edges={edges as Edge[]}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{
            padding: 0.2,
            includeHiddenNodes: false,
            minZoom: 0.3,
            maxZoom: 1.5,
          }}
          defaultViewport={{ x: 0, y: 0, zoom: 0.6 }}
          attributionPosition="bottom-left"
          className="bg-gray-400 dark:bg-gray-900"
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          panOnScroll={true}
          zoomOnScroll={true}
          preventScrolling={false}
        >
          <Background
            variant={BackgroundVariant.Dots}
            gap={20}
            size={1.5}
            className="bg-gray-50 dark:bg-gray-900"
            color="#94a3b8"
          />
          <Controls className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg" />

          <MiniMap
            className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg"
            nodeColor={(node) => {
              const category = (node.data as { category?: string })?.category;
              switch (category) {
                case "trigger":
                  return "#eab308";
                case "ai":
                  return "#22c55e";
                case "logic":
                  return "#a855f7";
                case "data":
                  return "#6366f1";
                case "note":
                  return "#9ca3af";
                default:
                  return "#3b82f6";
              }
            }}
          />
        </ReactFlow>
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 max-w-xs">
        <h3 className="font-semibold text-sm mb-3 text-gray-900 dark:text-white">
          Légende
        </h3>
        <div className="space-y-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center text-white">
              ⚡
            </span>
            <span className="text-gray-700 dark:text-gray-300">Trigger</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white">
              🤖
            </span>
            <span className="text-gray-700 dark:text-gray-300">AI / Agent</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white">
              🔀
            </span>
            <span className="text-gray-700 dark:text-gray-300">Logic</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-white">
              📊
            </span>
            <span className="text-gray-700 dark:text-gray-300">Data</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white">
              ⚙️
            </span>
            <span className="text-gray-700 dark:text-gray-300">Action</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-gray-500 flex items-center justify-center text-white">
              📝
            </span>
            <span className="text-gray-700 dark:text-gray-300">Note</span>
          </div>
        </div>
      </div>
    </div>
  );
}
