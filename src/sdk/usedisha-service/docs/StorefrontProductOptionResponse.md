# StorefrontProductOptionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**type** | **string** | How to show the values: select, multi, text, number, color (values are CSS colours) or size | [optional] [default to undefined]
**values** | **Array&lt;string&gt;** | Values in display order | [default to undefined]
**valueLabels** | **{ [key: string]: string; }** | For a colour option: each value\&#39;s colour name, for text (the value itself is the swatch) | [optional] [default to undefined]

## Example

```typescript
import { StorefrontProductOptionResponse } from './api';

const instance: StorefrontProductOptionResponse = {
    name,
    type,
    values,
    valueLabels,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
