# UsedishaMarketsApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usedishaMarketsControllerGetV1**](#usedishamarketscontrollergetv1) | **GET** /v1/usedisha/usedisha/markets/{idOrSlug} | Get a market by ID or slug|
|[**usedishaMarketsControllerListV1**](#usedishamarketscontrollerlistv1) | **GET** /v1/usedisha/usedisha/markets | List markets|
|[**usedishaMarketsControllerStoresV1**](#usedishamarketscontrollerstoresv1) | **GET** /v1/usedisha/usedisha/markets/{idOrSlug}/stores | List stores trading in a market|

# **usedishaMarketsControllerGetV1**
> Market usedishaMarketsControllerGetV1()


### Example

```typescript
import {
    UsedishaMarketsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaMarketsApi(configuration);

let idOrSlug: string; //Market ObjectId or slug (default to undefined)

const { status, data } = await apiInstance.usedishaMarketsControllerGetV1(
    idOrSlug
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **idOrSlug** | [**string**] | Market ObjectId or slug | defaults to undefined|


### Return type

**Market**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Market detail |  -  |
|**404** | Market not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaMarketsControllerListV1**
> PaginatedMarketsResponse usedishaMarketsControllerListV1()

Active markets, filterable by state / city / lga / type / search, paginated.

### Example

```typescript
import {
    UsedishaMarketsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaMarketsApi(configuration);

let page: number; // (optional) (default to undefined)
let limit: number; // (optional) (default to undefined)
let sortBy: string; // (optional) (default to undefined)
let sortOrder: 'asc' | 'desc'; // (optional) (default to undefined)
let state: string; //Filter by state (optional) (default to undefined)
let city: string; //Filter by city (optional) (default to undefined)
let lga: string; //Filter by LGA (optional) (default to undefined)
let type: 'general' | 'food' | 'electronics' | 'fashion' | 'building_materials' | 'agriculture' | 'auto_parts'; //Filter by market type (optional) (default to undefined)
let featured: boolean; //Return only featured markets (optional) (default to undefined)
let search: string; //Search by market name or description (optional) (default to undefined)

const { status, data } = await apiInstance.usedishaMarketsControllerListV1(
    page,
    limit,
    sortBy,
    sortOrder,
    state,
    city,
    lga,
    type,
    featured,
    search
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] |  | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to undefined|
| **sortBy** | [**string**] |  | (optional) defaults to undefined|
| **sortOrder** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** |  | (optional) defaults to undefined|
| **state** | [**string**] | Filter by state | (optional) defaults to undefined|
| **city** | [**string**] | Filter by city | (optional) defaults to undefined|
| **lga** | [**string**] | Filter by LGA | (optional) defaults to undefined|
| **type** | [**&#39;general&#39; | &#39;food&#39; | &#39;electronics&#39; | &#39;fashion&#39; | &#39;building_materials&#39; | &#39;agriculture&#39; | &#39;auto_parts&#39;**]**Array<&#39;general&#39; &#124; &#39;food&#39; &#124; &#39;electronics&#39; &#124; &#39;fashion&#39; &#124; &#39;building_materials&#39; &#124; &#39;agriculture&#39; &#124; &#39;auto_parts&#39;>** | Filter by market type | (optional) defaults to undefined|
| **featured** | [**boolean**] | Return only featured markets | (optional) defaults to undefined|
| **search** | [**string**] | Search by market name or description | (optional) defaults to undefined|


### Return type

**PaginatedMarketsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Paginated markets |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaMarketsControllerStoresV1**
> PaginatedMarketStoresResponse usedishaMarketsControllerStoresV1()

Storefronts with an approved branch in this market. Each item carries the store card and the in-market branch — pass that branchId to product/checkout calls to shop that branch.

### Example

```typescript
import {
    UsedishaMarketsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaMarketsApi(configuration);

let idOrSlug: string; //Market ObjectId or slug (default to undefined)
let page: number; // (optional) (default to undefined)
let limit: number; // (optional) (default to undefined)
let category: 'pharmacy' | 'supermarket' | 'restaurant' | 'grocery' | 'bakery' | 'butcher' | 'fruits_and_vegetables' | 'beverages' | 'snacks_and_confectionery' | 'household_supplies'; //Filter stores by category (optional) (default to undefined)
let q: string; //Search stores by name (optional) (default to undefined)

const { status, data } = await apiInstance.usedishaMarketsControllerStoresV1(
    idOrSlug,
    page,
    limit,
    category,
    q
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **idOrSlug** | [**string**] | Market ObjectId or slug | defaults to undefined|
| **page** | [**number**] |  | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to undefined|
| **category** | [**&#39;pharmacy&#39; | &#39;supermarket&#39; | &#39;restaurant&#39; | &#39;grocery&#39; | &#39;bakery&#39; | &#39;butcher&#39; | &#39;fruits_and_vegetables&#39; | &#39;beverages&#39; | &#39;snacks_and_confectionery&#39; | &#39;household_supplies&#39;**]**Array<&#39;pharmacy&#39; &#124; &#39;supermarket&#39; &#124; &#39;restaurant&#39; &#124; &#39;grocery&#39; &#124; &#39;bakery&#39; &#124; &#39;butcher&#39; &#124; &#39;fruits_and_vegetables&#39; &#124; &#39;beverages&#39; &#124; &#39;snacks_and_confectionery&#39; &#124; &#39;household_supplies&#39;>** | Filter stores by category | (optional) defaults to undefined|
| **q** | [**string**] | Search stores by name | (optional) defaults to undefined|


### Return type

**PaginatedMarketStoresResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Stores in the market |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

