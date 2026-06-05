# UpdateUsedishaBranchDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Branch display name | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to StatusEnum_Active]
**phone** | **string** | Branch contact phone number | [optional] [default to undefined]
**deliveryRadius** | **number** | Delivery radius in kilometres | [optional] [default to undefined]
**location** | [**UsedishaLocation**](UsedishaLocation.md) | GeoJSON Point [longitude, latitude] | [optional] [default to undefined]
**country** | **string** | Country | [optional] [default to undefined]
**state** | **string** | State / province | [optional] [default to undefined]
**city** | **string** | City | [optional] [default to undefined]
**lga** | **string** | Local Government Area | [optional] [default to undefined]

## Example

```typescript
import { UpdateUsedishaBranchDto } from './api';

const instance: UpdateUsedishaBranchDto = {
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
