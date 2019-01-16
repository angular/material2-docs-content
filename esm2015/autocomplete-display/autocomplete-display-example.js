/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
/**
 * @record
 */
export function User() { }
if (false) {
    /** @type {?} */
    User.prototype.name;
}
/**
 * \@title Display value autocomplete
 */
export class AutocompleteDisplayExample {
    constructor() {
        this.myControl = new FormControl();
        this.options = [
            { name: 'Mary' },
            { name: 'Shelley' },
            { name: 'Igor' }
        ];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges
            .pipe(startWith(''), map(value => typeof value === 'string' ? value : value.name), map(name => name ? this._filter(name) : this.options.slice()));
    }
    /**
     * @param {?=} user
     * @return {?}
     */
    displayFn(user) {
        return user ? user.name : undefined;
    }
    /**
     * @private
     * @param {?} name
     * @return {?}
     */
    _filter(name) {
        /** @type {?} */
        const filterValue = name.toLowerCase();
        return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
    }
}
AutocompleteDisplayExample.decorators = [
    { type: Component, args: [{
                selector: 'autocomplete-display-example',
                template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input type=\"text\" placeholder=\"Assignee\" aria-label=\"Assignee\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n    <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n        {{option.name}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n",
                styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    AutocompleteDisplayExample.prototype.myControl;
    /** @type {?} */
    AutocompleteDisplayExample.prototype.options;
    /** @type {?} */
    AutocompleteDisplayExample.prototype.filteredOptions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLWRpc3BsYXktZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9hdXRvY29tcGxldGUtZGlzcGxheS9hdXRvY29tcGxldGUtZGlzcGxheS1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUMsR0FBRyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRTlDLDBCQUVDOzs7SUFEQyxvQkFBYTs7Ozs7QUFXZixNQUFNLE9BQU8sMEJBQTBCO0lBTHZDO1FBTUUsY0FBUyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFDOUIsWUFBTyxHQUFXO1lBQ2hCLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQztZQUNkLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBQztZQUNqQixFQUFDLElBQUksRUFBRSxNQUFNLEVBQUM7U0FDZixDQUFDO0lBcUJKLENBQUM7Ozs7SUFsQkMsUUFBUTtRQUNOLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZO2FBQy9DLElBQUksQ0FDSCxTQUFTLENBQWdCLEVBQUUsQ0FBQyxFQUM1QixHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUM1RCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FDOUQsQ0FBQztJQUNOLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLElBQVc7UUFDbkIsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN0QyxDQUFDOzs7Ozs7SUFFTyxPQUFPLENBQUMsSUFBWTs7Y0FDcEIsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUU7UUFFdEMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzdGLENBQUM7OztZQS9CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsbWZBQWdEOzthQUVqRDs7OztJQUVDLCtDQUE4Qjs7SUFDOUIsNkNBSUU7O0lBQ0YscURBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHttYXAsIHN0YXJ0V2l0aH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXIge1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQHRpdGxlIERpc3BsYXkgdmFsdWUgYXV0b2NvbXBsZXRlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F1dG9jb21wbGV0ZS1kaXNwbGF5LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2F1dG9jb21wbGV0ZS1kaXNwbGF5LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydhdXRvY29tcGxldGUtZGlzcGxheS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVEaXNwbGF5RXhhbXBsZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG15Q29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICBvcHRpb25zOiBVc2VyW10gPSBbXG4gICAge25hbWU6ICdNYXJ5J30sXG4gICAge25hbWU6ICdTaGVsbGV5J30sXG4gICAge25hbWU6ICdJZ29yJ31cbiAgXTtcbiAgZmlsdGVyZWRPcHRpb25zOiBPYnNlcnZhYmxlPFVzZXJbXT47XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMgPSB0aGlzLm15Q29udHJvbC52YWx1ZUNoYW5nZXNcbiAgICAgIC5waXBlKFxuICAgICAgICBzdGFydFdpdGg8c3RyaW5nIHwgVXNlcj4oJycpLFxuICAgICAgICBtYXAodmFsdWUgPT4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogdmFsdWUubmFtZSksXG4gICAgICAgIG1hcChuYW1lID0+IG5hbWUgPyB0aGlzLl9maWx0ZXIobmFtZSkgOiB0aGlzLm9wdGlvbnMuc2xpY2UoKSlcbiAgICAgICk7XG4gIH1cblxuICBkaXNwbGF5Rm4odXNlcj86IFVzZXIpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB1c2VyID8gdXNlci5uYW1lIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyKG5hbWU6IHN0cmluZyk6IFVzZXJbXSB7XG4gICAgY29uc3QgZmlsdGVyVmFsdWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKGZpbHRlclZhbHVlKSA9PT0gMCk7XG4gIH1cbn1cbiJdfQ==