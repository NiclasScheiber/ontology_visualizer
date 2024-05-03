import { TableConfig } from "../../../Visualizer/types";

import abstractLogisticsActivityTable from "./tables/Abstract.LogisticsActivity.json";
import embeddedActivitySequenceTable from "./tables/Embedded.ActivitySequence.json";
import embeddedAddressTable from "./tables/Embedded.Address.json";
import embeddedCodeListElementTable from "./tables/Embedded.CodeListElement.json";
import embeddedAdjustmentsTable from "./tables/Embedded.Adjustments.json";
import coreAnswerTable from "./tables/Core.Answer.json";
import abstractActorTable from "./tables/Abstract.Actor.json";
import embeddedValueTable from "./tables/Embedded.Value.json";
import corePieceTable from "./tables/Core.Piece.json";
import commonLocationTable from "./tables/Common.Location.json";
import liveAnimalsEpermitConsignmentTable from "./tables/LiveAnimals.EpermitConsignment.json";
import abstractOrganizationTable from "./tables/Abstract.Organization.json";
import coreIotDeviceTable from "./tables/Core.IotDevice.json";
import abstractPhysicalLogisticsObjectTable from "./tables/Abstract.PhysicalLogisticsObject.json";
import billingSettlementBillingDetailsTable from "./tables/BillingSettlement.BillingDetails.json";
import distributionBookingTable from "./tables/Distribution.Booking.json";
import distributionBookingOptionTable from "./tables/Distribution.BookingOption.json";
import embeddedBookingPreferencesTable from "./tables/Embedded.BookingPreferences.json";
import distributionBookingRequestTable from "./tables/Distribution.BookingRequest.json";
import distributionBookingShipmentTable from "./tables/Distribution.BookingShipment.json";
import embeddedBookingTimesTable from "./tables/Embedded.BookingTimes.json";
import embeddedLogisticsObjectTable from "./tables/Embedded.LogisticsObject.json";
import commonCarrierTable from "./tables/Common.Carrier.json";
import embeddedCarrierProductTable from "./tables/Embedded.CarrierProduct.json";
import commonPersonTable from "./tables/Common.Person.json";
import coreCheckTable from "./tables/Core.Check.json";
import coreCheckTemplateTable from "./tables/Core.CheckTemplate.json";
import coreLoadingMaterialTable from "./tables/Core.LoadingMaterial.json";
import coreComposingTable from "./tables/Core.Composing.json";
import coreSensorTable from "./tables/Core.Sensor.json";
import liveAnimalsPieceLiveAnimalsTable from "./tables/LiveAnimals.PieceLiveAnimals.json";
import embeddedContactDetailTable from "./tables/Embedded.ContactDetail.json";
import coreItemTable from "./tables/Core.Item.json";
import dGDgProductRadioactiveTable from "./tables/DG.DgProductRadioactive.json";
import coreProductTable from "./tables/Core.Product.json";
import coreCustomsInformationTable from "./tables/Core.CustomsInformation.json";
import embeddedCurrencyValueTable from "./tables/Embedded.CurrencyValue.json";
import coreWaybillTable from "./tables/Core.Waybill.json";
import dGDgDeclarationTable from "./tables/DG.DgDeclaration.json";
import embeddedDimensionsTable from "./tables/Embedded.Dimensions.json";
import coreExternalReferenceTable from "./tables/Core.ExternalReference.json";
import liveAnimalsLiveAnimalsEpermitTable from "./tables/LiveAnimals.LiveAnimalsEpermit.json";
import embeddedLogisticsEventTable from "./tables/Embedded.LogisticsEvent.json";
import distributionBookingOptionRequestTable from "./tables/Distribution.BookingOptionRequest.json";
import distributionPriceTable from "./tables/Distribution.Price.json";
import dGProductDgTable from "./tables/DG.ProductDg.json";
import embeddedGeolocationTable from "./tables/Embedded.Geolocation.json";
import coreUnitCompositionTable from "./tables/Core.UnitComposition.json";
import coreInsuranceTable from "./tables/Core.Insurance.json";
import coreShipmentTable from "./tables/Core.Shipment.json";
import abstractLogisticsActionTable from "./tables/Abstract.LogisticsAction.json";
import embeddedPartyTable from "./tables/Embedded.Party.json";
import dGDgRadioactiveIsotopeTable from "./tables/DG.DgRadioactiveIsotope.json";
import coreLoadingUnitTable from "./tables/Core.LoadingUnit.json";
import coreLoadingTable from "./tables/Core.Loading.json";
import embeddedMeasurementTable from "./tables/Embedded.Measurement.json";
import embeddedMovementTimeTable from "./tables/Embedded.MovementTime.json";
import coreTransportMeansTable from "./tables/Core.TransportMeans.json";
import coreTransportMovementTable from "./tables/Core.TransportMovement.json";
import commonCompanyTable from "./tables/Common.Company.json";
import embeddedCharacteristicTable from "./tables/Embedded.Characteristic.json";
import embeddedOtherChargeTable from "./tables/Embedded.OtherCharge.json";
import embeddedOtherIdentifierTable from "./tables/Embedded.OtherIdentifier.json";
import embeddedRegulatedEntityTable from "./tables/Embedded.RegulatedEntity.json";
import corePackagingTypeTable from "./tables/Core.PackagingType.json";
import abstractLogisticsAgentTable from "./tables/Abstract.LogisticsAgent.json";
import embeddedPieceGroupTable from "./tables/Embedded.PieceGroup.json";
import coreQuestionTable from "./tables/Core.Question.json";
import embeddedRangesTable from "./tables/Embedded.Ranges.json";
import distributionRatingsTable from "./tables/Distribution.Ratings.json";
import coreSecurityDeclarationTable from "./tables/Core.SecurityDeclaration.json";
import abstractLogisticsServiceTable from "./tables/Abstract.LogisticsService.json";
import liveAnimalsEpermitSignatureTable from "./tables/LiveAnimals.EpermitSignature.json";
import embeddedStationRemarksTable from "./tables/Embedded.StationRemarks.json";
import coreStoringTable from "./tables/Core.Storing.json";
import embeddedTemperatureInstructionsTable from "./tables/Embedded.TemperatureInstructions.json";
import embeddedVolumetricWeightTable from "./tables/Embedded.VolumetricWeight.json";
import distributionTransportLegsTable from "./tables/Distribution.TransportLegs.json";
import embeddedUnitsPreferenceTable from "./tables/Embedded.UnitsPreference.json";
import embeddedWaybillLineItemTable from "./tables/Embedded.WaybillLineItem.json";
import dGPieceDgTable from "./tables/DG.PieceDg.json";
import dGItemDgTable from "./tables/DG.ItemDg.json";
import embeddedLoosePieceTable from "./tables/Embedded.LoosePiece.json";
import commonNonHumanActorTable from "./tables/Common.NonHumanActor.json";
import commonPublicAuthorityTable from "./tables/Common.PublicAuthority.json";
import coreStorageTable from "./tables/Core.Storage.json";
import coreULDTable from "./tables/Core.ULD.json";
import embeddedULDBasicPieceTable from "./tables/Embedded.ULDBasicPiece.json";
import embeddedULDSpecificPieceTable from "./tables/Embedded.ULDSpecificPiece.json";
import embeddedVolumePieceGroupTable from "./tables/Embedded.VolumePieceGroup.json";

