# OrderRatingResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**orderId** | **string** |  | [default to undefined]
**rating** | **number** |  | [default to undefined]
**title** | **string** |  | [optional] [default to undefined]
**content** | **string** |  | [optional] [default to undefined]
**verified** | **boolean** | Verified purchase (rating tied to a real order) | [default to undefined]
**status** | **string** | Moderation status of the rating | [default to undefined]
**createdAt** | **string** |  | [default to undefined]

## Example

```typescript
import { OrderRatingResponse } from './api';

const instance: OrderRatingResponse = {
    id,
    orderId,
    rating,
    title,
    content,
    verified,
    status,
    createdAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
