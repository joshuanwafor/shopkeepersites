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
**takingOnlineOrders** | **boolean** | Whether this branch takes online orders (its &#x60;enableOnlineOrdering&#x60; setting, default true). When false, show the store as not taking orders: checkout is refused with BRANCH_NOT_TAKING_ONLINE_ORDERS. | [default to undefined]

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
    takingOnlineOrders,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
