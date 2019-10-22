import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/drag-drop";
/**
 * @title Basic Drag&Drop
 */
var CdkDragDropOverviewExample = /** @class */ (function () {
    function CdkDragDropOverviewExample() {
    }
    CdkDragDropOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-drag-drop-overview-example',
                    templateUrl: 'cdk-drag-drop-overview-example.html',
                    styleUrls: ['cdk-drag-drop-overview-example.css'],
                },] },
    ];
    CdkDragDropOverviewExample.ngFactoryDef = function CdkDragDropOverviewExample_Factory(t) { return new (t || CdkDragDropOverviewExample)(); };
    CdkDragDropOverviewExample.ngComponentDef = i0.ɵɵdefineComponent({ type: CdkDragDropOverviewExample, selectors: [["cdk-drag-drop-overview-example"]], decls: 2, vars: 0, consts: [["cdkDrag", "", 1, "example-box"]], template: function CdkDragDropOverviewExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtext(1, " Drag me around\n");
            i0.ɵɵelementEnd();
        } }, directives: [i1.CdkDrag], styles: [".example-box[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box[_ngcontent-%COMP%]:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}"] });
    return CdkDragDropOverviewExample;
}());
export { CdkDragDropOverviewExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(CdkDragDropOverviewExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-overview-example',
                templateUrl: 'cdk-drag-drop-overview-example.html',
                styleUrls: ['cdk-drag-drop-overview-example.css'],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1vdmVydmlldy9jZGstZHJhZy1kcm9wLW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvY2RrL2RyYWctZHJvcC9jZGstZHJhZy1kcm9wLW92ZXJ2aWV3L2Nkay1kcmFnLWRyb3Atb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUV4Qzs7R0FFRztBQUNIO0lBQUE7S0FLMEM7O2dCQUx6QyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztvQkFDMUMsV0FBVyxFQUFFLHFDQUFxQztvQkFDbEQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7aUJBQ2xEOztnSEFDWSwwQkFBMEI7NkVBQTFCLDBCQUEwQjtZQ1Z2Qyw4QkFDRTtZQUFBLGlDQUNGO1lBQUEsaUJBQU07O3FDREZOO0NBVTBDLEFBTDFDLElBSzBDO1NBQTdCLDBCQUEwQjttQ0FBMUIsMEJBQTBCO2NBTHRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO2dCQUMxQyxXQUFXLEVBQUUscUNBQXFDO2dCQUNsRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQzthQUNsRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgQmFzaWMgRHJhZyZEcm9wXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1kcmFnLWRyb3Atb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLWRyYWctZHJvcC1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2RrLWRyYWctZHJvcC1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEcmFnRHJvcE92ZXJ2aWV3RXhhbXBsZSB7fVxuIiwiPGRpdiBjbGFzcz1cImV4YW1wbGUtYm94XCIgY2RrRHJhZz5cbiAgRHJhZyBtZSBhcm91bmRcbjwvZGl2PlxuIl19