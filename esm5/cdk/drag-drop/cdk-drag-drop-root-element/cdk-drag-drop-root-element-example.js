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
 * @title Drag&Drop with alternate root element
 */
var CdkDragDropRootElementExample = /** @class */ (function () {
    function CdkDragDropRootElementExample(_overlay, _viewContainerRef) {
        this._overlay = _overlay;
        this._viewContainerRef = _viewContainerRef;
    }
    CdkDragDropRootElementExample.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._portal = new TemplatePortal(this._dialogTemplate, this._viewContainerRef);
        this._overlayRef = this._overlay.create({
            positionStrategy: this._overlay.position().global().centerHorizontally().centerVertically(),
            hasBackdrop: true
        });
        this._overlayRef.backdropClick().subscribe(function () { return _this._overlayRef.detach(); });
    };
    CdkDragDropRootElementExample.prototype.ngOnDestroy = function () {
        this._overlayRef.dispose();
    };
    CdkDragDropRootElementExample.prototype.openDialog = function () {
        this._overlayRef.attach(this._portal);
    };
    CdkDragDropRootElementExample.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-drag-drop-root-element-example',
                    templateUrl: 'cdk-drag-drop-root-element-example.html',
                    styleUrls: ['cdk-drag-drop-root-element-example.css'],
                },] },
    ];
    /** @nocollapse */
    CdkDragDropRootElementExample.ctorParameters = function () { return [
        { type: Overlay },
        { type: ViewContainerRef }
    ]; };
    CdkDragDropRootElementExample.propDecorators = {
        _dialogTemplate: [{ type: ViewChild, args: [TemplateRef,] }]
    };
    CdkDragDropRootElementExample.ɵfac = function CdkDragDropRootElementExample_Factory(t) { return new (t || CdkDragDropRootElementExample)(i0.ɵɵdirectiveInject(i1.Overlay), i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
    CdkDragDropRootElementExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkDragDropRootElementExample, selectors: [["cdk-drag-drop-root-element-example"]], viewQuery: function CdkDragDropRootElementExample_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(TemplateRef, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh((_t = i0.ɵɵloadQuery())) && (ctx._dialogTemplate = _t.first);
        } }, decls: 3, vars: 0, consts: [[3, "click"], ["cdkDrag", "", "cdkDragRootElement", ".cdk-overlay-pane", 1, "example-dialog-content"]], template: function CdkDragDropRootElementExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function CdkDragDropRootElementExample_Template_button_click_0_listener($event) { return ctx.openDialog(); });
            i0.ɵɵtext(1, "Open a draggable dialog");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(2, CdkDragDropRootElementExample_ng_template_2_Template, 2, 0, "ng-template");
        } }, directives: [i2.CdkDrag], styles: [".example-dialog-content[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #fff;\n  border-radius: 4px;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-dialog-content[_ngcontent-%COMP%]:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}"] });
    return CdkDragDropRootElementExample;
}());
export { CdkDragDropRootElementExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(CdkDragDropRootElementExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-root-element-example',
                templateUrl: 'cdk-drag-drop-root-element-example.html',
                styleUrls: ['cdk-drag-drop-root-element-example.css'],
            }]
    }], function () { return [{ type: i1.Overlay }, { type: i0.ViewContainerRef }]; }, { _dialogTemplate: [{
            type: ViewChild,
            args: [TemplateRef]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1yb290LWVsZW1lbnQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9jZGsvZHJhZy1kcm9wL2Nkay1kcmFnLWRyb3Atcm9vdC1lbGVtZW50L2Nkay1kcmFnLWRyb3Atcm9vdC1lbGVtZW50LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvY2RrL2RyYWctZHJvcC9jZGstZHJhZy1kcm9wLXJvb3QtZWxlbWVudC9jZGstZHJhZy1kcm9wLXJvb3QtZWxlbWVudC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsV0FBVyxFQUVYLGdCQUFnQixHQUVqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsT0FBTyxFQUFhLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHFCQUFxQixDQUFDOzs7OztJQ05qRCw4QkFDRTtJQUFBLHlDQUNGO0lBQUEsaUJBQU07O0FETVI7O0dBRUc7QUFDSDtJQVVFLHVDQUFvQixRQUFpQixFQUFVLGlCQUFtQztRQUE5RCxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtJQUFHLENBQUM7SUFFdEYsdURBQWUsR0FBZjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDdEMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLGdCQUFnQixFQUFFO1lBQzNGLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxFQUF6QixDQUF5QixDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVELG1EQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxrREFBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7O2dCQTNCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9DQUFvQztvQkFDOUMsV0FBVyxFQUFFLHlDQUF5QztvQkFDdEQsU0FBUyxFQUFFLENBQUMsd0NBQXdDLENBQUM7aUJBQ3REOzs7O2dCQVZPLE9BQU87Z0JBSGIsZ0JBQWdCOzs7a0NBZWYsU0FBUyxTQUFDLFdBQVc7OzhHQURYLDZCQUE2QjtzRUFBN0IsNkJBQTZCOzJCQUM3QixXQUFXOzs7OztZQ3BCeEIsaUNBQStCO1lBQXZCLGdIQUFTLGdCQUFZLElBQUM7WUFBQyx1Q0FBdUI7WUFBQSxpQkFBUztZQUUvRCwyRkFDRTs7d0NESEY7Q0EwQ0MsQUE1QkQsSUE0QkM7U0F2QlksNkJBQTZCO21DQUE3Qiw2QkFBNkI7Y0FMekMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQ0FBb0M7Z0JBQzlDLFdBQVcsRUFBRSx5Q0FBeUM7Z0JBQ3RELFNBQVMsRUFBRSxDQUFDLHdDQUF3QyxDQUFDO2FBQ3REOztrQkFFRSxTQUFTO21CQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIFZpZXdDaGlsZCxcbiAgVGVtcGxhdGVSZWYsXG4gIEFmdGVyVmlld0luaXQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge092ZXJsYXksIE92ZXJsYXlSZWZ9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7VGVtcGxhdGVQb3J0YWx9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuXG4vKipcbiAqIEB0aXRsZSBEcmFnJkRyb3Agd2l0aCBhbHRlcm5hdGUgcm9vdCBlbGVtZW50XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1kcmFnLWRyb3Atcm9vdC1lbGVtZW50LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1kcmFnLWRyb3Atcm9vdC1lbGVtZW50LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstZHJhZy1kcm9wLXJvb3QtZWxlbWVudC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEcmFnRHJvcFJvb3RFbGVtZW50RXhhbXBsZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIF9kaWFsb2dUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgcHJpdmF0ZSBfb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcbiAgcHJpdmF0ZSBfcG9ydGFsOiBUZW1wbGF0ZVBvcnRhbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9vdmVybGF5OiBPdmVybGF5LCBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl9wb3J0YWwgPSBuZXcgVGVtcGxhdGVQb3J0YWwodGhpcy5fZGlhbG9nVGVtcGxhdGUsIHRoaXMuX3ZpZXdDb250YWluZXJSZWYpO1xuICAgIHRoaXMuX292ZXJsYXlSZWYgPSB0aGlzLl9vdmVybGF5LmNyZWF0ZSh7XG4gICAgICBwb3NpdGlvblN0cmF0ZWd5OiB0aGlzLl9vdmVybGF5LnBvc2l0aW9uKCkuZ2xvYmFsKCkuY2VudGVySG9yaXpvbnRhbGx5KCkuY2VudGVyVmVydGljYWxseSgpLFxuICAgICAgaGFzQmFja2Ryb3A6IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLl9vdmVybGF5UmVmLmJhY2tkcm9wQ2xpY2soKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fb3ZlcmxheVJlZi5kZXRhY2goKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9vdmVybGF5UmVmLmRpc3Bvc2UoKTtcbiAgfVxuXG4gIG9wZW5EaWFsb2coKSB7XG4gICAgdGhpcy5fb3ZlcmxheVJlZi5hdHRhY2godGhpcy5fcG9ydGFsKTtcbiAgfVxufVxuIiwiPGJ1dHRvbiAoY2xpY2spPVwib3BlbkRpYWxvZygpXCI+T3BlbiBhIGRyYWdnYWJsZSBkaWFsb2c8L2J1dHRvbj5cblxuPG5nLXRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1kaWFsb2ctY29udGVudFwiIGNka0RyYWcgY2RrRHJhZ1Jvb3RFbGVtZW50PVwiLmNkay1vdmVybGF5LXBhbmVcIj5cbiAgICBEcmFnIHRoZSBkaWFsb2cgYXJvdW5kIVxuICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG4iXX0=