# OrderDeliveryCustomerResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** |  | [optional] [default to undefined]
**confirmationPin** | **string** | The customer\&#39;s delivery PIN. Read it out to the runner when they arrive; they enter it to confirm the drop-off. Present once a runner is on the job. | [optional] [default to undefined]
**requestedAt** | **string** |  | [optional] [default to undefined]
**acceptedAt** | **string** |  | [optional] [default to undefined]
**pickedUpAt** | **string** |  | [optional] [default to undefined]
**completedAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { OrderDeliveryCustomerResponse } from './api';

const instance: OrderDeliveryCustomerResponse = {
    status,
    confirmationPin,
    requestedAt,
    acceptedAt,
    pickedUpAt,
    completedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
