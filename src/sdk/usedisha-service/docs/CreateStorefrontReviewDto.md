# CreateStorefrontReviewDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customerName** | **string** | Customer full name | [default to undefined]
**customerEmail** | **string** | Customer email | [default to undefined]
**rating** | **number** | Rating 1–5 | [default to undefined]
**title** | **string** | Review title | [default to undefined]
**content** | **string** | Review content | [default to undefined]
**orderId** | **string** | Order ID for verified purchase badge | [optional] [default to undefined]

## Example

```typescript
import { CreateStorefrontReviewDto } from './api';

const instance: CreateStorefrontReviewDto = {
    customerName,
    customerEmail,
    rating,
    title,
    content,
    orderId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
