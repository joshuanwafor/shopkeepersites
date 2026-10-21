# StorefrontProductVariantResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**title** | **string** | Its option values in the product option order | [default to undefined]
**_options** | [**Array&lt;StorefrontVariantOptionValue&gt;**](StorefrontVariantOptionValue.md) |  | [default to undefined]
**amount** | **number** | Selling price (₦) | [default to undefined]
**compareAtPrice** | **number** | Original price, shown struck through (₦) | [optional] [default to undefined]
**primaryPhoto** | **string** | Its own photo; else use the product photo | [optional] [default to undefined]
**salePrice** | **number** | Price under the store\&#39;s deal (₦), shown with &#x60;amount&#x60; struck through. Present only when the deal prices it. | [optional] [default to undefined]
**SKU** | **string** |  | [default to undefined]
**availability** | **string** |  | [default to undefined]
**stockQuantity** | **number** |  | [default to undefined]
**stockTracked** | **boolean** | Whether stockQuantity limits how many can be bought | [default to undefined]
**inStock** | **boolean** | Whether at least one can be bought now | [default to undefined]
**minOrderQuantity** | **number** |  | [optional] [default to undefined]
**maxOrderQuantity** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { StorefrontProductVariantResponse } from './api';

const instance: StorefrontProductVariantResponse = {
    id,
    title,
    _options,
    amount,
    compareAtPrice,
    primaryPhoto,
    salePrice,
    SKU,
    availability,
    stockQuantity,
    stockTracked,
    inStock,
    minOrderQuantity,
    maxOrderQuantity,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
