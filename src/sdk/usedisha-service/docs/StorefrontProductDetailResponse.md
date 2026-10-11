# StorefrontProductDetailResponse


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
**stockTracked** | **boolean** | Whether stockQuantity limits how many can be bought: the product tracks stock and so does the branch. When false, ignore stockQuantity — checkout does. | [optional] [default to undefined]
**unit** | **string** | The unit it is sold in | [optional] [default to undefined]
**createdAt** | **string** | Creation date | [default to undefined]
**updatedAt** | **string** | Last update date | [default to undefined]
**warranty** | **string** | Warranty terms | [optional] [default to undefined]
**categories** | [**Array&lt;StorefrontProductCategory&gt;**](StorefrontProductCategory.md) | Its categories, by name | [optional] [default to undefined]
**branchId** | **string** | The branch it is sold from (the one asked for, or the default) | [default to undefined]
**takingOnlineOrders** | **boolean** | Whether that branch takes online orders now; when false checkout refuses the order | [default to undefined]

## Example

```typescript
import { StorefrontProductDetailResponse } from './api';

const instance: StorefrontProductDetailResponse = {
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
    stockTracked,
    unit,
    createdAt,
    updatedAt,
    warranty,
    categories,
    branchId,
    takingOnlineOrders,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
