# SubmitProfileClaimDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**claimerFullName** | **string** | Claimer\&#39;s full name | [default to undefined]
**claimerEmail** | **string** | Claimer\&#39;s email | [default to undefined]
**claimerPhone** | **string** | Claimer\&#39;s phone | [default to undefined]
**businessName** | **string** | Legal/business name | [default to undefined]
**businessRegistrationNumber** | **string** | Business registration / CAC (RC) number | [default to undefined]
**taxIdentificationNumber** | **string** | Tax Identification Number (TIN) | [optional] [default to undefined]
**businessAddress** | **string** | Registered business address | [default to undefined]
**additionalInfo** | **string** | Any additional context from the claimer | [optional] [default to undefined]
**registrationDocuments** | [**Array&lt;ClaimDocumentDto&gt;**](ClaimDocumentDto.md) | Registration / verification documents (at least one) | [default to undefined]

## Example

```typescript
import { SubmitProfileClaimDto } from './api';

const instance: SubmitProfileClaimDto = {
    claimerFullName,
    claimerEmail,
    claimerPhone,
    businessName,
    businessRegistrationNumber,
    taxIdentificationNumber,
    businessAddress,
    additionalInfo,
    registrationDocuments,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
