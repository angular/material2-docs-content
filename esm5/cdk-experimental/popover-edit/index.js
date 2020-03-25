import { CdkPopoverEditModule } from '@angular/cdk-experimental/popover-edit';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CdkPopoverEditCdkTableFlexExample } from './cdk-popover-edit-cdk-table-flex/cdk-popover-edit-cdk-table-flex-example';
import { CdkPopoverEditCdkTableExample } from './cdk-popover-edit-cdk-table/cdk-popover-edit-cdk-table-example';
import { CdkPopoverEditCellSpanVanillaTableExample
// tslint:disable-next-line:max-line-length
 } from './cdk-popover-edit-cell-span-vanilla-table/cdk-popover-edit-cell-span-vanilla-table-example';
import { CdkPopoverEditTabOutVanillaTableExample } from './cdk-popover-edit-tab-out-vanilla-table/cdk-popover-edit-tab-out-vanilla-table-example';
import { CdkPopoverEditVanillaTableExample } from './cdk-popover-edit-vanilla-table/cdk-popover-edit-vanilla-table-example';
import * as i0 from "@angular/core";
export { CdkPopoverEditCdkTableFlexExample, CdkPopoverEditCdkTableExample, CdkPopoverEditCellSpanVanillaTableExample, CdkPopoverEditTabOutVanillaTableExample, CdkPopoverEditVanillaTableExample };
var EXAMPLES = [
    CdkPopoverEditCdkTableExample,
    CdkPopoverEditCdkTableFlexExample,
    CdkPopoverEditCellSpanVanillaTableExample,
    CdkPopoverEditTabOutVanillaTableExample,
    CdkPopoverEditVanillaTableExample,
];
var CdkPopoverEditExamplesModule = /** @class */ (function () {
    function CdkPopoverEditExamplesModule() {
    }
    CdkPopoverEditExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: CdkPopoverEditExamplesModule });
    CdkPopoverEditExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CdkPopoverEditExamplesModule_Factory(t) { return new (t || CdkPopoverEditExamplesModule)(); }, imports: [[
                CdkPopoverEditModule,
                CdkTableModule,
                FormsModule,
                CommonModule,
            ]] });
    return CdkPopoverEditExamplesModule;
}());
export { CdkPopoverEditExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CdkPopoverEditExamplesModule, { declarations: [CdkPopoverEditCdkTableExample,
        CdkPopoverEditCdkTableFlexExample,
        CdkPopoverEditCellSpanVanillaTableExample,
        CdkPopoverEditTabOutVanillaTableExample,
        CdkPopoverEditVanillaTableExample], imports: [CdkPopoverEditModule,
        CdkTableModule,
        FormsModule,
        CommonModule], exports: [CdkPopoverEditCdkTableExample,
        CdkPopoverEditCdkTableFlexExample,
        CdkPopoverEditCellSpanVanillaTableExample,
        CdkPopoverEditTabOutVanillaTableExample,
        CdkPopoverEditVanillaTableExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkPopoverEditExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CdkPopoverEditModule,
                    CdkTableModule,
                    FormsModule,
                    CommonModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL3BvcG92ZXItZWRpdC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQztBQUM1RSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFDTCxpQ0FBaUMsRUFDbEMsTUFBTSwyRUFBMkUsQ0FBQztBQUNuRixPQUFPLEVBQ0wsNkJBQTZCLEVBQzlCLE1BQU0saUVBQWlFLENBQUM7QUFDekUsT0FBTyxFQUNMLHlDQUF5QztBQUN6QywyQ0FBMkM7RUFDNUMsTUFBTSw2RkFBNkYsQ0FBQztBQUNyRyxPQUFPLEVBQ0wsdUNBQXVDLEVBQ3hDLE1BQU0seUZBQXlGLENBQUM7QUFDakcsT0FBTyxFQUNMLGlDQUFpQyxFQUNsQyxNQUFNLHlFQUF5RSxDQUFDOztBQUVqRixPQUFPLEVBQ0wsaUNBQWlDLEVBQ2pDLDZCQUE2QixFQUM3Qix5Q0FBeUMsRUFDekMsdUNBQXVDLEVBQ3ZDLGlDQUFpQyxFQUNsQyxDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQUc7SUFDZiw2QkFBNkI7SUFDN0IsaUNBQWlDO0lBQ2pDLHlDQUF5QztJQUN6Qyx1Q0FBdUM7SUFDdkMsaUNBQWlDO0NBQ2xDLENBQUM7QUFFRjtJQUFBO0tBWUM7b0VBRFksNEJBQTRCOzJJQUE1Qiw0QkFBNEIsa0JBVjlCO2dCQUNQLG9CQUFvQjtnQkFDcEIsY0FBYztnQkFDZCxXQUFXO2dCQUNYLFlBQVk7YUFDYjt1Q0E1Q0g7Q0FrREMsQUFaRCxJQVlDO1NBRFksNEJBQTRCO3dGQUE1Qiw0QkFBNEIsbUJBbEJ2Qyw2QkFBNkI7UUFDN0IsaUNBQWlDO1FBQ2pDLHlDQUF5QztRQUN6Qyx1Q0FBdUM7UUFDdkMsaUNBQWlDLGFBSy9CLG9CQUFvQjtRQUNwQixjQUFjO1FBQ2QsV0FBVztRQUNYLFlBQVksYUFaZCw2QkFBNkI7UUFDN0IsaUNBQWlDO1FBQ2pDLHlDQUF5QztRQUN6Qyx1Q0FBdUM7UUFDdkMsaUNBQWlDO2tEQWN0Qiw0QkFBNEI7Y0FYeEMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxvQkFBb0I7b0JBQ3BCLGNBQWM7b0JBQ2QsV0FBVztvQkFDWCxZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTtnQkFDakIsZUFBZSxFQUFFLFFBQVE7YUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Nka1BvcG92ZXJFZGl0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGstZXhwZXJpbWVudGFsL3BvcG92ZXItZWRpdCc7XG5pbXBvcnQge0Nka1RhYmxlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIENka1BvcG92ZXJFZGl0Q2RrVGFibGVGbGV4RXhhbXBsZVxufSBmcm9tICcuL2Nkay1wb3BvdmVyLWVkaXQtY2RrLXRhYmxlLWZsZXgvY2RrLXBvcG92ZXItZWRpdC1jZGstdGFibGUtZmxleC1leGFtcGxlJztcbmltcG9ydCB7XG4gIENka1BvcG92ZXJFZGl0Q2RrVGFibGVFeGFtcGxlXG59IGZyb20gJy4vY2RrLXBvcG92ZXItZWRpdC1jZGstdGFibGUvY2RrLXBvcG92ZXItZWRpdC1jZGstdGFibGUtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBDZGtQb3BvdmVyRWRpdENlbGxTcGFuVmFuaWxsYVRhYmxlRXhhbXBsZVxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG59IGZyb20gJy4vY2RrLXBvcG92ZXItZWRpdC1jZWxsLXNwYW4tdmFuaWxsYS10YWJsZS9jZGstcG9wb3Zlci1lZGl0LWNlbGwtc3Bhbi12YW5pbGxhLXRhYmxlLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgQ2RrUG9wb3ZlckVkaXRUYWJPdXRWYW5pbGxhVGFibGVFeGFtcGxlXG59IGZyb20gJy4vY2RrLXBvcG92ZXItZWRpdC10YWItb3V0LXZhbmlsbGEtdGFibGUvY2RrLXBvcG92ZXItZWRpdC10YWItb3V0LXZhbmlsbGEtdGFibGUtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBDZGtQb3BvdmVyRWRpdFZhbmlsbGFUYWJsZUV4YW1wbGVcbn0gZnJvbSAnLi9jZGstcG9wb3Zlci1lZGl0LXZhbmlsbGEtdGFibGUvY2RrLXBvcG92ZXItZWRpdC12YW5pbGxhLXRhYmxlLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBDZGtQb3BvdmVyRWRpdENka1RhYmxlRmxleEV4YW1wbGUsXG4gIENka1BvcG92ZXJFZGl0Q2RrVGFibGVFeGFtcGxlLFxuICBDZGtQb3BvdmVyRWRpdENlbGxTcGFuVmFuaWxsYVRhYmxlRXhhbXBsZSxcbiAgQ2RrUG9wb3ZlckVkaXRUYWJPdXRWYW5pbGxhVGFibGVFeGFtcGxlLFxuICBDZGtQb3BvdmVyRWRpdFZhbmlsbGFUYWJsZUV4YW1wbGVcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBDZGtQb3BvdmVyRWRpdENka1RhYmxlRXhhbXBsZSxcbiAgQ2RrUG9wb3ZlckVkaXRDZGtUYWJsZUZsZXhFeGFtcGxlLFxuICBDZGtQb3BvdmVyRWRpdENlbGxTcGFuVmFuaWxsYVRhYmxlRXhhbXBsZSxcbiAgQ2RrUG9wb3ZlckVkaXRUYWJPdXRWYW5pbGxhVGFibGVFeGFtcGxlLFxuICBDZGtQb3BvdmVyRWRpdFZhbmlsbGFUYWJsZUV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ2RrUG9wb3ZlckVkaXRNb2R1bGUsXG4gICAgQ2RrVGFibGVNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbiAgZW50cnlDb21wb25lbnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrUG9wb3ZlckVkaXRFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=