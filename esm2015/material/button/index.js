/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/button/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { ButtonOverviewExample } from './button-overview/button-overview-example';
import { ButtonTypesExample } from './button-types/button-types-example';
import * as i0 from "@angular/core";
export { ButtonOverviewExample, ButtonTypesExample, };
/** @type {?} */
const EXAMPLES = [
    ButtonOverviewExample,
    ButtonTypesExample,
];
export class ButtonExamplesModule {
}
ButtonExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    MatButtonModule,
                    MatDividerModule,
                    MatIconModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            },] },
];
/** @nocollapse */ ButtonExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: ButtonExamplesModule });
/** @nocollapse */ ButtonExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ButtonExamplesModule_Factory(t) { return new (t || ButtonExamplesModule)(); }, imports: [[
            MatButtonModule,
            MatDividerModule,
            MatIconModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ButtonExamplesModule, { declarations: [ButtonOverviewExample,
        ButtonTypesExample], imports: [MatButtonModule,
        MatDividerModule,
        MatIconModule], exports: [ButtonOverviewExample,
        ButtonTypesExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ButtonExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatButtonModule,
                    MatDividerModule,
                    MatIconModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9idXR0b24vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDaEYsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0scUNBQXFDLENBQUM7O0FBRXZFLE9BQU8sRUFDTCxxQkFBcUIsRUFDckIsa0JBQWtCLEdBQ25CLENBQUM7O01BRUksUUFBUSxHQUFHO0lBQ2YscUJBQXFCO0lBQ3JCLGtCQUFrQjtDQUNuQjtBQVlELE1BQU0sT0FBTyxvQkFBb0I7OztZQVZoQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLGVBQWU7b0JBQ2YsZ0JBQWdCO29CQUNoQixhQUFhO2lCQUNkO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTtnQkFDakIsZUFBZSxFQUFFLFFBQVE7YUFDMUI7OzJFQUNZLG9CQUFvQjswSUFBcEIsb0JBQW9CLGtCQVR0QjtZQUNQLGVBQWU7WUFDZixnQkFBZ0I7WUFDaEIsYUFBYTtTQUNkO3dGQUtVLG9CQUFvQixtQkFkL0IscUJBQXFCO1FBQ3JCLGtCQUFrQixhQUtoQixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGFBQWEsYUFSZixxQkFBcUI7UUFDckIsa0JBQWtCO2tEQWFQLG9CQUFvQjtjQVZoQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLGVBQWU7b0JBQ2YsZ0JBQWdCO29CQUNoQixhQUFhO2lCQUNkO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTtnQkFDakIsZUFBZSxFQUFFLFFBQVE7YUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXREaXZpZGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaXZpZGVyJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge0J1dHRvbk92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9idXR0b24tb3ZlcnZpZXcvYnV0dG9uLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtCdXR0b25UeXBlc0V4YW1wbGV9IGZyb20gJy4vYnV0dG9uLXR5cGVzL2J1dHRvbi10eXBlcy1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgQnV0dG9uT3ZlcnZpZXdFeGFtcGxlLFxuICBCdXR0b25UeXBlc0V4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgQnV0dG9uT3ZlcnZpZXdFeGFtcGxlLFxuICBCdXR0b25UeXBlc0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdERpdmlkZXJNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==