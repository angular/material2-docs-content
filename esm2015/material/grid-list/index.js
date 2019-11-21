/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { GridListDynamicExample } from './grid-list-dynamic/grid-list-dynamic-example';
import { GridListOverviewExample } from './grid-list-overview/grid-list-overview-example';
import * as i0 from "@angular/core";
export { GridListDynamicExample, GridListOverviewExample, };
/** @type {?} */
const EXAMPLES = [
    GridListDynamicExample,
    GridListOverviewExample,
];
export class GridListExamplesModule {
}
GridListExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatGridListModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            },] },
];
/** @nocollapse */ GridListExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: GridListExamplesModule });
/** @nocollapse */ GridListExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function GridListExamplesModule_Factory(t) { return new (t || GridListExamplesModule)(); }, imports: [[
            CommonModule,
            MatGridListModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(GridListExamplesModule, { declarations: [GridListDynamicExample,
        GridListOverviewExample], imports: [CommonModule,
        MatGridListModule], exports: [GridListDynamicExample,
        GridListOverviewExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GridListExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatGridListModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9ncmlkLWxpc3QvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQ3JGLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLGlEQUFpRCxDQUFDOztBQUV4RixPQUFPLEVBQ0wsc0JBQXNCLEVBQ3RCLHVCQUF1QixHQUN4QixDQUFDOztNQUVJLFFBQVEsR0FBRztJQUNmLHNCQUFzQjtJQUN0Qix1QkFBdUI7Q0FDeEI7QUFVRCxNQUFNLE9BQU8sc0JBQXNCOzs7WUFSbEMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGlCQUFpQjtpQkFDbEI7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2FBQ2xCOzswREFDWSxzQkFBc0I7MkhBQXRCLHNCQUFzQixrQkFQeEI7WUFDUCxZQUFZO1lBQ1osaUJBQWlCO1NBQ2xCO3dGQUlVLHNCQUFzQixtQkFaakMsc0JBQXNCO1FBQ3RCLHVCQUF1QixhQUtyQixZQUFZO1FBQ1osaUJBQWlCLGFBUG5CLHNCQUFzQjtRQUN0Qix1QkFBdUI7a0RBV1osc0JBQXNCO2NBUmxDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixpQkFBaUI7aUJBQ2xCO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTthQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEdyaWRMaXN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9ncmlkLWxpc3QnO1xuaW1wb3J0IHtHcmlkTGlzdER5bmFtaWNFeGFtcGxlfSBmcm9tICcuL2dyaWQtbGlzdC1keW5hbWljL2dyaWQtbGlzdC1keW5hbWljLWV4YW1wbGUnO1xuaW1wb3J0IHtHcmlkTGlzdE92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9ncmlkLWxpc3Qtb3ZlcnZpZXcvZ3JpZC1saXN0LW92ZXJ2aWV3LWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBHcmlkTGlzdER5bmFtaWNFeGFtcGxlLFxuICBHcmlkTGlzdE92ZXJ2aWV3RXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBHcmlkTGlzdER5bmFtaWNFeGFtcGxlLFxuICBHcmlkTGlzdE92ZXJ2aWV3RXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0R3JpZExpc3RNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBHcmlkTGlzdEV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==