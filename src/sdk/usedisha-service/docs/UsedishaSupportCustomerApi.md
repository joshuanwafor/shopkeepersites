# UsedishaSupportCustomerApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usedishaSupportCustomerControllerMarkReadV1**](#usedishasupportcustomercontrollermarkreadv1) | **POST** /v1/usedisha/usedisha/customer/support/read | Mark support thread as read (clears unread count)|
|[**usedishaSupportCustomerControllerMessagesV1**](#usedishasupportcustomercontrollermessagesv1) | **GET** /v1/usedisha/usedisha/customer/support/messages | Get my support messages (chronological)|
|[**usedishaSupportCustomerControllerSendV1**](#usedishasupportcustomercontrollersendv1) | **POST** /v1/usedisha/usedisha/customer/support/message | Send a message to support|
|[**usedishaSupportCustomerControllerUnreadCountV1**](#usedishasupportcustomercontrollerunreadcountv1) | **GET** /v1/usedisha/usedisha/customer/support/unread-count | Unread support replies for the customer|
|[**usedishaSupportCustomerControllerUploadV1**](#usedishasupportcustomercontrolleruploadv1) | **POST** /v1/usedisha/usedisha/customer/support/upload | Upload a support image|

# **usedishaSupportCustomerControllerMarkReadV1**
> usedishaSupportCustomerControllerMarkReadV1()


### Example

```typescript
import {
    UsedishaSupportCustomerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSupportCustomerApi(configuration);

const { status, data } = await apiInstance.usedishaSupportCustomerControllerMarkReadV1();
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
|**201** |  |  -  |
|**401** | Sign in to contact support |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSupportCustomerControllerMessagesV1**
> usedishaSupportCustomerControllerMessagesV1()


### Example

```typescript
import {
    UsedishaSupportCustomerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSupportCustomerApi(configuration);

let limit: number; //Page size (optional) (default to 30)
let nextToken: string; //Opaque pagination cursor from a prior response (optional) (default to undefined)

const { status, data } = await apiInstance.usedishaSupportCustomerControllerMessagesV1(
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
|**200** | Thread + messages + pagination cursor |  -  |
|**401** | Sign in to contact support |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSupportCustomerControllerSendV1**
> usedishaSupportCustomerControllerSendV1(sendSupportMessageDto)

Opens (or continues) the customer support thread and sends a message.

### Example

```typescript
import {
    UsedishaSupportCustomerApi,
    Configuration,
    SendSupportMessageDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSupportCustomerApi(configuration);

let sendSupportMessageDto: SendSupportMessageDto; //

const { status, data } = await apiInstance.usedishaSupportCustomerControllerSendV1(
    sendSupportMessageDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sendSupportMessageDto** | **SendSupportMessageDto**|  | |


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
|**401** | Sign in to contact support |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSupportCustomerControllerUnreadCountV1**
> usedishaSupportCustomerControllerUnreadCountV1()


### Example

```typescript
import {
    UsedishaSupportCustomerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSupportCustomerApi(configuration);

const { status, data } = await apiInstance.usedishaSupportCustomerControllerUnreadCountV1();
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
|**401** | Sign in to contact support |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaSupportCustomerControllerUploadV1**
> SupportUploadResponseDto usedishaSupportCustomerControllerUploadV1()

Uploads an image attachment and returns its CDN URL to send with a message.

### Example

```typescript
import {
    UsedishaSupportCustomerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaSupportCustomerApi(configuration);

const { status, data } = await apiInstance.usedishaSupportCustomerControllerUploadV1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**SupportUploadResponseDto**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**401** | Sign in to contact support |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

