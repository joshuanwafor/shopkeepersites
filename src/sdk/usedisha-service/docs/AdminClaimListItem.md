# AdminClaimListItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Claim ID (generated) | [default to undefined]
**usedishaId** | **object** | The storefront being claimed | [default to undefined]
**businessId** | **object** | The business behind the storefront (denormalized) | [default to undefined]
**claimerFullName** | **string** | Claimer\&#39;s full name | [default to undefined]
**claimerEmail** | **string** | Claimer\&#39;s email (used as the transfer target) | [default to undefined]
**claimerPhone** | **string** | Claimer\&#39;s phone number | [default to undefined]
**businessName** | **string** | Legal/business name provided by the claimer | [default to undefined]
**businessRegistrationNumber** | **string** | Business registration / CAC (RC) number | [default to undefined]
**taxIdentificationNumber** | **string** | Tax Identification Number (TIN) | [optional] [default to undefined]
**businessAddress** | **string** | Registered business address | [default to undefined]
**additionalInfo** | **string** | Any additional context from the claimer | [optional] [default to undefined]
**registrationDocuments** | [**Array&lt;UsedishaClaimDocument&gt;**](UsedishaClaimDocument.md) | Registration / verification documents (at least one required) | [default to undefined]
**status** | **string** |  | [default to StatusEnum_Submitted]
**reviewedBy** | **string** | Admin who reviewed the claim | [optional] [default to undefined]
**reviewedAt** | **string** | When the claim was reviewed | [optional] [default to undefined]
**rejectionReason** | **string** | Reason supplied when a claim is rejected | [optional] [default to undefined]
**transferredAccountId** | **string** | Account the business was transferred to on approval | [optional] [default to undefined]
**createdAt** | **string** | Creation timestamp | [optional] [readonly] [default to undefined]
**updatedAt** | **string** | Update timestamp | [optional] [readonly] [default to undefined]
**storefront** | [**AdminClaimStorefrontSummary**](AdminClaimStorefrontSummary.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AdminClaimListItem } from './api';

const instance: AdminClaimListItem = {
    id,
    usedishaId,
    businessId,
    claimerFullName,
    claimerEmail,
    claimerPhone,
    businessName,
    businessRegistrationNumber,
    taxIdentificationNumber,
    businessAddress,
    additionalInfo,
    registrationDocuments,
    status,
    reviewedBy,
    reviewedAt,
    rejectionReason,
    transferredAccountId,
    createdAt,
    updatedAt,
    storefront,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
