/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/checkbox/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { CheckboxConfigurableExample } from './checkbox-configurable/checkbox-configurable-example';
import { CheckboxOverviewExample } from './checkbox-overview/checkbox-overview-example';
import * as i0 from "@angular/core";
export { CheckboxConfigurableExample, CheckboxOverviewExample, };
/** @type {?} */
const EXAMPLES = [
    CheckboxConfigurableExample,
    CheckboxOverviewExample,
];
export class CheckboxExamplesModule {
}
CheckboxExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    MatCardModule,
                    MatCheckboxModule,
                    MatRadioModule,
                    FormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            },] },
];
/** @nocollapse */ CheckboxExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: CheckboxExamplesModule });
/** @nocollapse */ CheckboxExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CheckboxExamplesModule_Factory(t) { return new (t || CheckboxExamplesModule)(); }, imports: [[
            MatCardModule,
            MatCheckboxModule,
            MatRadioModule,
            FormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CheckboxExamplesModule, { declarations: [CheckboxConfigurableExample,
        CheckboxOverviewExample], imports: [MatCardModule,
        MatCheckboxModule,
        MatRadioModule,
        FormsModule], exports: [CheckboxConfigurableExample,
        CheckboxOverviewExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CheckboxExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatCardModule,
                    MatCheckboxModule,
                    MatRadioModule,
                    FormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGVja2JveC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDbEcsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sK0NBQStDLENBQUM7O0FBRXRGLE9BQU8sRUFDTCwyQkFBMkIsRUFDM0IsdUJBQXVCLEdBQ3hCLENBQUM7O01BRUksUUFBUSxHQUFHO0lBQ2YsMkJBQTJCO0lBQzNCLHVCQUF1QjtDQUN4QjtBQVlELE1BQU0sT0FBTyxzQkFBc0I7OztZQVZsQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLGFBQWE7b0JBQ2IsaUJBQWlCO29CQUNqQixjQUFjO29CQUNkLFdBQVc7aUJBQ1o7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2FBQ2xCOzswREFDWSxzQkFBc0I7MkhBQXRCLHNCQUFzQixrQkFUeEI7WUFDUCxhQUFhO1lBQ2IsaUJBQWlCO1lBQ2pCLGNBQWM7WUFDZCxXQUFXO1NBQ1o7d0ZBSVUsc0JBQXNCLG1CQWRqQywyQkFBMkI7UUFDM0IsdUJBQXVCLGFBS3JCLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsY0FBYztRQUNkLFdBQVcsYUFUYiwyQkFBMkI7UUFDM0IsdUJBQXVCO2tEQWFaLHNCQUFzQjtjQVZsQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLGFBQWE7b0JBQ2IsaUJBQWlCO29CQUNqQixjQUFjO29CQUNkLFdBQVc7aUJBQ1o7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdENhcmRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xuaW1wb3J0IHtNYXRDaGVja2JveE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xuaW1wb3J0IHtNYXRSYWRpb01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW8nO1xuaW1wb3J0IHtDaGVja2JveENvbmZpZ3VyYWJsZUV4YW1wbGV9IGZyb20gJy4vY2hlY2tib3gtY29uZmlndXJhYmxlL2NoZWNrYm94LWNvbmZpZ3VyYWJsZS1leGFtcGxlJztcbmltcG9ydCB7Q2hlY2tib3hPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vY2hlY2tib3gtb3ZlcnZpZXcvY2hlY2tib3gtb3ZlcnZpZXctZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIENoZWNrYm94Q29uZmlndXJhYmxlRXhhbXBsZSxcbiAgQ2hlY2tib3hPdmVydmlld0V4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgQ2hlY2tib3hDb25maWd1cmFibGVFeGFtcGxlLFxuICBDaGVja2JveE92ZXJ2aWV3RXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBNYXRDYXJkTW9kdWxlLFxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=