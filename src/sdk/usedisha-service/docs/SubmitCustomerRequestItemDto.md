# SubmitCustomerRequestItemDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | What the item is | [default to undefined]
**description** | **string** | Colour, size, brand — anything that narrows it down | [optional] [default to undefined]
**quantity** | **number** | How many of this item | [optional] [default to 1]
**budgetMin** | **number** | Lowest price they expect to pay (₦) | [optional] [default to undefined]
**budgetMax** | **number** | Most they are willing to pay (₦) | [optional] [default to undefined]
**images** | **Array&lt;string&gt;** | Reference photo URLs (max 5) | [optional] [default to undefined]

## Example

```typescript
import { SubmitCustomerRequestItemDto } from './api';

const instance: SubmitCustomerRequestItemDto = {
    name,
    description,
    quantity,
    budgetMin,
    budgetMax,
    images,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
