import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material-experimental/mdc-button';
import { MatCardModule } from '@angular/material-experimental/mdc-card';
import { MdcCardFancyExample } from './mdc-card-fancy/mdc-card-fancy-example';
import * as i0 from "@angular/core";
export { MdcCardFancyExample };
const EXAMPLES = [MdcCardFancyExample];
export class MdcCardExamplesModule {
}
MdcCardExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: MdcCardExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MdcCardExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: MdcCardExamplesModule, declarations: [MdcCardFancyExample], imports: [MatButtonModule, MatCardModule], exports: [MdcCardFancyExample] });
MdcCardExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: MdcCardExamplesModule, imports: [[MatButtonModule, MatCardModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: MdcCardExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatButtonModule, MatCardModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC1leHBlcmltZW50YWwvbWRjLWNhcmQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDMUUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlDQUF5QyxDQUFDOztBQUU1RSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsQ0FBQztBQUU3QixNQUFNLFFBQVEsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFRdkMsTUFBTSxPQUFPLHFCQUFxQjs7a0hBQXJCLHFCQUFxQjttSEFBckIscUJBQXFCLGlCQVJoQixtQkFBbUIsYUFHekIsZUFBZSxFQUFFLGFBQWEsYUFIeEIsbUJBQW1CO21IQVF4QixxQkFBcUIsWUFMdkIsQ0FBQyxlQUFlLEVBQUUsYUFBYSxDQUFDOzJGQUs5QixxQkFBcUI7a0JBTmpDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQztvQkFDekMsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO29CQUNqQixlQUFlLEVBQUUsUUFBUTtpQkFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC1leHBlcmltZW50YWwvbWRjLWJ1dHRvbic7XG5pbXBvcnQge01hdENhcmRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9tZGMtY2FyZCc7XG5pbXBvcnQge01kY0NhcmRGYW5jeUV4YW1wbGV9IGZyb20gJy4vbWRjLWNhcmQtZmFuY3kvbWRjLWNhcmQtZmFuY3ktZXhhbXBsZSc7XG5cbmV4cG9ydCB7TWRjQ2FyZEZhbmN5RXhhbXBsZX07XG5cbmNvbnN0IEVYQU1QTEVTID0gW01kY0NhcmRGYW5jeUV4YW1wbGVdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTWF0QnV0dG9uTW9kdWxlLCBNYXRDYXJkTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIE1kY0NhcmRFeGFtcGxlc01vZHVsZSB7fVxuIl19