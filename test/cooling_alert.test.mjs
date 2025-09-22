import { expect } from 'chai';
import { batteryTemperatureToAction,
  PASSIVE_COOLING,
  ALERT_EMAIL, NO_ACTION } from '../cooling_alert.mjs';

// ----------- STEP 2 -----------------
// Establish one "straight forward" interface (happy flow):
//   - Function name
//   - Input parameters data-model
//   - Expected output data-model

describe("Cooling Alert", () => {
  it("should trigger an alert when temperature exceeds threshold", () => {
    const action = batteryTemperatureToAction(PASSIVE_COOLING, 45.0);
    expect(action.actionType).equals(ALERT_EMAIL);
    expect(action.actionBody).equals('Temperature alert: 45F');
  });
  it("should not trigger an alert when temperature is within threshold", () => {
    const action = batteryTemperatureToAction(PASSIVE_COOLING, 35.0);
    expect(action.actionType).equals(NO_ACTION);
  });
});

// ----------- STEP 2 code ends -------
