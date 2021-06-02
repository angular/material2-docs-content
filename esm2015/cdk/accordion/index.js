import { CommonModule } from '@angular/common';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { NgModule } from '@angular/core';
import { CdkAccordionOverviewExample, } from './cdk-accordion-overview/cdk-accordion-overview-example';
import * as i0 from "@angular/core";
export { CdkAccordionOverviewExample };
const EXAMPLES = [
    CdkAccordionOverviewExample,
];
export class CdkAccordionExamplesModule {
}
CdkAccordionExamplesModule.ɵfac = function CdkAccordionExamplesModule_Factory(t) { return new (t || CdkAccordionExamplesModule)(); };
CdkAccordionExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CdkAccordionExamplesModule });
CdkAccordionExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            CdkAccordionModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkAccordionExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    CdkAccordionModule
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CdkAccordionExamplesModule, { declarations: [CdkAccordionOverviewExample], imports: [CommonModule,
        CdkAccordionModule], exports: [CdkAccordionOverviewExample] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvYWNjb3JkaW9uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFDTCwyQkFBMkIsR0FDNUIsTUFBTSx5REFBeUQsQ0FBQzs7QUFFakUsT0FBTyxFQUFDLDJCQUEyQixFQUFDLENBQUM7QUFFckMsTUFBTSxRQUFRLEdBQUc7SUFDZiwyQkFBMkI7Q0FDNUIsQ0FBQztBQVdGLE1BQU0sT0FBTywwQkFBMEI7O29HQUExQiwwQkFBMEI7NEVBQTFCLDBCQUEwQjtnRkFSNUI7WUFDUCxZQUFZO1lBQ1osa0JBQWtCO1NBQ25CO3VGQUtVLDBCQUEwQjtjQVR0QyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osa0JBQWtCO2lCQUNuQjtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2FBQzFCOzt3RkFDWSwwQkFBMEIsbUJBWnJDLDJCQUEyQixhQUt6QixZQUFZO1FBQ1osa0JBQWtCLGFBTnBCLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtDZGtBY2NvcmRpb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hY2NvcmRpb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDZGtBY2NvcmRpb25PdmVydmlld0V4YW1wbGUsXG59IGZyb20gJy4vY2RrLWFjY29yZGlvbi1vdmVydmlldy9jZGstYWNjb3JkaW9uLW92ZXJ2aWV3LWV4YW1wbGUnO1xuXG5leHBvcnQge0Nka0FjY29yZGlvbk92ZXJ2aWV3RXhhbXBsZX07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBDZGtBY2NvcmRpb25PdmVydmlld0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENka0FjY29yZGlvbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbiAgZW50cnlDb21wb25lbnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrQWNjb3JkaW9uRXhhbXBsZXNNb2R1bGUge1xufVxuIl19