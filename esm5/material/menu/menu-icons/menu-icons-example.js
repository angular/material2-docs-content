import { Component } from '@angular/core';
/**
 * @title Menu with icons
 */
var MenuIconsExample = /** @class */ (function () {
    function MenuIconsExample() {
    }
    MenuIconsExample.decorators = [
        { type: Component, args: [{
                    selector: 'menu-icons-example',
                    template: "<button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\n  <mat-icon>more_vert</mat-icon>\n</button>\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item>\n    <mat-icon>dialpad</mat-icon>\n    <span>Redial</span>\n  </button>\n  <button mat-menu-item disabled>\n    <mat-icon>voicemail</mat-icon>\n    <span>Check voice mail</span>\n  </button>\n  <button mat-menu-item>\n    <mat-icon>notifications_off</mat-icon>\n    <span>Disable alerts</span>\n  </button>\n</mat-menu>\n",
                    styles: ["/** No CSS for this example */\n"]
                }] }
    ];
    return MenuIconsExample;
}());
export { MenuIconsExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1pY29ucy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL21lbnUvbWVudS1pY29ucy9tZW51LWljb25zLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV4Qzs7R0FFRztBQUNIO0lBQUE7SUFLK0IsQ0FBQzs7Z0JBTC9CLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5Qix1aEJBQXNDOztpQkFFdkM7O0lBQzhCLHVCQUFDO0NBQUEsQUFMaEMsSUFLZ0M7U0FBbkIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBNZW51IHdpdGggaWNvbnNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWVudS1pY29ucy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdtZW51LWljb25zLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydtZW51LWljb25zLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIE1lbnVJY29uc0V4YW1wbGUge31cbiJdfQ==