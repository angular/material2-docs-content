import { BottomSheetOverviewExampleSheet, BottomSheetOverviewExample } from './bottom-sheet-overview/bottom-sheet-overview-example';
import { DatepickerLocaleExample } from './datepicker-locale/datepicker-locale-example';
import { DialogContentExample } from './dialog-content/dialog-content-example';
import { DialogOverviewExampleDialog } from './dialog-overview/dialog-overview-example';
import { MyTelInput } from './form-field-custom-control/form-field-custom-control-example';
import { FormFieldLabelExample } from './form-field-label/form-field-label-example';
import { IconSvgExample } from './icon-svg/icon-svg-example';
import { SidenavResponsiveExample } from './sidenav-responsive/sidenav-responsive-example';
import { SlideToggleFormsExample } from './slide-toggle-forms/slide-toggle-forms-example';
import { SnackBarOverviewExample } from './snack-bar-overview/snack-bar-overview-example';
import { StepperOverviewExample } from './stepper-overview/stepper-overview-example';
import { TableHttpExample } from './table-http/table-http-example';
import { TreeFlatOverviewExample } from './tree-flat-overview/tree-flat-overview-example';
import { TreeNestedOverviewExample } from './tree-nested-overview/tree-nested-overview-example';
export interface LiveExample {
    title: string;
    component: any;
    additionalFiles?: string[];
    selectorName?: string;
}
export declare const EXAMPLE_COMPONENTS: {
    [key: string]: LiveExample;
};
export declare const EXAMPLE_LIST: (typeof BottomSheetOverviewExample | typeof BottomSheetOverviewExampleSheet | typeof DatepickerLocaleExample | typeof DialogContentExample | typeof DialogOverviewExampleDialog | typeof MyTelInput | typeof FormFieldLabelExample | typeof IconSvgExample | typeof SidenavResponsiveExample | typeof SlideToggleFormsExample | typeof SnackBarOverviewExample | typeof StepperOverviewExample | typeof TableHttpExample | typeof TreeFlatOverviewExample | typeof TreeNestedOverviewExample)[];
export declare class ExampleModule {
}
