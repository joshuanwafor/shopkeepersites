# UsedishaClientApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usedishaClientControllerCreateStorefrontReviewV1**](#usedishaclientcontrollercreatestorefrontreviewv1) | **POST** /v1/usedisha/usedisha/{domain}/reviews | Submit a review for the storefront|
|[**usedishaClientControllerGetHomeLayoutV1**](#usedishaclientcontrollergethomelayoutv1) | **GET** /v1/usedisha/usedisha/shopmenu/home-layout | ShopCentral home layout|
|[**usedishaClientControllerGetStorefrontAverageRatingV1**](#usedishaclientcontrollergetstorefrontaverageratingv1) | **GET** /v1/usedisha/usedisha/{domain}/reviews/average-rating | Get average rating for the storefront|
|[**usedishaClientControllerGetStorefrontBranchDetailV1**](#usedishaclientcontrollergetstorefrontbranchdetailv1) | **GET** /v1/usedisha/usedisha/{domain}/branches/{branchId} | Get a selected branch detail (address + opening hours)|
|[**usedishaClientControllerGetStorefrontBranchesV1**](#usedishaclientcontrollergetstorefrontbranchesv1) | **GET** /v1/usedisha/usedisha/{domain}/branches | List active branches for a storefront|
|[**usedishaClientControllerGetStorefrontByIdV1**](#usedishaclientcontrollergetstorefrontbyidv1) | **GET** /v1/usedisha/usedisha/store/{id} | Get storefront profile by ID|
|[**usedishaClientControllerGetStorefrontCategoriesV1**](#usedishaclientcontrollergetstorefrontcategoriesv1) | **GET** /v1/usedisha/usedisha/{domain}/categories | Get storefront categories|
|[**usedishaClientControllerGetStorefrontCategoryV1**](#usedishaclientcontrollergetstorefrontcategoryv1) | **GET** /v1/usedisha/usedisha/{domain}/categories/{categoryId} | Get single category details|
|[**usedishaClientControllerGetStorefrontProductV1**](#usedishaclientcontrollergetstorefrontproductv1) | **GET** /v1/usedisha/usedisha/{domain}/products/{productId} | Get single product details|
|[**usedishaClientControllerGetStorefrontProductsV1**](#usedishaclientcontrollergetstorefrontproductsv1) | **GET** /v1/usedisha/usedisha/{domain}/products | Get storefront products|
|[**usedishaClientControllerGetStorefrontProfileV1**](#usedishaclientcontrollergetstorefrontprofilev1) | **GET** /v1/usedisha/usedisha/{domain} | Get storefront profile by domain|
|[**usedishaClientControllerGetStorefrontReviewCountV1**](#usedishaclientcontrollergetstorefrontreviewcountv1) | **GET** /v1/usedisha/usedisha/{domain}/reviews/count | Get approved review count for the storefront|
|[**usedishaClientControllerGetStorefrontReviewReplyV1**](#usedishaclientcontrollergetstorefrontreviewreplyv1) | **GET** /v1/usedisha/usedisha/{domain}/reviews/{reviewId}/reply | Get reply for a storefront review|
|[**usedishaClientControllerGetStorefrontReviewV1**](#usedishaclientcontrollergetstorefrontreviewv1) | **GET** /v1/usedisha/usedisha/{domain}/reviews/{reviewId} | Get a single storefront review|
|[**usedishaClientControllerGetStorefrontReviewsV1**](#usedishaclientcontrollergetstorefrontreviewsv1) | **GET** /v1/usedisha/usedisha/{domain}/reviews | Get approved reviews for the storefront|
|[**usedishaClientControllerGetStoresByCategoryV1**](#usedishaclientcontrollergetstoresbycategoryv1) | **GET** /v1/usedisha/usedisha/shopmenu/stores | List Shopmenu-listed stores|
|[**usedishaClientControllerRecordStoreVisitV1**](#usedishaclientcontrollerrecordstorevisitv1) | **POST** /v1/usedisha/usedisha/store/{id}/visit | Record a storefront visit (recommended for SPAs)|
|[**usedishaClientControllerSubmitClaimV1**](#usedishaclientcontrollersubmitclaimv1) | **POST** /v1/usedisha/usedisha/store/{id}/claim | Submit a claim to take ownership of a storefront|
|[**usedishaClientControllerUploadClaimDocumentV1**](#usedishaclientcontrolleruploadclaimdocumentv1) | **POST** /v1/usedisha/usedisha/store/{id}/claim-document | Upload a registration document for a store claim|
|[**usedishaShopmenuProductsControllerProductsV1**](#usedishashopmenuproductscontrollerproductsv1) | **GET** /v1/usedisha/usedisha/shopmenu/products | Products for a ShopCentral home section|
|[**usedishaShopmenuServiceAreasControllerJoinV1**](#usedishashopmenuserviceareascontrollerjoinv1) | **POST** /v1/usedisha/usedisha/shopmenu/waitlist | Join the waitlist for a state|
|[**usedishaShopmenuServiceAreasControllerListV1**](#usedishashopmenuserviceareascontrollerlistv1) | **GET** /v1/usedisha/usedisha/shopmenu/service-areas | Where ShopCentral trades|

# **usedishaClientControllerCreateStorefrontReviewV1**
> CreateStorefrontReviewResponse usedishaClientControllerCreateStorefrontReviewV1(createStorefrontReviewDto)


### Example

```typescript
import {
    UsedishaClientApi,
    Configuration,
    CreateStorefrontReviewDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaClientApi(configuration);

let domain: string; //Storefront domain (default to undefined)
let createStorefrontReviewDto: CreateStorefrontReviewDto; //

const { status, data } = await apiInstance.usedishaClientControllerCreateStorefrontReviewV1(
    domain,
    createStorefrontReviewDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createStorefrontReviewDto** | **CreateStorefrontReviewDto**|  | |
| **domain** | [**string**] | Storefront domain | defaults to undefined|


### Return type

**CreateStorefrontReviewResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Review submitted (pending moderation) |  -  |
|**400** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaClientControllerGetHomeLayoutV1**
> usedishaClientControllerGetHomeLayoutV1()

Picks one home template for the shopper (live templates whose schedule and rules match, highest priority first, ties to the most recently updated, else the default) and returns its enabled, in-schedule sections for this shopper: section audience (states, excludeStates, areaStatus, shoppers, locationKnown, and platforms when sent), serving rules and text tokens are applied here; `modes` is left to the client. Section types newer than the client’s `contract` are left out. `sections` is null when the default is chosen and has none. `area` is the shopper\'s service area. All query parameters are optional; invalid values count as unknown. Cacheable for 60 seconds. See docs/SHOPCENTRAL-HOME-LAYOUT.md.

### Example

```typescript
import {
    UsedishaClientApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaClientApi(configuration);

let locationKnown: 'true' | 'false'; //The shopper has an address, a saved area or a pin. Omitted: true when state is sent. (optional) (default to undefined)
let city: any; //The shopper\'s city or area (≤ 40): the {city} token and city targeting (optional) (default to undefined)
let shopper: 'guest' | 'new' | 'returning'; // (optional) (default to undefined)
let state: any; //Nigerian state of the delivery address, e.g. Lagos or FCT (optional) (default to undefined)
let platform: 'ios' | 'android' | 'web'; // (optional) (default to undefined)
let mode: any; //\'all\', \'mall\' or a shopping category (optional) (default to undefined)
let contract: number; //The home-layout contract the client was built to (4 for v4). Omitted: 3 when locationKnown is sent, else 2. (optional) (default to undefined)

const { status, data } = await apiInstance.usedishaClientControllerGetHomeLayoutV1(
    locationKnown,
    city,
    shopper,
    state,
    platform,
    mode,
    contract
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **locationKnown** | [**&#39;true&#39; | &#39;false&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** | The shopper has an address, a saved area or a pin. Omitted: true when state is sent. | (optional) defaults to undefined|
| **city** | **any** | The shopper\&#39;s city or area (≤ 40): the {city} token and city targeting | (optional) defaults to undefined|
| **shopper** | [**&#39;guest&#39; | &#39;new&#39; | &#39;returning&#39;**]**Array<&#39;guest&#39; &#124; &#39;new&#39; &#124; &#39;returning&#39;>** |  | (optional) defaults to undefined|
| **state** | **any** | Nigerian state of the delivery address, e.g. Lagos or FCT | (optional) defaults to undefined|
| **platform** | [**&#39;ios&#39; | &#39;android&#39; | &#39;web&#39;**]**Array<&#39;ios&#39; &#124; &#39;android&#39; &#124; &#39;web&#39;>** |  | (optional) defaults to undefined|
| **mode** | **any** | \&#39;all\&#39;, \&#39;mall\&#39; or a shopping category | (optional) defaults to undefined|
| **contract** | [**number**] | The home-layout contract the client was built to (4 for v4). Omitted: 3 when locationKnown is sent, else 2. | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | { templateId, version, updatedAt, sections: HomeSection[] | null, area: { status, state?, city?, cities?, launchLabel?, deliveryFrom?, freeDeliveryOver? } } |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaClientControllerGetStorefrontAverageRatingV1**
> StorefrontAverageRatingResponse usedishaClientControllerGetStorefrontAverageRatingV1()


### Example

```typescript
import {
    UsedishaClientApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaClientApi(configuration);

let domain: string; //Storefront domain (default to undefined)

const { status, data } = await apiInstance.usedishaClientControllerGetStorefrontAverageRatingV1(
    domain
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **domain** | [**string**] | Storefront domain | defaults to undefined|


### Return type

**StorefrontAverageRatingResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Average rating |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaClientControllerGetStorefrontBranchDetailV1**
> StorefrontBranchDetailResponse usedishaClientControllerGetStorefrontBranchDetailV1()

Returns the selected branch, including its full address and opening hours. These come from the canonical Branch record (not the storefront profile), and should be fetched once the shopper picks a branch.

### Example

```typescript
import {
    UsedishaClientApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaClientApi(configuration);

let domain: string; //Storefront domain (default to undefined)
let branchId: string; //Selected branch ID (default to undefined)

const { status, data } = await apiInstance.usedishaClientControllerGetStorefrontBranchDetailV1(
    domain,
    branchId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **domain** | [**string**] | Storefront domain | defaults to undefined|
| **branchId** | [**string**] | Selected branch ID | defaults to undefined|


### Return type

**StorefrontBranchDetailResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Branch detail |  -  |
|**404** | Storefront or branch not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaClientControllerGetStorefrontBranchesV1**
> StorefrontBranchesResponse usedishaClientControllerGetStorefrontBranchesV1()

Returns all active branches registered on this storefront. Use this to render the branch picker — pass the selected `branchId` as context for subsequent product and checkout calls. Optionally provide `lat` + `lng` to receive a `distanceKm` field on each branch.

### Example

```typescript
import {
    UsedishaClientApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaClientApi(configuration);

let domain: string; //Storefront domain (default to undefined)
let lat: number; // (optional) (default to undefined)
let lng: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.usedishaClientControllerGetStorefrontBranchesV1(
    domain,
    lat,
    lng
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **domain** | [**string**] | Storefront domain | defaults to undefined|
| **lat** | [**number**] |  | (optional) defaults to undefined|
| **lng** | [**number**] |  | (optional) defaults to undefined|


### Return type

**StorefrontBranchesResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Active branches |  -  |
|**404** | Storefront not found or inactive |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaClientControllerGetStorefrontByIdV1**
> ShopmenuStoreResponse usedishaClientControllerGetStorefrontByIdV1()

Returns the public profile of an active storefront by its MongoDB ID.

### Example

```typescript
import {
    UsedishaClientApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaClientApi(configuration);

let id: string; //Storefront MongoDB ID (default to undefined)

const { status, data } = await apiInstance.usedishaClientControllerGetStorefrontByIdV1(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Storefront MongoDB ID | defaults to undefined|


### Return type

**ShopmenuStoreResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Storefront profile |  -  |
|**404** | Storefront not found or inactive |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaClientControllerGetStorefrontCategoriesV1**
> StorefrontCategoriesResponse usedishaClientControllerGetStorefrontCategoriesV1()


### Example

```typescript
import {
    UsedishaClientApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaClientApi(configuration);

let domain: string; //Storefront domain (default to undefined)
let search: string; //Search categories by name (optional) (default to undefined)
let branchId: string; //Branch to shop from (defaults to the storefront default branch) (optional) (default to undefined)

const { status, data } = await apiInstance.usedishaClientControllerGetStorefrontCategoriesV1(
    domain,
    search,
    branchId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **domain** | [**string**] | Storefront domain | defaults to undefined|
| **search** | [**string**] | Search categories by name | (optional) defaults to undefined|
| **branchId** | [**string**] | Branch to shop from (defaults to the storefront default branch) | (optional) defaults to undefined|


### Return type

**StorefrontCategoriesResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Categories retrieved successfully |  -  |
|**404** | Storefront not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaClientControllerGetStorefrontCategoryV1**
> StorefrontCategoryResponse usedishaClientControllerGetStorefrontCategoryV1()


### Example

```typescript
import {
    UsedishaClientApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaClientApi(configuration);

let domain: string; //Storefront domain (default to undefined)
let categoryId: string; //Category ID (default to undefined)
let branchId: string; //Branch to shop from (defaults to the storefront default branch) (optional) (default to undefined)

const { status, data } = await apiInstance.usedishaClientControllerGetStorefrontCategoryV1(
    domain,
    categoryId,
    branchId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **domain** | [**string**] | Storefront domain | defaults to undefined|
| **categoryId** | [**string**] | Category ID | defaults to undefined|
| **branchId** | [**string**] | Branch to shop from (defaults to the storefront default branch) | (optional) defaults to undefined|


### Return type

**StorefrontCategoryResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Category details retrieved successfully |  -  |
|**404** | Category not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaClientControllerGetStorefrontProductV1**
> StorefrontProductDetailResponse usedishaClientControllerGetStorefrontProductV1()


### Example

```typescript
import {
    UsedishaClientApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaClientApi(configuration);

let domain: string; //Storefront domain (default to undefined)
let productId: string; //Product ID (default to undefined)
let branchId: string; //Branch to shop from (defaults to the storefront default branch) (optional) (default to undefined)

const { status, data } = await apiInstance.usedishaClientControllerGetStorefrontProductV1(
    domain,
    productId,
    branchId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **domain** | [**string**] | Storefront domain | defaults to undefined|
| **productId** | [**string**] | Product ID | defaults to undefined|
| **branchId** | [**string**] | Branch to shop from (defaults to the storefront default branch) | (optional) defaults to undefined|


### Return type

**StorefrontProductDetailResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Product details retrieved successfully |  -  |
|**404** | Product not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaClientControllerGetStorefrontProductsV1**
> PaginatedStorefrontProductsResponse usedishaClientControllerGetStorefrontProductsV1()


### Example

```typescript
import {
    UsedishaClientApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaClientApi(configuration);

let domain: string; //Storefront domain (default to undefined)
let category: string; //Filter by category ID (optional) (default to undefined)
let search: string; //Search products by name (optional) (default to undefined)
let sortBy: string; //Sort by field (name, price, createdAt) (optional) (default to undefined)
let sortOrder: string; //Sort order (asc, desc) (optional) (default to undefined)
let branchId: string; //Branch to shop from (defaults to the storefront default branch) (optional) (default to undefined)
let page: number; //Page (1-based, default 1) (optional) (default to undefined)
let limit: number; //Page size (default 25, max 100) (optional) (default to undefined)

const { status, data } = await apiInstance.usedishaClientControllerGetStorefrontProductsV1(
    domain,
    category,
    search,
    sortBy,
    sortOrder,
    branchId,
    page,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **domain** | [**string**] | Storefront domain | defaults to undefined|
| **category** | [**string**] | Filter by category ID | (optional) defaults to undefined|
| **search** | [**string**] | Search products by name | (optional) defaults to undefined|
| **sortBy** | [**string**] | Sort by field (name, price, createdAt) | (optional) defaults to undefined|
| **sortOrder** | [**string**] | Sort order (asc, desc) | (optional) defaults to undefined|
| **branchId** | [**string**] | Branch to shop from (defaults to the storefront default branch) | (optional) defaults to undefined|
| **page** | [**number**] | Page (1-based, default 1) | (optional) defaults to undefined|
| **limit** | [**number**] | Page size (default 25, max 100) | (optional) defaults to undefined|


### Return type

**PaginatedStorefrontProductsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Paginated products |  -  |
|**404** | Storefront not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaClientControllerGetStorefrontProfileV1**
> StorefrontProfileResponse usedishaClientControllerGetStorefrontProfileV1()


### Example

```typescript
import {
    UsedishaClientApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaClientApi(configuration);

let domain: string; //Storefront domain (default to undefined)

const { status, data } = await apiInstance.usedishaClientControllerGetStorefrontProfileV1(
    domain
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **domain** | [**string**] | Storefront domain | defaults to undefined|


### Return type

**StorefrontProfileResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Storefront profile retrieved successfully |  -  |
|**404** | Storefront not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaClientControllerGetStorefrontReviewCountV1**
> StorefrontReviewCountResponse usedishaClientControllerGetStorefrontReviewCountV1()


### Example

```typescript
import {
    UsedishaClientApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaClientApi(configuration);

let domain: string; //Storefront domain (default to undefined)

const { status, data } = await apiInstance.usedishaClientControllerGetStorefrontReviewCountV1(
    domain
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **domain** | [**string**] | Storefront domain | defaults to undefined|


### Return type

**StorefrontReviewCountResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Review count |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaClientControllerGetStorefrontReviewReplyV1**
> StorefrontReviewReplyResponse usedishaClientControllerGetStorefrontReviewReplyV1()


### Example

```typescript
import {
    UsedishaClientApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaClientApi(configuration);

let domain: string; //Storefront domain (default to undefined)
let reviewId: string; //Review ID (default to undefined)

const { status, data } = await apiInstance.usedishaClientControllerGetStorefrontReviewReplyV1(
    domain,
    reviewId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **domain** | [**string**] | Storefront domain | defaults to undefined|
| **reviewId** | [**string**] | Review ID | defaults to undefined|


### Return type

**StorefrontReviewReplyResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Reply if any |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaClientControllerGetStorefrontReviewV1**
> StorefrontReviewItemDto usedishaClientControllerGetStorefrontReviewV1()


### Example

```typescript
import {
    UsedishaClientApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaClientApi(configuration);

let domain: string; //Storefront domain (default to undefined)
let reviewId: string; //Review ID (default to undefined)
let includeReply: boolean; // (optional) (default to undefined)

const { status, data } = await apiInstance.usedishaClientControllerGetStorefrontReviewV1(
    domain,
    reviewId,
    includeReply
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **domain** | [**string**] | Storefront domain | defaults to undefined|
| **reviewId** | [**string**] | Review ID | defaults to undefined|
| **includeReply** | [**boolean**] |  | (optional) defaults to undefined|


### Return type

**StorefrontReviewItemDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Review details |  -  |
|**404** | Review not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaClientControllerGetStorefrontReviewsV1**
> StorefrontReviewsResponse usedishaClientControllerGetStorefrontReviewsV1()


### Example

```typescript
import {
    UsedishaClientApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaClientApi(configuration);

let domain: string; //Storefront domain (default to undefined)
let limit: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.usedishaClientControllerGetStorefrontReviewsV1(
    domain,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **domain** | [**string**] | Storefront domain | defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to undefined|


### Return type

**StorefrontReviewsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Approved reviews |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaClientControllerGetStoresByCategoryV1**
> PaginatedShopmenuStoresResponse usedishaClientControllerGetStoresByCategoryV1()

Returns active stores that opted into Shopmenu discovery. Filter by category, location hierarchy (country/state/city/lga), or free-text search. Provide `lng` + `lat` to sort results by proximity using branch coordinates.

### Example

```typescript
import {
    UsedishaClientApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaClientApi(configuration);

let category: 'pharmacy' | 'supermarket' | 'restaurant' | 'grocery' | 'bakery' | 'butcher' | 'fruits_and_vegetables' | 'beverages' | 'snacks_and_confectionery' | 'household_supplies'; //Filter by category (optional) (default to undefined)
let search: string; //Search by store name, description or tags (optional) (default to undefined)
let page: number; // (optional) (default to 1)
let limit: number; // (optional) (default to 20)
let lng: number; //Longitude for proximity search (optional) (default to undefined)
let lat: number; //Latitude for proximity search (optional) (default to undefined)
let radiusKm: number; //Search radius in kilometres (default 10, max 100) (optional) (default to 10)
let country: string; //Filter by country (optional) (default to undefined)
let state: string; //Filter by state / province (optional) (default to undefined)
let city: string; //Filter by city (optional) (default to undefined)
let lga: string; //Filter by Local Government Area (optional) (default to undefined)
let featured: boolean; //true = only featured/promoted stores, false = only non-featured (optional) (default to undefined)
let ids: string; //Only these stores: comma-separated ObjectIds, at most 24. Still limited to active, approved, listed stores. Order is not guaranteed. (optional) (default to undefined)
let sellerType: 'retailer' | 'wholesaler' | 'manufacturer' | 'distributor'; //Only return stores of this seller type (e.g. wholesaler) (optional) (default to undefined)
let badges: Array<'verified' | 'official' | 'top_rated' | 'fast_delivery' | 'popular' | 'premium' | 'new' | 'mall_store'>; //Only return stores holding ALL of these badges. Repeat the param or pass a comma-separated list. (optional) (default to undefined)
let hasDeal: boolean; //true = only stores with a deal running on ShopCentral (an automatic discount that works online, on a plan with discounts). false or absent: no filter. (optional) (default to undefined)
let sort: 'newest'; //newest = most recently created first, with no featured-first ordering. Absent: featured first, then newest (or nearest with lng/lat). (optional) (default to undefined)

const { status, data } = await apiInstance.usedishaClientControllerGetStoresByCategoryV1(
    category,
    search,
    page,
    limit,
    lng,
    lat,
    radiusKm,
    country,
    state,
    city,
    lga,
    featured,
    ids,
    sellerType,
    badges,
    hasDeal,
    sort
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **category** | [**&#39;pharmacy&#39; | &#39;supermarket&#39; | &#39;restaurant&#39; | &#39;grocery&#39; | &#39;bakery&#39; | &#39;butcher&#39; | &#39;fruits_and_vegetables&#39; | &#39;beverages&#39; | &#39;snacks_and_confectionery&#39; | &#39;household_supplies&#39;**]**Array<&#39;pharmacy&#39; &#124; &#39;supermarket&#39; &#124; &#39;restaurant&#39; &#124; &#39;grocery&#39; &#124; &#39;bakery&#39; &#124; &#39;butcher&#39; &#124; &#39;fruits_and_vegetables&#39; &#124; &#39;beverages&#39; &#124; &#39;snacks_and_confectionery&#39; &#124; &#39;household_supplies&#39;>** | Filter by category | (optional) defaults to undefined|
| **search** | [**string**] | Search by store name, description or tags | (optional) defaults to undefined|
| **page** | [**number**] |  | (optional) defaults to 1|
| **limit** | [**number**] |  | (optional) defaults to 20|
| **lng** | [**number**] | Longitude for proximity search | (optional) defaults to undefined|
| **lat** | [**number**] | Latitude for proximity search | (optional) defaults to undefined|
| **radiusKm** | [**number**] | Search radius in kilometres (default 10, max 100) | (optional) defaults to 10|
| **country** | [**string**] | Filter by country | (optional) defaults to undefined|
| **state** | [**string**] | Filter by state / province | (optional) defaults to undefined|
| **city** | [**string**] | Filter by city | (optional) defaults to undefined|
| **lga** | [**string**] | Filter by Local Government Area | (optional) defaults to undefined|
| **featured** | [**boolean**] | true &#x3D; only featured/promoted stores, false &#x3D; only non-featured | (optional) defaults to undefined|
| **ids** | [**string**] | Only these stores: comma-separated ObjectIds, at most 24. Still limited to active, approved, listed stores. Order is not guaranteed. | (optional) defaults to undefined|
| **sellerType** | [**&#39;retailer&#39; | &#39;wholesaler&#39; | &#39;manufacturer&#39; | &#39;distributor&#39;**]**Array<&#39;retailer&#39; &#124; &#39;wholesaler&#39; &#124; &#39;manufacturer&#39; &#124; &#39;distributor&#39;>** | Only return stores of this seller type (e.g. wholesaler) | (optional) defaults to undefined|
| **badges** | **Array<&#39;verified&#39; &#124; &#39;official&#39; &#124; &#39;top_rated&#39; &#124; &#39;fast_delivery&#39; &#124; &#39;popular&#39; &#124; &#39;premium&#39; &#124; &#39;new&#39; &#124; &#39;mall_store&#39;>** | Only return stores holding ALL of these badges. Repeat the param or pass a comma-separated list. | (optional) defaults to undefined|
| **hasDeal** | [**boolean**] | true &#x3D; only stores with a deal running on ShopCentral (an automatic discount that works online, on a plan with discounts). false or absent: no filter. | (optional) defaults to undefined|
| **sort** | [**&#39;newest&#39;**]**Array<&#39;newest&#39;>** | newest &#x3D; most recently created first, with no featured-first ordering. Absent: featured first, then newest (or nearest with lng/lat). | (optional) defaults to undefined|


### Return type

**PaginatedShopmenuStoresResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Paginated list of Shopmenu stores. Each carries &#x60;activeDeal&#x60; when it has a deal running on ShopCentral, and &#x60;distanceKm&#x60; (to its nearest branch with a location) when &#x60;lng&#x60; + &#x60;lat&#x60; are sent. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaClientControllerRecordStoreVisitV1**
> StoreVisitRecordedResponse usedishaClientControllerRecordStoreVisitV1(reportStoreVisitDto)

Primary tracking endpoint for storefront apps. Send a stable `sessionId` (localStorage) on each page so views group into sessions and counters reflect unique store views, not every page load. Server merges device, UTM, and geo fields.

### Example

```typescript
import {
    UsedishaClientApi,
    Configuration,
    ReportStoreVisitDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaClientApi(configuration);

let id: string; //Storefront MongoDB ID (default to undefined)
let reportStoreVisitDto: ReportStoreVisitDto; //

const { status, data } = await apiInstance.usedishaClientControllerRecordStoreVisitV1(
    id,
    reportStoreVisitDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reportStoreVisitDto** | **ReportStoreVisitDto**|  | |
| **id** | [**string**] | Storefront MongoDB ID | defaults to undefined|


### Return type

**StoreVisitRecordedResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Visit recorded |  -  |
|**404** | Storefront not found or inactive |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaClientControllerSubmitClaimV1**
> usedishaClientControllerSubmitClaimV1(submitProfileClaimDto)

Public endpoint for a prospective owner to claim a claimable storefront. Requires full contact/business details and at least one registration document. A platform admin reviews the claim and, on approval, the business is transferred to the claimer.

### Example

```typescript
import {
    UsedishaClientApi,
    Configuration,
    SubmitProfileClaimDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaClientApi(configuration);

let id: string; //Storefront MongoDB ID (default to undefined)
let submitProfileClaimDto: SubmitProfileClaimDto; //

const { status, data } = await apiInstance.usedishaClientControllerSubmitClaimV1(
    id,
    submitProfileClaimDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **submitProfileClaimDto** | **SubmitProfileClaimDto**|  | |
| **id** | [**string**] | Storefront MongoDB ID | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Claim submitted |  -  |
|**403** | Storefront is not open for claims |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaClientControllerUploadClaimDocumentV1**
> usedishaClientControllerUploadClaimDocumentV1()

Public multipart upload (`file`) for a claim supporting document (PDF or image). Allowed only while the storefront is claimable. Returns the CDN `url` + original `name` to include in the claim\'s registrationDocuments.

### Example

```typescript
import {
    UsedishaClientApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaClientApi(configuration);

let id: string; //Storefront MongoDB ID (default to undefined)
let file: File; // (default to undefined)

const { status, data } = await apiInstance.usedishaClientControllerUploadClaimDocumentV1(
    id,
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Storefront MongoDB ID | defaults to undefined|
| **file** | [**File**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Uploaded document URL and name |  -  |
|**403** | Storefront is not open for claims |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaShopmenuProductsControllerProductsV1**
> usedishaShopmenuProductsControllerProductsV1()

Either `ids` (picked products, in that order), `storeId` (that store’s products) or `source=popular` (the most bought on ShopCentral lately, best first; the ranking is kept for an hour per state). Only products a customer can buy online right now come back, at their live price: from a live store, visible, in stock, at a branch taking online orders. With `state`, only products whose store sells there. See docs/SHOPCENTRAL-HOME-LAYOUT.md.

### Example

```typescript
import {
    UsedishaClientApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaClientApi(configuration);

let source: 'popular'; //popular (v4): the most bought on ShopCentral in the last 30 days, from stores selling in `state` (nationwide without one). Not with ids or storeId. (optional) (default to undefined)
let ids: string; //Picked products, comma-separated, returned in this order (optional) (default to undefined)
let storeId: string; //One store\'s products (storefront id) (optional) (default to undefined)
let limit: number; //How many for storeId and popular (default 10) (optional) (default to undefined)
let state: string; //Only products whose store sells in this state (a section with area \'state\'): an active branch there, or its default branch\'s location (optional) (default to undefined)

const { status, data } = await apiInstance.usedishaShopmenuProductsControllerProductsV1(
    source,
    ids,
    storeId,
    limit,
    state
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **source** | [**&#39;popular&#39;**]**Array<&#39;popular&#39;>** | popular (v4): the most bought on ShopCentral in the last 30 days, from stores selling in &#x60;state&#x60; (nationwide without one). Not with ids or storeId. | (optional) defaults to undefined|
| **ids** | [**string**] | Picked products, comma-separated, returned in this order | (optional) defaults to undefined|
| **storeId** | [**string**] | One store\&#39;s products (storefront id) | (optional) defaults to undefined|
| **limit** | [**number**] | How many for storeId and popular (default 10) | (optional) defaults to undefined|
| **state** | [**string**] | Only products whose store sells in this state (a section with area \&#39;state\&#39;): an active branch there, or its default branch\&#39;s location | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | { products: [{ productId, name, price, imageUrl, storeId, storeName, domain, branchId }] } |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaShopmenuServiceAreasControllerJoinV1**
> usedishaShopmenuServiceAreasControllerJoinV1(usedishaShopmenuServiceAreasControllerJoinV1Request)

Needs a phone or an email, or a sign-in (the account is used when neither is sent). Phones are stored as +234…, emails lowercased. Joining again with the same phone, email or account returns 200 `{ joined: true, alreadyJoined: true }`; a new entry is 201 `{ joined: true }`. 400 for an unknown state or a bad phone or email; 429 after 10 requests a minute from one address.

### Example

```typescript
import {
    UsedishaClientApi,
    Configuration,
    UsedishaShopmenuServiceAreasControllerJoinV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaClientApi(configuration);

let usedishaShopmenuServiceAreasControllerJoinV1Request: UsedishaShopmenuServiceAreasControllerJoinV1Request; //

const { status, data } = await apiInstance.usedishaShopmenuServiceAreasControllerJoinV1(
    usedishaShopmenuServiceAreasControllerJoinV1Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **usedishaShopmenuServiceAreasControllerJoinV1Request** | **UsedishaShopmenuServiceAreasControllerJoinV1Request**|  | |


### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | { joined: true, alreadyJoined: true } |  -  |
|**201** | { joined: true } |  -  |
|**400** | Unknown state, or bad phone or email |  -  |
|**429** | Too many requests from this address |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaShopmenuServiceAreasControllerListV1**
> usedishaShopmenuServiceAreasControllerListV1()

Every service area, live first, then pilot and coming soon: for the \"choose your area\" picker.

### Example

```typescript
import {
    UsedishaClientApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaClientApi(configuration);

const { status, data } = await apiInstance.usedishaShopmenuServiceAreasControllerListV1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | { areas: [{ state, status, cities, launchLabel? }] } |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

