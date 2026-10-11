# UsedishaGuestRequestsApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usedishaGuestRequestsControllerCancelV1**](#usedishaguestrequestscontrollercancelv1) | **PATCH** /v1/usedisha/usedisha/guest/requests/{requestId}/cancel | Withdraw a guest request|
|[**usedishaGuestRequestsControllerDropV1**](#usedishaguestrequestscontrollerdropv1) | **PATCH** /v1/usedisha/usedisha/guest/requests/{requestId}/items/{itemIndex}/drop | Remove an item from a guest request|
|[**usedishaGuestRequestsControllerEstimateV1**](#usedishaguestrequestscontrollerestimatev1) | **POST** /v1/usedisha/usedisha/guest/requests/{requestId}/checkout/estimate | Price the vendors picked on a guest request|
|[**usedishaGuestRequestsControllerGetV1**](#usedishaguestrequestscontrollergetv1) | **GET** /v1/usedisha/usedisha/guest/requests/{requestId} | Get a guest request|
|[**usedishaGuestRequestsControllerReadListV1**](#usedishaguestrequestscontrollerreadlistv1) | **POST** /v1/usedisha/usedisha/guest/requests/read-list | Read a photographed shopping list into items (no account)|
|[**usedishaGuestRequestsControllerSubmitV1**](#usedishaguestrequestscontrollersubmitv1) | **POST** /v1/usedisha/usedisha/guest/requests | Submit a request without an account|

# **usedishaGuestRequestsControllerCancelV1**
> usedishaGuestRequestsControllerCancelV1()


### Example

```typescript
import {
    UsedishaGuestRequestsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaGuestRequestsApi(configuration);

let requestId: string; // (default to undefined)
let xGuestKey2: string; // (default to undefined)
let xGuestKey: string; //The key returned when the request was submitted (every route but submit) (optional) (default to undefined)

const { status, data } = await apiInstance.usedishaGuestRequestsControllerCancelV1(
    requestId,
    xGuestKey2,
    xGuestKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestId** | [**string**] |  | defaults to undefined|
| **xGuestKey2** | [**string**] |  | defaults to undefined|
| **xGuestKey** | [**string**] | The key returned when the request was submitted (every route but submit) | (optional) defaults to undefined|


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
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaGuestRequestsControllerDropV1**
> usedishaGuestRequestsControllerDropV1()


### Example

```typescript
import {
    UsedishaGuestRequestsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaGuestRequestsApi(configuration);

let requestId: string; // (default to undefined)
let itemIndex: number; // (default to undefined)
let xGuestKey2: string; // (default to undefined)
let xGuestKey: string; //The key returned when the request was submitted (every route but submit) (optional) (default to undefined)

const { status, data } = await apiInstance.usedishaGuestRequestsControllerDropV1(
    requestId,
    itemIndex,
    xGuestKey2,
    xGuestKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestId** | [**string**] |  | defaults to undefined|
| **itemIndex** | [**number**] |  | defaults to undefined|
| **xGuestKey2** | [**string**] |  | defaults to undefined|
| **xGuestKey** | [**string**] | The key returned when the request was submitted (every route but submit) | (optional) defaults to undefined|


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
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaGuestRequestsControllerEstimateV1**
> usedishaGuestRequestsControllerEstimateV1(requestCheckoutEstimateDto)

Paying needs an account: sign in, claim the request, then check out.

### Example

```typescript
import {
    UsedishaGuestRequestsApi,
    Configuration,
    RequestCheckoutEstimateDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaGuestRequestsApi(configuration);

let requestId: string; // (default to undefined)
let xGuestKey2: string; // (default to undefined)
let requestCheckoutEstimateDto: RequestCheckoutEstimateDto; //
let xGuestKey: string; //The key returned when the request was submitted (every route but submit) (optional) (default to undefined)

const { status, data } = await apiInstance.usedishaGuestRequestsControllerEstimateV1(
    requestId,
    xGuestKey2,
    requestCheckoutEstimateDto,
    xGuestKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestCheckoutEstimateDto** | **RequestCheckoutEstimateDto**|  | |
| **requestId** | [**string**] |  | defaults to undefined|
| **xGuestKey2** | [**string**] |  | defaults to undefined|
| **xGuestKey** | [**string**] | The key returned when the request was submitted (every route but submit) | (optional) defaults to undefined|


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
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaGuestRequestsControllerGetV1**
> usedishaGuestRequestsControllerGetV1()


### Example

```typescript
import {
    UsedishaGuestRequestsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaGuestRequestsApi(configuration);

let requestId: string; // (default to undefined)
let xGuestKey2: string; // (default to undefined)
let xGuestKey: string; //The key returned when the request was submitted (every route but submit) (optional) (default to undefined)

const { status, data } = await apiInstance.usedishaGuestRequestsControllerGetV1(
    requestId,
    xGuestKey2,
    xGuestKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestId** | [**string**] |  | defaults to undefined|
| **xGuestKey2** | [**string**] |  | defaults to undefined|
| **xGuestKey** | [**string**] | The key returned when the request was submitted (every route but submit) | (optional) defaults to undefined|


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
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaGuestRequestsControllerReadListV1**
> ReadShoppingListResponseDto usedishaGuestRequestsControllerReadListV1()

As POST customer/requests/read-list, limited per address.

### Example

```typescript
import {
    UsedishaGuestRequestsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaGuestRequestsApi(configuration);

let xGuestKey: string; //The key returned when the request was submitted (every route but submit) (optional) (default to undefined)

const { status, data } = await apiInstance.usedishaGuestRequestsControllerReadListV1(
    xGuestKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **xGuestKey** | [**string**] | The key returned when the request was submitted (every route but submit) | (optional) defaults to undefined|


### Return type

**ReadShoppingListResponseDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaGuestRequestsControllerSubmitV1**
> usedishaGuestRequestsControllerSubmitV1(guestSubmitCustomerRequestDto)

Returns the request with `guestKey`: keep it on the device, it is the only way back to the request. Reference photos are dropped; uploading them needs an account. A delivery address (a pinned location, or at least a state) is required: the search starts near it. 503 with code GUEST_REQUESTS_UNAVAILABLE while the shopper is off: the app asks the guest to sign in instead.

### Example

```typescript
import {
    UsedishaGuestRequestsApi,
    Configuration,
    GuestSubmitCustomerRequestDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaGuestRequestsApi(configuration);

let guestSubmitCustomerRequestDto: GuestSubmitCustomerRequestDto; //
let xGuestKey: string; //The key returned when the request was submitted (every route but submit) (optional) (default to undefined)

const { status, data } = await apiInstance.usedishaGuestRequestsControllerSubmitV1(
    guestSubmitCustomerRequestDto,
    xGuestKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **guestSubmitCustomerRequestDto** | **GuestSubmitCustomerRequestDto**|  | |
| **xGuestKey** | [**string**] | The key returned when the request was submitted (every route but submit) | (optional) defaults to undefined|


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
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

