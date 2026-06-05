# Market


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier (generated) | [default to undefined]
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
**status** | **string** |  | [default to StatusEnum_Active]
**featured** | **boolean** | Promoted/featured market | [optional] [default to false]
**storeCount** | **number** | Number of approved stores in this market | [optional] [default to 0]
**createdBy** | **string** | ID of the admin who created the market | [optional] [default to undefined]
**updatedBy** | **string** | ID of the admin who last updated the market | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [readonly] [default to undefined]
**updatedAt** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { Market } from './api';

const instance: Market = {
    id,
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
    status,
    featured,
    storeCount,
    createdBy,
    updatedBy,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
