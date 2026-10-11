# AdminRequestKycDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestedFields** | **Array&lt;string&gt;** | Specific fields the owner should provide (informational) | [optional] [default to undefined]
**note** | **string** | Message to the business owner explaining the request | [optional] [default to undefined]

## Example

```typescript
import { AdminRequestKycDto } from './api';

const instance: AdminRequestKycDto = {
    requestedFields,
    note,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
