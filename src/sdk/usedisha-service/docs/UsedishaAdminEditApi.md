# UsedishaAdminEditApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usedishaAdminEditControllerAddBranchV1**](#usedishaadmineditcontrolleraddbranchv1) | **POST** /v1/usedisha/usedisha/admin/stores/{id}/branches | Add a branch to the storefront|
|[**usedishaAdminEditControllerRemoveBranchV1**](#usedishaadmineditcontrollerremovebranchv1) | **DELETE** /v1/usedisha/usedisha/admin/stores/{id}/branches/{branchId} | Remove a branch from the storefront|
|[**usedishaAdminEditControllerUpdateBranchV1**](#usedishaadmineditcontrollerupdatebranchv1) | **PATCH** /v1/usedisha/usedisha/admin/stores/{id}/branches/{branchId} | Update a branch entry on the storefront|
|[**usedishaAdminEditControllerUpdateConfigV1**](#usedishaadmineditcontrollerupdateconfigv1) | **PUT** /v1/usedisha/usedisha/admin/stores/{id}/config | Replace storefront configuration|
|[**usedishaAdminEditControllerUpdateDeliveryConfigV1**](#usedishaadmineditcontrollerupdatedeliveryconfigv1) | **PUT** /v1/usedisha/usedisha/admin/stores/{id}/delivery-config | Update storefront delivery configuration|
|[**usedishaAdminEditControllerUpdateImagesV1**](#usedishaadmineditcontrollerupdateimagesv1) | **PUT** /v1/usedisha/usedisha/admin/stores/{id}/images | Edit storefront images|
|[**usedishaAdminEditControllerUpdateProfileV1**](#usedishaadmineditcontrollerupdateprofilev1) | **PUT** /v1/usedisha/usedisha/admin/stores/{id}/profile | Edit storefront profile|
|[**usedishaAdminEditControllerUpdateSocialMediaV1**](#usedishaadmineditcontrollerupdatesocialmediav1) | **PUT** /v1/usedisha/usedisha/admin/stores/{id}/social-media | Replace storefront social media links|
|[**usedishaAdminEditControllerUpdateThemeV1**](#usedishaadmineditcontrollerupdatethemev1) | **PUT** /v1/usedisha/usedisha/admin/stores/{id}/theme | Replace storefront theme settings|
|[**usedishaAdminEditControllerUploadImageV1**](#usedishaadmineditcontrolleruploadimagev1) | **POST** /v1/usedisha/usedisha/admin/stores/image-upload | Upload a storefront image|

# **usedishaAdminEditControllerAddBranchV1**
> Usedisha usedishaAdminEditControllerAddBranchV1(createUsedishaBranchDto)

Registers a branch (which must belong to the storefront\'s business) for discovery.

### Example

```typescript
import {
    UsedishaAdminEditApi,
    Configuration,
    CreateUsedishaBranchDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaAdminEditApi(configuration);

let id: string; //Storefront MongoDB ID (default to undefined)
let createUsedishaBranchDto: CreateUsedishaBranchDto; //

const { status, data } = await apiInstance.usedishaAdminEditControllerAddBranchV1(
    id,
    createUsedishaBranchDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createUsedishaBranchDto** | **CreateUsedishaBranchDto**|  | |
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
|**201** | Branch added |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminEditControllerRemoveBranchV1**
> Usedisha usedishaAdminEditControllerRemoveBranchV1()


### Example

```typescript
import {
    UsedishaAdminEditApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaAdminEditApi(configuration);

let id: string; //Storefront MongoDB ID (default to undefined)
let branchId: string; //Branch ID (ref to Branch document) (default to undefined)

const { status, data } = await apiInstance.usedishaAdminEditControllerRemoveBranchV1(
    id,
    branchId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Storefront MongoDB ID | defaults to undefined|
| **branchId** | [**string**] | Branch ID (ref to Branch document) | defaults to undefined|


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

# **usedishaAdminEditControllerUpdateBranchV1**
> Usedisha usedishaAdminEditControllerUpdateBranchV1(updateUsedishaBranchDto)


### Example

```typescript
import {
    UsedishaAdminEditApi,
    Configuration,
    UpdateUsedishaBranchDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaAdminEditApi(configuration);

let id: string; //Storefront MongoDB ID (default to undefined)
let branchId: string; //Branch ID (ref to Branch document) (default to undefined)
let updateUsedishaBranchDto: UpdateUsedishaBranchDto; //

const { status, data } = await apiInstance.usedishaAdminEditControllerUpdateBranchV1(
    id,
    branchId,
    updateUsedishaBranchDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateUsedishaBranchDto** | **UpdateUsedishaBranchDto**|  | |
| **id** | [**string**] | Storefront MongoDB ID | defaults to undefined|
| **branchId** | [**string**] | Branch ID (ref to Branch document) | defaults to undefined|


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

# **usedishaAdminEditControllerUpdateConfigV1**
> Usedisha usedishaAdminEditControllerUpdateConfigV1(usedishaConfig)


### Example

```typescript
import {
    UsedishaAdminEditApi,
    Configuration,
    UsedishaConfig
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaAdminEditApi(configuration);

let id: string; //Storefront MongoDB ID (default to undefined)
let usedishaConfig: UsedishaConfig; //

const { status, data } = await apiInstance.usedishaAdminEditControllerUpdateConfigV1(
    id,
    usedishaConfig
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **usedishaConfig** | **UsedishaConfig**|  | |
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

# **usedishaAdminEditControllerUpdateDeliveryConfigV1**
> Usedisha usedishaAdminEditControllerUpdateDeliveryConfigV1(updateUsedishaDeliveryConfigDto)

Sets supported delivery methods and businessDelivery pricing — a flat `businessDelivery.fee` or a distance-based `businessDelivery.rateCard` (at least one is required when businessDelivery is supported).

### Example

```typescript
import {
    UsedishaAdminEditApi,
    Configuration,
    UpdateUsedishaDeliveryConfigDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaAdminEditApi(configuration);

let id: string; //Storefront MongoDB ID (default to undefined)
let updateUsedishaDeliveryConfigDto: UpdateUsedishaDeliveryConfigDto; //

const { status, data } = await apiInstance.usedishaAdminEditControllerUpdateDeliveryConfigV1(
    id,
    updateUsedishaDeliveryConfigDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateUsedishaDeliveryConfigDto** | **UpdateUsedishaDeliveryConfigDto**|  | |
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

# **usedishaAdminEditControllerUpdateImagesV1**
> Usedisha usedishaAdminEditControllerUpdateImagesV1(adminUpdateUsedishaImagesDto)

Set logo, cover photo, favicon and/or theme image URLs. Only provided fields change; theme colours are preserved.

### Example

```typescript
import {
    UsedishaAdminEditApi,
    Configuration,
    AdminUpdateUsedishaImagesDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaAdminEditApi(configuration);

let id: string; //Storefront MongoDB ID (default to undefined)
let adminUpdateUsedishaImagesDto: AdminUpdateUsedishaImagesDto; //

const { status, data } = await apiInstance.usedishaAdminEditControllerUpdateImagesV1(
    id,
    adminUpdateUsedishaImagesDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminUpdateUsedishaImagesDto** | **AdminUpdateUsedishaImagesDto**|  | |
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

# **usedishaAdminEditControllerUpdateProfileV1**
> Usedisha usedishaAdminEditControllerUpdateProfileV1(adminUpdateUsedishaProfileDto)

Update core profile fields (name, legalName, description, caption, status, featured, domain, payment methods, tags, etc.) on any storefront. Domain uniqueness is enforced. Status and featured changes are kept in the moderation history; suspending or deleting needs a reason, so it goes through PATCH usedisha/admin/stores/:id/status instead.

### Example

```typescript
import {
    UsedishaAdminEditApi,
    Configuration,
    AdminUpdateUsedishaProfileDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaAdminEditApi(configuration);

let id: string; //Storefront MongoDB ID (default to undefined)
let adminUpdateUsedishaProfileDto: AdminUpdateUsedishaProfileDto; //

const { status, data } = await apiInstance.usedishaAdminEditControllerUpdateProfileV1(
    id,
    adminUpdateUsedishaProfileDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminUpdateUsedishaProfileDto** | **AdminUpdateUsedishaProfileDto**|  | |
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

# **usedishaAdminEditControllerUpdateSocialMediaV1**
> Usedisha usedishaAdminEditControllerUpdateSocialMediaV1(uDSocialMediaLinks)


### Example

```typescript
import {
    UsedishaAdminEditApi,
    Configuration,
    UDSocialMediaLinks
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaAdminEditApi(configuration);

let id: string; //Storefront MongoDB ID (default to undefined)
let uDSocialMediaLinks: UDSocialMediaLinks; //

const { status, data } = await apiInstance.usedishaAdminEditControllerUpdateSocialMediaV1(
    id,
    uDSocialMediaLinks
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uDSocialMediaLinks** | **UDSocialMediaLinks**|  | |
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

# **usedishaAdminEditControllerUpdateThemeV1**
> Usedisha usedishaAdminEditControllerUpdateThemeV1(uDThemeSettings)


### Example

```typescript
import {
    UsedishaAdminEditApi,
    Configuration,
    UDThemeSettings
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaAdminEditApi(configuration);

let id: string; //Storefront MongoDB ID (default to undefined)
let uDThemeSettings: UDThemeSettings; //

const { status, data } = await apiInstance.usedishaAdminEditControllerUpdateThemeV1(
    id,
    uDThemeSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uDThemeSettings** | **UDThemeSettings**|  | |
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

# **usedishaAdminEditControllerUploadImageV1**
> AdminImageUploadResponse usedishaAdminEditControllerUploadImageV1()

Uploads an image file (multipart `file`), optimises it into multiple sizes, and returns its CDN URL(s). Use the returned `url` for logo / coverPhoto / favicon via the images, profile or theme endpoints. Store-agnostic — does not persist anything by itself.

### Example

```typescript
import {
    UsedishaAdminEditApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaAdminEditApi(configuration);

let file: File; // (default to undefined)

const { status, data } = await apiInstance.usedishaAdminEditControllerUploadImageV1(
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] |  | defaults to undefined|


### Return type

**AdminImageUploadResponse**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Uploaded image URLs |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

