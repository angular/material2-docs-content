/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/bottom-sheet/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { BottomSheetOverviewExample, BottomSheetOverviewExampleSheet } from './bottom-sheet-overview/bottom-sheet-overview-example';
import * as i0 from "@angular/core";
export { BottomSheetOverviewExample, BottomSheetOverviewExampleSheet, };
/** @type {?} */
const EXAMPLES = [
    BottomSheetOverviewExample,
    BottomSheetOverviewExampleSheet,
];
let BottomSheetExamplesModule = /** @class */ (() => {
    class BottomSheetExamplesModule {
    }
    BottomSheetExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        MatBottomSheetModule,
                        MatButtonModule,
                        MatListModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                },] },
    ];
    /** @nocollapse */ BottomSheetExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: BottomSheetExamplesModule });
    /** @nocollapse */ BottomSheetExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function BottomSheetExamplesModule_Factory(t) { return new (t || BottomSheetExamplesModule)(); }, imports: [[
                MatBottomSheetModule,
                MatButtonModule,
                MatListModule,
            ]] });
    return BottomSheetExamplesModule;
})();
export { BottomSheetExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(BottomSheetExamplesModule, { declarations: [BottomSheetOverviewExample,
        BottomSheetOverviewExampleSheet], imports: [MatBottomSheetModule,
        MatButtonModule,
        MatListModule], exports: [BottomSheetOverviewExample,
        BottomSheetOverviewExampleSheet] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BottomSheetExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatBottomSheetModule,
                    MatButtonModule,
                    MatListModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9ib3R0b20tc2hlZXQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUNMLDBCQUEwQixFQUMxQiwrQkFBK0IsRUFDaEMsTUFBTSx1REFBdUQsQ0FBQzs7QUFFL0QsT0FBTyxFQUNMLDBCQUEwQixFQUMxQiwrQkFBK0IsR0FDaEMsQ0FBQzs7TUFFSSxRQUFRLEdBQUc7SUFDZiwwQkFBMEI7SUFDMUIsK0JBQStCO0NBQ2hDO0FBRUQ7SUFBQSxNQVVhLHlCQUF5Qjs7O2dCQVZyQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLG9CQUFvQjt3QkFDcEIsZUFBZTt3QkFDZixhQUFhO3FCQUNkO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtvQkFDakIsZUFBZSxFQUFFLFFBQVE7aUJBQzFCOztvRkFDWSx5QkFBeUI7d0pBQXpCLHlCQUF5QixrQkFUM0I7Z0JBQ1Asb0JBQW9CO2dCQUNwQixlQUFlO2dCQUNmLGFBQWE7YUFDZDtvQ0F4Qkg7S0E4QkM7U0FEWSx5QkFBeUI7d0ZBQXpCLHlCQUF5QixtQkFkcEMsMEJBQTBCO1FBQzFCLCtCQUErQixhQUs3QixvQkFBb0I7UUFDcEIsZUFBZTtRQUNmLGFBQWEsYUFSZiwwQkFBMEI7UUFDMUIsK0JBQStCO2tEQWFwQix5QkFBeUI7Y0FWckMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxvQkFBb0I7b0JBQ3BCLGVBQWU7b0JBQ2YsYUFBYTtpQkFDZDtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEJvdHRvbVNoZWV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9ib3R0b20tc2hlZXQnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdExpc3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xpc3QnO1xuaW1wb3J0IHtcbiAgQm90dG9tU2hlZXRPdmVydmlld0V4YW1wbGUsXG4gIEJvdHRvbVNoZWV0T3ZlcnZpZXdFeGFtcGxlU2hlZXRcbn0gZnJvbSAnLi9ib3R0b20tc2hlZXQtb3ZlcnZpZXcvYm90dG9tLXNoZWV0LW92ZXJ2aWV3LWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBCb3R0b21TaGVldE92ZXJ2aWV3RXhhbXBsZSxcbiAgQm90dG9tU2hlZXRPdmVydmlld0V4YW1wbGVTaGVldCxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBCb3R0b21TaGVldE92ZXJ2aWV3RXhhbXBsZSxcbiAgQm90dG9tU2hlZXRPdmVydmlld0V4YW1wbGVTaGVldCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBNYXRCb3R0b21TaGVldE1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0TGlzdE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIEJvdHRvbVNoZWV0RXhhbXBsZXNNb2R1bGUge1xufVxuIl19