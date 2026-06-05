# UsedishaSellerMarketsApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usedishaSellerMarketsControllerLeaveV1**](#usedishasellermarketscontrollerleavev1) | **DELETE** /v1/usedisha/{businessId}/usedisha/markets/{membershipId} | Leave a market / cancel a request|
|[**usedishaSellerMarketsControllerMyMembershipsV1**](#usedishasellermarketscontrollermymembershipsv1) | **GET** /v1/usedisha/{businessId}/usedisha/markets | List my market memberships|
|[**usedishaSellerMarketsControllerRequestV1**](#usedishasellermarketscontrollerrequestv1) | **POST** /v1/usedisha/{businessId}/usedisha/markets | Request to list a branch in a market|

# **usedishaSellerMarketsControllerLeaveV1**
> MarketActionResponse usedishaSellerMarketsControllerLeaveV1()

Removes the membership (cancels a pending request or leaves an approved one).

### Example

```typescript
import {
    UsedishaSellerMarketsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSellerMarketsApi(configuration);

let membershipId: string; //Membership ID (default to undefined)
let businessId: string; //Business ID (default to undefined)

const { status, data } = await apiInstance.usedishaSellerMarketsControllerLeaveV1(
    membershipId,
    businessId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **membershipId** | [**string**] | Membership ID | defaults to undefined|
| **businessId** | [**string**] | Business ID | defaults to undefined|


### Return type

**MarketActionResponse**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Membership removed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSellerMarketsControllerMyMembershipsV1**
> Array<MarketMembershipResponse> usedishaSellerMarketsControllerMyMembershipsV1()

Optionally filter by status.

### Example

```typescript
import {
    UsedishaSellerMarketsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSellerMarketsApi(configuration);

let businessId: string; //Business ID (default to undefined)
let status: 'pending' | 'approved' | 'rejected'; // (optional) (default to undefined)

const { status, data } = await apiInstance.usedishaSellerMarketsControllerMyMembershipsV1(
    businessId,
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **businessId** | [**string**] | Business ID | defaults to undefined|
| **status** | [**&#39;pending&#39; | &#39;approved&#39; | &#39;rejected&#39;**]**Array<&#39;pending&#39; &#124; &#39;approved&#39; &#124; &#39;rejected&#39;>** |  | (optional) defaults to undefined|


### Return type

**Array<MarketMembershipResponse>**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Memberships for this business |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSellerMarketsControllerRequestV1**
> MarketMembershipResponse usedishaSellerMarketsControllerRequestV1(requestMarketListingDto)

Creates a pending membership for admin review.

### Example

```typescript
import {
    UsedishaSellerMarketsApi,
    Configuration,
    RequestMarketListingDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSellerMarketsApi(configuration);

let businessId: string; //Business ID (default to undefined)
let requestMarketListingDto: RequestMarketListingDto; //

const { status, data } = await apiInstance.usedishaSellerMarketsControllerRequestV1(
    businessId,
    requestMarketListingDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestMarketListingDto** | **RequestMarketListingDto**|  | |
| **businessId** | [**string**] | Business ID | defaults to undefined|


### Return type

**MarketMembershipResponse**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Pending membership created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

