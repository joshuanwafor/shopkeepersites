# AppHeroSectionDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Client-generated id, unique within the layout | [default to undefined]
**enabled** | **boolean** | Disabled sections are stored and returned; the app skips them | [default to undefined]
**title** | **string** |  | [optional] [default to undefined]
**type** | **string** |  | [default to undefined]
**slides** | [**Array&lt;AppHeroSlideDto&gt;**](AppHeroSlideDto.md) |  | [default to undefined]

## Example

```typescript
import { AppHeroSectionDto } from './api';

const instance: AppHeroSectionDto = {
    id,
    enabled,
    title,
    type,
    slides,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
