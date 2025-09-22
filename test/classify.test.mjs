import { expect } from 'chai';
import { THERMAL_PASSIVE, THERMAL_HYBRID } from '../thermal_management_types.mjs';
import { classifyBatteryState, BATTERY_OK, BATTERY_ALERT } from '../classify.mjs';

// ----------- STEP 5 -----------------
// Separation of classification from the email action.

// describe('Thermal management based classification', () => {
//     it('classifies battery as ok when temperature is under control', () => {
//         expect(classifyBatteryState(THERMAL_PASSIVE, 25)).equals(BATTERY_OK);
//     });
//     it('classifies battery on alert when temperature exceeds threshold', () => {
//         expect(classifyBatteryState(THERMAL_HYBRID, 65)).equals(BATTERY_ALERT);
//     });
// });

// ----------- STEP 5 code ends -------
