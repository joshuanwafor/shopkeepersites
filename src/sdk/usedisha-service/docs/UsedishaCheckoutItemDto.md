# UsedishaCheckoutItemDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**productId** | **string** | Product ID | [default to undefined]
**variantId** | **string** | The variant chosen, for a product with variants: it is priced, stocked and named as that variant. Without one the product is sold as itself, as before variants (older apps). | [optional] [default to undefined]
**quantity** | **number** | Quantity to purchase | [default to undefined]

## Example

```typescript
import { UsedishaCheckoutItemDto } from './api';

const instance: UsedishaCheckoutItemDto = {
    productId,
    variantId,
    quantity,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
