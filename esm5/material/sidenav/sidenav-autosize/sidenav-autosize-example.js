import { Component } from '@angular/core';
/**
 * @title Autosize sidenav
 */
var SidenavAutosizeExample = /** @class */ (function () {
    function SidenavAutosizeExample() {
        this.showFiller = false;
    }
    SidenavAutosizeExample.decorators = [
        { type: Component, args: [{
                    selector: 'sidenav-autosize-example',
                    template: "<mat-drawer-container class=\"example-container\" autosize>\n  <mat-drawer #drawer class=\"example-sidenav\" mode=\"side\">\n    <p>Auto-resizing sidenav</p>\n    <p *ngIf=\"showFiller\">Lorem, ipsum dolor sit amet consectetur.</p>\n    <button (click)=\"showFiller = !showFiller\" mat-raised-button>\n      Toggle extra text\n    </button>\n  </mat-drawer>\n\n  <div class=\"example-sidenav-content\">\n    <button type=\"button\" mat-button (click)=\"drawer.toggle()\">\n      Toggle sidenav\n    </button>\n  </div>\n\n</mat-drawer-container>\n",
                    styles: [".example-container {\n  width: 500px;\n  height: 300px;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n}\n\n.example-sidenav-content {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n\n.example-sidenav {\n  padding: 20px;\n}\n"]
                }] }
    ];
    return SidenavAutosizeExample;
}());
export { SidenavAutosizeExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1hdXRvc2l6ZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1hdXRvc2l6ZS9zaWRlbmF2LWF1dG9zaXplLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV4Qzs7R0FFRztBQUNIO0lBQUE7UUFNRSxlQUFVLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7O2dCQVBBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQywraUJBQTRDOztpQkFFN0M7O0lBR0QsNkJBQUM7Q0FBQSxBQVBELElBT0M7U0FGWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIEF1dG9zaXplIHNpZGVuYXZcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2lkZW5hdi1hdXRvc2l6ZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzaWRlbmF2LWF1dG9zaXplLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzaWRlbmF2LWF1dG9zaXplLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNpZGVuYXZBdXRvc2l6ZUV4YW1wbGUge1xuICBzaG93RmlsbGVyID0gZmFsc2U7XG59XG4iXX0=