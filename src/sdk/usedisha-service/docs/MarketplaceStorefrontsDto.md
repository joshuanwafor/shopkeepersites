# MarketplaceStorefrontsDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **number** |  | [default to undefined]
**featured** | **number** | Curated onto the marketplace home | [default to undefined]
**byStatus** | **{ [key: string]: number; }** |  | [default to undefined]
**byApprovalStatus** | **{ [key: string]: number; }** |  | [default to undefined]
**byCategory** | **{ [key: string]: number; }** |  | [default to undefined]

## Example

```typescript
import { MarketplaceStorefrontsDto } from './api';

const instance: MarketplaceStorefrontsDto = {
    total,
    featured,
    byStatus,
    byApprovalStatus,
    byCategory,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
