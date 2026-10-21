# PayLinkSummaryDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**url** | **string** |  | [default to undefined]
**state** | **string** |  | [default to undefined]
**storeNames** | **Array&lt;string&gt;** |  | [default to undefined]
**domains** | **Array&lt;string&gt;** |  | [default to undefined]
**quotedTotal** | **number** | Total when the link was made (naira) | [default to undefined]
**message** | **string** |  | [optional] [default to undefined]
**expiresAt** | **string** |  | [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**paidAt** | **string** |  | [optional] [default to undefined]
**paidBy** | **string** | Who paid, as they gave it | [optional] [default to undefined]
**orders** | [**Array&lt;PayLinkOrderDto&gt;**](PayLinkOrderDto.md) |  | [default to undefined]
**lines** | **Array&lt;string&gt;** | The cart, so the app can tell which lines a paid link covered | [default to undefined]

## Example

```typescript
import { PayLinkSummaryDto } from './api';

const instance: PayLinkSummaryDto = {
    id,
    url,
    state,
    storeNames,
    domains,
    quotedTotal,
    message,
    expiresAt,
    createdAt,
    paidAt,
    paidBy,
    orders,
    lines,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
