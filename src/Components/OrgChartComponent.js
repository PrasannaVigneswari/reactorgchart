import React, { useEffect, useState } from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import styled from "@emotion/styled";
import "./OrgChartComponents.css";
const StyledNode = styled.div`
  padding: 8px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid red;
  margin:2px;
`;



const OrgChartComponents = () => {
  const [orgChartData, setOrgChartData] = useState([]);

  useEffect(() => {
    const jsonData = [
      {

        "firstName": "Wilson",

        "lastName": "Smith",

        "email": "roger17@gmail.com",

        "jobTitle": "CEO",

        "id": "301"

    ,
        "children": [
          {

            "firstName": "John",
    
            "lastName": "Cena",
    
            "email": "john@gmail.com",
    
            "jobTitle": "CFO",
    
            "id": "101"
          ,
            "children": [
              {

                "firstName": "Maria",
        
                "lastName": "Johnson (Sample Contact)",
        
                "email": "emailmaria@hubspot.com",
        
                "jobTitle": "Sales Manager",
        
                "id": "1"
        
            },
              
            ]
          }, {

            "firstName": "Mohit",
    
            "lastName": "Sharma",
    
            "email": "mohit342@gmail.com",
    
            "jobTitle": "COO",
    
            "id": "151",
         
            "children": [
              {
              "firstName": "Brian",

              "lastName": "Halligan (Sample Contact)",
      
              "email": "bh@hubspot.com",
      
              "jobTitle": "HR Manager",
      
              "id": "51"
      
          }
            ]
          },
          {
            "firstName": "Malin",
            "lastName": "Sik",
            "email": "ms@gmail.com",
            "jobTitle": "Vp of Marketing",
            "id": "151",
            "children": [
              {
                "firstName": "B",
                "lastName": "H (Sample Contact)",
                "email": "bh@xyz.com",
                "jobTitle": "HR Manager",
                "id": "51"
              }
            ]
          },{
            "firstName": "Malin",
            "lastName": "Sik",
            "email": "ms@gmail.com",
            "jobTitle": "Vp of Engineering",
            "id": "151",
            "children":[
              {
                "firstName": "B",
                "lastName": "H (Sample Contact)",
                "email": "bh@xyz.com",
                "jobTitle": "HR Manager",
                "id": "51"
              },
              {
                
              }

            ]
          
              

          }
          
          
        ]
      }
    ];

    setOrgChartData(jsonData);
  }, []);

  
  const renderOrgChart = (data) => {
    return (
      <div>
      <Tree lineWidth={"2px"} lineColor={"green"} lineBorderRadius={"10px"}>
      {data.map((node) => (
  <TreeNode key={node.id} label={<div><StyledNode>{node.jobTitle} 
  <br />{node.firstName} {node.lastName}</StyledNode></div>}>
    {node.children && renderOrgChart(node.children)}
  </TreeNode>

))}


      </Tree>
      </div>
    );
  };

  return (
    <div className="org-chart org-chart-container">
      <h1>Organizational Chart</h1>
      {renderOrgChart(orgChartData)}
    </div>
  );
};

export default OrgChartComponents;




