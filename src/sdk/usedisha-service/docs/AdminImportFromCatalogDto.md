# AdminImportFromCatalogDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;ImportCatalogItemDto&gt;**](ImportCatalogItemDto.md) |  | [default to undefined]
**skipExisting** | **boolean** | Skip templates already present in the branch (by source / barcode / SKU). | [optional] [default to true]

## Example

```typescript
import { AdminImportFromCatalogDto } from './api';

const instance: AdminImportFromCatalogDto = {
    items,
    skipExisting,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
