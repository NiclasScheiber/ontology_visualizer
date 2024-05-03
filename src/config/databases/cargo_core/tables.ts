import { TableConfig } from "../../../Visualizer/types";

import embeddedActivitySequenceTable from "./tables/Embedded.ActivitySequence.json";
import embeddedAddressTable from "./tables/Embedded.Address.json";
import embeddedCodeListElementTable from "./tables/Embedded.CodeListElement.json";
import abstractActorTable from "./tables/Abstract.Actor.json";
import embeddedValueTable from "./tables/Embedded.Value.json";
import corePieceTable from "./tables/Core.Piece.json";
import commonLocationTable from "./tables/Common.Location.json";
import abstractOrganizationTable from "./tables/Abstract.Organization.json";
import serviceBookingTable from "./tables/Service.Booking.json";
import commonPersonTable from "./tables/Common.Person.json";
import actionComposingTable from "./tables/Action.Composing.json";
import embeddedContactDetailTable from "./tables/Embedded.ContactDetail.json";
import coreItemTable from "./tables/Core.Item.json";
import coreProductTable from "./tables/Core.Product.json";
import embeddedCurrencyValueTable from "./tables/Embedded.CurrencyValue.json";
import coreWaybillTable from "./tables/Core.Waybill.json";
import embeddedDimensionsTable from "./tables/Embedded.Dimensions.json";
import commonExternalReferenceTable from "./tables/Common.ExternalReference.json";
import eventLogisticsEventTable from "./tables/Event.LogisticsEvent.json";
import activityUnitCompositionTable from "./tables/Activity.UnitComposition.json";
import coreShipmentTable from "./tables/Core.Shipment.json";
import embeddedPartyTable from "./tables/Embedded.Party.json";
import actionLoadingTable from "./tables/Action.Loading.json";
import coreTransportMeansTable from "./tables/Core.TransportMeans.json";
import activityTransportMovementTable from "./tables/Activity.TransportMovement.json";
import embeddedCharacteristicTable from "./tables/Embedded.Characteristic.json";
import embeddedOtherIdentifierTable from "./tables/Embedded.OtherIdentifier.json";
import embeddedWaybillLineItemTable from "./tables/Embedded.WaybillLineItem.json";
import commonNonHumanActorTable from "./tables/Common.NonHumanActor.json";
import commonPublicAuthorityTable from "./tables/Common.PublicAuthority.json";
import coreULDTable from "./tables/Core.ULD.json";

const tables: TableConfig[] = [
  embeddedActivitySequenceTable,
  embeddedAddressTable,
  embeddedCodeListElementTable,
  abstractActorTable,
  embeddedValueTable,
  corePieceTable,
  commonLocationTable,
  abstractOrganizationTable,
  serviceBookingTable,
  commonPersonTable,
  actionComposingTable,
  embeddedContactDetailTable,
  coreItemTable,
  coreProductTable,
  embeddedCurrencyValueTable,
  coreWaybillTable,
  embeddedDimensionsTable,
  commonExternalReferenceTable,
  eventLogisticsEventTable,
  activityUnitCompositionTable,
  coreShipmentTable,
  embeddedPartyTable,
  actionLoadingTable,
  coreTransportMeansTable,
  activityTransportMovementTable,
  embeddedCharacteristicTable,
  embeddedOtherIdentifierTable,
  embeddedWaybillLineItemTable,
  commonNonHumanActorTable,
  commonPublicAuthorityTable,
  coreULDTable
];

export default tables;
