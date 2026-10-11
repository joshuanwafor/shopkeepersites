# UsedishaBulkInitiateCheckoutDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stores** | [**Array&lt;UsedishaBulkCheckoutStoreDto&gt;**](UsedishaBulkCheckoutStoreDto.md) | Stores to order from (1–10), each once | [default to undefined]
**useCredit** | **boolean** | Pay part of the checkout with the signed-in shopper\&#39;s ShopCentral credit, split across the stores (the card pays the rest). Ignored for guests. | [optional] [default to undefined]
**customer** | [**UsedishaCheckoutCustomerDto**](UsedishaCheckoutCustomerDto.md) | Customer details (email required). Optional for authenticated shoppers — identity is then sourced from the JWT. Required for guest checkout. | [optional] [default to undefined]
**shippingAddress** | [**Address**](Address.md) | Shipping address, shared by every order | [optional] [default to undefined]
**userLng** | **number** | Customer longitude — required for platformDelivery fee quoting | [optional] [default to undefined]
**userLat** | **number** | Customer latitude — required for platformDelivery fee quoting | [optional] [default to undefined]
**callbackUrl** | **string** | Payment callback URL after successful payment | [optional] [default to undefined]
**orderSource** | **string** | Where the orders originated. Defaults to &#x60;storefront&#x60;, as in the single-store checkout. | [optional] [default to OrderSourceEnum_Storefront]
**marketplaceId** | **string** | Free-form marketplace tag — set when orderSource is marketplace. | [optional] [default to undefined]

## Example

```typescript
import { UsedishaBulkInitiateCheckoutDto } from './api';

const instance: UsedishaBulkInitiateCheckoutDto = {
    stores,
    useCredit,
    customer,
    shippingAddress,
    userLng,
    userLat,
    callbackUrl,
    orderSource,
    marketplaceId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
