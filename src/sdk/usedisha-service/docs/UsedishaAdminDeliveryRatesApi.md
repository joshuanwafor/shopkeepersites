# UsedishaAdminDeliveryRatesApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usedishaAdminDeliveryRatesControllerCreateScenarioV1**](#usedishaadmindeliveryratescontrollercreatescenariov1) | **POST** /v1/usedisha/usedisha/admin/delivery-rates/scenarios | Keep a test order for the team|
|[**usedishaAdminDeliveryRatesControllerDeleteScenarioV1**](#usedishaadmindeliveryratescontrollerdeletescenariov1) | **DELETE** /v1/usedisha/usedisha/admin/delivery-rates/scenarios/{id} | Delete a saved test order|
|[**usedishaAdminDeliveryRatesControllerGetV1**](#usedishaadmindeliveryratescontrollergetv1) | **GET** /v1/usedisha/usedisha/admin/delivery-rates | The delivery rate card|
|[**usedishaAdminDeliveryRatesControllerRestoreV1**](#usedishaadmindeliveryratescontrollerrestorev1) | **POST** /v1/usedisha/usedisha/admin/delivery-rates/versions/{version}/restore | Put an earlier version back|
|[**usedishaAdminDeliveryRatesControllerScenariosV1**](#usedishaadmindeliveryratescontrollerscenariosv1) | **GET** /v1/usedisha/usedisha/admin/delivery-rates/scenarios | Test orders: the built-in ones, then the team\&#39;s|
|[**usedishaAdminDeliveryRatesControllerSimulateV1**](#usedishaadmindeliveryratescontrollersimulatev1) | **POST** /v1/usedisha/usedisha/admin/delivery-rates/simulate | Price test orders|
|[**usedishaAdminDeliveryRatesControllerUpdateScenarioV1**](#usedishaadmindeliveryratescontrollerupdatescenariov1) | **PUT** /v1/usedisha/usedisha/admin/delivery-rates/scenarios/{id} | Change a saved test order|
|[**usedishaAdminDeliveryRatesControllerUpdateV1**](#usedishaadmindeliveryratescontrollerupdatev1) | **PUT** /v1/usedisha/usedisha/admin/delivery-rates | Save a new version of the rate card|
|[**usedishaAdminDeliveryRatesControllerVersionV1**](#usedishaadmindeliveryratescontrollerversionv1) | **GET** /v1/usedisha/usedisha/admin/delivery-rates/versions/{version} | One saved version, with its whole card|
|[**usedishaAdminDeliveryRatesControllerVersionsV1**](#usedishaadmindeliveryratescontrollerversionsv1) | **GET** /v1/usedisha/usedisha/admin/delivery-rates/versions | Saved versions, newest first|

# **usedishaAdminDeliveryRatesControllerCreateScenarioV1**
> usedishaAdminDeliveryRatesControllerCreateScenarioV1(saveDeliveryScenarioDto)


### Example

```typescript
import {
    UsedishaAdminDeliveryRatesApi,
    Configuration,
    SaveDeliveryScenarioDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaAdminDeliveryRatesApi(configuration);

let saveDeliveryScenarioDto: SaveDeliveryScenarioDto; //

const { status, data } = await apiInstance.usedishaAdminDeliveryRatesControllerCreateScenarioV1(
    saveDeliveryScenarioDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **saveDeliveryScenarioDto** | **SaveDeliveryScenarioDto**|  | |


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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminDeliveryRatesControllerDeleteScenarioV1**
> usedishaAdminDeliveryRatesControllerDeleteScenarioV1()


### Example

```typescript
import {
    UsedishaAdminDeliveryRatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaAdminDeliveryRatesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.usedishaAdminDeliveryRatesControllerDeleteScenarioV1(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminDeliveryRatesControllerGetV1**
> usedishaAdminDeliveryRatesControllerGetV1()

Saved values over the defaults, its version, who saved it last and why, and `checks`: things that look off.

### Example

```typescript
import {
    UsedishaAdminDeliveryRatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaAdminDeliveryRatesApi(configuration);

const { status, data } = await apiInstance.usedishaAdminDeliveryRatesControllerGetV1();
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminDeliveryRatesControllerRestoreV1**
> usedishaAdminDeliveryRatesControllerRestoreV1(restoreDeliveryRateCardDto)

Saved as a new version. 409 RATE_CARD_CHANGED as for a save.

### Example

```typescript
import {
    UsedishaAdminDeliveryRatesApi,
    Configuration,
    RestoreDeliveryRateCardDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaAdminDeliveryRatesApi(configuration);

let version: number; // (default to undefined)
let restoreDeliveryRateCardDto: RestoreDeliveryRateCardDto; //

const { status, data } = await apiInstance.usedishaAdminDeliveryRatesControllerRestoreV1(
    version,
    restoreDeliveryRateCardDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **restoreDeliveryRateCardDto** | **RestoreDeliveryRateCardDto**|  | |
| **version** | [**number**] |  | defaults to undefined|


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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminDeliveryRatesControllerScenariosV1**
> usedishaAdminDeliveryRatesControllerScenariosV1()


### Example

```typescript
import {
    UsedishaAdminDeliveryRatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaAdminDeliveryRatesApi(configuration);

const { status, data } = await apiInstance.usedishaAdminDeliveryRatesControllerScenariosV1();
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminDeliveryRatesControllerSimulateV1**
> usedishaAdminDeliveryRatesControllerSimulateV1(simulateDeliveryDto)

Each scenario priced as checkout would, line by line, with the saved card and, given `draft`, with unsaved changes too. Says why when it would be refused.

### Example

```typescript
import {
    UsedishaAdminDeliveryRatesApi,
    Configuration,
    SimulateDeliveryDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaAdminDeliveryRatesApi(configuration);

let simulateDeliveryDto: SimulateDeliveryDto; //

const { status, data } = await apiInstance.usedishaAdminDeliveryRatesControllerSimulateV1(
    simulateDeliveryDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **simulateDeliveryDto** | **SimulateDeliveryDto**|  | |


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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminDeliveryRatesControllerUpdateScenarioV1**
> usedishaAdminDeliveryRatesControllerUpdateScenarioV1(saveDeliveryScenarioDto)


### Example

```typescript
import {
    UsedishaAdminDeliveryRatesApi,
    Configuration,
    SaveDeliveryScenarioDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaAdminDeliveryRatesApi(configuration);

let id: string; // (default to undefined)
let saveDeliveryScenarioDto: SaveDeliveryScenarioDto; //

const { status, data } = await apiInstance.usedishaAdminDeliveryRatesControllerUpdateScenarioV1(
    id,
    saveDeliveryScenarioDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **saveDeliveryScenarioDto** | **SaveDeliveryScenarioDto**|  | |
| **id** | [**string**] |  | defaults to undefined|


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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminDeliveryRatesControllerUpdateV1**
> usedishaAdminDeliveryRatesControllerUpdateV1(updateDeliveryRateCardDto)

Only the sections sent are replaced. Applies to the next quote. Send `expectedVersion` (the version you edited): if someone has saved since, nothing is saved and the answer is 409 RATE_CARD_CHANGED.

### Example

```typescript
import {
    UsedishaAdminDeliveryRatesApi,
    Configuration,
    UpdateDeliveryRateCardDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaAdminDeliveryRatesApi(configuration);

let updateDeliveryRateCardDto: UpdateDeliveryRateCardDto; //

const { status, data } = await apiInstance.usedishaAdminDeliveryRatesControllerUpdateV1(
    updateDeliveryRateCardDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateDeliveryRateCardDto** | **UpdateDeliveryRateCardDto**|  | |


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
|**409** | Someone saved since (RATE_CARD_CHANGED) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminDeliveryRatesControllerVersionV1**
> usedishaAdminDeliveryRatesControllerVersionV1()


### Example

```typescript
import {
    UsedishaAdminDeliveryRatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaAdminDeliveryRatesApi(configuration);

let version: number; // (default to undefined)

const { status, data } = await apiInstance.usedishaAdminDeliveryRatesControllerVersionV1(
    version
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **version** | [**number**] |  | defaults to undefined|


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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminDeliveryRatesControllerVersionsV1**
> usedishaAdminDeliveryRatesControllerVersionsV1()


### Example

```typescript
import {
    UsedishaAdminDeliveryRatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaAdminDeliveryRatesApi(configuration);

let limit: string; // (default to undefined)

const { status, data } = await apiInstance.usedishaAdminDeliveryRatesControllerVersionsV1(
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**string**] |  | defaults to undefined|


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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

