import { DatepickerLocaleExample } from './datepicker-locale/datepicker-locale-example';
import { DialogContentExample } from './dialog-content/dialog-content-example';
import { DialogOverviewExampleDialog } from './dialog-overview/dialog-overview-example';
import { MyTelInput } from './form-field-custom-control/form-field-custom-control-example';
import { FormFieldLabelExample } from './form-field-label/form-field-label-example';
import { IconSvgExample } from './icon-svg-example/icon-svg-example';
import { SidenavResponsiveExample } from './sidenav-responsive/sidenav-responsive-example';
import { SlideToggleFormsExample } from './slide-toggle-forms/slide-toggle-forms-example';
import { SnackBarOverviewExample } from './snack-bar-overview/snack-bar-overview-example';
import { StepperOverviewExample } from './stepper-overview/stepper-overview-example';
import { TableHttpExample } from './table-http/table-http-example';
export interface LiveExample {
    title: string;
    component: any;
    additionalFiles?: string[];
    selectorName?: string;
}
export declare const EXAMPLE_COMPONENTS: {
    [key: string]: LiveExample;
};
export declare const EXAMPLE_LIST: (typeof DatepickerLocaleExample | typeof DialogContentExample | typeof DialogOverviewExampleDialog | typeof MyTelInput | typeof FormFieldLabelExample | typeof IconSvgExample | typeof SidenavResponsiveExample | typeof SlideToggleFormsExample | typeof SnackBarOverviewExample | typeof StepperOverviewExample | typeof TableHttpExample)[];
export declare class ExampleModule {
}
