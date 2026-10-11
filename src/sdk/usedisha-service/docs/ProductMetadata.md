# ProductMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**downloadable** | **boolean** | Whether the product is downloadable | [optional] [default to undefined]
**downloadUrl** | **string** | The URL of the downloadable product | [optional] [default to undefined]
**mediaId** | **string** | The ID of the media file for the product (Firebase-backed media entry, e.g. \&quot;media_abc123\&quot; — not a Mongo ObjectId) | [optional] [default to undefined]

## Example

```typescript
import { ProductMetadata } from './api';

const instance: ProductMetadata = {
    downloadable,
    downloadUrl,
    mediaId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
