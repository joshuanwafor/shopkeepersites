# PerishabilityRulesDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_short** | [**PerishabilityHoursDto**](PerishabilityHoursDto.md) | Bread, fresh produce | [default to undefined]
**chilled** | [**PerishabilityHoursDto**](PerishabilityHoursDto.md) | Meat, fish, dairy (cold-packed) | [default to undefined]
**frozen** | [**PerishabilityHoursDto**](PerishabilityHoursDto.md) | Frozen goods (cold-packed) | [default to undefined]

## Example

```typescript
import { PerishabilityRulesDto } from './api';

const instance: PerishabilityRulesDto = {
    _short,
    chilled,
    frozen,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
