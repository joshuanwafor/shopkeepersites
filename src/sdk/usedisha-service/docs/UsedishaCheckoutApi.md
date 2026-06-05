# UsedishaCheckoutApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usedishaCheckoutControllerCheckOrderStatusV1**](#usedishacheckoutcontrollercheckorderstatusv1) | **GET** /v1/usedisha/usedisha/checkout/status/{intentReference} | Check order/payment status by intent reference|
|[**usedishaCheckoutControllerEstimateFeesV1**](#usedishacheckoutcontrollerestimatefeesv1) | **POST** /v1/usedisha/usedisha/checkout/estimate-fees | Estimate checkout fees|
|[**usedishaCheckoutControllerGetGuestOrdersV1**](#usedishacheckoutcontrollergetguestordersv1) | **GET** /v1/usedisha/usedisha/checkout/orders | Guest order lookup by email|
|[**usedishaCheckoutControllerGetOrderIntentV1**](#usedishacheckoutcontrollergetorderintentv1) | **GET** /v1/usedisha/usedisha/checkout/intent/{intentId} | Get order intent details by ID|
|[**usedishaCheckoutControllerInitiateCheckoutV1**](#usedishacheckoutcontrollerinitiatecheckoutv1) | **POST** /v1/usedisha/usedisha/checkout/initiate | Checkout — place an order (guest or authenticated)|
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

# **usedishaCheckoutControllerEstimateFeesV1**
> UsedishaOrderFeeEstimateResponseDto usedishaCheckoutControllerEstimateFeesV1(usedishaEstimateFeesDto)

Returns the full fee breakdown (delivery, service, discount) for a cart before payment. Pass `userLng`/`userLat` for accurate distance-based EXPRESS delivery fees.

### Example

```typescript
import {
    UsedishaCheckoutApi,
    Configuration,
    UsedishaEstimateFeesDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaCheckoutApi(configuration);

let usedishaEstimateFeesDto: UsedishaEstimateFeesDto; //

const { status, data } = await apiInstance.usedishaCheckoutControllerEstimateFeesV1(
    usedishaEstimateFeesDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **usedishaEstimateFeesDto** | **UsedishaEstimateFeesDto**|  | |


### Return type

**UsedishaOrderFeeEstimateResponseDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Fee breakdown for the provided cart |  -  |
|**400** | Invalid cart items or store unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaCheckoutControllerGetGuestOrdersV1**
> UsedishaGuestOrdersResponseDto usedishaCheckoutControllerGetGuestOrdersV1()

Returns order summaries for a customer email at a given storefront — for shoppers who checked out without an account. Authenticated customers should use `GET usedisha/customer/orders`.

### Example

```typescript
import {
    UsedishaCheckoutApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaCheckoutApi(configuration);

let domain: string; // (default to undefined)
let email: string; // (default to undefined)

const { status, data } = await apiInstance.usedishaCheckoutControllerGetGuestOrdersV1(
    domain,
    email
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **domain** | [**string**] |  | defaults to undefined|
| **email** | [**string**] |  | defaults to undefined|


### Return type

**UsedishaGuestOrdersResponseDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Orders for the given email at this store |  -  |
|**400** | Email query is required |  -  |
|**404** | Storefront not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaCheckoutControllerGetOrderIntentV1**
> UsedishaOrderIntentDetailResponseDto usedishaCheckoutControllerGetOrderIntentV1()


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

**UsedishaOrderIntentDetailResponseDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Order intent details |  -  |
|**404** | Order intent not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaCheckoutControllerInitiateCheckoutV1**
> UsedishaCheckoutResponseDto usedishaCheckoutControllerInitiateCheckoutV1(usedishaInitiateCheckoutDto)

Validates the cart, prices it, creates an order intent and returns a payment URL. With a bearer token, customer identity is sourced from the JWT (and the order is linked to the account); without one, provide `customer.email`. Poll `GET usedisha/checkout/status/:intentReference`.

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

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Order intent created — open &#x60;paymentUrl&#x60; to complete payment |  -  |
|**400** | Cart validation failed, store inactive, or missing customer email |  -  |

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

