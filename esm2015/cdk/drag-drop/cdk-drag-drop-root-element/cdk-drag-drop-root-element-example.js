/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, TemplateRef, ViewContainerRef, } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "@angular/cdk/drag-drop";
function CdkDragDropRootElementExample_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtext(1, " Drag the dialog around! ");
    i0.ɵɵelementEnd();
} }
/**
 * \@title Drag&Drop with alternate root element
 */
export class CdkDragDropRootElementExample {
    /**
     * @param {?} _overlay
     * @param {?} _viewContainerRef
     */
    constructor(_overlay, _viewContainerRef) {
        this._overlay = _overlay;
        this._viewContainerRef = _viewContainerRef;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._portal = new TemplatePortal(this._dialogTemplate, this._viewContainerRef);
        this._overlayRef = this._overlay.create({
            positionStrategy: this._overlay.position().global().centerHorizontally().centerVertically(),
            hasBackdrop: true
        });
        this._overlayRef.backdropClick().subscribe((/**
         * @return {?}
         */
        () => this._overlayRef.detach()));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._overlayRef.dispose();
    }
    /**
     * @return {?}
     */
    openDialog() {
        this._overlayRef.attach(this._portal);
    }
}
CdkDragDropRootElementExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-drag-drop-root-element-example',
                templateUrl: 'cdk-drag-drop-root-element-example.html',
                styleUrls: ['cdk-drag-drop-root-element-example.css'],
            },] },
];
/** @nocollapse */
CdkDragDropRootElementExample.ctorParameters = () => [
    { type: Overlay },
    { type: ViewContainerRef }
];
CdkDragDropRootElementExample.propDecorators = {
    _dialogTemplate: [{ type: ViewChild, args: [TemplateRef,] }]
};
/** @nocollapse */ CdkDragDropRootElementExample.ɵfac = function CdkDragDropRootElementExample_Factory(t) { return new (t || CdkDragDropRootElementExample)(i0.ɵɵdirectiveInject(i1.Overlay), i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
/** @nocollapse */ CdkDragDropRootElementExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkDragDropRootElementExample, selectors: [["cdk-drag-drop-root-element-example"]], viewQuery: function CdkDragDropRootElementExample_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(TemplateRef, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._dialogTemplate = _t.first);
    } }, decls: 3, vars: 0, consts: [[3, "click"], ["cdkDrag", "", "cdkDragRootElement", ".cdk-overlay-pane", 1, "example-dialog-content"]], template: function CdkDragDropRootElementExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function CdkDragDropRootElementExample_Template_button_click_0_listener($event) { return ctx.openDialog(); });
        i0.ɵɵtext(1, "Open a draggable dialog");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(2, CdkDragDropRootElementExample_ng_template_2_Template, 2, 0, "ng-template");
    } }, directives: [i2.CdkDrag], styles: [".example-dialog-content[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #fff;\n  border-radius: 4px;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-dialog-content[_ngcontent-%COMP%]:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkDragDropRootElementExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-root-element-example',
                templateUrl: 'cdk-drag-drop-root-element-example.html',
                styleUrls: ['cdk-drag-drop-root-element-example.css'],
            }]
    }], function () { return [{ type: i1.Overlay }, { type: i0.ViewContainerRef }]; }, { _dialogTemplate: [{
            type: ViewChild,
            args: [TemplateRef]
        }] }); })();
