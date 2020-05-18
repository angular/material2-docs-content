/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/menu/menu-overview/menu-overview-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/menu";
/**
 * \@title Basic menu
 */
let MenuOverviewExample = /** @class */ (() => {
    /**
     * \@title Basic menu
     */
    class MenuOverviewExample {
    }
    MenuOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'menu-overview-example',
                    templateUrl: 'menu-overview-example.html',
                    styleUrls: ['menu-overview-example.css'],
                },] },
    ];
    /** @nocollapse */ MenuOverviewExample.ɵfac = function MenuOverviewExample_Factory(t) { return new (t || MenuOverviewExample)(); };
    /** @nocollapse */ MenuOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: MenuOverviewExample, selectors: [["menu-overview-example"]], decls: 8, vars: 1, consts: [["mat-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""]], template: function MenuOverviewExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵtext(1, "Menu");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "mat-menu", null, 1);
            i0.ɵɵelementStart(4, "button", 2);
            i0.ɵɵtext(5, "Item 1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "button", 2);
            i0.ɵɵtext(7, "Item 2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            const _r0 = i0.ɵɵreference(3);
            i0.ɵɵproperty("matMenuTriggerFor", _r0);
        } }, directives: [i1.MatButton, i2.MatMenuTrigger, i2._MatMenu, i2.MatMenuItem], styles: [""] });
    return MenuOverviewExample;
})();
export { MenuOverviewExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MenuOverviewExample, [{
        type: Component,
        args: [{
                selector: 'menu-overview-example',
                templateUrl: 'menu-overview-example.html',
                styleUrls: ['menu-overview-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvbWVudS9tZW51LW92ZXJ2aWV3L21lbnUtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL21lbnUvbWVudS1vdmVydmlldy9tZW51LW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7QUFLeEM7Ozs7SUFBQSxNQUthLG1CQUFtQjs7O2dCQUwvQixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsV0FBVyxFQUFFLDRCQUE0QjtvQkFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7aUJBQ3pDOzs2R0FDWSxtQkFBbUI7K0VBQW5CLG1CQUFtQjtZQ1ZoQyxpQ0FBOEM7WUFBQSxvQkFBSTtZQUFBLGlCQUFTO1lBQzNELHlDQUNFO1lBQUEsaUNBQXNCO1lBQUEsc0JBQU07WUFBQSxpQkFBUztZQUNyQyxpQ0FBc0I7WUFBQSxzQkFBTTtZQUFBLGlCQUFTO1lBQ3ZDLGlCQUFXOzs7WUFKUSx1Q0FBMEI7OzhCREE3QztLQVVtQztTQUF0QixtQkFBbUI7a0RBQW5CLG1CQUFtQjtjQUwvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsV0FBVyxFQUFFLDRCQUE0QjtnQkFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7YUFDekMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIEJhc2ljIG1lbnVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWVudS1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdtZW51LW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydtZW51LW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIE1lbnVPdmVydmlld0V4YW1wbGUge31cbiIsIjxidXR0b24gbWF0LWJ1dHRvbiBbbWF0TWVudVRyaWdnZXJGb3JdPVwibWVudVwiPk1lbnU8L2J1dHRvbj5cbjxtYXQtbWVudSAjbWVudT1cIm1hdE1lbnVcIj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkl0ZW0gMTwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+SXRlbSAyPC9idXR0b24+XG48L21hdC1tZW51PlxuIl19