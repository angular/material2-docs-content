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
const EXAMPLES = [
    CdkPopoverEditCdkTableExample,
    CdkPopoverEditCdkTableFlexExample,
    CdkPopoverEditCellSpanVanillaTableExample,
    CdkPopoverEditTabOutVanillaTableExample,
    CdkPopoverEditVanillaTableExample,
];
export class CdkPopoverEditExamplesModule {
}
CdkPopoverEditExamplesModule.ɵfac = function CdkPopoverEditExamplesModule_Factory(t) { return new (t || CdkPopoverEditExamplesModule)(); };
CdkPopoverEditExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CdkPopoverEditExamplesModule });
CdkPopoverEditExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CdkPopoverEditModule,
            CdkTableModule,
            FormsModule,
            CommonModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkPopoverEditExamplesModule, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL3BvcG92ZXItZWRpdC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQztBQUM1RSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFDTCxpQ0FBaUMsRUFDbEMsTUFBTSwyRUFBMkUsQ0FBQztBQUNuRixPQUFPLEVBQ0wsNkJBQTZCLEVBQzlCLE1BQU0saUVBQWlFLENBQUM7QUFDekUsT0FBTyxFQUNMLHlDQUF5QztBQUN6QywyQ0FBMkM7RUFDNUMsTUFBTSw2RkFBNkYsQ0FBQztBQUNyRyxPQUFPLEVBQ0wsdUNBQXVDLEVBQ3hDLE1BQU0seUZBQXlGLENBQUM7QUFDakcsT0FBTyxFQUNMLGlDQUFpQyxFQUNsQyxNQUFNLHlFQUF5RSxDQUFDOztBQUVqRixPQUFPLEVBQ0wsaUNBQWlDLEVBQ2pDLDZCQUE2QixFQUM3Qix5Q0FBeUMsRUFDekMsdUNBQXVDLEVBQ3ZDLGlDQUFpQyxFQUNsQyxDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZiw2QkFBNkI7SUFDN0IsaUNBQWlDO0lBQ2pDLHlDQUF5QztJQUN6Qyx1Q0FBdUM7SUFDdkMsaUNBQWlDO0NBQ2xDLENBQUM7QUFhRixNQUFNLE9BQU8sNEJBQTRCOzt3R0FBNUIsNEJBQTRCOzhFQUE1Qiw0QkFBNEI7a0ZBVjlCO1lBQ1Asb0JBQW9CO1lBQ3BCLGNBQWM7WUFDZCxXQUFXO1lBQ1gsWUFBWTtTQUNiO3VGQUtVLDRCQUE0QjtjQVh4QyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLG9CQUFvQjtvQkFDcEIsY0FBYztvQkFDZCxXQUFXO29CQUNYLFlBQVk7aUJBQ2I7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixlQUFlLEVBQUUsUUFBUTthQUMxQjs7d0ZBQ1ksNEJBQTRCLG1CQWxCdkMsNkJBQTZCO1FBQzdCLGlDQUFpQztRQUNqQyx5Q0FBeUM7UUFDekMsdUNBQXVDO1FBQ3ZDLGlDQUFpQyxhQUsvQixvQkFBb0I7UUFDcEIsY0FBYztRQUNkLFdBQVc7UUFDWCxZQUFZLGFBWmQsNkJBQTZCO1FBQzdCLGlDQUFpQztRQUNqQyx5Q0FBeUM7UUFDekMsdUNBQXVDO1FBQ3ZDLGlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2RrUG9wb3ZlckVkaXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay1leHBlcmltZW50YWwvcG9wb3Zlci1lZGl0JztcbmltcG9ydCB7Q2RrVGFibGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgQ2RrUG9wb3ZlckVkaXRDZGtUYWJsZUZsZXhFeGFtcGxlXG59IGZyb20gJy4vY2RrLXBvcG92ZXItZWRpdC1jZGstdGFibGUtZmxleC9jZGstcG9wb3Zlci1lZGl0LWNkay10YWJsZS1mbGV4LWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgQ2RrUG9wb3ZlckVkaXRDZGtUYWJsZUV4YW1wbGVcbn0gZnJvbSAnLi9jZGstcG9wb3Zlci1lZGl0LWNkay10YWJsZS9jZGstcG9wb3Zlci1lZGl0LWNkay10YWJsZS1leGFtcGxlJztcbmltcG9ydCB7XG4gIENka1BvcG92ZXJFZGl0Q2VsbFNwYW5WYW5pbGxhVGFibGVFeGFtcGxlXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbn0gZnJvbSAnLi9jZGstcG9wb3Zlci1lZGl0LWNlbGwtc3Bhbi12YW5pbGxhLXRhYmxlL2Nkay1wb3BvdmVyLWVkaXQtY2VsbC1zcGFuLXZhbmlsbGEtdGFibGUtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBDZGtQb3BvdmVyRWRpdFRhYk91dFZhbmlsbGFUYWJsZUV4YW1wbGVcbn0gZnJvbSAnLi9jZGstcG9wb3Zlci1lZGl0LXRhYi1vdXQtdmFuaWxsYS10YWJsZS9jZGstcG9wb3Zlci1lZGl0LXRhYi1vdXQtdmFuaWxsYS10YWJsZS1leGFtcGxlJztcbmltcG9ydCB7XG4gIENka1BvcG92ZXJFZGl0VmFuaWxsYVRhYmxlRXhhbXBsZVxufSBmcm9tICcuL2Nkay1wb3BvdmVyLWVkaXQtdmFuaWxsYS10YWJsZS9jZGstcG9wb3Zlci1lZGl0LXZhbmlsbGEtdGFibGUtZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIENka1BvcG92ZXJFZGl0Q2RrVGFibGVGbGV4RXhhbXBsZSxcbiAgQ2RrUG9wb3ZlckVkaXRDZGtUYWJsZUV4YW1wbGUsXG4gIENka1BvcG92ZXJFZGl0Q2VsbFNwYW5WYW5pbGxhVGFibGVFeGFtcGxlLFxuICBDZGtQb3BvdmVyRWRpdFRhYk91dFZhbmlsbGFUYWJsZUV4YW1wbGUsXG4gIENka1BvcG92ZXJFZGl0VmFuaWxsYVRhYmxlRXhhbXBsZVxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIENka1BvcG92ZXJFZGl0Q2RrVGFibGVFeGFtcGxlLFxuICBDZGtQb3BvdmVyRWRpdENka1RhYmxlRmxleEV4YW1wbGUsXG4gIENka1BvcG92ZXJFZGl0Q2VsbFNwYW5WYW5pbGxhVGFibGVFeGFtcGxlLFxuICBDZGtQb3BvdmVyRWRpdFRhYk91dFZhbmlsbGFUYWJsZUV4YW1wbGUsXG4gIENka1BvcG92ZXJFZGl0VmFuaWxsYVRhYmxlRXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDZGtQb3BvdmVyRWRpdE1vZHVsZSxcbiAgICBDZGtUYWJsZU1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtQb3BvdmVyRWRpdEV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==