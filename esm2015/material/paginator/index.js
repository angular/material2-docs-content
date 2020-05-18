/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/paginator/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginatorConfigurableExample } from './paginator-configurable/paginator-configurable-example';
import { PaginatorOverviewExample } from './paginator-overview/paginator-overview-example';
import * as i0 from "@angular/core";
export { PaginatorConfigurableExample, PaginatorOverviewExample, };
/** @type {?} */
const EXAMPLES = [
    PaginatorConfigurableExample,
    PaginatorOverviewExample,
];
let PaginatorExamplesModule = /** @class */ (() => {
    class PaginatorExamplesModule {
    }
    PaginatorExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatInputModule,
                        MatPaginatorModule,
                        FormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                },] },
    ];
    /** @nocollapse */ PaginatorExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: PaginatorExamplesModule });
    /** @nocollapse */ PaginatorExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PaginatorExamplesModule_Factory(t) { return new (t || PaginatorExamplesModule)(); }, imports: [[
                CommonModule,
                MatInputModule,
                MatPaginatorModule,
                FormsModule,
            ]] });
    return PaginatorExamplesModule;
})();
export { PaginatorExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PaginatorExamplesModule, { declarations: [PaginatorConfigurableExample,
        PaginatorOverviewExample], imports: [CommonModule,
        MatInputModule,
        MatPaginatorModule,
        FormsModule], exports: [PaginatorConfigurableExample,
        PaginatorOverviewExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PaginatorExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatInputModule,
                    MatPaginatorModule,
                    FormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9wYWdpbmF0b3IvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFDTCw0QkFBNEIsRUFDN0IsTUFBTSx5REFBeUQsQ0FBQztBQUNqRSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQzs7QUFFekYsT0FBTyxFQUNMLDRCQUE0QixFQUM1Qix3QkFBd0IsR0FDekIsQ0FBQzs7TUFFSSxRQUFRLEdBQUc7SUFDZiw0QkFBNEI7SUFDNUIsd0JBQXdCO0NBQ3pCO0FBRUQ7SUFBQSxNQVdhLHVCQUF1Qjs7O2dCQVhuQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osY0FBYzt3QkFDZCxrQkFBa0I7d0JBQ2xCLFdBQVc7cUJBQ1o7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO29CQUNqQixlQUFlLEVBQUUsUUFBUTtpQkFDMUI7O2tGQUNZLHVCQUF1QjtvSkFBdkIsdUJBQXVCLGtCQVZ6QjtnQkFDUCxZQUFZO2dCQUNaLGNBQWM7Z0JBQ2Qsa0JBQWtCO2dCQUNsQixXQUFXO2FBQ1o7a0NBMUJIO0tBZ0NDO1NBRFksdUJBQXVCO3dGQUF2Qix1QkFBdUIsbUJBZmxDLDRCQUE0QjtRQUM1Qix3QkFBd0IsYUFLdEIsWUFBWTtRQUNaLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsV0FBVyxhQVRiLDRCQUE0QjtRQUM1Qix3QkFBd0I7a0RBY2IsdUJBQXVCO2NBWG5DLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixjQUFjO29CQUNkLGtCQUFrQjtvQkFDbEIsV0FBVztpQkFDWjtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0UGFnaW5hdG9yTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xuaW1wb3J0IHtcbiAgUGFnaW5hdG9yQ29uZmlndXJhYmxlRXhhbXBsZVxufSBmcm9tICcuL3BhZ2luYXRvci1jb25maWd1cmFibGUvcGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlJztcbmltcG9ydCB7UGFnaW5hdG9yT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL3BhZ2luYXRvci1vdmVydmlldy9wYWdpbmF0b3Itb3ZlcnZpZXctZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIFBhZ2luYXRvckNvbmZpZ3VyYWJsZUV4YW1wbGUsXG4gIFBhZ2luYXRvck92ZXJ2aWV3RXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBQYWdpbmF0b3JDb25maWd1cmFibGVFeGFtcGxlLFxuICBQYWdpbmF0b3JPdmVydmlld0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRvckV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==