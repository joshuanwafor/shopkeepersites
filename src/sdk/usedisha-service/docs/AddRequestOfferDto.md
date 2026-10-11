# AddRequestOfferDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storefrontId** | **string** | Storefront supplying it (omit with official: true) | [optional] [default to undefined]
**official** | **boolean** | Assign to ShopCentral\&#39;s official vendor | [optional] [default to undefined]
**productId** | **string** | Listed product on that storefront | [optional] [default to undefined]
**productName** | **string** | What is being supplied (hand-priced offers) | [optional] [default to undefined]
**unitPrice** | **number** | Unit price (₦) (hand-priced offers) | [optional] [default to undefined]
**deliveryFee** | **number** | Delivery fee (₦) (hand-priced offers) | [optional] [default to undefined]
**note** | **string** | Note the customer sees with the offer | [optional] [default to undefined]

## Example

```typescript
import { AddRequestOfferDto } from './api';

const instance: AddRequestOfferDto = {
    storefrontId,
    official,
    productId,
    productName,
    unitPrice,
    deliveryFee,
    note,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
