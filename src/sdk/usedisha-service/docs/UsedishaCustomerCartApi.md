# UsedishaCustomerCartApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usedishaCustomerCartControllerAddLineV1**](#usedishacustomercartcontrolleraddlinev1) | **POST** /v1/usedisha/usedisha/customer/cart/lines | Add a product to my cart|
|[**usedishaCustomerCartControllerClearCartV1**](#usedishacustomercartcontrollerclearcartv1) | **DELETE** /v1/usedisha/usedisha/customer/cart | Empty my cart|
|[**usedishaCustomerCartControllerGetCartV1**](#usedishacustomercartcontrollergetcartv1) | **GET** /v1/usedisha/usedisha/customer/cart | Get my cart|
|[**usedishaCustomerCartControllerRemoveLineV1**](#usedishacustomercartcontrollerremovelinev1) | **DELETE** /v1/usedisha/usedisha/customer/cart/lines/{lineId} | Remove a line from my cart|
|[**usedishaCustomerCartControllerReplaceCartV1**](#usedishacustomercartcontrollerreplacecartv1) | **PUT** /v1/usedisha/usedisha/customer/cart | Save my whole cart|
|[**usedishaCustomerCartControllerSetLineQuantityV1**](#usedishacustomercartcontrollersetlinequantityv1) | **PATCH** /v1/usedisha/usedisha/customer/cart/lines/{lineId} | Change a line quantity|

# **usedishaCustomerCartControllerAddLineV1**
> CustomerCartResponseDto usedishaCustomerCartControllerAddLineV1(customerCartLineDto)

If the product is already in the cart, adds `quantity` to its line (up to 99) and refreshes its details.

### Example

```typescript
import {
    UsedishaCustomerCartApi,
    Configuration,
    CustomerCartLineDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaCustomerCartApi(configuration);

let customerCartLineDto: CustomerCartLineDto; //

const { status, data } = await apiInstance.usedishaCustomerCartControllerAddLineV1(
    customerCartLineDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customerCartLineDto** | **CustomerCartLineDto**|  | |


### Return type

**CustomerCartResponseDto**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**401** | Sign in to save your cart |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaCustomerCartControllerClearCartV1**
> CustomerCartResponseDto usedishaCustomerCartControllerClearCartV1()


### Example

```typescript
import {
    UsedishaCustomerCartApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaCustomerCartApi(configuration);

const { status, data } = await apiInstance.usedishaCustomerCartControllerClearCartV1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**CustomerCartResponseDto**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**401** | Sign in to save your cart |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaCustomerCartControllerGetCartV1**
> CustomerCartResponseDto usedishaCustomerCartControllerGetCartV1()

Returns an empty cart when nothing has been saved yet.

### Example

```typescript
import {
    UsedishaCustomerCartApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaCustomerCartApi(configuration);

const { status, data } = await apiInstance.usedishaCustomerCartControllerGetCartV1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**CustomerCartResponseDto**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**401** | Sign in to save your cart |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaCustomerCartControllerRemoveLineV1**
> CustomerCartResponseDto usedishaCustomerCartControllerRemoveLineV1()


### Example

```typescript
import {
    UsedishaCustomerCartApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaCustomerCartApi(configuration);

let lineId: string; //Line id: `storeId:productId` (default to undefined)

const { status, data } = await apiInstance.usedishaCustomerCartControllerRemoveLineV1(
    lineId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lineId** | [**string**] | Line id: &#x60;storeId:productId&#x60; | defaults to undefined|


### Return type

**CustomerCartResponseDto**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**401** | Sign in to save your cart |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaCustomerCartControllerReplaceCartV1**
> CustomerCartResponseDto usedishaCustomerCartControllerReplaceCartV1(replaceCustomerCartDto)

Replaces the saved cart. A product listed twice is merged into one line.

### Example

```typescript
import {
    UsedishaCustomerCartApi,
    Configuration,
    ReplaceCustomerCartDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaCustomerCartApi(configuration);

let replaceCustomerCartDto: ReplaceCustomerCartDto; //

const { status, data } = await apiInstance.usedishaCustomerCartControllerReplaceCartV1(
    replaceCustomerCartDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **replaceCustomerCartDto** | **ReplaceCustomerCartDto**|  | |


### Return type

**CustomerCartResponseDto**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**401** | Sign in to save your cart |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaCustomerCartControllerSetLineQuantityV1**
> CustomerCartResponseDto usedishaCustomerCartControllerSetLineQuantityV1(updateCustomerCartLineDto)

A quantity of 0 removes the line.

### Example

```typescript
import {
    UsedishaCustomerCartApi,
    Configuration,
    UpdateCustomerCartLineDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaCustomerCartApi(configuration);

let lineId: string; //Line id: `storeId:productId` (default to undefined)
let updateCustomerCartLineDto: UpdateCustomerCartLineDto; //

const { status, data } = await apiInstance.usedishaCustomerCartControllerSetLineQuantityV1(
    lineId,
    updateCustomerCartLineDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateCustomerCartLineDto** | **UpdateCustomerCartLineDto**|  | |
| **lineId** | [**string**] | Line id: &#x60;storeId:productId&#x60; | defaults to undefined|


### Return type

**CustomerCartResponseDto**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**401** | Sign in to save your cart |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

