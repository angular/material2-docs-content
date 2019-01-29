import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
/**
 * @title Configurable checkbox
 */
var CheckboxConfigurableExample = /** @class */ (function () {
    function CheckboxConfigurableExample() {
        this.checked = false;
        this.indeterminate = false;
        this.labelPosition = 'after';
        this.disabled = false;
    }
    CheckboxConfigurableExample = tslib_1.__decorate([
        Component({
            selector: 'checkbox-configurable-example',
            template: "<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Checkbox configuration</h2>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox>\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"indeterminate\">Indeterminate</mat-checkbox>\n    </section>\n\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Align:</label>\n      <mat-radio-group [(ngModel)]=\"labelPosition\">\n        <mat-radio-button class=\"example-margin\" value=\"after\">After</mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"before\">Before</mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\n    </section>\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"result\">\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n\n    <section class=\"example-section\">\n      <mat-checkbox\n          class=\"example-margin\"\n          [(ngModel)]=\"checked\"\n          [(indeterminate)]=\"indeterminate\"\n          [labelPosition]=\"labelPosition\"\n          [disabled]=\"disabled\">\n        I'm a checkbox\n      </mat-checkbox>\n    </section>\n  </mat-card-content>\n</mat-card>\n\n",
            styles: [".example-h2 {\n  margin: 10px;\n}\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 0 10px;\n}\n"]
        })
    ], CheckboxConfigurableExample);
    return CheckboxConfigurableExample;
}());
export { CheckboxConfigurableExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtY29uZmlndXJhYmxlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvY2hlY2tib3gtY29uZmlndXJhYmxlL2NoZWNrYm94LWNvbmZpZ3VyYWJsZS1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXhDOztHQUVHO0FBTUg7SUFMQTtRQU1FLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsa0JBQWEsR0FBRyxPQUFPLENBQUM7UUFDeEIsYUFBUSxHQUFHLEtBQUssQ0FBQztJQUNuQixDQUFDO0lBTFksMkJBQTJCO1FBTHZDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSwrQkFBK0I7WUFDekMsZzNDQUFpRDs7U0FFbEQsQ0FBQztPQUNXLDJCQUEyQixDQUt2QztJQUFELGtDQUFDO0NBQUEsQUFMRCxJQUtDO1NBTFksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBDb25maWd1cmFibGUgY2hlY2tib3hcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hlY2tib3gtY29uZmlndXJhYmxlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2NoZWNrYm94LWNvbmZpZ3VyYWJsZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2hlY2tib3gtY29uZmlndXJhYmxlLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrYm94Q29uZmlndXJhYmxlRXhhbXBsZSB7XG4gIGNoZWNrZWQgPSBmYWxzZTtcbiAgaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICBsYWJlbFBvc2l0aW9uID0gJ2FmdGVyJztcbiAgZGlzYWJsZWQgPSBmYWxzZTtcbn1cbiJdfQ==