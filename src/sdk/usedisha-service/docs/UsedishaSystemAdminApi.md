# UsedishaSystemAdminApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usedishaSystemAdminControllerApproveClaimV1**](#usedishasystemadmincontrollerapproveclaimv1) | **PATCH** /v1/usedisha/usedisha/admin/claims/{claimId}/approve | Approve a claim and transfer the business to the claimer|
|[**usedishaSystemAdminControllerAwardBadgesV1**](#usedishasystemadmincontrollerawardbadgesv1) | **POST** /v1/usedisha/usedisha/admin/stores/{id}/badges | Award trust badges to a storefront|
|[**usedishaSystemAdminControllerCreateHomeTemplateV1**](#usedishasystemadmincontrollercreatehometemplatev1) | **POST** /v1/usedisha/usedisha/admin/settings/home-templates | Create a ShopCentral home template|
|[**usedishaSystemAdminControllerCreateStorefrontV1**](#usedishasystemadmincontrollercreatestorefrontv1) | **POST** /v1/usedisha/usedisha/admin/stores | Create a storefront for a business|
|[**usedishaSystemAdminControllerDeleteHomeTemplateV1**](#usedishasystemadmincontrollerdeletehometemplatev1) | **DELETE** /v1/usedisha/usedisha/admin/settings/home-templates/{id} | Delete a ShopCentral home template|
|[**usedishaSystemAdminControllerGetClaimV1**](#usedishasystemadmincontrollergetclaimv1) | **GET** /v1/usedisha/usedisha/admin/claims/{claimId} | Get a single ownership claim|
|[**usedishaSystemAdminControllerGetCommissionConfigV1**](#usedishasystemadmincontrollergetcommissionconfigv1) | **GET** /v1/usedisha/usedisha/admin/settings/commission | Get platform commission rates|
|[**usedishaSystemAdminControllerGetHomeLayoutV1**](#usedishasystemadmincontrollergethomelayoutv1) | **GET** /v1/usedisha/usedisha/admin/settings/home-layout | Get the ShopCentral home layout|
|[**usedishaSystemAdminControllerGetHomeTemplateV1**](#usedishasystemadmincontrollergethometemplatev1) | **GET** /v1/usedisha/usedisha/admin/settings/home-templates/{id} | Get a ShopCentral home template|
|[**usedishaSystemAdminControllerGetKycV1**](#usedishasystemadmincontrollergetkycv1) | **GET** /v1/usedisha/usedisha/admin/stores/{id}/kyc | Get a storefront KYC status + details|
|[**usedishaSystemAdminControllerGetModerationHistoryV1**](#usedishasystemadmincontrollergetmoderationhistoryv1) | **GET** /v1/usedisha/usedisha/admin/stores/{id}/history | Moderation history for a storefront|
|[**usedishaSystemAdminControllerGetStorefrontByBusinessV1**](#usedishasystemadmincontrollergetstorefrontbybusinessv1) | **GET** /v1/usedisha/usedisha/admin/businesses/{businessId}/store | Get a business\&#39;s storefront (or null)|
|[**usedishaSystemAdminControllerGetStorefrontV1**](#usedishasystemadmincontrollergetstorefrontv1) | **GET** /v1/usedisha/usedisha/admin/stores/{id} | Get any storefront by ID (any status)|
|[**usedishaSystemAdminControllerListClaimsV1**](#usedishasystemadmincontrollerlistclaimsv1) | **GET** /v1/usedisha/usedisha/admin/claims | List storefront ownership claims|
|[**usedishaSystemAdminControllerListHomeTemplatesV1**](#usedishasystemadmincontrollerlisthometemplatesv1) | **GET** /v1/usedisha/usedisha/admin/settings/home-templates | List ShopCentral home templates|
|[**usedishaSystemAdminControllerListStorefrontsV1**](#usedishasystemadmincontrollerliststorefrontsv1) | **GET** /v1/usedisha/usedisha/admin/stores | List all storefronts|
|[**usedishaSystemAdminControllerMarketplaceOverviewV1**](#usedishasystemadmincontrollermarketplaceoverviewv1) | **GET** /v1/usedisha/usedisha/admin/marketplace-overview | The marketplace dashboard, in one call|
|[**usedishaSystemAdminControllerOverviewV1**](#usedishasystemadmincontrolleroverviewv1) | **GET** /v1/usedisha/usedisha/admin/overview | Platform overview metrics|
|[**usedishaSystemAdminControllerRejectClaimV1**](#usedishasystemadmincontrollerrejectclaimv1) | **PATCH** /v1/usedisha/usedisha/admin/claims/{claimId}/reject | Reject a submitted claim with a reason|
|[**usedishaSystemAdminControllerRequestKycV1**](#usedishasystemadmincontrollerrequestkycv1) | **PATCH** /v1/usedisha/usedisha/admin/stores/{id}/kyc/request | Request KYC from the business owner|
|[**usedishaSystemAdminControllerResolveHomeTemplateV1**](#usedishasystemadmincontrollerresolvehometemplatev1) | **POST** /v1/usedisha/usedisha/admin/settings/home-templates/resolve | Which home template a shopper gets|
|[**usedishaSystemAdminControllerReviewKycV1**](#usedishasystemadmincontrollerreviewkycv1) | **PATCH** /v1/usedisha/usedisha/admin/stores/{id}/kyc/review | Approve or reject submitted KYC|
|[**usedishaSystemAdminControllerRevokeBadgeV1**](#usedishasystemadmincontrollerrevokebadgev1) | **DELETE** /v1/usedisha/usedisha/admin/stores/{id}/badges/{badge} | Revoke a trust badge|
|[**usedishaSystemAdminControllerSaveHomeLayoutV1**](#usedishasystemadmincontrollersavehomelayoutv1) | **PUT** /v1/usedisha/usedisha/admin/settings/home-layout | Publish the ShopCentral home layout|
|[**usedishaSystemAdminControllerSaveHomeTemplateV1**](#usedishasystemadmincontrollersavehometemplatev1) | **PUT** /v1/usedisha/usedisha/admin/settings/home-templates/{id} | Save a ShopCentral home template|
|[**usedishaSystemAdminControllerSetApprovalV1**](#usedishasystemadmincontrollersetapprovalv1) | **PATCH** /v1/usedisha/usedisha/admin/stores/{id}/approval | Approve or reject a storefront|
|[**usedishaSystemAdminControllerSetFlagsV1**](#usedishasystemadmincontrollersetflagsv1) | **PATCH** /v1/usedisha/usedisha/admin/stores/{id}/flags | Set storefront availability flags|
|[**usedishaSystemAdminControllerSetHomeTemplateStatusV1**](#usedishasystemadmincontrollersethometemplatestatusv1) | **POST** /v1/usedisha/usedisha/admin/settings/home-templates/{id}/status | Set a ShopCentral home template\&#39;s status|
|[**usedishaSystemAdminControllerSetMarketplaceFieldsV1**](#usedishasystemadmincontrollersetmarketplacefieldsv1) | **PATCH** /v1/usedisha/usedisha/admin/stores/{id}/marketplace | Curate marketplace fields|
|[**usedishaSystemAdminControllerSetSellerTypesV1**](#usedishasystemadmincontrollersetsellertypesv1) | **PUT** /v1/usedisha/usedisha/admin/stores/{id}/seller-types | Set what kind of seller a storefront is|
|[**usedishaSystemAdminControllerSetStatusV1**](#usedishasystemadmincontrollersetstatusv1) | **PATCH** /v1/usedisha/usedisha/admin/stores/{id}/status | Suspend / reactivate a storefront|
|[**usedishaSystemAdminControllerStorefrontQueueCountsV1**](#usedishasystemadmincontrollerstorefrontqueuecountsv1) | **GET** /v1/usedisha/usedisha/admin/stores/queues | Storefront counts per review queue|
|[**usedishaSystemAdminControllerUpdateCommissionConfigV1**](#usedishasystemadmincontrollerupdatecommissionconfigv1) | **PATCH** /v1/usedisha/usedisha/admin/settings/commission | Update platform commission rates|

# **usedishaSystemAdminControllerApproveClaimV1**
> usedishaSystemAdminControllerApproveClaimV1()

Runs the ownership transfer (resolves/creates the claimer account, repoints business ownership, updates the OWNER member, emails them), marks the storefront no longer claimable, auto-rejects rival open claims, and records the decision in the storefront\'s moderation history.

### Example

```typescript
import {
    UsedishaSystemAdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminApi(configuration);

let claimId: string; //Claim MongoDB ID (default to undefined)

const { status, data } = await apiInstance.usedishaSystemAdminControllerApproveClaimV1(
    claimId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **claimId** | [**string**] | Claim MongoDB ID | defaults to undefined|


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
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSystemAdminControllerAwardBadgesV1**
> Usedisha usedishaSystemAdminControllerAwardBadgesV1(adminAwardBadgesDto)

Additive and idempotent — badges the store already holds are left alone. Use this rather than PATCH /marketplace, which replaces the whole badge array.

### Example

```typescript
import {
    UsedishaSystemAdminApi,
    Configuration,
    AdminAwardBadgesDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminApi(configuration);

let id: string; //Storefront MongoDB ID (default to undefined)
let adminAwardBadgesDto: AdminAwardBadgesDto; //

const { status, data } = await apiInstance.usedishaSystemAdminControllerAwardBadgesV1(
    id,
    adminAwardBadgesDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminAwardBadgesDto** | **AdminAwardBadgesDto**|  | |
| **id** | [**string**] | Storefront MongoDB ID | defaults to undefined|


### Return type

**Usedisha**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated storefront |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSystemAdminControllerCreateHomeTemplateV1**
> usedishaSystemAdminControllerCreateHomeTemplateV1(usedishaSystemAdminControllerCreateHomeTemplateV1Request)

Creates a draft with priority 100 and no rules. Sections are copied from `fromTemplateId`, or empty. The name must be unique (case-insensitive) among non-archived templates; at most 30 non-archived.

### Example

```typescript
import {
    UsedishaSystemAdminApi,
    Configuration,
    UsedishaSystemAdminControllerCreateHomeTemplateV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminApi(configuration);

let usedishaSystemAdminControllerCreateHomeTemplateV1Request: UsedishaSystemAdminControllerCreateHomeTemplateV1Request; //

const { status, data } = await apiInstance.usedishaSystemAdminControllerCreateHomeTemplateV1(
    usedishaSystemAdminControllerCreateHomeTemplateV1Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **usedishaSystemAdminControllerCreateHomeTemplateV1Request** | **UsedishaSystemAdminControllerCreateHomeTemplateV1Request**|  | |


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
|**201** | The new template |  -  |
|**400** | Invalid body, name in use, unknown fromTemplateId, or 30 templates already |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSystemAdminControllerCreateStorefrontV1**
> Usedisha usedishaSystemAdminControllerCreateStorefrontV1(adminCreateStorefrontDto)

Provisions a Usedisha storefront on a merchant\'s behalf. The business must exist, must not already have a storefront, and the connected branch must belong to that business. Set `approve: true` to publish it to the marketplace immediately.

### Example

```typescript
import {
    UsedishaSystemAdminApi,
    Configuration,
    AdminCreateStorefrontDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminApi(configuration);

let adminCreateStorefrontDto: AdminCreateStorefrontDto; //

const { status, data } = await apiInstance.usedishaSystemAdminControllerCreateStorefrontV1(
    adminCreateStorefrontDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminCreateStorefrontDto** | **AdminCreateStorefrontDto**|  | |


### Return type

**Usedisha**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Created storefront |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSystemAdminControllerDeleteHomeTemplateV1**
> usedishaSystemAdminControllerDeleteHomeTemplateV1()

Only a non-default template that is draft or archived.

### Example

```typescript
import {
    UsedishaSystemAdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.usedishaSystemAdminControllerDeleteHomeTemplateV1(
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
|**200** | { id, deleted: true } |  -  |
|**400** | The default, or a live template |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSystemAdminControllerGetClaimV1**
> usedishaSystemAdminControllerGetClaimV1()


### Example

```typescript
import {
    UsedishaSystemAdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminApi(configuration);

let claimId: string; //Claim MongoDB ID (default to undefined)

const { status, data } = await apiInstance.usedishaSystemAdminControllerGetClaimV1(
    claimId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **claimId** | [**string**] | Claim MongoDB ID | defaults to undefined|


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
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSystemAdminControllerGetCommissionConfigV1**
> CommissionConfigResponseDto usedishaSystemAdminControllerGetCommissionConfigV1()

Current commission percentages (of subtotal) charged to merchants for storefront and marketplace orders.

### Example

```typescript
import {
    UsedishaSystemAdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminApi(configuration);

const { status, data } = await apiInstance.usedishaSystemAdminControllerGetCommissionConfigV1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**CommissionConfigResponseDto**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Commission configuration |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSystemAdminControllerGetHomeLayoutV1**
> usedishaSystemAdminControllerGetHomeLayoutV1()

The saved layout, including disabled and out-of-schedule sections, or `{ sections: null, version: 0 }` when nothing has been saved.

### Example

```typescript
import {
    UsedishaSystemAdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminApi(configuration);

const { status, data } = await apiInstance.usedishaSystemAdminControllerGetHomeLayoutV1();
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
|**200** | { sections, version, updatedAt, updatedBy } |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSystemAdminControllerGetHomeTemplateV1**
> usedishaSystemAdminControllerGetHomeTemplateV1()


### Example

```typescript
import {
    UsedishaSystemAdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.usedishaSystemAdminControllerGetHomeTemplateV1(
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
|**200** | The full template, sections included |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |
|**404** | No such template |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSystemAdminControllerGetKycV1**
> UsedishaKycResponse usedishaSystemAdminControllerGetKycV1()


### Example

```typescript
import {
    UsedishaSystemAdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminApi(configuration);

let id: string; //Storefront MongoDB ID (default to undefined)

const { status, data } = await apiInstance.usedishaSystemAdminControllerGetKycV1(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Storefront MongoDB ID | defaults to undefined|


### Return type

**UsedishaKycResponse**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | KYC block |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSystemAdminControllerGetModerationHistoryV1**
> Array<UsedishaModerationEventResponse> usedishaSystemAdminControllerGetModerationHistoryV1()

Approval, status, availability-flag, featured, KYC and ownership-claim decisions, newest first, with who made each one and why. Keeps the latest 200 entries.

### Example

```typescript
import {
    UsedishaSystemAdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminApi(configuration);

let id: string; //Storefront MongoDB ID (default to undefined)

const { status, data } = await apiInstance.usedishaSystemAdminControllerGetModerationHistoryV1(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Storefront MongoDB ID | defaults to undefined|


### Return type

**Array<UsedishaModerationEventResponse>**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | History entries, newest first |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSystemAdminControllerGetStorefrontByBusinessV1**
> Usedisha usedishaSystemAdminControllerGetStorefrontByBusinessV1()

Returns the storefront attached to the given business, or null when the business has no storefront yet.

### Example

```typescript
import {
    UsedishaSystemAdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminApi(configuration);

let businessId: string; //Business MongoDB ID (default to undefined)

const { status, data } = await apiInstance.usedishaSystemAdminControllerGetStorefrontByBusinessV1(
    businessId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **businessId** | [**string**] | Business MongoDB ID | defaults to undefined|


### Return type

**Usedisha**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Storefront document or null |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSystemAdminControllerGetStorefrontV1**
> Usedisha usedishaSystemAdminControllerGetStorefrontV1()


### Example

```typescript
import {
    UsedishaSystemAdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminApi(configuration);

let id: string; //Storefront MongoDB ID (default to undefined)

const { status, data } = await apiInstance.usedishaSystemAdminControllerGetStorefrontV1(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Storefront MongoDB ID | defaults to undefined|


### Return type

**Usedisha**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Storefront document |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSystemAdminControllerListClaimsV1**
> PaginatedClaimsResponse usedishaSystemAdminControllerListClaimsV1()

Paginated claims across all storefronts, each with a summary of the storefront it is for. Filter by status or storefront ID, or search the claimer\'s name or email and the business name or registration number.

### Example

```typescript
import {
    UsedishaSystemAdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminApi(configuration);

let page: number; // (optional) (default to undefined)
let limit: number; // (optional) (default to undefined)
let sortBy: string; // (optional) (default to undefined)
let sortOrder: 'asc' | 'desc'; // (optional) (default to undefined)
let status: 'submitted' | 'approved' | 'rejected' | 'cancelled'; //Filter by claim status (optional) (default to undefined)
let usedishaId: string; //Filter by storefront ID (optional) (default to undefined)
let search: string; //Search the claimer\'s name or email, the business name or its registration number (optional) (default to undefined)

const { status, data } = await apiInstance.usedishaSystemAdminControllerListClaimsV1(
    page,
    limit,
    sortBy,
    sortOrder,
    status,
    usedishaId,
    search
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] |  | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to undefined|
| **sortBy** | [**string**] |  | (optional) defaults to undefined|
| **sortOrder** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** |  | (optional) defaults to undefined|
| **status** | [**&#39;submitted&#39; | &#39;approved&#39; | &#39;rejected&#39; | &#39;cancelled&#39;**]**Array<&#39;submitted&#39; &#124; &#39;approved&#39; &#124; &#39;rejected&#39; &#124; &#39;cancelled&#39;>** | Filter by claim status | (optional) defaults to undefined|
| **usedishaId** | [**string**] | Filter by storefront ID | (optional) defaults to undefined|
| **search** | [**string**] | Search the claimer\&#39;s name or email, the business name or its registration number | (optional) defaults to undefined|


### Return type

**PaginatedClaimsResponse**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Paginated claims |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSystemAdminControllerListHomeTemplatesV1**
> usedishaSystemAdminControllerListHomeTemplatesV1()

Every template (archived included) without its sections, plus `sectionCount`. The default comes first, then by priority descending. Creates the default from the v1 layout the first time.

### Example

```typescript
import {
    UsedishaSystemAdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminApi(configuration);

const { status, data } = await apiInstance.usedishaSystemAdminControllerListHomeTemplatesV1();
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
|**200** | HomeTemplateSummary[] |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSystemAdminControllerListStorefrontsV1**
> PaginatedStorefrontsResponse usedishaSystemAdminControllerListStorefrontsV1()

Paginated listing of every storefront across all businesses, in any status. Narrow to a review queue with `queue`, or filter by status, approval, KYC, readiness, claimability, listing, category, badge, location, business or free-text search. Each row carries its `kycStatus`.

### Example

```typescript
import {
    UsedishaSystemAdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminApi(configuration);

let page: number; // (optional) (default to undefined)
let limit: number; // (optional) (default to undefined)
let sortBy: string; // (optional) (default to undefined)
let sortOrder: 'asc' | 'desc'; // (optional) (default to undefined)
let status: 'active' | 'inactive' | 'pending_approval' | 'suspended' | 'deleted'; //Filter by storefront status (optional) (default to undefined)
let badge: 'verified' | 'official' | 'top_rated' | 'fast_delivery' | 'popular' | 'premium' | 'new' | 'mall_store'; //Only stores holding this badge (optional) (default to undefined)
let approvalStatus: 'pending' | 'approved' | 'rejected'; //Filter by approval status (optional) (default to undefined)
let category: 'pharmacy' | 'supermarket' | 'restaurant' | 'grocery' | 'bakery' | 'butcher' | 'fruits_and_vegetables' | 'beverages' | 'snacks_and_confectionery' | 'household_supplies'; //Filter by a Shopmenu category (optional) (default to undefined)
let featured: boolean; //Only featured (true) or only non-featured (false) stores (optional) (default to undefined)
let search: string; //Search by store name, legal name, domain, caption, description or tags (optional) (default to undefined)
let queue: 'needs_review' | 'kyc_submitted' | 'not_listed' | 'not_taking_orders' | 'live' | 'paused' | 'suspended' | 'rejected'; //Only storefronts in this review queue (optional) (default to undefined)
let kycStatus: 'not_required' | 'requested' | 'submitted' | 'approved' | 'rejected'; //Filter by KYC status (optional) (default to undefined)
let readyForOrders: boolean; //Filter on whether the store is cleared for marketplace orders (optional) (default to undefined)
let claimable: boolean; //Filter on whether the store is open to ownership claims (optional) (default to undefined)
let listed: boolean; //Filter on whether the owner has listed the store on the marketplace (optional) (default to undefined)
let state: string; //Only stores with a branch in this state (optional) (default to undefined)
let city: string; //Only stores with a branch in this city (optional) (default to undefined)
let businessId: string; //Only the storefront of this business (optional) (default to undefined)

const { status, data } = await apiInstance.usedishaSystemAdminControllerListStorefrontsV1(
    page,
    limit,
    sortBy,
    sortOrder,
    status,
    badge,
    approvalStatus,
    category,
    featured,
    search,
    queue,
    kycStatus,
    readyForOrders,
    claimable,
    listed,
    state,
    city,
    businessId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] |  | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to undefined|
| **sortBy** | [**string**] |  | (optional) defaults to undefined|
| **sortOrder** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** |  | (optional) defaults to undefined|
| **status** | [**&#39;active&#39; | &#39;inactive&#39; | &#39;pending_approval&#39; | &#39;suspended&#39; | &#39;deleted&#39;**]**Array<&#39;active&#39; &#124; &#39;inactive&#39; &#124; &#39;pending_approval&#39; &#124; &#39;suspended&#39; &#124; &#39;deleted&#39;>** | Filter by storefront status | (optional) defaults to undefined|
| **badge** | [**&#39;verified&#39; | &#39;official&#39; | &#39;top_rated&#39; | &#39;fast_delivery&#39; | &#39;popular&#39; | &#39;premium&#39; | &#39;new&#39; | &#39;mall_store&#39;**]**Array<&#39;verified&#39; &#124; &#39;official&#39; &#124; &#39;top_rated&#39; &#124; &#39;fast_delivery&#39; &#124; &#39;popular&#39; &#124; &#39;premium&#39; &#124; &#39;new&#39; &#124; &#39;mall_store&#39;>** | Only stores holding this badge | (optional) defaults to undefined|
| **approvalStatus** | [**&#39;pending&#39; | &#39;approved&#39; | &#39;rejected&#39;**]**Array<&#39;pending&#39; &#124; &#39;approved&#39; &#124; &#39;rejected&#39;>** | Filter by approval status | (optional) defaults to undefined|
| **category** | [**&#39;pharmacy&#39; | &#39;supermarket&#39; | &#39;restaurant&#39; | &#39;grocery&#39; | &#39;bakery&#39; | &#39;butcher&#39; | &#39;fruits_and_vegetables&#39; | &#39;beverages&#39; | &#39;snacks_and_confectionery&#39; | &#39;household_supplies&#39;**]**Array<&#39;pharmacy&#39; &#124; &#39;supermarket&#39; &#124; &#39;restaurant&#39; &#124; &#39;grocery&#39; &#124; &#39;bakery&#39; &#124; &#39;butcher&#39; &#124; &#39;fruits_and_vegetables&#39; &#124; &#39;beverages&#39; &#124; &#39;snacks_and_confectionery&#39; &#124; &#39;household_supplies&#39;>** | Filter by a Shopmenu category | (optional) defaults to undefined|
| **featured** | [**boolean**] | Only featured (true) or only non-featured (false) stores | (optional) defaults to undefined|
| **search** | [**string**] | Search by store name, legal name, domain, caption, description or tags | (optional) defaults to undefined|
| **queue** | [**&#39;needs_review&#39; | &#39;kyc_submitted&#39; | &#39;not_listed&#39; | &#39;not_taking_orders&#39; | &#39;live&#39; | &#39;paused&#39; | &#39;suspended&#39; | &#39;rejected&#39;**]**Array<&#39;needs_review&#39; &#124; &#39;kyc_submitted&#39; &#124; &#39;not_listed&#39; &#124; &#39;not_taking_orders&#39; &#124; &#39;live&#39; &#124; &#39;paused&#39; &#124; &#39;suspended&#39; &#124; &#39;rejected&#39;>** | Only storefronts in this review queue | (optional) defaults to undefined|
| **kycStatus** | [**&#39;not_required&#39; | &#39;requested&#39; | &#39;submitted&#39; | &#39;approved&#39; | &#39;rejected&#39;**]**Array<&#39;not_required&#39; &#124; &#39;requested&#39; &#124; &#39;submitted&#39; &#124; &#39;approved&#39; &#124; &#39;rejected&#39;>** | Filter by KYC status | (optional) defaults to undefined|
| **readyForOrders** | [**boolean**] | Filter on whether the store is cleared for marketplace orders | (optional) defaults to undefined|
| **claimable** | [**boolean**] | Filter on whether the store is open to ownership claims | (optional) defaults to undefined|
| **listed** | [**boolean**] | Filter on whether the owner has listed the store on the marketplace | (optional) defaults to undefined|
| **state** | [**string**] | Only stores with a branch in this state | (optional) defaults to undefined|
| **city** | [**string**] | Only stores with a branch in this city | (optional) defaults to undefined|
| **businessId** | [**string**] | Only the storefront of this business | (optional) defaults to undefined|


### Return type

**PaginatedStorefrontsResponse**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Paginated storefronts |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSystemAdminControllerMarketplaceOverviewV1**
> MarketplaceOverviewResponseDto usedishaSystemAdminControllerMarketplaceOverviewV1()

GMV (all time, this month, and month-on-month growth), a daily trend line, run counts, storefront composition, and every operator queue. Supersedes assembling the dashboard from `overview`, order stats, the run list and the pending-queue counts separately.

### Example

```typescript
import {
    UsedishaSystemAdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminApi(configuration);

let trendDays: string; //Days of daily trend to return. Defaults to 30, capped at 365. (optional) (default to undefined)

const { status, data } = await apiInstance.usedishaSystemAdminControllerMarketplaceOverviewV1(
    trendDays
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **trendDays** | [**string**] | Days of daily trend to return. Defaults to 30, capped at 365. | (optional) defaults to undefined|


### Return type

**MarketplaceOverviewResponseDto**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Marketplace-wide aggregates |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSystemAdminControllerOverviewV1**
> UsedishaPlatformOverviewResponseDto usedishaSystemAdminControllerOverviewV1()

Storefront counts by status, approval status and category, plus totals.

### Example

```typescript
import {
    UsedishaSystemAdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminApi(configuration);

const { status, data } = await apiInstance.usedishaSystemAdminControllerOverviewV1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**UsedishaPlatformOverviewResponseDto**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Aggregate platform counts |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSystemAdminControllerRejectClaimV1**
> usedishaSystemAdminControllerRejectClaimV1(rejectProfileClaimDto)

The decision is also recorded in the storefront\'s moderation history.

### Example

```typescript
import {
    UsedishaSystemAdminApi,
    Configuration,
    RejectProfileClaimDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminApi(configuration);

let claimId: string; //Claim MongoDB ID (default to undefined)
let rejectProfileClaimDto: RejectProfileClaimDto; //

const { status, data } = await apiInstance.usedishaSystemAdminControllerRejectClaimV1(
    claimId,
    rejectProfileClaimDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rejectProfileClaimDto** | **RejectProfileClaimDto**|  | |
| **claimId** | [**string**] | Claim MongoDB ID | defaults to undefined|


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
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSystemAdminControllerRequestKycV1**
> UsedishaKycResponse usedishaSystemAdminControllerRequestKycV1(adminRequestKycDto)

Marks KYC as requested so the owner is prompted to provide details. The request is kept in the moderation history, with the note as its reason.

### Example

```typescript
import {
    UsedishaSystemAdminApi,
    Configuration,
    AdminRequestKycDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminApi(configuration);

let id: string; //Storefront MongoDB ID (default to undefined)
let adminRequestKycDto: AdminRequestKycDto; //

const { status, data } = await apiInstance.usedishaSystemAdminControllerRequestKycV1(
    id,
    adminRequestKycDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminRequestKycDto** | **AdminRequestKycDto**|  | |
| **id** | [**string**] | Storefront MongoDB ID | defaults to undefined|


### Return type

**UsedishaKycResponse**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated KYC block |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSystemAdminControllerResolveHomeTemplateV1**
> usedishaSystemAdminControllerResolveHomeTemplateV1(usedishaSystemAdminControllerResolveHomeTemplateV1Request)

Runs the public endpoint\'s matcher. `at` (ISO with zone) previews a moment in time; `includeDrafts` treats drafts as live.

### Example

```typescript
import {
    UsedishaSystemAdminApi,
    Configuration,
    UsedishaSystemAdminControllerResolveHomeTemplateV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminApi(configuration);

let usedishaSystemAdminControllerResolveHomeTemplateV1Request: UsedishaSystemAdminControllerResolveHomeTemplateV1Request; //

const { status, data } = await apiInstance.usedishaSystemAdminControllerResolveHomeTemplateV1(
    usedishaSystemAdminControllerResolveHomeTemplateV1Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **usedishaSystemAdminControllerResolveHomeTemplateV1Request** | **UsedishaSystemAdminControllerResolveHomeTemplateV1Request**|  | |


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
|**200** | { templateId, reason } |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSystemAdminControllerReviewKycV1**
> UsedishaKycResponse usedishaSystemAdminControllerReviewKycV1(adminReviewKycDto)

Only KYC in the `submitted` state can be reviewed. Rejecting needs a `reason` — it is what the owner has to fix. The decision is kept in the moderation history.

### Example

```typescript
import {
    UsedishaSystemAdminApi,
    Configuration,
    AdminReviewKycDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminApi(configuration);

let id: string; //Storefront MongoDB ID (default to undefined)
let adminReviewKycDto: AdminReviewKycDto; //

const { status, data } = await apiInstance.usedishaSystemAdminControllerReviewKycV1(
    id,
    adminReviewKycDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminReviewKycDto** | **AdminReviewKycDto**|  | |
| **id** | [**string**] | Storefront MongoDB ID | defaults to undefined|


### Return type

**UsedishaKycResponse**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated KYC block |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSystemAdminControllerRevokeBadgeV1**
> Usedisha usedishaSystemAdminControllerRevokeBadgeV1()

Removing a badge the store does not hold is a no-op.

### Example

```typescript
import {
    UsedishaSystemAdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminApi(configuration);

let id: string; //Storefront MongoDB ID (default to undefined)
let badge: 'verified' | 'official' | 'top_rated' | 'fast_delivery' | 'popular' | 'premium' | 'new' | 'mall_store'; // (default to undefined)

const { status, data } = await apiInstance.usedishaSystemAdminControllerRevokeBadgeV1(
    id,
    badge
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Storefront MongoDB ID | defaults to undefined|
| **badge** | [**&#39;verified&#39; | &#39;official&#39; | &#39;top_rated&#39; | &#39;fast_delivery&#39; | &#39;popular&#39; | &#39;premium&#39; | &#39;new&#39; | &#39;mall_store&#39;**]**Array<&#39;verified&#39; &#124; &#39;official&#39; &#124; &#39;top_rated&#39; &#124; &#39;fast_delivery&#39; &#124; &#39;popular&#39; &#124; &#39;premium&#39; &#124; &#39;new&#39; &#124; &#39;mall_store&#39;>** |  | defaults to undefined|


### Return type

**Usedisha**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated storefront |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSystemAdminControllerSaveHomeLayoutV1**
> usedishaSystemAdminControllerSaveHomeLayoutV1(usedishaSystemAdminControllerSaveHomeLayoutV1Request)

Replaces the whole section list and publishes it immediately. `expectedVersion` must be the version that was loaded (0 for the first save), or 409 and nothing is saved. Validation is strict: 400 lists every problem with its path. Referenced stores must be active, approved and listed on ShopCentral, and referenced markets must exist.

### Example

```typescript
import {
    UsedishaSystemAdminApi,
    Configuration,
    UsedishaSystemAdminControllerSaveHomeLayoutV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminApi(configuration);

let usedishaSystemAdminControllerSaveHomeLayoutV1Request: UsedishaSystemAdminControllerSaveHomeLayoutV1Request; //

const { status, data } = await apiInstance.usedishaSystemAdminControllerSaveHomeLayoutV1(
    usedishaSystemAdminControllerSaveHomeLayoutV1Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **usedishaSystemAdminControllerSaveHomeLayoutV1Request** | **UsedishaSystemAdminControllerSaveHomeLayoutV1Request**|  | |


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
|**200** | The saved layout: { sections, version, updatedAt, updatedBy } |  -  |
|**400** | Invalid layout, or unknown / unlisted store or market ids |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |
|**409** | expectedVersion is not the current version |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSystemAdminControllerSaveHomeTemplateV1**
> usedishaSystemAdminControllerSaveHomeTemplateV1(usedishaSystemAdminControllerSaveHomeTemplateV1Request)

Replaces name, description, priority, rules and sections. Saving a live template publishes it immediately. `expectedVersion` must be the loaded version, or 409 with `currentVersion`. Validation is strict: 400 lists every problem with its path. The default\'s rules must be {}.

### Example

```typescript
import {
    UsedishaSystemAdminApi,
    Configuration,
    UsedishaSystemAdminControllerSaveHomeTemplateV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminApi(configuration);

let id: string; // (default to undefined)
let usedishaSystemAdminControllerSaveHomeTemplateV1Request: UsedishaSystemAdminControllerSaveHomeTemplateV1Request; //

const { status, data } = await apiInstance.usedishaSystemAdminControllerSaveHomeTemplateV1(
    id,
    usedishaSystemAdminControllerSaveHomeTemplateV1Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **usedishaSystemAdminControllerSaveHomeTemplateV1Request** | **UsedishaSystemAdminControllerSaveHomeTemplateV1Request**|  | |
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
|**200** | The saved template |  -  |
|**400** | Invalid template, name in use, or unknown / unlisted store or market ids |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |
|**404** | No such template |  -  |
|**409** | expectedVersion is not the current version |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSystemAdminControllerSetApprovalV1**
> Usedisha usedishaSystemAdminControllerSetApprovalV1(adminSetApprovalDto)

Only approved storefronts appear in marketplace discovery and market listings. Rejecting needs a `reason`; every change is kept in the moderation history.

### Example

```typescript
import {
    UsedishaSystemAdminApi,
    Configuration,
    AdminSetApprovalDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminApi(configuration);

let id: string; //Storefront MongoDB ID (default to undefined)
let adminSetApprovalDto: AdminSetApprovalDto; //

const { status, data } = await apiInstance.usedishaSystemAdminControllerSetApprovalV1(
    id,
    adminSetApprovalDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminSetApprovalDto** | **AdminSetApprovalDto**|  | |
| **id** | [**string**] | Storefront MongoDB ID | defaults to undefined|


### Return type

**Usedisha**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated storefront |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSystemAdminControllerSetFlagsV1**
> Usedisha usedishaSystemAdminControllerSetFlagsV1(setStorefrontFlagsDto)

Toggle `claimable` (open to ownership claims) and/or `readyForOrders` (cleared for marketplace orders — Shopmenu checkout refuses stores without it; orders through the store\'s own link are unaffected). Either field may be omitted; changes are kept in the moderation history.

### Example

```typescript
import {
    UsedishaSystemAdminApi,
    Configuration,
    SetStorefrontFlagsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminApi(configuration);

let id: string; //Storefront MongoDB ID (default to undefined)
let setStorefrontFlagsDto: SetStorefrontFlagsDto; //

const { status, data } = await apiInstance.usedishaSystemAdminControllerSetFlagsV1(
    id,
    setStorefrontFlagsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setStorefrontFlagsDto** | **SetStorefrontFlagsDto**|  | |
| **id** | [**string**] | Storefront MongoDB ID | defaults to undefined|


### Return type

**Usedisha**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated storefront |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSystemAdminControllerSetHomeTemplateStatusV1**
> usedishaSystemAdminControllerSetHomeTemplateStatusV1(usedishaSystemAdminControllerSetHomeTemplateStatusV1Request)

draft, live or archived. The default must stay live. Archiving frees the name; un-archiving needs it free.

### Example

```typescript
import {
    UsedishaSystemAdminApi,
    Configuration,
    UsedishaSystemAdminControllerSetHomeTemplateStatusV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminApi(configuration);

let id: string; // (default to undefined)
let usedishaSystemAdminControllerSetHomeTemplateStatusV1Request: UsedishaSystemAdminControllerSetHomeTemplateStatusV1Request; //

const { status, data } = await apiInstance.usedishaSystemAdminControllerSetHomeTemplateStatusV1(
    id,
    usedishaSystemAdminControllerSetHomeTemplateStatusV1Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **usedishaSystemAdminControllerSetHomeTemplateStatusV1Request** | **UsedishaSystemAdminControllerSetHomeTemplateStatusV1Request**|  | |
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
|**200** | The updated template |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSystemAdminControllerSetMarketplaceFieldsV1**
> Usedisha usedishaSystemAdminControllerSetMarketplaceFieldsV1(adminUpdateMarketplaceDto)

Toggle featured and set priceRange, tags, minimumOrderAmount, estimatedDeliveryTime. Featured changes are kept in the moderation history.

### Example

```typescript
import {
    UsedishaSystemAdminApi,
    Configuration,
    AdminUpdateMarketplaceDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminApi(configuration);

let id: string; //Storefront MongoDB ID (default to undefined)
let adminUpdateMarketplaceDto: AdminUpdateMarketplaceDto; //

const { status, data } = await apiInstance.usedishaSystemAdminControllerSetMarketplaceFieldsV1(
    id,
    adminUpdateMarketplaceDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminUpdateMarketplaceDto** | **AdminUpdateMarketplaceDto**|  | |
| **id** | [**string**] | Storefront MongoDB ID | defaults to undefined|


### Return type

**Usedisha**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated storefront |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSystemAdminControllerSetSellerTypesV1**
> Usedisha usedishaSystemAdminControllerSetSellerTypesV1(adminSetSellerTypesDto)

Replaces the seller types (retailer, wholesaler, manufacturer, distributor). Send the full set; an empty array clears it.

### Example

```typescript
import {
    UsedishaSystemAdminApi,
    Configuration,
    AdminSetSellerTypesDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminApi(configuration);

let id: string; //Storefront MongoDB ID (default to undefined)
let adminSetSellerTypesDto: AdminSetSellerTypesDto; //

const { status, data } = await apiInstance.usedishaSystemAdminControllerSetSellerTypesV1(
    id,
    adminSetSellerTypesDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminSetSellerTypesDto** | **AdminSetSellerTypesDto**|  | |
| **id** | [**string**] | Storefront MongoDB ID | defaults to undefined|


### Return type

**Usedisha**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated storefront |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSystemAdminControllerSetStatusV1**
> Usedisha usedishaSystemAdminControllerSetStatusV1(adminSetStatusDto)

Forces the storefront lifecycle status (e.g. suspended, active). Customers cannot open or order from a store that is not active. Suspending or deleting needs a `reason`; every change is kept in the moderation history. Owners can pause (inactive) and resume their own store but cannot lift a suspension.

### Example

```typescript
import {
    UsedishaSystemAdminApi,
    Configuration,
    AdminSetStatusDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminApi(configuration);

let id: string; //Storefront MongoDB ID (default to undefined)
let adminSetStatusDto: AdminSetStatusDto; //

const { status, data } = await apiInstance.usedishaSystemAdminControllerSetStatusV1(
    id,
    adminSetStatusDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminSetStatusDto** | **AdminSetStatusDto**|  | |
| **id** | [**string**] | Storefront MongoDB ID | defaults to undefined|


### Return type

**Usedisha**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated storefront |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSystemAdminControllerStorefrontQueueCountsV1**
> AdminStorefrontQueueCountsResponse usedishaSystemAdminControllerStorefrontQueueCountsV1()

How many storefronts are in each queue of the admin list (`queue` on GET stores), plus the total. Counts and lists share one definition per queue, so they always agree.

### Example

```typescript
import {
    UsedishaSystemAdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminApi(configuration);

const { status, data } = await apiInstance.usedishaSystemAdminControllerStorefrontQueueCountsV1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AdminStorefrontQueueCountsResponse**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Queue counts |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSystemAdminControllerUpdateCommissionConfigV1**
> CommissionConfigResponseDto usedishaSystemAdminControllerUpdateCommissionConfigV1(updateCommissionConfigDto)

Persists the storefront / marketplace commission percentages (0–100).

### Example

```typescript
import {
    UsedishaSystemAdminApi,
    Configuration,
    UpdateCommissionConfigDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSystemAdminApi(configuration);

let updateCommissionConfigDto: UpdateCommissionConfigDto; //

const { status, data } = await apiInstance.usedishaSystemAdminControllerUpdateCommissionConfigV1(
    updateCommissionConfigDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateCommissionConfigDto** | **UpdateCommissionConfigDto**|  | |


### Return type

**CommissionConfigResponseDto**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated commission configuration |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

