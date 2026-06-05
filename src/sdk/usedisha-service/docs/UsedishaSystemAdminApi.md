# UsedishaSystemAdminApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usedishaSystemAdminControllerGetStorefrontV1**](#usedishasystemadmincontrollergetstorefrontv1) | **GET** /v1/usedisha/usedisha/admin/stores/{id} | Get any storefront by ID (any status)|
|[**usedishaSystemAdminControllerListStorefrontsV1**](#usedishasystemadmincontrollerliststorefrontsv1) | **GET** /v1/usedisha/usedisha/admin/stores | List all storefronts|
|[**usedishaSystemAdminControllerOverviewV1**](#usedishasystemadmincontrolleroverviewv1) | **GET** /v1/usedisha/usedisha/admin/overview | Platform overview metrics|
|[**usedishaSystemAdminControllerSetApprovalV1**](#usedishasystemadmincontrollersetapprovalv1) | **PATCH** /v1/usedisha/usedisha/admin/stores/{id}/approval | Approve or reject a storefront|
|[**usedishaSystemAdminControllerSetMarketplaceFieldsV1**](#usedishasystemadmincontrollersetmarketplacefieldsv1) | **PATCH** /v1/usedisha/usedisha/admin/stores/{id}/marketplace | Curate marketplace fields|
|[**usedishaSystemAdminControllerSetStatusV1**](#usedishasystemadmincontrollersetstatusv1) | **PATCH** /v1/usedisha/usedisha/admin/stores/{id}/status | Suspend / reactivate a storefront|

# **usedishaSystemAdminControllerGetStorefrontV1**
> Usedisha usedishaSystemAdminControllerGetStorefrontV1()


### Example

```typescript
import {
    UsedishaSystemAdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminApi(configuration);

let id: string; //Storefront MongoDB ID (default to undefined)

const { status, data } = await apiInstance.usedishaSystemAdminControllerGetStorefrontV1(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Storefront MongoDB ID | defaults to undefined|


### Return type

**Usedisha**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Storefront document |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSystemAdminControllerListStorefrontsV1**
> PaginatedStorefrontsResponse usedishaSystemAdminControllerListStorefrontsV1()

Paginated listing of every storefront across all businesses, in any status. Filter by status, approvalStatus, category, featured, or free-text search.

### Example

```typescript
import {
    UsedishaSystemAdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminApi(configuration);

let page: number; // (optional) (default to undefined)
let limit: number; // (optional) (default to undefined)
let sortBy: string; // (optional) (default to undefined)
let sortOrder: 'asc' | 'desc'; // (optional) (default to undefined)
let status: 'active' | 'inactive' | 'pending_approval' | 'suspended' | 'deleted'; //Filter by storefront status (optional) (default to undefined)
let approvalStatus: 'pending' | 'approved' | 'rejected'; //Filter by approval status (optional) (default to undefined)
let category: 'pharmacy' | 'supermarket' | 'restaurant' | 'grocery' | 'bakery' | 'butcher' | 'fruits_and_vegetables' | 'beverages' | 'snacks_and_confectionery' | 'household_supplies'; //Filter by a Shopmenu category (optional) (default to undefined)
let featured: boolean; //Return only featured/promoted stores (optional) (default to undefined)
let search: string; //Search by store name, domain, description or tags (optional) (default to undefined)

const { status, data } = await apiInstance.usedishaSystemAdminControllerListStorefrontsV1(
    page,
    limit,
    sortBy,
    sortOrder,
    status,
    approvalStatus,
    category,
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
| **status** | [**&#39;active&#39; | &#39;inactive&#39; | &#39;pending_approval&#39; | &#39;suspended&#39; | &#39;deleted&#39;**]**Array<&#39;active&#39; &#124; &#39;inactive&#39; &#124; &#39;pending_approval&#39; &#124; &#39;suspended&#39; &#124; &#39;deleted&#39;>** | Filter by storefront status | (optional) defaults to undefined|
| **approvalStatus** | [**&#39;pending&#39; | &#39;approved&#39; | &#39;rejected&#39;**]**Array<&#39;pending&#39; &#124; &#39;approved&#39; &#124; &#39;rejected&#39;>** | Filter by approval status | (optional) defaults to undefined|
| **category** | [**&#39;pharmacy&#39; | &#39;supermarket&#39; | &#39;restaurant&#39; | &#39;grocery&#39; | &#39;bakery&#39; | &#39;butcher&#39; | &#39;fruits_and_vegetables&#39; | &#39;beverages&#39; | &#39;snacks_and_confectionery&#39; | &#39;household_supplies&#39;**]**Array<&#39;pharmacy&#39; &#124; &#39;supermarket&#39; &#124; &#39;restaurant&#39; &#124; &#39;grocery&#39; &#124; &#39;bakery&#39; &#124; &#39;butcher&#39; &#124; &#39;fruits_and_vegetables&#39; &#124; &#39;beverages&#39; &#124; &#39;snacks_and_confectionery&#39; &#124; &#39;household_supplies&#39;>** | Filter by a Shopmenu category | (optional) defaults to undefined|
| **featured** | [**boolean**] | Return only featured/promoted stores | (optional) defaults to undefined|
| **search** | [**string**] | Search by store name, domain, description or tags | (optional) defaults to undefined|


### Return type

**PaginatedStorefrontsResponse**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Paginated storefronts |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSystemAdminControllerOverviewV1**
> UsedishaPlatformOverviewResponseDto usedishaSystemAdminControllerOverviewV1()

Storefront counts by status, approval status and category, plus totals.

### Example

```typescript
import {
    UsedishaSystemAdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminApi(configuration);

const { status, data } = await apiInstance.usedishaSystemAdminControllerOverviewV1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**UsedishaPlatformOverviewResponseDto**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Aggregate platform counts |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSystemAdminControllerSetApprovalV1**
> Usedisha usedishaSystemAdminControllerSetApprovalV1(adminSetApprovalDto)

Sets approvalStatus to gate the store on/off the marketplace.

### Example

```typescript
import {
    UsedishaSystemAdminApi,
    Configuration,
    AdminSetApprovalDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminApi(configuration);

let id: string; //Storefront MongoDB ID (default to undefined)
let adminSetApprovalDto: AdminSetApprovalDto; //

const { status, data } = await apiInstance.usedishaSystemAdminControllerSetApprovalV1(
    id,
    adminSetApprovalDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminSetApprovalDto** | **AdminSetApprovalDto**|  | |
| **id** | [**string**] | Storefront MongoDB ID | defaults to undefined|


### Return type

**Usedisha**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated storefront |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSystemAdminControllerSetMarketplaceFieldsV1**
> Usedisha usedishaSystemAdminControllerSetMarketplaceFieldsV1(adminUpdateMarketplaceDto)

Toggle featured and set priceRange, tags, minimumOrderAmount, estimatedDeliveryTime.

### Example

```typescript
import {
    UsedishaSystemAdminApi,
    Configuration,
    AdminUpdateMarketplaceDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminApi(configuration);

let id: string; //Storefront MongoDB ID (default to undefined)
let adminUpdateMarketplaceDto: AdminUpdateMarketplaceDto; //

const { status, data } = await apiInstance.usedishaSystemAdminControllerSetMarketplaceFieldsV1(
    id,
    adminUpdateMarketplaceDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminUpdateMarketplaceDto** | **AdminUpdateMarketplaceDto**|  | |
| **id** | [**string**] | Storefront MongoDB ID | defaults to undefined|


### Return type

**Usedisha**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated storefront |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSystemAdminControllerSetStatusV1**
> Usedisha usedishaSystemAdminControllerSetStatusV1(adminSetStatusDto)

Forces the storefront lifecycle status (e.g. suspended, active).

### Example

```typescript
import {
    UsedishaSystemAdminApi,
    Configuration,
    AdminSetStatusDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminApi(configuration);

let id: string; //Storefront MongoDB ID (default to undefined)
let adminSetStatusDto: AdminSetStatusDto; //

const { status, data } = await apiInstance.usedishaSystemAdminControllerSetStatusV1(
    id,
    adminSetStatusDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminSetStatusDto** | **AdminSetStatusDto**|  | |
| **id** | [**string**] | Storefront MongoDB ID | defaults to undefined|


### Return type

**Usedisha**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated storefront |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

