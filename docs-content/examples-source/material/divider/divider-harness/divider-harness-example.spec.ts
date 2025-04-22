import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {MatDividerHarness} from '@angular/material/divider/testing';
import {HarnessLoader} from '@angular/cdk/testing';
import {DividerHarnessExample} from './divider-harness-example';

describe('DividerHarnessExample', () => {
  let fixture: ComponentFixture<DividerHarnessExample>;
  let loader: HarnessLoader;

  beforeEach(() => {
    fixture = TestBed.createComponent(DividerHarnessExample);
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should load all divider harnesses', async () => {
    const dividers = await loader.getAllHarnesses(MatDividerHarness);
    expect(dividers.length).toBe(2);
  });

  it('should check if divider is inset', async () => {
    const dividers = await loader.getAllHarnesses(MatDividerHarness);
    expect(await dividers[0].isInset()).toBe(false);
    expect(await dividers[1].isInset()).toBe(true);
  });

  it('should get divider orientation', async () => {
    const dividers = await loader.getAllHarnesses(MatDividerHarness);
    expect(await dividers[0].getOrientation()).toBe('horizontal');
    expect(await dividers[1].getOrientation()).toBe('vertical');
  });
});
