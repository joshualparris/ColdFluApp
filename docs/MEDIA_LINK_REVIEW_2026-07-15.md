# Private media link review — 2026-07-15

The automated checker followed redirects for all 28 private supplementary records. Media inclusion remains orientation only and does not verify spoken claims.

## Initial live result

- 24 exact URLs returned HTTP 200.
- Mayo Clinic's short query URL resolved to its exact article/video page.
- RACP redirected within its official site to the current Pomegranate route.
- Three Cochrane podcast routes redirected to Cochrane Library related-content pages and returned HTTP 419. This is treated as manual access/bot review, not proof that public media is dead.
- Johns Hopkins returned HTTP 403 and is likewise a manual bot/access review.
- No final record pointed to a search-results URL.

## Curation change

The indirect Vitamin C episode assigned to `warm-compresses` was removed. It is replaced by Cleveland Clinic's exact Health Essentials episode “Managing and Treating Sinus Infections with Dr. Mohamad Chaaban,” whose official page includes the episode transcript and explicitly discusses warm compresses for sinus pain. This is US context and does not establish efficacy, duration, burn safety or Australian medical advice.

## Gaps retained rather than forced

- `humidity-and-steam`: Cochrane heated-humidified-air route requires manual resolution to an actual playable episode; remains `needs-recheck`.
- `lozenges-and-throat-sprays`: the Australian Prescriber NSAID episode is indirect; remains a visible candidate gap.
- `when-to-seek-care`: the Goodfellow bronchiectasis episode is indirect; remains a visible candidate gap. An exact Australian podcast replacement was not found without breaching the ABC publisher-family cap or weakening topic fit.

The checker was updated to classify HTTP 419 alongside authentication, bot and rate-limit responses for manual review.
