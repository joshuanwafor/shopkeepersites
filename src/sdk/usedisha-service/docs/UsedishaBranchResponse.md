# UsedishaBranchResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Branch document _id | [default to undefined]
**branchId** | **string** | Branch ID reference | [default to undefined]
**name** | **string** | Branch display name | [default to undefined]
**status** | **string** |  | [default to undefined]
**phone** | **string** | Branch contact phone number | [optional] [default to undefined]
**deliveryRadius** | **number** | Delivery radius in kilometres | [optional] [default to undefined]
**location** | [**UsedishaLocation**](UsedishaLocation.md) | GeoJSON Point | [default to undefined]
**country** | **string** |  | [default to undefined]
**state** | **string** |  | [default to undefined]
**city** | **string** |  | [default to undefined]
**lga** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { UsedishaBranchResponse } from './api';

const instance: UsedishaBranchResponse = {
    id,
    branchId,
    name,
    status,
    phone,
    deliveryRadius,
    location,
    country,
    state,
    city,
    lga,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
