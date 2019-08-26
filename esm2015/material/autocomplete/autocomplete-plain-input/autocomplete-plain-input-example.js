/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
/**
 * \@title Plain input autocomplete
 */
export class AutocompletePlainInputExample {
    constructor() {
        this.control = new FormControl();
        this.streets = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.filteredStreets = this.control.valueChanges.pipe(startWith(''), map((/**
         * @param {?} value
         * @return {?}
         */
        value => this._filter(value))));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _filter(value) {
        /** @type {?} */
        const filterValue = this._normalizeValue(value);
        return this.streets.filter((/**
         * @param {?} street
         * @return {?}
         */
        street => this._normalizeValue(street).includes(filterValue)));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _normalizeValue(value) {
        return value.toLowerCase().replace(/\s/g, '');
    }
}
AutocompletePlainInputExample.decorators = [
    { type: Component, args: [{
                selector: 'autocomplete-plain-input-example',
                template: "<form class=\"example-form\">\n  <input type=\"text\" placeholder=\"Search for a street\" [formControl]=\"control\" [matAutocomplete]=\"auto\">\n  <mat-autocomplete #auto=\"matAutocomplete\">\n    <mat-option *ngFor=\"let street of filteredStreets | async\" [value]=\"street\">\n      {{street}}\n    </mat-option>\n  </mat-autocomplete>\n</form>\n",
                styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    AutocompletePlainInputExample.prototype.control;
    /** @type {?} */
    AutocompletePlainInputExample.prototype.streets;
    /** @type {?} */
    AutocompletePlainInputExample.prototype.filteredStreets;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLXBsYWluLWlucHV0LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS1wbGFpbi1pbnB1dC9hdXRvY29tcGxldGUtcGxhaW4taW5wdXQtZXhhbXBsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQVU5QyxNQUFNLE9BQU8sNkJBQTZCO0lBTDFDO1FBTUUsWUFBTyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFDNUIsWUFBTyxHQUFhLENBQUMsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBa0J6RixDQUFDOzs7O0lBZkMsUUFBUTtRQUNOLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUNuRCxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQ2IsR0FBRzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUNsQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sT0FBTyxDQUFDLEtBQWE7O2NBQ3JCLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQztRQUMvQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUMsQ0FBQztJQUMzRixDQUFDOzs7Ozs7SUFFTyxlQUFlLENBQUMsS0FBYTtRQUNuQyxPQUFPLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7OztZQXhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtDQUFrQztnQkFDNUMsd1dBQW9EOzthQUVyRDs7OztJQUVDLGdEQUE0Qjs7SUFDNUIsZ0RBQXVGOztJQUN2Rix3REFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge3N0YXJ0V2l0aCwgbWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8qKlxuICogQHRpdGxlIFBsYWluIGlucHV0IGF1dG9jb21wbGV0ZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdXRvY29tcGxldGUtcGxhaW4taW5wdXQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnYXV0b2NvbXBsZXRlLXBsYWluLWlucHV0LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydhdXRvY29tcGxldGUtcGxhaW4taW5wdXQtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQXV0b2NvbXBsZXRlUGxhaW5JbnB1dEV4YW1wbGUgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG4gIHN0cmVldHM6IHN0cmluZ1tdID0gWydDaGFtcHMtw4lseXPDqWVzJywgJ0xvbWJhcmQgU3RyZWV0JywgJ0FiYmV5IFJvYWQnLCAnRmlmdGggQXZlbnVlJ107XG4gIGZpbHRlcmVkU3RyZWV0czogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5maWx0ZXJlZFN0cmVldHMgPSB0aGlzLmNvbnRyb2wudmFsdWVDaGFuZ2VzLnBpcGUoXG4gICAgICBzdGFydFdpdGgoJycpLFxuICAgICAgbWFwKHZhbHVlID0+IHRoaXMuX2ZpbHRlcih2YWx1ZSkpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlcih2YWx1ZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGZpbHRlclZhbHVlID0gdGhpcy5fbm9ybWFsaXplVmFsdWUodmFsdWUpO1xuICAgIHJldHVybiB0aGlzLnN0cmVldHMuZmlsdGVyKHN0cmVldCA9PiB0aGlzLl9ub3JtYWxpemVWYWx1ZShzdHJlZXQpLmluY2x1ZGVzKGZpbHRlclZhbHVlKSk7XG4gIH1cblxuICBwcml2YXRlIF9ub3JtYWxpemVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdmFsdWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMvZywgJycpO1xuICB9XG59XG4iXX0=