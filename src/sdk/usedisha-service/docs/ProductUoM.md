# ProductUoM


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **string** | Label of the Unit of Measurement (e.g., \&quot;Box of 20\&quot;) | [default to undefined]
**symbol** | **string** | Symbol of the Unit of Measurement | [default to undefined]
**uomId** | **string** | Reference to the Global Unit of Measurement definition | [default to undefined]
**sellingPrice** | **number** | Selling price for this specific unit/packaging | [default to undefined]
**costPrice** | **number** | Cost price for this specific unit/packaging | [optional] [default to undefined]
**isPrimary** | **boolean** | Whether this is the primary unit used for stock tracking (Base) | [default to undefined]
**direction** | **string** | Direction relative to primary unit (MULTIPLE for bulk, SUBMULTIPLE for fractions) | [optional] [default to undefined]
**value** | **number** | The ratio value relative to the primary unit. If isPrimary is true, this is 1. | [optional] [default to undefined]
**isActive** | **boolean** | Status of this unit for this specific product | [optional] [default to undefined]

## Example

```typescript
import { ProductUoM } from './api';

const instance: ProductUoM = {
    label,
    symbol,
    uomId,
    sellingPrice,
    costPrice,
    isPrimary,
    direction,
    value,
    isActive,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
