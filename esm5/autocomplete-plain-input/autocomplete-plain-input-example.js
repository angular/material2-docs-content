import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
/**
 * @title Plain input autocomplete
 */
var AutocompletePlainInputExample = /** @class */ (function () {
    function AutocompletePlainInputExample() {
        this.control = new FormControl();
        this.streets = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];
    }
    AutocompletePlainInputExample.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredStreets = this.control.valueChanges.pipe(startWith(''), map(function (value) { return _this._filter(value); }));
    };
    AutocompletePlainInputExample.prototype._filter = function (value) {
        var _this = this;
        var filterValue = this._normalizeValue(value);
        return this.streets.filter(function (street) { return _this._normalizeValue(street).includes(filterValue); });
    };
    AutocompletePlainInputExample.prototype._normalizeValue = function (value) {
        return value.toLowerCase().replace(/\s/g, '');
    };
    AutocompletePlainInputExample = tslib_1.__decorate([
        Component({
            selector: 'autocomplete-plain-input-example',
            template: "<form class=\"example-form\">\n  <input type=\"text\" placeholder=\"Search for a street\" [formControl]=\"control\" [matAutocomplete]=\"auto\">\n  <mat-autocomplete #auto=\"matAutocomplete\">\n    <mat-option *ngFor=\"let street of filteredStreets | async\" [value]=\"street\">\n      {{street}}\n    </mat-option>\n  </mat-autocomplete>\n</form>\n",
            styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"]
        })
    ], AutocompletePlainInputExample);
    return AutocompletePlainInputExample;
}());
export { AutocompletePlainInputExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLXBsYWluLWlucHV0LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvYXV0b2NvbXBsZXRlLXBsYWluLWlucHV0L2F1dG9jb21wbGV0ZS1wbGFpbi1pbnB1dC1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUMsU0FBUyxFQUFFLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRTlDOztHQUVHO0FBTUg7SUFMQTtRQU1FLFlBQU8sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQzVCLFlBQU8sR0FBYSxDQUFDLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxjQUFjLENBQUMsQ0FBQztJQWtCekYsQ0FBQztJQWZDLGdEQUFRLEdBQVI7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUNuRCxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQ2IsR0FBRyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBbkIsQ0FBbUIsQ0FBQyxDQUNsQyxDQUFDO0lBQ0osQ0FBQztJQUVPLCtDQUFPLEdBQWYsVUFBZ0IsS0FBYTtRQUE3QixpQkFHQztRQUZDLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFsRCxDQUFrRCxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUVPLHVEQUFlLEdBQXZCLFVBQXdCLEtBQWE7UUFDbkMsT0FBTyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBbkJVLDZCQUE2QjtRQUx6QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0NBQWtDO1lBQzVDLHdXQUFvRDs7U0FFckQsQ0FBQztPQUNXLDZCQUE2QixDQW9CekM7SUFBRCxvQ0FBQztDQUFBLEFBcEJELElBb0JDO1NBcEJZLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7c3RhcnRXaXRoLCBtYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLyoqXG4gKiBAdGl0bGUgUGxhaW4gaW5wdXQgYXV0b2NvbXBsZXRlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F1dG9jb21wbGV0ZS1wbGFpbi1pbnB1dC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdhdXRvY29tcGxldGUtcGxhaW4taW5wdXQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2F1dG9jb21wbGV0ZS1wbGFpbi1pbnB1dC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVQbGFpbklucHV0RXhhbXBsZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgc3RyZWV0czogc3RyaW5nW10gPSBbJ0NoYW1wcy3DiWx5c8OpZXMnLCAnTG9tYmFyZCBTdHJlZXQnLCAnQWJiZXkgUm9hZCcsICdGaWZ0aCBBdmVudWUnXTtcbiAgZmlsdGVyZWRTdHJlZXRzOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZpbHRlcmVkU3RyZWV0cyA9IHRoaXMuY29udHJvbC52YWx1ZUNoYW5nZXMucGlwZShcbiAgICAgIHN0YXJ0V2l0aCgnJyksXG4gICAgICBtYXAodmFsdWUgPT4gdGhpcy5fZmlsdGVyKHZhbHVlKSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgZmlsdGVyVmFsdWUgPSB0aGlzLl9ub3JtYWxpemVWYWx1ZSh2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXMuc3RyZWV0cy5maWx0ZXIoc3RyZWV0ID0+IHRoaXMuX25vcm1hbGl6ZVZhbHVlKHN0cmVldCkuaW5jbHVkZXMoZmlsdGVyVmFsdWUpKTtcbiAgfVxuXG4gIHByaXZhdGUgX25vcm1hbGl6ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB2YWx1ZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gIH1cbn1cbiJdfQ==