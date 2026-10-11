# UsedishaBulkCheckoutApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usedishaBulkCheckoutControllerEstimateFeesV1**](#usedishabulkcheckoutcontrollerestimatefeesv1) | **POST** /v1/usedisha/usedisha/checkout/bulk/estimate-fees | Estimate fees for a multi-store cart|
|[**usedishaBulkCheckoutControllerGetStatusV1**](#usedishabulkcheckoutcontrollergetstatusv1) | **GET** /v1/usedisha/usedisha/checkout/bulk/status/{groupReference} | Payment status of a bulk checkout, and each store\&#39;s order|
|[**usedishaBulkCheckoutControllerInitiateV1**](#usedishabulkcheckoutcontrollerinitiatev1) | **POST** /v1/usedisha/usedisha/checkout/bulk/initiate | Bulk checkout — one payment, one order per store (guest or authenticated)|

# **usedishaBulkCheckoutControllerEstimateFeesV1**
> UsedishaBulkFeeEstimateResponseDto usedishaBulkCheckoutControllerEstimateFeesV1(usedishaBulkEstimateFeesDto)

Prices each store as `usedisha/checkout/estimate-fees` does. A store that cannot be priced is reported in its own `error` instead of failing the request; `allAvailable` says whether every store can be checked out.

### Example

```typescript
import {
    UsedishaBulkCheckoutApi,
    Configuration,
    UsedishaBulkEstimateFeesDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaBulkCheckoutApi(configuration);

let usedishaBulkEstimateFeesDto: UsedishaBulkEstimateFeesDto; //

const { status, data } = await apiInstance.usedishaBulkCheckoutControllerEstimateFeesV1(
    usedishaBulkEstimateFeesDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **usedishaBulkEstimateFeesDto** | **UsedishaBulkEstimateFeesDto**|  | |


### Return type

**UsedishaBulkFeeEstimateResponseDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** | Invalid body, or a store listed twice |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaBulkCheckoutControllerGetStatusV1**
> UsedishaBulkCheckoutStatusResponseDto usedishaBulkCheckoutControllerGetStatusV1()


### Example

```typescript
import {
    UsedishaBulkCheckoutApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaBulkCheckoutApi(configuration);

let groupReference: string; //Reference returned by initiate (default to undefined)

const { status, data } = await apiInstance.usedishaBulkCheckoutControllerGetStatusV1(
    groupReference
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupReference** | [**string**] | Reference returned by initiate | defaults to undefined|


### Return type

**UsedishaBulkCheckoutStatusResponseDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**404** | Checkout not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaBulkCheckoutControllerInitiateV1**
> UsedishaBulkCheckoutResponseDto usedishaBulkCheckoutControllerInitiateV1(usedishaBulkInitiateCheckoutDto)

Checks and prices every store exactly as the single-store checkout does, creates one order intent per store and returns ONE payment URL for their total. Each order is created once the payment succeeds. Poll `GET usedisha/checkout/bulk/status/:groupReference`.

### Example

```typescript
import {
    UsedishaBulkCheckoutApi,
    Configuration,
    UsedishaBulkInitiateCheckoutDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaBulkCheckoutApi(configuration);

let usedishaBulkInitiateCheckoutDto: UsedishaBulkInitiateCheckoutDto; //

const { status, data } = await apiInstance.usedishaBulkCheckoutControllerInitiateV1(
    usedishaBulkInitiateCheckoutDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **usedishaBulkInitiateCheckoutDto** | **UsedishaBulkInitiateCheckoutDto**|  | |


### Return type

**UsedishaBulkCheckoutResponseDto**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |
|**400** | A store failed its checks (each listed in &#x60;stores&#x60;), a store listed twice, or no customer email |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

