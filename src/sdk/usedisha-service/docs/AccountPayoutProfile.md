# AccountPayoutProfile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provider** | **string** |  | [optional] [default to undefined]
**recipientCode** | **string** | Provider transfer-recipient code — the destination paid to. | [optional] [default to undefined]
**accountNumber** | **string** |  | [optional] [default to undefined]
**accountName** | **string** | Resolved from the provider, never taken from the client. | [optional] [default to undefined]
**bankCode** | **string** |  | [optional] [default to undefined]
**bankName** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { AccountPayoutProfile } from './api';

const instance: AccountPayoutProfile = {
    provider,
    recipientCode,
    accountNumber,
    accountName,
    bankCode,
    bankName,
    status,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
