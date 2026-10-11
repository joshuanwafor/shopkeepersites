# AppAnnouncementSectionDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Client-generated id, unique within the layout | [default to undefined]
**enabled** | **boolean** | Disabled sections are stored and returned; the app skips them | [default to undefined]
**title** | **string** |  | [optional] [default to undefined]
**type** | **string** |  | [default to undefined]
**text** | **string** |  | [default to undefined]
**link** | [**AppAnnouncementSectionDtoLink**](AppAnnouncementSectionDtoLink.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AppAnnouncementSectionDto } from './api';

const instance: AppAnnouncementSectionDto = {
    id,
    enabled,
    title,
    type,
    text,
    link,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
