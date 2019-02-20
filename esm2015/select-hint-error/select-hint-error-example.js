/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
/**
 * @record
 */
export function Animal() { }
if (false) {
    /** @type {?} */
    Animal.prototype.name;
    /** @type {?} */
    Animal.prototype.sound;
}
/**
 * \@title Select with form field features
 */
export class SelectHintErrorExample {
    constructor() {
        this.animalControl = new FormControl('', [Validators.required]);
        this.selectFormControl = new FormControl('', Validators.required);
        this.animals = [
            { name: 'Dog', sound: 'Woof!' },
            { name: 'Cat', sound: 'Meow!' },
            { name: 'Cow', sound: 'Moo!' },
            { name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!' },
        ];
    }
}
SelectHintErrorExample.decorators = [
    { type: Component, args: [{
                selector: 'select-hint-error-example',
                template: "<h4>mat select</h4>\n<mat-form-field>\n  <mat-label>Favorite animal</mat-label>\n  <mat-select [formControl]=\"animalControl\" required>\n    <mat-option>--</mat-option>\n    <mat-option *ngFor=\"let animal of animals\" [value]=\"animal\">\n      {{animal.name}}\n    </mat-option>\n  </mat-select>\n  <mat-error *ngIf=\"animalControl.hasError('required')\">Please choose an animal</mat-error>\n  <mat-hint>{{animalControl.value?.sound}}</mat-hint>\n</mat-form-field>\n\n<h4>native html select</h4>\n<mat-form-field>\n  <mat-label>Select your car (required)</mat-label>\n  <select matNativeControl required [formControl]=\"selectFormControl\">\n    <option label=\"--select something --\"></option>\n    <option value=\"saab\">Saab</option>\n    <option value=\"mercedes\">Mercedes</option>\n    <option value=\"audi\">Audi</option>\n  </select>\n  <mat-error *ngIf=\"selectFormControl.hasError('required')\">\n    This field is required\n  </mat-error>\n  <mat-hint>You can pick up your favorite car here</mat-hint>\n</mat-form-field>\n\n",
                styles: ["/** No CSS for this example */\n"]
            }] }
];
if (false) {
    /** @type {?} */
    SelectHintErrorExample.prototype.animalControl;
    /** @type {?} */
    SelectHintErrorExample.prototype.selectFormControl;
    /** @type {?} */
    SelectHintErrorExample.prototype.animals;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWhpbnQtZXJyb3ItZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9zZWxlY3QtaGludC1lcnJvci9zZWxlY3QtaGludC1lcnJvci1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUUsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFdkQsNEJBR0M7OztJQUZDLHNCQUFhOztJQUNiLHVCQUFjOzs7OztBQVNoQixNQUFNLE9BQU8sc0JBQXNCO0lBTG5DO1FBTUUsa0JBQWEsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUMzRCxzQkFBaUIsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdELFlBQU8sR0FBYTtZQUNsQixFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBQztZQUM3QixFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBQztZQUM3QixFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQztZQUM1QixFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLHdCQUF3QixFQUFDO1NBQy9DLENBQUM7SUFDSixDQUFDOzs7WUFkQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsMmhDQUE2Qzs7YUFFOUM7Ozs7SUFFQywrQ0FBMkQ7O0lBQzNELG1EQUE2RDs7SUFDN0QseUNBS0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW5pbWFsIHtcbiAgbmFtZTogc3RyaW5nO1xuICBzb3VuZDogc3RyaW5nO1xufVxuXG4vKiogQHRpdGxlIFNlbGVjdCB3aXRoIGZvcm0gZmllbGQgZmVhdHVyZXMgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlbGVjdC1oaW50LWVycm9yLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NlbGVjdC1oaW50LWVycm9yLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzZWxlY3QtaGludC1lcnJvci1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RIaW50RXJyb3JFeGFtcGxlIHtcbiAgYW5pbWFsQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKTtcbiAgc2VsZWN0Rm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICBhbmltYWxzOiBBbmltYWxbXSA9IFtcbiAgICB7bmFtZTogJ0RvZycsIHNvdW5kOiAnV29vZiEnfSxcbiAgICB7bmFtZTogJ0NhdCcsIHNvdW5kOiAnTWVvdyEnfSxcbiAgICB7bmFtZTogJ0NvdycsIHNvdW5kOiAnTW9vISd9LFxuICAgIHtuYW1lOiAnRm94Jywgc291bmQ6ICdXYS1wYS1wYS1wYS1wYS1wYS1wb3chJ30sXG4gIF07XG59XG4iXX0=