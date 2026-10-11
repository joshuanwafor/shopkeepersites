# SetStorefrontFlagsDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**claimable** | **boolean** | Mark the storefront as claimable (open to ownership claims) | [optional] [default to undefined]
**readyForOrders** | **boolean** | Clear the storefront for marketplace orders (Shopmenu checkout). Orders through the store\&#39;s own link are not affected. | [optional] [default to undefined]
**reason** | **string** | Why the flags changed — kept in the moderation history | [optional] [default to undefined]

## Example

```typescript
import { SetStorefrontFlagsDto } from './api';

const instance: SetStorefrontFlagsDto = {
    claimable,
    readyForOrders,
    reason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
