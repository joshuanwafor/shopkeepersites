# UsedishaMarketRunsApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usedishaMarketRunsControllerAssignV1**](#usedishamarketrunscontrollerassignv1) | **PATCH** /v1/usedisha/usedisha/market-runs/{runId}/assign | Assign a runner to a run|
|[**usedishaMarketRunsControllerCollectV1**](#usedishamarketrunscontrollercollectv1) | **POST** /v1/usedisha/usedisha/market-runs/{runId}/orders/{orderId}/collect | Collect one order from a stall|
|[**usedishaMarketRunsControllerDeliverV1**](#usedishamarketrunscontrollerdeliverv1) | **POST** /v1/usedisha/usedisha/market-runs/{runId}/orders/{orderId}/deliver | Hand one order to the customer|
|[**usedishaMarketRunsControllerGetV1**](#usedishamarketrunscontrollergetv1) | **GET** /v1/usedisha/usedisha/market-runs/{runId} | One run with its manifest|
|[**usedishaMarketRunsControllerListV1**](#usedishamarketrunscontrollerlistv1) | **GET** /v1/usedisha/usedisha/market-runs | List market runs|
|[**usedishaMarketRunsControllerRecordOutcomeV1**](#usedishamarketrunscontrollerrecordoutcomev1) | **PATCH** /v1/usedisha/usedisha/market-runs/{runId}/outcome | Record what happened at a stall|
|[**usedishaMarketRunsControllerRescheduleV1**](#usedishamarketrunscontrollerreschedulev1) | **PATCH** /v1/usedisha/usedisha/market-runs/{runId}/reschedule | Push a run\&#39;s departure to a later time|
|[**usedishaMarketRunsControllerRolloverV1**](#usedishamarketrunscontrollerrolloverv1) | **POST** /v1/usedisha/usedisha/market-runs/{runId}/rollover | Move a run\&#39;s uncollected orders onto the next window|
|[**usedishaMarketRunsControllerSetStatusV1**](#usedishamarketrunscontrollersetstatusv1) | **PATCH** /v1/usedisha/usedisha/market-runs/{runId}/status/{status} | Advance a run|
|[**usedishaMarketRunsControllerStaleV1**](#usedishamarketrunscontrollerstalev1) | **GET** /v1/usedisha/usedisha/market-runs/stale | Runs that should have departed but never started|
|[**usedishaMarketRunsControllerSummaryV1**](#usedishamarketrunscontrollersummaryv1) | **GET** /v1/usedisha/usedisha/market-runs/summary | Counts for the runs matching a filter|
|[**usedishaMarketRunsControllerUploadProofPhotoV1**](#usedishamarketrunscontrolleruploadproofphotov1) | **POST** /v1/usedisha/usedisha/market-runs/proof-photo | Upload a proof photo|

# **usedishaMarketRunsControllerAssignV1**
> MarketRun usedishaMarketRunsControllerAssignV1(assignMarketRunDto)


### Example

```typescript
import {
    UsedishaMarketRunsApi,
    Configuration,
    AssignMarketRunDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaMarketRunsApi(configuration);

let runId: string; // (default to undefined)
let assignMarketRunDto: AssignMarketRunDto; //

const { status, data } = await apiInstance.usedishaMarketRunsControllerAssignV1(
    runId,
    assignMarketRunDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assignMarketRunDto** | **AssignMarketRunDto**|  | |
| **runId** | [**string**] |  | defaults to undefined|


### Return type

**MarketRun**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaMarketRunsControllerCollectV1**
> MarketRun usedishaMarketRunsControllerCollectV1(collectOrderDto)

Verifies the pickup PIN the merchant provides, then marks the order collected. A wrong PIN is rejected — this is the proof the goods changed hands.

### Example

```typescript
import {
    UsedishaMarketRunsApi,
    Configuration,
    CollectOrderDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaMarketRunsApi(configuration);

let runId: string; // (default to undefined)
let orderId: string; // (default to undefined)
let collectOrderDto: CollectOrderDto; //

const { status, data } = await apiInstance.usedishaMarketRunsControllerCollectV1(
    runId,
    orderId,
    collectOrderDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **collectOrderDto** | **CollectOrderDto**|  | |
| **runId** | [**string**] |  | defaults to undefined|
| **orderId** | [**string**] |  | defaults to undefined|


### Return type

**MarketRun**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaMarketRunsControllerDeliverV1**
> MarketRun usedishaMarketRunsControllerDeliverV1(deliverOrderDto)

Verifies the confirmation PIN the customer provides. This is what marks the order DELIVERED and notifies them.

### Example

```typescript
import {
    UsedishaMarketRunsApi,
    Configuration,
    DeliverOrderDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaMarketRunsApi(configuration);

let runId: string; // (default to undefined)
let orderId: string; // (default to undefined)
let deliverOrderDto: DeliverOrderDto; //

const { status, data } = await apiInstance.usedishaMarketRunsControllerDeliverV1(
    runId,
    orderId,
    deliverOrderDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deliverOrderDto** | **DeliverOrderDto**|  | |
| **runId** | [**string**] |  | defaults to undefined|
| **orderId** | [**string**] |  | defaults to undefined|


### Return type

**MarketRun**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaMarketRunsControllerGetV1**
> MarketRun usedishaMarketRunsControllerGetV1()

The stall-by-stall collection list for the runner.

### Example

```typescript
import {
    UsedishaMarketRunsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaMarketRunsApi(configuration);

let runId: string; // (default to undefined)

const { status, data } = await apiInstance.usedishaMarketRunsControllerGetV1(
    runId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **runId** | [**string**] |  | defaults to undefined|


### Return type

**MarketRun**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaMarketRunsControllerListV1**
> PaginatedMarketRunsDto usedishaMarketRunsControllerListV1()

Paginated, oldest departure first. Without `from`/`to` the window is the last 30 days plus everything upcoming — pass an explicit range to reach further back.

### Example

```typescript
import {
    UsedishaMarketRunsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaMarketRunsApi(configuration);

let marketId: string; //Filter by market (optional) (default to undefined)
let assignedTo: string; //Runner account ID (optional) (default to undefined)
let status: 'scheduled' | 'collecting' | 'in_transit' | 'completed' | 'cancelled'; // (optional) (default to undefined)
let from: string; //Earliest departure to include (ISO 8601). Defaults to 30 days ago; pass a value to reach further back. (optional) (default to undefined)
let to: string; //Latest departure to include (ISO 8601). Unbounded by default, so upcoming runs are always included. (optional) (default to undefined)
let page: number; //Page number, 1-based (optional) (default to 1)
let limit: number; //Runs per page (max 200) (optional) (default to 50)

const { status, data } = await apiInstance.usedishaMarketRunsControllerListV1(
    marketId,
    assignedTo,
    status,
    from,
    to,
    page,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **marketId** | [**string**] | Filter by market | (optional) defaults to undefined|
| **assignedTo** | [**string**] | Runner account ID | (optional) defaults to undefined|
| **status** | [**&#39;scheduled&#39; | &#39;collecting&#39; | &#39;in_transit&#39; | &#39;completed&#39; | &#39;cancelled&#39;**]**Array<&#39;scheduled&#39; &#124; &#39;collecting&#39; &#124; &#39;in_transit&#39; &#124; &#39;completed&#39; &#124; &#39;cancelled&#39;>** |  | (optional) defaults to undefined|
| **from** | [**string**] | Earliest departure to include (ISO 8601). Defaults to 30 days ago; pass a value to reach further back. | (optional) defaults to undefined|
| **to** | [**string**] | Latest departure to include (ISO 8601). Unbounded by default, so upcoming runs are always included. | (optional) defaults to undefined|
| **page** | [**number**] | Page number, 1-based | (optional) defaults to 1|
| **limit** | [**number**] | Runs per page (max 200) | (optional) defaults to 50|


### Return type

**PaginatedMarketRunsDto**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaMarketRunsControllerRecordOutcomeV1**
> MarketRun usedishaMarketRunsControllerRecordOutcomeV1(recordRunOutcomeDto)

Marking an order `unavailable` keeps it out of the collection and delivery steps when the run advances.

### Example

```typescript
import {
    UsedishaMarketRunsApi,
    Configuration,
    RecordRunOutcomeDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaMarketRunsApi(configuration);

let runId: string; // (default to undefined)
let recordRunOutcomeDto: RecordRunOutcomeDto; //

const { status, data } = await apiInstance.usedishaMarketRunsControllerRecordOutcomeV1(
    runId,
    recordRunOutcomeDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordRunOutcomeDto** | **RecordRunOutcomeDto**|  | |
| **runId** | [**string**] |  | defaults to undefined|


### Return type

**MarketRun**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaMarketRunsControllerRescheduleV1**
> MarketRun usedishaMarketRunsControllerRescheduleV1(rescheduleMarketRunDto)

The rescue for a run that is late but still going: manifest and runner stay put, only the clock moves. Scheduled/collecting runs only.

### Example

```typescript
import {
    UsedishaMarketRunsApi,
    Configuration,
    RescheduleMarketRunDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaMarketRunsApi(configuration);

let runId: string; // (default to undefined)
let rescheduleMarketRunDto: RescheduleMarketRunDto; //

const { status, data } = await apiInstance.usedishaMarketRunsControllerRescheduleV1(
    runId,
    rescheduleMarketRunDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rescheduleMarketRunDto** | **RescheduleMarketRunDto**|  | |
| **runId** | [**string**] |  | defaults to undefined|


### Return type

**MarketRun**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaMarketRunsControllerRolloverV1**
> RolloverResultDto usedishaMarketRunsControllerRolloverV1()

The rescue for a run that is not going to happen: every order still waiting to be collected rolls to the next scheduled run(s). Goods a runner already holds stay where the proof is. An emptied run is cancelled.

### Example

```typescript
import {
    UsedishaMarketRunsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaMarketRunsApi(configuration);

let runId: string; // (default to undefined)

const { status, data } = await apiInstance.usedishaMarketRunsControllerRolloverV1(
    runId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **runId** | [**string**] |  | defaults to undefined|


### Return type

**RolloverResultDto**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaMarketRunsControllerSetStatusV1**
> MarketRun usedishaMarketRunsControllerSetStatusV1()

Moves every order on the manifest with it: `in_transit` confirms collection and `completed` marks the orders delivered. Forward-only.

### Example

```typescript
import {
    UsedishaMarketRunsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaMarketRunsApi(configuration);

let runId: string; // (default to undefined)
let status: 'scheduled' | 'collecting' | 'in_transit' | 'completed' | 'cancelled'; // (default to undefined)

const { status, data } = await apiInstance.usedishaMarketRunsControllerSetStatusV1(
    runId,
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **runId** | [**string**] |  | defaults to undefined|
| **status** | [**&#39;scheduled&#39; | &#39;collecting&#39; | &#39;in_transit&#39; | &#39;completed&#39; | &#39;cancelled&#39;**]**Array<&#39;scheduled&#39; &#124; &#39;collecting&#39; &#124; &#39;in_transit&#39; &#124; &#39;completed&#39; &#124; &#39;cancelled&#39;>** |  | defaults to undefined|


### Return type

**MarketRun**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaMarketRunsControllerStaleV1**
> Array<MarketRun> usedishaMarketRunsControllerStaleV1()

A missed run strands paid orders, so it is surfaced explicitly.

### Example

```typescript
import {
    UsedishaMarketRunsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaMarketRunsApi(configuration);

const { status, data } = await apiInstance.usedishaMarketRunsControllerStaleV1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<MarketRun>**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaMarketRunsControllerSummaryV1**
> MarketRunSummaryDto usedishaMarketRunsControllerSummaryV1()

The same filter the list takes, counted in the database. Operator tiles read this rather than counting a page of rows, which is only ever right for the first page.

### Example

```typescript
import {
    UsedishaMarketRunsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaMarketRunsApi(configuration);

let marketId: string; //Filter by market (optional) (default to undefined)
let assignedTo: string; //Runner account ID (optional) (default to undefined)
let status: 'scheduled' | 'collecting' | 'in_transit' | 'completed' | 'cancelled'; // (optional) (default to undefined)
let from: string; //Earliest departure to include (ISO 8601). Defaults to 30 days ago; pass a value to reach further back. (optional) (default to undefined)
let to: string; //Latest departure to include (ISO 8601). Unbounded by default, so upcoming runs are always included. (optional) (default to undefined)

const { status, data } = await apiInstance.usedishaMarketRunsControllerSummaryV1(
    marketId,
    assignedTo,
    status,
    from,
    to
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **marketId** | [**string**] | Filter by market | (optional) defaults to undefined|
| **assignedTo** | [**string**] | Runner account ID | (optional) defaults to undefined|
| **status** | [**&#39;scheduled&#39; | &#39;collecting&#39; | &#39;in_transit&#39; | &#39;completed&#39; | &#39;cancelled&#39;**]**Array<&#39;scheduled&#39; &#124; &#39;collecting&#39; &#124; &#39;in_transit&#39; &#124; &#39;completed&#39; &#124; &#39;cancelled&#39;>** |  | (optional) defaults to undefined|
| **from** | [**string**] | Earliest departure to include (ISO 8601). Defaults to 30 days ago; pass a value to reach further back. | (optional) defaults to undefined|
| **to** | [**string**] | Latest departure to include (ISO 8601). Unbounded by default, so upcoming runs are always included. | (optional) defaults to undefined|


### Return type

**MarketRunSummaryDto**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usedishaMarketRunsControllerUploadProofPhotoV1**
> usedishaMarketRunsControllerUploadProofPhotoV1()

Returns a URL to pass as `photoUrl` when collecting or delivering.

### Example

```typescript
import {
    UsedishaMarketRunsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsedishaMarketRunsApi(configuration);

const { status, data } = await apiInstance.usedishaMarketRunsControllerUploadProofPhotoV1();
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

