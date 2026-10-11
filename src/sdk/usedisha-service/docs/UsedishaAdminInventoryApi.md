# UsedishaAdminInventoryApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usedishaAdminInventoryControllerAddToStorefrontV1**](#usedishaadmininventorycontrolleraddtostorefrontv1) | **PUT** /v1/usedisha/usedisha/admin/stores/{id}/inventory/products/{productId}/storefront | Add an existing product to the storefront|
|[**usedishaAdminInventoryControllerCreateCategoryV1**](#usedishaadmininventorycontrollercreatecategoryv1) | **POST** /v1/usedisha/usedisha/admin/stores/{id}/inventory/categories | Create a category on the connected branch|
|[**usedishaAdminInventoryControllerCreateProductV1**](#usedishaadmininventorycontrollercreateproductv1) | **POST** /v1/usedisha/usedisha/admin/stores/{id}/inventory/products | Create a product on the connected branch|
|[**usedishaAdminInventoryControllerDeleteCategoryV1**](#usedishaadmininventorycontrollerdeletecategoryv1) | **DELETE** /v1/usedisha/usedisha/admin/stores/{id}/inventory/categories/{categoryId} | Delete a category from the connected branch|
|[**usedishaAdminInventoryControllerDeleteProductV1**](#usedishaadmininventorycontrollerdeleteproductv1) | **DELETE** /v1/usedisha/usedisha/admin/stores/{id}/inventory/products/{productId} | Delete a product from the connected branch|
|[**usedishaAdminInventoryControllerGetProductV1**](#usedishaadmininventorycontrollergetproductv1) | **GET** /v1/usedisha/usedisha/admin/stores/{id}/inventory/products/{productId} | Get a product on the connected branch|
|[**usedishaAdminInventoryControllerImportFromCatalogV1**](#usedishaadmininventorycontrollerimportfromcatalogv1) | **POST** /v1/usedisha/usedisha/admin/stores/{id}/inventory/import-from-catalog | Import global-catalog templates onto the storefront|
|[**usedishaAdminInventoryControllerListCandidateProductsV1**](#usedishaadmininventorycontrollerlistcandidateproductsv1) | **GET** /v1/usedisha/usedisha/admin/stores/{id}/inventory/products/candidates | List importable products (not yet on the storefront)|
|[**usedishaAdminInventoryControllerListCategoriesV1**](#usedishaadmininventorycontrollerlistcategoriesv1) | **GET** /v1/usedisha/usedisha/admin/stores/{id}/inventory/categories | List categories for the connected branch|
|[**usedishaAdminInventoryControllerListProductsV1**](#usedishaadmininventorycontrollerlistproductsv1) | **GET** /v1/usedisha/usedisha/admin/stores/{id}/inventory/products | List the connected branch\&#39;s products|
|[**usedishaAdminInventoryControllerRemoveFromStorefrontV1**](#usedishaadmininventorycontrollerremovefromstorefrontv1) | **DELETE** /v1/usedisha/usedisha/admin/stores/{id}/inventory/products/{productId}/storefront | Remove a product from the storefront (un-list)|
|[**usedishaAdminInventoryControllerSetStockV1**](#usedishaadmininventorycontrollersetstockv1) | **PUT** /v1/usedisha/usedisha/admin/stores/{id}/inventory/products/{productId}/stock | Set a product’s stock at the connected branch|
|[**usedishaAdminInventoryControllerUpdateCategoryV1**](#usedishaadmininventorycontrollerupdatecategoryv1) | **PUT** /v1/usedisha/usedisha/admin/stores/{id}/inventory/categories/{categoryId} | Update a category on the connected branch|
|[**usedishaAdminInventoryControllerUpdateProductV1**](#usedishaadmininventorycontrollerupdateproductv1) | **PUT** /v1/usedisha/usedisha/admin/stores/{id}/inventory/products/{productId} | Update a product on the connected branch|

# **usedishaAdminInventoryControllerAddToStorefrontV1**
> Product usedishaAdminInventoryControllerAddToStorefrontV1()

Lists an existing branch/POS product on the storefront by tagging it with the usedisha context. Idempotent.

### Example

```typescript
import {
    UsedishaAdminInventoryApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaAdminInventoryApi(configuration);

let id: string; //Storefront MongoDB ID (default to undefined)
let productId: string; //Product MongoDB ID (default to undefined)

const { status, data } = await apiInstance.usedishaAdminInventoryControllerAddToStorefrontV1(
    id,
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Storefront MongoDB ID | defaults to undefined|
| **productId** | [**string**] | Product MongoDB ID | defaults to undefined|


### Return type

**Product**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Product (now on the storefront) |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminInventoryControllerCreateCategoryV1**
> usedishaAdminInventoryControllerCreateCategoryV1(adminCreateBranchCategoryDto)

businessId / branchId are derived server-side; slug is auto-generated from the name.

### Example

```typescript
import {
    UsedishaAdminInventoryApi,
    Configuration,
    AdminCreateBranchCategoryDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaAdminInventoryApi(configuration);

let id: string; //Storefront MongoDB ID (default to undefined)
let adminCreateBranchCategoryDto: AdminCreateBranchCategoryDto; //

const { status, data } = await apiInstance.usedishaAdminInventoryControllerCreateCategoryV1(
    id,
    adminCreateBranchCategoryDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminCreateBranchCategoryDto** | **AdminCreateBranchCategoryDto**|  | |
| **id** | [**string**] | Storefront MongoDB ID | defaults to undefined|


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
|**201** | Created category |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminInventoryControllerCreateProductV1**
> Product usedishaAdminInventoryControllerCreateProductV1(adminCreateBranchProductDto)

Creates a product for the storefront’s connected branch. businessId / branchId / publisherId are derived server-side; defaults to a PHYSICAL (stock-tracked) product.

### Example

```typescript
import {
    UsedishaAdminInventoryApi,
    Configuration,
    AdminCreateBranchProductDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaAdminInventoryApi(configuration);

let id: string; //Storefront MongoDB ID (default to undefined)
let adminCreateBranchProductDto: AdminCreateBranchProductDto; //

const { status, data } = await apiInstance.usedishaAdminInventoryControllerCreateProductV1(
    id,
    adminCreateBranchProductDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminCreateBranchProductDto** | **AdminCreateBranchProductDto**|  | |
| **id** | [**string**] | Storefront MongoDB ID | defaults to undefined|


### Return type

**Product**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created product |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminInventoryControllerDeleteCategoryV1**
> usedishaAdminInventoryControllerDeleteCategoryV1()


### Example

```typescript
import {
    UsedishaAdminInventoryApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaAdminInventoryApi(configuration);

let id: string; //Storefront MongoDB ID (default to undefined)
let categoryId: string; //Category MongoDB ID (default to undefined)

const { status, data } = await apiInstance.usedishaAdminInventoryControllerDeleteCategoryV1(
    id,
    categoryId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Storefront MongoDB ID | defaults to undefined|
| **categoryId** | [**string**] | Category MongoDB ID | defaults to undefined|


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
|**200** | Category deleted |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminInventoryControllerDeleteProductV1**
> usedishaAdminInventoryControllerDeleteProductV1()


### Example

```typescript
import {
    UsedishaAdminInventoryApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaAdminInventoryApi(configuration);

let id: string; //Storefront MongoDB ID (default to undefined)
let productId: string; //Product MongoDB ID (default to undefined)

const { status, data } = await apiInstance.usedishaAdminInventoryControllerDeleteProductV1(
    id,
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Storefront MongoDB ID | defaults to undefined|
| **productId** | [**string**] | Product MongoDB ID | defaults to undefined|


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
|**200** | Product deleted |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminInventoryControllerGetProductV1**
> Product usedishaAdminInventoryControllerGetProductV1()


### Example

```typescript
import {
    UsedishaAdminInventoryApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaAdminInventoryApi(configuration);

let id: string; //Storefront MongoDB ID (default to undefined)
let productId: string; //Product MongoDB ID (default to undefined)

const { status, data } = await apiInstance.usedishaAdminInventoryControllerGetProductV1(
    id,
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Storefront MongoDB ID | defaults to undefined|
| **productId** | [**string**] | Product MongoDB ID | defaults to undefined|


### Return type

**Product**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Product |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminInventoryControllerImportFromCatalogV1**
> usedishaAdminInventoryControllerImportFromCatalogV1(adminImportFromCatalogDto)

Creates products on the connected branch from one or more global-catalog templates and lists them on the storefront. Existing products (same source template / barcode / SKU on the branch) are skipped unless skipExisting=false.

### Example

```typescript
import {
    UsedishaAdminInventoryApi,
    Configuration,
    AdminImportFromCatalogDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaAdminInventoryApi(configuration);

let id: string; //Storefront MongoDB ID (default to undefined)
let adminImportFromCatalogDto: AdminImportFromCatalogDto; //

const { status, data } = await apiInstance.usedishaAdminInventoryControllerImportFromCatalogV1(
    id,
    adminImportFromCatalogDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminImportFromCatalogDto** | **AdminImportFromCatalogDto**|  | |
| **id** | [**string**] | Storefront MongoDB ID | defaults to undefined|


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
|**201** | Import summary (created / skipped / errors) |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminInventoryControllerListCandidateProductsV1**
> GetProductsResponseDto usedishaAdminInventoryControllerListCandidateProductsV1()

Existing branch/POS products on the connected branch that are NOT yet listed on the storefront — candidates an admin can import during onboarding. Filter by `search`.

### Example

```typescript
import {
    UsedishaAdminInventoryApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaAdminInventoryApi(configuration);

let id: string; //Storefront MongoDB ID (default to undefined)
let search: string; //Search by product name (optional) (default to undefined)
let page: number; //Page (1-based) (optional) (default to 1)
let limit: number; //Results per page (optional) (default to 20)
let sortBy: string; //Field to sort by (optional) (default to 'createdAt')
let sortOrder: 'asc' | 'desc'; // (optional) (default to 'desc')

const { status, data } = await apiInstance.usedishaAdminInventoryControllerListCandidateProductsV1(
    id,
    search,
    page,
    limit,
    sortBy,
    sortOrder
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Storefront MongoDB ID | defaults to undefined|
| **search** | [**string**] | Search by product name | (optional) defaults to undefined|
| **page** | [**number**] | Page (1-based) | (optional) defaults to 1|
| **limit** | [**number**] | Results per page | (optional) defaults to 20|
| **sortBy** | [**string**] | Field to sort by | (optional) defaults to 'createdAt'|
| **sortOrder** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** |  | (optional) defaults to 'desc'|


### Return type

**GetProductsResponseDto**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Paginated candidate products |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminInventoryControllerListCategoriesV1**
> usedishaAdminInventoryControllerListCategoriesV1()

Product categories on the connected branch (for the product form and the category manager).

### Example

```typescript
import {
    UsedishaAdminInventoryApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaAdminInventoryApi(configuration);

let id: string; //Storefront MongoDB ID (default to undefined)

const { status, data } = await apiInstance.usedishaAdminInventoryControllerListCategoriesV1(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Storefront MongoDB ID | defaults to undefined|


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
|**200** | Branch categories |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminInventoryControllerListProductsV1**
> GetProductsResponseDto usedishaAdminInventoryControllerListProductsV1()

Paginated products for the storefront’s connected branch. Filter by `search`.

### Example

```typescript
import {
    UsedishaAdminInventoryApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaAdminInventoryApi(configuration);

let id: string; //Storefront MongoDB ID (default to undefined)
let search: string; //Search by product name (optional) (default to undefined)
let page: number; //Page (1-based) (optional) (default to 1)
let limit: number; //Results per page (optional) (default to 20)
let sortBy: string; //Field to sort by (optional) (default to 'createdAt')
let sortOrder: 'asc' | 'desc'; // (optional) (default to 'desc')

const { status, data } = await apiInstance.usedishaAdminInventoryControllerListProductsV1(
    id,
    search,
    page,
    limit,
    sortBy,
    sortOrder
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Storefront MongoDB ID | defaults to undefined|
| **search** | [**string**] | Search by product name | (optional) defaults to undefined|
| **page** | [**number**] | Page (1-based) | (optional) defaults to 1|
| **limit** | [**number**] | Results per page | (optional) defaults to 20|
| **sortBy** | [**string**] | Field to sort by | (optional) defaults to 'createdAt'|
| **sortOrder** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** |  | (optional) defaults to 'desc'|


### Return type

**GetProductsResponseDto**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Paginated products |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminInventoryControllerRemoveFromStorefrontV1**
> usedishaAdminInventoryControllerRemoveFromStorefrontV1()

Removes the product from the storefront without deleting it (keeps it in POS).

### Example

```typescript
import {
    UsedishaAdminInventoryApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaAdminInventoryApi(configuration);

let id: string; //Storefront MongoDB ID (default to undefined)
let productId: string; //Product MongoDB ID (default to undefined)

const { status, data } = await apiInstance.usedishaAdminInventoryControllerRemoveFromStorefrontV1(
    id,
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Storefront MongoDB ID | defaults to undefined|
| **productId** | [**string**] | Product MongoDB ID | defaults to undefined|


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
|**200** | Product un-listed |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminInventoryControllerSetStockV1**
> usedishaAdminInventoryControllerSetStockV1(adminSetStockDto)

Sets the absolute stock quantity (recorded as a stock ADJUSTMENT). Physical products only.

### Example

```typescript
import {
    UsedishaAdminInventoryApi,
    Configuration,
    AdminSetStockDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaAdminInventoryApi(configuration);

let id: string; //Storefront MongoDB ID (default to undefined)
let productId: string; //Product MongoDB ID (default to undefined)
let adminSetStockDto: AdminSetStockDto; //

const { status, data } = await apiInstance.usedishaAdminInventoryControllerSetStockV1(
    id,
    productId,
    adminSetStockDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminSetStockDto** | **AdminSetStockDto**|  | |
| **id** | [**string**] | Storefront MongoDB ID | defaults to undefined|
| **productId** | [**string**] | Product MongoDB ID | defaults to undefined|


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
|**200** | Stock adjustment transaction |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminInventoryControllerUpdateCategoryV1**
> usedishaAdminInventoryControllerUpdateCategoryV1(adminUpdateBranchCategoryDto)


### Example

```typescript
import {
    UsedishaAdminInventoryApi,
    Configuration,
    AdminUpdateBranchCategoryDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaAdminInventoryApi(configuration);

let id: string; //Storefront MongoDB ID (default to undefined)
let categoryId: string; //Category MongoDB ID (default to undefined)
let adminUpdateBranchCategoryDto: AdminUpdateBranchCategoryDto; //

const { status, data } = await apiInstance.usedishaAdminInventoryControllerUpdateCategoryV1(
    id,
    categoryId,
    adminUpdateBranchCategoryDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminUpdateBranchCategoryDto** | **AdminUpdateBranchCategoryDto**|  | |
| **id** | [**string**] | Storefront MongoDB ID | defaults to undefined|
| **categoryId** | [**string**] | Category MongoDB ID | defaults to undefined|


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
|**200** | Updated category |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaAdminInventoryControllerUpdateProductV1**
> Product usedishaAdminInventoryControllerUpdateProductV1(updateProductDto)


### Example

```typescript
import {
    UsedishaAdminInventoryApi,
    Configuration,
    UpdateProductDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaAdminInventoryApi(configuration);

let id: string; //Storefront MongoDB ID (default to undefined)
let productId: string; //Product MongoDB ID (default to undefined)
let updateProductDto: UpdateProductDto; //

const { status, data } = await apiInstance.usedishaAdminInventoryControllerUpdateProductV1(
    id,
    productId,
    updateProductDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateProductDto** | **UpdateProductDto**|  | |
| **id** | [**string**] | Storefront MongoDB ID | defaults to undefined|
| **productId** | [**string**] | Product MongoDB ID | defaults to undefined|


### Return type

**Product**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated product |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

