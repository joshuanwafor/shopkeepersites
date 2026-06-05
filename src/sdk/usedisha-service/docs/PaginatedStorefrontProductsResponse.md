# PaginatedStorefrontProductsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**products** | [**Array&lt;StorefrontProductResponse&gt;**](StorefrontProductResponse.md) | Products for this page | [default to undefined]
**total** | **number** | Total products matching the filter | [default to undefined]
**page** | **number** | Current page (1-based) | [default to undefined]
**limit** | **number** | Page size | [default to undefined]

## Example

```typescript
import { PaginatedStorefrontProductsResponse } from './api';

const instance: PaginatedStorefrontProductsResponse = {
    products,
    total,
    page,
    limit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
