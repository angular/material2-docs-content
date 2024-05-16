import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {MatButtonToggleGroupHarness} from '@angular/material/button-toggle/testing';
import {HarnessLoader} from '@angular/cdk/testing';
import {ButtonToggleHarnessExample} from './button-toggle-harness-example';

describe('ButtonToggleHarnessExample', () => {
  let fixture: ComponentFixture<ButtonToggleHarnessExample>;
  let loader: HarnessLoader;

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonToggleHarnessExample);
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should load all button toggle group harnesses', async () => {
    const groups = await loader.getAllHarnesses(MatButtonToggleGroupHarness);
    expect(groups.length).toBe(1);
  });

  it('should load the toggles inside the group', async () => {
    const group = await loader.getHarness(MatButtonToggleGroupHarness);
    const toggles = await group.getToggles();
    expect(toggles.length).toBe(2);
  });

  it('should get whether the group is disabled', async () => {
    const group = await loader.getHarness(MatButtonToggleGroupHarness);
    expect(await group.isDisabled()).toBe(false);
    fixture.componentInstance.disabled.set(true);
    expect(await group.isDisabled()).toBe(true);
  });

  it('should get the group appearance', async () => {
    const group = await loader.getHarness(MatButtonToggleGroupHarness);
    expect(await group.getAppearance()).toBe('standard');
    fixture.componentInstance.appearance.set('legacy');
    expect(await group.getAppearance()).toBe('legacy');
  });
});
