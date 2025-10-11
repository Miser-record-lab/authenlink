'use client';

import React from 'react';
import { X } from 'lucide-react';
import { WorkflowNode } from '@/types/workflow';

interface NodeDetailsPanelProps {
  node: WorkflowNode | null;
  onClose: () => void;
}

export function NodeDetailsPanel({ node, onClose }: NodeDetailsPanelProps) {
  if (!node) return null;

  const categoryIcons = {
    trigger: '⚡',
    action: '⚙️',
    logic: '🔀',
    ai: '🤖',
    data: '📊',
    note: '📝',
  };

  const categoryColors = {
    trigger: 'bg-yellow-500/10 border-yellow-500',
    action: 'bg-blue-500/10 border-blue-500',
    logic: 'bg-purple-500/10 border-purple-500',
    ai: 'bg-green-500/10 border-green-500',
    data: 'bg-indigo-500/10 border-indigo-500',
    note: 'bg-gray-500/10 border-gray-500',
  };

  const category = node.data.category || 'action';
  const icon = categoryIcons[category];
  const colorClass = categoryColors[category];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[80vh] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className={`p-6 border-b-2 ${colorClass}`}>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="text-4xl">{icon}</div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {node.data.label}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {node.data.nodeType}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(80vh-140px)]">
          {/* Node ID */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Node ID
            </h3>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-3 font-mono text-xs text-gray-600 dark:text-gray-400">
              {node.id}
            </div>
          </div>

          {/* Position */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Position
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-3">
                <span className="text-xs text-gray-500 dark:text-gray-400">X:</span>
                <span className="ml-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                  {node.position.x}
                </span>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-3">
                <span className="text-xs text-gray-500 dark:text-gray-400">Y:</span>
                <span className="ml-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                  {node.position.y}
                </span>
              </div>
            </div>
          </div>

          {/* Credentials */}
          {node.data.credentials && Object.keys(node.data.credentials).length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                🔑 Credentials
              </h3>
              <div className="space-y-2">
                {Object.entries(node.data.credentials).map(([key, value]) => (
                  <div
                    key={key}
                    className="bg-gray-50 dark:bg-gray-900 rounded-lg p-3"
                  >
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                      {key}
                    </div>
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {value.name}
                    </div>
                    <div className="text-xs text-gray-400 dark:text-gray-500 mt-1 font-mono">
                      ID: {value.id}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Parameters */}
          {node.data.parameters && Object.keys(node.data.parameters).length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                ⚙️ Parameters
              </h3>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <pre className="text-xs text-gray-600 dark:text-gray-400 overflow-x-auto whitespace-pre-wrap break-words">
                  {JSON.stringify(node.data.parameters, null, 2)}
                </pre>
              </div>
            </div>
          )}

          {/* Category Badge */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Category
            </h3>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 ${colorClass}`}>
              <span className="text-xl">{icon}</span>
              <span className="text-sm font-medium capitalize">{category}</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
          <button
            onClick={onClose}
            className="w-full px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}
