# UsedishaInitiateCheckoutDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **string** | Usedisha store domain | [default to undefined]
**branchId** | **string** | Branch to order from. Defaults to the storefront default branch when omitted. | [optional] [default to undefined]
**customer** | [**UsedishaCheckoutCustomerDto**](UsedishaCheckoutCustomerDto.md) | Customer details (email required). Optional for authenticated shoppers — identity is then sourced from the JWT. Required for guest checkout. | [optional] [default to undefined]
**items** | [**Array&lt;UsedishaCheckoutItemDto&gt;**](UsedishaCheckoutItemDto.md) | Cart items | [default to undefined]
**shippingAddress** | [**Address**](Address.md) | Shipping address | [optional] [default to undefined]
**customerNotes** | **string** | Customer notes for the order | [optional] [default to undefined]
**deliveryMethod** | **string** | How the order will be fulfilled. &#x60;pickup&#x60; &#x3D; collect in store (free). &#x60;platformDelivery&#x60; &#x3D; platform arranges delivery (fee quoted by provider). &#x60;businessDelivery&#x60; &#x3D; business delivers (merchant flat fee). | [default to undefined]
**userLng** | **number** | Customer longitude — required for platformDelivery to quote the delivery fee | [optional] [default to undefined]
**userLat** | **number** | Customer latitude — required for EXPRESS to calculate the delivery fee | [optional] [default to undefined]
**callbackUrl** | **string** | Payment callback URL after successful payment | [optional] [default to undefined]

## Example

```typescript
import { UsedishaInitiateCheckoutDto } from './api';

const instance: UsedishaInitiateCheckoutDto = {
    domain,
    branchId,
    customer,
    items,
    shippingAddress,
    customerNotes,
    deliveryMethod,
    userLng,
    userLat,
    callbackUrl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
