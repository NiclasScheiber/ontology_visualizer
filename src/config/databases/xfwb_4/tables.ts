import { TableConfig } from "../../../Visualizer/types";

import coreWaybillTable from "./tables/Core.Waybill.json";
import distributionBookingShipmentTable from "./tables/Distribution.BookingShipment.json";
import commonLocationSigTable from "./tables/Common.Location_sig.json";
import commonExternalReferenceFFIDTable from "./tables/Common.ExternalReference_FF_ID.json";
import commonExternalReferenceASSOCREFIDTable from "./tables/Common.ExternalReference_ASSOC_REF_ID.json";
import coreShipmentTable from "./tables/Core.Shipment.json";
import serviceBookingTable from "./tables/Service.Booking.json";
import commonLocationAWBORGTable from "./tables/Common.Location_AWB_ORG.json";
import commonLocationAWBDESTable from "./tables/Common.Location_AWB_DES.json";
import commonExternalReferenceASSOCIATEDDOCTable from "./tables/Common.ExternalReference_ASSOCIATED_DOC.json";
import embeddedOtherChargeTable from "./tables/Embedded.OtherCharge.json";
import embeddedWaybillLineItemTable from "./tables/Embedded.WaybillLineItem.json";
import coreInsuranceTable from "./tables/Core.Insurance.json";
import embeddedDimensionsGrossTable from "./tables/Embedded.Dimensions_Gross.json";
import corePieceTable from "./tables/Core.Piece.json";
import distributionBookingRequestTable from "./tables/Distribution.BookingRequest.json";
import embeddedPartySHPTable from "./tables/Embedded.Party_SHP.json";
import embeddedPartyCNETable from "./tables/Embedded.Party_CNE.json";
import embeddedPartyFFWTable from "./tables/Embedded.Party_FFW.json";
import embeddedPartyOTHTable from "./tables/Embedded.Party_OTH.json";
import coreCustomsInformationTable from "./tables/Core.CustomsInformation.json";
import embeddedDimensionsRATETable from "./tables/Embedded.Dimensions_RATE.json";
import embeddedVolumetricWeightTable from "./tables/Embedded.VolumetricWeight.json";
import distributionBookingOptionTable from "./tables/Distribution.BookingOption.json";
import embeddedOtherIdentifierSHP1Table from "./tables/Embedded.OtherIdentifier_SHP_1.json";
import embeddedOtherIdentifierSHP2Table from "./tables/Embedded.OtherIdentifier_SHP_2.json";
import agentCompanySHPTable from "./tables/Agent.Company_SHP.json";
import embeddedOtherIdentifierSHP3Table from "./tables/Embedded.OtherIdentifier_SHP_3.json";
import embeddedOtherIdentifierCNE1Table from "./tables/Embedded.OtherIdentifier_CNE_1.json";
import embeddedOtherIdentifierCNE2Table from "./tables/Embedded.OtherIdentifier_CNE_2.json";
import agentCompanyCNETable from "./tables/Agent.Company_CNE.json";
import embeddedOtherIdentifierCNE3Table from "./tables/Embedded.OtherIdentifier_CNE_3.json";
import embeddedOtherIdentifierFFW1Table from "./tables/Embedded.OtherIdentifier_FFW_1.json";
import embeddedOtherIdentifierFFW2Table from "./tables/Embedded.OtherIdentifier_FFW_2.json";
import agentCompanyFFWTable from "./tables/Agent.Company_FFW.json";
import embeddedOtherIdentifierFFW3Table from "./tables/Embedded.OtherIdentifier_FFW_3.json";
import embeddedOtherIdentifierOTHTable from "./tables/Embedded.OtherIdentifier_OTH.json";
import agentCompanyOTHTable from "./tables/Agent.Company_OTH.json";
import actionLoadingTable from "./tables/Action.Loading.json";
import embeddedCarrierProductTable from "./tables/Embedded.CarrierProduct.json";
import commonLocationSHPTable from "./tables/Common.Location_SHP.json";
import agentPersonSHPTable from "./tables/Agent.Person_SHP.json";
import commonLocationCNETable from "./tables/Common.Location_CNE.json";
import agentPersonCNETable from "./tables/Agent.Person_CNE.json";
import commonLocationFFWTable from "./tables/Common.Location_FFW.json";
import agentPersonFFWTable from "./tables/Agent.Person_FFW.json";
import commonLocationOTHTable from "./tables/Common.Location_OTH.json";
import agentPersonOTHTable from "./tables/Agent.Person_OTH.json";
import activityTransportMovementTable from "./tables/Activity.TransportMovement.json";
import embeddedAddressSHPTable from "./tables/Embedded.Address_SHP.json";
import embeddedContactDetailSHPPHONETable from "./tables/Embedded.ContactDetail_SHP_PHONE.json";
import embeddedContactDetailSHPFAXNUMBERTable from "./tables/Embedded.ContactDetail_SHP_FAX_NUMBER.json";
import embeddedContactDetailSHPMAILTable from "./tables/Embedded.ContactDetail_SHP_MAIL.json";
import embeddedContactDetailSHPTELEXTable from "./tables/Embedded.ContactDetail_SHP_TELEX.json";
import embeddedAddressCNETable from "./tables/Embedded.Address_CNE.json";
import embeddedContactDetailCNEPHONETable from "./tables/Embedded.ContactDetail_CNE_PHONE.json";
import embeddedContactDetailCNEFAXNUMBERTable from "./tables/Embedded.ContactDetail_CNE_FAX_NUMBER.json";
import embeddedContactDetailCNEMAILTable from "./tables/Embedded.ContactDetail_CNE_MAIL.json";
import embeddedContactDetailCNETELEXTable from "./tables/Embedded.ContactDetail_CNE_TELEX.json";
import embeddedAddressFFWTable from "./tables/Embedded.Address_FFW.json";
import embeddedContactDetailFFWPHONETable from "./tables/Embedded.ContactDetail_FFW_PHONE.json";
import embeddedContactDetailFFWFAXNUMBERTable from "./tables/Embedded.ContactDetail_FFW_FAX_NUMBER.json";
import embeddedContactDetailFFWMAILTable from "./tables/Embedded.ContactDetail_FFW_MAIL.json";
import embeddedContactDetailFFWTELEXTable from "./tables/Embedded.ContactDetail_FFW_TELEX.json";
import embeddedAddressOTHTable from "./tables/Embedded.Address_OTH.json";
import embeddedContactDetailOTHPHONETable from "./tables/Embedded.ContactDetail_OTH_PHONE.json";
import embeddedContactDetailOTHFAXNUMBERTable from "./tables/Embedded.ContactDetail_OTH_FAX_NUMBER.json";
import embeddedContactDetailOTHMAILTable from "./tables/Embedded.ContactDetail_OTH_MAIL.json";
import embeddedContactDetailOTHTELEXTable from "./tables/Embedded.ContactDetail_OTH_TELEX.json";
import embeddedMovementTimeSATable from "./tables/Embedded.MovementTime_SA.json";
import commonLocationARRTable from "./tables/Common.Location_ARR.json";
import embeddedMovementTimeSDTable from "./tables/Embedded.MovementTime_SD.json";
import commonLocationDEPTable from "./tables/Common.Location_DEP.json";
import coreTransportMeansTable from "./tables/Core.TransportMeans.json";
import agentCarrierTable from "./tables/Agent.Carrier.json";
import embeddedContactDetailTable from "./tables/Embedded.ContactDetail.json";
import embeddedPartyTable from "./tables/Embedded.Party.json";
import embeddedOtherIdentifierFFWTable from "./tables/Embedded.OtherIdentifier_FFW.json";

