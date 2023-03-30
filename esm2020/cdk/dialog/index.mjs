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
class DialogExamplesModule {
}
DialogExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.5", ngImport: i0, type: DialogExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DialogExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.0-next.5", ngImport: i0, type: DialogExamplesModule, declarations: [CdkDialogDataExample,
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
DialogExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.0-next.5", ngImport: i0, type: DialogExamplesModule, imports: [CommonModule, DialogModule, FormsModule] });
export { DialogExamplesModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.5", ngImport: i0, type: DialogExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, DialogModule, FormsModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvZGlhbG9nL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUNMLG9CQUFvQixFQUNwQiwwQkFBMEIsR0FDM0IsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRCxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLDhCQUE4QixHQUMvQixNQUFNLG1EQUFtRCxDQUFDO0FBQzNELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsNkJBQTZCLEdBQzlCLE1BQU0saURBQWlELENBQUM7O0FBRXpELE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsMEJBQTBCLEVBQzFCLHdCQUF3QixFQUN4Qiw4QkFBOEIsRUFDOUIsdUJBQXVCLEVBQ3ZCLDZCQUE2QixHQUM5QixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZixvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLHdCQUF3QjtJQUN4Qiw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtDQUM5QixDQUFDO0FBRUYsTUFLYSxvQkFBb0I7O3dIQUFwQixvQkFBb0I7eUhBQXBCLG9CQUFvQixpQkFiL0Isb0JBQW9CO1FBQ3BCLDBCQUEwQjtRQUMxQix3QkFBd0I7UUFDeEIsOEJBQThCO1FBQzlCLHVCQUF1QjtRQUN2Qiw2QkFBNkIsYUFJbkIsWUFBWSxFQUFFLFlBQVksRUFBRSxXQUFXLGFBVGpELG9CQUFvQjtRQUNwQiwwQkFBMEI7UUFDMUIsd0JBQXdCO1FBQ3hCLDhCQUE4QjtRQUM5Qix1QkFBdUI7UUFDdkIsNkJBQTZCO3lIQVFsQixvQkFBb0IsWUFKckIsWUFBWSxFQUFFLFlBQVksRUFBRSxXQUFXO1NBSXRDLG9CQUFvQjtrR0FBcEIsb0JBQW9CO2tCQUxoQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsV0FBVyxDQUFDO29CQUNsRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7RGlhbG9nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvZGlhbG9nJztcbmltcG9ydCB7XG4gIENka0RpYWxvZ0RhdGFFeGFtcGxlLFxuICBDZGtEaWFsb2dEYXRhRXhhbXBsZURpYWxvZyxcbn0gZnJvbSAnLi9jZGstZGlhbG9nLWRhdGEvY2RrLWRpYWxvZy1kYXRhLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgQ2RrRGlhbG9nT3ZlcnZpZXdFeGFtcGxlLFxuICBDZGtEaWFsb2dPdmVydmlld0V4YW1wbGVEaWFsb2csXG59IGZyb20gJy4vY2RrLWRpYWxvZy1vdmVydmlldy9jZGstZGlhbG9nLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgQ2RrRGlhbG9nU3R5bGluZ0V4YW1wbGUsXG4gIENka0RpYWxvZ1N0eWxpbmdFeGFtcGxlRGlhbG9nLFxufSBmcm9tICcuL2Nkay1kaWFsb2ctc3R5bGluZy9jZGstZGlhbG9nLXN0eWxpbmctZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIENka0RpYWxvZ0RhdGFFeGFtcGxlLFxuICBDZGtEaWFsb2dEYXRhRXhhbXBsZURpYWxvZyxcbiAgQ2RrRGlhbG9nT3ZlcnZpZXdFeGFtcGxlLFxuICBDZGtEaWFsb2dPdmVydmlld0V4YW1wbGVEaWFsb2csXG4gIENka0RpYWxvZ1N0eWxpbmdFeGFtcGxlLFxuICBDZGtEaWFsb2dTdHlsaW5nRXhhbXBsZURpYWxvZyxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBDZGtEaWFsb2dEYXRhRXhhbXBsZSxcbiAgQ2RrRGlhbG9nRGF0YUV4YW1wbGVEaWFsb2csXG4gIENka0RpYWxvZ092ZXJ2aWV3RXhhbXBsZSxcbiAgQ2RrRGlhbG9nT3ZlcnZpZXdFeGFtcGxlRGlhbG9nLFxuICBDZGtEaWFsb2dTdHlsaW5nRXhhbXBsZSxcbiAgQ2RrRGlhbG9nU3R5bGluZ0V4YW1wbGVEaWFsb2csXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBEaWFsb2dNb2R1bGUsIEZvcm1zTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0V4YW1wbGVzTW9kdWxlIHt9XG4iXX0=