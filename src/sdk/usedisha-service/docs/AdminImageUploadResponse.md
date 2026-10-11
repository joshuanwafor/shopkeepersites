# AdminImageUploadResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **string** | Recommended CDN URL to use for the image | [default to undefined]
**key** | **string** | S3 key of the original upload | [default to undefined]
**versions** | [**Array&lt;AdminUploadedImageVersion&gt;**](AdminUploadedImageVersion.md) | All generated size variants | [default to undefined]

## Example

```typescript
import { AdminImageUploadResponse } from './api';

const instance: AdminImageUploadResponse = {
    url,
    key,
    versions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
