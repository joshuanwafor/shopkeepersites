# UsedishaDeliveryQuoteDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | **string** |  | [default to undefined]
**provider** | **string** | Delivery provider name (platformDelivery only) | [optional] [default to undefined]
**quoteReference** | **string** | Provider quote reference, persisted for later dispatch | [optional] [default to undefined]
**estimatedDeliveryTime** | **string** | Estimated delivery time | [optional] [default to undefined]
**available** | **boolean** | Whether platform delivery is available for this route | [default to undefined]

## Example

```typescript
import { UsedishaDeliveryQuoteDto } from './api';

const instance: UsedishaDeliveryQuoteDto = {
    method,
    provider,
    quoteReference,
    estimatedDeliveryTime,
    available,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
