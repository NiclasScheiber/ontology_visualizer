import { TableConfig } from "../../../Visualizer/types";

import embeddedActivitySequenceTable from "./tables/Embedded.ActivitySequence.json";
import abstractActorTable from "./tables/Abstract.Actor.json";
import embeddedAddressTable from "./tables/Embedded.Address.json";
import embeddedAdjustmentsTable from "./tables/Embedded.Adjustments.json";
import commonAnswerTable from "./tables/Common.Answer.json";
import billingSettlementBillingDetailsTable from "./tables/BillingSettlement.BillingDetails.json";
import serviceBookingTable from "./tables/Service.Booking.json";
import distributionBookingOptionTable from "./tables/Distribution.BookingOption.json";
import distributionBookingOptionRequestTable from "./tables/Distribution.BookingOptionRequest.json";
import embeddedBookingPreferencesTable from "./tables/Embedded.BookingPreferences.json";
import distributionBookingRequestTable from "./tables/Distribution.BookingRequest.json";
import distributionBookingShipmentTable from "./tables/Distribution.BookingShipment.json";
import embeddedBookingTimesTable from "./tables/Embedded.BookingTimes.json";
import coreCO2EmissionsTable from "./tables/Core.CO2Emissions.json";
import commonCarrierTable from "./tables/Common.Carrier.json";
import embeddedCarrierProductTable from "./tables/Embedded.CarrierProduct.json";
import embeddedCharacteristicTable from "./tables/Embedded.Characteristic.json";
import actionCheckTable from "./tables/Action.Check.json";
import commonCheckTemplateTable from "./tables/Common.CheckTemplate.json";
import commonCheckTotalResultTable from "./tables/Common.CheckTotalResult.json";
import embeddedCodeListElementTable from "./tables/Embedded.CodeListElement.json";
import commonCompanyTable from "./tables/Common.Company.json";
import actionComposingTable from "./tables/Action.Composing.json";
import embeddedContactDetailTable from "./tables/Embedded.ContactDetail.json";
import embeddedCurrencyValueTable from "./tables/Embedded.CurrencyValue.json";
import coreCustomsInformationTable from "./tables/Core.CustomsInformation.json";
import embeddedDimensionsTable from "./tables/Embedded.Dimensions.json";
import commonExternalReferenceTable from "./tables/Common.ExternalReference.json";
import embeddedGeolocationTable from "./tables/Embedded.Geolocation.json";
import coreInsuranceTable from "./tables/Core.Insurance.json";
import commonIotDeviceTable from "./tables/Common.IotDevice.json";
import coreItemTable from "./tables/Core.Item.json";
import actionLoadingTable from "./tables/Action.Loading.json";
import commonLoadingMaterialTable from "./tables/Common.LoadingMaterial.json";
import coreLoadingUnitTable from "./tables/Core.LoadingUnit.json";
import commonLocationTable from "./tables/Common.Location.json";
import abstractLogisticsActionTable from "./tables/Abstract.LogisticsAction.json";
import abstractLogisticsActivityTable from "./tables/Abstract.LogisticsActivity.json";
import abstractLogisticsAgentTable from "./tables/Abstract.LogisticsAgent.json";
import eventLogisticsEventTable from "./tables/Event.LogisticsEvent.json";
import abstractLogisticsObjectTable from "./tables/Abstract.LogisticsObject.json";
import abstractLogisticsServiceTable from "./tables/Abstract.LogisticsService.json";
import embeddedLoosePieceTable from "./tables/Embedded.LoosePiece.json";
import embeddedMeasurementTable from "./tables/Embedded.Measurement.json";
import embeddedMovementTimeTable from "./tables/Embedded.MovementTime.json";
import commonNonHumanActorTable from "./tables/Common.NonHumanActor.json";
import abstractOrganizationTable from "./tables/Abstract.Organization.json";
import embeddedOtherChargeTable from "./tables/Embedded.OtherCharge.json";
import embeddedOtherIdentifierTable from "./tables/Embedded.OtherIdentifier.json";
import corePackagingTypeTable from "./tables/Core.PackagingType.json";
import embeddedPartyTable from "./tables/Embedded.Party.json";
import commonPersonTable from "./tables/Common.Person.json";
import abstractPhysicalLogisticsObjectTable from "./tables/Abstract.PhysicalLogisticsObject.json";
import corePieceTable from "./tables/Core.Piece.json";
import embeddedPieceGroupTable from "./tables/Embedded.PieceGroup.json";
import distributionPriceTable from "./tables/Distribution.Price.json";
import coreProductTable from "./tables/Core.Product.json";
import commonPublicAuthorityTable from "./tables/Common.PublicAuthority.json";
import commonQuestionTable from "./tables/Common.Question.json";
import embeddedRangesTable from "./tables/Embedded.Ranges.json";
import distributionRatingsTable from "./tables/Distribution.Ratings.json";
import embeddedRegulatedEntityTable from "./tables/Embedded.RegulatedEntity.json";
import coreSecurityDeclarationTable from "./tables/Core.SecurityDeclaration.json";
import commonSensorTable from "./tables/Common.Sensor.json";
import coreShipmentTable from "./tables/Core.Shipment.json";
import embeddedStationRemarksTable from "./tables/Embedded.StationRemarks.json";
import activityStorageTable from "./tables/Activity.Storage.json";
import actionStoringTable from "./tables/Action.Storing.json";
import embeddedTemperatureInstructionsTable from "./tables/Embedded.TemperatureInstructions.json";
import distributionTransportLegsTable from "./tables/Distribution.TransportLegs.json";
import coreTransportMeansTable from "./tables/Core.TransportMeans.json";
import activityTransportMovementTable from "./tables/Activity.TransportMovement.json";
import coreULDTable from "./tables/Core.ULD.json";
import embeddedULDBasicPieceTable from "./tables/Embedded.ULDBasicPiece.json";
import embeddedULDSpecificPieceTable from "./tables/Embedded.ULDSpecificPiece.json";
import activityUnitCompositionTable from "./tables/Activity.UnitComposition.json";
import embeddedUnitsPreferenceTable from "./tables/Embedded.UnitsPreference.json";
import embeddedValueTable from "./tables/Embedded.Value.json";
import embeddedVolumePieceGroupTable from "./tables/Embedded.VolumePieceGroup.json";
import embeddedVolumetricWeightTable from "./tables/Embedded.VolumetricWeight.json";
import coreWaybillTable from "./tables/Core.Waybill.json";
import embeddedWaybillLineItemTable from "./tables/Embedded.WaybillLineItem.json";

