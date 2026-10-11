# CompleteRefundDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**refundId** | **string** | The refund ID to complete. | [default to undefined]
**transactionId** | **string** | Transaction ID from payment gateway for the refund. | [optional] [default to undefined]
**gatewayReference** | **string** | Gateway reference for the refund. | [optional] [default to undefined]
**notes** | **string** | Additional notes about the completed refund. | [optional] [default to undefined]

## Example

```typescript
import { CompleteRefundDto } from './api';

const instance: CompleteRefundDto = {
    refundId,
    transactionId,
    gatewayReference,
    notes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
