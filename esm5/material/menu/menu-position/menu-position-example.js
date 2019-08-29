import { Component } from '@angular/core';
/**
 * @title Menu positioning
 */
var MenuPositionExample = /** @class */ (function () {
    function MenuPositionExample() {
    }
    MenuPositionExample.decorators = [
        { type: Component, args: [{
                    selector: 'menu-position-example',
                    template: "<button mat-button [matMenuTriggerFor]=\"aboveMenu\">Above</button>\n<mat-menu #aboveMenu=\"matMenu\" yPosition=\"above\">\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n</mat-menu>\n\n<button mat-button [matMenuTriggerFor]=\"belowMenu\">Below</button>\n<mat-menu #belowMenu=\"matMenu\" yPosition=\"below\">\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n</mat-menu>\n\n<button mat-button [matMenuTriggerFor]=\"beforeMenu\">Before</button>\n<mat-menu #beforeMenu=\"matMenu\" xPosition=\"before\">\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n</mat-menu>\n\n\n<button mat-button [matMenuTriggerFor]=\"afterMenu\">After</button>\n<mat-menu #afterMenu=\"matMenu\" xPosition=\"after\">\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n</mat-menu>\n",
                    styles: ["/** No CSS for this example */\n"]
                }] }
    ];
    return MenuPositionExample;
}());
export { MenuPositionExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1wb3NpdGlvbi1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL21lbnUvbWVudS1wb3NpdGlvbi9tZW51LXBvc2l0aW9uLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV4Qzs7R0FFRztBQUNIO0lBQUE7SUFLa0MsQ0FBQzs7Z0JBTGxDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxvNEJBQXlDOztpQkFFMUM7O0lBQ2lDLDBCQUFDO0NBQUEsQUFMbkMsSUFLbUM7U0FBdEIsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBNZW51IHBvc2l0aW9uaW5nXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21lbnUtcG9zaXRpb24tZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnbWVudS1wb3NpdGlvbi1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnbWVudS1wb3NpdGlvbi1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBNZW51UG9zaXRpb25FeGFtcGxlIHt9XG4iXX0=