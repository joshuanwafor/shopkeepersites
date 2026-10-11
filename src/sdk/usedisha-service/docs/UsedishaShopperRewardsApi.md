# UsedishaShopperRewardsApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usedishaCustomerRewardsControllerApplyCodeV1**](#usedishacustomerrewardscontrollerapplycodev1) | **POST** /v1/usedisha/usedisha/customer/rewards/referral-code | Use a friend\&#39;s referral code|
|[**usedishaCustomerRewardsControllerHistoryV1**](#usedishacustomerrewardscontrollerhistoryv1) | **GET** /v1/usedisha/usedisha/customer/rewards/credit | My credit history|
|[**usedishaCustomerRewardsControllerSummaryV1**](#usedishacustomerrewardscontrollersummaryv1) | **GET** /v1/usedisha/usedisha/customer/rewards | My credit and referrals|
|[**usedishaReferralCodesControllerLookupV1**](#usedishareferralcodescontrollerlookupv1) | **GET** /v1/usedisha/usedisha/referrals/{code} | Look up a referral code|

# **usedishaCustomerRewardsControllerApplyCodeV1**
> usedishaCustomerRewardsControllerApplyCodeV1(applyReferralCodeDto)

For shoppers who signed up without one (e.g. with Google): allowed once, within the first days, before the first order. Gives the welcome credit.

### Example

```typescript
import {
    UsedishaShopperRewardsApi,
    Configuration,
    ApplyReferralCodeDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaShopperRewardsApi(configuration);

let applyReferralCodeDto: ApplyReferralCodeDto; //

const { status, data } = await apiInstance.usedishaCustomerRewardsControllerApplyCodeV1(
    applyReferralCodeDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **applyReferralCodeDto** | **ApplyReferralCodeDto**|  | |


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
|**401** | Sign in to see your credit |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaCustomerRewardsControllerHistoryV1**
> usedishaCustomerRewardsControllerHistoryV1()

Newest first; page with `before`.

### Example

```typescript
import {
    UsedishaShopperRewardsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaShopperRewardsApi(configuration);

let limit: number; // (optional) (default to 20)
let before: string; //Page back from this createdAt (the last page\'s nextBefore) (optional) (default to undefined)

const { status, data } = await apiInstance.usedishaCustomerRewardsControllerHistoryV1(
    limit,
    before
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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
|**401** | Sign in to see your credit |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaCustomerRewardsControllerSummaryV1**
> usedishaCustomerRewardsControllerSummaryV1()

Credit balance, my referral code and share link, what friends earned me, and whether I can still enter a friend\'s code.

### Example

```typescript
import {
    UsedishaShopperRewardsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaShopperRewardsApi(configuration);

const { status, data } = await apiInstance.usedishaCustomerRewardsControllerSummaryV1();
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
|**401** | Sign in to see your credit |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaReferralCodesControllerLookupV1**
> usedishaReferralCodesControllerLookupV1()


### Example

```typescript
import {
    UsedishaShopperRewardsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaShopperRewardsApi(configuration);

let code: string; // (default to undefined)

const { status, data } = await apiInstance.usedishaReferralCodesControllerLookupV1(
    code
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **code** | [**string**] |  | defaults to undefined|


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
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

