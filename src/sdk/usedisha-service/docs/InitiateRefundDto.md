# InitiateRefundDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**refundAmount** | **number** | The amount to refund. | [default to undefined]
**refundReason** | **string** | The reason for refund. | [default to undefined]
**refundMethod** | **string** | The method to use for refund. | [optional] [default to RefundMethodEnum_OriginalPayment]
**restoreInventory** | **boolean** | Whether to restore inventory for refunded items. | [optional] [default to true]
**itemIndices** | **Array&lt;number&gt;** | Specific item indices to refund (partial refund). If not provided, full order refund. | [optional] [default to undefined]
**internalNotes** | **string** | Internal notes about the refund. | [optional] [default to undefined]

## Example

```typescript
import { InitiateRefundDto } from './api';

const instance: InitiateRefundDto = {
    refundAmount,
    refundReason,
    refundMethod,
    restoreInventory,
    itemIndices,
    internalNotes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
