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
var EXAMPLES = [
    MenuIconsExample,
    MenuOverviewExample,
    MenuPositionExample,
    NestedMenuExample,
];
var MenuExamplesModule = /** @class */ (function () {
    function MenuExamplesModule() {
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
    MenuExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: MenuExamplesModule });
    MenuExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MenuExamplesModule_Factory(t) { return new (t || MenuExamplesModule)(); }, imports: [[
                MatButtonModule,
                MatIconModule,
                MatMenuModule,
            ]] });
    return MenuExamplesModule;
}());
export { MenuExamplesModule };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9tZW51L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDakUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7O0FBRXBFLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsbUJBQW1CLEVBQ25CLG1CQUFtQixFQUNuQixpQkFBaUIsR0FDbEIsQ0FBQztBQUVGLElBQU0sUUFBUSxHQUFHO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsaUJBQWlCO0NBQ2xCLENBQUM7QUFFRjtJQUFBO0tBVUM7O2dCQVZBLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsZUFBZTt3QkFDZixhQUFhO3dCQUNiLGFBQWE7cUJBQ2Q7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQjs7MERBQ1ksa0JBQWtCO3VIQUFsQixrQkFBa0Isa0JBUnBCO2dCQUNQLGVBQWU7Z0JBQ2YsYUFBYTtnQkFDYixhQUFhO2FBQ2Q7NkJBNUJIO0NBaUNDLEFBVkQsSUFVQztTQURZLGtCQUFrQjt3RkFBbEIsa0JBQWtCLG1CQWY3QixnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixpQkFBaUIsYUFLZixlQUFlO1FBQ2YsYUFBYTtRQUNiLGFBQWEsYUFWZixnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixpQkFBaUI7a0RBWU4sa0JBQWtCO2NBVDlCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsZUFBZTtvQkFDZixhQUFhO29CQUNiLGFBQWE7aUJBQ2Q7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge01hdE1lbnVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL21lbnUnO1xuaW1wb3J0IHtNZW51SWNvbnNFeGFtcGxlfSBmcm9tICcuL21lbnUtaWNvbnMvbWVudS1pY29ucy1leGFtcGxlJztcbmltcG9ydCB7TWVudU92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9tZW51LW92ZXJ2aWV3L21lbnUtb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge01lbnVQb3NpdGlvbkV4YW1wbGV9IGZyb20gJy4vbWVudS1wb3NpdGlvbi9tZW51LXBvc2l0aW9uLWV4YW1wbGUnO1xuaW1wb3J0IHtOZXN0ZWRNZW51RXhhbXBsZX0gZnJvbSAnLi9uZXN0ZWQtbWVudS9uZXN0ZWQtbWVudS1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgTWVudUljb25zRXhhbXBsZSxcbiAgTWVudU92ZXJ2aWV3RXhhbXBsZSxcbiAgTWVudVBvc2l0aW9uRXhhbXBsZSxcbiAgTmVzdGVkTWVudUV4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgTWVudUljb25zRXhhbXBsZSxcbiAgTWVudU92ZXJ2aWV3RXhhbXBsZSxcbiAgTWVudVBvc2l0aW9uRXhhbXBsZSxcbiAgTmVzdGVkTWVudUV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0TWVudU1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIE1lbnVFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=