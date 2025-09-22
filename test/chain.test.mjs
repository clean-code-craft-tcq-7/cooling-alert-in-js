// ----------- STEP 6 code starts -------

// import { expect } from 'chai';
// import { THERMAL_ACTIVE} from '../thermal_management_types.mjs';
// import { batteryDataToAction } from '../chain.mjs';

// describe('Battery data to action', () => {
//     it('converts high battery temperature to email alert', () => {
//         let emailed_to, emailed_subject, emailed_body, emailed_from;
//         function emailStub(to, subject, body, from) {
//             emailed_to = to;
//             emailed_subject = subject;
//             emailed_body = body;
//             emailed_from = from;
//         }
//         const batteryData = {
//             'thermalManagementType': THERMAL_ACTIVE,
//             'temperatureInC': 65,
//         };
//         batteryDataToAction(batteryData, {
//             'emailSender': emailStub,
//         });
//         expect(emailed_to).equals('manager@battery.com');
//     });
// });

// ----------- STEP 6 code ends -------
