# OrderShipping


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shippingAddress** | [**Address**](Address.md) |  | [optional] [default to undefined]
**billingAddress** | [**Address**](Address.md) |  | [optional] [default to undefined]
**coordinates** | [**OrderShippingCoordinates**](OrderShippingCoordinates.md) | Delivery location as a GeoJSON Point { type, coordinates: [lng, lat] } | [optional] [default to undefined]
**shippingMethod** | **string** |  | [optional] [default to undefined]
**shippingCarrier** | **string** |  | [optional] [default to undefined]
**trackingNumber** | **string** |  | [optional] [default to undefined]
**trackingUrl** | **string** |  | [optional] [default to undefined]
**estimatedDeliveryDate** | **string** |  | [optional] [default to undefined]
**actualDeliveryDate** | **string** |  | [optional] [default to undefined]
**deliveryNotes** | **string** |  | [optional] [default to undefined]
**recipientName** | **string** |  | [optional] [default to undefined]
**recipientPhone** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { OrderShipping } from './api';

const instance: OrderShipping = {
    shippingAddress,
    billingAddress,
    coordinates,
    shippingMethod,
    shippingCarrier,
    trackingNumber,
    trackingUrl,
    estimatedDeliveryDate,
    actualDeliveryDate,
    deliveryNotes,
    recipientName,
    recipientPhone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
