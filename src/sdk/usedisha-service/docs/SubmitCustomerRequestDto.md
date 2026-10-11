# SubmitCustomerRequestDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;SubmitCustomerRequestItemDto&gt;**](SubmitCustomerRequestItemDto.md) | The items being asked for (at least one, at most 20) | [default to undefined]
**note** | **string** | Context that applies to the whole request | [optional] [default to undefined]
**neededBy** | **string** | When they need it by (ISO date) | [optional] [default to undefined]
**deliveryAddress** | [**CustomerRequestAddressDto**](CustomerRequestAddressDto.md) |  | [optional] [default to undefined]
**acceptsOffers** | **boolean** | Set by app versions that can show vendor offers and check them out. Without it the request is quoted the old way, by an admin, on one store. | [optional] [default to false]

## Example

```typescript
import { SubmitCustomerRequestDto } from './api';

const instance: SubmitCustomerRequestDto = {
    items,
    note,
    neededBy,
    deliveryAddress,
    acceptsOffers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
