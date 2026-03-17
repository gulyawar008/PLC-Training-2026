// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.762.56/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var BottleFillingMachineHMI;
        (function (BottleFillingMachineHMI) {
            function getConveyorColor(bConveyorMotor) {
            }
            BottleFillingMachineHMI.getConveyorColor = getConveyorColor;
        })(BottleFillingMachineHMI = Functions.BottleFillingMachineHMI || (Functions.BottleFillingMachineHMI = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('getConveyorColor', 'TcHmi.Functions.BottleFillingMachineHMI', TcHmi.Functions.BottleFillingMachineHMI.getConveyorColor);



function getConveyorColor(bConveyorMotor) {
    if (bConveyorMotor === true) {
        return "#22C55E";   // green — motor running
    }
    return "Theme";         // default theme color — motor off
}