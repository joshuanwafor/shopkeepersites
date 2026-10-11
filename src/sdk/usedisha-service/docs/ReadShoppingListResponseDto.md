# ReadShoppingListResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;ShoppingListItemDto&gt;**](ShoppingListItemDto.md) | Items read off the photo, in the order written (at most 20); empty when nothing could be read | [default to undefined]
**more** | **number** | Items read beyond the 20 a request can hold | [default to undefined]
**formattedBy** | **string** | Who turned the text into items | [default to undefined]

## Example

```typescript
import { ReadShoppingListResponseDto } from './api';

const instance: ReadShoppingListResponseDto = {
    items,
    more,
    formattedBy,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
