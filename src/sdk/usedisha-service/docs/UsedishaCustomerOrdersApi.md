# UsedishaCustomerOrdersApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usedishaCustomerOrderAgainControllerListV1**](#usedishacustomerorderagaincontrollerlistv1) | **GET** /v1/usedisha/usedisha/customer/order-again | My orders to order again|
|[**usedishaCustomerOrderAgainControllerReorderV1**](#usedishacustomerorderagaincontrollerreorderv1) | **GET** /v1/usedisha/usedisha/customer/orders/{orderId}/reorder | One of my orders as a cart today|
|[**usedishaCustomerOrdersControllerCancelMyOrderV1**](#usedishacustomerorderscontrollercancelmyorderv1) | **PUT** /v1/usedisha/usedisha/customer/orders/{orderId}/cancel | Cancel an order|
|[**usedishaCustomerOrdersControllerGetMyOrderV1**](#usedishacustomerorderscontrollergetmyorderv1) | **GET** /v1/usedisha/usedisha/customer/orders/{orderId} | Get one of my orders|
|[**usedishaCustomerOrdersControllerListMyOrdersV1**](#usedishacustomerorderscontrollerlistmyordersv1) | **GET** /v1/usedisha/usedisha/customer/orders | List my orders|
|[**usedishaCustomerOrdersControllerRateMyOrderV1**](#usedishacustomerorderscontrollerratemyorderv1) | **POST** /v1/usedisha/usedisha/customer/orders/{orderId}/rate | Rate an order|

# **usedishaCustomerOrderAgainControllerListV1**
> usedishaCustomerOrderAgainControllerListV1()

The caller’s delivered or completed ShopCentral orders, newest first, skipping stores no longer listed on ShopCentral. For the home’s order_again section.

### Example

```typescript
import {
    UsedishaCustomerOrdersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaCustomerOrdersApi(configuration);

let limit: number; //How many orders (1–10, default 5) (optional) (default to undefined)

const { status, data } = await apiInstance.usedishaCustomerOrderAgainControllerListV1(
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | How many orders (1–10, default 5) | (optional) defaults to undefined|


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
|**200** | { orders: [{ orderId, orderNumber?, placedAt, storeId, domain, storeName, storeLogo?, itemCount, summary, total (₦) }] } |  -  |
|**401** | Missing or invalid JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaCustomerOrderAgainControllerReorderV1**
> usedishaCustomerOrderAgainControllerReorderV1()

Each item of the caller’s order at today’s price, with `available` and, when it can’t be bought, a `reason`: unavailable, out_of_stock, store_not_taking_orders or not_listed. The same checks as checkout. Nothing is written: the client adds the available items to its cart.

### Example

```typescript
import {
    UsedishaCustomerOrdersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaCustomerOrdersApi(configuration);

let orderId: string; //MongoDB order ID (default to undefined)

const { status, data } = await apiInstance.usedishaCustomerOrderAgainControllerReorderV1(
    orderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderId** | [**string**] | MongoDB order ID | defaults to undefined|


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
|**200** | { storeId, domain, storeName, branchId, items: [{ productId, variantId?, name, variantName?, imageUrl?, quantity, unitPrice (₦), available, reason? }] } |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**404** | Order not found, not the caller’s, or its store no longer exists |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaCustomerOrdersControllerCancelMyOrderV1**
> OrderResponse usedishaCustomerOrdersControllerCancelMyOrderV1(cancelOrderDto)

Cancels an order owned by the authenticated customer. Only orders in a cancellable status (e.g. pending/confirmed) can be cancelled — the order handler enforces the rules. Self-service cancellation is limited to 12 hours after the order was placed; after that the customer is directed to support and an admin handles the cancellation and any refund.

### Example

```typescript
import {
    UsedishaCustomerOrdersApi,
    Configuration,
    CancelOrderDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaCustomerOrdersApi(configuration);

let orderId: string; //MongoDB order ID (default to undefined)
let cancelOrderDto: CancelOrderDto; //

const { status, data } = await apiInstance.usedishaCustomerOrdersControllerCancelMyOrderV1(
    orderId,
    cancelOrderDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cancelOrderDto** | **CancelOrderDto**|  | |
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
|**400** | Order is in a status that cannot be cancelled |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**404** | Order not found or does not belong to this customer |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaCustomerOrdersControllerGetMyOrderV1**
> OrderResponse usedishaCustomerOrdersControllerGetMyOrderV1()

Returns one order owned by the authenticated customer, or 404 otherwise.

### Example

```typescript
import {
    UsedishaCustomerOrdersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaCustomerOrdersApi(configuration);

let orderId: string; //MongoDB order ID (default to undefined)

const { status, data } = await apiInstance.usedishaCustomerOrdersControllerGetMyOrderV1(
    orderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **usedishaCustomerOrdersControllerListMyOrdersV1**
> PaginatedOrdersResponse usedishaCustomerOrdersControllerListMyOrdersV1()

Paginated orders for the authenticated customer. Optionally scope to a storefront with `domain`, or filter by `status`. Omit `domain` to return orders across all storefronts.

### Example

```typescript
import {
    UsedishaCustomerOrdersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaCustomerOrdersApi(configuration);

let domain: string; //Scope to a single storefront domain (optional) (default to undefined)
let status: 'pending' | 'confirmed' | 'processing' | 'ready_for_shipment' | 'shipped' | 'out_for_delivery' | 'delivered' | 'completed' | 'cancelled' | 'refunded' | 'on_hold' | 'failed'; //Filter orders by status (optional) (default to undefined)
let page: number; //Page number (1-based) (optional) (default to 1)
let limit: number; //Results per page (optional) (default to 10)

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
| **domain** | [**string**] | Scope to a single storefront domain | (optional) defaults to undefined|
| **status** | [**&#39;pending&#39; | &#39;confirmed&#39; | &#39;processing&#39; | &#39;ready_for_shipment&#39; | &#39;shipped&#39; | &#39;out_for_delivery&#39; | &#39;delivered&#39; | &#39;completed&#39; | &#39;cancelled&#39; | &#39;refunded&#39; | &#39;on_hold&#39; | &#39;failed&#39;**]**Array<&#39;pending&#39; &#124; &#39;confirmed&#39; &#124; &#39;processing&#39; &#124; &#39;ready_for_shipment&#39; &#124; &#39;shipped&#39; &#124; &#39;out_for_delivery&#39; &#124; &#39;delivered&#39; &#124; &#39;completed&#39; &#124; &#39;cancelled&#39; &#124; &#39;refunded&#39; &#124; &#39;on_hold&#39; &#124; &#39;failed&#39;>** | Filter orders by status | (optional) defaults to undefined|
| **page** | [**number**] | Page number (1-based) | (optional) defaults to 1|
| **limit** | [**number**] | Results per page | (optional) defaults to 10|


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

# **usedishaCustomerOrdersControllerRateMyOrderV1**
> OrderRatingResponse usedishaCustomerOrdersControllerRateMyOrderV1(rateOrderDto)

Submit a 1–5 star rating (with optional title/comment) for an order owned by the authenticated customer. Recorded as a verified-purchase review pending moderation. An order can only be rated once.

### Example

```typescript
import {
    UsedishaCustomerOrdersApi,
    Configuration,
    RateOrderDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaCustomerOrdersApi(configuration);

let orderId: string; //MongoDB order ID (default to undefined)
let rateOrderDto: RateOrderDto; //

const { status, data } = await apiInstance.usedishaCustomerOrdersControllerRateMyOrderV1(
    orderId,
    rateOrderDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rateOrderDto** | **RateOrderDto**|  | |
| **orderId** | [**string**] | MongoDB order ID | defaults to undefined|


### Return type

**OrderRatingResponse**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Rating submitted |  -  |
|**400** | Invalid rating, the order is not delivered/completed, or it has already been rated |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**404** | Order not found or does not belong to this customer |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

