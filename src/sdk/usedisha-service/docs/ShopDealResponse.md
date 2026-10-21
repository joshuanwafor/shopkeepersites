# ShopDealResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**name** | **string** | The name the store gave the sale | [default to undefined]
**label** | **string** | What the deal is, for the card line and the store page banner | [default to undefined]
**_short** | **string** | For the badge | [default to undefined]
**type** | **string** |  | [default to undefined]
**value** | **number** | Percent, or naira for fixed | [default to undefined]
**maxDiscountAmount** | **number** | A percentage deal\&#39;s cap (₦) | [optional] [default to undefined]
**minOrderAmount** | **number** | Nothing comes off until the order\&#39;s items reach this (₦) | [optional] [default to undefined]
**scope** | **string** | The whole order, or chosen products or categories | [default to undefined]
**endsAt** | **string** | When it ends (ISO), or null for no end date | [default to undefined]
**branchId** | **string** | Set when the deal runs at one branch of a store that sells from several: that branch. The label then ends \&quot;· Lekki branch only\&quot;. | [optional] [default to undefined]
**branchName** | **string** | The name of that branch, when it has one | [optional] [default to undefined]

## Example

```typescript
import { ShopDealResponse } from './api';

const instance: ShopDealResponse = {
    id,
    name,
    label,
    _short,
    type,
    value,
    maxDiscountAmount,
    minOrderAmount,
    scope,
    endsAt,
    branchId,
    branchName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
