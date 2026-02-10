# UsedishaClientApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usedishaClientControllerCreateStorefrontReviewV1**](#usedishaclientcontrollercreatestorefrontreviewv1) | **POST** /v1/usedisha/usedisha/{domain}/reviews | Submit a review for the storefront|
|[**usedishaClientControllerGetOrdersByEmailV1**](#usedishaclientcontrollergetordersbyemailv1) | **GET** /v1/usedisha/usedisha/{domain}/orders | Get orders for a customer by email (no login)|
|[**usedishaClientControllerGetStorefrontAverageRatingV1**](#usedishaclientcontrollergetstorefrontaverageratingv1) | **GET** /v1/usedisha/usedisha/{domain}/reviews/average-rating | Get average rating for the storefront|
|[**usedishaClientControllerGetStorefrontCategoriesV1**](#usedishaclientcontrollergetstorefrontcategoriesv1) | **GET** /v1/usedisha/usedisha/{domain}/categories | Get storefront categories|
|[**usedishaClientControllerGetStorefrontCategoryV1**](#usedishaclientcontrollergetstorefrontcategoryv1) | **GET** /v1/usedisha/usedisha/{domain}/categories/{categoryId} | Get single category details|
|[**usedishaClientControllerGetStorefrontProductV1**](#usedishaclientcontrollergetstorefrontproductv1) | **GET** /v1/usedisha/usedisha/{domain}/products/{productId} | Get single product details|
|[**usedishaClientControllerGetStorefrontProductsV1**](#usedishaclientcontrollergetstorefrontproductsv1) | **GET** /v1/usedisha/usedisha/{domain}/products | Get storefront products|
|[**usedishaClientControllerGetStorefrontProfileV1**](#usedishaclientcontrollergetstorefrontprofilev1) | **GET** /v1/usedisha/usedisha/{domain} | Get storefront profile by domain|
|[**usedishaClientControllerGetStorefrontReviewCountV1**](#usedishaclientcontrollergetstorefrontreviewcountv1) | **GET** /v1/usedisha/usedisha/{domain}/reviews/count | Get approved review count for the storefront|
|[**usedishaClientControllerGetStorefrontReviewReplyV1**](#usedishaclientcontrollergetstorefrontreviewreplyv1) | **GET** /v1/usedisha/usedisha/{domain}/reviews/{reviewId}/reply | Get reply for a storefront review|
|[**usedishaClientControllerGetStorefrontReviewV1**](#usedishaclientcontrollergetstorefrontreviewv1) | **GET** /v1/usedisha/usedisha/{domain}/reviews/{reviewId} | Get a single storefront review|
|[**usedishaClientControllerGetStorefrontReviewsV1**](#usedishaclientcontrollergetstorefrontreviewsv1) | **GET** /v1/usedisha/usedisha/{domain}/reviews | Get approved reviews for the storefront|

# **usedishaClientControllerCreateStorefrontReviewV1**
> usedishaClientControllerCreateStorefrontReviewV1(createStorefrontReviewDto)


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

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Review submitted (pending moderation) |  -  |
|**400** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaClientControllerGetOrdersByEmailV1**
> usedishaClientControllerGetOrdersByEmailV1()


### Example

```typescript
import {
    UsedishaClientApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaClientApi(configuration);

let domain: string; //Storefront domain (default to undefined)
let email: string; //Customer email address (default to undefined)

const { status, data } = await apiInstance.usedishaClientControllerGetOrdersByEmailV1(
    domain,
    email
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **domain** | [**string**] | Storefront domain | defaults to undefined|
| **email** | [**string**] | Customer email address | defaults to undefined|


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
|**200** | Orders for the given email at this store |  -  |
|**400** | Email query is required |  -  |
|**404** | Storefront not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaClientControllerGetStorefrontAverageRatingV1**
> usedishaClientControllerGetStorefrontAverageRatingV1()


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

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Average rating |  -  |

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

const { status, data } = await apiInstance.usedishaClientControllerGetStorefrontCategoriesV1(
    domain,
    search
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **domain** | [**string**] | Storefront domain | defaults to undefined|
| **search** | [**string**] | Search categories by name | (optional) defaults to undefined|


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

const { status, data } = await apiInstance.usedishaClientControllerGetStorefrontCategoryV1(
    domain,
    categoryId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **domain** | [**string**] | Storefront domain | defaults to undefined|
| **categoryId** | [**string**] | Category ID | defaults to undefined|


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
> StorefrontProductResponse usedishaClientControllerGetStorefrontProductV1()


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

const { status, data } = await apiInstance.usedishaClientControllerGetStorefrontProductV1(
    domain,
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **domain** | [**string**] | Storefront domain | defaults to undefined|
| **productId** | [**string**] | Product ID | defaults to undefined|


### Return type

**StorefrontProductResponse**

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
> StorefrontProductsResponse usedishaClientControllerGetStorefrontProductsV1()


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

const { status, data } = await apiInstance.usedishaClientControllerGetStorefrontProductsV1(
    domain,
    category,
    search,
    sortBy,
    sortOrder
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


### Return type

**StorefrontProductsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Products retrieved successfully |  -  |
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
> usedishaClientControllerGetStorefrontReviewCountV1()


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

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Review count |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaClientControllerGetStorefrontReviewReplyV1**
> usedishaClientControllerGetStorefrontReviewReplyV1()


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

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Reply if any |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaClientControllerGetStorefrontReviewV1**
> usedishaClientControllerGetStorefrontReviewV1()


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

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Review details |  -  |
|**404** | Review not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaClientControllerGetStorefrontReviewsV1**
> usedishaClientControllerGetStorefrontReviewsV1()


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

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Approved reviews |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

