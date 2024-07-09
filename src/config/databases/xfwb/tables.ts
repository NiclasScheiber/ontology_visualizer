import { TableConfig } from "../../../Visualizer/types";

import embeddedAddressTable from "./tables/Embedded.Address.json";
import serviceBookingTable from "./tables/Service.Booking.json";
import distributionBookingOptionTable from "./tables/Distribution.BookingOption.json";
import distributionBookingRequestTable from "./tables/Distribution.BookingRequest.json";
import distributionBookingShipmentTable from "./tables/Distribution.BookingShipment.json";
import agentCarrierTable from "./tables/Agent.Carrier.json";
import embeddedCarrierProductTable from "./tables/Embedded.CarrierProduct.json";
import embeddedCodeListElementTable from "./tables/Embedded.CodeListElement.json";
import agentCompanyTable from "./tables/Agent.Company.json";
import embeddedContactDetailTable from "./tables/Embedded.ContactDetail.json";
import coreCustomsInformationTable from "./tables/Core.CustomsInformation.json";
import embeddedDimensionsTable from "./tables/Embedded.Dimensions.json";
import commonExternalReferenceTable from "./tables/Common.ExternalReference.json";
import coreInsuranceTable from "./tables/Core.Insurance.json";
import actionLoadingTable from "./tables/Action.Loading.json";
import commonLocationTable from "./tables/Common.Location.json";
import embeddedMovementTimeTable from "./tables/Embedded.MovementTime.json";
import embeddedOtherChargeTable from "./tables/Embedded.OtherCharge.json";
import embeddedOtherIdentifierTable from "./tables/Embedded.OtherIdentifier.json";
import embeddedPartyTable from "./tables/Embedded.Party.json";
import agentPersonTable from "./tables/Agent.Person.json";
import corePieceTable from "./tables/Core.Piece.json";
import coreShipmentTable from "./tables/Core.Shipment.json";
import coreTransportMeansTable from "./tables/Core.TransportMeans.json";
import activityTransportMovementTable from "./tables/Activity.TransportMovement.json";
import embeddedVolumetricWeightTable from "./tables/Embedded.VolumetricWeight.json";
import coreWaybillTable from "./tables/Core.Waybill.json";
import embeddedWaybillLineItemTable from "./tables/Embedded.WaybillLineItem.json";

const tables: TableConfig[] = [
  embeddedAddressTable,
  serviceBookingTable,
  distributionBookingOptionTable,
  distributionBookingRequestTable,
  distributionBookingShipmentTable,
  agentCarrierTable,
  embeddedCarrierProductTable,
  embeddedCodeListElementTable,
  agentCompanyTable,
  embeddedContactDetailTable,
  coreCustomsInformationTable,
  embeddedDimensionsTable,
  commonExternalReferenceTable,
  coreInsuranceTable,
  actionLoadingTable,
  commonLocationTable,
  embeddedMovementTimeTable,
  embeddedOtherChargeTable,
  embeddedOtherIdentifierTable,
  embeddedPartyTable,
  agentPersonTable,
  corePieceTable,
  coreShipmentTable,
  coreTransportMeansTable,
  activityTransportMovementTable,
  embeddedVolumetricWeightTable,
  coreWaybillTable,
  embeddedWaybillLineItemTable
];

export default tables;
