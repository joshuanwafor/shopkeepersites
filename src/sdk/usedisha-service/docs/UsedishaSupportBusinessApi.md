# UsedishaSupportBusinessApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usedishaSupportBusinessControllerMarkReadV1**](#usedishasupportbusinesscontrollermarkreadv1) | **POST** /v1/usedisha/{businessId}/usedisha/support/read | Mark support thread as read (clears unread count)|
|[**usedishaSupportBusinessControllerMessagesV1**](#usedishasupportbusinesscontrollermessagesv1) | **GET** /v1/usedisha/{businessId}/usedisha/support/messages | Get the business\&#39;s support messages (chronological)|
|[**usedishaSupportBusinessControllerSendV1**](#usedishasupportbusinesscontrollersendv1) | **POST** /v1/usedisha/{businessId}/usedisha/support/message | Send a message to support|
|[**usedishaSupportBusinessControllerUnreadCountV1**](#usedishasupportbusinesscontrollerunreadcountv1) | **GET** /v1/usedisha/{businessId}/usedisha/support/unread-count | Unread support replies for the business|

# **usedishaSupportBusinessControllerMarkReadV1**
> usedishaSupportBusinessControllerMarkReadV1()


### Example

```typescript
import {
    UsedishaSupportBusinessApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSupportBusinessApi(configuration);

let businessId: string; //Business ID (default to undefined)

const { status, data } = await apiInstance.usedishaSupportBusinessControllerMarkReadV1(
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
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSupportBusinessControllerMessagesV1**
> usedishaSupportBusinessControllerMessagesV1()


### Example

```typescript
import {
    UsedishaSupportBusinessApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSupportBusinessApi(configuration);

let businessId: string; //Business ID (default to undefined)
let limit: number; //Page size (optional) (default to 30)
let nextToken: string; //Opaque pagination cursor from a prior response (optional) (default to undefined)

const { status, data } = await apiInstance.usedishaSupportBusinessControllerMessagesV1(
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
|**200** | Thread + messages + pagination cursor |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSupportBusinessControllerSendV1**
> usedishaSupportBusinessControllerSendV1(sendSupportMessageDto)


### Example

```typescript
import {
    UsedishaSupportBusinessApi,
    Configuration,
    SendSupportMessageDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSupportBusinessApi(configuration);

let businessId: string; //Business ID (default to undefined)
let sendSupportMessageDto: SendSupportMessageDto; //

const { status, data } = await apiInstance.usedishaSupportBusinessControllerSendV1(
    businessId,
    sendSupportMessageDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sendSupportMessageDto** | **SendSupportMessageDto**|  | |
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

# **usedishaSupportBusinessControllerUnreadCountV1**
> usedishaSupportBusinessControllerUnreadCountV1()


### Example

```typescript
import {
    UsedishaSupportBusinessApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSupportBusinessApi(configuration);

let businessId: string; //Business ID (default to undefined)

const { status, data } = await apiInstance.usedishaSupportBusinessControllerUnreadCountV1(
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

