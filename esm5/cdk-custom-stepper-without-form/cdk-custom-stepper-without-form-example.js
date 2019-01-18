import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';
import { Directionality } from '@angular/cdk/bidi';
/** @title A custom CDK stepper without a form */
var CdkCustomStepperWithoutFormExample = /** @class */ (function () {
    function CdkCustomStepperWithoutFormExample() {
    }
    CdkCustomStepperWithoutFormExample = tslib_1.__decorate([
        Component({
            selector: 'cdk-custom-stepper-without-form-example',
            template: "<example-custom-stepper>\n  <cdk-step>\n    <p>This is any content of \"Step 1\"</p>\n  </cdk-step>\n  <cdk-step>\n      <p>This is any content of \"Step 2\"</p>\n  </cdk-step>\n</example-custom-stepper>",
            styles: [""]
        })
    ], CdkCustomStepperWithoutFormExample);
    return CdkCustomStepperWithoutFormExample;
}());
export { CdkCustomStepperWithoutFormExample };
/** Custom CDK stepper component */
var CustomStepper = /** @class */ (function (_super) {
    tslib_1.__extends(CustomStepper, _super);
    function CustomStepper(dir, changeDetectorRef) {
        return _super.call(this, dir, changeDetectorRef) || this;
    }
    CustomStepper_1 = CustomStepper;
    CustomStepper.prototype.onClick = function (index) {
        this.selectedIndex = index;
    };
    var CustomStepper_1;
    CustomStepper = CustomStepper_1 = tslib_1.__decorate([
        Component({
            selector: 'example-custom-stepper',
            template: "<section class=\"example-container\">\n  <header>\n    <h2>Step {{selectedIndex + 1}}/{{steps.length}}</h2>\n  </header>\n  \n  <section *ngFor=\"let step of steps; let i = index; let isLast = last\">\n      <div [style.display]=\"selectedIndex === i ? 'block' : 'none'\">\n        <ng-container [ngTemplateOutlet]=\"step.content\"></ng-container>\n      </div>\n  </section>\n  \n  <footer class=\"example-step-navigation-bar\">\n    <button class=\"example-nav-button\" cdkStepperPrevious>&larr;</button>\n    <button class=\"example-step\" *ngFor=\"let step of steps; let i = index;\" [ngClass]=\"{'example-active': selectedIndex === i}\" (click)=\"onClick(i)\">Step {{i + 1}}</button>\n    <button class=\"example-nav-button\" cdkStepperNext>&rarr;</button>\n  </footer>\n</section>",
            providers: [{ provide: CdkStepper, useExisting: CustomStepper_1 }],
            styles: [".example-container {\n  border: 1px solid black;\n  padding: 10px;\n  margin: 10px;\n}\n\n.example-step-navigation-bar {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 10px;\n}\n\n.example-active {\n  color: blue;\n}\n\n.example-step {\n  background: transparent;\n  border: 0;\n  margin: 0 10px;\n  padding: 10px;\n  color: black;\n}\n\n.example-step.example-active {\n  color: blue;\n  border-bottom: 1px solid blue;\n}\n\n.example-nav-button {\n  background: transparent;\n  border: 0;\n}\n"]
        }),
        tslib_1.__metadata("design:paramtypes", [Directionality, ChangeDetectorRef])
    ], CustomStepper);
    return CustomStepper;
}(CdkStepper));
export { CustomStepper };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay1jdXN0b20tc3RlcHBlci13aXRob3V0LWZvcm0vY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFhLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxVQUFVLEVBQVUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFFakQsaURBQWlEO0FBTWpEO0lBQUE7SUFBaUQsQ0FBQztJQUFyQyxrQ0FBa0M7UUFMOUMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHlDQUF5QztZQUNuRCx1TkFBNkQ7O1NBRTlELENBQUM7T0FDVyxrQ0FBa0MsQ0FBRztJQUFELHlDQUFDO0NBQUEsQUFBbEQsSUFBa0Q7U0FBckMsa0NBQWtDO0FBRS9DLG1DQUFtQztBQU9uQztJQUFtQyx5Q0FBVTtJQVUzQyx1QkFBWSxHQUFtQixFQUFFLGlCQUFvQztlQUNuRSxrQkFBTSxHQUFHLEVBQUUsaUJBQWlCLENBQUM7SUFDL0IsQ0FBQztzQkFaVSxhQUFhO0lBY3hCLCtCQUFPLEdBQVAsVUFBUSxLQUFhO1FBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7O0lBaEJVLGFBQWE7UUFOekIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQyw4eEJBQTRDO1lBRTVDLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsZUFBYSxFQUFFLENBQUM7O1NBQ2pFLENBQUM7aURBV2lCLGNBQWMsRUFBcUIsaUJBQWlCO09BVjFELGFBQWEsQ0FpQnpCO0lBQUQsb0JBQUM7Q0FBQSxBQWpCRCxDQUFtQyxVQUFVLEdBaUI1QztTQWpCWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFF1ZXJ5TGlzdCwgQ2hhbmdlRGV0ZWN0b3JSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDZGtTdGVwcGVyLCBDZGtTdGVwfSBmcm9tICdAYW5ndWxhci9jZGsvc3RlcHBlcic7XG5pbXBvcnQge0RpcmVjdGlvbmFsaXR5fSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5cbi8qKiBAdGl0bGUgQSBjdXN0b20gQ0RLIHN0ZXBwZXIgd2l0aG91dCBhIGZvcm0gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1jdXN0b20tc3RlcHBlci13aXRob3V0LWZvcm0tZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jZGstY3VzdG9tLXN0ZXBwZXItd2l0aG91dC1mb3JtLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Nkay1jdXN0b20tc3RlcHBlci13aXRob3V0LWZvcm0tZXhhbXBsZS5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDZGtDdXN0b21TdGVwcGVyV2l0aG91dEZvcm1FeGFtcGxlIHt9XG5cbi8qKiBDdXN0b20gQ0RLIHN0ZXBwZXIgY29tcG9uZW50ICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleGFtcGxlLWN1c3RvbS1zdGVwcGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2V4YW1wbGUtY3VzdG9tLXN0ZXBwZXIuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2V4YW1wbGUtY3VzdG9tLXN0ZXBwZXIuY3NzJ10sXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ2RrU3RlcHBlciwgdXNlRXhpc3Rpbmc6IEN1c3RvbVN0ZXBwZXIgfV0sXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbVN0ZXBwZXIgZXh0ZW5kcyBDZGtTdGVwcGVyIHtcbiAgLyoqIFdoZXRoZXIgdGhlIHZhbGlkaXR5IG9mIHByZXZpb3VzIHN0ZXBzIHNob3VsZCBiZSBjaGVja2VkIG9yIG5vdCAqL1xuICBsaW5lYXI6IGJvb2xlYW47XG5cbiAgLyoqIFRoZSBpbmRleCBvZiB0aGUgc2VsZWN0ZWQgc3RlcC4gKi9cbiAgc2VsZWN0ZWRJbmRleDogbnVtYmVyO1xuXG4gIC8qKiBUaGUgbGlzdCBvZiBzdGVwIGNvbXBvbmVudHMgdGhhdCB0aGUgc3RlcHBlciBpcyBob2xkaW5nLiAqL1xuICBzdGVwczogUXVlcnlMaXN0PENka1N0ZXA+O1xuXG4gIGNvbnN0cnVjdG9yKGRpcjogRGlyZWN0aW9uYWxpdHksIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKGRpciwgY2hhbmdlRGV0ZWN0b3JSZWYpO1xuICB9XG5cbiAgb25DbGljayhpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XG4gIH1cbn1cbiJdfQ==