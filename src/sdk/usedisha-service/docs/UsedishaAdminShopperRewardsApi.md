# UsedishaAdminShopperRewardsApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usedishaAdminRewardsControllerAdjustV1**](#usedishaadminrewardscontrolleradjustv1) | **POST** /v1/usedisha/usedisha/admin/rewards/shoppers/{accountId}/credit/adjustments | Add or remove a shopper\&#39;s credit|
|[**usedishaAdminRewardsControllerGetConfigV1**](#usedishaadminrewardscontrollergetconfigv1) | **GET** /v1/usedisha/usedisha/admin/rewards/config | Rewards settings|
|[**usedishaAdminRewardsControllerShopperCreditV1**](#usedishaadminrewardscontrollershoppercreditv1) | **GET** /v1/usedisha/usedisha/admin/rewards/shoppers/{accountId}/credit | A shopper\&#39;s credit balance and history|
|[**usedishaAdminRewardsControllerStatsV1**](#usedishaadminrewardscontrollerstatsv1) | **GET** /v1/usedisha/usedisha/admin/rewards/stats | Credit and referral totals|
|[**usedishaAdminRewardsControllerUpdateConfigV1**](#usedishaadminrewardscontrollerupdateconfigv1) | **PUT** /v1/usedisha/usedisha/admin/rewards/config | Change rewards settings|

# **usedishaAdminRewardsControllerAdjustV1**
> usedishaAdminRewardsControllerAdjustV1(adjustShopperCreditDto)

Recorded in their history with the reason. Cannot take the balance below zero.

### Example

```typescript
import {
    UsedishaAdminShopperRewardsApi,
    Configuration,
    AdjustShopperCreditDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaAdminShopperRewardsApi(configuration);

let accountId: string; // (default to undefined)
let adjustShopperCreditDto: AdjustShopperCreditDto; //

const { status, data } = await apiInstance.usedishaAdminRewardsControllerAdjustV1(
    accountId,
    adjustShopperCreditDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adjustShopperCreditDto** | **AdjustShopperCreditDto**|  | |
| **accountId** | [**string**] |  | defaults to undefined|


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

# **usedishaAdminRewardsControllerGetConfigV1**
> usedishaAdminRewardsControllerGetConfigV1()


### Example

```typescript
import {
    UsedishaAdminShopperRewardsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaAdminShopperRewardsApi(configuration);

const { status, data } = await apiInstance.usedishaAdminRewardsControllerGetConfigV1();
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

# **usedishaAdminRewardsControllerShopperCreditV1**
> usedishaAdminRewardsControllerShopperCreditV1()


### Example

```typescript
import {
    UsedishaAdminShopperRewardsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaAdminShopperRewardsApi(configuration);

let accountId: string; // (default to undefined)
let limit: number; // (optional) (default to 20)
let before: string; //Page back from this createdAt (the last page\'s nextBefore) (optional) (default to undefined)

const { status, data } = await apiInstance.usedishaAdminRewardsControllerShopperCreditV1(
    accountId,
    limit,
    before
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] |  | defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to 20|
| **before** | [**string**] | Page back from this createdAt (the last page\&#39;s nextBefore) | (optional) defaults to undefined|


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

# **usedishaAdminRewardsControllerStatsV1**
> usedishaAdminRewardsControllerStatsV1()

Kobo, across all shoppers.

### Example

```typescript
import {
    UsedishaAdminShopperRewardsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaAdminShopperRewardsApi(configuration);

const { status, data } = await apiInstance.usedishaAdminRewardsControllerStatsV1();
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

# **usedishaAdminRewardsControllerUpdateConfigV1**
> usedishaAdminRewardsControllerUpdateConfigV1(updateShopperRewardsConfigDto)

Only the fields sent are changed.

### Example

```typescript
import {
    UsedishaAdminShopperRewardsApi,
    Configuration,
    UpdateShopperRewardsConfigDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaAdminShopperRewardsApi(configuration);

let updateShopperRewardsConfigDto: UpdateShopperRewardsConfigDto; //

const { status, data } = await apiInstance.usedishaAdminRewardsControllerUpdateConfigV1(
    updateShopperRewardsConfigDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateShopperRewardsConfigDto** | **UpdateShopperRewardsConfigDto**|  | |


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

