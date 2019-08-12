import {Component, OnInit} from '@angular/core';
import {CurrencyService} from '../services/currency.service';
import {CurrencyType} from '../enums/currency-type.enum';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private currencyService: CurrencyService) {
  }

  public async ngOnInit() {
    const selectedCart: [{price: number}] = [
      { price: 20 },
      { price: 45 },
      { price: 67 },
      { price: 1305 }
    ];
    console.log("TotalCartPrice", await this.getTotalCartPrice(this.cartSum(selectedCart)));
  }

  async getTotalCartPrice(price: number) {
    return {
      rubles: await this.getPriceForCurrency(price, CurrencyType.rubles),
      euros: await this.getPriceForCurrency(price, CurrencyType.euros),
      dollars: await this.getPriceForCurrency(price, CurrencyType.dollars),
      pounds: await this.getPriceForCurrency(price, CurrencyType.pounds),
      yens: await this.getPriceForCurrency(price, CurrencyType.yens)
    }
  }

  async getPriceForCurrency(price: number, currency: CurrencyType) {
    return await this.currencyService.Get(currency).toPromise().then(x => x * price);
  }

  cartSum(cart :[{price: number}]) {
    return cart.map(x => x.price).reduce((a,b) => a + b, 0);
  }

}
