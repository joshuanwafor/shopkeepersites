# UsedishaCustomerRequestsApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usedishaCustomerRequestsControllerCancelV1**](#usedishacustomerrequestscontrollercancelv1) | **PATCH** /v1/usedisha/usedisha/customer/requests/{requestId}/cancel | Withdraw a request|
|[**usedishaCustomerRequestsControllerCheckoutV1**](#usedishacustomerrequestscontrollercheckoutv1) | **POST** /v1/usedisha/usedisha/customer/requests/{requestId}/checkout | Pay for the vendors I picked|
|[**usedishaCustomerRequestsControllerClaimV1**](#usedishacustomerrequestscontrollerclaimv1) | **POST** /v1/usedisha/usedisha/customer/requests/claim | Move requests made before signing in to my account|
|[**usedishaCustomerRequestsControllerDropV1**](#usedishacustomerrequestscontrollerdropv1) | **PATCH** /v1/usedisha/usedisha/customer/requests/{requestId}/items/{itemIndex}/drop | Remove an item I no longer need|
|[**usedishaCustomerRequestsControllerEscalateV1**](#usedishacustomerrequestscontrollerescalatev1) | **PATCH** /v1/usedisha/usedisha/customer/requests/{requestId}/items/{itemIndex}/escalate | None of these vendors suit me|
|[**usedishaCustomerRequestsControllerEstimateV1**](#usedishacustomerrequestscontrollerestimatev1) | **POST** /v1/usedisha/usedisha/customer/requests/{requestId}/checkout/estimate | Price the vendors I picked|
|[**usedishaCustomerRequestsControllerGetMineV1**](#usedishacustomerrequestscontrollergetminev1) | **GET** /v1/usedisha/usedisha/customer/requests/{requestId} | Get one of my requests|
|[**usedishaCustomerRequestsControllerListMineV1**](#usedishacustomerrequestscontrollerlistminev1) | **GET** /v1/usedisha/usedisha/customer/requests | List my requests (newest first)|
|[**usedishaCustomerRequestsControllerReadListV1**](#usedishacustomerrequestscontrollerreadlistv1) | **POST** /v1/usedisha/usedisha/customer/requests/read-list | Read a photographed shopping list into items|
|[**usedishaCustomerRequestsControllerSubmitV1**](#usedishacustomerrequestscontrollersubmitv1) | **POST** /v1/usedisha/usedisha/customer/requests | Submit a request for something you cannot find|
|[**usedishaCustomerRequestsControllerUploadV1**](#usedishacustomerrequestscontrolleruploadv1) | **POST** /v1/usedisha/usedisha/customer/requests/upload | Upload a reference photo|

# **usedishaCustomerRequestsControllerCancelV1**
> usedishaCustomerRequestsControllerCancelV1()

Only possible while the request is still awaiting review.

### Example

```typescript
import {
    UsedishaCustomerRequestsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaCustomerRequestsApi(configuration);

let requestId: string; // (default to undefined)

const { status, data } = await apiInstance.usedishaCustomerRequestsControllerCancelV1(
    requestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**401** | Sign in to make a request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaCustomerRequestsControllerCheckoutV1**
> usedishaCustomerRequestsControllerCheckoutV1(requestCheckoutDto)

One payment, one order per vendor. Items left out stay open, so found items can be paid for while the rest are still being sourced. Poll `GET usedisha/checkout/bulk/status/:groupReference`.

### Example

```typescript
import {
    UsedishaCustomerRequestsApi,
    Configuration,
    RequestCheckoutDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaCustomerRequestsApi(configuration);

let requestId: string; // (default to undefined)
let requestCheckoutDto: RequestCheckoutDto; //

const { status, data } = await apiInstance.usedishaCustomerRequestsControllerCheckoutV1(
    requestId,
    requestCheckoutDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestCheckoutDto** | **RequestCheckoutDto**|  | |
| **requestId** | [**string**] |  | defaults to undefined|


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
|**201** |  |  -  |
|**401** | Sign in to make a request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaCustomerRequestsControllerClaimV1**
> usedishaCustomerRequestsControllerClaimV1(claimGuestRequestsDto)

Each needs the guest key it was submitted with. Returns the ids now on the account; already-claimed requests and wrong keys are skipped. From here they\'re ordinary requests: the team works on items the shopper couldn\'t find, and they can be paid for.

### Example

```typescript
import {
    UsedishaCustomerRequestsApi,
    Configuration,
    ClaimGuestRequestsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaCustomerRequestsApi(configuration);

let claimGuestRequestsDto: ClaimGuestRequestsDto; //

const { status, data } = await apiInstance.usedishaCustomerRequestsControllerClaimV1(
    claimGuestRequestsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **claimGuestRequestsDto** | **ClaimGuestRequestsDto**|  | |


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
|**200** |  |  -  |
|**401** | Sign in to make a request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaCustomerRequestsControllerDropV1**
> usedishaCustomerRequestsControllerDropV1()


### Example

```typescript
import {
    UsedishaCustomerRequestsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaCustomerRequestsApi(configuration);

let requestId: string; // (default to undefined)
let itemIndex: number; // (default to undefined)

const { status, data } = await apiInstance.usedishaCustomerRequestsControllerDropV1(
    requestId,
    itemIndex
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestId** | [**string**] |  | defaults to undefined|
| **itemIndex** | [**number**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**401** | Sign in to make a request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaCustomerRequestsControllerEscalateV1**
> usedishaCustomerRequestsControllerEscalateV1(escalateRequestItemDto)

Sends the item to ShopCentral\'s team for better options. The options already offered stay payable.

### Example

```typescript
import {
    UsedishaCustomerRequestsApi,
    Configuration,
    EscalateRequestItemDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaCustomerRequestsApi(configuration);

let requestId: string; // (default to undefined)
let itemIndex: number; // (default to undefined)
let escalateRequestItemDto: EscalateRequestItemDto; //

const { status, data } = await apiInstance.usedishaCustomerRequestsControllerEscalateV1(
    requestId,
    itemIndex,
    escalateRequestItemDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **escalateRequestItemDto** | **EscalateRequestItemDto**|  | |
| **requestId** | [**string**] |  | defaults to undefined|
| **itemIndex** | [**number**] |  | defaults to undefined|


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
|**200** |  |  -  |
|**401** | Sign in to make a request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaCustomerRequestsControllerEstimateV1**
> usedishaCustomerRequestsControllerEstimateV1(requestCheckoutEstimateDto)

Listed products are priced from the store\'s listing with its delivery fee; vendors ShopCentral\'s team priced use their price and delivery fee.

### Example

```typescript
import {
    UsedishaCustomerRequestsApi,
    Configuration,
    RequestCheckoutEstimateDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaCustomerRequestsApi(configuration);

let requestId: string; // (default to undefined)
let requestCheckoutEstimateDto: RequestCheckoutEstimateDto; //

const { status, data } = await apiInstance.usedishaCustomerRequestsControllerEstimateV1(
    requestId,
    requestCheckoutEstimateDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestCheckoutEstimateDto** | **RequestCheckoutEstimateDto**|  | |
| **requestId** | [**string**] |  | defaults to undefined|


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
|**200** |  |  -  |
|**401** | Sign in to make a request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaCustomerRequestsControllerGetMineV1**
> usedishaCustomerRequestsControllerGetMineV1()


### Example

```typescript
import {
    UsedishaCustomerRequestsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaCustomerRequestsApi(configuration);

let requestId: string; // (default to undefined)

const { status, data } = await apiInstance.usedishaCustomerRequestsControllerGetMineV1(
    requestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**401** | Sign in to make a request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaCustomerRequestsControllerListMineV1**
> usedishaCustomerRequestsControllerListMineV1()


### Example

```typescript
import {
    UsedishaCustomerRequestsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaCustomerRequestsApi(configuration);

let page: number; // (optional) (default to undefined)
let limit: number; // (optional) (default to undefined)
let status: 'submitted' | 'awaiting_payment' | 'fulfilled' | 'declined' | 'cancelled'; // (optional) (default to undefined)

const { status, data } = await apiInstance.usedishaCustomerRequestsControllerListMineV1(
    page,
    limit,
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] |  | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to undefined|
| **status** | [**&#39;submitted&#39; | &#39;awaiting_payment&#39; | &#39;fulfilled&#39; | &#39;declined&#39; | &#39;cancelled&#39;**]**Array<&#39;submitted&#39; &#124; &#39;awaiting_payment&#39; &#124; &#39;fulfilled&#39; &#124; &#39;declined&#39; &#124; &#39;cancelled&#39;>** |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**401** | Sign in to make a request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaCustomerRequestsControllerReadListV1**
> ReadShoppingListResponseDto usedishaCustomerRequestsControllerReadListV1()

Upload a photo (JPEG or PNG, field \"file\") of a handwritten or printed list. Returns the items to pre-fill a new request with; nothing is submitted and the photo is not kept.

### Example

```typescript
import {
    UsedishaCustomerRequestsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaCustomerRequestsApi(configuration);

const { status, data } = await apiInstance.usedishaCustomerRequestsControllerReadListV1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ReadShoppingListResponseDto**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**401** | Sign in to make a request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaCustomerRequestsControllerSubmitV1**
> usedishaCustomerRequestsControllerSubmitV1(submitCustomerRequestDto)


### Example

```typescript
import {
    UsedishaCustomerRequestsApi,
    Configuration,
    SubmitCustomerRequestDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaCustomerRequestsApi(configuration);

let submitCustomerRequestDto: SubmitCustomerRequestDto; //

const { status, data } = await apiInstance.usedishaCustomerRequestsControllerSubmitV1(
    submitCustomerRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **submitCustomerRequestDto** | **SubmitCustomerRequestDto**|  | |


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
|**201** |  |  -  |
|**401** | Sign in to make a request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaCustomerRequestsControllerUploadV1**
> CustomerRequestUploadResponseDto usedishaCustomerRequestsControllerUploadV1()

Uploads one photo and returns its CDN URL to attach to a request.

### Example

```typescript
import {
    UsedishaCustomerRequestsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaCustomerRequestsApi(configuration);

const { status, data } = await apiInstance.usedishaCustomerRequestsControllerUploadV1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**CustomerRequestUploadResponseDto**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**401** | Sign in to make a request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

