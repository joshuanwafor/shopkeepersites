# BusinessAdminUsedishaApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usedishaAdminControllerCheckDomainAvailabilityV1**](#usedishaadmincontrollercheckdomainavailabilityv1) | **GET** /v1/usedisha/{businessId}/usedisha/check-domain/{domain} | Check if domain is available|
|[**usedishaAdminControllerCreateUsedishaV1**](#usedishaadmincontrollercreateusedishav1) | **POST** /v1/usedisha/{businessId}/usedisha | Create usedisha profile for business|
|[**usedishaAdminControllerDeleteUsedishaV1**](#usedishaadmincontrollerdeleteusedishav1) | **DELETE** /v1/usedisha/{businessId}/usedisha | Delete/deactivate usedisha profile|
|[**usedishaAdminControllerGetUsedishaV1**](#usedishaadmincontrollergetusedishav1) | **GET** /v1/usedisha/{businessId}/usedisha | Get usedisha profile for business|
|[**usedishaAdminControllerUpdateConfigV1**](#usedishaadmincontrollerupdateconfigv1) | **PUT** /v1/usedisha/{businessId}/usedisha/config | Update usedisha configuration|
|[**usedishaAdminControllerUpdateSocialMediaV1**](#usedishaadmincontrollerupdatesocialmediav1) | **PUT** /v1/usedisha/{businessId}/usedisha/social-media | Update usedisha social media links|
|[**usedishaAdminControllerUpdateThemeV1**](#usedishaadmincontrollerupdatethemev1) | **PUT** /v1/usedisha/{businessId}/usedisha/theme | Update usedisha theme settings|
|[**usedishaAdminControllerUpdateUsedishaV1**](#usedishaadmincontrollerupdateusedishav1) | **PUT** /v1/usedisha/{businessId}/usedisha | Update usedisha profile for business|

# **usedishaAdminControllerCheckDomainAvailabilityV1**
> UsedishaAdminControllerCheckDomainAvailabilityV1200Response usedishaAdminControllerCheckDomainAvailabilityV1()


### Example

```typescript
import {
    BusinessAdminUsedishaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BusinessAdminUsedishaApi(configuration);

let domain: string; // (default to undefined)
let businessId: string; //Business ID (default to undefined)

const { status, data } = await apiInstance.usedishaAdminControllerCheckDomainAvailabilityV1(
    domain,
    businessId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **domain** | [**string**] |  | defaults to undefined|
| **businessId** | [**string**] | Business ID | defaults to undefined|


### Return type

**UsedishaAdminControllerCheckDomainAvailabilityV1200Response**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Domain availability checked |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminControllerCreateUsedishaV1**
> Usedisha usedishaAdminControllerCreateUsedishaV1(createUsedishaDto)


### Example

```typescript
import {
    BusinessAdminUsedishaApi,
    Configuration,
    CreateUsedishaDto
} from './api';

const configuration = new Configuration();
const apiInstance = new BusinessAdminUsedishaApi(configuration);

let businessId: string; //Business ID (default to undefined)
let createUsedishaDto: CreateUsedishaDto; //

const { status, data } = await apiInstance.usedishaAdminControllerCreateUsedishaV1(
    businessId,
    createUsedishaDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createUsedishaDto** | **CreateUsedishaDto**|  | |
| **businessId** | [**string**] | Business ID | defaults to undefined|


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
|**201** | Usedisha profile created successfully |  -  |
|**400** | Bad request - validation errors or business already has profile |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminControllerDeleteUsedishaV1**
> UsedishaAdminControllerDeleteUsedishaV1200Response usedishaAdminControllerDeleteUsedishaV1()


### Example

```typescript
import {
    BusinessAdminUsedishaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BusinessAdminUsedishaApi(configuration);

let businessId: string; //Business ID (default to undefined)

const { status, data } = await apiInstance.usedishaAdminControllerDeleteUsedishaV1(
    businessId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **businessId** | [**string**] | Business ID | defaults to undefined|


### Return type

**UsedishaAdminControllerDeleteUsedishaV1200Response**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Usedisha profile deleted successfully |  -  |
|**404** | Usedisha profile not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminControllerGetUsedishaV1**
> Usedisha usedishaAdminControllerGetUsedishaV1()


### Example

```typescript
import {
    BusinessAdminUsedishaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BusinessAdminUsedishaApi(configuration);

let businessId: string; //Business ID (default to undefined)

const { status, data } = await apiInstance.usedishaAdminControllerGetUsedishaV1(
    businessId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **businessId** | [**string**] | Business ID | defaults to undefined|


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
|**200** | Usedisha profile retrieved successfully |  -  |
|**404** | Usedisha profile not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminControllerUpdateConfigV1**
> Usedisha usedishaAdminControllerUpdateConfigV1(usedishaConfig)


### Example

```typescript
import {
    BusinessAdminUsedishaApi,
    Configuration,
    UsedishaConfig
} from './api';

const configuration = new Configuration();
const apiInstance = new BusinessAdminUsedishaApi(configuration);

let businessId: string; //Business ID (default to undefined)
let usedishaConfig: UsedishaConfig; //

const { status, data } = await apiInstance.usedishaAdminControllerUpdateConfigV1(
    businessId,
    usedishaConfig
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **usedishaConfig** | **UsedishaConfig**|  | |
| **businessId** | [**string**] | Business ID | defaults to undefined|


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
|**200** | Configuration updated successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminControllerUpdateSocialMediaV1**
> Usedisha usedishaAdminControllerUpdateSocialMediaV1(uDSocialMediaLinks)


### Example

```typescript
import {
    BusinessAdminUsedishaApi,
    Configuration,
    UDSocialMediaLinks
} from './api';

const configuration = new Configuration();
const apiInstance = new BusinessAdminUsedishaApi(configuration);

let businessId: string; //Business ID (default to undefined)
let uDSocialMediaLinks: UDSocialMediaLinks; //

const { status, data } = await apiInstance.usedishaAdminControllerUpdateSocialMediaV1(
    businessId,
    uDSocialMediaLinks
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uDSocialMediaLinks** | **UDSocialMediaLinks**|  | |
| **businessId** | [**string**] | Business ID | defaults to undefined|


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
|**200** | Social media links updated successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminControllerUpdateThemeV1**
> Usedisha usedishaAdminControllerUpdateThemeV1(uDThemeSettings)


### Example

```typescript
import {
    BusinessAdminUsedishaApi,
    Configuration,
    UDThemeSettings
} from './api';

const configuration = new Configuration();
const apiInstance = new BusinessAdminUsedishaApi(configuration);

let businessId: string; //Business ID (default to undefined)
let uDThemeSettings: UDThemeSettings; //

const { status, data } = await apiInstance.usedishaAdminControllerUpdateThemeV1(
    businessId,
    uDThemeSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uDThemeSettings** | **UDThemeSettings**|  | |
| **businessId** | [**string**] | Business ID | defaults to undefined|


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
|**200** | Theme updated successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminControllerUpdateUsedishaV1**
> Usedisha usedishaAdminControllerUpdateUsedishaV1(updateUsedishaDto)


### Example

```typescript
import {
    BusinessAdminUsedishaApi,
    Configuration,
    UpdateUsedishaDto
} from './api';

const configuration = new Configuration();
const apiInstance = new BusinessAdminUsedishaApi(configuration);

let businessId: string; //Business ID (default to undefined)
let updateUsedishaDto: UpdateUsedishaDto; //

const { status, data } = await apiInstance.usedishaAdminControllerUpdateUsedishaV1(
    businessId,
    updateUsedishaDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateUsedishaDto** | **UpdateUsedishaDto**|  | |
| **businessId** | [**string**] | Business ID | defaults to undefined|


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
|**200** | Usedisha profile updated successfully |  -  |
|**404** | Usedisha profile not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

