"use strict";
// 14.Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
exports.__esModule = true;
var gustList = ['Albert Einstein', 'Isaac Newton', 'Nikola Tesla'];
gustList.forEach(function (name) { console.log("Would you like to join me for dinner Mr.".concat(name)); });
exports["default"] = gustList;
