# AdminCreateBranchProductDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SKU** | **string** | Unique Stock Keeping Unit identifier for the product. | [optional] [default to undefined]
**metadata** | [**ProductMetadata**](ProductMetadata.md) | Metadata for the product | [optional] [default to undefined]
**categoryIds** | **Array&lt;string&gt;** | Array of category IDs to which the product belongs. | [optional] [default to undefined]
**name** | **string** | Name of the product. | [optional] [default to undefined]
**description** | **string** | Short description of the product. | [optional] [default to undefined]
**primaryPhoto** | **string** | URL to the product image. | [optional] [default to undefined]
**amount** | **number** | Base selling price for the primary Unit of Measurement | [optional] [default to undefined]
**wholesalePrice** | **number** | Wholesale price for the primary Unit of Measurement | [optional] [default to undefined]
**costPrice** | **number** | Base cost price for the primary Unit of Measurement | [optional] [default to undefined]
**stockQuantity** | **number** | Current stock quantity (tracked in primary UoM) | [default to undefined]
**lowStockThreshold** | **number** | Low stock threshold for the product (deprecated - use stockInfo.reorderLevel) | [optional] [default to undefined]
**barcode** | **string** | Primary barcode of the product (for primary UoM). | [optional] [default to undefined]
**barcodeType** | **string** | Type of the primary barcode. | [optional] [default to undefined]
**reorderLevel** | **number** | Minimum stock level before a reorder is triggered. | [optional] [default to undefined]
**supplierId** | **string** | Default supplier this product is bought from. References a Customer with type \&quot;supplier\&quot;, so a supplier keeps one contact record across purchases, stock receipts and reporting. | [optional] [default to undefined]
**supplierName** | **string** | Supplier name captured at the time of tagging. Denormalised so historic records still read correctly if the supplier is later renamed or removed. | [optional] [default to undefined]
**expirationDate** | **string** | Expiration date of the product | [optional] [default to undefined]
**trackExpiration** | **boolean** | Whether to track expiration date | [optional] [default to undefined]
**type** | **string** | Type of the product. | [optional] [default to undefined]
**unit** | **string** | Unit of measurement for the product. | [optional] [default to undefined]
**hasVariants** | **boolean** | Whether this product can have variants | [optional] [default to false]
**brand** | **string** | Brand of the product | [optional] [default to undefined]

## Example

```typescript
import { AdminCreateBranchProductDto } from './api';

const instance: AdminCreateBranchProductDto = {
    SKU,
    metadata,
    categoryIds,
    name,
    description,
    primaryPhoto,
    amount,
    wholesalePrice,
    costPrice,
    stockQuantity,
    lowStockThreshold,
    barcode,
    barcodeType,
    reorderLevel,
    supplierId,
    supplierName,
    expirationDate,
    trackExpiration,
    type,
    unit,
    hasVariants,
    brand,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
