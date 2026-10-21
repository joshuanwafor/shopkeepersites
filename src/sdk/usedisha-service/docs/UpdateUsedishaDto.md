# UpdateUsedishaDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Store name | [optional] [default to undefined]
**domain** | **string** | The storefront domain (must be unique) | [optional] [default to undefined]
**customDomain** | **string** | The custom domain for the storefront | [optional] [default to undefined]
**status** | **string** | The storefront status | [optional] [default to StatusEnum_Active]
**description** | **string** | A detailed store description | [optional] [default to undefined]
**caption** | **string** | A short, catchy tagline for the store | [optional] [default to undefined]
**termsAndConditions** | **string** | Full text of the terms and conditions for this storefront (plain text; editable via update) | [optional] [default to undefined]
**policyDocument** | **string** | Full text of the policy document for this storefront (e.g. privacy or store policy; plain text; editable via update) | [optional] [default to undefined]
**supportedPaymentMethods** | **Array&lt;string&gt;** | Payment methods this storefront supports at checkout | [optional] [default to undefined]
**sellerTypes** | **Array&lt;string&gt;** | What kind of seller this storefront is. Declared by the merchant; customers can filter on it. | [optional] [default to undefined]
**theme** | [**UDThemeSettings**](UDThemeSettings.md) | Theme settings | [optional] [default to undefined]
**legalName** | **string** | Legal name of business | [optional] [default to undefined]
**favicon** | **string** | Store favicon emoji | [optional] [default to undefined]
**logo** | **string** | Store logo | [optional] [default to undefined]
**coverPhoto** | **string** | Store cover photo | [optional] [default to undefined]
**launchDate** | **string** | Date the store went live | [optional] [default to undefined]
**minimumOrderAmount** | **number** | Minimum cart value required for checkout | [optional] [default to undefined]
**estimatedDeliveryTime** | **string** | Estimated delivery time display string | [optional] [default to undefined]
**preparationTime** | [**UsedishaPreparationTime**](UsedishaPreparationTime.md) | How long an order takes to be ready once accepted; null clears it. Shoppers see it on ShopCentral, and orders get an estimated ready time from it. | [optional] [default to undefined]
**defaultPackageClass** | **string** | How the store\&#39;s products are delivered unless a product says otherwise: consumable (food, perishables: fast), fragile, bulky, document or parcel. Unset: worked out from the store\&#39;s categories (a restaurant is consumable), else parcel. | [optional] [default to undefined]
**defaultPerishability** | **string** | How long the store\&#39;s products keep unless a product says otherwise (see Perishability). Unset: worked out from the store\&#39;s categories (a restaurant\&#39;s food is same-day), else none. | [optional] [default to undefined]
**priceRange** | **string** | Price tier | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Freeform discovery keywords | [optional] [default to undefined]

## Example

```typescript
import { UpdateUsedishaDto } from './api';

const instance: UpdateUsedishaDto = {
    name,
    domain,
    customDomain,
    status,
    description,
    caption,
    termsAndConditions,
    policyDocument,
    supportedPaymentMethods,
    sellerTypes,
    theme,
    legalName,
    favicon,
    logo,
    coverPhoto,
    launchDate,
    minimumOrderAmount,
    estimatedDeliveryTime,
    preparationTime,
    defaultPackageClass,
    defaultPerishability,
    priceRange,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
