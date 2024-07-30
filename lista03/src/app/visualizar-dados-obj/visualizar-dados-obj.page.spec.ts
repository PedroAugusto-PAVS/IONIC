import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisualizarDadosObjPage } from './visualizar-dados-obj.page';

describe('VisualizarDadosObjPage', () => {
  let component: VisualizarDadosObjPage;
  let fixture: ComponentFixture<VisualizarDadosObjPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarDadosObjPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
