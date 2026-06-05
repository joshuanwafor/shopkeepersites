# UsedishaSystemAdminMarketsApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usedishaAdminMarketsControllerCreateV1**](#usedishaadminmarketscontrollercreatev1) | **POST** /v1/usedisha/usedisha/admin/markets | Create a market|
|[**usedishaAdminMarketsControllerDeactivateV1**](#usedishaadminmarketscontrollerdeactivatev1) | **DELETE** /v1/usedisha/usedisha/admin/markets/{id} | Deactivate a market|
|[**usedishaAdminMarketsControllerListV1**](#usedishaadminmarketscontrollerlistv1) | **GET** /v1/usedisha/usedisha/admin/markets | List markets (any status)|
|[**usedishaAdminMarketsControllerMembershipsV1**](#usedishaadminmarketscontrollermembershipsv1) | **GET** /v1/usedisha/usedisha/admin/markets/memberships | Membership moderation queue|
|[**usedishaAdminMarketsControllerReviewV1**](#usedishaadminmarketscontrollerreviewv1) | **PATCH** /v1/usedisha/usedisha/admin/markets/memberships/{id}/review | Approve or reject a branch listing|
|[**usedishaAdminMarketsControllerUpdateV1**](#usedishaadminmarketscontrollerupdatev1) | **PATCH** /v1/usedisha/usedisha/admin/markets/{id} | Update a market|

# **usedishaAdminMarketsControllerCreateV1**
> Market usedishaAdminMarketsControllerCreateV1(createMarketDto)


### Example

```typescript
import {
    UsedishaSystemAdminMarketsApi,
    Configuration,
    CreateMarketDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminMarketsApi(configuration);

let createMarketDto: CreateMarketDto; //

const { status, data } = await apiInstance.usedishaAdminMarketsControllerCreateV1(
    createMarketDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createMarketDto** | **CreateMarketDto**|  | |


### Return type

**Market**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Market created |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminMarketsControllerDeactivateV1**
> Market usedishaAdminMarketsControllerDeactivateV1()

Hides it from discovery; memberships are preserved.

### Example

```typescript
import {
    UsedishaSystemAdminMarketsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminMarketsApi(configuration);

let id: string; //Market ID (default to undefined)

const { status, data } = await apiInstance.usedishaAdminMarketsControllerDeactivateV1(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Market ID | defaults to undefined|


### Return type

**Market**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Deactivated market |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminMarketsControllerListV1**
> PaginatedMarketsResponse usedishaAdminMarketsControllerListV1()


### Example

```typescript
import {
    UsedishaSystemAdminMarketsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminMarketsApi(configuration);

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
let status: 'active' | 'inactive'; //Filter by status (admin only) (optional) (default to undefined)

const { status, data } = await apiInstance.usedishaAdminMarketsControllerListV1(
    page,
    limit,
    sortBy,
    sortOrder,
    state,
    city,
    lga,
    type,
    featured,
    search,
    status
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
| **status** | [**&#39;active&#39; | &#39;inactive&#39;**]**Array<&#39;active&#39; &#124; &#39;inactive&#39;>** | Filter by status (admin only) | (optional) defaults to undefined|


### Return type

**PaginatedMarketsResponse**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Paginated markets |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminMarketsControllerMembershipsV1**
> PaginatedMembershipsResponse usedishaAdminMarketsControllerMembershipsV1()

Branch listing requests; filter by status (e.g. pending) and/or market.

### Example

```typescript
import {
    UsedishaSystemAdminMarketsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminMarketsApi(configuration);

let page: number; // (optional) (default to undefined)
let limit: number; // (optional) (default to undefined)
let status: 'pending' | 'approved' | 'rejected'; //Filter by membership status (optional) (default to undefined)
let marketId: string; //Filter by market id (optional) (default to undefined)

const { status, data } = await apiInstance.usedishaAdminMarketsControllerMembershipsV1(
    page,
    limit,
    status,
    marketId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] |  | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to undefined|
| **status** | [**&#39;pending&#39; | &#39;approved&#39; | &#39;rejected&#39;**]**Array<&#39;pending&#39; &#124; &#39;approved&#39; &#124; &#39;rejected&#39;>** | Filter by membership status | (optional) defaults to undefined|
| **marketId** | [**string**] | Filter by market id | (optional) defaults to undefined|


### Return type

**PaginatedMembershipsResponse**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Paginated memberships |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminMarketsControllerReviewV1**
> MarketMembershipResponse usedishaAdminMarketsControllerReviewV1(reviewMembershipDto)


### Example

```typescript
import {
    UsedishaSystemAdminMarketsApi,
    Configuration,
    ReviewMembershipDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminMarketsApi(configuration);

let id: string; //Membership ID (default to undefined)
let reviewMembershipDto: ReviewMembershipDto; //

const { status, data } = await apiInstance.usedishaAdminMarketsControllerReviewV1(
    id,
    reviewMembershipDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reviewMembershipDto** | **ReviewMembershipDto**|  | |
| **id** | [**string**] | Membership ID | defaults to undefined|


### Return type

**MarketMembershipResponse**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated membership |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminMarketsControllerUpdateV1**
> Market usedishaAdminMarketsControllerUpdateV1(updateMarketDto)


### Example

```typescript
import {
    UsedishaSystemAdminMarketsApi,
    Configuration,
    UpdateMarketDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminMarketsApi(configuration);

let id: string; //Market ID (default to undefined)
let updateMarketDto: UpdateMarketDto; //

const { status, data } = await apiInstance.usedishaAdminMarketsControllerUpdateV1(
    id,
    updateMarketDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateMarketDto** | **UpdateMarketDto**|  | |
| **id** | [**string**] | Market ID | defaults to undefined|


### Return type

**Market**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated market |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

