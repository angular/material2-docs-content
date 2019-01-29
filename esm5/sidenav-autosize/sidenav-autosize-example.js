import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
/**
 * @title Autosize sidenav
 */
var SidenavAutosizeExample = /** @class */ (function () {
    function SidenavAutosizeExample() {
        this.showFiller = false;
    }
    SidenavAutosizeExample = tslib_1.__decorate([
        Component({
            selector: 'sidenav-autosize-example',
            template: "<mat-drawer-container class=\"example-container\" autosize>\n  <mat-drawer #drawer class=\"example-sidenav\" mode=\"side\">\n    <p>Auto-resizing sidenav</p>\n    <p *ngIf=\"showFiller\">Lorem, ipsum dolor sit amet consectetur.</p>\n    <button (click)=\"showFiller = !showFiller\" mat-raised-button>\n      Toggle extra text\n    </button>\n  </mat-drawer>\n\n  <div class=\"example-sidenav-content\">\n    <button type=\"button\" mat-button (click)=\"drawer.toggle()\">\n      Toggle sidenav\n    </button>\n  </div>\n\n</mat-drawer-container>\n",
            styles: [".example-container {\n  width: 500px;\n  height: 300px;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n}\n\n.example-sidenav-content {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n\n.example-sidenav {\n  padding: 20px;\n}\n"]
        })
    ], SidenavAutosizeExample);
    return SidenavAutosizeExample;
}());
export { SidenavAutosizeExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1hdXRvc2l6ZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL3NpZGVuYXYtYXV0b3NpemUvc2lkZW5hdi1hdXRvc2l6ZS1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXhDOztHQUVHO0FBTUg7SUFMQTtRQU1FLGVBQVUsR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUZZLHNCQUFzQjtRQUxsQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsMEJBQTBCO1lBQ3BDLCtpQkFBNEM7O1NBRTdDLENBQUM7T0FDVyxzQkFBc0IsQ0FFbEM7SUFBRCw2QkFBQztDQUFBLEFBRkQsSUFFQztTQUZZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgQXV0b3NpemUgc2lkZW5hdlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaWRlbmF2LWF1dG9zaXplLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NpZGVuYXYtYXV0b3NpemUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NpZGVuYXYtYXV0b3NpemUtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2lkZW5hdkF1dG9zaXplRXhhbXBsZSB7XG4gIHNob3dGaWxsZXIgPSBmYWxzZTtcbn1cbiJdfQ==