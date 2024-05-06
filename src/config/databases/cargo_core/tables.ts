import { TableConfig } from "../../../Visualizer/types";

import embeddedActivitySequenceTable from "./tables/Embedded.ActivitySequence.json";
import abstractActorTable from "./tables/Abstract.Actor.json";
import embeddedAddressTable from "./tables/Embedded.Address.json";
import serviceBookingTable from "./tables/Service.Booking.json";
import embeddedCharacteristicTable from "./tables/Embedded.Characteristic.json";
import embeddedCodeListElementTable from "./tables/Embedded.CodeListElement.json";
import actionComposingTable from "./tables/Action.Composing.json";
import embeddedContactDetailTable from "./tables/Embedded.ContactDetail.json";
import embeddedCurrencyValueTable from "./tables/Embedded.CurrencyValue.json";
import embeddedDimensionsTable from "./tables/Embedded.Dimensions.json";
import commonExternalReferenceTable from "./tables/Common.ExternalReference.json";
import coreItemTable from "./tables/Core.Item.json";
import actionLoadingTable from "./tables/Action.Loading.json";
import commonLocationTable from "./tables/Common.Location.json";
import eventLogisticsEventTable from "./tables/Event.LogisticsEvent.json";
import abstractOrganizationTable from "./tables/Abstract.Organization.json";
import embeddedOtherIdentifierTable from "./tables/Embedded.OtherIdentifier.json";
import embeddedPartyTable from "./tables/Embedded.Party.json";
import commonPersonTable from "./tables/Common.Person.json";
import corePieceTable from "./tables/Core.Piece.json";
import coreProductTable from "./tables/Core.Product.json";
import coreShipmentTable from "./tables/Core.Shipment.json";
import coreTransportMeansTable from "./tables/Core.TransportMeans.json";
import activityTransportMovementTable from "./tables/Activity.TransportMovement.json";
import coreULDTable from "./tables/Core.ULD.json";
import activityUnitCompositionTable from "./tables/Activity.UnitComposition.json";
import embeddedValueTable from "./tables/Embedded.Value.json";
import coreWaybillTable from "./tables/Core.Waybill.json";
import embeddedWaybillLineItemTable from "./tables/Embedded.WaybillLineItem.json";

const tables: TableConfig[] = [
  embeddedActivitySequenceTable,
  abstractActorTable,
  embeddedAddressTable,
  serviceBookingTable,
  embeddedCharacteristicTable,
  embeddedCodeListElementTable,
  actionComposingTable,
  embeddedContactDetailTable,
  embeddedCurrencyValueTable,
  embeddedDimensionsTable,
  commonExternalReferenceTable,
  coreItemTable,
  actionLoadingTable,
  commonLocationTable,
  eventLogisticsEventTable,
  abstractOrganizationTable,
  embeddedOtherIdentifierTable,
  embeddedPartyTable,
  commonPersonTable,
  corePieceTable,
  coreProductTable,
  coreShipmentTable,
  coreTransportMeansTable,
  activityTransportMovementTable,
  coreULDTable,
  activityUnitCompositionTable,
  embeddedValueTable,
  coreWaybillTable,
  embeddedWaybillLineItemTable
];

export default tables;
