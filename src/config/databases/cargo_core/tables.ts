import { TableConfig } from "../../../Visualizer/types";

import embeddedActivitySequenceTable from "./tables/Embedded.ActivitySequence.json";
import serviceBookingTable from "./tables/Service.Booking.json";
import embeddedCharacteristicTable from "./tables/Embedded.Characteristic.json";
import actionComposingTable from "./tables/Action.Composing.json";
import coreItemTable from "./tables/Core.Item.json";
import actionLoadingTable from "./tables/Action.Loading.json";
import eventLogisticsEventTable from "./tables/Event.LogisticsEvent.json";
import embeddedMovementTimeTable from "./tables/Embedded.MovementTime.json";
import embeddedOtherChargeTable from "./tables/Embedded.OtherCharge.json";
import corePieceTable from "./tables/Core.Piece.json";
import coreProductTable from "./tables/Core.Product.json";
import coreShipmentTable from "./tables/Core.Shipment.json";
import coreTransportMeansTable from "./tables/Core.TransportMeans.json";
import activityTransportMovementTable from "./tables/Activity.TransportMovement.json";
import coreULDTable from "./tables/Core.ULD.json";
import activityUnitCompositionTable from "./tables/Activity.UnitComposition.json";
import coreWaybillTable from "./tables/Core.Waybill.json";
import embeddedWaybillLineItemTable from "./tables/Embedded.WaybillLineItem.json";

const tables: TableConfig[] = [
  embeddedActivitySequenceTable,
  serviceBookingTable,
  embeddedCharacteristicTable,
  actionComposingTable,
  coreItemTable,
  actionLoadingTable,
  eventLogisticsEventTable,
  embeddedMovementTimeTable,
  embeddedOtherChargeTable,
  corePieceTable,
  coreProductTable,
  coreShipmentTable,
  coreTransportMeansTable,
  activityTransportMovementTable,
  coreULDTable,
  activityUnitCompositionTable,
  coreWaybillTable,
  embeddedWaybillLineItemTable
];

export default tables;
