# CustomerCartResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lines** | [**Array&lt;CustomerCartLineResponseDto&gt;**](CustomerCartLineResponseDto.md) |  | [default to undefined]
**itemCount** | **number** | Units across all lines | [default to undefined]
**subtotalMinor** | **number** | Sum of unit price × quantity in minor units, from the saved snapshots | [default to undefined]
**updatedAt** | **string** | When the cart was last saved; null if it never was | [default to undefined]

## Example

```typescript
import { CustomerCartResponseDto } from './api';

const instance: CustomerCartResponseDto = {
    lines,
    itemCount,
    subtotalMinor,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
