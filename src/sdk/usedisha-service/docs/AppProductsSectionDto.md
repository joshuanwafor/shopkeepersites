# AppProductsSectionDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Client-generated id, unique within the layout | [default to undefined]
**enabled** | **boolean** | Disabled sections are stored and returned; the app skips them | [default to undefined]
**title** | **string** |  | [optional] [default to undefined]
**type** | **string** |  | [default to undefined]
**source** | **string** |  | [default to undefined]
**productIds** | **Array&lt;string&gt;** | Required for source&#x3D;manual (1–24). Each must belong to this business. | [optional] [default to undefined]
**categoryId** | **string** | Required for source&#x3D;category. Must belong to this business. | [optional] [default to undefined]
**layout** | **string** |  | [default to undefined]
**limit** | **number** | Ignored for source&#x3D;manual | [optional] [default to 10]

## Example

```typescript
import { AppProductsSectionDto } from './api';

const instance: AppProductsSectionDto = {
    id,
    enabled,
    title,
    type,
    source,
    productIds,
    categoryId,
    layout,
    limit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
