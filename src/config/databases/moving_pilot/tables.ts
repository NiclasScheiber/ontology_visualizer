import { TableConfig } from "../../../Visualizer/types";

import embeddedActivitySequenceTable from "./tables/Embedded.ActivitySequence.json";
import embeddedAddressTable from "./tables/Embedded.Address.json";
import embeddedDimensionsTable from "./tables/Embedded.Dimensions.json";
import commonExternalReferenceTable from "./tables/Common.ExternalReference.json";
import commonLocationTable from "./tables/Common.Location.json";
import eventLogisticsEventTable from "./tables/Event.LogisticsEvent.json";
import abstractLogisticsServiceTable from "./tables/Abstract.LogisticsService.json";
import agentOrganizationTable from "./tables/Agent.Organization.json";
import embeddedPartyTable from "./tables/Embedded.Party.json";
import coreShipmentTable from "./tables/Core.Shipment.json";
import activityTransportMovementTable from "./tables/Activity.TransportMovement.json";
import embeddedValueTable from "./tables/Embedded.Value.json";

const tables: TableConfig[] = [
  embeddedActivitySequenceTable,
  embeddedAddressTable,
  embeddedDimensionsTable,
  commonExternalReferenceTable,
  commonLocationTable,
  eventLogisticsEventTable,
  abstractLogisticsServiceTable,
  agentOrganizationTable,
  embeddedPartyTable,
  coreShipmentTable,
  activityTransportMovementTable,
  embeddedValueTable
];

export default tables;
