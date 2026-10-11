# MarketplaceQueuesDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**runsStranded** | **number** | Past departure, paid orders waiting at the market | [default to undefined]
**runsUnassigned** | **number** | Scheduled with no runner assigned | [default to undefined]
**ordersUnpaid** | **number** | Placed but never paid for | [default to undefined]
**storefrontsPendingApproval** | **number** | New stores waiting to be let onto the marketplace | [default to undefined]
**membershipsPending** | **number** | Stores asking to be listed under a market | [default to undefined]
**claimsPending** | **number** | People claiming a storefront already on the platform | [default to undefined]

## Example

```typescript
import { MarketplaceQueuesDto } from './api';

const instance: MarketplaceQueuesDto = {
    runsStranded,
    runsUnassigned,
    ordersUnpaid,
    storefrontsPendingApproval,
    membershipsPending,
    claimsPending,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
