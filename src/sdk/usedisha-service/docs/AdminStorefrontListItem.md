# AdminStorefrontListItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier for the storefront (generated) | [default to undefined]
**name** | **string** | Store name | [default to undefined]
**businessId** | **string** | The business ID this storefront belongs to | [default to undefined]
**connectedBranchId** | **string** | The connected branch ID within the business | [default to undefined]
**domain** | **string** | The storefront domain (must be unique) | [default to undefined]
**customDomain** | **string** | The custom domain for the storefront | [optional] [default to undefined]
**status** | **string** | The storefront status | [default to StatusEnum_Active]
**approvalStatus** | **string** | The storefront approval status | [optional] [default to ApprovalStatusEnum_Pending]
**claimable** | **boolean** | When true, this storefront is unclaimed and prospective owners may submit a claim to take it over. Managed by platform admins. | [optional] [default to false]
**readyForOrders** | **boolean** | When true, this storefront is cleared to receive customer orders. Managed by platform admins. | [optional] [default to false]
**description** | **string** | A detailed store description | [optional] [default to undefined]
**caption** | **string** | A short, catchy tagline for the store | [optional] [default to undefined]
**termsAndConditions** | **string** | Full text of the terms and conditions for this storefront (plain text; editable via update) | [optional] [default to undefined]
**policyDocument** | **string** | Full text of the policy document for this storefront (e.g. privacy or store policy; plain text; editable via update) | [optional] [default to undefined]
**deliveryConfig** | [**UsedishaDeliveryConfig**](UsedishaDeliveryConfig.md) | Delivery configuration — supported methods and businessDelivery pricing | [optional] [default to undefined]
**supportedPaymentMethods** | **Array&lt;string&gt;** | Payment methods this storefront supports at checkout | [optional] [default to undefined]
**badges** | **Array&lt;string&gt;** | Trust/quality badges awarded to this storefront by a platform admin | [optional] [default to undefined]
**officialVendor** | **boolean** | ShopCentral\&#39;s own vendor for sourced customer requests | [optional] [readonly] [default to false]
**sellerTypes** | **Array&lt;string&gt;** | What kind of seller this storefront is. Declared by the merchant; customers can filter on it. | [optional] [default to undefined]
**theme** | [**UDThemeSettings**](UDThemeSettings.md) | Theme settings | [default to undefined]
**socialMedia** | [**UDSocialMediaLinks**](UDSocialMediaLinks.md) | Social media links | [optional] [default to undefined]
**config** | [**UsedishaConfig**](UsedishaConfig.md) | Storefront configuration options | [default to undefined]
**appLayout** | [**UsedishaAppLayout**](UsedishaAppLayout.md) | Store app home layout; null until the owner first saves one. Set through PUT /:businessId/usedisha/app-layout only. | [optional] [default to undefined]
**legalName** | **string** | Legal name of business | [optional] [default to undefined]
**favicon** | **string** | Store favicon emoji | [optional] [default to undefined]
**logo** | **string** | Store logo | [optional] [default to undefined]
**coverPhoto** | **string** | Store cover photo | [optional] [default to undefined]
**launchDate** | **string** | Date the store went live | [optional] [default to undefined]
**location** | [**UsedishaLocation**](UsedishaLocation.md) | Physical location of the store as a GeoJSON Point [longitude, latitude] | [optional] [default to undefined]
**branches** | [**Array&lt;UsedishaBranch&gt;**](UsedishaBranch.md) | All physical branches of this storefront, used for marketplace discovery and the branch picker | [optional] [default to undefined]
**averageRating** | **number** | Aggregated average rating (0–5) | [optional] [default to undefined]
**reviewCount** | **number** | Total number of reviews | [optional] [default to undefined]
**minimumOrderAmount** | **number** | Minimum cart value required for checkout | [optional] [default to undefined]
**estimatedDeliveryTime** | **string** | Estimated delivery time display string | [optional] [default to undefined]
**priceRange** | **string** | Price tier | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Freeform discovery keywords | [optional] [default to undefined]
**featured** | **boolean** | Promoted/featured listing flag | [optional] [default to false]
**metadata** | **object** | Metadata for tracking, custom scripts, etc. | [optional] [default to undefined]
**createdAt** | **string** | Timestamp of creation | [optional] [readonly] [default to undefined]
**updatedAt** | **string** | Timestamp of last update | [optional] [readonly] [default to undefined]
**createdBy** | **string** | ID of the user who created the storefront | [optional] [default to undefined]
**updatedBy** | **string** | ID of the user who last updated the storefront | [optional] [default to undefined]
**kycStatus** | **string** | Current KYC status | [default to undefined]

## Example

```typescript
import { AdminStorefrontListItem } from './api';

const instance: AdminStorefrontListItem = {
    id,
    name,
    businessId,
    connectedBranchId,
    domain,
    customDomain,
    status,
    approvalStatus,
    claimable,
    readyForOrders,
    description,
    caption,
    termsAndConditions,
    policyDocument,
    deliveryConfig,
    supportedPaymentMethods,
    badges,
    officialVendor,
    sellerTypes,
    theme,
    socialMedia,
    config,
    appLayout,
    legalName,
    favicon,
    logo,
    coverPhoto,
    launchDate,
    location,
    branches,
    averageRating,
    reviewCount,
    minimumOrderAmount,
    estimatedDeliveryTime,
    priceRange,
    tags,
    featured,
    metadata,
    createdAt,
    updatedAt,
    createdBy,
    updatedBy,
    kycStatus,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
