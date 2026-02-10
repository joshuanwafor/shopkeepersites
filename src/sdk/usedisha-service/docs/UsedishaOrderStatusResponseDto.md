# UsedishaOrderStatusResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**intentReference** | **string** | Order intent reference | [default to undefined]
**status** | **string** | Current status | [default to undefined]
**orderId** | **string** | Order ID (if order was created) | [optional] [default to undefined]
**orderReference** | **string** | Order reference (if order was created) | [optional] [default to undefined]
**paymentStatus** | **string** | Payment status | [default to undefined]
**failureReason** | **string** | Failure reason (if failed) | [optional] [default to undefined]

## Example

```typescript
import { UsedishaOrderStatusResponseDto } from './api';

const instance: UsedishaOrderStatusResponseDto = {
    intentReference,
    status,
    orderId,
    orderReference,
    paymentStatus,
    failureReason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
