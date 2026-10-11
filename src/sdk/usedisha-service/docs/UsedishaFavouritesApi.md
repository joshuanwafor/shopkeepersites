# UsedishaFavouritesApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usedishaFavouritesControllerAddV1**](#usedishafavouritescontrolleraddv1) | **PUT** /v1/usedisha/usedisha/favourites/{entityType}/{entityId} | Favourite / like an entity|
|[**usedishaFavouritesControllerBulkStatusV1**](#usedishafavouritescontrollerbulkstatusv1) | **POST** /v1/usedisha/usedisha/favourites/status | Bulk check which of the given entities I favourited|
|[**usedishaFavouritesControllerListV1**](#usedishafavouritescontrollerlistv1) | **GET** /v1/usedisha/usedisha/favourites | List my favourites (optionally filtered by type)|
|[**usedishaFavouritesControllerRemoveV1**](#usedishafavouritescontrollerremovev1) | **DELETE** /v1/usedisha/usedisha/favourites/{entityType}/{entityId} | Remove a favourite|
|[**usedishaFavouritesControllerStatusV1**](#usedishafavouritescontrollerstatusv1) | **GET** /v1/usedisha/usedisha/favourites/{entityType}/{entityId} | Whether I favourited this entity, plus its total count|

# **usedishaFavouritesControllerAddV1**
> usedishaFavouritesControllerAddV1(addFavouriteDto)


### Example

```typescript
import {
    UsedishaFavouritesApi,
    Configuration,
    AddFavouriteDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaFavouritesApi(configuration);

let entityType: string; // (default to undefined)
let entityId: string; // (default to undefined)
let addFavouriteDto: AddFavouriteDto; //

const { status, data } = await apiInstance.usedishaFavouritesControllerAddV1(
    entityType,
    entityId,
    addFavouriteDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addFavouriteDto** | **AddFavouriteDto**|  | |
| **entityType** | [**string**] |  | defaults to undefined|
| **entityId** | [**string**] |  | defaults to undefined|


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
|**401** | Sign in to manage favourites |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaFavouritesControllerBulkStatusV1**
> usedishaFavouritesControllerBulkStatusV1(favouriteStatusQueryDto)


### Example

```typescript
import {
    UsedishaFavouritesApi,
    Configuration,
    FavouriteStatusQueryDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaFavouritesApi(configuration);

let favouriteStatusQueryDto: FavouriteStatusQueryDto; //

const { status, data } = await apiInstance.usedishaFavouritesControllerBulkStatusV1(
    favouriteStatusQueryDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **favouriteStatusQueryDto** | **FavouriteStatusQueryDto**|  | |


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
|**200** | Map of &#x60;entityType#entityId&#x60; → boolean |  -  |
|**401** | Sign in to manage favourites |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaFavouritesControllerListV1**
> usedishaFavouritesControllerListV1()


### Example

```typescript
import {
    UsedishaFavouritesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaFavouritesApi(configuration);

let type: string; //Filter by entity type (e.g. store, product) (optional) (default to undefined)
let limit: number; //Page size (optional) (default to 50)
let nextToken: string; //Opaque pagination cursor (optional) (default to undefined)

const { status, data } = await apiInstance.usedishaFavouritesControllerListV1(
    type,
    limit,
    nextToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **type** | [**string**] | Filter by entity type (e.g. store, product) | (optional) defaults to undefined|
| **limit** | [**number**] | Page size | (optional) defaults to 50|
| **nextToken** | [**string**] | Opaque pagination cursor | (optional) defaults to undefined|


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
|**200** | Favourites + pagination cursor |  -  |
|**401** | Sign in to manage favourites |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaFavouritesControllerRemoveV1**
> usedishaFavouritesControllerRemoveV1()


### Example

```typescript
import {
    UsedishaFavouritesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaFavouritesApi(configuration);

let entityType: string; // (default to undefined)
let entityId: string; // (default to undefined)

const { status, data } = await apiInstance.usedishaFavouritesControllerRemoveV1(
    entityType,
    entityId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityType** | [**string**] |  | defaults to undefined|
| **entityId** | [**string**] |  | defaults to undefined|


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
|**401** | Sign in to manage favourites |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaFavouritesControllerStatusV1**
> usedishaFavouritesControllerStatusV1()


### Example

```typescript
import {
    UsedishaFavouritesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaFavouritesApi(configuration);

let entityType: string; // (default to undefined)
let entityId: string; // (default to undefined)

const { status, data } = await apiInstance.usedishaFavouritesControllerStatusV1(
    entityType,
    entityId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityType** | [**string**] |  | defaults to undefined|
| **entityId** | [**string**] |  | defaults to undefined|


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
|**401** | Sign in to manage favourites |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

