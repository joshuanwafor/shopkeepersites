# UsedishaCheckoutResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**intentId** | **string** | Order intent ID | [default to undefined]
**intentReference** | **string** | Order intent reference | [default to undefined]
**paymentUrl** | **string** | Payment authorization URL | [default to undefined]
**paymentAccessCode** | **string** | Payment access code | [default to undefined]
**paymentReference** | **string** | Payment reference | [default to undefined]
**totalAmount** | **number** | Order total amount | [default to undefined]
**currencyCode** | **string** | Currency code | [default to undefined]
**expiresAt** | **string** | Order expiry time | [default to undefined]
**summary** | [**UsedishaCheckoutSummaryDto**](UsedishaCheckoutSummaryDto.md) | Order summary | [default to undefined]

## Example

```typescript
import { UsedishaCheckoutResponseDto } from './api';

const instance: UsedishaCheckoutResponseDto = {
    intentId,
    intentReference,
    paymentUrl,
    paymentAccessCode,
    paymentReference,
    totalAmount,
    currencyCode,
    expiresAt,
    summary,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
