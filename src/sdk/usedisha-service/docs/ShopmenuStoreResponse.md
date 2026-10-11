# ShopmenuStoreResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier for the storefront | [default to undefined]
**name** | **string** | Store name | [default to undefined]
**domain** | **string** | Store domain | [default to undefined]
**description** | **string** | Store description | [optional] [default to undefined]
**caption** | **string** | Store tagline or caption | [optional] [default to undefined]
**termsAndConditions** | **string** | Full text of the terms and conditions | [optional] [default to undefined]
**policyDocument** | **string** | Full text of the store policy document (e.g. privacy or store policy) | [optional] [default to undefined]
**deliveryConfig** | [**UsedishaDeliveryConfig**](UsedishaDeliveryConfig.md) | Delivery configuration — supported methods and businessDelivery pricing | [optional] [default to undefined]
**supportedPaymentMethods** | **Array&lt;string&gt;** | Payment methods supported by this storefront | [optional] [default to undefined]
**supportedDeliveryMethods** | **Array&lt;string&gt;** | Delivery methods supported by this storefront (flattened from deliveryConfig) | [optional] [default to undefined]
**availableDeliveryMethods** | **Array&lt;string&gt;** | Delivery methods a customer may actually choose right now. A subset of &#x60;supportedDeliveryMethods&#x60;: a store either delivers its own orders OR uses platform delivery (incl. bulk market delivery), never both. Prefer this over &#x60;supportedDeliveryMethods&#x60;, which records the merchant\&#39;s configuration only. | [optional] [default to undefined]
**badges** | **Array&lt;string&gt;** | Trust/quality badges awarded to this storefront by a platform admin | [optional] [default to undefined]
**sellerTypes** | **Array&lt;string&gt;** | What kind of seller this storefront is (retailer, wholesaler, ...) | [optional] [default to undefined]
**theme** | [**UDThemeSettings**](UDThemeSettings.md) | Theme settings for the storefront | [default to undefined]
**socialMedia** | [**UDSocialMediaLinks**](UDSocialMediaLinks.md) | Social media links | [optional] [default to undefined]
**config** | [**UsedishaConfig**](UsedishaConfig.md) | Store configuration settings | [optional] [default to undefined]
**logo** | **string** | Store logo | [optional] [default to undefined]
**coverPhoto** | **string** | Store cover photo | [optional] [default to undefined]
**legalName** | **string** | Legal name of the business | [optional] [default to undefined]
**favicon** | **string** | Store favicon emoji or URL | [optional] [default to undefined]
**launchDate** | **string** | Store launch date | [optional] [default to undefined]
**branches** | [**Array&lt;UsedishaBranchResponse&gt;**](UsedishaBranchResponse.md) | All physical branches for the branch picker | [optional] [default to undefined]
**averageRating** | **number** | Aggregated average rating (0–5) | [optional] [default to undefined]
**reviewCount** | **number** | Total number of reviews | [optional] [default to undefined]
**minimumOrderAmount** | **number** | Minimum cart value for checkout | [optional] [default to undefined]
**estimatedDeliveryTime** | **string** | Estimated delivery time | [optional] [default to undefined]
**priceRange** | **string** |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**featured** | **boolean** | Featured/promoted listing | [optional] [default to undefined]
**claimable** | **boolean** | Whether this storefront is unclaimed and open to ownership claims | [optional] [default to undefined]
**readyForOrders** | **boolean** | Whether this storefront is cleared to receive customer orders | [optional] [default to undefined]
**takingOnlineOrders** | **boolean** | Whether the storefront\&#39;s default branch takes online orders (its &#x60;enableOnlineOrdering&#x60; setting, default true). Per-branch values are on the branches endpoints. | [optional] [default to undefined]
**appLayout** | [**UsedishaAppLayout**](UsedishaAppLayout.md) | Owner-edited store app home layout (store-app/docs/APP-LAYOUT.md), with disabled sections included (the app skips them). null when the owner has never saved one; the app then uses its default. | [default to undefined]
**storeUrl** | **string** | Full store URL | [default to undefined]
**categories** | **Array&lt;string&gt;** | Shopmenu categories this store belongs to | [optional] [default to undefined]

## Example

```typescript
import { ShopmenuStoreResponse } from './api';

const instance: ShopmenuStoreResponse = {
    id,
    name,
    domain,
    description,
    caption,
    termsAndConditions,
    policyDocument,
    deliveryConfig,
    supportedPaymentMethods,
    supportedDeliveryMethods,
    availableDeliveryMethods,
    badges,
    sellerTypes,
    theme,
    socialMedia,
    config,
    logo,
    coverPhoto,
    legalName,
    favicon,
    launchDate,
    branches,
    averageRating,
    reviewCount,
    minimumOrderAmount,
    estimatedDeliveryTime,
    priceRange,
    tags,
    featured,
    claimable,
    readyForOrders,
    takingOnlineOrders,
    appLayout,
    storeUrl,
    categories,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
