# AdminReviewKycDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** | Decision — must be &#x60;approved&#x60; or &#x60;rejected&#x60; | [default to undefined]
**reason** | **string** | Reason (recommended when rejecting) | [optional] [default to undefined]

## Example

```typescript
import { AdminReviewKycDto } from './api';

const instance: AdminReviewKycDto = {
    status,
    reason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
