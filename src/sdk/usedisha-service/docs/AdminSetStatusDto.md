# AdminSetStatusDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** | New storefront status | [optional] [default to undefined]
**reason** | **string** | Why — required when suspending or deleting. Kept in the moderation history. | [optional] [default to undefined]

## Example

```typescript
import { AdminSetStatusDto } from './api';

const instance: AdminSetStatusDto = {
    status,
    reason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
