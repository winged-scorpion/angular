import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-portfolio-item',
  templateUrl: './add-portfolio-item.component.html',
  styleUrls: ['./add-portfolio-item.component.scss']
})
export class AddPortfolioItemComponent implements OnInit {
  public name: any;
  public img: any;
  public engine: any;
  public link: any;
  public pDescription: any;
  constructor() { }
  addItem() {
    console.log(this);

    // $.ajax({
    //   method: 'POST',
    //   url: "https://winged-scorpion.ru/editPortfolio.php",
    //   dataType: 'json',
    //   data: {
    //     status: true,
    //     name: this.name,
    //     img: this.img,
    //     engine: this.engine,
    //     link: this.link,
    //     pDescription:this.pDescription
    //   },
    //   cache: false,
    //   success: function (data) {
    //     console.log(data,'test')
    //
    //   }
    // });
  }

  ngOnInit() {
  }

}
