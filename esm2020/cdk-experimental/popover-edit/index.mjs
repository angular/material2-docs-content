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
CdkPopoverEditExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: CdkPopoverEditExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CdkPopoverEditExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: CdkPopoverEditExamplesModule, declarations: [CdkPopoverEditCdkTableExample,
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
        CdkPopoverEditVanillaTableExample] });
CdkPopoverEditExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: CdkPopoverEditExamplesModule, imports: [[
            CdkPopoverEditModule,
            CdkTableModule,
            FormsModule,
            CommonModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: CdkPopoverEditExamplesModule, decorators: [{
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
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL3BvcG92ZXItZWRpdC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQztBQUM1RSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFDTCxpQ0FBaUMsRUFDbEMsTUFBTSwyRUFBMkUsQ0FBQztBQUNuRixPQUFPLEVBQ0wsNkJBQTZCLEVBQzlCLE1BQU0saUVBQWlFLENBQUM7QUFDekUsT0FBTyxFQUNMLHlDQUF5QztBQUN6QywyQ0FBMkM7RUFDNUMsTUFBTSw2RkFBNkYsQ0FBQztBQUNyRyxPQUFPLEVBQ0wsdUNBQXVDLEVBQ3hDLE1BQU0seUZBQXlGLENBQUM7QUFDakcsT0FBTyxFQUNMLGlDQUFpQyxFQUNsQyxNQUFNLHlFQUF5RSxDQUFDOztBQUVqRixPQUFPLEVBQ0wsaUNBQWlDLEVBQ2pDLDZCQUE2QixFQUM3Qix5Q0FBeUMsRUFDekMsdUNBQXVDLEVBQ3ZDLGlDQUFpQyxFQUNsQyxDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZiw2QkFBNkI7SUFDN0IsaUNBQWlDO0lBQ2pDLHlDQUF5QztJQUN6Qyx1Q0FBdUM7SUFDdkMsaUNBQWlDO0NBQ2xDLENBQUM7QUFhRixNQUFNLE9BQU8sNEJBQTRCOztpSUFBNUIsNEJBQTRCO2tJQUE1Qiw0QkFBNEIsaUJBbEJ2Qyw2QkFBNkI7UUFDN0IsaUNBQWlDO1FBQ2pDLHlDQUF5QztRQUN6Qyx1Q0FBdUM7UUFDdkMsaUNBQWlDLGFBSy9CLG9CQUFvQjtRQUNwQixjQUFjO1FBQ2QsV0FBVztRQUNYLFlBQVksYUFaZCw2QkFBNkI7UUFDN0IsaUNBQWlDO1FBQ2pDLHlDQUF5QztRQUN6Qyx1Q0FBdUM7UUFDdkMsaUNBQWlDO2tJQWN0Qiw0QkFBNEIsWUFWOUI7WUFDUCxvQkFBb0I7WUFDcEIsY0FBYztZQUNkLFdBQVc7WUFDWCxZQUFZO1NBQ2I7bUdBS1UsNEJBQTRCO2tCQVh4QyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxvQkFBb0I7d0JBQ3BCLGNBQWM7d0JBQ2QsV0FBVzt3QkFDWCxZQUFZO3FCQUNiO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtvQkFDakIsZUFBZSxFQUFFLFFBQVE7aUJBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDZGtQb3BvdmVyRWRpdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrLWV4cGVyaW1lbnRhbC9wb3BvdmVyLWVkaXQnO1xuaW1wb3J0IHtDZGtUYWJsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBDZGtQb3BvdmVyRWRpdENka1RhYmxlRmxleEV4YW1wbGVcbn0gZnJvbSAnLi9jZGstcG9wb3Zlci1lZGl0LWNkay10YWJsZS1mbGV4L2Nkay1wb3BvdmVyLWVkaXQtY2RrLXRhYmxlLWZsZXgtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBDZGtQb3BvdmVyRWRpdENka1RhYmxlRXhhbXBsZVxufSBmcm9tICcuL2Nkay1wb3BvdmVyLWVkaXQtY2RrLXRhYmxlL2Nkay1wb3BvdmVyLWVkaXQtY2RrLXRhYmxlLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgQ2RrUG9wb3ZlckVkaXRDZWxsU3BhblZhbmlsbGFUYWJsZUV4YW1wbGVcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxufSBmcm9tICcuL2Nkay1wb3BvdmVyLWVkaXQtY2VsbC1zcGFuLXZhbmlsbGEtdGFibGUvY2RrLXBvcG92ZXItZWRpdC1jZWxsLXNwYW4tdmFuaWxsYS10YWJsZS1leGFtcGxlJztcbmltcG9ydCB7XG4gIENka1BvcG92ZXJFZGl0VGFiT3V0VmFuaWxsYVRhYmxlRXhhbXBsZVxufSBmcm9tICcuL2Nkay1wb3BvdmVyLWVkaXQtdGFiLW91dC12YW5pbGxhLXRhYmxlL2Nkay1wb3BvdmVyLWVkaXQtdGFiLW91dC12YW5pbGxhLXRhYmxlLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgQ2RrUG9wb3ZlckVkaXRWYW5pbGxhVGFibGVFeGFtcGxlXG59IGZyb20gJy4vY2RrLXBvcG92ZXItZWRpdC12YW5pbGxhLXRhYmxlL2Nkay1wb3BvdmVyLWVkaXQtdmFuaWxsYS10YWJsZS1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgQ2RrUG9wb3ZlckVkaXRDZGtUYWJsZUZsZXhFeGFtcGxlLFxuICBDZGtQb3BvdmVyRWRpdENka1RhYmxlRXhhbXBsZSxcbiAgQ2RrUG9wb3ZlckVkaXRDZWxsU3BhblZhbmlsbGFUYWJsZUV4YW1wbGUsXG4gIENka1BvcG92ZXJFZGl0VGFiT3V0VmFuaWxsYVRhYmxlRXhhbXBsZSxcbiAgQ2RrUG9wb3ZlckVkaXRWYW5pbGxhVGFibGVFeGFtcGxlXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgQ2RrUG9wb3ZlckVkaXRDZGtUYWJsZUV4YW1wbGUsXG4gIENka1BvcG92ZXJFZGl0Q2RrVGFibGVGbGV4RXhhbXBsZSxcbiAgQ2RrUG9wb3ZlckVkaXRDZWxsU3BhblZhbmlsbGFUYWJsZUV4YW1wbGUsXG4gIENka1BvcG92ZXJFZGl0VGFiT3V0VmFuaWxsYVRhYmxlRXhhbXBsZSxcbiAgQ2RrUG9wb3ZlckVkaXRWYW5pbGxhVGFibGVFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENka1BvcG92ZXJFZGl0TW9kdWxlLFxuICAgIENka1RhYmxlTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIENka1BvcG92ZXJFZGl0RXhhbXBsZXNNb2R1bGUge1xufVxuIl19