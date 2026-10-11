# AdminCreateBranchCategoryDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the taxonomy node | [optional] [default to undefined]
**slug** | **string** | Slug for the taxonomy node | [default to undefined]
**description** | **string** | Description of the taxonomy node | [optional] [default to undefined]
**parentId** | **string** | Parent taxonomy node ID | [optional] [default to undefined]
**type** | **string** | Type of the taxonomy node | [default to undefined]
**level** | **number** | Level in the taxonomy tree (0 for root) | [default to undefined]
**order** | **number** | Order within the same level | [default to undefined]
**imageUrl** | **string** | Image URL for the taxonomy node | [optional] [default to undefined]
**metadata** | **object** | Additional metadata for the taxonomy node | [optional] [default to undefined]

## Example

```typescript
import { AdminCreateBranchCategoryDto } from './api';

const instance: AdminCreateBranchCategoryDto = {
    name,
    slug,
    description,
    parentId,
    type,
    level,
    order,
    imageUrl,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
