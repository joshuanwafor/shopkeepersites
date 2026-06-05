# StorefrontBranchItemResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branchId** | **string** | Branch ID reference | [default to undefined]
**name** | **string** | Branch display name | [default to undefined]
**status** | **string** |  | [default to undefined]
**phone** | **string** |  | [optional] [default to undefined]
**deliveryRadius** | **number** | Delivery radius in km | [optional] [default to undefined]
**location** | [**UsedishaLocation**](UsedishaLocation.md) | GeoJSON Point | [default to undefined]
**country** | **string** |  | [default to undefined]
**state** | **string** |  | [default to undefined]
**city** | **string** |  | [default to undefined]
**lga** | **string** |  | [optional] [default to undefined]
**distanceKm** | **number** | Distance from supplied lat/lng in km | [optional] [default to undefined]

## Example

```typescript
import { StorefrontBranchItemResponse } from './api';

const instance: StorefrontBranchItemResponse = {
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
    distanceKm,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
