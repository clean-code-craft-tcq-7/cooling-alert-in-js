import { THERMAL_PASSIVE, THERMAL_HYBRID, THERMAL_ACTIVE } from './thermal_management_types.mjs';

// ----------- STEP 5 -----------------
// Refactor for duplication. Deprecate old interface in favor of new one.
// Distinguish thresholds per cooling type

// const thermalThresholds = {
//     [THERMAL_PASSIVE]: 40,
//     [THERMAL_HYBRID]: 50,
//     [THERMAL_ACTIVE]: 55,
// };

// export function alertTemperatureForCoolingType(coolingType) {
//     return thermalThresholds[coolingType] || null;
// }

// ----------- STEP 5 code ends -------
