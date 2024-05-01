import { useState, FC, useEffect } from "react";
import { Handle, Position, NodeProps, useReactFlow } from "reactflow";
import { KeyIcon, ArrayIcon } from "../components";
import { markdown } from "../helpers";

import "@reactflow/node-resizer/dist/style.css";

export const TableNode: FC<NodeProps> = ({ data }) => {
  const [selectedColumn, setSelectedColumn] = useState("");
  const [showDescription, setshowDescription] = useState(false);
  const [descriptionOnHoverActive, setDescriptionOnHoverActive] = useState(false);
  const reactFlowInstance = useReactFlow();

  useEffect(() => {
    document.addEventListener("keydown", (e: KeyboardEvent) => {
      if(e.code === "ShiftLeft" || e.code === "ShiftRight") {
        setDescriptionOnHoverActive(true)
      }
    }, false);

    document.addEventListener("keyup", (e: KeyboardEvent) => {
      if(e.code === "ShiftLeft" || e.code === "ShiftRight") {
        setDescriptionOnHoverActive(false)
      }
    }, false);
  }, []);

  return (
    <div className="table">
      <div
        style={{ backgroundColor: data.schemaColor }}
        className="table__name"
        onMouseEnter={() => {
          if(descriptionOnHoverActive) {
            setshowDescription(true)
          }
        }}
        onMouseLeave={() => setshowDescription(false)}>
        {data.schema ? `${data.schema}.${data.name}` : data.name}

        <div
          className={showDescription ? "table__description table__description--active" : "table__description"}
          dangerouslySetInnerHTML={{__html: markdown(data.description || "No description.") }} />
            {"target" && <Handle
              type="target"
              position={Position.Right}
              id={`${data.schema ? `${data.schema}.${data.name}` : `public.${data.name}`}-table-right`}
              className="right-handle source-handle"
            />}
            {"target" && <Handle
              type="target"
              position={Position.Left}
              id={`${data.schema ? `${data.schema}.${data.name}` : `public.${data.name}`}-table-left`}
              className="left-handle target-handle"
            />}
      </div>

      <div className="table__columns">
        {data.columns.map((column: any, index: any) => (
          <div
            key={index}
            className={selectedColumn === column.name ? "column-name column-name--selected" : "column-name"}
            onMouseEnter={() => {
              if(descriptionOnHoverActive) {
                setSelectedColumn(column.name)
              }
            }}
            onMouseLeave={() => setSelectedColumn("")}
            onClick={() => {              
              window.requestAnimationFrame(() => {
                reactFlowInstance.fitView({
                  duration: 500,
                  nodes: [{id: 'Generic.booking'}]
                });
              })
            }}
            >
            {column.handleType && <Handle
              type={column.handleType}
              position={Position.Right}
              id={`${column.name}-right`}
              className={column.handleType === "source" ? "right-handle source-handle" : "right-handle target-handle"}
            />}
            {column.handleType && <Handle
              type={column.handleType}
              position={Position.Left}
              id={`${column.name}-left`}
              className={column.handleType === "source" ? "left-handle source-handle" : "left-handle target-handle"}
            />}

            <div className="column-name__inner">
              <div className="column-name__name">
                {column.key && <KeyIcon />}
                {column.name}
                {column.array && <ArrayIcon />}
              </div>
              <div className="column-name__type">
                {column.type}
              </div>

              <div
                className="column-name__description"
                dangerouslySetInnerHTML={{__html: markdown(column.description || "No description.") }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