const tables: TableConfig[] = [
  abstractLogisticsActivityTable,
  embeddedActivitySequenceTable,
  embeddedAddressTable,
  embeddedCodeListElementTable,
  embeddedAdjustmentsTable,
  coreAnswerTable,
  abstractActorTable,
  embeddedValueTable,
  corePieceTable,
  commonLocationTable,
  liveAnimalsEpermitConsignmentTable,
  abstractOrganizationTable,
  coreIotDeviceTable,
  abstractPhysicalLogisticsObjectTable,
  billingSettlementBillingDetailsTable,
  distributionBookingTable,
  distributionBookingOptionTable,
  embeddedBookingPreferencesTable,
  distributionBookingRequestTable,
  distributionBookingShipmentTable,
  embeddedBookingTimesTable,
  embeddedLogisticsObjectTable,
  commonCarrierTable,
  embeddedCarrierProductTable,
  commonPersonTable,
  coreCheckTable,
  coreCheckTemplateTable,
  coreLoadingMaterialTable,
  coreComposingTable,
  coreSensorTable,
  liveAnimalsPieceLiveAnimalsTable,
  embeddedContactDetailTable,
  coreItemTable,
  dGDgProductRadioactiveTable,
  coreProductTable,
  coreCustomsInformationTable,
  embeddedCurrencyValueTable,
  coreWaybillTable,
  dGDgDeclarationTable,
  embeddedDimensionsTable,
  coreExternalReferenceTable,
  liveAnimalsLiveAnimalsEpermitTable,
  embeddedLogisticsEventTable,
  distributionBookingOptionRequestTable,
  distributionPriceTable,
  dGProductDgTable,
  embeddedGeolocationTable,
  coreUnitCompositionTable,
  coreInsuranceTable,
  coreShipmentTable,
  abstractLogisticsActionTable,
  embeddedPartyTable,
  dGDgRadioactiveIsotopeTable,
  coreLoadingUnitTable,
  coreLoadingTable,
  embeddedMeasurementTable,
  embeddedMovementTimeTable,
  coreTransportMeansTable,
  coreTransportMovementTable,
  commonCompanyTable,
  embeddedCharacteristicTable,
  embeddedOtherChargeTable,
  embeddedOtherIdentifierTable,
  embeddedRegulatedEntityTable,
  corePackagingTypeTable,
  abstractLogisticsAgentTable,
  embeddedPieceGroupTable,
  coreQuestionTable,
  embeddedRangesTable,
  distributionRatingsTable,
  coreSecurityDeclarationTable,
  abstractLogisticsServiceTable,
  liveAnimalsEpermitSignatureTable,
  embeddedStationRemarksTable,
  coreStoringTable,
  embeddedTemperatureInstructionsTable,
  embeddedVolumetricWeightTable,
  distributionTransportLegsTable,
  embeddedUnitsPreferenceTable,
  embeddedWaybillLineItemTable,
  dGPieceDgTable,
  dGItemDgTable,
  embeddedLoosePieceTable,
  commonNonHumanActorTable,
  commonPublicAuthorityTable,
  coreStorageTable,
  coreULDTable,
  embeddedULDBasicPieceTable,
  embeddedULDSpecificPieceTable,
  embeddedVolumePieceGroupTable
];

export default tables;
