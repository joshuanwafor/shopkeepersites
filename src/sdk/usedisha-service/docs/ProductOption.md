# ProductOption


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Stable id for this option, for editing/reordering | [default to undefined]
**name** | **string** | Option name (e.g. \&quot;Size\&quot;, \&quot;Color\&quot;) | [default to undefined]
**type** | **string** | UI hint for how to present this option\&#39;s values (e.g. swatches for color) | [optional] [default to TypeEnum_Select]
**values** | **Array&lt;string&gt;** | Ordered values for this option (array order &#x3D; display order) | [default to undefined]

## Example

```typescript
import { ProductOption } from './api';

const instance: ProductOption = {
    id,
    name,
    type,
    values,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
