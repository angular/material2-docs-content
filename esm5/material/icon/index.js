import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IconOverviewExample } from './icon-overview/icon-overview-example';
import { IconSvgExample } from './icon-svg/icon-svg-example';
import * as i0 from "@angular/core";
export { IconOverviewExample, IconSvgExample, };
var EXAMPLES = [
    IconOverviewExample,
    IconSvgExample,
];
var IconExamplesModule = /** @class */ (function () {
    function IconExamplesModule() {
    }
    IconExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        MatIconModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] },
    ];
    IconExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: IconExamplesModule });
    IconExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function IconExamplesModule_Factory(t) { return new (t || IconExamplesModule)(); }, imports: [[
                MatIconModule,
            ]] });
    return IconExamplesModule;
}());
export { IconExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IconExamplesModule, { declarations: [IconOverviewExample,
        IconSvgExample], imports: [MatIconModule], exports: [IconOverviewExample,
        IconSvgExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(IconExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatIconModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pY29uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQzs7QUFFM0QsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixjQUFjLEdBQ2YsQ0FBQztBQUVGLElBQU0sUUFBUSxHQUFHO0lBQ2YsbUJBQW1CO0lBQ25CLGNBQWM7Q0FDZixDQUFDO0FBRUY7SUFBQTtLQVFDOztnQkFSQSxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGFBQWE7cUJBQ2Q7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQjs7MERBQ1ksa0JBQWtCO3VIQUFsQixrQkFBa0Isa0JBTnBCO2dCQUNQLGFBQWE7YUFDZDs2QkFsQkg7Q0F1QkMsQUFSRCxJQVFDO1NBRFksa0JBQWtCO3dGQUFsQixrQkFBa0IsbUJBWDdCLG1CQUFtQjtRQUNuQixjQUFjLGFBS1osYUFBYSxhQU5mLG1CQUFtQjtRQUNuQixjQUFjO2tEQVVILGtCQUFrQjtjQVA5QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLGFBQWE7aUJBQ2Q7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtJY29uT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL2ljb24tb3ZlcnZpZXcvaWNvbi1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7SWNvblN2Z0V4YW1wbGV9IGZyb20gJy4vaWNvbi1zdmcvaWNvbi1zdmctZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIEljb25PdmVydmlld0V4YW1wbGUsXG4gIEljb25TdmdFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIEljb25PdmVydmlld0V4YW1wbGUsXG4gIEljb25TdmdFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE1hdEljb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBJY29uRXhhbXBsZXNNb2R1bGUge1xufVxuIl19