# UsedishaSupportAdminApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usedishaSupportAdminControllerMarkReadV1**](#usedishasupportadmincontrollermarkreadv1) | **POST** /v1/usedisha/usedisha/admin/support/threads/{threadId}/read | Mark a support thread as read (clears agent unread)|
|[**usedishaSupportAdminControllerMessagesV1**](#usedishasupportadmincontrollermessagesv1) | **GET** /v1/usedisha/usedisha/admin/support/threads/{threadId}/messages | Get messages in a support thread (chronological)|
|[**usedishaSupportAdminControllerReplyV1**](#usedishasupportadmincontrollerreplyv1) | **POST** /v1/usedisha/usedisha/admin/support/threads/{threadId}/reply | Reply to a customer support thread|
|[**usedishaSupportAdminControllerThreadsV1**](#usedishasupportadmincontrollerthreadsv1) | **GET** /v1/usedisha/usedisha/admin/support/threads | List support threads (newest activity first)|
|[**usedishaSupportAdminControllerUnreadCountV1**](#usedishasupportadmincontrollerunreadcountv1) | **GET** /v1/usedisha/usedisha/admin/support/unread-count | Total messages awaiting a reply|

# **usedishaSupportAdminControllerMarkReadV1**
> usedishaSupportAdminControllerMarkReadV1()


### Example

```typescript
import {
    UsedishaSupportAdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSupportAdminApi(configuration);

let threadId: string; //Support thread ID (default to undefined)

const { status, data } = await apiInstance.usedishaSupportAdminControllerMarkReadV1(
    threadId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **threadId** | [**string**] | Support thread ID | defaults to undefined|


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
|**201** |  |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSupportAdminControllerMessagesV1**
> usedishaSupportAdminControllerMessagesV1()


### Example

```typescript
import {
    UsedishaSupportAdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSupportAdminApi(configuration);

let threadId: string; //Support thread ID (default to undefined)
let limit: number; //Page size (optional) (default to 30)
let nextToken: string; //Opaque pagination cursor from a prior response (optional) (default to undefined)

const { status, data } = await apiInstance.usedishaSupportAdminControllerMessagesV1(
    threadId,
    limit,
    nextToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **threadId** | [**string**] | Support thread ID | defaults to undefined|
| **limit** | [**number**] | Page size | (optional) defaults to 30|
| **nextToken** | [**string**] | Opaque pagination cursor from a prior response | (optional) defaults to undefined|


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

# **usedishaSupportAdminControllerReplyV1**
> usedishaSupportAdminControllerReplyV1(sendSupportMessageDto)


### Example

```typescript
import {
    UsedishaSupportAdminApi,
    Configuration,
    SendSupportMessageDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSupportAdminApi(configuration);

let threadId: string; //Support thread ID (default to undefined)
let sendSupportMessageDto: SendSupportMessageDto; //

const { status, data } = await apiInstance.usedishaSupportAdminControllerReplyV1(
    threadId,
    sendSupportMessageDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sendSupportMessageDto** | **SendSupportMessageDto**|  | |
| **threadId** | [**string**] | Support thread ID | defaults to undefined|


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
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSupportAdminControllerThreadsV1**
> usedishaSupportAdminControllerThreadsV1()


### Example

```typescript
import {
    UsedishaSupportAdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSupportAdminApi(configuration);

let limit: number; //Page size (optional) (default to 30)
let nextToken: string; //Opaque pagination cursor from a prior response (optional) (default to undefined)
let audience: 'customer' | 'business'; // (optional) (default to undefined)

const { status, data } = await apiInstance.usedishaSupportAdminControllerThreadsV1(
    limit,
    nextToken,
    audience
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Page size | (optional) defaults to 30|
| **nextToken** | [**string**] | Opaque pagination cursor from a prior response | (optional) defaults to undefined|
| **audience** | [**&#39;customer&#39; | &#39;business&#39;**]**Array<&#39;customer&#39; &#124; &#39;business&#39;>** |  | (optional) defaults to undefined|


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
|**200** | Threads + pagination cursor |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Caller is not a platform administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSupportAdminControllerUnreadCountV1**
> usedishaSupportAdminControllerUnreadCountV1()


### Example

```typescript
import {
    UsedishaSupportAdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSupportAdminApi(configuration);

let audience: 'customer' | 'business'; // (optional) (default to undefined)

const { status, data } = await apiInstance.usedishaSupportAdminControllerUnreadCountV1(
    audience
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **audience** | [**&#39;customer&#39; | &#39;business&#39;**]**Array<&#39;customer&#39; &#124; &#39;business&#39;>** |  | (optional) defaults to undefined|


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

