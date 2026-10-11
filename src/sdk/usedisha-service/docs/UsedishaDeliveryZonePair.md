# UsedishaDeliveryZonePair


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from** | **string** | Origin state — the fulfilling branch. Matched case-insensitively. | [default to undefined]
**to** | **string** | Destination state — the customer. Matched case-insensitively. | [default to undefined]
**fee** | **number** | Delivery fee for this route (NGN) | [default to undefined]

## Example

```typescript
import { UsedishaDeliveryZonePair } from './api';

const instance: UsedishaDeliveryZonePair = {
    from,
    to,
    fee,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
