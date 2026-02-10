# UsedishaCheckoutApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usedishaCheckoutControllerCheckOrderStatusV1**](#usedishacheckoutcontrollercheckorderstatusv1) | **GET** /v1/usedisha/usedisha/checkout/status/{intentReference} | Check order/payment status by intent reference|
|[**usedishaCheckoutControllerGetOrderIntentV1**](#usedishacheckoutcontrollergetorderintentv1) | **GET** /v1/usedisha/usedisha/checkout/intent/{intentId} | Get order intent details by ID|
|[**usedishaCheckoutControllerInitiateCheckoutV1**](#usedishacheckoutcontrollerinitiatecheckoutv1) | **POST** /v1/usedisha/usedisha/checkout/initiate | Initiate checkout and create order intent|
|[**usedishaCheckoutControllerValidateCartV1**](#usedishacheckoutcontrollervalidatecartv1) | **POST** /v1/usedisha/usedisha/checkout/validate-cart | Validate cart items before checkout|

# **usedishaCheckoutControllerCheckOrderStatusV1**
> UsedishaOrderStatusResponseDto usedishaCheckoutControllerCheckOrderStatusV1()


### Example

```typescript
import {
    UsedishaCheckoutApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaCheckoutApi(configuration);

let intentReference: string; //Order intent reference (default to undefined)

const { status, data } = await apiInstance.usedishaCheckoutControllerCheckOrderStatusV1(
    intentReference
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **intentReference** | [**string**] | Order intent reference | defaults to undefined|


### Return type

**UsedishaOrderStatusResponseDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Order status |  -  |
|**404** | Order intent not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaCheckoutControllerGetOrderIntentV1**
> usedishaCheckoutControllerGetOrderIntentV1()


### Example

```typescript
import {
    UsedishaCheckoutApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaCheckoutApi(configuration);

let intentId: string; //Order intent ID (default to undefined)

const { status, data } = await apiInstance.usedishaCheckoutControllerGetOrderIntentV1(
    intentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **intentId** | [**string**] | Order intent ID | defaults to undefined|


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
|**200** | Order intent details |  -  |
|**404** | Order intent not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaCheckoutControllerInitiateCheckoutV1**
> UsedishaCheckoutResponseDto usedishaCheckoutControllerInitiateCheckoutV1(usedishaInitiateCheckoutDto)


### Example

```typescript
import {
    UsedishaCheckoutApi,
    Configuration,
    UsedishaInitiateCheckoutDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaCheckoutApi(configuration);

let usedishaInitiateCheckoutDto: UsedishaInitiateCheckoutDto; //

const { status, data } = await apiInstance.usedishaCheckoutControllerInitiateCheckoutV1(
    usedishaInitiateCheckoutDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **usedishaInitiateCheckoutDto** | **UsedishaInitiateCheckoutDto**|  | |


### Return type

**UsedishaCheckoutResponseDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Checkout initiated successfully |  -  |
|**400** | Invalid checkout data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaCheckoutControllerValidateCartV1**
> UsedishaCartValidationResponseDto usedishaCheckoutControllerValidateCartV1(usedishaValidateCartDto)


### Example

```typescript
import {
    UsedishaCheckoutApi,
    Configuration,
    UsedishaValidateCartDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaCheckoutApi(configuration);

let usedishaValidateCartDto: UsedishaValidateCartDto; //

const { status, data } = await apiInstance.usedishaCheckoutControllerValidateCartV1(
    usedishaValidateCartDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **usedishaValidateCartDto** | **UsedishaValidateCartDto**|  | |


### Return type

**UsedishaCartValidationResponseDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Cart validation result |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

