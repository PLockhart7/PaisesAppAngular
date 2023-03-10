import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = [ 'EU','EFTA','CARICOM','AU','PA','EEU','AL','ASEAN','USAN','NAFTA','SAARC','CEFTA' ];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  getClaseCSS(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary'
  }

  activarRegion(region: string){

    if(region === this.regionActiva) {return;}

    this.regionActiva = region;
    this.paises= [];
    this.paisService.buscarRegion(region).subscribe(paises => this.paises = paises);
  }

}
