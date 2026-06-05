# StoreVisitPatternsSummaryDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalPageviews** | **number** |  | [default to undefined]
**uniqueVisitors** | **number** |  | [default to undefined]
**uniqueSessions** | **number** |  | [default to undefined]
**avgPageviewsPerDay** | **number** |  | [default to undefined]
**peakDay** | **string** |  | [optional] [default to undefined]
**peakHour** | **number** | UTC hour 0–23 with most traffic | [optional] [default to undefined]

## Example

```typescript
import { StoreVisitPatternsSummaryDto } from './api';

const instance: StoreVisitPatternsSummaryDto = {
    totalPageviews,
    uniqueVisitors,
    uniqueSessions,
    avgPageviewsPerDay,
    peakDay,
    peakHour,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
