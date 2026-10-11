# MarketRunOrder


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **string** | Order ID on the manifest | [default to undefined]
**orderNumber** | **string** | Human order reference, copied at attach time | [optional] [default to undefined]
**customerName** | **string** | Who the order is for, copied at attach time | [optional] [default to undefined]
**customerPhone** | **string** | Customer\&#39;s phone number, copied at attach time | [optional] [default to undefined]
**customerAddress** | [**Address**](Address.md) | Delivery address for the customer, copied at attach time | [optional] [default to undefined]
**orderNotes** | **string** | Special instructions from the customer, copied at attach time | [optional] [default to undefined]
**orderItems** | [**Array&lt;MarketRunOrderItem&gt;**](MarketRunOrderItem.md) | What the order contains, copied at attach time so the runner knows what to collect | [optional] [default to undefined]
**branchId** | **string** | Branch (stall) the goods are collected from | [optional] [default to undefined]
**stallName** | **string** | Trading name of the stall, copied at attach time | [optional] [default to undefined]
**branchName** | **string** | Branch label within the market, copied at attach time | [optional] [default to undefined]
**stallPhone** | **string** | Stall\&#39;s contact phone number, copied at attach time | [optional] [default to undefined]
**stallAddress** | [**Address**](Address.md) | Physical address of the stall/branch, copied at attach time | [optional] [default to undefined]
**outcome** | **string** |  | [default to OutcomeEnum_Pending]
**note** | **string** | Runner note, e.g. why an item was unavailable | [optional] [default to undefined]
**recordedAt** | **string** | When the runner recorded the outcome | [optional] [default to undefined]
**pickupPhotoUrl** | **string** | Proof-of-collection photo taken at the stall | [optional] [default to undefined]
**deliveryPhotoUrl** | **string** | Proof-of-delivery photo taken at the drop-off | [optional] [default to undefined]
**collectedAt** | **string** | When the runner collected this order from the stall | [optional] [default to undefined]
**deliveredAt** | **string** | When the customer received this order | [optional] [default to undefined]

## Example

```typescript
import { MarketRunOrder } from './api';

const instance: MarketRunOrder = {
    orderId,
    orderNumber,
    customerName,
    customerPhone,
    customerAddress,
    orderNotes,
    orderItems,
    branchId,
    stallName,
    branchName,
    stallPhone,
    stallAddress,
    outcome,
    note,
    recordedAt,
    pickupPhotoUrl,
    deliveryPhotoUrl,
    collectedAt,
    deliveredAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
