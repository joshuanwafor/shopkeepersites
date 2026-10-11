# ImportCatalogItemDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**templateId** | **string** | Global-catalog template id | [default to undefined]
**sellingPrice** | **number** | Override selling price for this branch | [optional] [default to undefined]
**costPrice** | **number** | Override cost price for this branch | [optional] [default to undefined]
**stockQuantity** | **number** | Opening stock quantity | [optional] [default to 0]

## Example

```typescript
import { ImportCatalogItemDto } from './api';

const instance: ImportCatalogItemDto = {
    templateId,
    sellingPrice,
    costPrice,
    stockQuantity,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
