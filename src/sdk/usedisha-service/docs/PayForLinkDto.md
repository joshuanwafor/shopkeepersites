# PayForLinkDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** |  | [default to undefined]
**name** | **string** | Shown to the shopper: \&quot;Ada paid for your order\&quot; | [optional] [default to undefined]
**expectedTotal** | **number** | The total the payer was shown (naira). If the price has changed since, nothing is charged and the new total comes back. | [default to undefined]

## Example

```typescript
import { PayForLinkDto } from './api';

const instance: PayForLinkDto = {
    email,
    name,
    expectedTotal,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
