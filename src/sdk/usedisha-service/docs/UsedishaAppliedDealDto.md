# UsedishaAppliedDealDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The discount applied | [default to undefined]
**name** | **string** | The name the store gave the sale | [default to undefined]
**label** | **string** | What it is, for the summary line \&quot;Discount (label)\&quot; | [default to undefined]
**type** | **string** |  | [default to undefined]
**value** | **number** | Percent, or naira for fixed | [default to undefined]
**scope** | **string** | The whole order, or chosen products or categories | [default to undefined]
**amount** | **number** | What it took off this order (₦) | [default to undefined]

## Example

```typescript
import { UsedishaAppliedDealDto } from './api';

const instance: UsedishaAppliedDealDto = {
    id,
    name,
    label,
    type,
    value,
    scope,
    amount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
