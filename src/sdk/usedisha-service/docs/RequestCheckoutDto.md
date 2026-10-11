# RequestCheckoutDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**selections** | [**Array&lt;RequestCheckoutSelectionDto&gt;**](RequestCheckoutSelectionDto.md) |  | [default to undefined]
**stores** | [**Array&lt;RequestCheckoutStoreDto&gt;**](RequestCheckoutStoreDto.md) |  | [optional] [default to undefined]
**userLng** | **number** | Customer longitude (defaults to the request address) | [optional] [default to undefined]
**userLat** | **number** | Customer latitude (defaults to the request address) | [optional] [default to undefined]
**useCredit** | **boolean** | Pay part of it with the signed-in shopper\&#39;s ShopCentral credit (listed stores only; the card pays the rest). | [optional] [default to undefined]
**shippingAddress** | [**Address**](Address.md) | Delivery address (defaults to the one on the request) | [optional] [default to undefined]
**customer** | [**UsedishaCheckoutCustomerDto**](UsedishaCheckoutCustomerDto.md) |  | [optional] [default to undefined]
**callbackUrl** | **string** | Where the payment page returns to | [optional] [default to undefined]

## Example

```typescript
import { RequestCheckoutDto } from './api';

const instance: RequestCheckoutDto = {
    selections,
    stores,
    userLng,
    userLat,
    useCredit,
    shippingAddress,
    customer,
    callbackUrl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
