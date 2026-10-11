# UsedishaSystemAdminCustomerRequestsApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usedishaAdminRequestsControllerAddOfferV1**](#usedishaadminrequestscontrolleraddofferv1) | **POST** /v1/usedisha/usedisha/admin/requests/{requestId}/items/{itemIndex}/offers | Add a vendor to an item|
|[**usedishaAdminRequestsControllerDeclineV1**](#usedishaadminrequestscontrollerdeclinev1) | **PATCH** /v1/usedisha/usedisha/admin/requests/{requestId}/decline | Decline a request with a reason|
|[**usedishaAdminRequestsControllerFulfilV1**](#usedishaadminrequestscontrollerfulfilv1) | **PATCH** /v1/usedisha/usedisha/admin/requests/{requestId}/fulfil | Fulfil a request by creating an order|
|[**usedishaAdminRequestsControllerGetOfficialVendorV1**](#usedishaadminrequestscontrollergetofficialvendorv1) | **GET** /v1/usedisha/usedisha/admin/requests/official-vendor | ShopCentral\&#39;s own vendor, if one is set|
|[**usedishaAdminRequestsControllerGetV1**](#usedishaadminrequestscontrollergetv1) | **GET** /v1/usedisha/usedisha/admin/requests/{requestId} | Get one customer request|
|[**usedishaAdminRequestsControllerListV1**](#usedishaadminrequestscontrollerlistv1) | **GET** /v1/usedisha/usedisha/admin/requests | List customer requests (review queue)|
|[**usedishaAdminRequestsControllerMarkUnavailableV1**](#usedishaadminrequestscontrollermarkunavailablev1) | **PATCH** /v1/usedisha/usedisha/admin/requests/{requestId}/items/{itemIndex}/unavailable | Mark an item as one we can\&#39;t source|
|[**usedishaAdminRequestsControllerPendingCountV1**](#usedishaadminrequestscontrollerpendingcountv1) | **GET** /v1/usedisha/usedisha/admin/requests/pending-count | How many requests are still awaiting review|
|[**usedishaAdminRequestsControllerProductSearchV1**](#usedishaadminrequestscontrollerproductsearchv1) | **GET** /v1/usedisha/usedisha/admin/requests/product-search | Search products across live stores|
|[**usedishaAdminRequestsControllerPublishV1**](#usedishaadminrequestscontrollerpublishv1) | **POST** /v1/usedisha/usedisha/admin/requests/{requestId}/publish | Send the vendor lists to the customer|
|[**usedishaAdminRequestsControllerRemoveOfferV1**](#usedishaadminrequestscontrollerremoveofferv1) | **DELETE** /v1/usedisha/usedisha/admin/requests/{requestId}/items/{itemIndex}/offers/{offerId} | Remove a vendor from an item\&#39;s list|
|[**usedishaAdminRequestsControllerRerunSearchV1**](#usedishaadminrequestscontrollerrerunsearchv1) | **POST** /v1/usedisha/usedisha/admin/requests/{requestId}/search | Run the shopper search again|
|[**usedishaAdminRequestsControllerSetOfficialVendorV1**](#usedishaadminrequestscontrollersetofficialvendorv1) | **PUT** /v1/usedisha/usedisha/admin/requests/official-vendor | Mark a storefront as ShopCentral\&#39;s own vendor|

# **usedishaAdminRequestsControllerAddOfferV1**
> usedishaAdminRequestsControllerAddOfferV1(addRequestOfferDto)

A listed product (priced from its listing), or a hand-priced line on a store or on the official vendor. The customer sees it once the list is sent.

### Example

```typescript
import {
    UsedishaSystemAdminCustomerRequestsApi,
    Configuration,
    AddRequestOfferDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminCustomerRequestsApi(configuration);

let requestId: string; // (default to undefined)
let itemIndex: number; // (default to undefined)
let addRequestOfferDto: AddRequestOfferDto; //

const { status, data } = await apiInstance.usedishaAdminRequestsControllerAddOfferV1(
    requestId,
    itemIndex,
    addRequestOfferDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addRequestOfferDto** | **AddRequestOfferDto**|  | |
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
|**201** |  |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminRequestsControllerDeclineV1**
> usedishaAdminRequestsControllerDeclineV1(declineCustomerRequestDto)


### Example

```typescript
import {
    UsedishaSystemAdminCustomerRequestsApi,
    Configuration,
    DeclineCustomerRequestDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminCustomerRequestsApi(configuration);

let requestId: string; // (default to undefined)
let declineCustomerRequestDto: DeclineCustomerRequestDto; //

const { status, data } = await apiInstance.usedishaAdminRequestsControllerDeclineV1(
    requestId,
    declineCustomerRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **declineCustomerRequestDto** | **DeclineCustomerRequestDto**|  | |
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
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminRequestsControllerFulfilV1**
> usedishaAdminRequestsControllerFulfilV1(fulfilCustomerRequestDto)

Creates a pending marketplace order for the chosen storefront and links it back to the request.

### Example

```typescript
import {
    UsedishaSystemAdminCustomerRequestsApi,
    Configuration,
    FulfilCustomerRequestDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminCustomerRequestsApi(configuration);

let requestId: string; // (default to undefined)
let fulfilCustomerRequestDto: FulfilCustomerRequestDto; //

const { status, data } = await apiInstance.usedishaAdminRequestsControllerFulfilV1(
    requestId,
    fulfilCustomerRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fulfilCustomerRequestDto** | **FulfilCustomerRequestDto**|  | |
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
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminRequestsControllerGetOfficialVendorV1**
> usedishaAdminRequestsControllerGetOfficialVendorV1()


### Example

```typescript
import {
    UsedishaSystemAdminCustomerRequestsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminCustomerRequestsApi(configuration);

const { status, data } = await apiInstance.usedishaAdminRequestsControllerGetOfficialVendorV1();
```

### Parameters
This endpoint does not have any parameters.


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
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminRequestsControllerGetV1**
> usedishaAdminRequestsControllerGetV1()


### Example

```typescript
import {
    UsedishaSystemAdminCustomerRequestsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminCustomerRequestsApi(configuration);

let requestId: string; // (default to undefined)

const { status, data } = await apiInstance.usedishaAdminRequestsControllerGetV1(
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
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminRequestsControllerListV1**
> usedishaAdminRequestsControllerListV1()


### Example

```typescript
import {
    UsedishaSystemAdminCustomerRequestsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminCustomerRequestsApi(configuration);

let page: number; // (optional) (default to undefined)
let limit: number; // (optional) (default to undefined)
let sortBy: string; // (optional) (default to undefined)
let sortOrder: 'asc' | 'desc'; // (optional) (default to undefined)
let status: 'submitted' | 'awaiting_payment' | 'fulfilled' | 'declined' | 'cancelled'; //Filter by status (optional) (default to undefined)
let search: string; //Free-text match on title or description (optional) (default to undefined)
let needsAdmin: boolean; //Only requests an admin has to act on (true), or only those waiting on the shopper or the customer (false). Requests from before vendor offers always need an admin. (optional) (default to undefined)

const { status, data } = await apiInstance.usedishaAdminRequestsControllerListV1(
    page,
    limit,
    sortBy,
    sortOrder,
    status,
    search,
    needsAdmin
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] |  | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to undefined|
| **sortBy** | [**string**] |  | (optional) defaults to undefined|
| **sortOrder** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** |  | (optional) defaults to undefined|
| **status** | [**&#39;submitted&#39; | &#39;awaiting_payment&#39; | &#39;fulfilled&#39; | &#39;declined&#39; | &#39;cancelled&#39;**]**Array<&#39;submitted&#39; &#124; &#39;awaiting_payment&#39; &#124; &#39;fulfilled&#39; &#124; &#39;declined&#39; &#124; &#39;cancelled&#39;>** | Filter by status | (optional) defaults to undefined|
| **search** | [**string**] | Free-text match on title or description | (optional) defaults to undefined|
| **needsAdmin** | [**boolean**] | Only requests an admin has to act on (true), or only those waiting on the shopper or the customer (false). Requests from before vendor offers always need an admin. | (optional) defaults to undefined|


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
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminRequestsControllerMarkUnavailableV1**
> usedishaAdminRequestsControllerMarkUnavailableV1(markRequestItemUnavailableDto)

Once no item is left open the request closes (fulfilled if anything was paid for).

### Example

```typescript
import {
    UsedishaSystemAdminCustomerRequestsApi,
    Configuration,
    MarkRequestItemUnavailableDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminCustomerRequestsApi(configuration);

let requestId: string; // (default to undefined)
let itemIndex: number; // (default to undefined)
let markRequestItemUnavailableDto: MarkRequestItemUnavailableDto; //

const { status, data } = await apiInstance.usedishaAdminRequestsControllerMarkUnavailableV1(
    requestId,
    itemIndex,
    markRequestItemUnavailableDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **markRequestItemUnavailableDto** | **MarkRequestItemUnavailableDto**|  | |
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
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminRequestsControllerPendingCountV1**
> usedishaAdminRequestsControllerPendingCountV1()


### Example

```typescript
import {
    UsedishaSystemAdminCustomerRequestsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminCustomerRequestsApi(configuration);

const { status, data } = await apiInstance.usedishaAdminRequestsControllerPendingCountV1();
```

### Parameters
This endpoint does not have any parameters.


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
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminRequestsControllerProductSearchV1**
> usedishaAdminRequestsControllerProductSearchV1()

For adding a vendor to a request item. Out-of-stock hits are flagged, not hidden.

### Example

```typescript
import {
    UsedishaSystemAdminCustomerRequestsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminCustomerRequestsApi(configuration);

let q: string; //What to look for (default to undefined)
let lat: number; //Rank by distance from here (optional) (default to undefined)
let lng: number; //Rank by distance from here (optional) (default to undefined)
let limit: number; // (optional) (default to 20)

const { status, data } = await apiInstance.usedishaAdminRequestsControllerProductSearchV1(
    q,
    lat,
    lng,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **q** | [**string**] | What to look for | defaults to undefined|
| **lat** | [**number**] | Rank by distance from here | (optional) defaults to undefined|
| **lng** | [**number**] | Rank by distance from here | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to 20|


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
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminRequestsControllerPublishV1**
> usedishaAdminRequestsControllerPublishV1()

Makes the vendors added since the last send visible and notifies the customer.

### Example

```typescript
import {
    UsedishaSystemAdminCustomerRequestsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminCustomerRequestsApi(configuration);

let requestId: string; // (default to undefined)

const { status, data } = await apiInstance.usedishaAdminRequestsControllerPublishV1(
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
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminRequestsControllerRemoveOfferV1**
> usedishaAdminRequestsControllerRemoveOfferV1()


### Example

```typescript
import {
    UsedishaSystemAdminCustomerRequestsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminCustomerRequestsApi(configuration);

let requestId: string; // (default to undefined)
let itemIndex: number; // (default to undefined)
let offerId: string; // (default to undefined)

const { status, data } = await apiInstance.usedishaAdminRequestsControllerRemoveOfferV1(
    requestId,
    itemIndex,
    offerId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestId** | [**string**] |  | defaults to undefined|
| **itemIndex** | [**number**] |  | defaults to undefined|
| **offerId** | [**string**] |  | defaults to undefined|


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
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminRequestsControllerRerunSearchV1**
> usedishaAdminRequestsControllerRerunSearchV1()

Open items are searched again; vendors an admin added are kept. Works on older requests too, as suggestions for the single-store quote.

### Example

```typescript
import {
    UsedishaSystemAdminCustomerRequestsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminCustomerRequestsApi(configuration);

let requestId: string; // (default to undefined)

const { status, data } = await apiInstance.usedishaAdminRequestsControllerRerunSearchV1(
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
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminRequestsControllerSetOfficialVendorV1**
> usedishaAdminRequestsControllerSetOfficialVendorV1(setOfficialVendorDto)

Request items no marketplace store has are assigned to it. Replaces any previous one. It does not need to be listed on the app.

### Example

```typescript
import {
    UsedishaSystemAdminCustomerRequestsApi,
    Configuration,
    SetOfficialVendorDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminCustomerRequestsApi(configuration);

let setOfficialVendorDto: SetOfficialVendorDto; //

const { status, data } = await apiInstance.usedishaAdminRequestsControllerSetOfficialVendorV1(
    setOfficialVendorDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setOfficialVendorDto** | **SetOfficialVendorDto**|  | |


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
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

