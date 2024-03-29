import {Component} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';
import {LayoutService} from './layout/service/app.layout.service';
@Component({
    selector: 'app-root',
    template: '<router-outlet></router-outlet>'
})
export class AppComponent {

    menuMode = 'static';

    constructor(private primengConfig: PrimeNGConfig, private layoutService: LayoutService) { }

    ngOnInit() {
        this.primengConfig.ripple = true;
        document.documentElement.style.fontSize = '14px';

        //optional configuration with the default configuration
        this.layoutService.config = {
            ripple: false,                      //toggles ripple on and off
            inputStyle: 'outlined',             //default style for input elements
            menuMode: 'static',                 //layout mode of the menu, valid values are "static" and "overlay"
            colorScheme: 'dark',               //color scheme of the template, valid values are "light" and "dark"
            theme: 'bootstrap4-dark-purple',         //default component theme for PrimeNG
            scale: 14                           //size of the body font size to scale the whole application
        };
    }
}
