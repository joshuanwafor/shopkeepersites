# StorefrontProductResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Product ID | [default to undefined]
**name** | **string** | Product name | [default to undefined]
**description** | **string** | Product description | [optional] [default to undefined]
**amount** | **number** | Product price | [default to undefined]
**primaryPhoto** | **string** | Product image URL | [optional] [default to undefined]
**availability** | **string** | Product availability status | [default to undefined]
**stockQuantity** | **number** | Stock quantity | [default to undefined]
**tags** | **Array&lt;string&gt;** | Product tags | [optional] [default to undefined]
**categoryIds** | **Array&lt;string&gt;** | Product category IDs | [optional] [default to undefined]
**SKU** | **string** | Product SKU | [default to undefined]
**brand** | **string** | Product brand | [optional] [default to undefined]
**createdAt** | **string** | Creation date | [default to undefined]
**updatedAt** | **string** | Last update date | [default to undefined]

## Example

```typescript
import { StorefrontProductResponse } from './api';

const instance: StorefrontProductResponse = {
    id,
    name,
    description,
    amount,
    primaryPhoto,
    availability,
    stockQuantity,
    tags,
    categoryIds,
    SKU,
    brand,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
