# UsedishaInitiateCheckoutDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **string** | Usedisha store domain | [default to undefined]
**useCredit** | **boolean** | Pay part of the order with the signed-in shopper\&#39;s ShopCentral credit (up to the configured share; the card pays the rest). Ignored for guests. | [optional] [default to undefined]
**branchId** | **string** | Branch to order from. Defaults to the storefront default branch when omitted. | [optional] [default to undefined]
**customer** | [**UsedishaCheckoutCustomerDto**](UsedishaCheckoutCustomerDto.md) | Customer details (email required). Optional for authenticated shoppers — identity is then sourced from the JWT. Required for guest checkout. | [optional] [default to undefined]
**items** | [**Array&lt;UsedishaCheckoutItemDto&gt;**](UsedishaCheckoutItemDto.md) | Cart items | [default to undefined]
**shippingAddress** | [**Address**](Address.md) | Shipping address | [optional] [default to undefined]
**customerNotes** | **string** | Customer notes for the order | [optional] [default to undefined]
**deliveryMethod** | **string** | How the order will be fulfilled. &#x60;pickup&#x60; &#x3D; collect in store (free). &#x60;platformDelivery&#x60; &#x3D; platform arranges delivery (fee quoted by provider). &#x60;businessDelivery&#x60; &#x3D; business delivers (merchant flat fee). | [default to undefined]
**packageClass** | **string** | Customer-selected package/handling class. Adjusts the delivery fee. Defaults to &#x60;parcel&#x60;. | [optional] [default to PackageClassEnum_Parcel]
**marketDeliveryWindow** | **string** | Market-delivery run to join, by label (e.g. \&quot;Afternoon run\&quot;). Optional on estimate-fees (the server picks the next run and reports it back), but REQUIRED on checkout when deliveryMethod is &#x60;marketDelivery&#x60; — an unpinned checkout would place the customer on a different run from the one quoted. A stale run is rejected with code &#x60;MARKET_RUN_EXPIRED&#x60;; a missing one with &#x60;MARKET_RUN_REQUIRED&#x60;. Re-quote and confirm with the customer. | [optional] [default to undefined]
**userLng** | **number** | Customer longitude — required for platformDelivery to quote the delivery fee | [optional] [default to undefined]
**userLat** | **number** | Customer latitude — required for EXPRESS to calculate the delivery fee | [optional] [default to undefined]
**callbackUrl** | **string** | Payment callback URL after successful payment | [optional] [default to undefined]
**orderSource** | **string** | Where the order originated. &#x60;marketplace&#x60; tags it for platform-admin oversight; defaults to &#x60;storefront&#x60; (the business\&#39;s own web link). | [optional] [default to OrderSourceEnum_Storefront]
**marketplaceId** | **string** | Free-form marketplace tag — set when orderSource is marketplace. Not tied to any entity (e.g. a marketplace slug or campaign code). | [optional] [default to undefined]

## Example

```typescript
import { UsedishaInitiateCheckoutDto } from './api';

const instance: UsedishaInitiateCheckoutDto = {
    domain,
    useCredit,
    branchId,
    customer,
    items,
    shippingAddress,
    customerNotes,
    deliveryMethod,
    packageClass,
    marketDeliveryWindow,
    userLng,
    userLat,
    callbackUrl,
    orderSource,
    marketplaceId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
