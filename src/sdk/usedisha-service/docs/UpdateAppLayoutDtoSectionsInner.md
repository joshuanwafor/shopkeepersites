# UpdateAppLayoutDtoSectionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Client-generated id, unique within the layout | [default to undefined]
**enabled** | **boolean** | Disabled sections are stored and returned; the app skips them | [default to undefined]
**title** | **string** |  | [optional] [default to undefined]
**type** | **string** |  | [default to undefined]
**text** | **string** |  | [default to undefined]
**link** | [**AppAnnouncementSectionDtoLink**](AppAnnouncementSectionDtoLink.md) |  | [optional] [default to undefined]
**slides** | [**Array&lt;AppHeroSlideDto&gt;**](AppHeroSlideDto.md) |  | [default to undefined]
**style** | **string** |  | [default to undefined]
**categoryIds** | **Array&lt;string&gt;** | Omitted &#x3D; all categories in store order. Each must belong to this business. | [optional] [default to undefined]
**source** | **string** |  | [default to undefined]
**productIds** | **Array&lt;string&gt;** | Required for source&#x3D;manual (1–24). Each must belong to this business. | [optional] [default to undefined]
**categoryId** | **string** | Required for source&#x3D;category. Must belong to this business. | [optional] [default to undefined]
**layout** | **string** |  | [default to undefined]
**limit** | **number** | Ignored for source&#x3D;manual | [optional] [default to 10]
**imageUrl** | **string** | https image URL | [default to undefined]
**heading** | **string** |  | [optional] [default to undefined]
**subheading** | **string** |  | [optional] [default to undefined]
**ctaLabel** | **string** |  | [optional] [default to undefined]
**body** | **string** | Plain text with line breaks | [default to undefined]

## Example

```typescript
import { UpdateAppLayoutDtoSectionsInner } from './api';

const instance: UpdateAppLayoutDtoSectionsInner = {
    id,
    enabled,
    title,
    type,
    text,
    link,
    slides,
    style,
    categoryIds,
    source,
    productIds,
    categoryId,
    layout,
    limit,
    imageUrl,
    heading,
    subheading,
    ctaLabel,
    body,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
