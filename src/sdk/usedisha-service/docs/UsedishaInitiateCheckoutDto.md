# UsedishaInitiateCheckoutDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **string** | Usedisha store domain | [default to undefined]
**customer** | [**UsedishaCheckoutCustomerDto**](UsedishaCheckoutCustomerDto.md) | Customer (email required) | [default to undefined]
**items** | [**Array&lt;UsedishaCheckoutItemDto&gt;**](UsedishaCheckoutItemDto.md) | Cart items | [default to undefined]
**shippingAddress** | [**Address**](Address.md) | Shipping address | [optional] [default to undefined]
**customerNotes** | **string** | Customer notes for the order | [optional] [default to undefined]
**callbackUrl** | **string** | Payment callback URL after successful payment | [optional] [default to undefined]

## Example

```typescript
import { UsedishaInitiateCheckoutDto } from './api';

const instance: UsedishaInitiateCheckoutDto = {
    domain,
    customer,
    items,
    shippingAddress,
    customerNotes,
    callbackUrl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
