import { N8nWorkflow, N8nNode, WorkflowNode, WorkflowEdge } from '@/types/workflow';

/**
 * Détermine la catégorie d'un node selon son type
 */
function getNodeCategory(nodeType: string): 'trigger' | 'action' | 'logic' | 'note' | 'ai' | 'data' {
  if (nodeType.includes('Trigger') || nodeType.includes('webhook')) {
    return 'trigger';
  }
  if (nodeType.includes('stickyNote')) {
    return 'note';
  }
  if (nodeType.includes('langchain') || nodeType.includes('ai') || nodeType.includes('Agent')) {
    return 'ai';
  }
  if (nodeType.includes('set') || nodeType.includes('code') || nodeType.includes('if') || nodeType.includes('merge') || nodeType.includes('split')) {
    return 'logic';
  }
  if (nodeType.includes('dataTable') || nodeType.includes('database')) {
    return 'data';
  }
  return 'action';
}

/**
 * Génère un nom court pour le type de node
 */
function getShortNodeType(nodeType: string): string {
  const parts = nodeType.split('.');
  return parts[parts.length - 1] || nodeType;
}

/**
 * Convertit les nodes n8n en nodes ReactFlow
 */
export function transformNodes(n8nNodes: N8nNode[]): WorkflowNode[] {
  return n8nNodes.map((node) => {
    const nodeType = getShortNodeType(node.type);
    const category = getNodeCategory(node.type);

    return {
      id: node.id,
      type: category === 'note' ? 'stickyNote' : 'custom',
      position: {
        x: node.position[0],
        y: node.position[1],
      },
      data: {
        label: node.name,
        nodeType,
        parameters: node.parameters,
        credentials: node.credentials,
        category,
      },
    };
  });
}

/**
 * Convertit les connexions n8n en edges ReactFlow
 */
export function transformConnections(
  connections: N8nWorkflow['connections'],
  nodes: N8nNode[]
): WorkflowEdge[] {
  const edges: WorkflowEdge[] = [];
  let edgeId = 0;

  // Créer un map pour retrouver facilement les IDs des nodes par leur nom
  const nodeNameToId = new Map<string, string>();
  nodes.forEach((node) => {
    nodeNameToId.set(node.name, node.id);
  });

  // Parcourir toutes les connexions
  Object.entries(connections).forEach(([sourceName, connectionTypes]) => {
    const sourceId = nodeNameToId.get(sourceName);
    if (!sourceId) return;

    Object.entries(connectionTypes).forEach(([connectionType, targetGroups]) => {
      targetGroups.forEach((targets) => {
        targets.forEach((target) => {
          const targetId = nodeNameToId.get(target.node);
          if (!targetId) return;

          const isAiConnection = connectionType.startsWith('ai_');

          edges.push({
            id: `edge-${edgeId++}`,
            source: sourceId,
            target: targetId,
            type: isAiConnection ? 'smoothstep' : 'default',
            animated: connectionType === 'main',
            label: isAiConnection ? connectionType.replace('ai_', '') : undefined,
            sourceHandle: connectionType,
            targetHandle: connectionType,
          });
        });
      });
    });
  });

  return edges;
}

/**
 * Transforme un workflow n8n complet en format ReactFlow
 */
export function transformWorkflow(workflow: N8nWorkflow): {
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
} {
  const nodes = transformNodes(workflow.nodes);
  const edges = transformConnections(workflow.connections, workflow.nodes);

  return { nodes, edges };
}
