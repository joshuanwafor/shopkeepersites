# UsedishaPayLinksApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usedishaCustomerPayLinksControllerCancelV1**](#usedishacustomerpaylinkscontrollercancelv1) | **POST** /v1/usedisha/usedisha/customer/pay-links/{id}/cancel | Stop a link being paid|
|[**usedishaCustomerPayLinksControllerCreateV1**](#usedishacustomerpaylinkscontrollercreatev1) | **POST** /v1/usedisha/usedisha/customer/pay-links | Share my cart so someone else can pay|
|[**usedishaCustomerPayLinksControllerListV1**](#usedishacustomerpaylinkscontrollerlistv1) | **GET** /v1/usedisha/usedisha/customer/pay-links | My recent pay links, newest first|
|[**usedishaPublicPayLinksControllerPayV1**](#usedishapublicpaylinkscontrollerpayv1) | **POST** /v1/usedisha/usedisha/pay-links/{token}/pay | Pay for a shared cart|
|[**usedishaPublicPayLinksControllerViewV1**](#usedishapublicpaylinkscontrollerviewv1) | **GET** /v1/usedisha/usedisha/pay-links/{token} | A shared cart, priced now|

# **usedishaCustomerPayLinksControllerCancelV1**
> PayLinkSummaryDto usedishaCustomerPayLinksControllerCancelV1()


### Example

```typescript
import {
    UsedishaPayLinksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaPayLinksApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.usedishaCustomerPayLinksControllerCancelV1(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**PayLinkSummaryDto**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**401** | Sign in to share a cart |  -  |
|**409** | Someone is on the payment page (PAY_LINK_IN_PROGRESS) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaCustomerPayLinksControllerCreateV1**
> PayLinkSummaryDto usedishaCustomerPayLinksControllerCreateV1(createPayLinkDto)

Takes the bulk checkout body (one store or several). The cart is checked and priced like a checkout but nothing is charged. Returns a link to https://shopcentral.ng/pay/<token>, open for 48 hours; whoever opens it pays the price of the day, and the order is yours.

### Example

```typescript
import {
    UsedishaPayLinksApi,
    Configuration,
    CreatePayLinkDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaPayLinksApi(configuration);

let createPayLinkDto: CreatePayLinkDto; //

const { status, data } = await apiInstance.usedishaCustomerPayLinksControllerCreateV1(
    createPayLinkDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createPayLinkDto** | **CreatePayLinkDto**|  | |


### Return type

**PayLinkSummaryDto**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |
|**400** | A store can\&#39;t be ordered from now (each listed in &#x60;stores&#x60;), or too many open links |  -  |
|**401** | Sign in to share a cart |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaCustomerPayLinksControllerListV1**
> Array<PayLinkSummaryDto> usedishaCustomerPayLinksControllerListV1()


### Example

```typescript
import {
    UsedishaPayLinksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaPayLinksApi(configuration);

const { status, data } = await apiInstance.usedishaCustomerPayLinksControllerListV1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<PayLinkSummaryDto>**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**401** | Sign in to share a cart |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaPublicPayLinksControllerPayV1**
> PayLinkPaymentDto usedishaPublicPayLinksControllerPayV1(payForLinkDto)

Creates the shopper\'s order(s) awaiting payment and returns the Paystack page, in the payer\'s name. 409 PAY_LINK_TOTAL_CHANGED (with the new `totalAmount`) when the price moved from `expectedTotal`; 409 PAY_LINK_IN_PROGRESS while someone else is paying; 410 when paid, cancelled or expired.

### Example

```typescript
import {
    UsedishaPayLinksApi,
    Configuration,
    PayForLinkDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaPayLinksApi(configuration);

let token: string; //From the link (default to undefined)
let payForLinkDto: PayForLinkDto; //

const { status, data } = await apiInstance.usedishaPublicPayLinksControllerPayV1(
    token,
    payForLinkDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **payForLinkDto** | **PayForLinkDto**|  | |
| **token** | [**string**] | From the link | defaults to undefined|


### Return type

**PayLinkPaymentDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaPublicPayLinksControllerViewV1**
> PayLinkPublicDto usedishaPublicPayLinksControllerViewV1()

`state`: open, paying (someone is on the payment page), paid, cancelled or expired. `payable` says whether it can be paid right now.

### Example

```typescript
import {
    UsedishaPayLinksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaPayLinksApi(configuration);

let token: string; //From the link (default to undefined)

const { status, data } = await apiInstance.usedishaPublicPayLinksControllerViewV1(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | From the link | defaults to undefined|


### Return type

**PayLinkPublicDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**404** | No such link |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

