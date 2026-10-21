# PayLinkPublicDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | **string** |  | [default to undefined]
**requesterName** | **string** | The shopper\&#39;s first name | [default to undefined]
**message** | **string** |  | [optional] [default to undefined]
**deliveryArea** | **string** | Area the order goes to, e.g. \&quot;Jos, Plateau\&quot; | [optional] [default to undefined]
**expiresAt** | **string** |  | [default to undefined]
**stores** | [**Array&lt;PayLinkStoreDto&gt;**](PayLinkStoreDto.md) |  | [default to undefined]
**totalAmount** | **number** | What paying costs now (naira); absent unless payable | [optional] [default to undefined]
**payable** | **boolean** | Whether it can be paid right now | [default to undefined]
**payingUntil** | **string** | While someone else is paying: when the link frees up | [optional] [default to undefined]
**paidAt** | **string** |  | [optional] [default to undefined]
**orders** | [**Array&lt;PayLinkPaidOrderDto&gt;**](PayLinkPaidOrderDto.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PayLinkPublicDto } from './api';

const instance: PayLinkPublicDto = {
    state,
    requesterName,
    message,
    deliveryArea,
    expiresAt,
    stores,
    totalAmount,
    payable,
    payingUntil,
    paidAt,
    orders,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
