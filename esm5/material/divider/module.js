import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { DividerOverviewExample } from './divider-overview/divider-overview-example';
import * as i0 from "@angular/core";
export { DividerOverviewExample };
var EXAMPLES = [
    DividerOverviewExample,
];
var DividerExamplesModule = /** @class */ (function () {
    function DividerExamplesModule() {
    }
    DividerExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        MatDividerModule,
                        MatListModule,
                    ],
                    declarations: EXAMPLES,
                },] },
    ];
    DividerExamplesModule.ngModuleDef = i0.ɵɵdefineNgModule({ type: DividerExamplesModule });
    DividerExamplesModule.ngInjectorDef = i0.ɵɵdefineInjector({ factory: function DividerExamplesModule_Factory(t) { return new (t || DividerExamplesModule)(); }, imports: [[
                MatDividerModule,
                MatListModule,
            ]] });
    return DividerExamplesModule;
}());
export { DividerExamplesModule };
/*@__PURE__*/ i0.ɵɵsetNgModuleScope(DividerExamplesModule, { declarations: [DividerOverviewExample], imports: [MatDividerModule,
        MatListModule] });
/*@__PURE__*/ i0.ɵsetClassMetadata(DividerExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatDividerModule,
                    MatListModule,
                ],
                declarations: EXAMPLES,
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2RpdmlkZXIvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDOztBQUVuRixPQUFPLEVBQUMsc0JBQXNCLEVBQUMsQ0FBQztBQUVoQyxJQUFNLFFBQVEsR0FBRztJQUNmLHNCQUFzQjtDQUN2QixDQUFDO0FBRUY7SUFBQTtLQVFDOztnQkFSQSxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGdCQUFnQjt3QkFDaEIsYUFBYTtxQkFDZDtvQkFDRCxZQUFZLEVBQUUsUUFBUTtpQkFDdkI7O29FQUNZLHFCQUFxQjtzSUFBckIscUJBQXFCLGtCQU52QjtnQkFDUCxnQkFBZ0I7Z0JBQ2hCLGFBQWE7YUFDZDtnQ0FmSDtDQW1CQyxBQVJELElBUUM7U0FEWSxxQkFBcUI7b0NBQXJCLHFCQUFxQixtQkFWaEMsc0JBQXNCLGFBS3BCLGdCQUFnQjtRQUNoQixhQUFhO21DQUlKLHFCQUFxQjtjQVBqQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLGdCQUFnQjtvQkFDaEIsYUFBYTtpQkFDZDtnQkFDRCxZQUFZLEVBQUUsUUFBUTthQUN2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXREaXZpZGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaXZpZGVyJztcbmltcG9ydCB7TWF0TGlzdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGlzdCc7XG5pbXBvcnQge0RpdmlkZXJPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vZGl2aWRlci1vdmVydmlldy9kaXZpZGVyLW92ZXJ2aWV3LWV4YW1wbGUnO1xuXG5leHBvcnQge0RpdmlkZXJPdmVydmlld0V4YW1wbGV9O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgRGl2aWRlck92ZXJ2aWV3RXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBNYXREaXZpZGVyTW9kdWxlLFxuICAgIE1hdExpc3RNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIERpdmlkZXJFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=