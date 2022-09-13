import * as i0 from '@angular/core';
import * as i7 from '@angular/cdk/menu';
import * as i8 from '@angular/common';

/** @title Context menu. */
export declare class CdkMenuContextExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkMenuContextExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkMenuContextExample, "cdk-menu-context-example", ["cdkMenuContextExample"], {}, {}, never, never, false, never>;
}

export declare class CdkMenuExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkMenuExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CdkMenuExamplesModule, [typeof i1.CdkMenuStandaloneMenuExample, typeof i2.CdkMenuMenubarExample, typeof i3.CdkMenuInlineExample, typeof i4.CdkMenuContextExample, typeof i5.CdkMenuNestedContextExample, typeof i6.CdkMenuStandaloneStatefulMenuExample], [typeof i7.CdkMenuModule, typeof i8.CommonModule], [typeof i1.CdkMenuStandaloneMenuExample, typeof i2.CdkMenuMenubarExample, typeof i3.CdkMenuInlineExample, typeof i4.CdkMenuContextExample, typeof i5.CdkMenuNestedContextExample, typeof i6.CdkMenuStandaloneStatefulMenuExample]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CdkMenuExamplesModule>;
}

/** @title Gmail inline menu. */
export declare class CdkMenuInlineExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkMenuInlineExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkMenuInlineExample, "cdk-menu-inline-example", ["cdkMenuInlineExample"], {}, {}, never, never, false, never>;
}

/** @title Google Docs Menu Bar. */
export declare class CdkMenuMenubarExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkMenuMenubarExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkMenuMenubarExample, "cdk-menu-menubar-example", ["cdkMenuMenubarExample"], {}, {}, never, never, false, never>;
}

/** @title Nested context menus. */
export declare class CdkMenuNestedContextExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkMenuNestedContextExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkMenuNestedContextExample, "cdk-menu-nested-context-example", ["cdkMenuNestedContextExample"], {}, {}, never, never, false, never>;
}

/** @title Menu with Standalone Trigger. */
export declare class CdkMenuStandaloneMenuExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkMenuStandaloneMenuExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkMenuStandaloneMenuExample, "cdk-menu-standalone-menu-example", never, {}, {}, never, never, false, never>;
}

/** @title Stateful Menu with Standalone Trigger. */
export declare class CdkMenuStandaloneStatefulMenuExample {
    bold: boolean;
    italic: boolean;
    sizes: string[];
    selectedSize: string | undefined;
    reset(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkMenuStandaloneStatefulMenuExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkMenuStandaloneStatefulMenuExample, "cdk-menu-standalone-stateful-menu-example", never, {}, {}, never, never, false, never>;
}

declare namespace i1 {
    export {
        CdkMenuStandaloneMenuExample
    }
}

declare namespace i2 {
    export {
        CdkMenuMenubarExample
    }
}

declare namespace i3 {
    export {
        CdkMenuInlineExample
    }
}

declare namespace i4 {
    export {
        CdkMenuContextExample
    }
}

declare namespace i5 {
    export {
        CdkMenuNestedContextExample
    }
}

declare namespace i6 {
    export {
        CdkMenuStandaloneStatefulMenuExample
    }
}

export { }
