# UsedishaGuestOrdersResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **string** | Storefront domain | [default to undefined]
**email** | **string** | Customer email queried | [default to undefined]
**orders** | [**Array&lt;UsedishaGuestOrderSummaryDto&gt;**](UsedishaGuestOrderSummaryDto.md) | Matching orders | [default to undefined]

## Example

```typescript
import { UsedishaGuestOrdersResponseDto } from './api';

const instance: UsedishaGuestOrdersResponseDto = {
    domain,
    email,
    orders,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
