import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
/**
 * @title Menu with icons
 */
var MenuIconsExample = /** @class */ (function () {
    function MenuIconsExample() {
    }
    MenuIconsExample = tslib_1.__decorate([
        Component({
            selector: 'menu-icons-example',
            template: "<button mat-icon-button [matMenuTriggerFor]=\"menu\">\n  <mat-icon>more_vert</mat-icon>\n</button>\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item>\n    <mat-icon>dialpad</mat-icon>\n    <span>Redial</span>\n  </button>\n  <button mat-menu-item disabled>\n    <mat-icon>voicemail</mat-icon>\n    <span>Check voicemail</span>\n  </button>\n  <button mat-menu-item>\n    <mat-icon>notifications_off</mat-icon>\n    <span>Disable alerts</span>\n  </button>\n</mat-menu>\n",
            styles: ["/** No CSS for this example */\n"]
        })
    ], MenuIconsExample);
    return MenuIconsExample;
}());
export { MenuIconsExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1pY29ucy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21lbnUtaWNvbnMvbWVudS1pY29ucy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXhDOztHQUVHO0FBTUg7SUFBQTtJQUErQixDQUFDO0lBQW5CLGdCQUFnQjtRQUw1QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLHVlQUFzQzs7U0FFdkMsQ0FBQztPQUNXLGdCQUFnQixDQUFHO0lBQUQsdUJBQUM7Q0FBQSxBQUFoQyxJQUFnQztTQUFuQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIE1lbnUgd2l0aCBpY29uc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZW51LWljb25zLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ21lbnUtaWNvbnMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ21lbnUtaWNvbnMtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgTWVudUljb25zRXhhbXBsZSB7fVxuIl19