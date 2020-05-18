/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/checkbox/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
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
let CheckboxExamplesModule = /** @class */ (() => {
    class CheckboxExamplesModule {
    }
    CheckboxExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatCardModule,
                        MatCheckboxModule,
                        MatRadioModule,
                        FormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                },] },
    ];
    /** @nocollapse */ CheckboxExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: CheckboxExamplesModule });
    /** @nocollapse */ CheckboxExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CheckboxExamplesModule_Factory(t) { return new (t || CheckboxExamplesModule)(); }, imports: [[
                CommonModule,
                MatCardModule,
                MatCheckboxModule,
                MatRadioModule,
                FormsModule,
            ]] });
    return CheckboxExamplesModule;
})();
export { CheckboxExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CheckboxExamplesModule, { declarations: [CheckboxConfigurableExample,
        CheckboxOverviewExample], imports: [CommonModule,
        MatCardModule,
        MatCheckboxModule,
        MatRadioModule,
        FormsModule], exports: [CheckboxConfigurableExample,
        CheckboxOverviewExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CheckboxExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatCardModule,
                    MatCheckboxModule,
                    MatRadioModule,
                    FormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGVja2JveC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLHVEQUF1RCxDQUFDO0FBQ2xHLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLCtDQUErQyxDQUFDOztBQUV0RixPQUFPLEVBQ0wsMkJBQTJCLEVBQzNCLHVCQUF1QixHQUN4QixDQUFDOztNQUVJLFFBQVEsR0FBRztJQUNmLDJCQUEyQjtJQUMzQix1QkFBdUI7Q0FDeEI7QUFFRDtJQUFBLE1BWWEsc0JBQXNCOzs7Z0JBWmxDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixhQUFhO3dCQUNiLGlCQUFpQjt3QkFDakIsY0FBYzt3QkFDZCxXQUFXO3FCQUNaO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtvQkFDakIsZUFBZSxFQUFFLFFBQVE7aUJBQzFCOztpRkFDWSxzQkFBc0I7a0pBQXRCLHNCQUFzQixrQkFYeEI7Z0JBQ1AsWUFBWTtnQkFDWixhQUFhO2dCQUNiLGlCQUFpQjtnQkFDakIsY0FBYztnQkFDZCxXQUFXO2FBQ1o7aUNBMUJIO0tBZ0NDO1NBRFksc0JBQXNCO3dGQUF0QixzQkFBc0IsbUJBaEJqQywyQkFBMkI7UUFDM0IsdUJBQXVCLGFBS3JCLFlBQVk7UUFDWixhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCxXQUFXLGFBVmIsMkJBQTJCO1FBQzNCLHVCQUF1QjtrREFlWixzQkFBc0I7Y0FabEMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGFBQWE7b0JBQ2IsaUJBQWlCO29CQUNqQixjQUFjO29CQUNkLFdBQVc7aUJBQ1o7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixlQUFlLEVBQUUsUUFBUTthQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdENhcmRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xuaW1wb3J0IHtNYXRDaGVja2JveE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xuaW1wb3J0IHtNYXRSYWRpb01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW8nO1xuaW1wb3J0IHtDaGVja2JveENvbmZpZ3VyYWJsZUV4YW1wbGV9IGZyb20gJy4vY2hlY2tib3gtY29uZmlndXJhYmxlL2NoZWNrYm94LWNvbmZpZ3VyYWJsZS1leGFtcGxlJztcbmltcG9ydCB7Q2hlY2tib3hPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vY2hlY2tib3gtb3ZlcnZpZXcvY2hlY2tib3gtb3ZlcnZpZXctZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIENoZWNrYm94Q29uZmlndXJhYmxlRXhhbXBsZSxcbiAgQ2hlY2tib3hPdmVydmlld0V4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgQ2hlY2tib3hDb25maWd1cmFibGVFeGFtcGxlLFxuICBDaGVja2JveE92ZXJ2aWV3RXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRSYWRpb01vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrYm94RXhhbXBsZXNNb2R1bGUge1xufVxuIl19