if (false) {
    /** @type {?} */
    CdkDragDropRootElementExample.prototype._dialogTemplate;
    /**
     * @type {?}
     * @private
     */
    CdkDragDropRootElementExample.prototype._overlayRef;
    /**
     * @type {?}
     * @private
     */
    CdkDragDropRootElementExample.prototype._portal;
    /**
     * @type {?}
     * @private
     */
    CdkDragDropRootElementExample.prototype._overlay;
    /**
     * @type {?}
     * @private
     */
    CdkDragDropRootElementExample.prototype._viewContainerRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1yb290LWVsZW1lbnQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1yb290LWVsZW1lbnQvY2RrLWRyYWctZHJvcC1yb290LWVsZW1lbnQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1yb290LWVsZW1lbnQvY2RrLWRyYWctZHJvcC1yb290LWVsZW1lbnQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDVCxXQUFXLEVBRVgsZ0JBQWdCLEdBRWpCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxPQUFPLEVBQWEsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0scUJBQXFCLENBQUM7Ozs7O0lDTmpELDhCQUNFO0lBQUEseUNBQ0Y7SUFBQSxpQkFBTTs7Ozs7QURjUixNQUFNLE9BQU8sNkJBQTZCOzs7OztJQUt4QyxZQUFvQixRQUFpQixFQUFVLGlCQUFtQztRQUE5RCxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtJQUFHLENBQUM7Ozs7SUFFdEYsZUFBZTtRQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3RDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRTtZQUMzRixXQUFXLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDLFNBQVM7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLEVBQUMsQ0FBQztJQUM5RSxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7O1lBM0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0NBQW9DO2dCQUM5QyxXQUFXLEVBQUUseUNBQXlDO2dCQUN0RCxTQUFTLEVBQUUsQ0FBQyx3Q0FBd0MsQ0FBQzthQUN0RDs7OztZQVZPLE9BQU87WUFIYixnQkFBZ0I7Ozs4QkFlZixTQUFTLFNBQUMsV0FBVzs7MEdBRFgsNkJBQTZCO2tFQUE3Qiw2QkFBNkI7dUJBQzdCLFdBQVc7Ozs7O1FDcEJ4QixpQ0FBK0I7UUFBdkIsZ0hBQVMsZ0JBQVksSUFBQztRQUFDLHVDQUF1QjtRQUFBLGlCQUFTO1FBRS9ELDJGQUNFOztrRERnQlcsNkJBQTZCO2NBTHpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0NBQW9DO2dCQUM5QyxXQUFXLEVBQUUseUNBQXlDO2dCQUN0RCxTQUFTLEVBQUUsQ0FBQyx3Q0FBd0MsQ0FBQzthQUN0RDs7a0JBRUUsU0FBUzttQkFBQyxXQUFXOzs7O0lBQXRCLHdEQUEwRDs7Ozs7SUFDMUQsb0RBQWdDOzs7OztJQUNoQyxnREFBZ0M7Ozs7O0lBRXBCLGlEQUF5Qjs7Ozs7SUFBRSwwREFBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIFZpZXdDaGlsZCxcbiAgVGVtcGxhdGVSZWYsXG4gIEFmdGVyVmlld0luaXQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge092ZXJsYXksIE92ZXJsYXlSZWZ9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7VGVtcGxhdGVQb3J0YWx9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuXG4vKipcbiAqIEB0aXRsZSBEcmFnJkRyb3Agd2l0aCBhbHRlcm5hdGUgcm9vdCBlbGVtZW50XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1kcmFnLWRyb3Atcm9vdC1lbGVtZW50LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1kcmFnLWRyb3Atcm9vdC1lbGVtZW50LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstZHJhZy1kcm9wLXJvb3QtZWxlbWVudC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEcmFnRHJvcFJvb3RFbGVtZW50RXhhbXBsZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIF9kaWFsb2dUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgcHJpdmF0ZSBfb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcbiAgcHJpdmF0ZSBfcG9ydGFsOiBUZW1wbGF0ZVBvcnRhbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9vdmVybGF5OiBPdmVybGF5LCBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl9wb3J0YWwgPSBuZXcgVGVtcGxhdGVQb3J0YWwodGhpcy5fZGlhbG9nVGVtcGxhdGUsIHRoaXMuX3ZpZXdDb250YWluZXJSZWYpO1xuICAgIHRoaXMuX292ZXJsYXlSZWYgPSB0aGlzLl9vdmVybGF5LmNyZWF0ZSh7XG4gICAgICBwb3NpdGlvblN0cmF0ZWd5OiB0aGlzLl9vdmVybGF5LnBvc2l0aW9uKCkuZ2xvYmFsKCkuY2VudGVySG9yaXpvbnRhbGx5KCkuY2VudGVyVmVydGljYWxseSgpLFxuICAgICAgaGFzQmFja2Ryb3A6IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLl9vdmVybGF5UmVmLmJhY2tkcm9wQ2xpY2soKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fb3ZlcmxheVJlZi5kZXRhY2goKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9vdmVybGF5UmVmLmRpc3Bvc2UoKTtcbiAgfVxuXG4gIG9wZW5EaWFsb2coKSB7XG4gICAgdGhpcy5fb3ZlcmxheVJlZi5hdHRhY2godGhpcy5fcG9ydGFsKTtcbiAgfVxufVxuIiwiPGJ1dHRvbiAoY2xpY2spPVwib3BlbkRpYWxvZygpXCI+T3BlbiBhIGRyYWdnYWJsZSBkaWFsb2c8L2J1dHRvbj5cblxuPG5nLXRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1kaWFsb2ctY29udGVudFwiIGNka0RyYWcgY2RrRHJhZ1Jvb3RFbGVtZW50PVwiLmNkay1vdmVybGF5LXBhbmVcIj5cbiAgICBEcmFnIHRoZSBkaWFsb2cgYXJvdW5kIVxuICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG4iXX0=