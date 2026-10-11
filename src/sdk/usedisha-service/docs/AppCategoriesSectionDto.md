# AppCategoriesSectionDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Client-generated id, unique within the layout | [default to undefined]
**enabled** | **boolean** | Disabled sections are stored and returned; the app skips them | [default to undefined]
**title** | **string** |  | [optional] [default to undefined]
**type** | **string** |  | [default to undefined]
**style** | **string** |  | [default to undefined]
**categoryIds** | **Array&lt;string&gt;** | Omitted &#x3D; all categories in store order. Each must belong to this business. | [optional] [default to undefined]

## Example

```typescript
import { AppCategoriesSectionDto } from './api';

const instance: AppCategoriesSectionDto = {
    id,
    enabled,
    title,
    type,
    style,
    categoryIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
