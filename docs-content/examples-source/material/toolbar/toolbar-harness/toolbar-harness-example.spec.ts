import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {MatToolbarHarness} from '@angular/material/toolbar/testing';
import {HarnessLoader} from '@angular/cdk/testing';
import {ToolbarHarnessExample} from './toolbar-harness-example';

describe('ToolbarHarnessExample', () => {
  let fixture: ComponentFixture<ToolbarHarnessExample>;
  let loader: HarnessLoader;

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarHarnessExample);
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should find all toolbars', async () => {
    const toolbars = await loader.getAllHarnesses(MatToolbarHarness);

    expect(toolbars.length).toBe(2);
  });

  it('should find toolbar with text', async () => {
    const toolbars = await loader.getAllHarnesses(MatToolbarHarness.with({text: 'My App'}));

    expect(toolbars.length).toBe(1);
    expect(await toolbars[0].hasMultipleRows()).toBeFalse();
  });

  it('should find toolbar with regex', async () => {
    const toolbars = await loader.getAllHarnesses(MatToolbarHarness.with({text: /Row/}));

    expect(toolbars.length).toBe(1);
    expect(await toolbars[0].hasMultipleRows()).toBeTrue();
  });

  it('should get toolbar text', async () => {
    const toolbars = await loader.getAllHarnesses(MatToolbarHarness);

    expect(await toolbars[0].getRowsAsText()).toEqual(['My App']);
    expect(await toolbars[1].getRowsAsText()).toEqual(['Row 1', 'Row 2 Button 1  Button 2']);
  });
});
