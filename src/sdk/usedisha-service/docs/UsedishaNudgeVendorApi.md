# UsedishaNudgeVendorApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usedishaNudgeVendorControllerMarkReadV1**](#usedishanudgevendorcontrollermarkreadv1) | **POST** /v1/usedisha/{businessId}/usedisha/nudges/{threadId}/read | Mark a thread as read (clears the vendor unread count)|
|[**usedishaNudgeVendorControllerMessagesV1**](#usedishanudgevendorcontrollermessagesv1) | **GET** /v1/usedisha/{businessId}/usedisha/nudges/{threadId}/messages | Get messages in a thread (chronological)|
|[**usedishaNudgeVendorControllerReplyV1**](#usedishanudgevendorcontrollerreplyv1) | **POST** /v1/usedisha/{businessId}/usedisha/nudges/{threadId}/reply | Reply to a customer nudge|
|[**usedishaNudgeVendorControllerThreadsV1**](#usedishanudgevendorcontrollerthreadsv1) | **GET** /v1/usedisha/{businessId}/usedisha/nudges | List the store\&#39;s nudge threads (newest first)|
|[**usedishaNudgeVendorControllerUnreadCountV1**](#usedishanudgevendorcontrollerunreadcountv1) | **GET** /v1/usedisha/{businessId}/usedisha/nudges/unread-count | Total unread nudge messages for the business|

# **usedishaNudgeVendorControllerMarkReadV1**
> usedishaNudgeVendorControllerMarkReadV1()


### Example

```typescript
import {
    UsedishaNudgeVendorApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaNudgeVendorApi(configuration);

let threadId: string; //Nudge thread ID (default to undefined)
let businessId: string; //Business ID (default to undefined)

const { status, data } = await apiInstance.usedishaNudgeVendorControllerMarkReadV1(
    threadId,
    businessId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **threadId** | [**string**] | Nudge thread ID | defaults to undefined|
| **businessId** | [**string**] | Business ID | defaults to undefined|


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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaNudgeVendorControllerMessagesV1**
> usedishaNudgeVendorControllerMessagesV1()


### Example

```typescript
import {
    UsedishaNudgeVendorApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaNudgeVendorApi(configuration);

let threadId: string; //Nudge thread ID (default to undefined)
let businessId: string; //Business ID (default to undefined)
let limit: number; //Page size (optional) (default to 30)
let nextToken: string; //Opaque pagination cursor from a prior response (optional) (default to undefined)

const { status, data } = await apiInstance.usedishaNudgeVendorControllerMessagesV1(
    threadId,
    businessId,
    limit,
    nextToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **threadId** | [**string**] | Nudge thread ID | defaults to undefined|
| **businessId** | [**string**] | Business ID | defaults to undefined|
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaNudgeVendorControllerReplyV1**
> usedishaNudgeVendorControllerReplyV1(sendNudgeDto)


### Example

```typescript
import {
    UsedishaNudgeVendorApi,
    Configuration,
    SendNudgeDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaNudgeVendorApi(configuration);

let threadId: string; //Nudge thread ID (default to undefined)
let businessId: string; //Business ID (default to undefined)
let sendNudgeDto: SendNudgeDto; //

const { status, data } = await apiInstance.usedishaNudgeVendorControllerReplyV1(
    threadId,
    businessId,
    sendNudgeDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sendNudgeDto** | **SendNudgeDto**|  | |
| **threadId** | [**string**] | Nudge thread ID | defaults to undefined|
| **businessId** | [**string**] | Business ID | defaults to undefined|


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

# **usedishaNudgeVendorControllerThreadsV1**
> usedishaNudgeVendorControllerThreadsV1()


### Example

```typescript
import {
    UsedishaNudgeVendorApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaNudgeVendorApi(configuration);

let businessId: string; //Business ID (default to undefined)
let limit: number; //Page size (optional) (default to 30)
let nextToken: string; //Opaque pagination cursor from a prior response (optional) (default to undefined)

const { status, data } = await apiInstance.usedishaNudgeVendorControllerThreadsV1(
    businessId,
    limit,
    nextToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **businessId** | [**string**] | Business ID | defaults to undefined|
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
|**200** | Threads + pagination cursor |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaNudgeVendorControllerUnreadCountV1**
> usedishaNudgeVendorControllerUnreadCountV1()


### Example

```typescript
import {
    UsedishaNudgeVendorApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaNudgeVendorApi(configuration);

let businessId: string; //Business ID (default to undefined)

const { status, data } = await apiInstance.usedishaNudgeVendorControllerUnreadCountV1(
    businessId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **businessId** | [**string**] | Business ID | defaults to undefined|


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

