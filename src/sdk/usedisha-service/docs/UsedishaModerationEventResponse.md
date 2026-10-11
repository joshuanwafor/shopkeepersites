# UsedishaModerationEventResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **string** |  | [default to undefined]
**from** | **string** | Value before the change | [optional] [default to undefined]
**to** | **string** | Value after the change (for claim decisions, the claim id) | [optional] [default to undefined]
**reason** | **string** | Why the change was made | [optional] [default to undefined]
**actorType** | **string** |  | [default to undefined]
**actorId** | **string** | Account that made the change | [optional] [default to undefined]
**at** | **string** | When the change was made | [default to undefined]

## Example

```typescript
import { UsedishaModerationEventResponse } from './api';

const instance: UsedishaModerationEventResponse = {
    action,
    from,
    to,
    reason,
    actorType,
    actorId,
    at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
