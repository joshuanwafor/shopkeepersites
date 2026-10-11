# UsedishaKycResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** |  | [default to StatusEnum_NotRequired]
**requestedBy** | **string** | Admin who requested KYC | [optional] [default to undefined]
**requestedAt** | **string** | When KYC was requested | [optional] [default to undefined]
**requestedFields** | **Array&lt;string&gt;** | Specific fields the admin asked for | [optional] [default to undefined]
**requestNote** | **string** | Message from the admin explaining the request | [optional] [default to undefined]
**details** | [**UsedishaKycDetails**](UsedishaKycDetails.md) | Details submitted by the owner | [optional] [default to undefined]
**submittedAt** | **string** | When the owner submitted KYC | [optional] [default to undefined]
**reviewedBy** | **string** | Admin who reviewed the submission | [optional] [default to undefined]
**reviewedAt** | **string** | When KYC was reviewed | [optional] [default to undefined]
**rejectionReason** | **string** | Reason supplied when KYC is rejected | [optional] [default to undefined]

## Example

```typescript
import { UsedishaKycResponse } from './api';

const instance: UsedishaKycResponse = {
    status,
    requestedBy,
    requestedAt,
    requestedFields,
    requestNote,
    details,
    submittedAt,
    reviewedBy,
    reviewedAt,
    rejectionReason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
