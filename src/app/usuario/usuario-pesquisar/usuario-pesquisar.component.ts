
import { Component, OnInit } from '@angular/core';

import {TableModule} from 'primeng/table';
import { Car } from './../../model/car';
import { UsuarioService } from './../usuario.service';

@Component({
  selector: 'app-usuario-pesquisar',
  templateUrl: './usuario-pesquisar.component.html',
  styleUrls: ['./usuario-pesquisar.component.scss']
})
export class UsuarioPesquisarComponent implements OnInit {

    cars: Car[];

    cols: any[];

    constructor(private carService: UsuarioService) { }

    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars = cars);

        this.cols = [
            { field: 'vin', header: 'Vin' },
            {field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    }

}
