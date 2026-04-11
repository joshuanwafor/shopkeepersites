# UsedishaCustomerOrdersApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usedishaClientCustomerControllerCancelMyOrderV1**](#usedishaclientcustomercontrollercancelmyorderv1) | **PUT** /v1/usedisha/usedisha/{domain}/customer/orders/{orderId}/cancel | Cancel an order|
|[**usedishaClientCustomerControllerCheckoutV1**](#usedishaclientcustomercontrollercheckoutv1) | **POST** /v1/usedisha/usedisha/{domain}/customer/orders/checkout | Checkout — place an order|
|[**usedishaClientCustomerControllerEstimateFeesV1**](#usedishaclientcustomercontrollerestimatefeesv1) | **POST** /v1/usedisha/usedisha/{domain}/customer/orders/estimate-fees | Estimate checkout fees|
|[**usedishaClientCustomerControllerGetMyOrderV1**](#usedishaclientcustomercontrollergetmyorderv1) | **GET** /v1/usedisha/usedisha/{domain}/customer/orders/{orderId} | Get a single order|
|[**usedishaClientCustomerControllerListMyOrdersV1**](#usedishaclientcustomercontrollerlistmyordersv1) | **GET** /v1/usedisha/usedisha/{domain}/customer/orders | List my orders|
|[**usedishaCustomerOrdersControllerGetMyOrderV1**](#usedishacustomerorderscontrollergetmyorderv1) | **GET** /v1/usedisha/usedisha/customer/orders/{orderId} | Get my order detail|
|[**usedishaCustomerOrdersControllerListMyOrdersV1**](#usedishacustomerorderscontrollerlistmyordersv1) | **GET** /v1/usedisha/usedisha/customer/orders | List my orders (optional domain)|

# **usedishaClientCustomerControllerCancelMyOrderV1**
> OrderResponse usedishaClientCustomerControllerCancelMyOrderV1(cancelOrderDto)

Cancels a customer order. Only orders in `pending` or `confirmed` status can be cancelled. Providing a cancellation reason is optional but recommended.

### Example

```typescript
import {
    UsedishaCustomerOrdersApi,
    Configuration,
    CancelOrderDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaCustomerOrdersApi(configuration);

let domain: string; //Storefront domain (default to undefined)
let orderId: string; //MongoDB order ID (default to undefined)
let cancelOrderDto: CancelOrderDto; //

const { status, data } = await apiInstance.usedishaClientCustomerControllerCancelMyOrderV1(
    domain,
    orderId,
    cancelOrderDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cancelOrderDto** | **CancelOrderDto**|  | |
| **domain** | [**string**] | Storefront domain | defaults to undefined|
| **orderId** | [**string**] | MongoDB order ID | defaults to undefined|


### Return type

**OrderResponse**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Order successfully cancelled |  -  |
|**400** | Order is in a status that cannot be cancelled (e.g. already shipped) |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**404** | Order not found or does not belong to this customer |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaClientCustomerControllerCheckoutV1**
> UsedishaCheckoutResponseDto usedishaClientCustomerControllerCheckoutV1(usedishaInitiateCheckoutDto)

Validates the cart, creates an order intent and returns a payment URL. Customer identity (name, email, phone) is sourced from the JWT token and can be overridden by providing values in the `customer` field of the request body. Poll `GET /usedisha/checkout/status/:intentReference` to track payment progress.

### Example

```typescript
import {
    UsedishaCustomerOrdersApi,
    Configuration,
    UsedishaInitiateCheckoutDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaCustomerOrdersApi(configuration);

let domain: string; //Storefront domain (default to undefined)
let usedishaInitiateCheckoutDto: UsedishaInitiateCheckoutDto; //

const { status, data } = await apiInstance.usedishaClientCustomerControllerCheckoutV1(
    domain,
    usedishaInitiateCheckoutDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **usedishaInitiateCheckoutDto** | **UsedishaInitiateCheckoutDto**|  | |
| **domain** | [**string**] | Storefront domain | defaults to undefined|


### Return type

**UsedishaCheckoutResponseDto**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Order intent created — &#x60;paymentUrl&#x60; should be opened to complete payment |  -  |
|**400** | Cart validation failed (out-of-stock items, invalid quantities) or the store is inactive |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**404** | Storefront not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaClientCustomerControllerEstimateFeesV1**
> OrderFeeEstimateResponse usedishaClientCustomerControllerEstimateFeesV1(estimateOrderFeesDto)

Calculates and returns the full fee breakdown for a given cart before payment is initiated. Includes delivery fee (distance-based for EXPRESS), platform service fee, and any applicable discount. Pass `userLng` and `userLat` for accurate delivery fee calculation when using EXPRESS.

### Example

```typescript
import {
    UsedishaCustomerOrdersApi,
    Configuration,
    EstimateOrderFeesDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaCustomerOrdersApi(configuration);

let domain: string; //Storefront domain (default to undefined)
let estimateOrderFeesDto: EstimateOrderFeesDto; //

const { status, data } = await apiInstance.usedishaClientCustomerControllerEstimateFeesV1(
    domain,
    estimateOrderFeesDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **estimateOrderFeesDto** | **EstimateOrderFeesDto**|  | |
| **domain** | [**string**] | Storefront domain | defaults to undefined|


### Return type

**OrderFeeEstimateResponse**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Fee breakdown for the provided cart |  -  |
|**400** | Invalid cart items, unknown products, or store is not active |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**404** | Storefront not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaClientCustomerControllerGetMyOrderV1**
> OrderResponse usedishaClientCustomerControllerGetMyOrderV1()

Returns the full detail of one order. Returns 404 if the order does not exist or belongs to a different customer.

### Example

```typescript
import {
    UsedishaCustomerOrdersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaCustomerOrdersApi(configuration);

let domain: string; //Storefront domain (default to undefined)
let orderId: string; //MongoDB order ID (default to undefined)

const { status, data } = await apiInstance.usedishaClientCustomerControllerGetMyOrderV1(
    domain,
    orderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **domain** | [**string**] | Storefront domain | defaults to undefined|
| **orderId** | [**string**] | MongoDB order ID | defaults to undefined|


### Return type

**OrderResponse**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Order detail |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**404** | Order not found or does not belong to this customer |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaClientCustomerControllerListMyOrdersV1**
> PaginatedOrdersResponse usedishaClientCustomerControllerListMyOrdersV1()

Returns a paginated list of orders placed by the authenticated customer on this storefront. Optionally filter by order status.

### Example

```typescript
import {
    UsedishaCustomerOrdersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaCustomerOrdersApi(configuration);

let domain: string; //Storefront domain (default to undefined)
let status: 'pending' | 'confirmed' | 'processing' | 'ready_for_shipment' | 'shipped' | 'out_for_delivery' | 'delivered' | 'completed' | 'cancelled' | 'refunded' | 'on_hold' | 'failed'; //Filter by order status (optional) (default to undefined)
let page: number; //Page number (1-based) (optional) (default to 1)
let limit: number; //Number of results per page (optional) (default to 10)

const { status, data } = await apiInstance.usedishaClientCustomerControllerListMyOrdersV1(
    domain,
    status,
    page,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **domain** | [**string**] | Storefront domain | defaults to undefined|
| **status** | [**&#39;pending&#39; | &#39;confirmed&#39; | &#39;processing&#39; | &#39;ready_for_shipment&#39; | &#39;shipped&#39; | &#39;out_for_delivery&#39; | &#39;delivered&#39; | &#39;completed&#39; | &#39;cancelled&#39; | &#39;refunded&#39; | &#39;on_hold&#39; | &#39;failed&#39;**]**Array<&#39;pending&#39; &#124; &#39;confirmed&#39; &#124; &#39;processing&#39; &#124; &#39;ready_for_shipment&#39; &#124; &#39;shipped&#39; &#124; &#39;out_for_delivery&#39; &#124; &#39;delivered&#39; &#124; &#39;completed&#39; &#124; &#39;cancelled&#39; &#124; &#39;refunded&#39; &#124; &#39;on_hold&#39; &#124; &#39;failed&#39;>** | Filter by order status | (optional) defaults to undefined|
| **page** | [**number**] | Page number (1-based) | (optional) defaults to 1|
| **limit** | [**number**] | Number of results per page | (optional) defaults to 10|


### Return type

**PaginatedOrdersResponse**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Paginated list of orders |  -  |
|**401** | Missing or invalid JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaCustomerOrdersControllerGetMyOrderV1**
> usedishaCustomerOrdersControllerGetMyOrderV1()

Returns one customer order by ID for the authenticated customer.

### Example

```typescript
import {
    UsedishaCustomerOrdersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaCustomerOrdersApi(configuration);

let orderId: string; // (default to undefined)

const { status, data } = await apiInstance.usedishaCustomerOrdersControllerGetMyOrderV1(
    orderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderId** | [**string**] |  | defaults to undefined|


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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaCustomerOrdersControllerListMyOrdersV1**
> usedishaCustomerOrdersControllerListMyOrdersV1()

Returns paginated customer orders. Provide `domain` to scope to a storefront; omit to return across storefronts.

### Example

```typescript
import {
    UsedishaCustomerOrdersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaCustomerOrdersApi(configuration);

let domain: string; //Optional storefront domain filter (optional) (default to undefined)
let status: 'pending' | 'confirmed' | 'processing' | 'ready_for_shipment' | 'shipped' | 'out_for_delivery' | 'delivered' | 'completed' | 'cancelled' | 'refunded' | 'on_hold' | 'failed'; //Filter by order status (optional) (default to undefined)
let page: number; //Page number (1-based) (optional) (default to 1)
let limit: number; //Number of results per page (optional) (default to 10)

const { status, data } = await apiInstance.usedishaCustomerOrdersControllerListMyOrdersV1(
    domain,
    status,
    page,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **domain** | [**string**] | Optional storefront domain filter | (optional) defaults to undefined|
| **status** | [**&#39;pending&#39; | &#39;confirmed&#39; | &#39;processing&#39; | &#39;ready_for_shipment&#39; | &#39;shipped&#39; | &#39;out_for_delivery&#39; | &#39;delivered&#39; | &#39;completed&#39; | &#39;cancelled&#39; | &#39;refunded&#39; | &#39;on_hold&#39; | &#39;failed&#39;**]**Array<&#39;pending&#39; &#124; &#39;confirmed&#39; &#124; &#39;processing&#39; &#124; &#39;ready_for_shipment&#39; &#124; &#39;shipped&#39; &#124; &#39;out_for_delivery&#39; &#124; &#39;delivered&#39; &#124; &#39;completed&#39; &#124; &#39;cancelled&#39; &#124; &#39;refunded&#39; &#124; &#39;on_hold&#39; &#124; &#39;failed&#39;>** | Filter by order status | (optional) defaults to undefined|
| **page** | [**number**] | Page number (1-based) | (optional) defaults to 1|
| **limit** | [**number**] | Number of results per page | (optional) defaults to 10|


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
|**200** | Paginated list of orders |  -  |
|**401** | Missing or invalid JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

