import { CloseIcon } from "../components";
import { PopupProps } from "../types";

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
          <p>
          <div className="flex">
            <div className="tag embedded">Embedded</div>
            <div className="tagDescription"> Add description here</div>
          </div>
          <div className="flex">
            <div className="tag core">Core</div>
            <div className="tagDescription"> Add description here</div>
          </div>
          <div className="flex">
            <div className="tag service">Abstract</div>
            <div className="tagDescription"> Add description here</div>
          </div>
          <div className="flex">
            <div className="tag common">Common</div>
            <div className="tagDescription"> Add description here</div>
          </div>
          <div className="flex">
            <div className="tag abstract">Abstract</div>
            <div className="tagDescription"> Add description here</div>
          </div>
          <div className="flex">
            <div className="tag activity">Activity</div>
            <div className="tagDescription"> Add description here</div>
          </div>
          <div className="flex">
            <div className="tag event">Event</div>
            <div className="tagDescription"> Add description here</div>
          </div>
          <div className="flex">
            <div className="tag billing">Billing & Settlement</div>
            <div className="tagDescription"> Add description here</div>
          </div>
          <div className="flex">
            <div className="tag distribution">Distribution</div>
            <div className="tagDescription"> Add description here</div>
          </div>
          <div className="flex">
            <div className="tag agent">Agent</div>
            <div className="tagDescription"> Add description here</div>
          </div>
          <div className="flex">
            <div className="tag dangerGoods">Dangerous Goods</div>
            <div className="tagDescription"> Add description here</div>
          </div>
          <div className="flex">
            <div className="tag animals">Live Animals</div>
            <div className="tagDescription"> Add description here</div>
          </div>
          </p>
          <h2>Shortcuts</h2>

          <p>
            <strong>SHIFT + hover</strong> over a table node or a column name to see the description.
          </p>

          <p className="mb-32">
            <strong>Hover over a table node</strong> to highlight all incoming and outgoing edges.
          </p>
        </div>
      </div>
    </div>
  );
};
