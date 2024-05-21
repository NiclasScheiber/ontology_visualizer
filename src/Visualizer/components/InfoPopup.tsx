import { CloseIcon } from "../components";
import { PopupProps } from "../types";
import { markdown } from "../helpers";

export function InfoPopup(props: PopupProps) {
  return (
    <div
      className="info-popup">
      <div className="info-popup__inner">
        <CloseIcon
          className="info-popup__close-icon"
          onClick={() => { props.onClose() }} />

        <h1
          className="info-popup__headline">
          ONE Record Data Model Visualizer
        </h1>

        <div className="info-popup__body">
          <h2>Legend</h2>
          <p dangerouslySetInnerHTML={{__html: markdown("| Month    | Savings || -------- | ------- || January  | $250    || February | $80     || March    | $420    |") }} />
          <h2>Shortcuts</h2>

          <p>
            <strong>SHIFT + hover</strong> over a table node or a column name to see the description.
          </p>

          <p className="mb-32">
            <strong>Hover over a table node</strong> to highlight all incoming and outgoing edges.
          </p>

          <h2>Legend</h2>
          <table className="info-popup__table">
            <tr>
              <th>Scope colors</th>
            </tr>
            <tr>
              <td style={{ backgroundColor: "#D0D0D0" }}>Embedded</td>
            </tr>
            <tr>
              <td style={{ backgroundColor: "#BCCEF5" }}>Core</td>
            </tr>
            <tr>
              <td style={{ backgroundColor: "#F8D8C3" }}>Abstract</td>
            </tr>
            <tr>
              <td style={{ backgroundColor: "#FBE187" }}>Service</td>
            </tr>
            <tr>
              <td style={{ backgroundColor: "#DCD9F8" }}>Common</td>
            </tr>
            <tr>
              <td style={{ backgroundColor: "#A9E6E3" }}>Activity</td>
            </tr>
            <tr>
              <td style={{ backgroundColor: "#C19694" }}>Event</td>
            </tr>
            <tr>
              <td style={{ backgroundColor: "#A2EDCD" }}>Action</td>
            </tr>
            <tr>
              <td style={{ backgroundColor: "#C5D084" }}>Billing & Settlement</td>
            </tr>
            <tr>
              <td style={{ backgroundColor: "#78A471" }}>Distribution</td>
            </tr>
            <tr>
              <td style={{ backgroundColor: "#E6BEDD" }}>Agent</td>
            </tr>
            <tr>
              <td style={{ backgroundColor: "#FFA8B8" }}>Dangerous Goods</td>
            </tr>
            <tr>
              <td style={{ backgroundColor: "#D2C897" }}>Live Animals</td>
            </tr>
        </table>
          
        </div>
      </div>
    </div>
  );
};
