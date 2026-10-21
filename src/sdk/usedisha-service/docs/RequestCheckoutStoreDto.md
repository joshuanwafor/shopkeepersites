# RequestCheckoutStoreDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storefrontId** | **string** | Storefront the choice is for | [default to undefined]
**deliveryMethod** | **string** |  | [default to undefined]
**packageClass** | **string** | Ignored: the delivery class is worked out from the items (product setting, store default, size and weight). Accepted so older apps still validate. | [optional] [default to undefined]
**marketDeliveryWindow** | **string** | Market-delivery run label (required on checkout for marketDelivery) | [optional] [default to undefined]
**customerNotes** | **string** | Customer\&#39;s notes for this store\&#39;s order | [optional] [default to undefined]

## Example

```typescript
import { RequestCheckoutStoreDto } from './api';

const instance: RequestCheckoutStoreDto = {
    storefrontId,
    deliveryMethod,
    packageClass,
    marketDeliveryWindow,
    customerNotes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
