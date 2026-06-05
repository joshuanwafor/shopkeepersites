# UpdateUsedishaDeliveryConfigDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**supportedMethods** | **Array&lt;string&gt;** | Delivery methods this storefront offers at checkout | [default to undefined]
**businessDelivery** | [**UsedishaBusinessDeliverySettings**](UsedishaBusinessDeliverySettings.md) | Business-delivery pricing (required when &#x60;businessDelivery&#x60; is supported) | [optional] [default to undefined]

## Example

```typescript
import { UpdateUsedishaDeliveryConfigDto } from './api';

const instance: UpdateUsedishaDeliveryConfigDto = {
    supportedMethods,
    businessDelivery,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
