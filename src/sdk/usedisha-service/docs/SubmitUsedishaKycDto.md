# SubmitUsedishaKycDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**businessRegistrationNumber** | **string** | Business registration / CAC (RC) number | [optional] [default to undefined]
**taxIdentificationNumber** | **string** | Tax Identification Number (TIN) | [optional] [default to undefined]
**ownerFullName** | **string** | Full legal name of the business owner | [optional] [default to undefined]
**ownerIdType** | **string** | Owner government ID type | [optional] [default to undefined]
**ownerIdNumber** | **string** | Owner government ID number | [optional] [default to undefined]
**ownerIdDocumentUrl** | **string** | URL of the uploaded owner ID document | [optional] [default to undefined]
**proofOfAddressUrl** | **string** | URL of a proof-of-address document (e.g. utility bill) | [optional] [default to undefined]
**businessAddress** | **string** | Registered business address | [optional] [default to undefined]

## Example

```typescript
import { SubmitUsedishaKycDto } from './api';

const instance: SubmitUsedishaKycDto = {
    businessRegistrationNumber,
    taxIdentificationNumber,
    ownerFullName,
    ownerIdType,
    ownerIdNumber,
    ownerIdDocumentUrl,
    proofOfAddressUrl,
    businessAddress,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
