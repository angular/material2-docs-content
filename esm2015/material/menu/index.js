/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/menu/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MenuIconsExample } from './menu-icons/menu-icons-example';
import { MenuOverviewExample } from './menu-overview/menu-overview-example';
import { MenuPositionExample } from './menu-position/menu-position-example';
import { NestedMenuExample } from './nested-menu/nested-menu-example';
import * as i0 from "@angular/core";
export { MenuIconsExample, MenuOverviewExample, MenuPositionExample, NestedMenuExample, };
/** @type {?} */
const EXAMPLES = [
    MenuIconsExample,
    MenuOverviewExample,
    MenuPositionExample,
    NestedMenuExample,
];
export class MenuExamplesModule {
}
MenuExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    MatButtonModule,
                    MatIconModule,
                    MatMenuModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            },] },
];
/** @nocollapse */ MenuExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: MenuExamplesModule });
/** @nocollapse */ MenuExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MenuExamplesModule_Factory(t) { return new (t || MenuExamplesModule)(); }, imports: [[
            MatButtonModule,
            MatIconModule,
            MatMenuModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MenuExamplesModule, { declarations: [MenuIconsExample,
        MenuOverviewExample,
        MenuPositionExample,
        NestedMenuExample], imports: [MatButtonModule,
        MatIconModule,
        MatMenuModule], exports: [MenuIconsExample,
        MenuOverviewExample,
        MenuPositionExample,
        NestedMenuExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MenuExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatButtonModule,
                    MatIconModule,
                    MatMenuModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9tZW51L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUNqRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQzs7QUFFcEUsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixtQkFBbUIsRUFDbkIsbUJBQW1CLEVBQ25CLGlCQUFpQixHQUNsQixDQUFDOztNQUVJLFFBQVEsR0FBRztJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtDQUNsQjtBQVdELE1BQU0sT0FBTyxrQkFBa0I7OztZQVQ5QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixhQUFhO2lCQUNkO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTthQUNsQjs7c0RBQ1ksa0JBQWtCO21IQUFsQixrQkFBa0Isa0JBUnBCO1lBQ1AsZUFBZTtZQUNmLGFBQWE7WUFDYixhQUFhO1NBQ2Q7d0ZBSVUsa0JBQWtCLG1CQWY3QixnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixpQkFBaUIsYUFLZixlQUFlO1FBQ2YsYUFBYTtRQUNiLGFBQWEsYUFWZixnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixpQkFBaUI7a0RBWU4sa0JBQWtCO2NBVDlCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsZUFBZTtvQkFDZixhQUFhO29CQUNiLGFBQWE7aUJBQ2Q7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge01hdE1lbnVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL21lbnUnO1xuaW1wb3J0IHtNZW51SWNvbnNFeGFtcGxlfSBmcm9tICcuL21lbnUtaWNvbnMvbWVudS1pY29ucy1leGFtcGxlJztcbmltcG9ydCB7TWVudU92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9tZW51LW92ZXJ2aWV3L21lbnUtb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge01lbnVQb3NpdGlvbkV4YW1wbGV9IGZyb20gJy4vbWVudS1wb3NpdGlvbi9tZW51LXBvc2l0aW9uLWV4YW1wbGUnO1xuaW1wb3J0IHtOZXN0ZWRNZW51RXhhbXBsZX0gZnJvbSAnLi9uZXN0ZWQtbWVudS9uZXN0ZWQtbWVudS1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgTWVudUljb25zRXhhbXBsZSxcbiAgTWVudU92ZXJ2aWV3RXhhbXBsZSxcbiAgTWVudVBvc2l0aW9uRXhhbXBsZSxcbiAgTmVzdGVkTWVudUV4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgTWVudUljb25zRXhhbXBsZSxcbiAgTWVudU92ZXJ2aWV3RXhhbXBsZSxcbiAgTWVudVBvc2l0aW9uRXhhbXBsZSxcbiAgTmVzdGVkTWVudUV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0TWVudU1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIE1lbnVFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=