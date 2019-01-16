/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, TemplateRef, ViewContainerRef, } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
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
        this._overlayRef.backdropClick().subscribe(() => this._overlayRef.detach());
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
                template: "<button (click)=\"openDialog()\">Open a draggable dialog</button>\n\n<ng-template>\n  <div class=\"example-dialog-content\" cdkDrag cdkDragRootElement=\".cdk-overlay-pane\">\n    Drag the dialog around!\n  </div>\n</ng-template>\n",
                styles: [".example-dialog-content {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #fff;\n  border-radius: 4px;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-dialog-content:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n"]
            }] }
];
/** @nocollapse */
CdkDragDropRootElementExample.ctorParameters = () => [
    { type: Overlay },
    { type: ViewContainerRef }
];
CdkDragDropRootElementExample.propDecorators = {
    _dialogTemplate: [{ type: ViewChild, args: [TemplateRef,] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1yb290LWVsZW1lbnQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9jZGstZHJhZy1kcm9wLXJvb3QtZWxlbWVudC9jZGstZHJhZy1kcm9wLXJvb3QtZWxlbWVudC1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDVCxXQUFXLEVBRVgsZ0JBQWdCLEdBRWpCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxPQUFPLEVBQWEsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFVbkQsTUFBTSxPQUFPLDZCQUE2Qjs7Ozs7SUFLeEMsWUFBb0IsUUFBaUIsRUFBVSxpQkFBbUM7UUFBOUQsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7SUFBRyxDQUFDOzs7O0lBRXRGLGVBQWU7UUFDYixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUN0QyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsZ0JBQWdCLEVBQUU7WUFDM0YsV0FBVyxFQUFFLElBQUk7U0FDbEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQzlFLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7WUEzQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQ0FBb0M7Z0JBQzlDLGtQQUFzRDs7YUFFdkQ7Ozs7WUFWTyxPQUFPO1lBSGIsZ0JBQWdCOzs7OEJBZWYsU0FBUyxTQUFDLFdBQVc7Ozs7SUFBdEIsd0RBQTBEOzs7OztJQUMxRCxvREFBZ0M7Ozs7O0lBQ2hDLGdEQUFnQzs7Ozs7SUFFcEIsaURBQXlCOzs7OztJQUFFLDBEQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgVmlld0NoaWxkLFxuICBUZW1wbGF0ZVJlZixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T3ZlcmxheSwgT3ZlcmxheVJlZn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHtUZW1wbGF0ZVBvcnRhbH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5cbi8qKlxuICogQHRpdGxlIERyYWcmRHJvcCB3aXRoIGFsdGVybmF0ZSByb290IGVsZW1lbnRcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLWRyYWctZHJvcC1yb290LWVsZW1lbnQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLWRyYWctZHJvcC1yb290LWVsZW1lbnQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1kcmFnLWRyb3Atcm9vdC1lbGVtZW50LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENka0RyYWdEcm9wUm9vdEVsZW1lbnRFeGFtcGxlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgX2RpYWxvZ1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBwcml2YXRlIF9vdmVybGF5UmVmOiBPdmVybGF5UmVmO1xuICBwcml2YXRlIF9wb3J0YWw6IFRlbXBsYXRlUG9ydGFsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX292ZXJsYXk6IE92ZXJsYXksIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX3BvcnRhbCA9IG5ldyBUZW1wbGF0ZVBvcnRhbCh0aGlzLl9kaWFsb2dUZW1wbGF0ZSwgdGhpcy5fdmlld0NvbnRhaW5lclJlZik7XG4gICAgdGhpcy5fb3ZlcmxheVJlZiA9IHRoaXMuX292ZXJsYXkuY3JlYXRlKHtcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHRoaXMuX292ZXJsYXkucG9zaXRpb24oKS5nbG9iYWwoKS5jZW50ZXJIb3Jpem9udGFsbHkoKS5jZW50ZXJWZXJ0aWNhbGx5KCksXG4gICAgICBoYXNCYWNrZHJvcDogdHJ1ZVxuICAgIH0pO1xuICAgIHRoaXMuX292ZXJsYXlSZWYuYmFja2Ryb3BDbGljaygpLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9vdmVybGF5UmVmLmRldGFjaCgpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX292ZXJsYXlSZWYuZGlzcG9zZSgpO1xuICB9XG5cbiAgb3BlbkRpYWxvZygpIHtcbiAgICB0aGlzLl9vdmVybGF5UmVmLmF0dGFjaCh0aGlzLl9wb3J0YWwpO1xuICB9XG59XG4iXX0=