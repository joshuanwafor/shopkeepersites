# ReportStoreVisitDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sessionId** | **string** | Stable session id from the storefront (localStorage). Used to group pageviews into sessions. | [optional] [default to undefined]
**visitorId** | **string** | Optional persistent visitor id from the storefront app | [optional] [default to undefined]
**path** | **string** | Page path visited | [optional] [default to undefined]
**referrer** | **string** |  | [optional] [default to undefined]
**language** | **string** |  | [optional] [default to undefined]
**timezone** | **string** |  | [optional] [default to undefined]
**location** | [**ReportVisitLocationDto**](ReportVisitLocationDto.md) |  | [optional] [default to undefined]
**device** | [**ReportVisitDeviceDto**](ReportVisitDeviceDto.md) |  | [optional] [default to undefined]
**utm** | [**ReportVisitUtmDto**](ReportVisitUtmDto.md) |  | [optional] [default to undefined]
**extra** | **{ [key: string]: any; }** | Any extra analytics fields from the storefront app | [optional] [default to undefined]

## Example

```typescript
import { ReportStoreVisitDto } from './api';

const instance: ReportStoreVisitDto = {
    sessionId,
    visitorId,
    path,
    referrer,
    language,
    timezone,
    location,
    device,
    utm,
    extra,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
