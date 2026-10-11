# UsedishaBulkCheckoutResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groupReference** | **string** | Reference for the whole checkout — poll GET usedisha/checkout/bulk/status/:groupReference | [default to undefined]
**paymentUrl** | **string** | Payment authorization URL — one payment for every order | [default to undefined]
**paymentAccessCode** | **string** |  | [default to undefined]
**paymentReference** | **string** |  | [default to undefined]
**totalAmount** | **number** | Sum of every order total | [default to undefined]
**creditAmount** | **number** | Paid with ShopCentral credit (naira); 0 when none was used | [optional] [default to undefined]
**amountDue** | **number** | What the card is charged: total less credit (naira) | [optional] [default to undefined]
**currencyCode** | **string** |  | [default to undefined]
**expiresAt** | **string** |  | [default to undefined]
**stores** | [**Array&lt;UsedishaBulkCheckoutStoreSummaryDto&gt;**](UsedishaBulkCheckoutStoreSummaryDto.md) |  | [default to undefined]
**summary** | [**UsedishaBulkCheckoutSummaryDto**](UsedishaBulkCheckoutSummaryDto.md) |  | [default to undefined]

## Example

```typescript
import { UsedishaBulkCheckoutResponseDto } from './api';

const instance: UsedishaBulkCheckoutResponseDto = {
    groupReference,
    paymentUrl,
    paymentAccessCode,
    paymentReference,
    totalAmount,
    creditAmount,
    amountDue,
    currencyCode,
    expiresAt,
    stores,
    summary,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
