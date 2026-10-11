# UsedishaCartValidationResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isValid** | **boolean** | Whether all items are valid and in stock | [default to undefined]
**takingOnlineOrders** | **boolean** | Whether the selected branch takes online orders. When false the cart is invalid and checkout is refused with BRANCH_NOT_TAKING_ONLINE_ORDERS (\&quot;This store isn\&#39;t taking online orders right now.\&quot;). | [default to undefined]
**code** | **string** | BRANCH_NOT_TAKING_ONLINE_ORDERS when the branch has online ordering off | [optional] [default to undefined]
**items** | **Array&lt;string&gt;** | Validated items with current availability | [default to undefined]
**summary** | [**UsedishaCheckoutSummaryDto**](UsedishaCheckoutSummaryDto.md) | Cart summary | [default to undefined]
**errors** | **Array&lt;string&gt;** | Validation errors if any | [optional] [default to undefined]

## Example

```typescript
import { UsedishaCartValidationResponseDto } from './api';

const instance: UsedishaCartValidationResponseDto = {
    isValid,
    takingOnlineOrders,
    code,
    items,
    summary,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
