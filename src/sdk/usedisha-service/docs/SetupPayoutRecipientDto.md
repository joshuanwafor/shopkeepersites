# SetupPayoutRecipientDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountNumber** | **string** | Bank account number | [default to undefined]
**bankCode** | **string** | Bank code (from the banks list endpoint) | [default to undefined]
**bankName** | **string** | Bank name (for display; resolved from the banks list when omitted) | [optional] [default to undefined]

## Example

```typescript
import { SetupPayoutRecipientDto } from './api';

const instance: SetupPayoutRecipientDto = {
    accountNumber,
    bankCode,
    bankName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
