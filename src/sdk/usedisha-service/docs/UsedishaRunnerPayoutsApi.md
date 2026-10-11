# UsedishaRunnerPayoutsApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usedishaRunnerPayoutsControllerBanksV1**](#usedisharunnerpayoutscontrollerbanksv1) | **GET** /v1/usedisha/usedisha/runner/payouts/banks | Banks a runner can choose from|
|[**usedishaRunnerPayoutsControllerProfileV1**](#usedisharunnerpayoutscontrollerprofilev1) | **GET** /v1/usedisha/usedisha/runner/payouts/profile | The caller\&#39;s current payout destination|
|[**usedishaRunnerPayoutsControllerResolveAccountV1**](#usedisharunnerpayoutscontrollerresolveaccountv1) | **POST** /v1/usedisha/usedisha/runner/payouts/resolve-account | Check an account number and return the name on it|
|[**usedishaRunnerPayoutsControllerSetupProfileV1**](#usedisharunnerpayoutscontrollersetupprofilev1) | **PUT** /v1/usedisha/usedisha/runner/payouts/profile | Set or replace where the caller is paid|

# **usedishaRunnerPayoutsControllerBanksV1**
> usedishaRunnerPayoutsControllerBanksV1()

Populates the bank picker on the payout-details form.

### Example

```typescript
import {
    UsedishaRunnerPayoutsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaRunnerPayoutsApi(configuration);

let country: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.usedishaRunnerPayoutsControllerBanksV1(
    country
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **country** | [**string**] |  | (optional) defaults to undefined|


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

# **usedishaRunnerPayoutsControllerProfileV1**
> AccountPayoutProfile usedishaRunnerPayoutsControllerProfileV1()

Null when they have not set one up yet.

### Example

```typescript
import {
    UsedishaRunnerPayoutsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaRunnerPayoutsApi(configuration);

const { status, data } = await apiInstance.usedishaRunnerPayoutsControllerProfileV1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AccountPayoutProfile**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaRunnerPayoutsControllerResolveAccountV1**
> usedishaRunnerPayoutsControllerResolveAccountV1(resolveBankAccountDto)

Shown to the runner for confirmation before anything is saved. The name comes from the bank, not the client.

### Example

```typescript
import {
    UsedishaRunnerPayoutsApi,
    Configuration,
    ResolveBankAccountDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaRunnerPayoutsApi(configuration);

let resolveBankAccountDto: ResolveBankAccountDto; //

const { status, data } = await apiInstance.usedishaRunnerPayoutsControllerResolveAccountV1(
    resolveBankAccountDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resolveBankAccountDto** | **ResolveBankAccountDto**|  | |


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

# **usedishaRunnerPayoutsControllerSetupProfileV1**
> AccountPayoutProfile usedishaRunnerPayoutsControllerSetupProfileV1(setupPayoutRecipientDto)

Verifies the account with the provider, creates the transfer recipient, and stores it. Replacing it redirects future earnings only — payouts already sent keep a record of the account they actually went to.

### Example

```typescript
import {
    UsedishaRunnerPayoutsApi,
    Configuration,
    SetupPayoutRecipientDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaRunnerPayoutsApi(configuration);

let setupPayoutRecipientDto: SetupPayoutRecipientDto; //

const { status, data } = await apiInstance.usedishaRunnerPayoutsControllerSetupProfileV1(
    setupPayoutRecipientDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setupPayoutRecipientDto** | **SetupPayoutRecipientDto**|  | |


### Return type

**AccountPayoutProfile**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