const tables: TableConfig[] = [
  embeddedActivitySequenceTable,
  abstractActorTable,
  embeddedAddressTable,
  embeddedAdjustmentsTable,
  commonAnswerTable,
  billingSettlementBillingDetailsTable,
  serviceBookingTable,
  distributionBookingOptionTable,
  distributionBookingOptionRequestTable,
  embeddedBookingPreferencesTable,
  distributionBookingRequestTable,
  distributionBookingShipmentTable,
  embeddedBookingTimesTable,
  coreCO2EmissionsTable,
  commonCarrierTable,
  embeddedCarrierProductTable,
  embeddedCharacteristicTable,
  actionCheckTable,
  commonCheckTemplateTable,
  commonCheckTotalResultTable,
  embeddedCodeListElementTable,
  commonCompanyTable,
  actionComposingTable,
  embeddedContactDetailTable,
  embeddedCurrencyValueTable,
  coreCustomsInformationTable,
  embeddedDimensionsTable,
  commonExternalReferenceTable,
  embeddedGeolocationTable,
  coreInsuranceTable,
  commonIotDeviceTable,
  coreItemTable,
  actionLoadingTable,
  commonLoadingMaterialTable,
  coreLoadingUnitTable,
  commonLocationTable,
  abstractLogisticsActionTable,
  abstractLogisticsActivityTable,
  abstractLogisticsAgentTable,
  eventLogisticsEventTable,
  abstractLogisticsObjectTable,
  abstractLogisticsServiceTable,
  embeddedLoosePieceTable,
  embeddedMeasurementTable,
  embeddedMovementTimeTable,
  commonNonHumanActorTable,
  abstractOrganizationTable,
  embeddedOtherChargeTable,
  embeddedOtherIdentifierTable,
  corePackagingTypeTable,
  embeddedPartyTable,
  commonPersonTable,
  abstractPhysicalLogisticsObjectTable,
  corePieceTable,
  embeddedPieceGroupTable,
  distributionPriceTable,
  coreProductTable,
  commonPublicAuthorityTable,
  commonQuestionTable,
  embeddedRangesTable,
  distributionRatingsTable,
  embeddedRegulatedEntityTable,
  coreSecurityDeclarationTable,
  commonSensorTable,
  coreShipmentTable,
  embeddedStationRemarksTable,
  activityStorageTable,
  actionStoringTable,
  embeddedTemperatureInstructionsTable,
  distributionTransportLegsTable,
  coreTransportMeansTable,
  activityTransportMovementTable,
  coreULDTable,
  embeddedULDBasicPieceTable,
  embeddedULDSpecificPieceTable,
  activityUnitCompositionTable,
  embeddedUnitsPreferenceTable,
  embeddedValueTable,
  embeddedVolumePieceGroupTable,
  embeddedVolumetricWeightTable,
  coreWaybillTable,
  embeddedWaybillLineItemTable
];

export default tables;
