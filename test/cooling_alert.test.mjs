import { expect } from 'chai';

// ----------- STEP 2 -----------------

// import { batteryTemperatureToAction,
//   PASSIVE_COOLING, ACTIVE_COOLING,
//   ALERT_EMAIL, NO_ACTION } from '../cooling_alert.mjs';

// Establish one "straight forward" interface (happy flow):
//   - Function name
//   - Input parameters data-model
//   - Expected output data-model

// describe("Passive cooling alert", () => {
//   it("should trigger an alert when temperature exceeds threshold", () => {
//     const action = batteryTemperatureToAction(PASSIVE_COOLING, 45.0);
//     expect(action.actionType).equals(ALERT_EMAIL);
//     expect(action.actionBody).equals('Temperature alert: 45F');
//   });
//   it("should not trigger an alert when temperature is within threshold", () => {
//     const action = batteryTemperatureToAction(PASSIVE_COOLING, 35.0);
//     expect(action.actionType).equals(NO_ACTION);
//   });
// });

// ----------- STEP 2 code ends -------

// ----------- STEP 4 -----------------
// Add the next straight-forward test: active cooling type

// describe("Active cooling alert", () => {
//   it("should not trigger an alert when temperature is within threshold", () => {
//     const action = batteryTemperatureToAction(ACTIVE_COOLING, 65.0);
//     expect(action.actionType).equals(ALERT_EMAIL);
//     expect(action.actionBody).equals('Temperature alert: 65F');
//   });
// });

// ----------- STEP 4 code ends -------