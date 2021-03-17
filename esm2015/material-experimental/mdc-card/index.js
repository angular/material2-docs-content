import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material-experimental/mdc-button';
import { MatCardModule } from '@angular/material-experimental/mdc-card';
import { MdcCardFancyExample } from './mdc-card-fancy/mdc-card-fancy-example';
import * as i0 from "@angular/core";
export { MdcCardFancyExample, };
const EXAMPLES = [
    MdcCardFancyExample,
];
export class MdcCardExamplesModule {
}
MdcCardExamplesModule.ɵfac = function MdcCardExamplesModule_Factory(t) { return new (t || MdcCardExamplesModule)(); };
MdcCardExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: MdcCardExamplesModule });
MdcCardExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            MatButtonModule,
            MatCardModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MdcCardExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatButtonModule,
                    MatCardModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MdcCardExamplesModule, { declarations: [MdcCardFancyExample], imports: [MatButtonModule,
        MatCardModule], exports: [MdcCardFancyExample] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC1leHBlcmltZW50YWwvbWRjLWNhcmQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDMUUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlDQUF5QyxDQUFDOztBQUU1RSxPQUFPLEVBQ0wsbUJBQW1CLEdBQ3BCLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRztJQUNmLG1CQUFtQjtDQUNwQixDQUFDO0FBV0YsTUFBTSxPQUFPLHFCQUFxQjs7MEZBQXJCLHFCQUFxQjt1RUFBckIscUJBQXFCOzJFQVJ2QjtZQUNQLGVBQWU7WUFDZixhQUFhO1NBQ2Q7dUZBS1UscUJBQXFCO2NBVGpDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsZUFBZTtvQkFDZixhQUFhO2lCQUNkO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTtnQkFDakIsZUFBZSxFQUFFLFFBQVE7YUFDMUI7O3dGQUNZLHFCQUFxQixtQkFaaEMsbUJBQW1CLGFBS2pCLGVBQWU7UUFDZixhQUFhLGFBTmYsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwtZXhwZXJpbWVudGFsL21kYy1idXR0b24nO1xuaW1wb3J0IHtNYXRDYXJkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC1leHBlcmltZW50YWwvbWRjLWNhcmQnO1xuaW1wb3J0IHtNZGNDYXJkRmFuY3lFeGFtcGxlfSBmcm9tICcuL21kYy1jYXJkLWZhbmN5L21kYy1jYXJkLWZhbmN5LWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBNZGNDYXJkRmFuY3lFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIE1kY0NhcmRGYW5jeUV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdENhcmRNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBNZGNDYXJkRXhhbXBsZXNNb2R1bGUge1xufVxuIl19