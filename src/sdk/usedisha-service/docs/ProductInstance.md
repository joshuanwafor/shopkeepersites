# ProductInstance


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier for the product instance same as uniqueIdentifier | [default to undefined]
**uniqueIdentifier** | **string** | Serial number or IMEI of the product instance | [default to undefined]
**sku** | **string** | SKU of the product instance | [default to undefined]
**productId** | **string** | Reference to the parent product | [default to undefined]
**productLabel** | **string** | Label of the product instance | [default to undefined]
**publisherId** | **string** | Reference to the publisher who added the product instance | [default to undefined]
**branchId** | **string** | Reference to the branch where the product instance is located | [default to undefined]
**businessId** | **string** | Reference to the business where the product instance is located | [default to undefined]
**status** | **string** | Current status of the product instance | [default to undefined]
**uniqueIdentifierType** | **string** | Type of the unique identifier | [default to undefined]
**customerId** | **string** | Reference to the customer who purchased/owns the instance | [optional] [default to undefined]
**invoiceId** | **string** | Reference to the invoice when the instance was sold | [optional] [default to undefined]
**supplierId** | **string** | Supplier this unit was bought from: a Customer with type \&quot;supplier\&quot; in the same business. Null when untagged. | [optional] [default to undefined]
**supplierName** | **string** | Supplier name when the unit was tagged, kept so the record still reads correctly if the supplier is renamed or removed. | [optional] [default to undefined]
**supplierSource** | **string** | How the supplier tag was set | [optional] [default to undefined]
**supplierTaggedAt** | **string** | When the supplier tag was last set or cleared | [optional] [default to undefined]
**newStockId** | **string** | New stock receipt the unit arrived on, when tagged from one | [optional] [default to undefined]
**notes** | **string** | Notes or comments about this specific instance | [optional] [default to undefined]
**createdAt** | **string** | Timestamp when the product instance was created | [default to undefined]
**updatedAt** | **string** | Timestamp when the product instance was last updated | [default to undefined]
**timestamp** | **string** | Timestamp for Firebase ordering | [default to undefined]

## Example

```typescript
import { ProductInstance } from './api';

const instance: ProductInstance = {
    id,
    uniqueIdentifier,
    sku,
    productId,
    productLabel,
    publisherId,
    branchId,
    businessId,
    status,
    uniqueIdentifierType,
    customerId,
    invoiceId,
    supplierId,
    supplierName,
    supplierSource,
    supplierTaggedAt,
    newStockId,
    notes,
    createdAt,
    updatedAt,
    timestamp,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
