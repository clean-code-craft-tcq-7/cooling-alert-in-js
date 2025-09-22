import { expect } from 'chai';
import { alertTemperatureForCoolingType } from '../thresholds.mjs';
import { THERMAL_PASSIVE, THERMAL_HYBRID, THERMAL_ACTIVE } from '../thermal_management_types.mjs';

// ----------- STEP 5 -----------------
// Refactor for duplication. Deprecate old interface in favor of new one.
// Distinguish thresholds per cooling type

// describe('Determines temperature threshold based on thermal management', () => {
//     it('should return progressively higher temperatures with thermal management', () => {
//         const passive_threshold = alertTemperatureForCoolingType(THERMAL_PASSIVE);
//         const hybrid_threshold = alertTemperatureForCoolingType(THERMAL_HYBRID);
//         const active_threshold = alertTemperatureForCoolingType(THERMAL_ACTIVE);
//         expect(passive_threshold).to.be.lessThan(hybrid_threshold);
//         expect(hybrid_threshold).to.be.lessThan(active_threshold);
//     });
// });

// ----------- STEP 5 code ends -------
