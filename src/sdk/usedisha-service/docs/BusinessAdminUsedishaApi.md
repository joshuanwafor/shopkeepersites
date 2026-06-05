# BusinessAdminUsedishaApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usedishaAdminControllerAddBranchV1**](#usedishaadmincontrolleraddbranchv1) | **POST** /v1/usedisha/{businessId}/usedisha/branches | Add a branch to the storefront|
|[**usedishaAdminControllerCheckDomainAvailabilityV1**](#usedishaadmincontrollercheckdomainavailabilityv1) | **GET** /v1/usedisha/{businessId}/usedisha/check-domain/{domain} | Check if domain is available|
|[**usedishaAdminControllerCreateUsedishaV1**](#usedishaadmincontrollercreateusedishav1) | **POST** /v1/usedisha/{businessId}/usedisha | Create usedisha profile for business|
|[**usedishaAdminControllerDeleteUsedishaV1**](#usedishaadmincontrollerdeleteusedishav1) | **DELETE** /v1/usedisha/{businessId}/usedisha | Delete/deactivate usedisha profile|
|[**usedishaAdminControllerGetStoreOverviewV1**](#usedishaadmincontrollergetstoreoverviewv1) | **GET** /v1/usedisha/{businessId}/usedisha/store-overview | Store overview dashboard metrics|
|[**usedishaAdminControllerGetStoreVisitHistoryV1**](#usedishaadmincontrollergetstorevisithistoryv1) | **GET** /v1/usedisha/{businessId}/usedisha/visit-history | Store visit history, trends, and traffic patterns|
|[**usedishaAdminControllerGetUsedishaV1**](#usedishaadmincontrollergetusedishav1) | **GET** /v1/usedisha/{businessId}/usedisha | Get usedisha profile for business|
|[**usedishaAdminControllerRemoveBranchV1**](#usedishaadmincontrollerremovebranchv1) | **DELETE** /v1/usedisha/{businessId}/usedisha/branches/{branchId} | Remove a branch from the storefront|
|[**usedishaAdminControllerUpdateBranchV1**](#usedishaadmincontrollerupdatebranchv1) | **PATCH** /v1/usedisha/{businessId}/usedisha/branches/{branchId} | Update a branch entry on the storefront|
|[**usedishaAdminControllerUpdateConfigV1**](#usedishaadmincontrollerupdateconfigv1) | **PUT** /v1/usedisha/{businessId}/usedisha/config | Update usedisha configuration|
|[**usedishaAdminControllerUpdateDeliveryConfigV1**](#usedishaadmincontrollerupdatedeliveryconfigv1) | **PUT** /v1/usedisha/{businessId}/usedisha/delivery-config | Update delivery configuration|
|[**usedishaAdminControllerUpdateDomainV1**](#usedishaadmincontrollerupdatedomainv1) | **PUT** /v1/usedisha/{businessId}/usedisha/domain | Update usedisha handle/domain|
|[**usedishaAdminControllerUpdateLocationV1**](#usedishaadmincontrollerupdatelocationv1) | **PUT** /v1/usedisha/{businessId}/usedisha/location | Update store coordinates|
|[**usedishaAdminControllerUpdateSocialMediaV1**](#usedishaadmincontrollerupdatesocialmediav1) | **PUT** /v1/usedisha/{businessId}/usedisha/social-media | Update usedisha social media links|
|[**usedishaAdminControllerUpdateThemeV1**](#usedishaadmincontrollerupdatethemev1) | **PUT** /v1/usedisha/{businessId}/usedisha/theme | Update usedisha theme settings|
|[**usedishaAdminControllerUpdateUsedishaV1**](#usedishaadmincontrollerupdateusedishav1) | **PUT** /v1/usedisha/{businessId}/usedisha | Update usedisha profile for business|

# **usedishaAdminControllerAddBranchV1**
> Usedisha usedishaAdminControllerAddBranchV1(createUsedishaBranchDto)

Registers a physical branch on this storefront for marketplace discovery. The branch must belong to the same business.

### Example

```typescript
import {
    BusinessAdminUsedishaApi,
    Configuration,
    CreateUsedishaBranchDto
} from './api';

const configuration = new Configuration();
const apiInstance = new BusinessAdminUsedishaApi(configuration);

let businessId: string; //Business ID (default to undefined)
let createUsedishaBranchDto: CreateUsedishaBranchDto; //

const { status, data } = await apiInstance.usedishaAdminControllerAddBranchV1(
    businessId,
    createUsedishaBranchDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createUsedishaBranchDto** | **CreateUsedishaBranchDto**|  | |
| **businessId** | [**string**] | Business ID | defaults to undefined|


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
|**201** | Branch added |  -  |
|**400** | Branch not found or belongs to a different business |  -  |
|**409** | Branch is already listed on this storefront |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminControllerCheckDomainAvailabilityV1**
> DomainAvailabilityResponse usedishaAdminControllerCheckDomainAvailabilityV1()


### Example

```typescript
import {
    BusinessAdminUsedishaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BusinessAdminUsedishaApi(configuration);

let domain: string; // (default to undefined)
let businessId: string; //Business ID (default to undefined)

const { status, data } = await apiInstance.usedishaAdminControllerCheckDomainAvailabilityV1(
    domain,
    businessId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **domain** | [**string**] |  | defaults to undefined|
| **businessId** | [**string**] | Business ID | defaults to undefined|


### Return type

**DomainAvailabilityResponse**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Domain availability checked |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminControllerCreateUsedishaV1**
> Usedisha usedishaAdminControllerCreateUsedishaV1(createUsedishaDto)


### Example

```typescript
import {
    BusinessAdminUsedishaApi,
    Configuration,
    CreateUsedishaDto
} from './api';

const configuration = new Configuration();
const apiInstance = new BusinessAdminUsedishaApi(configuration);

let businessId: string; //Business ID (default to undefined)
let createUsedishaDto: CreateUsedishaDto; //

const { status, data } = await apiInstance.usedishaAdminControllerCreateUsedishaV1(
    businessId,
    createUsedishaDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createUsedishaDto** | **CreateUsedishaDto**|  | |
| **businessId** | [**string**] | Business ID | defaults to undefined|


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
|**201** | Usedisha profile created successfully |  -  |
|**400** | Bad request - validation errors or business already has profile |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminControllerDeleteUsedishaV1**
> DeleteAckResponse usedishaAdminControllerDeleteUsedishaV1()


### Example

```typescript
import {
    BusinessAdminUsedishaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BusinessAdminUsedishaApi(configuration);

let businessId: string; //Business ID (default to undefined)

const { status, data } = await apiInstance.usedishaAdminControllerDeleteUsedishaV1(
    businessId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **businessId** | [**string**] | Business ID | defaults to undefined|


### Return type

**DeleteAckResponse**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Usedisha profile deleted successfully |  -  |
|**404** | Usedisha profile not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminControllerGetStoreOverviewV1**
> UsedishaStoreOverviewResponseDto usedishaAdminControllerGetStoreOverviewV1()

Lifetime totals (orders, revenue, products listed) and current calendar month stats (revenue growth vs prior month, new orders). Store/page views return 0 until server-side tracking is implemented.

### Example

```typescript
import {
    BusinessAdminUsedishaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BusinessAdminUsedishaApi(configuration);

let businessId: string; //Business ID (default to undefined)

const { status, data } = await apiInstance.usedishaAdminControllerGetStoreOverviewV1(
    businessId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **businessId** | [**string**] | Business ID | defaults to undefined|


### Return type

**UsedishaStoreOverviewResponseDto**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Store overview for the Usedisha profile on this business |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminControllerGetStoreVisitHistoryV1**
> StoreVisitHistoryResponseDto usedishaAdminControllerGetStoreVisitHistoryV1()

Session-aware view stats, daily timeline, peak hours, and breakdowns by country, referrer, path, and device for this business\'s storefront, plus a paginated recent-visit log.

### Example

```typescript
import {
    BusinessAdminUsedishaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BusinessAdminUsedishaApi(configuration);

let businessId: string; //Business ID (default to undefined)
let days: number; //Number of days to analyse for patterns (1–90) (optional) (default to 30)
let limit: number; //Recent visits page size (optional) (default to 20)
let nextToken: string; //Pagination cursor for recent visits (optional) (default to undefined)
let startTime: string; //Filter visits on or after this ISO timestamp (optional) (default to undefined)
let endTime: string; //Filter visits on or before this ISO timestamp (optional) (default to undefined)

const { status, data } = await apiInstance.usedishaAdminControllerGetStoreVisitHistoryV1(
    businessId,
    days,
    limit,
    nextToken,
    startTime,
    endTime
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **businessId** | [**string**] | Business ID | defaults to undefined|
| **days** | [**number**] | Number of days to analyse for patterns (1–90) | (optional) defaults to 30|
| **limit** | [**number**] | Recent visits page size | (optional) defaults to 20|
| **nextToken** | [**string**] | Pagination cursor for recent visits | (optional) defaults to undefined|
| **startTime** | [**string**] | Filter visits on or after this ISO timestamp | (optional) defaults to undefined|
| **endTime** | [**string**] | Filter visits on or before this ISO timestamp | (optional) defaults to undefined|


### Return type

**StoreVisitHistoryResponseDto**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Visit history and aggregate stats |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminControllerGetUsedishaV1**
> Usedisha usedishaAdminControllerGetUsedishaV1()


### Example

```typescript
import {
    BusinessAdminUsedishaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BusinessAdminUsedishaApi(configuration);

let businessId: string; //Business ID (default to undefined)

const { status, data } = await apiInstance.usedishaAdminControllerGetUsedishaV1(
    businessId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **businessId** | [**string**] | Business ID | defaults to undefined|


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
|**200** | Usedisha profile retrieved successfully |  -  |
|**404** | Usedisha profile not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminControllerRemoveBranchV1**
> Usedisha usedishaAdminControllerRemoveBranchV1()


### Example

```typescript
import {
    BusinessAdminUsedishaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BusinessAdminUsedishaApi(configuration);

let branchId: string; //Branch ID (ref to Branch document) (default to undefined)
let businessId: string; //Business ID (default to undefined)

const { status, data } = await apiInstance.usedishaAdminControllerRemoveBranchV1(
    branchId,
    businessId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **branchId** | [**string**] | Branch ID (ref to Branch document) | defaults to undefined|
| **businessId** | [**string**] | Business ID | defaults to undefined|


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
|**200** | Branch removed |  -  |
|**404** | Branch not found on this storefront |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminControllerUpdateBranchV1**
> Usedisha usedishaAdminControllerUpdateBranchV1(updateUsedishaBranchDto)


### Example

```typescript
import {
    BusinessAdminUsedishaApi,
    Configuration,
    UpdateUsedishaBranchDto
} from './api';

const configuration = new Configuration();
const apiInstance = new BusinessAdminUsedishaApi(configuration);

let branchId: string; //Branch ID (ref to Branch document) (default to undefined)
let businessId: string; //Business ID (default to undefined)
let updateUsedishaBranchDto: UpdateUsedishaBranchDto; //

const { status, data } = await apiInstance.usedishaAdminControllerUpdateBranchV1(
    branchId,
    businessId,
    updateUsedishaBranchDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateUsedishaBranchDto** | **UpdateUsedishaBranchDto**|  | |
| **branchId** | [**string**] | Branch ID (ref to Branch document) | defaults to undefined|
| **businessId** | [**string**] | Business ID | defaults to undefined|


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
|**200** | Branch updated |  -  |
|**404** | Branch not found on this storefront |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminControllerUpdateConfigV1**
> Usedisha usedishaAdminControllerUpdateConfigV1(usedishaConfig)


### Example

```typescript
import {
    BusinessAdminUsedishaApi,
    Configuration,
    UsedishaConfig
} from './api';

const configuration = new Configuration();
const apiInstance = new BusinessAdminUsedishaApi(configuration);

let businessId: string; //Business ID (default to undefined)
let usedishaConfig: UsedishaConfig; //

const { status, data } = await apiInstance.usedishaAdminControllerUpdateConfigV1(
    businessId,
    usedishaConfig
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **usedishaConfig** | **UsedishaConfig**|  | |
| **businessId** | [**string**] | Business ID | defaults to undefined|


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
|**200** | Configuration updated successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminControllerUpdateDeliveryConfigV1**
> Usedisha usedishaAdminControllerUpdateDeliveryConfigV1(updateUsedishaDeliveryConfigDto)

Sets which delivery methods the storefront offers (pickup / platformDelivery / businessDelivery) and the businessDelivery flat-fee pricing. `businessDelivery.fee` is required when businessDelivery is supported.

### Example

```typescript
import {
    BusinessAdminUsedishaApi,
    Configuration,
    UpdateUsedishaDeliveryConfigDto
} from './api';

const configuration = new Configuration();
const apiInstance = new BusinessAdminUsedishaApi(configuration);

let businessId: string; //Business ID (default to undefined)
let updateUsedishaDeliveryConfigDto: UpdateUsedishaDeliveryConfigDto; //

const { status, data } = await apiInstance.usedishaAdminControllerUpdateDeliveryConfigV1(
    businessId,
    updateUsedishaDeliveryConfigDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateUsedishaDeliveryConfigDto** | **UpdateUsedishaDeliveryConfigDto**|  | |
| **businessId** | [**string**] | Business ID | defaults to undefined|


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
|**200** | Delivery configuration updated |  -  |
|**400** | businessDelivery.fee is required when businessDelivery is supported |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminControllerUpdateDomainV1**
> Usedisha usedishaAdminControllerUpdateDomainV1(body)


### Example

```typescript
import {
    BusinessAdminUsedishaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BusinessAdminUsedishaApi(configuration);

let businessId: string; //Business ID (default to undefined)
let body: object; //

const { status, data } = await apiInstance.usedishaAdminControllerUpdateDomainV1(
    businessId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **businessId** | [**string**] | Business ID | defaults to undefined|


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
|**200** | Domain updated successfully |  -  |
|**400** | Domain is invalid or already taken |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminControllerUpdateLocationV1**
> Usedisha usedishaAdminControllerUpdateLocationV1(usedishaLocation)


### Example

```typescript
import {
    BusinessAdminUsedishaApi,
    Configuration,
    UsedishaLocation
} from './api';

const configuration = new Configuration();
const apiInstance = new BusinessAdminUsedishaApi(configuration);

let businessId: string; //Business ID (default to undefined)
let usedishaLocation: UsedishaLocation; //

const { status, data } = await apiInstance.usedishaAdminControllerUpdateLocationV1(
    businessId,
    usedishaLocation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **usedishaLocation** | **UsedishaLocation**|  | |
| **businessId** | [**string**] | Business ID | defaults to undefined|


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
|**200** | Location updated successfully |  -  |
|**404** | Usedisha profile not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminControllerUpdateSocialMediaV1**
> Usedisha usedishaAdminControllerUpdateSocialMediaV1(uDSocialMediaLinks)


### Example

```typescript
import {
    BusinessAdminUsedishaApi,
    Configuration,
    UDSocialMediaLinks
} from './api';

const configuration = new Configuration();
const apiInstance = new BusinessAdminUsedishaApi(configuration);

let businessId: string; //Business ID (default to undefined)
let uDSocialMediaLinks: UDSocialMediaLinks; //

const { status, data } = await apiInstance.usedishaAdminControllerUpdateSocialMediaV1(
    businessId,
    uDSocialMediaLinks
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uDSocialMediaLinks** | **UDSocialMediaLinks**|  | |
| **businessId** | [**string**] | Business ID | defaults to undefined|


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
|**200** | Social media links updated successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminControllerUpdateThemeV1**
> Usedisha usedishaAdminControllerUpdateThemeV1(uDThemeSettings)


### Example

```typescript
import {
    BusinessAdminUsedishaApi,
    Configuration,
    UDThemeSettings
} from './api';

const configuration = new Configuration();
const apiInstance = new BusinessAdminUsedishaApi(configuration);

let businessId: string; //Business ID (default to undefined)
let uDThemeSettings: UDThemeSettings; //

const { status, data } = await apiInstance.usedishaAdminControllerUpdateThemeV1(
    businessId,
    uDThemeSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uDThemeSettings** | **UDThemeSettings**|  | |
| **businessId** | [**string**] | Business ID | defaults to undefined|


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
|**200** | Theme updated successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminControllerUpdateUsedishaV1**
> Usedisha usedishaAdminControllerUpdateUsedishaV1(updateUsedishaDto)


### Example

```typescript
import {
    BusinessAdminUsedishaApi,
    Configuration,
    UpdateUsedishaDto
} from './api';

const configuration = new Configuration();
const apiInstance = new BusinessAdminUsedishaApi(configuration);

let businessId: string; //Business ID (default to undefined)
let updateUsedishaDto: UpdateUsedishaDto; //

const { status, data } = await apiInstance.usedishaAdminControllerUpdateUsedishaV1(
    businessId,
    updateUsedishaDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateUsedishaDto** | **UpdateUsedishaDto**|  | |
| **businessId** | [**string**] | Business ID | defaults to undefined|


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
|**200** | Usedisha profile updated successfully |  -  |
|**404** | Usedisha profile not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

