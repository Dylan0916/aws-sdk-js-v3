import { DBInstanceAlreadyExistsFault } from "./DBInstanceAlreadyExistsFault";
import { InsufficientDBInstanceCapacityFault } from "./InsufficientDBInstanceCapacityFault";
import { DBParameterGroupNotFoundFault } from "./DBParameterGroupNotFoundFault";
import { DBSecurityGroupNotFoundFault } from "./DBSecurityGroupNotFoundFault";
import { InstanceQuotaExceededFault } from "./InstanceQuotaExceededFault";
import { StorageQuotaExceededFault } from "./StorageQuotaExceededFault";
import { DBSubnetGroupNotFoundFault } from "./DBSubnetGroupNotFoundFault";
import { DBSubnetGroupDoesNotCoverEnoughAZs } from "./DBSubnetGroupDoesNotCoverEnoughAZs";
import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
import { InvalidSubnet } from "./InvalidSubnet";
import { InvalidVPCNetworkStateFault } from "./InvalidVPCNetworkStateFault";
import { DBClusterNotFoundFault } from "./DBClusterNotFoundFault";
import { StorageTypeNotSupportedFault } from "./StorageTypeNotSupportedFault";
import { AuthorizationNotFoundFault } from "./AuthorizationNotFoundFault";
import { KMSKeyNotAccessibleFault } from "./KMSKeyNotAccessibleFault";
export type CreateDBInstanceExceptionsUnion =
  | DBInstanceAlreadyExistsFault
  | InsufficientDBInstanceCapacityFault
  | DBParameterGroupNotFoundFault
  | DBSecurityGroupNotFoundFault
  | InstanceQuotaExceededFault
  | StorageQuotaExceededFault
  | DBSubnetGroupNotFoundFault
  | DBSubnetGroupDoesNotCoverEnoughAZs
  | InvalidDBClusterStateFault
  | InvalidSubnet
  | InvalidVPCNetworkStateFault
  | DBClusterNotFoundFault
  | StorageTypeNotSupportedFault
  | AuthorizationNotFoundFault
  | KMSKeyNotAccessibleFault;
