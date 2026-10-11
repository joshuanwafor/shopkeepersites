# UsedishaBulkCheckoutStatusResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groupReference** | **string** |  | [default to undefined]
**status** | **string** | Status of the checkout as a whole | [default to undefined]
**paymentStatus** | **string** | pending | completed | failed | cancelled | [default to undefined]
**totalAmount** | **number** |  | [default to undefined]
**orders** | [**Array&lt;UsedishaBulkOrderStatusDto&gt;**](UsedishaBulkOrderStatusDto.md) | One entry per store, in checkout order | [default to undefined]

## Example

```typescript
import { UsedishaBulkCheckoutStatusResponseDto } from './api';

const instance: UsedishaBulkCheckoutStatusResponseDto = {
    groupReference,
    status,
    paymentStatus,
    totalAmount,
    orders,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
