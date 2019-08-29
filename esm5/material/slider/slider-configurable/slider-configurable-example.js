import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Component } from '@angular/core';
/**
 * @title Configurable slider
 */
var SliderConfigurableExample = /** @class */ (function () {
    function SliderConfigurableExample() {
        this.autoTicks = false;
        this.disabled = false;
        this.invert = false;
        this.max = 100;
        this.min = 0;
        this.showTicks = false;
        this.step = 1;
        this.thumbLabel = false;
        this.value = 0;
        this.vertical = false;
        this._tickInterval = 1;
    }
    Object.defineProperty(SliderConfigurableExample.prototype, "tickInterval", {
        get: function () {
            return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
        },
        set: function (value) {
            this._tickInterval = coerceNumberProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    SliderConfigurableExample.decorators = [
        { type: Component, args: [{
                    selector: 'slider-configurable-example',
                    template: "<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Slider configuration</h2>\n\n    <section class=\"example-section\">\n      <mat-form-field class=\"example-margin\">\n        <input matInput type=\"number\" placeholder=\"Value\" [(ngModel)]=\"value\">\n      </mat-form-field>\n      <mat-form-field class=\"example-margin\">\n        <input matInput type=\"number\" placeholder=\"Min value\" [(ngModel)]=\"min\">\n      </mat-form-field>\n      <mat-form-field class=\"example-margin\">\n        <input matInput type=\"number\" placeholder=\"Max value\" [(ngModel)]=\"max\">\n      </mat-form-field>\n      <mat-form-field class=\"example-margin\">\n        <input matInput type=\"number\" placeholder=\"Step size\" [(ngModel)]=\"step\">\n      </mat-form-field>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"showTicks\">Show ticks</mat-checkbox>\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"autoTicks\" *ngIf=\"showTicks\">\n        Auto ticks\n      </mat-checkbox>\n      <mat-form-field class=\"example-margin\" *ngIf=\"showTicks && !autoTicks\">\n        <input matInput type=\"number\" placeholder=\"Tick interval\" [(ngModel)]=\"tickInterval\">\n      </mat-form-field>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"thumbLabel\">Show thumb label</mat-checkbox>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"vertical\">Vertical</mat-checkbox>\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"invert\">Inverted</mat-checkbox>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\n    </section>\n\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"result\">\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n\n    <mat-slider\n        class=\"example-margin\"\n        [disabled]=\"disabled\"\n        [invert]=\"invert\"\n        [max]=\"max\"\n        [min]=\"min\"\n        [step]=\"step\"\n        [thumbLabel]=\"thumbLabel\"\n        [tickInterval]=\"tickInterval\"\n        [(ngModel)]=\"value\"\n        [vertical]=\"vertical\">\n    </mat-slider>\n  </mat-card-content>\n</mat-card>\n",
                    styles: [".example-h2 {\n  margin: 10px;\n}\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 10px;\n}\n\n.mat-slider-horizontal {\n  width: 300px;\n}\n\n.mat-slider-vertical {\n  height: 300px;\n}\n"]
                }] }
    ];
    return SliderConfigurableExample;
}());
export { SliderConfigurableExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3NsaWRlci9zbGlkZXItY29uZmlndXJhYmxlL3NsaWRlci1jb25maWd1cmFibGUtZXhhbXBsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXhDOztHQUVHO0FBQ0g7SUFBQTtRQU1FLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsUUFBRyxHQUFHLEdBQUcsQ0FBQztRQUNWLFFBQUcsR0FBRyxDQUFDLENBQUM7UUFDUixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLFNBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDVixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBUVQsa0JBQWEsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQVBDLHNCQUFJLG1EQUFZO2FBQWhCO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0UsQ0FBQzthQUNELFVBQWlCLEtBQUs7WUFDcEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuRCxDQUFDOzs7T0FIQTs7Z0JBbkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNkJBQTZCO29CQUN2Qyx3MUVBQStDOztpQkFFaEQ7O0lBb0JELGdDQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0FuQlkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb2VyY2VOdW1iZXJQcm9wZXJ0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgQ29uZmlndXJhYmxlIHNsaWRlclxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbGlkZXItY29uZmlndXJhYmxlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NsaWRlci1jb25maWd1cmFibGUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NsaWRlci1jb25maWd1cmFibGUtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVyQ29uZmlndXJhYmxlRXhhbXBsZSB7XG4gIGF1dG9UaWNrcyA9IGZhbHNlO1xuICBkaXNhYmxlZCA9IGZhbHNlO1xuICBpbnZlcnQgPSBmYWxzZTtcbiAgbWF4ID0gMTAwO1xuICBtaW4gPSAwO1xuICBzaG93VGlja3MgPSBmYWxzZTtcbiAgc3RlcCA9IDE7XG4gIHRodW1iTGFiZWwgPSBmYWxzZTtcbiAgdmFsdWUgPSAwO1xuICB2ZXJ0aWNhbCA9IGZhbHNlO1xuXG4gIGdldCB0aWNrSW50ZXJ2YWwoKTogbnVtYmVyIHwgJ2F1dG8nIHtcbiAgICByZXR1cm4gdGhpcy5zaG93VGlja3MgPyAodGhpcy5hdXRvVGlja3MgPyAnYXV0bycgOiB0aGlzLl90aWNrSW50ZXJ2YWwpIDogMDtcbiAgfVxuICBzZXQgdGlja0ludGVydmFsKHZhbHVlKSB7XG4gICAgdGhpcy5fdGlja0ludGVydmFsID0gY29lcmNlTnVtYmVyUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX3RpY2tJbnRlcnZhbCA9IDE7XG59XG4iXX0=