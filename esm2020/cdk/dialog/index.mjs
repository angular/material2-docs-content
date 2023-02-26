import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogModule } from '@angular/cdk/dialog';
import { CdkDialogDataExample, CdkDialogDataExampleDialog, } from './cdk-dialog-data/cdk-dialog-data-example';
import { CdkDialogOverviewExample, CdkDialogOverviewExampleDialog, } from './cdk-dialog-overview/cdk-dialog-overview-example';
import { CdkDialogStylingExample, CdkDialogStylingExampleDialog, } from './cdk-dialog-styling/cdk-dialog-styling-example';
import * as i0 from "@angular/core";
export { CdkDialogDataExample, CdkDialogDataExampleDialog, CdkDialogOverviewExample, CdkDialogOverviewExampleDialog, CdkDialogStylingExample, CdkDialogStylingExampleDialog, };
const EXAMPLES = [
    CdkDialogDataExample,
    CdkDialogDataExampleDialog,
    CdkDialogOverviewExample,
    CdkDialogOverviewExampleDialog,
    CdkDialogStylingExample,
    CdkDialogStylingExampleDialog,
];
export class DialogExamplesModule {
}
DialogExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.0", ngImport: i0, type: DialogExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DialogExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.0-next.0", ngImport: i0, type: DialogExamplesModule, declarations: [CdkDialogDataExample,
        CdkDialogDataExampleDialog,
        CdkDialogOverviewExample,
        CdkDialogOverviewExampleDialog,
        CdkDialogStylingExample,
        CdkDialogStylingExampleDialog], imports: [CommonModule, DialogModule, FormsModule], exports: [CdkDialogDataExample,
        CdkDialogDataExampleDialog,
        CdkDialogOverviewExample,
        CdkDialogOverviewExampleDialog,
        CdkDialogStylingExample,
        CdkDialogStylingExampleDialog] });
DialogExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.0-next.0", ngImport: i0, type: DialogExamplesModule, imports: [CommonModule, DialogModule, FormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.0", ngImport: i0, type: DialogExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, DialogModule, FormsModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvZGlhbG9nL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUNMLG9CQUFvQixFQUNwQiwwQkFBMEIsR0FDM0IsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRCxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLDhCQUE4QixHQUMvQixNQUFNLG1EQUFtRCxDQUFDO0FBQzNELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsNkJBQTZCLEdBQzlCLE1BQU0saURBQWlELENBQUM7O0FBRXpELE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsMEJBQTBCLEVBQzFCLHdCQUF3QixFQUN4Qiw4QkFBOEIsRUFDOUIsdUJBQXVCLEVBQ3ZCLDZCQUE2QixHQUM5QixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZixvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLHdCQUF3QjtJQUN4Qiw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtDQUM5QixDQUFDO0FBT0YsTUFBTSxPQUFPLG9CQUFvQjs7d0hBQXBCLG9CQUFvQjt5SEFBcEIsb0JBQW9CLGlCQWIvQixvQkFBb0I7UUFDcEIsMEJBQTBCO1FBQzFCLHdCQUF3QjtRQUN4Qiw4QkFBOEI7UUFDOUIsdUJBQXVCO1FBQ3ZCLDZCQUE2QixhQUluQixZQUFZLEVBQUUsWUFBWSxFQUFFLFdBQVcsYUFUakQsb0JBQW9CO1FBQ3BCLDBCQUEwQjtRQUMxQix3QkFBd0I7UUFDeEIsOEJBQThCO1FBQzlCLHVCQUF1QjtRQUN2Qiw2QkFBNkI7eUhBUWxCLG9CQUFvQixZQUpyQixZQUFZLEVBQUUsWUFBWSxFQUFFLFdBQVc7a0dBSXRDLG9CQUFvQjtrQkFMaEMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLFdBQVcsQ0FBQztvQkFDbEQsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0RpYWxvZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RpYWxvZyc7XG5pbXBvcnQge1xuICBDZGtEaWFsb2dEYXRhRXhhbXBsZSxcbiAgQ2RrRGlhbG9nRGF0YUV4YW1wbGVEaWFsb2csXG59IGZyb20gJy4vY2RrLWRpYWxvZy1kYXRhL2Nkay1kaWFsb2ctZGF0YS1leGFtcGxlJztcbmltcG9ydCB7XG4gIENka0RpYWxvZ092ZXJ2aWV3RXhhbXBsZSxcbiAgQ2RrRGlhbG9nT3ZlcnZpZXdFeGFtcGxlRGlhbG9nLFxufSBmcm9tICcuL2Nkay1kaWFsb2ctb3ZlcnZpZXcvY2RrLWRpYWxvZy1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7XG4gIENka0RpYWxvZ1N0eWxpbmdFeGFtcGxlLFxuICBDZGtEaWFsb2dTdHlsaW5nRXhhbXBsZURpYWxvZyxcbn0gZnJvbSAnLi9jZGstZGlhbG9nLXN0eWxpbmcvY2RrLWRpYWxvZy1zdHlsaW5nLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBDZGtEaWFsb2dEYXRhRXhhbXBsZSxcbiAgQ2RrRGlhbG9nRGF0YUV4YW1wbGVEaWFsb2csXG4gIENka0RpYWxvZ092ZXJ2aWV3RXhhbXBsZSxcbiAgQ2RrRGlhbG9nT3ZlcnZpZXdFeGFtcGxlRGlhbG9nLFxuICBDZGtEaWFsb2dTdHlsaW5nRXhhbXBsZSxcbiAgQ2RrRGlhbG9nU3R5bGluZ0V4YW1wbGVEaWFsb2csXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgQ2RrRGlhbG9nRGF0YUV4YW1wbGUsXG4gIENka0RpYWxvZ0RhdGFFeGFtcGxlRGlhbG9nLFxuICBDZGtEaWFsb2dPdmVydmlld0V4YW1wbGUsXG4gIENka0RpYWxvZ092ZXJ2aWV3RXhhbXBsZURpYWxvZyxcbiAgQ2RrRGlhbG9nU3R5bGluZ0V4YW1wbGUsXG4gIENka0RpYWxvZ1N0eWxpbmdFeGFtcGxlRGlhbG9nLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRGlhbG9nTW9kdWxlLCBGb3Jtc01vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dFeGFtcGxlc01vZHVsZSB7fVxuIl19