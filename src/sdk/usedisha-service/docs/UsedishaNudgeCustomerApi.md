# UsedishaNudgeCustomerApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usedishaNudgeCustomerControllerMarkReadV1**](#usedishanudgecustomercontrollermarkreadv1) | **POST** /v1/usedisha/usedisha/customer/nudges/{threadId}/read | Mark a thread as read (clears the customer unread count)|
|[**usedishaNudgeCustomerControllerMessagesV1**](#usedishanudgecustomercontrollermessagesv1) | **GET** /v1/usedisha/usedisha/customer/nudges/{threadId}/messages | Get messages in a thread (chronological)|
|[**usedishaNudgeCustomerControllerSendV1**](#usedishanudgecustomercontrollersendv1) | **POST** /v1/usedisha/usedisha/store/{id}/nudge | Nudge a store|
|[**usedishaNudgeCustomerControllerThreadsV1**](#usedishanudgecustomercontrollerthreadsv1) | **GET** /v1/usedisha/usedisha/customer/nudges | List my nudge threads (newest first)|
|[**usedishaNudgeCustomerControllerUnreadCountV1**](#usedishanudgecustomercontrollerunreadcountv1) | **GET** /v1/usedisha/usedisha/customer/nudges/unread-count | Total unread nudge messages for the customer|

# **usedishaNudgeCustomerControllerMarkReadV1**
> usedishaNudgeCustomerControllerMarkReadV1()


### Example

```typescript
import {
    UsedishaNudgeCustomerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaNudgeCustomerApi(configuration);

let threadId: string; //Nudge thread ID (default to undefined)

const { status, data } = await apiInstance.usedishaNudgeCustomerControllerMarkReadV1(
    threadId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **threadId** | [**string**] | Nudge thread ID | defaults to undefined|


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
|**401** | Sign in to nudge a store |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaNudgeCustomerControllerMessagesV1**
> usedishaNudgeCustomerControllerMessagesV1()


### Example

```typescript
import {
    UsedishaNudgeCustomerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaNudgeCustomerApi(configuration);

let threadId: string; //Nudge thread ID (default to undefined)
let limit: number; //Page size (optional) (default to 30)
let nextToken: string; //Opaque pagination cursor from a prior response (optional) (default to undefined)

const { status, data } = await apiInstance.usedishaNudgeCustomerControllerMessagesV1(
    threadId,
    limit,
    nextToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **threadId** | [**string**] | Nudge thread ID | defaults to undefined|
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
|**401** | Sign in to nudge a store |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaNudgeCustomerControllerSendV1**
> usedishaNudgeCustomerControllerSendV1(sendNudgeDto)

Opens (or continues) a chat thread with the store and sends a message. The store owner/staff are notified instantly.

### Example

```typescript
import {
    UsedishaNudgeCustomerApi,
    Configuration,
    SendNudgeDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaNudgeCustomerApi(configuration);

let id: string; //Storefront MongoDB ID (default to undefined)
let sendNudgeDto: SendNudgeDto; //

const { status, data } = await apiInstance.usedishaNudgeCustomerControllerSendV1(
    id,
    sendNudgeDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sendNudgeDto** | **SendNudgeDto**|  | |
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
|**201** |  |  -  |
|**401** | Sign in to nudge a store |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaNudgeCustomerControllerThreadsV1**
> usedishaNudgeCustomerControllerThreadsV1()


### Example

```typescript
import {
    UsedishaNudgeCustomerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaNudgeCustomerApi(configuration);

let limit: number; //Page size (optional) (default to 30)
let nextToken: string; //Opaque pagination cursor from a prior response (optional) (default to undefined)

const { status, data } = await apiInstance.usedishaNudgeCustomerControllerThreadsV1(
    limit,
    nextToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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
|**401** | Sign in to nudge a store |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaNudgeCustomerControllerUnreadCountV1**
> usedishaNudgeCustomerControllerUnreadCountV1()


### Example

```typescript
import {
    UsedishaNudgeCustomerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaNudgeCustomerApi(configuration);

const { status, data } = await apiInstance.usedishaNudgeCustomerControllerUnreadCountV1();
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
|**401** | Sign in to nudge a store |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

