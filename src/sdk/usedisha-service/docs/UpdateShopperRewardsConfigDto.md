# UpdateShopperRewardsConfigDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **boolean** | Off: no new referrals or rewards, and checkout ignores credit | [optional] [default to undefined]
**welcomeKobo** | **number** | The new shopper\&#39;s welcome credit, in kobo | [optional] [default to undefined]
**referrerRewardKobo** | **number** | The referrer\&#39;s reward, in kobo | [optional] [default to undefined]
**maxOrderShare** | **number** | The most of an order total credit may pay (0.5 &#x3D; half) | [optional] [default to undefined]
**minQualifyingOrderKobo** | **number** | The friend\&#39;s first order must be at least this, items only, in kobo | [optional] [default to undefined]
**maxRewardsPerMonth** | **number** | The most referral rewards one shopper can earn per calendar month | [optional] [default to undefined]
**codeEntryWindowDays** | **number** | Days after signup a shopper can still enter a friend\&#39;s code | [optional] [default to undefined]

## Example

```typescript
import { UpdateShopperRewardsConfigDto } from './api';

const instance: UpdateShopperRewardsConfigDto = {
    enabled,
    welcomeKobo,
    referrerRewardKobo,
    maxOrderShare,
    minQualifyingOrderKobo,
    maxRewardsPerMonth,
    codeEntryWindowDays,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
