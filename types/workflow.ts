// Types pour les workflows n8n

export interface N8nNodeParameter {
  [key: string]: any;
}

export interface N8nNode {
  parameters: N8nNodeParameter;
  type: string;
  typeVersion: number;
  position: [number, number];
  id: string;
  name: string;
  webhookId?: string;
  credentials?: {
    [key: string]: {
      id: string;
      name: string;
    };
  };
}

export interface N8nConnection {
  node: string;
  type: string;
  index: number;
}

export interface N8nConnections {
  [nodeName: string]: {
    [connectionType: string]: N8nConnection[][];
  };
}

export interface N8nWorkflow {
  name: string;
  nodes: N8nNode[];
  connections: N8nConnections;
  active?: boolean;
  settings?: {
    executionOrder?: string;
  };
  pinData?: any;
  id?: string;
  tags?: string[];
}

// Types pour ReactFlow
export interface WorkflowNode {
  id: string;
  type: string;
  position: { x: number; y: number };
  data: {
    label: string;
    nodeType: string;
    parameters?: N8nNodeParameter;
    credentials?: N8nNode['credentials'];
    category?: 'trigger' | 'action' | 'logic' | 'note' | 'ai' | 'data';
  };
}

export interface WorkflowEdge {
  id: string;
  source: string;
  target: string;
  type?: string;
  animated?: boolean;
  label?: string;
  sourceHandle?: string;
  targetHandle?: string;
}
