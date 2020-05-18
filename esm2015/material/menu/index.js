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
import { MenuNestedExample } from './menu-nested/menu-nested-example';
import * as i0 from "@angular/core";
export { MenuIconsExample, MenuOverviewExample, MenuPositionExample, MenuNestedExample, };
/** @type {?} */
const EXAMPLES = [
    MenuIconsExample,
    MenuOverviewExample,
    MenuPositionExample,
    MenuNestedExample,
];
let MenuExamplesModule = /** @class */ (() => {
    class MenuExamplesModule {
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
                    entryComponents: EXAMPLES,
                },] },
    ];
    /** @nocollapse */ MenuExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: MenuExamplesModule });
    /** @nocollapse */ MenuExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MenuExamplesModule_Factory(t) { return new (t || MenuExamplesModule)(); }, imports: [[
                MatButtonModule,
                MatIconModule,
                MatMenuModule,
            ]] });
    return MenuExamplesModule;
})();
export { MenuExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MenuExamplesModule, { declarations: [MenuIconsExample,
        MenuOverviewExample,
        MenuPositionExample,
        MenuNestedExample], imports: [MatButtonModule,
        MatIconModule,
        MatMenuModule], exports: [MenuIconsExample,
        MenuOverviewExample,
        MenuPositionExample,
        MenuNestedExample] }); })();
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
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9tZW51L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUNqRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQzs7QUFFcEUsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixtQkFBbUIsRUFDbkIsbUJBQW1CLEVBQ25CLGlCQUFpQixHQUNsQixDQUFDOztNQUVJLFFBQVEsR0FBRztJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtDQUNsQjtBQUVEO0lBQUEsTUFVYSxrQkFBa0I7OztnQkFWOUIsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsYUFBYTtxQkFDZDtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2lCQUMxQjs7NkVBQ1ksa0JBQWtCOzBJQUFsQixrQkFBa0Isa0JBVHBCO2dCQUNQLGVBQWU7Z0JBQ2YsYUFBYTtnQkFDYixhQUFhO2FBQ2Q7NkJBNUJIO0tBa0NDO1NBRFksa0JBQWtCO3dGQUFsQixrQkFBa0IsbUJBaEI3QixnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixpQkFBaUIsYUFLZixlQUFlO1FBQ2YsYUFBYTtRQUNiLGFBQWEsYUFWZixnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixpQkFBaUI7a0RBYU4sa0JBQWtCO2NBVjlCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsZUFBZTtvQkFDZixhQUFhO29CQUNiLGFBQWE7aUJBQ2Q7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixlQUFlLEVBQUUsUUFBUTthQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtNYXRNZW51TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9tZW51JztcbmltcG9ydCB7TWVudUljb25zRXhhbXBsZX0gZnJvbSAnLi9tZW51LWljb25zL21lbnUtaWNvbnMtZXhhbXBsZSc7XG5pbXBvcnQge01lbnVPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vbWVudS1vdmVydmlldy9tZW51LW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtNZW51UG9zaXRpb25FeGFtcGxlfSBmcm9tICcuL21lbnUtcG9zaXRpb24vbWVudS1wb3NpdGlvbi1leGFtcGxlJztcbmltcG9ydCB7TWVudU5lc3RlZEV4YW1wbGV9IGZyb20gJy4vbWVudS1uZXN0ZWQvbWVudS1uZXN0ZWQtZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIE1lbnVJY29uc0V4YW1wbGUsXG4gIE1lbnVPdmVydmlld0V4YW1wbGUsXG4gIE1lbnVQb3NpdGlvbkV4YW1wbGUsXG4gIE1lbnVOZXN0ZWRFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIE1lbnVJY29uc0V4YW1wbGUsXG4gIE1lbnVPdmVydmlld0V4YW1wbGUsXG4gIE1lbnVQb3NpdGlvbkV4YW1wbGUsXG4gIE1lbnVOZXN0ZWRFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdE1lbnVNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBNZW51RXhhbXBsZXNNb2R1bGUge1xufVxuIl19