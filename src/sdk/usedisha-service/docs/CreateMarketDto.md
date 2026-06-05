# CreateMarketDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Market name | [default to undefined]
**slug** | **string** | URL-friendly unique slug | [default to undefined]
**type** | **string** | Market classification | [optional] [default to undefined]
**country** | **string** | Country | [default to undefined]
**state** | **string** | State / province | [default to undefined]
**city** | **string** | City | [default to undefined]
**lga** | **string** | Local Government Area | [optional] [default to undefined]
**location** | [**UsedishaLocation**](UsedishaLocation.md) | Market centroid as a GeoJSON Point [longitude, latitude] | [optional] [default to undefined]
**description** | **string** | Market description | [optional] [default to undefined]
**logo** | **string** | Market logo URL | [optional] [default to undefined]
**coverPhoto** | **string** | Market cover photo URL | [optional] [default to undefined]
**featured** | **boolean** | Promoted/featured market | [optional] [default to false]

## Example

```typescript
import { CreateMarketDto } from './api';

const instance: CreateMarketDto = {
    name,
    slug,
    type,
    country,
    state,
    city,
    lga,
    location,
    description,
    logo,
    coverPhoto,
    featured,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
