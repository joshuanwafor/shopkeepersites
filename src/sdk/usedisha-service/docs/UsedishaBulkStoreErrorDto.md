# UsedishaBulkStoreErrorDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** |  | [default to undefined]
**code** | **string** | Machine-readable reason, when there is one | [optional] [default to undefined]
**errors** | **Array&lt;string&gt;** | The cart\&#39;s problems, when it failed validation | [optional] [default to undefined]

## Example

```typescript
import { UsedishaBulkStoreErrorDto } from './api';

const instance: UsedishaBulkStoreErrorDto = {
    message,
    code,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
