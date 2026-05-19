"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ternary Operator
const BiyeKiKorbe = (ageUser) => {
    const result = ageUser >= 22 ? "You Are An Adult" : "You Are Not An Adult";
    return result;
};
console.log(BiyeKiKorbe(20));
const userTheme = undefined;
const SelectedTheme = userTheme ?? "Light Theme";
console.log(SelectedTheme);
//# sourceMappingURL=TrenaryNullishing.js.map