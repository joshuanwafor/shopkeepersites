# UsedishaBranch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branchId** | **object** | Branch ID reference | [default to undefined]
**name** | **string** | Branch display name | [default to undefined]
**status** | **string** |  | [default to StatusEnum_Active]
**phone** | **string** | Branch contact phone number | [optional] [default to undefined]
**deliveryRadius** | **number** | Delivery radius in kilometres | [optional] [default to undefined]
**location** | [**UsedishaLocation**](UsedishaLocation.md) | GeoJSON Point [longitude, latitude] | [default to undefined]
**country** | **string** | Country | [default to undefined]
**state** | **string** | State / province | [default to undefined]
**city** | **string** | City | [default to undefined]
**lga** | **string** | Local Government Area | [optional] [default to undefined]

## Example

```typescript
import { UsedishaBranch } from './api';

const instance: UsedishaBranch = {
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