const tables: TableConfig[] = [
  coreWaybillTable,
  distributionBookingShipmentTable,
  commonLocationSigTable,
  commonExternalReferenceFFIDTable,
  commonExternalReferenceASSOCREFIDTable,
  coreShipmentTable,
  serviceBookingTable,
  commonLocationAWBORGTable,
  commonLocationAWBDESTable,
  commonExternalReferenceASSOCIATEDDOCTable,
  embeddedOtherChargeTable,
  embeddedWaybillLineItemTable,
  coreInsuranceTable,
  embeddedDimensionsGrossTable,
  corePieceTable,
  distributionBookingRequestTable,
  embeddedPartySHPTable,
  embeddedPartyCNETable,
  embeddedPartyFFWTable,
  embeddedPartyOTHTable,
  coreCustomsInformationTable,
  embeddedDimensionsRATETable,
  embeddedVolumetricWeightTable,
  distributionBookingOptionTable,
  embeddedOtherIdentifierSHP1Table,
  embeddedOtherIdentifierSHP2Table,
  agentCompanySHPTable,
  embeddedOtherIdentifierSHP3Table,
  embeddedOtherIdentifierCNE1Table,
  embeddedOtherIdentifierCNE2Table,
  agentCompanyCNETable,
  embeddedOtherIdentifierCNE3Table,
  embeddedOtherIdentifierFFW1Table,
  embeddedOtherIdentifierFFW2Table,
  agentCompanyFFWTable,
  embeddedOtherIdentifierFFW3Table,
  embeddedOtherIdentifierOTHTable,
  agentCompanyOTHTable,
  actionLoadingTable,
  embeddedCarrierProductTable,
  commonLocationSHPTable,
  agentPersonSHPTable,
  commonLocationCNETable,
  agentPersonCNETable,
  commonLocationFFWTable,
  agentPersonFFWTable,
  commonLocationOTHTable,
  agentPersonOTHTable,
  activityTransportMovementTable,
  embeddedAddressSHPTable,
  embeddedContactDetailSHPPHONETable,
  embeddedContactDetailSHPFAXNUMBERTable,
  embeddedContactDetailSHPMAILTable,
  embeddedContactDetailSHPTELEXTable,
  embeddedAddressCNETable,
  embeddedContactDetailCNEPHONETable,
  embeddedContactDetailCNEFAXNUMBERTable,
  embeddedContactDetailCNEMAILTable,
  embeddedContactDetailCNETELEXTable,
  embeddedAddressFFWTable,
  embeddedContactDetailFFWPHONETable,
  embeddedContactDetailFFWFAXNUMBERTable,
  embeddedContactDetailFFWMAILTable,
  embeddedContactDetailFFWTELEXTable,
  embeddedAddressOTHTable,
  embeddedContactDetailOTHPHONETable,
  embeddedContactDetailOTHFAXNUMBERTable,
  embeddedContactDetailOTHMAILTable,
  embeddedContactDetailOTHTELEXTable,
  embeddedMovementTimeSATable,
  commonLocationARRTable,
  embeddedMovementTimeSDTable,
  commonLocationDEPTable,
  coreTransportMeansTable,
  agentCarrierTable,
  embeddedContactDetailTable,
  embeddedPartyTable,
  embeddedOtherIdentifierFFWTable
];

export default tables;
