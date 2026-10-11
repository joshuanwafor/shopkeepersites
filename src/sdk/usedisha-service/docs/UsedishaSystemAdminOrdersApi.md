# UsedishaSystemAdminOrdersApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usedishaAdminOrdersControllerAddNoteV1**](#usedishaadminorderscontrolleraddnotev1) | **POST** /v1/usedisha/usedisha/admin/orders/{id}/dispute/notes | Add an investigation note to a marketplace order dispute|
|[**usedishaAdminOrdersControllerCancelV1**](#usedishaadminorderscontrollercancelv1) | **PUT** /v1/usedisha/usedisha/admin/orders/{id}/cancel | Cancel a marketplace order on the business\&#39;s behalf|
|[**usedishaAdminOrdersControllerCompleteRefundV1**](#usedishaadminorderscontrollercompleterefundv1) | **PUT** /v1/usedisha/usedisha/admin/orders/{id}/refunds/complete | Complete a pending refund on a marketplace order|
|[**usedishaAdminOrdersControllerConfirmV1**](#usedishaadminorderscontrollerconfirmv1) | **PUT** /v1/usedisha/usedisha/admin/orders/{id}/confirm | Confirm a marketplace order on the business\&#39;s behalf|
|[**usedishaAdminOrdersControllerDeliverV1**](#usedishaadminorderscontrollerdeliverv1) | **PUT** /v1/usedisha/usedisha/admin/orders/{id}/deliver | Mark a marketplace order as delivered|
|[**usedishaAdminOrdersControllerFlagV1**](#usedishaadminorderscontrollerflagv1) | **PATCH** /v1/usedisha/usedisha/admin/orders/{id}/dispute/flag | Flag a marketplace order for review|
|[**usedishaAdminOrdersControllerGetOneV1**](#usedishaadminorderscontrollergetonev1) | **GET** /v1/usedisha/usedisha/admin/orders/{id} | Get a marketplace order by ID|
|[**usedishaAdminOrdersControllerInitiateRefundV1**](#usedishaadminorderscontrollerinitiaterefundv1) | **POST** /v1/usedisha/usedisha/admin/orders/{id}/refunds | Initiate a refund on a marketplace order|
|[**usedishaAdminOrdersControllerListV1**](#usedishaadminorderscontrollerlistv1) | **GET** /v1/usedisha/usedisha/admin/orders | List marketplace orders|
|[**usedishaAdminOrdersControllerProcessV1**](#usedishaadminorderscontrollerprocessv1) | **PUT** /v1/usedisha/usedisha/admin/orders/{id}/process | Mark a marketplace order as processing|
|[**usedishaAdminOrdersControllerResolveV1**](#usedishaadminorderscontrollerresolvev1) | **PATCH** /v1/usedisha/usedisha/admin/orders/{id}/dispute/resolve | Resolve a marketplace order dispute|
|[**usedishaAdminOrdersControllerShipV1**](#usedishaadminorderscontrollershipv1) | **PUT** /v1/usedisha/usedisha/admin/orders/{id}/ship | Ship a marketplace order on the business\&#39;s behalf|
|[**usedishaAdminOrdersControllerStatsV1**](#usedishaadminorderscontrollerstatsv1) | **GET** /v1/usedisha/usedisha/admin/orders/stats | Marketplace order statistics|

# **usedishaAdminOrdersControllerAddNoteV1**
> usedishaAdminOrdersControllerAddNoteV1(addOrderDisputeNoteDto)


### Example

```typescript
import {
    UsedishaSystemAdminOrdersApi,
    Configuration,
    AddOrderDisputeNoteDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminOrdersApi(configuration);

let id: string; //Order ID (default to undefined)
let addOrderDisputeNoteDto: AddOrderDisputeNoteDto; //

const { status, data } = await apiInstance.usedishaAdminOrdersControllerAddNoteV1(
    id,
    addOrderDisputeNoteDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addOrderDisputeNoteDto** | **AddOrderDisputeNoteDto**|  | |
| **id** | [**string**] | Order ID | defaults to undefined|


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

# **usedishaAdminOrdersControllerCancelV1**
> usedishaAdminOrdersControllerCancelV1(cancelOrderDto)

Admin override — can force-cancel even from an otherwise non-cancellable status.

### Example

```typescript
import {
    UsedishaSystemAdminOrdersApi,
    Configuration,
    CancelOrderDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminOrdersApi(configuration);

let id: string; //Order ID (default to undefined)
let cancelOrderDto: CancelOrderDto; //

const { status, data } = await apiInstance.usedishaAdminOrdersControllerCancelV1(
    id,
    cancelOrderDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cancelOrderDto** | **CancelOrderDto**|  | |
| **id** | [**string**] | Order ID | defaults to undefined|


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

# **usedishaAdminOrdersControllerCompleteRefundV1**
> usedishaAdminOrdersControllerCompleteRefundV1(completeRefundDto)


### Example

```typescript
import {
    UsedishaSystemAdminOrdersApi,
    Configuration,
    CompleteRefundDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminOrdersApi(configuration);

let id: string; //Order ID (default to undefined)
let completeRefundDto: CompleteRefundDto; //

const { status, data } = await apiInstance.usedishaAdminOrdersControllerCompleteRefundV1(
    id,
    completeRefundDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **completeRefundDto** | **CompleteRefundDto**|  | |
| **id** | [**string**] | Order ID | defaults to undefined|


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

# **usedishaAdminOrdersControllerConfirmV1**
> usedishaAdminOrdersControllerConfirmV1()


### Example

```typescript
import {
    UsedishaSystemAdminOrdersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminOrdersApi(configuration);

let id: string; //Order ID (default to undefined)

const { status, data } = await apiInstance.usedishaAdminOrdersControllerConfirmV1(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Order ID | defaults to undefined|


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

# **usedishaAdminOrdersControllerDeliverV1**
> usedishaAdminOrdersControllerDeliverV1()


### Example

```typescript
import {
    UsedishaSystemAdminOrdersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminOrdersApi(configuration);

let id: string; //Order ID (default to undefined)

const { status, data } = await apiInstance.usedishaAdminOrdersControllerDeliverV1(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Order ID | defaults to undefined|


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

# **usedishaAdminOrdersControllerFlagV1**
> usedishaAdminOrdersControllerFlagV1(flagOrderDto)


### Example

```typescript
import {
    UsedishaSystemAdminOrdersApi,
    Configuration,
    FlagOrderDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminOrdersApi(configuration);

let id: string; //Order ID (default to undefined)
let flagOrderDto: FlagOrderDto; //

const { status, data } = await apiInstance.usedishaAdminOrdersControllerFlagV1(
    id,
    flagOrderDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **flagOrderDto** | **FlagOrderDto**|  | |
| **id** | [**string**] | Order ID | defaults to undefined|


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

# **usedishaAdminOrdersControllerGetOneV1**
> usedishaAdminOrdersControllerGetOneV1()


### Example

```typescript
import {
    UsedishaSystemAdminOrdersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminOrdersApi(configuration);

let id: string; //Order ID (default to undefined)

const { status, data } = await apiInstance.usedishaAdminOrdersControllerGetOneV1(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Order ID | defaults to undefined|


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
|**200** | Order detail |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminOrdersControllerInitiateRefundV1**
> usedishaAdminOrdersControllerInitiateRefundV1(initiateRefundDto)


### Example

```typescript
import {
    UsedishaSystemAdminOrdersApi,
    Configuration,
    InitiateRefundDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminOrdersApi(configuration);

let id: string; //Order ID (default to undefined)
let initiateRefundDto: InitiateRefundDto; //

const { status, data } = await apiInstance.usedishaAdminOrdersControllerInitiateRefundV1(
    id,
    initiateRefundDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **initiateRefundDto** | **InitiateRefundDto**|  | |
| **id** | [**string**] | Order ID | defaults to undefined|


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

# **usedishaAdminOrdersControllerListV1**
> usedishaAdminOrdersControllerListV1()

Paginated marketplace orders across all businesses. Filter by status, payment/fulfillment status, business, branch, marketplace, or free-text search.

### Example

```typescript
import {
    UsedishaSystemAdminOrdersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminOrdersApi(configuration);

let status: object; // (optional) (default to undefined)
let paymentStatus: object; // (optional) (default to undefined)
let fulfillmentStatus: object; // (optional) (default to undefined)
let businessId: string; // (optional) (default to undefined)
let branchId: string; // (optional) (default to undefined)
let marketplaceId: string; // (optional) (default to undefined)
let search: string; // (optional) (default to undefined)
let sortBy: string; // (optional) (default to undefined)
let sortOrder: string; // (optional) (default to undefined)
let page: number; // (optional) (default to undefined)
let limit: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.usedishaAdminOrdersControllerListV1(
    status,
    paymentStatus,
    fulfillmentStatus,
    businessId,
    branchId,
    marketplaceId,
    search,
    sortBy,
    sortOrder,
    page,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **status** | **object** |  | (optional) defaults to undefined|
| **paymentStatus** | **object** |  | (optional) defaults to undefined|
| **fulfillmentStatus** | **object** |  | (optional) defaults to undefined|
| **businessId** | [**string**] |  | (optional) defaults to undefined|
| **branchId** | [**string**] |  | (optional) defaults to undefined|
| **marketplaceId** | [**string**] |  | (optional) defaults to undefined|
| **search** | [**string**] |  | (optional) defaults to undefined|
| **sortBy** | [**string**] |  | (optional) defaults to undefined|
| **sortOrder** | [**string**] |  | (optional) defaults to undefined|
| **page** | [**number**] |  | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to undefined|


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
|**200** | Paginated marketplace orders |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminOrdersControllerProcessV1**
> usedishaAdminOrdersControllerProcessV1()


### Example

```typescript
import {
    UsedishaSystemAdminOrdersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminOrdersApi(configuration);

let id: string; //Order ID (default to undefined)

const { status, data } = await apiInstance.usedishaAdminOrdersControllerProcessV1(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Order ID | defaults to undefined|


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

# **usedishaAdminOrdersControllerResolveV1**
> usedishaAdminOrdersControllerResolveV1(resolveOrderDisputeDto)


### Example

```typescript
import {
    UsedishaSystemAdminOrdersApi,
    Configuration,
    ResolveOrderDisputeDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminOrdersApi(configuration);

let id: string; //Order ID (default to undefined)
let resolveOrderDisputeDto: ResolveOrderDisputeDto; //

const { status, data } = await apiInstance.usedishaAdminOrdersControllerResolveV1(
    id,
    resolveOrderDisputeDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resolveOrderDisputeDto** | **ResolveOrderDisputeDto**|  | |
| **id** | [**string**] | Order ID | defaults to undefined|


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

# **usedishaAdminOrdersControllerShipV1**
> usedishaAdminOrdersControllerShipV1(updateShippingDto)


### Example

```typescript
import {
    UsedishaSystemAdminOrdersApi,
    Configuration,
    UpdateShippingDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminOrdersApi(configuration);

let id: string; //Order ID (default to undefined)
let updateShippingDto: UpdateShippingDto; //

const { status, data } = await apiInstance.usedishaAdminOrdersControllerShipV1(
    id,
    updateShippingDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateShippingDto** | **UpdateShippingDto**|  | |
| **id** | [**string**] | Order ID | defaults to undefined|


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

# **usedishaAdminOrdersControllerStatsV1**
> usedishaAdminOrdersControllerStatsV1()

Aggregate counts and revenue for marketplace orders across all businesses.

### Example

```typescript
import {
    UsedishaSystemAdminOrdersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminOrdersApi(configuration);

let marketplaceId: string; // (optional) (default to undefined)
let startDate: string; // (optional) (default to undefined)
let endDate: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.usedishaAdminOrdersControllerStatsV1(
    marketplaceId,
    startDate,
    endDate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **marketplaceId** | [**string**] |  | (optional) defaults to undefined|
| **startDate** | [**string**] |  | (optional) defaults to undefined|
| **endDate** | [**string**] |  | (optional) defaults to undefined|


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
|**200** | Marketplace order statistics |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

