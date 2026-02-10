# UsedishaCartValidationResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isValid** | **boolean** | Whether all items are valid and in stock | [default to undefined]
**items** | **Array&lt;string&gt;** | Validated items with current availability | [default to undefined]
**summary** | [**UsedishaCheckoutSummaryDto**](UsedishaCheckoutSummaryDto.md) | Cart summary | [default to undefined]
**errors** | **Array&lt;string&gt;** | Validation errors if any | [optional] [default to undefined]

## Example

```typescript
import { UsedishaCartValidationResponseDto } from './api';

const instance: UsedishaCartValidationResponseDto = {
    isValid,
    items,
    summary,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
