/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/drag-drop/cdk-drag-drop-root-element/cdk-drag-drop-root-element-example.ts
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
let CdkDragDropRootElementExample = /** @class */ (() => {
    /**
     * \@title Drag&Drop with alternate root element
     */
    class CdkDragDropRootElementExample {
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
            i0.ɵɵlistener("click", function CdkDragDropRootElementExample_Template_button_click_0_listener() { return ctx.openDialog(); });
            i0.ɵɵtext(1, "Open a draggable dialog");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(2, CdkDragDropRootElementExample_ng_template_2_Template, 2, 0, "ng-template");
        } }, directives: [i2.CdkDrag], styles: [".example-dialog-content[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #fff;\n  border-radius: 4px;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-dialog-content[_ngcontent-%COMP%]:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}"] });
    return CdkDragDropRootElementExample;
})();
export { CdkDragDropRootElementExample };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1yb290LWVsZW1lbnQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1yb290LWVsZW1lbnQvY2RrLWRyYWctZHJvcC1yb290LWVsZW1lbnQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1yb290LWVsZW1lbnQvY2RrLWRyYWctZHJvcC1yb290LWVsZW1lbnQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsV0FBVyxFQUVYLGdCQUFnQixHQUVqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsT0FBTyxFQUFhLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHFCQUFxQixDQUFDOzs7OztJQ05qRCw4QkFDRTtJQUFBLHlDQUNGO0lBQUEsaUJBQU07Ozs7O0FEU1I7Ozs7SUFBQSxNQUthLDZCQUE2Qjs7Ozs7UUFLeEMsWUFBb0IsUUFBaUIsRUFBVSxpQkFBbUM7WUFBOUQsYUFBUSxHQUFSLFFBQVEsQ0FBUztZQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFBRyxDQUFDOzs7O1FBRXRGLGVBQWU7WUFDYixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDaEYsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDdEMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLGdCQUFnQixFQUFFO2dCQUMzRixXQUFXLEVBQUUsSUFBSTthQUNsQixDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDLFNBQVM7OztZQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLEVBQUMsQ0FBQztRQUM5RSxDQUFDOzs7O1FBRUQsV0FBVztZQUNULElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDN0IsQ0FBQzs7OztRQUVELFVBQVU7WUFDUixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEMsQ0FBQzs7O2dCQTNCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9DQUFvQztvQkFDOUMsV0FBVyxFQUFFLHlDQUF5QztvQkFDdEQsU0FBUyxFQUFFLENBQUMsd0NBQXdDLENBQUM7aUJBQ3REOzs7O2dCQVZPLE9BQU87Z0JBSGIsZ0JBQWdCOzs7a0NBZWYsU0FBUyxTQUFDLFdBQVc7O2lJQURYLDZCQUE2Qjt5RkFBN0IsNkJBQTZCOzJCQUM3QixXQUFXOzs7OztZQ3BCeEIsaUNBQStCO1lBQXZCLDBHQUFTLGdCQUFZLElBQUM7WUFBQyx1Q0FBdUI7WUFBQSxpQkFBUztZQUUvRCwyRkFDRTs7d0NESEY7S0EwQ0M7U0F2QlksNkJBQTZCO2tEQUE3Qiw2QkFBNkI7Y0FMekMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQ0FBb0M7Z0JBQzlDLFdBQVcsRUFBRSx5Q0FBeUM7Z0JBQ3RELFNBQVMsRUFBRSxDQUFDLHdDQUF3QyxDQUFDO2FBQ3REOztrQkFFRSxTQUFTO21CQUFDLFdBQVc7Ozs7SUFBdEIsd0RBQTBEOzs7OztJQUMxRCxvREFBZ0M7Ozs7O0lBQ2hDLGdEQUFnQzs7Ozs7SUFFcEIsaURBQXlCOzs7OztJQUFFLDBEQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgVmlld0NoaWxkLFxuICBUZW1wbGF0ZVJlZixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T3ZlcmxheSwgT3ZlcmxheVJlZn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHtUZW1wbGF0ZVBvcnRhbH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5cbi8qKlxuICogQHRpdGxlIERyYWcmRHJvcCB3aXRoIGFsdGVybmF0ZSByb290IGVsZW1lbnRcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLWRyYWctZHJvcC1yb290LWVsZW1lbnQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLWRyYWctZHJvcC1yb290LWVsZW1lbnQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1kcmFnLWRyb3Atcm9vdC1lbGVtZW50LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENka0RyYWdEcm9wUm9vdEVsZW1lbnRFeGFtcGxlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgX2RpYWxvZ1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBwcml2YXRlIF9vdmVybGF5UmVmOiBPdmVybGF5UmVmO1xuICBwcml2YXRlIF9wb3J0YWw6IFRlbXBsYXRlUG9ydGFsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX292ZXJsYXk6IE92ZXJsYXksIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX3BvcnRhbCA9IG5ldyBUZW1wbGF0ZVBvcnRhbCh0aGlzLl9kaWFsb2dUZW1wbGF0ZSwgdGhpcy5fdmlld0NvbnRhaW5lclJlZik7XG4gICAgdGhpcy5fb3ZlcmxheVJlZiA9IHRoaXMuX292ZXJsYXkuY3JlYXRlKHtcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHRoaXMuX292ZXJsYXkucG9zaXRpb24oKS5nbG9iYWwoKS5jZW50ZXJIb3Jpem9udGFsbHkoKS5jZW50ZXJWZXJ0aWNhbGx5KCksXG4gICAgICBoYXNCYWNrZHJvcDogdHJ1ZVxuICAgIH0pO1xuICAgIHRoaXMuX292ZXJsYXlSZWYuYmFja2Ryb3BDbGljaygpLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9vdmVybGF5UmVmLmRldGFjaCgpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX292ZXJsYXlSZWYuZGlzcG9zZSgpO1xuICB9XG5cbiAgb3BlbkRpYWxvZygpIHtcbiAgICB0aGlzLl9vdmVybGF5UmVmLmF0dGFjaCh0aGlzLl9wb3J0YWwpO1xuICB9XG59XG4iLCI8YnV0dG9uIChjbGljayk9XCJvcGVuRGlhbG9nKClcIj5PcGVuIGEgZHJhZ2dhYmxlIGRpYWxvZzwvYnV0dG9uPlxuXG48bmctdGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLWRpYWxvZy1jb250ZW50XCIgY2RrRHJhZyBjZGtEcmFnUm9vdEVsZW1lbnQ9XCIuY2RrLW92ZXJsYXktcGFuZVwiPlxuICAgIERyYWcgdGhlIGRpYWxvZyBhcm91bmQhXG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==