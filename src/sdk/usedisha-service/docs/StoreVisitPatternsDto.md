# StoreVisitPatternsDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**period** | **object** |  | [default to undefined]
**summary** | [**StoreVisitPatternsSummaryDto**](StoreVisitPatternsSummaryDto.md) |  | [default to undefined]
**timeline** | [**Array&lt;VisitTimelinePointDto&gt;**](VisitTimelinePointDto.md) | Daily view trend | [default to undefined]
**byHour** | [**Array&lt;VisitPatternBucketDto&gt;**](VisitPatternBucketDto.md) |  | [default to undefined]
**countries** | [**Array&lt;VisitPatternBucketDto&gt;**](VisitPatternBucketDto.md) |  | [default to undefined]
**cities** | [**Array&lt;VisitPatternBucketDto&gt;**](VisitPatternBucketDto.md) |  | [default to undefined]
**referrers** | [**Array&lt;VisitPatternBucketDto&gt;**](VisitPatternBucketDto.md) |  | [default to undefined]
**paths** | [**Array&lt;VisitPatternBucketDto&gt;**](VisitPatternBucketDto.md) |  | [default to undefined]
**devices** | [**Array&lt;VisitPatternBucketDto&gt;**](VisitPatternBucketDto.md) |  | [default to undefined]
**browsers** | [**Array&lt;VisitPatternBucketDto&gt;**](VisitPatternBucketDto.md) |  | [default to undefined]
**utmSources** | [**Array&lt;VisitPatternBucketDto&gt;**](VisitPatternBucketDto.md) |  | [default to undefined]

## Example

```typescript
import { StoreVisitPatternsDto } from './api';

const instance: StoreVisitPatternsDto = {
    period,
    summary,
    timeline,
    byHour,
    countries,
    cities,
    referrers,
    paths,
    devices,
    browsers,
    utmSources,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
