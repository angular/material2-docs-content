/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/icon/icon-svg/icon-svg-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/icon";
import * as i2 from "@angular/platform-browser";
/**
 * \@title SVG icons
 */
export class IconSvgExample {
    /**
     * @param {?} iconRegistry
     * @param {?} sanitizer
     */
    constructor(iconRegistry, sanitizer) {
        iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
    }
}
IconSvgExample.decorators = [
    { type: Component, args: [{
                selector: 'icon-svg-example',
                templateUrl: 'icon-svg-example.html',
                styleUrls: ['icon-svg-example.css'],
            },] },
];
/** @nocollapse */
IconSvgExample.ctorParameters = () => [
    { type: MatIconRegistry },
    { type: DomSanitizer }
];
/** @nocollapse */ IconSvgExample.ɵfac = function IconSvgExample_Factory(t) { return new (t || IconSvgExample)(i0.ɵɵdirectiveInject(i1.MatIconRegistry), i0.ɵɵdirectiveInject(i2.DomSanitizer)); };
/** @nocollapse */ IconSvgExample.ɵcmp = i0.ɵɵdefineComponent({ type: IconSvgExample, selectors: [["icon-svg-example"]], decls: 1, vars: 0, consts: [["svgIcon", "thumbs-up", "aria-hidden", "false", "aria-label", "Example thumbs up SVG icon"]], template: function IconSvgExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "mat-icon", 0);
    } }, directives: [i1.MatIcon], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(IconSvgExample, [{
        type: Component,
        args: [{
                selector: 'icon-svg-example',
                templateUrl: 'icon-svg-example.html',
                styleUrls: ['icon-svg-example.css'],
            }]
    }], function () { return [{ type: i1.MatIconRegistry }, { type: i2.DomSanitizer }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1zdmctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2ljb24vaWNvbi1zdmcvaWNvbi1zdmctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2ljb24vaWNvbi1zdmcvaWNvbi1zdmctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7O0FBVXZELE1BQU0sT0FBTyxjQUFjOzs7OztJQUN6QixZQUFZLFlBQTZCLEVBQUUsU0FBdUI7UUFDaEUsWUFBWSxDQUFDLFVBQVUsQ0FDbkIsV0FBVyxFQUNYLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLENBQUM7SUFDeEYsQ0FBQzs7O1lBVkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFdBQVcsRUFBRSx1QkFBdUI7Z0JBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO2FBQ3BDOzs7O1lBVE8sZUFBZTtZQURmLFlBQVk7OytGQVdQLGNBQWM7c0VBQWQsY0FBYztRQ1ozQiw4QkFBcUc7O2tERFl4RixjQUFjO2NBTDFCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixXQUFXLEVBQUUsdUJBQXVCO2dCQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzthQUNwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RG9tU2FuaXRpemVyfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7TWF0SWNvblJlZ2lzdHJ5fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcblxuLyoqXG4gKiBAdGl0bGUgU1ZHIGljb25zXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ljb24tc3ZnLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2ljb24tc3ZnLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydpY29uLXN2Zy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBJY29uU3ZnRXhhbXBsZSB7XG4gIGNvbnN0cnVjdG9yKGljb25SZWdpc3RyeTogTWF0SWNvblJlZ2lzdHJ5LCBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xuICAgIGljb25SZWdpc3RyeS5hZGRTdmdJY29uKFxuICAgICAgICAndGh1bWJzLXVwJyxcbiAgICAgICAgc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCgnYXNzZXRzL2ltZy9leGFtcGxlcy90aHVtYnVwLWljb24uc3ZnJykpO1xuICB9XG59XG4iLCI8bWF0LWljb24gc3ZnSWNvbj1cInRodW1icy11cFwiIGFyaWEtaGlkZGVuPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSB0aHVtYnMgdXAgU1ZHIGljb25cIj48L21hdC1pY29uPlxuIl19