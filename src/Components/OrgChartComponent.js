import React, { useState } from 'react';
import OrgChart from 'react-orgchart';
import 'react-orgchart/index.css';
import './OrgChartComponents.css';

const OrgChartComponent = () => {
  // Define your organizational chart data
  const orgChartData = {
    name: 'CEO',
    children: [
      {
        name: 'Manager',
        attributes: {
          department: 'Production',
        },
        children: [
          {
            name: 'Foreman',
            attributes: {
              department: 'Fabrication',
            },
            children: [
              {
                name: 'Worker',
              },
            ],
          },
          {
            name: 'Foreman',
            attributes: {
              department: 'Assembly',
            },
            children: [
              {
                name: 'Worker',
              },
            ],
          },
        ],
      },
    ],
  };

  const [selectedNode, setSelectedNode] = useState(null);

  // Function to traverse the tree and find a node by name
  const findNodeByName = (nodeName, currentNode) => {
    if (currentNode.name === nodeName) {
      return currentNode;
    } else if (currentNode.children) {
      for (const child of currentNode.children) {
        const foundNode = findNodeByName(nodeName, child);
        if (foundNode) {
          return foundNode;
        }
      }
    }
    return null;
  };

  // Function to handle when a node in the organizational chart is clicked
  const handleNodeClick = (nodeName) => {
    const node = findNodeByName(nodeName, orgChartData);
    if (node) {
      setSelectedNode(node);
    }
  };

  return (
    <div className="org-chart-page">
      <div className="org-chart-data">
        <h2>Data on the Left Side</h2>
        <ul>
          <li onClick={() => handleNodeClick('CEO')}>CEO</li>
          <li onClick={() => handleNodeClick('Manager')}>Manager</li>
          <li onClick={() => handleNodeClick('Foreman')}>Foreman</li>
          <li onClick={() => handleNodeClick('Worker')}>Worker</li>
          {/* Add more list items for other names as needed */}
        </ul>
      </div>
      <div className="org-chart-container">
        {selectedNode && (
          <OrgChart
            tree={selectedNode}
            NodeComponent={(props) => (
              <div className="org-chart-node">
                {props.node.name}
                {props.node.attributes && (
                  <div className="org-chart-attributes">
                    Department: {props.node.attributes.department}
                  </div>
                )}
              </div>
            )}
          />
        )}
      </div>
    </div>
  );
};

export default OrgChartComponent;





