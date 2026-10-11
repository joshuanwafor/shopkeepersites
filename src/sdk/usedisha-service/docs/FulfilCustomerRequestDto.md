# FulfilCustomerRequestDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storefrontId** | **string** | Storefront (Usedisha) that will supply the items | [default to undefined]
**items** | [**Array&lt;FulfilOrderLineDto&gt;**](FulfilOrderLineDto.md) | Order lines (at least one) | [default to undefined]
**shippingAmount** | **number** | Delivery fee to add to the order (₦) | [optional] [default to undefined]
**note** | **string** | Note recorded on both the request and the order | [optional] [default to undefined]

## Example

```typescript
import { FulfilCustomerRequestDto } from './api';

const instance: FulfilCustomerRequestDto = {
    storefrontId,
    items,
    shippingAmount,
    note,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
